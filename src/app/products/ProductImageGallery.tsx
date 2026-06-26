"use client";

import Image from "next/image";
import { useState } from "react";
import type { Product } from "./product-data";

export function ProductImageGallery({ product }: { product: Product }) {
  const images = [
    { src: product.image, alt: product.alt },
    product.secondaryImage && product.secondaryAlt
      ? { src: product.secondaryImage, alt: product.secondaryAlt }
      : undefined,
    ...(product.galleryImages ?? []),
  ].filter((image): image is { src: string; alt: string } => image !== undefined);
  const [activeIndex, setActiveIndex] = useState(0);
  const hasMultipleImages = images.length > 1;
  const activeImage = images[activeIndex] ?? images[0];

  const showPreviousImage = () => {
    setActiveIndex((current) => (current === 0 ? images.length - 1 : current - 1));
  };

  const showNextImage = () => {
    setActiveIndex((current) => (current + 1) % images.length);
  };

  return (
    <div className="product-detail-media product-image-gallery">
      <Image
        src={activeImage.src}
        alt={activeImage.alt}
        fill
        sizes="(max-width: 900px) calc(100vw - 32px), 42vw"
      />

      {hasMultipleImages ? (
        <>
          <button
            className="product-gallery-arrow product-gallery-arrow-prev"
            type="button"
            aria-label={`Show previous ${product.model} image`}
            onClick={showPreviousImage}
          >
            ‹
          </button>
          <button
            className="product-gallery-arrow product-gallery-arrow-next"
            type="button"
            aria-label={`Show next ${product.model} image`}
            onClick={showNextImage}
          >
            ›
          </button>
          <span className="product-gallery-count">
            {activeIndex + 1} / {images.length}
          </span>
        </>
      ) : null}
    </div>
  );
}
