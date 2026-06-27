This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Contact Form Email Settings

The contact form sends inquiries from the server-side API route at `/api/contact`. Do not put SMTP passwords or email API keys in client-side code.

Required production environment variables:

```bash
SMTP_HOST=smtp.exmail.qq.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=your-verified-sender@sunrise-moulding.com
SMTP_PASS=your-email-smtp-password-or-authorization-code
CONTACT_FROM_EMAIL=your-verified-sender@sunrise-moulding.com
CONTACT_TO_EMAIL=gus@sunrise-moulding.com
NEXT_PUBLIC_GOOGLE_ADS_FORM_CONVERSION_LABEL=your-google-ads-form-conversion-label
```

Notes:

- Website inquiries are sent to `gus@sunrise-moulding.com` by default.
- The email sender is displayed as `Sunrise Website`, while the actual sender mailbox comes from `CONTACT_FROM_EMAIL`.
- `CONTACT_FROM_EMAIL` must be a sender address verified by the SMTP mailbox provider.
- Customer replies use the submitted email address through the message `Reply-To` header.
- Google Ads form conversions fire after a successful contact form submission. Add only the conversion label part after `AW-11142818750/` to `NEXT_PUBLIC_GOOGLE_ADS_FORM_CONVERSION_LABEL`.
- `.env.local` is for local development only and must not be committed.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
