import type { Metadata } from "next";
import Link from "next/link";
import { draftMode } from "next/headers";
import { notFound } from "next/navigation";
import { cache } from "react";
import { BlogPostCard } from "@/components/blog/BlogPostCard";
import { PortableTextRenderer } from "@/components/blog/PortableTextRenderer";
import { SanityImage } from "@/components/blog/SanityImage";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import {
  getEnglishPost,
  getEnglishPostSlugs,
  getEnglishPreviewPost,
} from "@/sanity/queries";
import type { BlogPost, SanityFaqBlock, SanityTextBlock } from "@/sanity/types";

export const revalidate = 60;
export const dynamicParams = true;

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

function normalizeCanonicalUrl(canonicalUrl: string | undefined, slug: string) {
  if (!canonicalUrl) return `/blog/${slug}`;

  return canonicalUrl.replace(
    "https://sunrisetoilet.com/en/blog/",
    "https://sunrisetoilet.com/blog/",
  );
}

function formatPostDate(date?: string) {
  if (!date) return null;

  return new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
}

function textBlocksToPlainText(blocks?: SanityTextBlock[]) {
  return (blocks || [])
    .flatMap((block) => block.children || [])
    .map((span) => span.text)
    .join(" ")
    .trim();
}

function getFaqItems(post: BlogPost) {
  return (post.body || [])
    .filter((block): block is SanityFaqBlock => block._type === "faqSection")
    .flatMap((block) => block.items || [])
    .filter((item) => item.question && textBlocksToPlainText(item.answer));
}

function serializeJsonLd(value: unknown) {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}

const loadPost = cache(async (slug: string, preview: boolean) => {
  try {
    return await (preview ? getEnglishPreviewPost(slug) : getEnglishPost(slug));
  } catch (error) {
    console.error(`Unable to load Sanity ${preview ? "preview" : "published"} post: ${slug}`, error);
    return null;
  }
});

