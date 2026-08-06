import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "../../../components/Navbar";
import ObraGallery from "../../../components/ObraGallery";
import ObraVideos from "../../../components/ObraVideos";
import RelatedProjects from "../../../components/RelatedProjects";
import { getObra, obras } from "../../../lib/obras";


export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const obra = getObra(slug);

  if (!obra) {
    return { title: "Trabajo no encontrado" };
  }

  return {
    title: obra.title,
    description: `${obra.category} · ${obra.location}`,
    openGraph: {
      title: obra.title,
      description: `${obra.category} · ${obra.location}`,
      images: [{ url: obra.images[0], alt: obra.title }],
    },
  };
}

export function generateStaticParams() {
  return obras.map((obra) => ({ slug: obra.slug }));
}

export default async function ObraPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const obra = getObra(slug);
  if (!obra) notFound();

  const currentIndex = obras.findIndex((item) => item.slug === obra.slug);
  const previousObra = obras[(currentIndex - 1 + obras.length) % obras.length];
  const nextObra = obras[(currentIndex + 1) % obras.length];

  return (
    <main className="obra-page">
      <Navbar />

      <section className="obra-hero">
        <Image src={obra.images[0]} alt={obra.title} fill priority className="obra-hero-image" />
        <div className="obra-hero-overlay" />
        <div className="obra-hero-content">
          <Link href="/#obras" className="obra-back">← Volver a obras</Link>
          <p>{obra.category} · {obra.location}</p>
          <h1>{obra.title}</h1>
        </div>
      </section>

      <section className="obra-detail section">
        <div className="obra-intro-grid">
          <div className="obra-description">
            <p className="section-number">Proyecto</p>
            <h2>{obra.title}</h2>
          </div>

          <aside className="obra-ficha" aria-label="Ficha técnica de la obra">
            <div>
              <span>Cliente / Proyecto</span>
              <strong>{obra.title}</strong>
            </div>
            <div>
              <span>Ubicación</span>
              <strong>{obra.location}</strong>
            </div>
            <div>
              <span>Categoría</span>
              <strong>{obra.category}</strong>
            </div>
            <div>
              <span>Material visual</span>
              <strong>
                {obra.images.length} imágenes
                {obra.videos?.length ? ` · ${obra.videos.length} video` : ""}
              </strong>
            </div>
          </aside>
        </div>

        <ObraGallery images={obra.images} title={obra.title} />

        <ObraVideos videos={obra.videos ?? []} title={obra.title} />

        <RelatedProjects
          currentSlug={obra.slug}
          currentCategory={obra.category}
          obras={obras}
        />

        <nav className="obra-pagination" aria-label="Navegación entre obras">
          <Link href={`/obras/${previousObra.slug}`} className="obra-pagination-link">
            <span>← Obra anterior</span>
            <strong>{previousObra.title}</strong>
          </Link>

          <Link href={`/obras/${nextObra.slug}`} className="obra-pagination-link obra-pagination-next">
            <span>Siguiente obra →</span>
            <strong>{nextObra.title}</strong>
          </Link>
        </nav>
      </section>
    </main>
  );
}
