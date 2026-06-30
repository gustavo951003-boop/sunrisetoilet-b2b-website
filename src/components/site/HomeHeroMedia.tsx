import Image from "next/image";
import { HomeHeroCarousel } from "./HomeHeroCarousel";

export type HomeHeroSlide = {
  image: string;
  alt: string;
  width: number;
  height: number;
};

type HomeHeroMediaProps = {
  slides: HomeHeroSlide[];
};

export function HomeHeroMedia({ slides }: HomeHeroMediaProps) {
  const mainSlide = slides[0];
  const carouselSlides = slides.slice(1);

  if (!mainSlide) {
    return null;
  }

  return (
    <div className="hero-media hero-media-static">
      <Image
        className="hero-image hero-image-1"
        src={mainSlide.image}
        alt={mainSlide.alt}
        width={mainSlide.width}
        height={mainSlide.height}
        priority
        fetchPriority="high"
        loading="eager"
        sizes="100vw"
      />
      <HomeHeroCarousel slides={carouselSlides} />
    </div>
  );
}
