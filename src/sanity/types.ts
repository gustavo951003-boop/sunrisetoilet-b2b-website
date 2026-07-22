export type SanityImageValue = {
  alt?: string;
  caption?: string;
  crop?: { bottom: number; left: number; right: number; top: number };
  hotspot?: { height: number; width: number; x: number; y: number };
  asset?: {
    _id: string;
    url: string;
    metadata?: {
      lqip?: string;
      dimensions?: {
        aspectRatio?: number;
        height: number;
        width: number;
      };
    };
  };
};

export type SanityMarkDefinition = {
  _key: string;
  _type: "externalLink" | "internalLink" | string;
  href?: string;
  language?: string;
  openInNewTab?: boolean;
  slug?: string;
};

export type SanityTextSpan = {
  _key: string;
  _type: "span";
  marks?: string[];
  text: string;
};

export type SanityTextBlock = {
  _key: string;
  _type: "block";
  children?: SanityTextSpan[];
  level?: number;
  listItem?: "bullet" | "number";
  markDefs?: SanityMarkDefinition[];
  style?: "normal" | "h2" | "h3" | "blockquote";
};

export type SanityArticleImage = SanityImageValue & {
  _key: string;
  _type: "articleImage";
};

export type SanityTableBlock = {
  _key: string;
  _type: "articleTable";
  caption?: string;
  hasHeaderRow?: boolean;
  rows?: Array<{ _key: string; cells?: string[] }>;
};

export type SanityCalloutBlock = {
  _key: string;
  _type: "callout";
  content?: SanityTextBlock[];
  title?: string;
  tone?: "info" | "tip" | "warning";
};

export type SanityFaqBlock = {
  _key: string;
  _type: "faqSection";
  heading?: string;
  items?: Array<{
    _key: string;
    answer?: SanityTextBlock[];
    question?: string;
  }>;
};

export type SanityPortableTextNode =
  | SanityTextBlock
  | SanityArticleImage
  | SanityTableBlock
  | SanityCalloutBlock
  | SanityFaqBlock;

export type BlogCategory = {
  slug?: string;
  title?: string;
} | null;

export type BlogAuthor = {
  bio?: SanityTextBlock[];
  name?: string;
  photo?: SanityImageValue;
  role?: string;
} | null;

export type BlogPostSummary = {
  _id: string;
  _updatedAt: string;
  language?: string;
  author?: Pick<NonNullable<BlogAuthor>, "name" | "role"> | null;
  category?: BlogCategory;
  coverImage?: SanityImageValue;
  excerpt?: string;
  publishedAt?: string;
  slug: string;
  title: string;
};

export type BlogPost = BlogPostSummary & {
  body?: SanityPortableTextNode[];
  canonicalUrl?: string;
  noIndex?: boolean;
  relatedPosts?: Array<BlogPostSummary | null>;
  relatedProducts?: Array<{
    _key: string;
    name?: string;
    url?: string;
  }>;
  seoTitle?: string;
  metaDescription?: string;
  author?: BlogAuthor;
};

export type BlogSitemapEntry = {
  _updatedAt: string;
  slug: string;
};
