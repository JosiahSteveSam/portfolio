import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const point = z.object({ label: z.string(), text: z.string() });

const work = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/work' }),
  schema: z.object({
    order: z.number(),
    number: z.string(),
    title: z.string(),
    kind: z.string(),
    client: z.string(),
    stack: z.array(z.string()),
    // The one real figure the entry carries. `figureWords` sets words instead of a number.
    figure: z.string(),
    figureWords: z.boolean().default(false),
    figureLabel: z.string(),
    summary: z.string(),
    description: z.string(),
    // The case study, in the order Problem, Architecture, Implementation, Impact.
    // Problem is the Markdown body.
    architecture: z.array(point),
    implementation: z.array(point),
    impact: z.array(z.object({ figure: z.string(), label: z.string() })),
    impactNote: z.string().optional(),
  }),
});

export const collections = { work };
