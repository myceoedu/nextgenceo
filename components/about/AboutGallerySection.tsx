import { ABOUT_GALLERY_IMAGES } from "@/lib/constants";
import { AboutGalleryClient } from "@/components/about/AboutGalleryClient";

export function AboutGallerySection() {
  return <AboutGalleryClient images={ABOUT_GALLERY_IMAGES} />;
}
