---
title: A look at AVIF
slug: a-look-at-avif
pubDate: 2021-05-20
description: AVIF is a modern image format and its presence is attracting a lot of attention in the web development world. How does it compare to other image formats, and what impact will this format have on the web?
author: Tommy Oldfield
image:
  filename: avif-thumbnail
  alt: An AVIF file icon overlaid on a browser icon on a red background.
external:
  isExternal: true
  url: https://digitalcommunications.wp.st-andrews.ac.uk/2021/05/20/a-look-at-avif/
categories: ['External', 'Technology']
tags: ["Image optimisation", "Performance"]
---

This post was originally posted on the [Digital Communications blog](https://digitalcommunications.wp.st-andrews.ac.uk/). Visit the URL to see the full post with image comparisons.

---

AVIF is a modern, but relatively unknown, image format and its presence is attracting a lot of attention in the web development and design world. But what is AVIF? How does it compare to other image formats, and what impact will this format have on the web?

## What is AVIF?
AVIF (.avif) is a new, modern image format that is based on a video format called AV1, which has been developed by the Alliance for Open Media (AOMedia). The Alliance for Open Media has many big names in their governing members including Google, Apple, Microsoft, and Netflix.

AVIF has been praised for its image compression and quality, meaning your images will look better and have a smaller file size than JPEG, PNG, and even WebP! The format is royalty-free, which hopefully means that the format will get fast, widespread web adoption as there is no license fees or royalties for companies or individuals to pay to use it.

AVIF is already being used and implemented by some of the governing members of the Alliance for Open Media &#8211; Netflix is currently using it for their title cards; Google Chrome currently supports it as well as parts of Android, and Microsoft have developed apps for viewing and editing AVIF files.

## Browser support

At the time of writing, with AVIF being a relatively new format (2018), many browsers haven’t fully supported the format yet with Chrome and Opera leading the charge. Firefox is in the process of supporting AVIF for everyone and with Apple being a governing member of AOMedia, I would think that support within the Apple ecosystem would come quite soon.


Because AVIF doesn’t yet have full browser support, developers can use the picture element to provide various fallbacks in case the format isn’t yet supported on your browser.


As an example, here is what the hero banner code could look like if we supported AVIF images on the University website with JPEGs as a fallback.


```
<picture class="hero-section__image">
    <source srcset="hero-banner.avif" type="image/avif" media="(min-width: 640px)" />
    <source srcset="hero-banner.jpg" media="(min-width: 640px)" />
    <source srcset="hero-banner-750x500.avif" type="image/avif" media="(max-width: 639px)" />
    <img decoding="async" src="hero-banner-750x500.jpg" alt="Image details" />
</picture>
```

## Resources
- <a href="https://jakearchibald.com/2020/avif-has-landed/">AVIF has landed – Jake Archibald</a></li>
- <a href="https://netflixtechblog.com/avif-for-next-generation-image-coding-b1d75675fe4">AVIF for Next-Gen Image Coding – Netflix</a></li>
- <a href="https://squoosh.app/">Squoosh</a> – image converter and comparison tool</li>
- <a href="https://caniuse.com/avif">Can I Use &#8211; AVIF</a></li>
