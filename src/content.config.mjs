import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: "src/content/blog" }),
  schema: z.object({
    title: z.string(), // Display title of the content
    date: z.date(), // File creation date
    pubDate: z.date().optional(), // Optional: display date
    updated: z.date().optional(), // Optional: date last updated
    author: z.string().default('David M. Schulman').optional(), // Optional: author display name
    tags: z.array(z.string()), // Tags
    published: z.boolean(), // Is this draft or published?
    featured: z.boolean(), // Is this supposed to run in the featured feed?
    archived: z.boolean(), // Is this published but not meant to display in feeds?
  }),
});

const work = defineCollection({
  loader: glob({ pattern: '**/**/*.md', base: "src/content/work" }),
  schema: ({ image }) =>
    z.object({
    title: z.string(), // Display title of the content
    date: z.date(), // File creation date
    pubDate: z.date().optional(), // Optional: display date
    description: z.string().optional(), // Brief summary of the work
    category: z.string(), // Grouping the work belongs within
    cover: image(), // Thumbnail representing the work
    coverAlt: z.string(), // Thumbnail alt tag
    hoverColor: z.string().optional(), // For Image Card, optional hover color definition,
    role: z.string().optional(), // Role on project
    skills: z.array(z.string()).optional(), // Skills used within project
    stack: z.array(z.string()).optional(), // Tech stack for project
    launched: z.string().optional(), // Launch date for project
    features: z.string().optional(), // Features involved in project creation
    impact: z.string().optional(), // Impact project had
    link: z.string().optional(), // URL link to live project
    tags: z.array(z.string()), // Tags
    published: z.boolean(), // Is this draft or published?
    featured: z.boolean(), // Is this supposed to run in the featured feed?
    archived: z.boolean(), // Is this published but not meant to display in feeds?
  })
});

const gear = defineCollection({
  loader: glob({ pattern: '**/**/*.md', base: "src/content/gear" }),
  schema: ({ image }) =>
    z.object({
    title: z.string(), // Display title of the content
    date: z.date(), // File creation date
    description: z.string().optional(), // Brief summary of the gear
    category: z.string(), // Grouping which the gear belongs to
    cover: image(), // Thumbnail representing the gear
    make: z.string(), // Manufacturer
    model: z.string(), // Name of the gear
    domain: z.string(), // Is it digital or analog?
    format: z.string(), // The form factor of the gear
    year: z.number().optional(), // When was the gear released?
    voices: z.number().optional(), // How many voices does the gear have?
    own: z.boolean().optional(), // Do I own this currently?
    tags: z.array(z.string()), // Tags
    published: z.boolean(), // Is this draft or published?
    featured: z.boolean(), // Is this supposed to run in the featured feed?
    archived: z.boolean(), // Is this published but not meant to display in feeds?
    blocks: z.array(z.object({
      content: z.string(),
      _template: z.string().optional(),
    })).optional(),
  })
});

export const collections = { blog, work, gear };