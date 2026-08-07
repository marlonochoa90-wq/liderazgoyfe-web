import { defineCollection, z } from 'astro:content';

// Categorías estándar usadas en toda la plataforma
export const CATEGORIAS = [
  'Fe',
  'Liderazgo',
  'Sabiduría',
  'Oración',
  'Familia',
  'Jóvenes',
  'Propósito',
] as const;

const devocionales = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().max(200),
    fecha: z.coerce.date(),
    versiculo: z.string(),
    versiculoRef: z.string(),
    categoria: z.enum(CATEGORIAS),
    autor: z.string().default('Equipo Liderazgo y Fe'),
    imagen: z.string().optional(),
    destacado: z.boolean().default(false),
    tiempoLectura: z.number().default(5),
    draft: z.boolean().default(false),
  }),
});

const reels = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().max(200),
    fecha: z.coerce.date(),
    categoria: z.enum(CATEGORIAS),
    miniatura: z.string(),
    videoUrl: z.string(), // URL embebible (YouTube Shorts / Facebook / Instagram)
    duracion: z.string().optional(), // ej "0:45"
    draft: z.boolean().default(false),
  }),
});

const estudios = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().max(200),
    fecha: z.coerce.date(),
    categoria: z.enum(CATEGORIAS),
    numeroLecciones: z.number().default(1),
    nivel: z.enum(['Introductorio', 'Intermedio', 'Avanzado']).default('Introductorio'),
    imagen: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const recursos = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().max(200),
    fecha: z.coerce.date(),
    tipo: z.enum(['PDF', 'Guía', 'Libro', 'Plantilla']),
    archivoUrl: z.string(), // ruta al archivo descargable en /public/recursos/
    portada: z.string().optional(),
    paginas: z.number().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { devocionales, reels, estudios, recursos };
