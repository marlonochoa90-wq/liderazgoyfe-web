# Liderazgo y Fe

**Liderando con propósito. Viviendo por fe.**

Plataforma cristiana en español sobre liderazgo, crecimiento espiritual y desarrollo personal basada en principios bíblicos. Construida con Astro, Tailwind CSS y TypeScript, lista para desplegar en Netlify.

---

## Stack técnico

| Área | Tecnología |
|---|---|
| Framework | [Astro](https://astro.build) 4 (sitio estático, HTML por defecto, cero JS innecesario) |
| Estilos | Tailwind CSS 3 |
| Lenguaje | TypeScript |
| Contenido | Content Collections de Astro (Markdown con esquemas tipados con Zod) |
| Hosting | Netlify (Netlify Forms, headers, caché) |
| SEO | Open Graph, Twitter Cards, Schema.org, sitemap, RSS, canonical |
| PWA | Manifest, Service Worker, modo offline, instalable |

---

## Requisitos previos

- **Node.js 20+** (recomendado usar [nvm](https://github.com/nvm-sh/nvm))
- **npm** 10+ (viene con Node)
- Una cuenta de [Netlify](https://netlify.com) para el despliegue (gratuita)
- Una cuenta de [GitHub](https://github.com) para alojar el repositorio

---

## Instalación local

```bash
# 1. Clona o descomprime el proyecto
cd liderazgo-y-fe

# 2. Instala las dependencias
npm install

# 3. Copia las variables de entorno de ejemplo
cp .env.example .env
# Edita .env con tus IDs reales de Analytics, Clarity, WhatsApp, etc.

# 4. Levanta el servidor de desarrollo
npm run dev
```

El sitio quedará disponible en `http://localhost:4321`.

### Otros comandos

```bash
npm run build     # Genera el sitio estático en /dist
npm run preview   # Sirve /dist localmente para revisar el build de producción
npm run astro     # Acceso directo al CLI de Astro (ej. npm run astro check)
```

---

## Estructura del proyecto

```
liderazgo-y-fe/
├── public/                      # Archivos estáticos servidos tal cual
│   ├── icons/                   # Íconos PWA y favicons (PNG)
│   ├── images/                  # Imágenes placeholder — REEMPLAZAR por fotos reales
│   ├── recursos/                # PDFs descargables
│   ├── manifest.webmanifest     # Manifest de la PWA
│   ├── sw.js                    # Service Worker (modo offline)
│   ├── offline.html             # Página mostrada sin conexión
│   ├── robots.txt
│   └── favicon.svg
├── src/
│   ├── components/               # Componentes reutilizables (.astro)
│   │   ├── Header.astro          # Navegación + menú móvil accesible
│   │   ├── Footer.astro
│   │   ├── SEO.astro              # Meta tags, OG, Twitter, Schema.org
│   │   └── DevocionalCard.astro
│   ├── content/
│   │   ├── config.ts             # Esquemas Zod de las colecciones (CMS)
│   │   ├── devocionales/*.md
│   │   ├── reels/*.md
│   │   ├── estudios/*.md
│   │   └── recursos/*.md
│   ├── layouts/
│   │   └── BaseLayout.astro      # Layout base: head, analytics, header, footer, SW
│   ├── lib/
│   │   └── site.ts               # Constantes de marca, redes, navegación
│   ├── pages/                    # Cada archivo = una ruta
│   │   ├── index.astro           # Inicio
│   │   ├── devocionales/
│   │   │   ├── index.astro
│   │   │   └── [slug].astro      # Página dinámica por devocional
│   │   ├── biblioteca.astro
│   │   ├── reels.astro
│   │   ├── estudios.astro
│   │   ├── recursos.astro
│   │   ├── acerca.astro
│   │   ├── contacto.astro
│   │   ├── peticiones-de-oracion.astro
│   │   ├── politica-de-privacidad.astro
│   │   ├── gracias.astro
│   │   ├── 404.astro
│   │   └── rss.xml.js
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── tailwind.config.mjs
├── netlify.toml
└── package.json
```

---

## Cómo administrar el contenido (CMS en Markdown)

No hay base de datos ni panel de administración: el contenido vive como archivos `.md` en `src/content/`. Cada colección tiene un esquema tipado en `src/content/config.ts`, así que si olvidas un campo obligatorio o pones una categoría inválida, `npm run dev` te avisará con un error claro.

### Agregar un devocional nuevo

Crea un archivo en `src/content/devocionales/mi-nuevo-devocional.md`:

```markdown
---
title: "Título del devocional"
description: "Resumen corto, máximo ~200 caracteres."
fecha: 2026-08-10
versiculo: "Texto del versículo bíblico."
versiculoRef: "Libro 1:1"
categoria: "Fe"   # Fe | Liderazgo | Sabiduría | Oración | Familia | Jóvenes | Propósito
autor: "Tu nombre"
imagen: "/images/devocionales/mi-nuevo-devocional.jpg"
destacado: false
tiempoLectura: 5
---

## Reflexión
...

## Aplicación
...

## Oración
...
```

El mismo patrón aplica para `reels/`, `estudios/` y `recursos/` — revisa `src/content/config.ts` para ver los campos exactos de cada uno.

### Reemplazar las imágenes de ejemplo

Todas las imágenes de contenido y el hero de inicio son **placeholders en SVG** generados automáticamente para que el proyecto funcione desde el primer `npm run dev`. Antes de publicar, reemplázalas por fotografía real en `/public/images/` (usa `.jpg` o `.webp` y actualiza las referencias en el frontmatter). Lo mismo aplica al PDF de ejemplo en `/public/recursos/`.

---

## Desplegar en Netlify

### Opción A — Conectar el repositorio (recomendado)

1. Sube este proyecto a un repositorio de GitHub.
2. En Netlify: **Add new site → Import an existing project → GitHub** y selecciona el repo.
3. Netlify detectará automáticamente `netlify.toml` con:
   - Comando de build: `npm run build`
   - Carpeta de publicación: `dist`
4. Agrega tus variables de entorno reales en **Site settings → Environment variables** (los mismos nombres de `.env.example`).
5. Despliega. Netlify detectará automáticamente los formularios (`data-netlify="true"`) en Contacto y Peticiones de Oración — no requieren configuración adicional.

### Opción B — Netlify CLI

```bash
npm install -g netlify-cli
netlify login
netlify init
netlify deploy --prod
```

### Antes de pasar a producción

- [ ] Cambia `SITE_URL` en `astro.config.mjs` y `SITE.url` en `src/lib/site.ts` por tu dominio real.
- [ ] Reemplaza los IDs de ejemplo en `src/lib/site.ts` (`googleAnalyticsId`, `microsoftClarityId`) y verifica en Google Search Console.
- [ ] Actualiza los enlaces de WhatsApp, Facebook e Instagram en `REDES` (`src/lib/site.ts`).
- [ ] Sustituye las imágenes y el PDF placeholder por contenido real.
- [ ] Corre `npm run build && npm run preview` y revisa el sitio completo antes de publicar.
- [ ] Ejecuta Lighthouse en el build de producción (`npm run preview`) para confirmar los puntajes.

---

## SEO incluido

- Meta tags, Open Graph y Twitter Cards dinámicos por página (`src/components/SEO.astro`)
- `sitemap-index.xml` generado automáticamente por `@astrojs/sitemap` en cada build
- `robots.txt` apuntando al sitemap
- Datos estructurados Schema.org (`WebSite` en general, `Article` en cada devocional)
- URLs canónicas automáticas
- Feed RSS en `/rss.xml` con los devocionales publicados
- `og-default.jpg` (placeholder) para páginas sin imagen propia — reemplázalo por una imagen de marca de 1200×630

## PWA incluida

- `manifest.webmanifest` con íconos en varios tamaños (incluye variantes *maskable*)
- Service Worker (`public/sw.js`) con estrategia network-first + caché y página offline (`offline.html`)
- Instalable en Android/desktop; en iOS Safari usa "Agregar a inicio" (usa el `apple-touch-icon`)

## Rendimiento

- Astro genera HTML estático — cero JavaScript de framework por defecto
- `lazy loading` en todas las imágenes de contenido
- Imágenes optimizadas automáticamente vía Sharp en build
- CSS crítico inlineado automáticamente por Astro (`inlineStylesheets: 'auto'`)
- Cache headers agresivos para assets con hash (`netlify.toml`)
- Fuentes cargadas vía Google Fonts con `preconnect`; para máximo rendimiento, considera autoalojarlas (ver nota en `src/styles/global.css`)

## Accesibilidad (AA)

- Jerarquía semántica de encabezados en cada página
- Enlace "Saltar al contenido principal" en el layout base
- Estados de foco visibles (`:focus-visible`) en todo el sitio
- Contraste de color verificado en la paleta azul profundo / dorado / marfil
- Menú móvil con `aria-expanded`, `aria-controls` y `aria-label`
- Formularios con `<label>` asociado a cada campo

---

## Integraciones pendientes de configurar

| Integración | Dónde | Qué hacer |
|---|---|---|
| Google Analytics | `src/lib/site.ts` → `ANALYTICS.googleAnalyticsId` | Reemplaza `G-XXXXXXXXXX` por tu ID real |
| Microsoft Clarity | `src/lib/site.ts` → `ANALYTICS.microsoftClarityId` | Reemplaza por tu ID de proyecto |
| Google Search Console | — | Verifica el dominio y envía `https://tudominio.com/sitemap-index.xml` |
| WhatsApp | `src/lib/site.ts` → `REDES.whatsapp` | Reemplaza por tu enlace de grupo/canal |
| Facebook | `src/lib/site.ts` → `REDES.facebook` | Reemplaza por tu página real |
| Netlify Forms | Ya configurado en Contacto y Peticiones de Oración | Activa notificaciones por correo (gratis) en el panel de Netlify → Forms |
| WhatsApp automático (Twilio + Make) | — | **Pausado por decisión propia** (servicio de pago). Documentado arriba para retomarlo cuando quieras |

---

## Preparado para automatizaciones futuras (Make) — pendiente, no requerida para lanzar

Los formularios de Contacto y Peticiones de Oración envían sus datos a Netlify Forms (gratis hasta 100 envíos/mes), que expone un webhook nativo. Más adelante puedes conectar Netlify → Make para reenviar automáticamente cada petición de oración a WhatsApp o Slack. **Esto es opcional y no bloquea el lanzamiento del sitio** — por ahora, Netlify Forms ya te notifica cada envío por correo desde su propio panel, sin costo ni configuración adicional.

Nota de estado: ya existe un webhook creado en Make para este flujo, pero la conexión de envío (vía Twilio, que es un servicio de pago) quedó **pausada intencionalmente** para mantener el proyecto 100% gratuito. Si en el futuro quieres retomarlo, se documentó el paso pendiente: crear la conexión de Twilio en Make (requiere Account SID + Auth Token de una cuenta Twilio, y un número de WhatsApp Business verificado) y luego enlazar el webhook de Make en **Netlify → Site settings → Forms → Form notifications → Outgoing webhook**.

---

## Actualizar a versiones más nuevas del stack

Este proyecto fija versiones estables y probadas (Astro 4, Tailwind 3) para garantizar que el build funcione sin fricción. Si quieres adoptar versiones más recientes de Astro más adelante, sigue la [guía oficial de migración de Astro](https://docs.astro.build/en/guides/upgrade-to/) — presta especial atención a los cambios en la Content Layer API y a la migración de `@astrojs/tailwind` hacia el plugin oficial de Vite si saltas a Tailwind 4.

---

## Licencia y créditos

Proyecto entregado como base de código propietaria para **Liderazgo y Fe**. Reemplaza todo el contenido de ejemplo (textos, imágenes, PDF) antes de publicar.
