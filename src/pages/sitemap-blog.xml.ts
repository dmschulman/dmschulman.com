import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async ({ site }) => {
  const posts = await getCollection('words');

  const urls = posts
    .sort((a, b) => {
      const getDate = (id: string) => id.replace(/^archive\//, '').split('_')[0];
      return getDate(b.id).localeCompare(getDate(a.id));
    })
    .map((post) => {
      const isArchived = post.data.archived === true;

      const idNormalized = post.id.replace(/^archive\//, '');
      const [datePart, ...slugParts] = idNormalized.split('_');
      const year = datePart.split('-')[0];
      const slug = slugParts.join('_');

      const loc = isArchived
        ? `${site}words/archive/${year}/${slug}.html`
        : `${site}words/${year}/${slug}.html`;

      const lastmod = post.data.updatedDate
        ?? post.data.publishDate
        ?? new Date(datePart);

      return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod.toISOString().split('T')[0]}</lastmod>
    <changefreq>${isArchived ? 'yearly' : 'monthly'}</changefreq>
    <priority>${isArchived ? '0.3' : '0.7'}</priority>
  </url>`;
    })
    .join('\n');

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/0.9">
${urls}
</urlset>`;

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};