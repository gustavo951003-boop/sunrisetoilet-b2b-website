import Image from "next/image";
import Link from "next/link";
import { SanityImage } from "./SanityImage";
import type { BlogPostSummary } from "@/sanity/types";

function formatPostDate(date?: string) {
  if (!date) return null;

  return new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date(date));
}

export function BlogPostCard({ post }: { post: BlogPostSummary }) {
  const date = formatPostDate(post.publishedAt);

  return (
    <article className="blog-card">
      <Link className="blog-card-media" href={`/blog/${post.slug}`} tabIndex={-1} aria-hidden="true">
        {post.coverImage?.asset ? (
          <SanityImage
            image={post.coverImage}
            alt={post.coverImage.alt || post.title}
            className="blog-card-image"
            sizes="(max-width: 560px) calc(100vw - 32px), (max-width: 1100px) 50vw, 380px"
          />
        ) : (
          <Image
            className="blog-card-image blog-card-placeholder"
            src="/images/site/brand-product-application.webp"
            alt=""
            width={1200}
            height={750}
            sizes="(max-width: 560px) calc(100vw - 32px), (max-width: 1100px) 50vw, 380px"
          />
        )}
      </Link>
      <div className="blog-card-content">
        <div className="blog-card-meta">
          {post.category?.title ? <span>{post.category.title}</span> : <span>Buyer Guide</span>}
          {date ? <time dateTime={post.publishedAt}>{date}</time> : null}
        </div>
        <h2>
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </h2>
        {post.excerpt ? <p>{post.excerpt}</p> : null}
        <Link className="blog-card-link" href={`/blog/${post.slug}`}>
          Read guide <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}
