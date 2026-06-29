import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const jurnal = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/jurnal' }),
  schema: z.object({
    title: z.string(),
    locatie: z.string(),                 // ex: "Rădulești, lângă Videle"
    data: z.coerce.date(),               // sortăm descrescător după asta
    eticheta: z.string().optional(),     // SEO/tip: "Tei bătrân · Carie · Coțofană"
    rezumat: z.string(),                 // text pe card + lede articol
    fotoHero: z.string(),                // "/images/jurnal/...jpg"
    fotoHeroAlt: z.string().optional(),  // text alternativ (accesibilitate/SEO)
    fotoHeroCaption: z.string().optional(),
    featured: z.boolean().default(false),
    galerie: z.array(z.object({
      imagine: z.string(),
      legenda: z.string().optional(),
    })).default([]),
  }),
});

export const collections = { jurnal };
