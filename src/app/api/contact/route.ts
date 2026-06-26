import { NextResponse } from "next/server";
import net from "node:net";
import tls from "node:tls";
import { findCountryByInput } from "@/data/countries";

export const runtime = "nodejs";

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  country?: unknown;
  countryCode?: unknown;
  whatsapp?: unknown;
  message?: unknown;
  companyWebsite?: unknown;
};

type SmtpOptions = {
  host: string;
  port: number;
  secure: boolean;
  user: string;
  pass: string;
  from: string;
  to: string;
  replyTo: string;
  subject: string;
  html: string;
  text: string;
};

const MAX_LENGTHS = {
  name: 100,
  email: 160,
  country: 100,
  whatsapp: 60,
  message: 3000,
};
const SMTP_TIMEOUT_MS = 15000;

type ContactEmailFields = {
  name: string;
  email: string;
  country: string;
  countryCode: string;
  whatsapp: string;
  message: string;
  submittedAt: string;
};

function normalizeText(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function buildEmailHtml(fields: ContactEmailFields) {
  const rows = [
    ["Country Code", fields.countryCode],
    ["Name", fields.name || "Not provided"],
    ["Email", fields.email],
    ["Country", fields.country],
    ["WhatsApp", fields.whatsapp || "Not provided"],
    ["Comment", fields.message || "Not provided"],
    ["Source", "Sunrise website contact form"],
    ["Submitted at", fields.submittedAt],
  ];

  return `<!doctype html>
<html>
  <body style="margin:0;background:#f3f6f4;padding:32px;font-family:Arial,Helvetica,sans-serif;color:#18211d;">
    <main style="max-width:620px;margin:0 auto;background:#ffffff;border:1px solid #dfe5e1;border-radius:14px;overflow:hidden;">
      <div style="padding:28px 30px;border-bottom:1px solid #dfe5e1;">
        <p style="margin:0 0 8px;color:#087b5b;font-size:12px;font-weight:700;">SUNRISE WEBSITE</p>
        <h1 style="margin:0;font-size:22px;line-height:1.25;">You received a new message from your website contact form.</h1>
      </div>
      <div style="padding:10px 30px 26px;">
        ${rows
          .map(
            ([label, value]) => `<div style="padding:16px 0;border-bottom:1px solid #edf1ee;">
              <strong style="display:block;margin-bottom:6px;font-size:13px;color:#18211d;">${escapeHtml(label)}</strong>
              <span style="display:block;white-space:pre-wrap;font-size:15px;line-height:1.6;color:#44524b;">${escapeHtml(value)}</span>
            </div>`,
          )
          .join("")}
      </div>
    </main>
  </body>
</html>`;
}

function buildEmailText(fields: ContactEmailFields) {
  return [
    "You received a new message from your website contact form.",
    "",
    `Country Code: ${fields.countryCode}`,
    `Name: ${fields.name || "Not provided"}`,
    `Email: ${fields.email}`,
    `Country: ${fields.country}`,
    `WhatsApp: ${fields.whatsapp || "Not provided"}`,
    "",
    "Comment:",
    fields.message || "Not provided",
    "",
    "Source: Sunrise website contact form",
    `Submitted at: ${fields.submittedAt}`,
  ].join("\n");
}

function getFirstHeaderValue(headers: Headers, names: string[]) {
  for (const name of names) {
    const value = headers.get(name)?.trim();

    if (value) {
      return { name, value };
    }
  }

  return undefined;
}

function getIpCountryCode(headers: Headers) {
  const countryHeader = getFirstHeaderValue(headers, [
    "x-vercel-ip-country",
    "cf-ipcountry",
    "cloudfront-viewer-country",
    "x-country-code",
    "x-appengine-country",
    "fastly-client-country",
  ]);

  const rawCountryCode = countryHeader?.value.split(",")[0]?.trim().toUpperCase();

  if (!rawCountryCode) {
    return "Not available";
  }

  const matchedCountry = findCountryByInput(rawCountryCode);

  return matchedCountry?.code ?? "Not available";
}

function extractEmailAddress(value: string) {
  const match = value.match(/<([^>]+)>/);
  return (match?.[1] ?? value).trim();
}

function sanitizeHeader(value: string) {
  return value.replace(/[\r\n]+/g, " ").trim();
}

function encodeHeader(value: string) {
  return `=?UTF-8?B?${Buffer.from(sanitizeHeader(value), "utf8").toString("base64")}?=`;
}

function dotStuff(value: string) {
  return value.replace(/\r?\n/g, "\r\n").replace(/^\./gm, "..");
}

function createEmailMessage(options: SmtpOptions) {
  const boundary = `sunrise-contact-${Date.now()}`;

  return [
    `From: ${sanitizeHeader(options.from)}`,
    `To: ${sanitizeHeader(options.to)}`,
    `Reply-To: ${sanitizeHeader(options.replyTo)}`,
    `Subject: ${encodeHeader(options.subject)}`,
    "MIME-Version: 1.0",
    `Content-Type: multipart/alternative; boundary="${boundary}"`,
    "",
    `--${boundary}`,
    "Content-Type: text/plain; charset=UTF-8",
    "Content-Transfer-Encoding: 8bit",
    "",
    options.text,
    "",
    `--${boundary}`,
    "Content-Type: text/html; charset=UTF-8",
    "Content-Transfer-Encoding: 8bit",
    "",
    options.html,
    "",
    `--${boundary}--`,
  ].join("\r\n");
}

async function sendSmtpEmail(options: SmtpOptions) {
  const socket: net.Socket | tls.TLSSocket = options.secure
    ? tls.connect({
        host: options.host,
        port: options.port,
        servername: options.host,
      })
    : net.connect({
        host: options.host,
        port: options.port,
      });

  let buffer = "";
  socket.setTimeout(SMTP_TIMEOUT_MS, () => {
    socket.destroy(new Error("SMTP connection timed out"));
  });

  const waitForResponse = () =>
    new Promise<string>((resolve, reject) => {
      const onData = (chunk: Buffer) => {
        buffer += chunk.toString("utf8");
        const lines = buffer.split(/\r?\n/).filter(Boolean);
        const lastLine = lines.at(-1);

        if (lastLine && /^\d{3} /.test(lastLine)) {
          const response = buffer;
          buffer = "";
          cleanup();
          resolve(response);
        }
      };

      const onError = (error: Error) => {
        cleanup();
        reject(error);
      };

      const cleanup = () => {
        socket.off("data", onData);
        socket.off("error", onError);
      };

      socket.on("data", onData);
      socket.on("error", onError);
    });

  const sendCommand = async (command: string, expectedCodes: number[]) => {
    socket.write(`${command}\r\n`);
    const response = await waitForResponse();
    const code = Number(response.slice(0, 3));

    if (!expectedCodes.includes(code)) {
      throw new Error(`SMTP command failed: ${response}`);
    }
  };

  await new Promise<void>((resolve, reject) => {
    socket.once("connect", resolve);
    socket.once("secureConnect", resolve);
    socket.once("error", reject);
  });

  try {
    const greeting = await waitForResponse();
    const greetingCode = Number(greeting.slice(0, 3));

    if (greetingCode !== 220) {
      throw new Error(`SMTP greeting failed: ${greeting}`);
    }

    await sendCommand("EHLO sunrise-moulding.com", [250]);
    await sendCommand("AUTH LOGIN", [334]);
    await sendCommand(Buffer.from(options.user, "utf8").toString("base64"), [334]);
    await sendCommand(Buffer.from(options.pass, "utf8").toString("base64"), [235]);
    await sendCommand(`MAIL FROM:<${extractEmailAddress(options.from)}>`, [250]);
    await sendCommand(`RCPT TO:<${extractEmailAddress(options.to)}>`, [250, 251]);
    await sendCommand("DATA", [354]);
    socket.write(`${dotStuff(createEmailMessage(options))}\r\n.\r\n`);

    const dataResponse = await waitForResponse();
    const dataCode = Number(dataResponse.slice(0, 3));

    if (dataCode !== 250) {
      throw new Error(`SMTP data failed: ${dataResponse}`);
    }

    await sendCommand("QUIT", [221]);
  } finally {
    socket.end();
  }
}

export async function POST(request: Request) {
  let body: ContactPayload;

  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json(
      { success: false, error: "Please enter a valid email and country." },
      { status: 400 },
    );
  }

  const honeypot = normalizeText(body.companyWebsite);

  if (honeypot) {
    return NextResponse.json({ success: true });
  }

  const fields = {
    name: normalizeText(body.name),
    email: normalizeText(body.email),
    country: normalizeText(body.country),
    countryCode: normalizeText(body.countryCode).toUpperCase(),
    whatsapp: normalizeText(body.whatsapp),
    message: normalizeText(body.message),
    submittedAt: new Date().toISOString(),
  };
  const matchedCountry = findCountryByInput(fields.country);
  const matchedCountryCode = findCountryByInput(fields.countryCode);
  const ipCountryCode = getIpCountryCode(request.headers);

  const isInvalid =
    !fields.email ||
    !isValidEmail(fields.email) ||
    !fields.country ||
    !fields.countryCode ||
    !matchedCountry ||
    !matchedCountryCode ||
    matchedCountryCode.code !== matchedCountry.code ||
    fields.name.length > MAX_LENGTHS.name ||
    fields.email.length > MAX_LENGTHS.email ||
    fields.country.length > MAX_LENGTHS.country ||
    fields.whatsapp.length > MAX_LENGTHS.whatsapp ||
    fields.message.length > MAX_LENGTHS.message;

  if (isInvalid) {
    return NextResponse.json(
      { success: false, error: "Please enter a valid email and country." },
      { status: 400 },
    );
  }

  const normalizedFields = {
    ...fields,
    country: matchedCountry.name,
    countryCode: ipCountryCode,
  };

  const smtpHost = process.env.SMTP_HOST || "smtp.exmail.qq.com";
  const smtpPort = Number(process.env.SMTP_PORT || "465");
  const smtpSecure = process.env.SMTP_SECURE !== "false";
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const fromEmail = process.env.CONTACT_FROM_EMAIL || smtpUser;
  const fromAddress = `Sunrise Website <${extractEmailAddress(fromEmail ?? "")}>`;
  const toEmail = process.env.CONTACT_TO_EMAIL || "gus@sunrise-moulding.com";
  const subject = normalizedFields.country
    ? `New customer message from Sunrise website - ${normalizedFields.country}`
    : "New customer message from Sunrise website";

  if (
    !smtpUser ||
    !smtpPass ||
    !fromEmail ||
    !Number.isFinite(smtpPort) ||
    smtpPort <= 0 ||
    !isValidEmail(extractEmailAddress(fromEmail)) ||
    !isValidEmail(extractEmailAddress(toEmail))
  ) {
    return NextResponse.json(
      { success: false, error: "Message could not be sent." },
      { status: 500 },
    );
  }

  // Future improvement: add a small per-IP rate limit before sending email.
  try {
    await sendSmtpEmail({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      user: smtpUser,
      pass: smtpPass,
      from: fromAddress,
      to: toEmail,
      replyTo: normalizedFields.email,
      subject,
      html: buildEmailHtml(normalizedFields),
      text: buildEmailText(normalizedFields),
    });
  } catch {
    return NextResponse.json(
      { success: false, error: "Message could not be sent." },
      { status: 500 },
    );
  }

  return NextResponse.json({ success: true });
}
