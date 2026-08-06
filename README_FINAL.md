# ZS GROUP SRL — Versión 2.4 final

Sitio corporativo basado en el brochure oficial de ZS GROUP SRL y en el material fotográfico y audiovisual entregado por la empresa.

## Ejecutar localmente

```powershell
npm install
npm run dev
```

Abrir: `http://localhost:3000`

## Antes de publicar

1. Crear un archivo `.env.local`.
2. Copiar el contenido de `.env.example`.
3. Reemplazar `https://tu-dominio.com` por el dominio real o la URL de Vercel.
4. Ejecutar `npm run build`.
5. Revisar Inicio, Nosotros, Servicios, Obras, Clientes, Contacto y los dos enlaces de WhatsApp.

## Publicación en Vercel

- Subir el proyecto a GitHub.
- Importarlo desde Vercel.
- Configurar la variable `NEXT_PUBLIC_SITE_URL`.
- Publicar.

## Contenido

Los textos institucionales mantienen la terminología del brochure oficial. Las fotografías y videos corresponden al material entregado por ZS GROUP SRL.
