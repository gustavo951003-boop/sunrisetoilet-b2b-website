"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { mainNavigation } from "@/data/navigation";
import { productCategories } from "@/app/products/product-categories";

type SiteHeaderProps = {
  variant?: "transparent" | "solid";
};

export function BrandMark({ light = false }: { light?: boolean }) {
  return (
    <Link className={light ? "brand brand-light" : "brand"} href="/" aria-label="Sunrise home">
      <Image
        className="brand-logo"
        src="/images/brand/sunrise-symbol-tight.png"
        alt="Sunrise"
        width={520}
        height={396}
        sizes="58px"
      />
      <span className="brand-copy">
        <strong>Sunrise</strong>
      </span>
    </Link>
  );
}

export function SiteHeader({ variant = "solid" }: SiteHeaderProps) {
  const isTransparent = variant === "transparent";
  const [isScrolled, setIsScrolled] = useState(false);
  const isLightHeader = isTransparent && !isScrolled;

  useEffect(() => {
    if (!isTransparent) {
      return undefined;
    }

    let ticking = false;
    let animationFrameId: number | null = null;

    const updateHeaderState = () => {
      const nextScrolled = window.scrollY > 24;

      setIsScrolled((current) => (current === nextScrolled ? current : nextScrolled));
      ticking = false;
    };

    const handleScroll = () => {
      if (ticking) {
        return;
      }

      ticking = true;
      animationFrameId = window.requestAnimationFrame(updateHeaderState);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);

      if (animationFrameId !== null) {
        window.cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isTransparent]);

  return (
    <>
      <header
        className={[
          "site-header",
          isLightHeader ? "site-header-transparent" : "site-header-solid",
          isTransparent ? "site-header-home" : "",
          isScrolled ? "site-header-scrolled" : "",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <div className="header-inner">
          <BrandMark light={isLightHeader} />
          <nav className="desktop-nav" aria-label="Primary navigation">
            {mainNavigation.map((item) =>
              item.href === "/products" ? (
                <div className="nav-dropdown" key={item.href}>
                  <Link className="nav-dropdown-trigger" href={item.href}>
                    {item.label}
                  </Link>
                  <div className="nav-dropdown-panel" aria-label="Product categories">
                    {productCategories.map((category) => (
                      <Link href={`/products/category/${category.slug}`} key={category.slug}>
                        <strong>{category.menuLabel}</strong>
                        <span>{category.shortNote}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link href={item.href} key={item.href}>
                  {item.label}
                </Link>
              ),
            )}
          </nav>
          <Link className="header-cta" href="/contact">
            Request Factory Quote
          </Link>
          <details className="mobile-menu">
            <summary title="Open navigation" aria-label="Open navigation">
              <span />
              <span />
              <span />
            </summary>
            <nav aria-label="Mobile navigation">
              {mainNavigation.map((item) =>
                item.href === "/products" ? (
                  <div className="mobile-nav-group" key={item.href}>
                    <Link href={item.href}>{item.label}</Link>
                    {productCategories.map((category) => (
                      <Link
                        className="mobile-sub-link"
                        href={`/products/category/${category.slug}`}
                        key={category.slug}
                      >
                        {category.menuLabel}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link href={item.href} key={item.href}>
                    {item.label}
                  </Link>
                ),
              )}
              <Link href="/contact">Request Factory Quote</Link>
            </nav>
          </details>
        </div>
      </header>
    </>
  );
}
