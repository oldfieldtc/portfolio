import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import sanitizeHtml from 'sanitize-html';
import MarkdownIt from 'markdown-it';
const parser = new MarkdownIt();

export async function GET(context) {
    const articles = await getCollection('articles');
    return rss({
        title: "Tommy Oldfield",
        description: "Articles from a web developer in Dundee, Scotland",
        site: context.site,
        items: articles.map( (article) => ({
            title: article.data.title,
            pubDate: article.data.pubDate,
            link: `/articles/${article.data.slug}/`,
            ...(article.data.external.isExternal && {link: article.data.external.url}),
            ...(article.data.external.isExternal && {source: {
                    title: article.data.title,
                    url: article.data.external.url
                }}),
            content: sanitizeHtml(parser.render(article.body))
        }))
    })
}
