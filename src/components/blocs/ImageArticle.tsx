import Image from "next/image";
import type { ImageArticle as Donnees } from "@/lib/blog";

/**
 * L'image d'un article, qu'elle vienne du back office (Sanity) ou des
 * fichiers du site. Les images Sanity passent par l'optimiseur du site :
 * le visiteur les reçoit depuis regista-a.com, jamais depuis un site tiers.
 */
export function ImageArticle({
  image,
  sizes,
  className,
  decorative = false,
  preload = false,
}: {
  image: Donnees;
  sizes: string;
  className?: string;
  decorative?: boolean;
  preload?: boolean;
}) {
  const alt = decorative ? "" : image.alt;
  if (image.type === "locale") {
    return <Image src={image.src} alt={alt} placeholder="blur" sizes={sizes} className={className} preload={preload} />;
  }
  return (
    <Image
      src={image.src}
      alt={alt}
      width={image.largeur}
      height={image.hauteur}
      placeholder={image.flou ? "blur" : "empty"}
      blurDataURL={image.flou}
      sizes={sizes}
      className={className}
      preload={preload}
    />
  );
}
