"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import WhatsappModal from "./WhatsappModal";

const enlaces = [
  { nombre: "Inicio", href: "/#inicio" },
  { nombre: "Nosotros", href: "/#nosotros" },
  { nombre: "Servicios", href: "/#servicios" },
  { nombre: "Obras", href: "/#obras" },
  { nombre: "Contacto", href: "/#contacto" },
];

function WhatsAppIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 32 32" width="20" height="20" fill="currentColor">
      <path d="M16.04 3C8.86 3 3 8.75 3 15.82c0 2.5.74 4.95 2.13 7.03L3 29l6.35-2.05a13.2 13.2 0 0 0 6.68 1.8h.01C23.22 28.75 29 23 29 15.9 29 8.82 23.22 3 16.04 3Zm0 23.58h-.01a11 11 0 0 1-5.62-1.53l-.4-.24-3.77 1.22 1.23-3.65-.26-.42a10.7 10.7 0 0 1-1.68-5.78c0-5.98 4.75-10.85 10.6-10.85 2.84 0 5.5 1.13 7.5 3.18a10.8 10.8 0 0 1 3.1 7.64c0 5.97-4.78 10.83-10.69 10.83Zm5.82-8.12c-.32-.16-1.88-.91-2.17-1.01-.3-.1-.51-.16-.72.16-.21.31-.83 1.01-1.02 1.22-.19.21-.38.24-.7.08-.32-.16-1.35-.49-2.57-1.57a9.5 9.5 0 0 1-1.78-2.18c-.19-.32-.02-.49.14-.65.15-.14.32-.37.48-.56.16-.18.21-.31.32-.52.1-.21.05-.4-.03-.56-.08-.16-.72-1.72-.99-2.36-.26-.62-.53-.54-.72-.55h-.62c-.22 0-.56.08-.86.4-.29.31-1.12 1.09-1.12 2.66s1.15 3.08 1.31 3.29c.16.21 2.26 3.42 5.47 4.8.76.32 1.36.52 1.82.67.77.24 1.47.21 2.02.13.62-.09 1.88-.76 2.15-1.49.27-.73.27-1.36.19-1.49-.08-.13-.29-.21-.61-.37Z" />
    </svg>
  );
}

export default function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [conScroll, setConScroll] = useState(false);
  const [modalAbierto, setModalAbierto] = useState(false);

  useEffect(() => {
    const controlarScroll = () => setConScroll(window.scrollY > 40);
    controlarScroll();
    window.addEventListener("scroll", controlarScroll, { passive: true });
    return () => window.removeEventListener("scroll", controlarScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuAbierto || modalAbierto ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuAbierto, modalAbierto]);

  const cerrarMenu = () => setMenuAbierto(false);
  const abrirWhatsapp = () => {
    setMenuAbierto(false);
    setModalAbierto(true);
  };

  return (
    <>
      <header className={`navbar ${conScroll ? "navbar-scrolled" : ""} ${menuAbierto ? "navbar-menu-open" : ""}`}>
        <Link className="header-brand" href="/#inicio" aria-label="ZS GROUP srl - Ir al inicio" onClick={cerrarMenu}>
          <span className="header-brand-zs">ZS</span>
          <span className="header-brand-group">GROUP</span>
          <span className="header-brand-srl">srl</span>
        </Link>

        <nav className={`nav-links ${menuAbierto ? "nav-links-open" : ""}`} aria-label="Navegación principal">
          {enlaces.map((enlace) => (
            <Link key={enlace.nombre} href={enlace.href} onClick={cerrarMenu}>
              {enlace.nombre}
            </Link>
          ))}

          <button className="mobile-whatsapp" type="button" onClick={abrirWhatsapp} aria-label="Elegir contacto de WhatsApp">
            <WhatsAppIcon />
            <span>WhatsApp</span>
          </button>
        </nav>

        <button className="nav-button whatsapp-nav-button" type="button" onClick={abrirWhatsapp} aria-label="Elegir contacto de WhatsApp">
          <WhatsAppIcon />
          <span>WhatsApp</span>
        </button>

        <button
          className={`menu-button ${menuAbierto ? "menu-button-open" : ""}`}
          type="button"
          aria-label={menuAbierto ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuAbierto}
          onClick={() => setMenuAbierto((actual) => !actual)}
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      <WhatsappModal isOpen={modalAbierto} onClose={() => setModalAbierto(false)} />
    </>
  );
}
