"use client";

import { useEffect, useRef, useState } from "react";

const contenidos = [
  { destacado: "Industrial", descripcion: "Empresa especializada en el rubro Industrial." },
  { destacado: "Comercial", descripcion: "Empresa especializada en el rubro Comercial." },
  { destacado: "Retail", descripcion: "Empresa especializada en el rubro Retail." },
  { destacado: "Profesionales", descripcion: "Equipo de Profesionales con experiencia en el rubro." },
];

export default function Stats() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [activo, setActivo] = useState(false);
  useEffect(() => {
    const elemento = sectionRef.current;
    if (!elemento) return;
    const observer = new IntersectionObserver(([entrada]) => {
      if (entrada.isIntersecting) { setActivo(true); observer.disconnect(); }
    }, { threshold: 0.25 });
    observer.observe(elemento);
    return () => observer.disconnect();
  }, []);
  return (
    <section className="stats-section" ref={sectionRef}>
      <div className="stats-header">
        <p className="section-number">ZS GROUP SRL</p>
        <p>Nos encontramos en continuo crecimiento buscando nuevos desafíos.</p>
      </div>
      <div className="stats-grid">
        {contenidos.map((item, index) => (
          <article className={`stat-card ${activo ? "stat-card-visible" : ""}`} key={item.destacado} style={{ transitionDelay: `${index * 100}ms` }}>
            <span className="stat-value">{item.destacado}</span>
            <p>{item.descripcion}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
