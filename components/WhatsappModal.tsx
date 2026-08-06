"use client";

import { useEffect } from "react";

interface WhatsappModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const mensaje =
  "Hola ZS GROUP SRL, quisiera solicitar un presupuesto.";

const contactos = [
  {
    nombre: "Arq. Diego Zamorano",
    telefono: "5491132548088",
  },
  {
    nombre: "M.M.O. Maximiliano Samite",
    telefono: "5491126222288",
  },
];

export default function WhatsappModal({
  isOpen,
  onClose,
}: WhatsappModalProps) {
  useEffect(() => {
    if (!isOpen) return;

    const cerrarConEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", cerrarConEscape);

    return () => {
      window.removeEventListener("keydown", cerrarConEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="ws-overlay"
      role="presentation"
      onClick={onClose}
    >
      <div
        className="ws-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="ws-modal-title"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          className="ws-modal-close-icon"
          type="button"
          onClick={onClose}
          aria-label="Cerrar ventana"
        >
          ×
        </button>

        <p className="ws-modal-label">WhatsApp</p>

        <h2 id="ws-modal-title">Solicitar presupuesto</h2>

        <p className="ws-modal-description">
          Seleccione el contacto con el que desea comunicarse.
        </p>

        <div className="ws-contact-list">
          {contactos.map((contacto) => {
            const url = `https://wa.me/${
              contacto.telefono
            }?text=${encodeURIComponent(mensaje)}`;

            return (
              <article className="ws-contact" key={contacto.telefono}>
                <h3>{contacto.nombre}</h3>

                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={onClose}
                >
                  Contactar por WhatsApp
                  <span aria-hidden="true">↗</span>
                </a>
              </article>
            );
          })}
        </div>

        <button
          className="ws-close"
          type="button"
          onClick={onClose}
        >
          Cerrar
        </button>
      </div>
    </div>
  );
}