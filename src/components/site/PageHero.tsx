import Image from "next/image";
import Link from "next/link";
import { BreadcrumbItem, Breadcrumbs } from "./Breadcrumbs";

type PageHeroCta = {
  label: string;
  href: string;
};

type PageHeroProps = {
  kicker: string;
  title: string;
  description: string;
  backgroundImage?: string;
  backgroundAlt?: string;
  breadcrumbs?: BreadcrumbItem[];
  primaryCTA?: PageHeroCta;
  secondaryCTA?: PageHeroCta;
};

export function PageHero({
  kicker,
  title,
  description,
  backgroundImage = "/images/site/hero-yard.webp",
  backgroundAlt = "",
  breadcrumbs = [],
  primaryCTA,
  secondaryCTA,
}: PageHeroProps) {
  return (
    <section className="page-hero">
      <Image
        className="page-hero-image"
        src={backgroundImage}
        alt={backgroundAlt}
        fill
        sizes="100vw"
      />
      <div className="page-hero-overlay" />
      <div className="page-hero-inner">
        {breadcrumbs.length > 0 ? <Breadcrumbs items={breadcrumbs} /> : null}
        <span className="eyebrow">{kicker}</span>
        <h1>{title}</h1>
        <p>{description}</p>
        {primaryCTA || secondaryCTA ? (
          <div className="hero-actions">
            {primaryCTA ? (
              <Link className="button button-primary" href={primaryCTA.href}>
                {primaryCTA.label}
              </Link>
            ) : null}
            {secondaryCTA ? (
              <Link className="button button-ghost" href={secondaryCTA.href}>
                {secondaryCTA.label}
              </Link>
            ) : null}
          </div>
        ) : null}
      </div>
    </section>
  );
}
