import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import sanitizeHtml from 'sanitize-html';
import MarkdownIt from 'markdown-it';
const parser = new MarkdownIt();

export async function GET(context) {
    const blog = await getCollection('posts');
    return rss({
        title: "Tommy Oldfield",
        description: "Blog posts from a web developer in Dundee, Scotland",
        site: context.site,
        items: blog.map( (post) => ({
            title: post.data.title,
            pubDate: post.data.pubDate,
            link: `/blog/${post.slug}/`,
            ...(post.data.external.isExternal && {source: {
                    title: post.data.title,
                    url: post.data.external.url
                }}),
            content: sanitizeHtml(parser.render(post.body))
        }))
    })
}
