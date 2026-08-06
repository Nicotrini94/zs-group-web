import Image from "next/image";
import Link from "next/link";

const clientes = [
  { nombre: "Vital Supermayorista", logo: "/clientes/vital.png", href: "/obras/vital-parking" },
  { nombre: "Megatone", logo: "/clientes/megatone.png", href: "/obras/megatone-pueyrredon" },
  { nombre: "Cetrogar S.A.", logo: "/clientes/cetrogar.png" },
  { nombre: "Norauto", logo: "/clientes/norauto.png" },
  { nombre: "Ascensores Ingesec", logo: "/clientes/ingesec.png" },
  { nombre: "Contartese Gráfica", logo: "/clientes/contartese.png" },
];

function ClienteCard({ cliente, duplicado = false }: { cliente: (typeof clientes)[number]; duplicado?: boolean }) {
  const contenido = <div className="client-logo-card"><Image src={cliente.logo} alt={duplicado ? "" : cliente.nombre} width={260} height={120} sizes="(max-width: 750px) 210px, 260px" className="client-logo-image" /></div>;
  if (!cliente.href || duplicado) return contenido;
  return <Link href={cliente.href} className="client-logo-link" aria-label={`Ver obra de ${cliente.nombre}`}>{contenido}</Link>;
}

export default function ClientLogos() {
  return (
    <section className="clients-premium section-dark" aria-labelledby="clientes-title">
      <div className="clients-premium-header">
        <p className="section-number">04 — Algunos de Nuestros Clientes</p>
        <h2 id="clientes-title">Algunos de Nuestros <span>Clientes.</span></h2>
      </div>
      <div className="client-marquee" aria-label="Clientes de ZS GROUP SRL">
        <div className="client-marquee-track">
          <div className="client-marquee-group">{clientes.map((cliente) => <ClienteCard key={cliente.nombre} cliente={cliente} />)}</div>
          <div className="client-marquee-group" aria-hidden="true">{clientes.map((cliente) => <ClienteCard key={`duplicate-${cliente.nombre}`} cliente={cliente} duplicado />)}</div>
        </div>
      </div>
    </section>
  );
}
