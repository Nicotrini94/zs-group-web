# ZS GROUP SRL — Sitio web corporativo

Sitio institucional desarrollado con Next.js y TypeScript para una empresa especializada en los rubros Industrial, Comercial y Retail.

## Ejecutar en desarrollo

```powershell
npm install
npm run dev
```

Abrir: http://localhost:3000

## Compilar para producción

```powershell
npm run build
npm start
```

## Publicar en Vercel

1. Subir la carpeta a un repositorio de GitHub.
2. Ingresar en Vercel y elegir **Add New Project**.
3. Importar el repositorio.
4. Vercel detectará Next.js automáticamente.
5. Presionar **Deploy**.

## Contenido principal

- Página institucional responsive.
- Servicios de Proyecto, Dirección de Obra, Gerenciamiento, Construcción, Remodelación y Mantenimiento.
- Portfolio con filtros y páginas individuales por obra.
- Fotografías reales optimizadas en WebP.
- Navegación correcta desde las páginas del portfolio.
- Acceso directo a WhatsApp.
- Metadata, manifest, robots y sitemap iniciales.

## Antes de publicar con dominio definitivo

Reemplazar `https://zsgroup-srl.com` en:

- `app/layout.tsx`
- `app/robots.ts`
- `app/sitemap.ts`

por el dominio definitivo de la empresa, si fuese diferente.
