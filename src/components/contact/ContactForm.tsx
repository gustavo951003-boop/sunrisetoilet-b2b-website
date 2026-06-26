"use client";

import { type ChangeEvent, type FormEvent, useState } from "react";
import { countryOptions } from "@/data/countries";

type ContactFormValues = {
  name: string;
  email: string;
  country: string;
  countryCode: string;
  whatsapp: string;
  message: string;
  companyWebsite: string;
};

const initialValues: ContactFormValues = {
  name: "",
  email: "",
  country: "",
  countryCode: "",
  whatsapp: "",
  message: "",
  companyWebsite: "",
};

export function ContactForm() {
  const [values, setValues] = useState<ContactFormValues>(initialValues);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setValues((current) => {
      if (name === "countryCode") {
        const matchedCountry = countryOptions.find((country) => country.code === value);

        return {
          ...current,
          country: matchedCountry?.name ?? "",
          countryCode: matchedCountry?.code ?? "",
        };
      }

      return { ...current, [name]: value };
    });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === "sending") {
      return;
    }

    setStatus("sending");
    setErrorMessage("");

    const matchedCountry = countryOptions.find(
      (country) => country.code === values.countryCode && country.name === values.country,
    );

    if (!matchedCountry) {
      setStatus("error");
      setErrorMessage("Please select a valid country from the country list.");
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...values,
          country: matchedCountry.name,
          countryCode: matchedCountry.code,
        }),
      });
      const result = (await response.json()) as { success?: boolean; error?: string };

      if (!response.ok || !result.success) {
        throw new Error(result.error ?? "Sorry, your message could not be sent.");
      }

      setStatus("success");
      setValues(initialValues);
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Sorry, your message could not be sent. Please email Sales@sunrise-moulding.com directly.",
      );
    }
  };

  const isSending = status === "sending";

  return (
    <form className="contact-form-card" onSubmit={handleSubmit}>
      <div className="contact-form-head">
        <span className="section-kicker">INQUIRY FORM</span>
        <h2>Send your product inquiry</h2>
        <p>
          Share your destination market, product category and quantity. Email and country are
          required so our sales team can reply with relevant export details.
        </p>
      </div>

      <div className="hidden-honeypot" aria-hidden="true">
        <label htmlFor="companyWebsite">Company website</label>
        <input
          id="companyWebsite"
          name="companyWebsite"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={values.companyWebsite}
          onChange={handleChange}
        />
      </div>

      <div className="contact-form-grid">
        <div className="form-field">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Your name"
            autoComplete="name"
            value={values.name}
            onChange={handleChange}
          />
        </div>

        <div className="form-field">
          <label htmlFor="email">Email *</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="you@company.com"
            autoComplete="email"
            required
            value={values.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-field">
          <label htmlFor="countryCode">Country *</label>
          <select
            id="countryCode"
            name="countryCode"
            autoComplete="country-name"
            aria-describedby="country-hint"
            required
            value={values.countryCode}
            onChange={handleChange}
          >
            <option value="">Select country</option>
            {countryOptions.map((country) => (
              <option value={country.code} key={country.code}>
                {country.name} ({country.code})
              </option>
            ))}
          </select>
          <span className="form-hint" id="country-hint">
            Choose one country from the predefined list.
          </span>
        </div>

        <div className="form-field">
          <label htmlFor="whatsapp">WhatsApp</label>
          <input
            id="whatsapp"
            name="whatsapp"
            type="tel"
            placeholder="+61 ..."
            autoComplete="tel"
            value={values.whatsapp}
            onChange={handleChange}
          />
        </div>

        <div className="form-field form-field-full">
          <label htmlFor="message">Comment (recommended)</label>
          <textarea
            id="message"
            name="message"
            placeholder="Tell us the product model, quantity, destination port or project details."
            rows={6}
            value={values.message}
            onChange={handleChange}
          />
        </div>
      </div>

      <p className="form-privacy-note">
        Your details are used only to respond to your inquiry and provide quotation support. Basic
        technical data may be used for spam prevention.
      </p>

      <button className="button button-primary contact-submit-button" type="submit" disabled={isSending}>
        {isSending ? "Sending..." : "Request Factory Quote"}
      </button>

      {status === "success" ? (
        <p className="form-status form-status-success" role="status">
          Thank you. Your inquiry has been sent. Our sales team will reply by email.
        </p>
      ) : null}

      {status === "error" ? (
        <p className="form-status form-status-error" role="alert">
          {errorMessage}
        </p>
      ) : null}
    </form>
  );
}
