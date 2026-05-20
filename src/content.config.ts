/**
 * Mekluc Freight — Content collections config
 * Astro 5 content collections for insights (blog), services, solutions
 */

import { defineCollection, z } from 'astro:content';

const insights = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    author: z.string().default('Mekluc Freight'),
    category: z.enum(['customs', 'corridors', 'compliance', 'industry-trends']),
    tags: z.array(z.string()).default([]),
    image: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const services = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    order: z.number(),
    icon: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const solutions = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    order: z.number(),
    icon: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { insights, services, solutions };
