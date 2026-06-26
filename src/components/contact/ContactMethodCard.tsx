import Link from "next/link";

type ContactMethodCardProps = {
  icon: "email" | "whatsapp";
  title: string;
  value: string;
  text: string;
  href: string;
};

function ContactIcon({ icon }: { icon: ContactMethodCardProps["icon"] }) {
  if (icon === "whatsapp") {
    return (
      <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">
        <path d="M10.7 27.2 4.8 29l1.9-5.7A12.1 12.1 0 1 1 10.7 27.2Z" />
        <path d="M12.5 10.2c-.3-.8-.6-.8-1-.8h-.8c-.3 0-.8.1-1.2.6s-1.6 1.6-1.6 3.8 1.7 4.4 1.9 4.7 3.2 5 7.8 6.8c3.8 1.5 4.6 1.2 5.4 1.1s2.7-1.1 3.1-2.2.4-2 .3-2.2-.4-.3-.8-.5-2.7-1.3-3.1-1.5-.7-.2-1 .2-1.1 1.5-1.4 1.8-.5.3-.9.1-1.8-.7-3.4-2.1c-1.2-1.1-2.1-2.5-2.3-2.9s0-.6.2-.8l.7-.8c.2-.3.3-.5.5-.8s.1-.6 0-.8-.9-2.1-1.3-2.9Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">
      <path d="M5 9.5h22v15H5v-15Z" />
      <path d="m6.5 11 9.5 7 9.5-7" />
      <path d="m6.5 23 7-6" />
      <path d="m25.5 23-7-6" />
    </svg>
  );
}

export function ContactMethodCard({ icon, title, value, text, href }: ContactMethodCardProps) {
  return (
    <Link className="contact-method-card" href={href}>
      <span className="contact-method-icon">
        <ContactIcon icon={icon} />
      </span>
      <span className="contact-method-content">
        <strong>{title}</strong>
        <span className="contact-method-value">{value}</span>
        <span className="contact-method-text">{text}</span>
      </span>
    </Link>
  );
}
