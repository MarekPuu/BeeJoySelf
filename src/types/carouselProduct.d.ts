import type { ImageMetadata } from "astro";

export interface CarouselProduct {
  name: string;
  image: ImageMetadata;
  category: string;
  price: number;
  device: "desktop" | "tablet" | "mobile" | "all" | "other";
}
