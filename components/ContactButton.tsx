"use client";

import { useState } from "react";
import WhatsappModal from "./WhatsappModal";

type ContactButtonProps = {
  className: string;
  children: React.ReactNode;
  ariaLabel?: string;
};

export default function ContactButton({ className, children, ariaLabel = "Elegir contacto de WhatsApp" }: ContactButtonProps) {
  const [abierto, setAbierto] = useState(false);

  return (
    <>
      <button className={className} type="button" onClick={() => setAbierto(true)} aria-label={ariaLabel}>
        {children}
      </button>
      <WhatsappModal isOpen={abierto} onClose={() => setAbierto(false)} />
    </>
  );
}
