"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

type ObraGalleryProps = {
  images: string[];
  title: string;
};

export default function ObraGallery({ images, title }: ObraGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = useCallback(() => setActiveIndex(null), []);
  const previous = useCallback(() => {
    setActiveIndex((current) => {
      if (current === null) return null;
      return current === 0 ? images.length - 1 : current - 1;
    });
  }, [images.length]);
  const next = useCallback(() => {
    setActiveIndex((current) => {
      if (current === null) return null;
      return current === images.length - 1 ? 0 : current + 1;
    });
  }, [images.length]);

  useEffect(() => {
    if (activeIndex === null) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowLeft") previous();
      if (event.key === "ArrowRight") next();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeIndex, close, next, previous]);

  return (
    <>
      <div className="obra-gallery">
        {images.map((image, index) => (
          <button
            className={index === 0 ? "obra-photo obra-photo-wide" : "obra-photo"}
            key={image}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-label={`Ampliar imagen ${index + 1} de ${title}`}
          >
            <Image
              src={image}
              alt={`${title} - imagen ${index + 1}`}
              fill
              sizes="(max-width: 750px) 100vw, 50vw"
            />
            <span className="obra-photo-action">Ampliar</span>
          </button>
        ))}
      </div>

      {activeIndex !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={`Galería de ${title}`}>
          <button className="lightbox-close" type="button" onClick={close} aria-label="Cerrar galería">
            ×
          </button>
          <button className="lightbox-nav lightbox-prev" type="button" onClick={previous} aria-label="Imagen anterior">
            ←
          </button>
          <div className="lightbox-image-wrap">
            <Image
              src={images[activeIndex]}
              alt={`${title} - imagen ampliada ${activeIndex + 1}`}
              fill
              priority
              sizes="100vw"
              className="lightbox-image"
            />
          </div>
          <button className="lightbox-nav lightbox-next" type="button" onClick={next} aria-label="Imagen siguiente">
            →
          </button>
          <div className="lightbox-counter">
            {activeIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
}
