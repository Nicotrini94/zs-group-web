import Image from "next/image";
import Link from "next/link";
import type { Obra } from "../lib/obras";

type RelatedProjectsProps = {
  currentSlug: string;
  currentCategory: string;
  obras: Obra[];
};

export default function RelatedProjects({
  currentSlug,
  currentCategory,
  obras,
}: RelatedProjectsProps) {
  const relacionadas = [
    ...obras.filter(
      (obra) => obra.slug !== currentSlug && obra.category === currentCategory
    ),
    ...obras.filter(
      (obra) => obra.slug !== currentSlug && obra.category !== currentCategory
    ),
  ].slice(0, 3);

  if (relacionadas.length === 0) return null;

  return (
    <section className="related-projects" aria-labelledby="related-projects-title">
      <div className="related-projects-heading">
        <p className="section-number">Trabajos realizados</p>
        <h2 id="related-projects-title">Otros trabajos</h2>
      </div>

      <div className="related-projects-grid">
        {relacionadas.map((obra) => (
          <Link
            href={`/obras/${obra.slug}`}
            className="related-project-card"
            key={obra.slug}
          >
            <div className="related-project-image-wrap">
              <Image
                src={obra.images[0]}
                alt={obra.title}
                fill
                sizes="(max-width: 760px) 100vw, 33vw"
                className="related-project-image"
              />
              <div className="related-project-overlay" />
            </div>

            <div className="related-project-info">
              <span>{obra.category} · {obra.location}</span>
              <h3>{obra.title}</h3>
              <strong>Explorar obra →</strong>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
