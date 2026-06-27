import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { FactoryLocationCard } from "@/components/contact/FactoryLocationCard";
import { ContactMethodCard } from "@/components/contact/ContactMethodCard";
import { PageHero } from "@/components/site/PageHero";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";

export const metadata: Metadata = {
  title: "Contact Sales | Request Factory Quote",
  description:
    "Contact Sunrise for HDPE portable toilet specifications, factory quotations, catalog downloads, packing data and export support for rental fleets, distributors and project buyers.",
  alternates: {
    canonical: "/contact",
  },
};

const requestItems = [
  "Product model or category",
  "Estimated quantity",
  "Destination country or port",
  "Required options such as hand wash, urinal, shower, waste tank or accessible unit",
  "Any packing, certificate or project document requirements",
];

export default function ContactPage() {
  return (
    <main className="contact-page">
      <SiteHeader />
      <PageHero
        kicker="Contact Sunrise"
        title="Request A Factory Quote"
        description="Send your product inquiry, model requirements or project details. Our sales team will review your message and reply with available specifications, packing data and quotation support."
        backgroundImage="/images/site/case-buyers.webp"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact" },
        ]}
        primaryCTA={{ label: "Email Sales Team", href: "mailto:Sales@sunrise-moulding.com" }}
        secondaryCTA={{ label: "WhatsApp Sales", href: "https://wa.me/8618100120628" }}
      />

      <section className="contact-layout" aria-label="Contact Sunrise sales team">
        <div className="contact-support-panel">
          <div className="contact-method-grid">
            <ContactMethodCard
              icon="email"
              title="Email Sales Team"
              value="Sales@sunrise-moulding.com"
              text="Send product requirements, drawings or purchasing questions by email."
              href="mailto:Sales@sunrise-moulding.com"
            />
            <ContactMethodCard
              icon="whatsapp"
              title="WhatsApp Sales"
              value="+86 181 0012 0628"
              text="Contact our sales team for quick product discussion and quotation follow-up."
              href="https://wa.me/8618100120628"
            />
          </div>

          <div className="buyer-guidance-card">
            <span className="section-kicker">BUYER GUIDANCE</span>
            <h2>What to include in your inquiry</h2>
            <ul>
              {requestItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <ContactForm />
      </section>
      <FactoryLocationCard />
      <SiteFooter />
    </main>
  );
}
