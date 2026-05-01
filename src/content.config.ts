// Import utilities from `astro:content`
import {z, defineCollection} from "astro:content";
import { glob } from 'astro/loaders';

const articlesCollection = defineCollection({
    loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/articles" }),
    // type: 'content',
    schema: z.object({
        title: z.string(),
        slug: z.string(),
        pubDate: z.date(),
        description: z.string(),
        author: z.string(),
        image: z.object({
            filename: z.string(),
            alt: z.string()
        }).partial(),
        external: z.object({
            isExternal: z.boolean(),
            url: z.string().url().optional()
        }),
        categories: z.array(z.string()),
        tags: z.array(z.string())
    })
});

const workCollection = defineCollection({
    loader: glob({ pattern: '[^_]*.{md,mdx}', base: "./src/content/work" }),
   schema: z.object({
       title: z.string(),
       slug: z.string(),
       description: z.string(),
       image: z.object({
           filename: z.string(),
           alt: z.string()
       }),
       tags: z.array(z.string())
   })
});

export const collections = {
    articles: articlesCollection,
    work: workCollection
}
