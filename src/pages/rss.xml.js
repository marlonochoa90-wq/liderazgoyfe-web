import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE } from '../lib/site';

export async function GET(context) {
  const devocionales = await getCollection('devocionales', ({ data }) => !data.draft);
  return rss({
    title: SITE.nombre,
    description: SITE.descripcion,
    site: context.site ?? SITE.url,
    items: devocionales
      .sort((a, b) => b.data.fecha.valueOf() - a.data.fecha.valueOf())
      .map((d) => ({
        title: d.data.title,
        description: d.data.description,
        pubDate: d.data.fecha,
        link: `/devocionales/${d.slug}/`,
      })),
    customData: `<language>es</language>`,
  });
}
