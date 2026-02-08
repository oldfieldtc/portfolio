---
title: Migrating from Jekyll to Astro
slug: migrating-from-jekyll-to-astro
pubDate: 2025-09-11
description: Over 1.5 years ago, I migrated from Jekyll to Astro. Here's how it went and my experience since.
author: Tommy Oldfield
image:
  filename: jekyll-to-astro
  alt: The Jekyll and Astro logos with an arrow in between, pointing to the Astro logo.
external:
  isExternal: false
categories: ["Work"]
tags: ["Astro", "Portfolio"]
---

Back in February 2023 I wrote about [building my site using Jekyll](/articles/out-with-the-old-in-with-the-new) and hosting it on Cloudflare. I said “I don’t plan on changing frameworks or hosting provider in the near future”. Well, in December 2023, I decided I would ditch Jekyll and migrate everything over to Astro instead.

It is now 1.5 years after completing the migration, and after just upgrading from Astro 4 to 5, I wanted to reflect on how the migration went and my experience with using Astro since.
## Why Astro?

I had started using Astro a little at my job at the [University of St Andrews](/work/university-of-st-andrews) and to learn more about it, I thought migrating my site would be a good idea. That, and the hype around Astro at the time.

While I did enjoy using Jekyll and the features it provided, I’m more used to working with Node/npm rather than Ruby. I would try to update gems and run into compatibility errors. With little experience of using Ruby/gemfiles, it was frustrating trying to debug errors.
## The migration

According to my [website's commit history](https://github.com/oldfieldtc/portfolio/commits/master/?since=2023-12-01&until=2024-04-15), it took me ten days across four months to migrate everything over like-for-like. I used both the Astro docs and [Coding in Public](https://www.youtube.com/@CodinginPublic/)'s videos - which were incredibly helpful - to help me understand creating components and layouts, how content collections work, and querying them to show the data within my components.

As I didn't know TypeScript at the time (and still don't! 😬), some things I took from the docs and videos I watched are in my codebase and admittedly, I'm not exactly sure what they do! (take note vibe coders...) I turned off TypeScript support in the config to stop the terminal yelling at me during development and build time, but this is definitely something I will be picking up in the future to stop the TypeScript syntax looking so alien to me.

All in all, the migration went very smoothly and, with the help of the community, showed me how easy it was to create a website with Astro.
## Post-migration
In the 1.5 years since migrating, I'm ashamed to say that I've neglected my site and haven't done much since - I fixed an issue with the [RSS feed](/feed.xml) and created a redirects file that Cloudflare can use. In that time, I had worked on other projects, had another child, and [moved teams at work](/articles/moving-around-the-university-of-st-andrews/) so updating and maintaining this website took a backseat.

That changed recently when I upgraded from Astro 4 to version 5, made very easy again by the Astro docs. Coming back to work on this has been a good change of pace for me, and although some features have left me confused, I'm keen to dust everything off and start maintaining and learning again.
## The future
Judging by my past actions I will have started migrating to a new platform in the next six months.

Jokes aside, I plan on working more on this site, utilising more of Astro's features, and learning React to create components with. Also, quoting myself, I still want to "add more functionality to my site through service workers and APIs to query databases".

I also want to learn [Laravel](https://laravel.com/) as I'm using PHP at work, but I will have to use that for another project!

---

Jekyll logo by [Jekyll contributors](https://github.com/jekyll/brand), used under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).
