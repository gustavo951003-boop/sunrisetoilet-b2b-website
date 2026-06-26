import Link from "next/link";

type SectionCtaProps = {
  kicker?: string;
  title: string;
  text: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export function SectionCta({
  kicker,
  title,
  text,
  primaryLabel = "Request Factory Quote",
  primaryHref = "/contact",
  secondaryLabel,
  secondaryHref,
}: SectionCtaProps) {
  return (
    <section className="section-cta">
      <div>
        {kicker ? <span className="section-kicker">{kicker}</span> : null}
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      <div className="section-cta-actions">
        <Link className="button button-primary" href={primaryHref}>
          {primaryLabel}
        </Link>
        {secondaryLabel && secondaryHref ? (
          <Link className="button button-light" href={secondaryHref}>
            {secondaryLabel}
          </Link>
        ) : null}
      </div>
    </section>
  );
}
