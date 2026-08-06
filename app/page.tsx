import Link from "next/link";
import Navbar from "../components/Navbar";
import Stats from "../components/Stats";
import Reveal from "../components/Reveal";
import Portfolio from "../components/Portfolio";
import ClientLogos from "../components/ClientLogos";
import ContactButton from "../components/ContactButton";

const servicios = [
  { numero: "01", titulo: "Proyecto" },
  { numero: "02", titulo: "Dirección de Obra" },
  { numero: "03", titulo: "Gerenciamiento" },
  { numero: "04", titulo: "Construcción" },
  { numero: "05", titulo: "Obra Nueva" },
  { numero: "06", titulo: "Remodelación" },
  { numero: "07", titulo: "Mantenimiento" },
];

export default function Home() {
  return (
    <main>
      <Navbar />

      <section className="hero" id="inicio">
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="eyebrow">Industrial · Comercial · Retail</p>
          <h1>
            ZS GROUP SRL
            <span>Industrial, Comercial y Retail.</span>
          </h1>
          <p className="hero-description">
            Somos una Empresa especializada en el rubro Industrial, Comercial y Retail.
          </p>
          <div className="hero-buttons">
            <ContactButton className="button button-primary">
              Contacto
            </ContactButton>
            <Link className="button button-secondary" href="/#obras">
              Trabajos realizados
            </Link>
          </div>
        </div>
        <div className="hero-bottom">
          <div><strong>Proyecto</strong><span>Dirección de Obra</span></div>
          <div><strong>Gerenciamiento</strong><span>Construcción</span></div>
          <div><strong>Obra Nueva</strong><span>Remodelación · Mantenimiento</span></div>
        </div>
      </section>

      <section className="about section" id="nosotros">
        <Reveal>
          <div className="section-heading">
            <p className="section-number">01 — Sobre Nosotros</p>
            <h2>Sobre <span>Nosotros.</span></h2>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="about-content">
            <p className="about-lead">
              Somos una Empresa especializada en el rubro Industrial, Comercial y Retail.
            </p>
            <div className="about-text">
              <p>
                Nos encontramos en continuo crecimiento buscando nuevos desafíos para cumplir con las necesidades y expectativas de Nuestros Clientes.
              </p>
              <p>
                Contamos con un equipo de Profesionales con experiencia en el rubro.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      <Stats />

      <section className="services section-dark" id="servicios">
        <Reveal>
          <div className="section-heading services-heading">
            <p className="section-number">02 — Servicios</p>
            <h2>Servicios.</h2>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="services-intro">
            <p>
              Ofrecemos a Nuestros Clientes acompañarlos en las etapas de: Proyecto, Dirección de Obra, Gerenciamiento y Construcción.
            </p>
          </div>
        </Reveal>
        <Reveal delay={160}>
          <div className="services-grid">
            {servicios.map((servicio) => (
              <article className="service-card" key={servicio.numero}>
                <span className="service-number">{servicio.numero}</span>
                <h3>{servicio.titulo}</h3>
                <span className="service-arrow">↗</span>
              </article>
            ))}
          </div>
        </Reveal>
      </section>

      <Portfolio />
      <ClientLogos />

      <section className="contact section" id="contacto">
        <Reveal>
          <div className="contact-box">
            <div>
              <p className="section-number">05 — Contacto</p>
              <h2>Contacto.</h2>
              <div className="contact-details">
                <p><strong>Arq. Diego Zamorano</strong><br />Cel.: 11 3254-8088<br />Mail: zamoranod@zsgroup-srl.com</p>
                <p><strong>M.M.O. Maximiliano Samite</strong><br />Cel.: 11 2622-2288<br />Mail: msamite@zsgroup-srl.com</p>
              </div>
            </div>
            <ContactButton className="contact-button">
              WhatsApp <span>↗</span>
            </ContactButton>
          </div>
        </Reveal>
      </section>

      <footer className="footer">
        <div className="footer-main">
          <Link className="footer-brand" href="/#inicio" aria-label="ZS GROUP SRL - Ir al inicio">
            <span className="footer-brand-zs">ZS</span><span className="footer-brand-group">GROUP</span><span className="footer-brand-srl">srl</span>
          </Link>
          <div className="footer-info">
            <div><strong>Rubro</strong><span>Industrial, Comercial y Retail</span></div>
            <div>
              <strong>Contacto</strong>
              <a href="tel:+541132548088">11 3254-8088</a>
              <a href="tel:+541126222288">11 2622-2288</a>
            </div>
            <div><strong>Redes sociales</strong><a href="https://www.instagram.com/zs.group.srl" target="_blank" rel="noreferrer">Instagram</a><a href="https://www.facebook.com/share/16B6BfTP9fS/" target="_blank" rel="noreferrer">Facebook</a></div>
          </div>
        </div>
        <div className="footer-bottom"><span>© 2026 ZS GROUP SRL. Todos los derechos reservados.</span><span>Industrial · Comercial · Retail</span></div>
      </footer>

      <ContactButton className="whatsapp-floating" ariaLabel="Elegir contacto de WhatsApp">WA</ContactButton>
    </main>
  );
}
