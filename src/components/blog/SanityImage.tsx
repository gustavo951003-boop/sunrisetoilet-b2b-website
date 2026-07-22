import Image from "next/image";
import type { SanityImageValue } from "@/sanity/types";

type SanityImageProps = {
  image: SanityImageValue;
  alt?: string;
  className?: string;
  priority?: boolean;
  sizes: string;
};

export function SanityImage({
  image,
  alt,
  className,
  priority = false,
  sizes,
}: SanityImageProps) {
  const asset = image.asset;

  if (!asset?.url) return null;

  const width = asset.metadata?.dimensions?.width || 1600;
  const height = asset.metadata?.dimensions?.height || 900;
  const objectPosition = image.hotspot
    ? `${Math.round(image.hotspot.x * 100)}% ${Math.round(image.hotspot.y * 100)}%`
    : "center";

  return (
    <Image
      className={className}
      src={asset.url}
      alt={alt || image.alt || ""}
      width={width}
      height={height}
      sizes={sizes}
      priority={priority}
      placeholder={asset.metadata?.lqip ? "blur" : "empty"}
      blurDataURL={asset.metadata?.lqip}
      style={{ objectPosition }}
    />
  );
}
