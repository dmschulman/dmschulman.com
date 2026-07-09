import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders';

const work = defineCollection({
  loader: glob({ pattern: '**/**/*.md', base: "src/content/work" }),
  schema: ({ image }) =>
    z.object({
    title: z.string(), // Display title of the content
    date: z.date(), // File creation date
    pubDate: z.date().optional(), // Optional: display date
    description: z.string().optional(), // Brief summary of the work
    category: z.string(), // Grouping the work belongs within
    image: image(), // Thumbnail representing the work
    imageAlt: z.string(), // Thumbnail alt tag
    role: z.string().optional(), // Role on project
    bullets: z.array(z.string()).optional(), // Skills used within project
    stack: z.array(z.string()).optional(), // Tech stack for project
    timestamp: z.string().optional(), // Launch date for project
    linkUrl: z.string().optional(), // URL link to live project
    tags: z.array(z.string()), // Tags
    published: z.boolean(), // Is this draft or published?
    featured: z.boolean(), // Is this supposed to run in the featured feed?
    archived: z.boolean(), // Is this published but not meant to display in feeds?
  })
});

const shelf = defineCollection({
  loader: glob({ pattern: '**/**/*.md', base: "src/content/shelf" }),
  schema: ({ image }) =>
    z.object({
    category: z.string(),
    date: z.date(),
    title: z.string(),
    subtitle: z.string().optional(),
    timestamp: z.string().optional(),
    href: z.string().optional(),
    imageUrl: image(),
    tags: z.array(z.string()).optional(),
    featured: z.boolean().optional(),
  })
});

export const collections = { work, shelf };