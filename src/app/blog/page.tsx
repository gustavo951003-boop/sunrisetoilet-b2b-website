import type { Metadata } from "next";
import Link from "next/link";
import { BlogPostCard } from "@/components/blog/BlogPostCard";
import { PageHero } from "@/components/site/PageHero";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import { getEnglishPosts } from "@/sanity/queries";
import type { BlogPostSummary } from "@/sanity/types";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Portable Toilet Guides & Buyer Resources",
  description:
    "Practical portable toilet buying guides for rental fleets, distributors and project buyers, covering product selection, site use, compliance review and procurement planning.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Portable Toilet Guides & Buyer Resources",
    description:
      "Portable sanitation selection, operations and procurement guidance from Sunrise.",
    url: "/blog",
    type: "website",
  },
};

async function loadPosts(): Promise<BlogPostSummary[]> {
  try {
    return await getEnglishPosts();
  } catch (error) {
    console.error("Unable to load published Sanity posts.", error);
    return [];
  }
}

export default async function BlogPage() {
  const posts = await loadPosts();

  return (
    <main className="blog-index-page">
      <SiteHeader />
      <PageHero
        kicker="Buyer Resources"
        title="Portable Toilet Guides for Fleet and Project Buyers"
        description="Practical guidance for comparing portable sanitation models, planning fleet purchases and reviewing supplier documents before your next order."
        backgroundImage="/images/site/hero-verified-workshop-nosub.webp"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Blog" }]}
        primaryCTA={{ label: "View Product Range", href: "/products" }}
        secondaryCTA={{ label: "Request Factory Quote", href: "/contact" }}
      />

      <section className="blog-index-section" aria-labelledby="blog-index-heading">
        <div className="blog-index-heading">
          <span className="section-kicker">BUYER GUIDES</span>
          <h2 id="blog-index-heading">Portable Sanitation Buying Guides</h2>
          <p>
            Product selection, rental fleet operations and procurement information for
            distributors, contractors and project teams.
          </p>
        </div>

        {posts.length ? (
          <div className="blog-card-grid">
            {posts.map((post) => (
              <BlogPostCard post={post} key={post._id} />
            ))}
          </div>
        ) : (
          <div className="blog-empty-state">
            <h2>No buyer guides have been published yet.</h2>
            <p>Published English articles from the Sunrise content team will appear here.</p>
          </div>
        )}
      </section>

      <section className="blog-final-cta" aria-label="Discuss your portable sanitation project">
        <div>
          <span className="section-kicker">PROJECT SUPPORT</span>
          <h2>Need product data for an active purchase?</h2>
          <p>
            Share your required model, quantity and destination market for specifications,
            packing data and a factory quotation.
          </p>
        </div>
        <div className="blog-final-actions">
          <Link className="button button-primary" href="/contact">
            Request Factory Quote
          </Link>
          <Link className="button button-light" href="/resources">
            View Buyer Documents
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
