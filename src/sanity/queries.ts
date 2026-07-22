import { sanityConfig, sanityRevalidateSeconds } from "./config";
import type { BlogPost, BlogPostSummary, BlogSitemapEntry } from "./types";

const defineQuery = <const Query extends string>(query: Query) => query;

const imageProjection = /* groq */ `
  alt,
  caption,
  crop,
  hotspot,
  asset->{
    _id,
    url,
    metadata{
      lqip,
      dimensions{width, height, aspectRatio}
    }
  }
`;

const postSummaryProjection = /* groq */ `
  _id,
  _updatedAt,
  language,
  title,
  "slug": slug.current,
  excerpt,
  publishedAt,
  coverImage{${imageProjection}},
  category->{title, "slug": slug.current},
  author->{name, role}
`;

export const englishPostsQuery = defineQuery(/* groq */ `
  *[
    _type == "post" &&
    language == "en" &&
    defined(slug.current)
  ] | order(publishedAt desc, _updatedAt desc) {
    ${postSummaryProjection}
  }
`);

export const englishPostSlugsQuery = defineQuery(/* groq */ `
  *[
    _type == "post" &&
    language == "en" &&
    defined(slug.current)
  ]{"slug": slug.current}
`);

export const englishPostQuery = defineQuery(/* groq */ `
  *[
    _type == "post" &&
    language == "en" &&
    slug.current == $slug
  ][0]{
    ${postSummaryProjection},
    seoTitle,
    metaDescription,
    canonicalUrl,
    "noIndex": noIndex == true,
    author->{
      name,
      role,
      bio,
      photo{${imageProjection}}
    },
    body[]{
      ...,
      _type == "block" => {
        ...,
        markDefs[]{
          ...,
          _type == "internalLink" => {
            "slug": reference->slug.current,
            "language": reference->language
          }
        }
      },
      _type == "articleImage" => {
        ${imageProjection}
      }
    },
    relatedPosts[]->{
      ${postSummaryProjection}
    },
    relatedProducts[]{_key, name, url}
  }
`);

export const englishSitemapQuery = defineQuery(/* groq */ `
  *[
    _type == "post" &&
    language == "en" &&
    defined(slug.current) &&
    noIndex != true
  ]{
    "slug": slug.current,
    _updatedAt
  }
`);

type QueryOptions = {
  params?: Record<string, string | number | boolean>;
  revalidate?: number;
  tags?: string[];
};

async function fetchSanity<Result>(
  query: string,
  { params = {}, revalidate = sanityRevalidateSeconds, tags = [] }: QueryOptions = {},
): Promise<Result> {
  const { apiVersion, dataset, projectId } = sanityConfig;
  const url = new URL(
    `https://${projectId}.apicdn.sanity.io/v${apiVersion}/data/query/${dataset}`,
  );

  url.searchParams.set("query", query);
  url.searchParams.set("perspective", "published");
  Object.entries(params).forEach(([key, value]) => {
    url.searchParams.set(`$${key}`, JSON.stringify(value));
  });

  const response = await fetch(url, {
    headers: { Accept: "application/json" },
    next: { revalidate, tags },
  });

  if (!response.ok) {
    throw new Error(`Sanity query failed with status ${response.status}.`);
  }

  const payload = (await response.json()) as { result: Result };
  return payload.result;
}

export function getEnglishPosts() {
  return fetchSanity<BlogPostSummary[]>(englishPostsQuery, {
    tags: ["blog-posts"],
  });
}

export function getEnglishPost(slug: string) {
  return fetchSanity<BlogPost | null>(englishPostQuery, {
    params: { slug },
    tags: ["blog-posts", `blog-post:${slug}`],
  });
}

export async function getEnglishPostSlugs() {
  const posts = await fetchSanity<Array<{ slug: string }>>(englishPostSlugsQuery, {
    tags: ["blog-posts"],
  });

  return posts.map(({ slug }) => slug);
}

export function getEnglishSitemapEntries() {
  return fetchSanity<BlogSitemapEntry[]>(englishSitemapQuery, {
    tags: ["blog-posts"],
  });
}
