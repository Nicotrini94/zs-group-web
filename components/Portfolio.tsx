"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { obras } from "../lib/obras";

const categorias = ["Todas", ...Array.from(new Set(obras.map((obra) => obra.category)))];

export default function Portfolio() {
  const [categoria, setCategoria] = useState("Todas");

  const obrasVisibles = useMemo(
    () => (categoria === "Todas" ? obras : obras.filter((obra) => obra.category === categoria)),
    [categoria]
  );

  return (
    <section className="portfolio section" id="obras">
      <div className="portfolio-header">
        <div className="section-heading">
          <p className="section-number">03 — Trabajos realizados</p>
          <h2>
            Trabajos <span>realizados.</span>
          </h2>
        </div>
      </div>

      <div className="portfolio-filters" aria-label="Filtrar obras">
        {categorias.map((item) => (
          <button
            key={item}
            type="button"
            className={categoria === item ? "portfolio-filter active" : "portfolio-filter"}
            onClick={() => setCategoria(item)}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="portfolio-grid portfolio-grid-premium">
        {obrasVisibles.map((obra, index) => (
          <article className={`portfolio-card portfolio-card-premium portfolio-card-${(index % 4) + 1}`} key={obra.slug}>
            <Link href={`/obras/${obra.slug}`} className="portfolio-image-wrap portfolio-image-premium" aria-label={`Ver ${obra.title}`}>
              <Image
                src={obra.images[0]}
                alt={obra.title}
                fill
                sizes="(max-width: 750px) 100vw, (max-width: 1100px) 50vw, 65vw"
                className="portfolio-image"
              />
              <span className="portfolio-image-shade" />
              <span className="portfolio-view">Explorar obra ↗</span>
            </Link>

            <div className="portfolio-card-info portfolio-card-info-premium">
              <span>
                {obra.category} · {obra.location}
              </span>
              <h3>{obra.title}</h3>
              <Link href={`/obras/${obra.slug}`} className="portfolio-text-link">
                Explorar obra <span aria-hidden="true">→</span>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
