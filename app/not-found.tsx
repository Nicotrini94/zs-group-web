import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found-page">
      <p>404</p>
      <h1>La página no fue encontrada.</h1>
      <Link href="/">Volver al inicio</Link>
    </main>
  );
}
