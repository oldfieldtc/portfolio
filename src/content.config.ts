// Import utilities from `astro:content`
import {z, defineCollection, reference} from "astro:content";
import { glob } from 'astro/loaders';

const postsCollection = defineCollection({
    loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/posts" }),
    // type: 'content',
    schema: z.object({
        title: z.string(),
        pubDate: z.date(),
        description: z.string(),
        author: z.string(),
        image: z.object({
            filename: z.string(),
            alt: z.string()
        }),
        external: z.object({
            isExternal: z.boolean(),
            url: z.string().url().optional()
        }),
        categories: z.array(z.string()),
        tags: z.array(z.string())
    })
});

const workCollection = defineCollection({
   // type: 'content',
    loader: glob({ pattern: '[^_]*.{md,mdx}', base: "./src/content/work" }),
   schema: z.object({
       title: z.string(),
       description: z.string(),
       image: z.object({
           filename: z.string(),
           alt: z.string()
       }),
       tags: z.array(z.string())
   })
});

export const collections = {
    posts: postsCollection,
    work: workCollection
}