export async function generateStaticParams() {
  try {
    const slugs = await getEnglishPostSlugs();
    return slugs.map((slug) => ({ slug }));
  } catch (error) {
    console.error("Unable to load Sanity slugs during build.", error);
    return [];
  }
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const isPreview = (await draftMode()).isEnabled;
  const post = await loadPost(slug, isPreview);

  if (!post) {
    return isPreview ? { robots: { index: false, follow: false } } : {};
  }

  const title = post.seoTitle || post.title;
  const description = post.metaDescription || post.excerpt;
  const image = post.coverImage?.asset?.url;

  return {
    title,
    description,
    alternates: {
      canonical: normalizeCanonicalUrl(post.canonicalUrl, post.slug),
    },
    robots: isPreview
      ? { index: false, follow: false, noarchive: true }
      : post.noIndex
        ? { index: false, follow: true }
        : { index: true, follow: true },
    openGraph: {
      type: "article",
      title,
      description,
      publishedTime: post.publishedAt,
      authors: post.author?.name ? [post.author.name] : undefined,
      images: image
        ? [
            {
              url: image,
              alt: post.coverImage?.alt || post.title,
            },
          ]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: image ? [image] : undefined,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const isPreview = (await draftMode()).isEnabled;
  const post = await loadPost(slug, isPreview);

  if (!post) notFound();

  const publishedDate = post.publishedAt || post._updatedAt;
  const formattedDate = formatPostDate(publishedDate);
  const relatedPosts = (post.relatedPosts || []).filter(
    (relatedPost): relatedPost is NonNullable<typeof relatedPost> =>
      Boolean(relatedPost && relatedPost.language === "en"),
  ).slice(0, 3);
  const faqItems = getFaqItems(post);
  const canonicalUrl = normalizeCanonicalUrl(post.canonicalUrl, post.slug);
  const absoluteCanonicalUrl = canonicalUrl.startsWith("http")
    ? canonicalUrl
    : `https://sunrisetoilet.com${canonicalUrl}`;
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription || post.excerpt,
    datePublished: publishedDate,
    dateModified: post._updatedAt,
    mainEntityOfPage: absoluteCanonicalUrl,
    image: post.coverImage?.asset?.url,
    author: post.author?.name
      ? { "@type": "Person", name: post.author.name }
      : { "@type": "Organization", name: "Sunrise Portable Toilets" },
    publisher: {
      "@type": "Organization",
      name: "Ningbo Sunrise Environmental Protection Solution CO.,LTD",
      url: "https://sunrisetoilet.com",
    },
  };
  const faqJsonLd = faqItems.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqItems.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: textBlocksToPlainText(item.answer),
          },
        })),
      }
    : null;

  return (
    <main className="blog-post-page">
      <SiteHeader />

      {isPreview ? (
        <div className="draft-preview-bar" role="status">
          <span>You are previewing unpublished Sanity content.</span>
          <a href={`/api/draft-mode/disable?redirect=/blog/${encodeURIComponent(slug)}`}>
            Exit preview
          </a>
        </div>
      ) : null}

      <header className="article-hero">
        <div className="article-hero-inner">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: post.title },
            ]}
          />
          <span className="eyebrow">{post.category?.title || "Buyer Guide"}</span>
          <h1>{post.title}</h1>
          {post.excerpt ? <p>{post.excerpt}</p> : null}
          <div className="article-byline">
            {formattedDate ? <time dateTime={publishedDate}>{formattedDate}</time> : null}
            {post.author?.name ? <span>By {post.author.name}</span> : null}
          </div>
        </div>
      </header>

      {post.coverImage?.asset ? (
        <div className="article-cover">
          <SanityImage
            image={post.coverImage}
            alt={post.coverImage.alt || post.title}
            priority
            sizes="(max-width: 1180px) calc(100vw - 32px), 1120px"
          />
        </div>
      ) : null}

      <div className="article-layout">
        <article>
          <PortableTextRenderer value={post.body} />
        </article>
        <aside className="article-sidebar" aria-label="Article information">
          <span className="section-kicker">BUYER RESOURCE</span>
          <dl>
            {post.category?.title ? (
              <div>
                <dt>Category</dt>
                <dd>{post.category.title}</dd>
              </div>
            ) : null}
            {formattedDate ? (
              <div>
                <dt>Published</dt>
                <dd>{formattedDate}</dd>
              </div>
            ) : null}
            {post.author?.name ? (
              <div>
                <dt>Author</dt>
                <dd>{post.author.name}</dd>
              </div>
            ) : null}
          </dl>
          <h2>Discuss your project</h2>
          <p>Request model specifications, MOQ, packing data and container loading advice.</p>
          <Link className="button button-primary" href="/contact">
            Request Factory Quote
          </Link>
        </aside>
      </div>

      {post.relatedProducts?.length ? (
        <section className="article-related-products" aria-labelledby="related-products-heading">
          <div>
            <span className="section-kicker">RELATED PRODUCTS</span>
            <h2 id="related-products-heading">Products referenced in this guide</h2>
          </div>
          <div className="article-product-links">
            {post.relatedProducts.map((product) =>
              product.name && product.url ? (
                <Link href={product.url} key={product._key}>
                  <span>{product.name}</span>
                  <span aria-hidden="true">→</span>
                </Link>
              ) : null,
            )}
          </div>
        </section>
      ) : null}

      {relatedPosts.length ? (
        <section className="article-related-posts" aria-labelledby="related-posts-heading">
          <div className="article-related-heading">
            <span className="section-kicker">KEEP READING</span>
            <h2 id="related-posts-heading">Related Buyer Guides</h2>
          </div>
          <div className="blog-card-grid">
            {relatedPosts.map((relatedPost) => (
              <BlogPostCard post={relatedPost} key={relatedPost._id} />
            ))}
          </div>
        </section>
      ) : null}

      <section className="blog-final-cta" aria-label="Request product specifications">
        <div>
          <span className="section-kicker">FACTORY-DIRECT SUPPORT</span>
          <h2>Turn your product research into a clear quotation.</h2>
          <p>
            Send your target models, quantity and destination market for specifications,
            lead time and packing recommendations.
          </p>
        </div>
        <div className="blog-final-actions">
          <Link className="button button-primary" href="/contact">
            Request Factory Quote
          </Link>
          <Link className="button button-light" href="/products">
            View Product Range
          </Link>
        </div>
      </section>

      {!isPreview ? (
        <>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: serializeJsonLd(articleJsonLd) }}
          />
          {faqJsonLd ? (
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: serializeJsonLd(faqJsonLd) }}
            />
          ) : null}
        </>
      ) : null}
      <SiteFooter />
    </main>
  );
}
