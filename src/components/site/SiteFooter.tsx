import Link from "next/link";
import { footerProductLinks, mainNavigation } from "@/data/navigation";
import { BrandMark } from "./SiteHeader";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="section-inner site-footer-grid">
        <div className="site-footer-brand">
          <BrandMark light />
          <p>
            Sunrise manufactures HDPE portable toilets for rental fleets, distributors,
            construction projects and event supply from Ningbo, China.
          </p>
          <Link className="button button-primary" href="/contact">
            Request portable toilet factory quote
          </Link>
        </div>
        <div>
          <h2>Products</h2>
          {footerProductLinks.map((link) => (
            <Link href={link.href} key={link.href}>
              {link.label}
            </Link>
          ))}
        </div>
        <div>
          <h2>Company</h2>
          {mainNavigation
            .filter((link) => link.href !== "/")
            .map((link) => (
              <Link href={link.href} key={link.href}>
                {link.label}
              </Link>
            ))}
        </div>
        <div>
          <h2>Buyer Resources</h2>
          <Link href="/downloads/Sunrise-Catalog-2026.pdf">Download 2026 catalog</Link>
          <Link href="/resources">Certificates and test reports</Link>
          <Link href="/contact">Get product specifications</Link>
          <span>Ningbo, China</span>
        </div>
      </div>
    </footer>
  );
}
