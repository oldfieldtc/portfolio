---
title: The three hats of user experience
slug: the-three-hats-of-user-experience
pubDate: 2022-08-30
description: User experience (UX) and design patterns fall under three categories (or hats) – white hat, grey hat, and black hat – or more simply put, the good, the bad, and the ugly.
author: Tommy Oldfield
image:
  filename: good-bad-ugly-ux-hats
  alt: Blondie, Angel Eyes, and Tuco from the film The Good, the Bad and the Ugly sporting white, grey, and black hats respectively.
external:
  isExternal: true
  url: https://digitalcommunications.wp.st-andrews.ac.uk/2022/08/30/the-three-hats-of-user-experience/
categories: ['External', 'User Experience']
tags: ["Usability"]
---

This post was originally posted on the [Digital Communications blog](https://digitalcommunications.wp.st-andrews.ac.uk/2022/08/30/the-three-hats-of-user-experience/).

---

User experience (UX) and design patterns fall under three categories (or hats) – white hat, grey hat, and black hat – or more simply put, the good, the bad, and the ugly.

The terms white/grey/black hat come from the world of computer hacking and have their origins in Western movies where cowboys would wear a white or a black hat, denoting whether they were a hero or a villain. These terms have since been used to describe practices in other web sectors such as search engine optimisation (SEO) and user experience.

This post was inspired by reading through the 2017 book ‘[White Hat UX](https://whitehatux.com/)’, written by Trine Falbe, Kim Andersen, and Martin Michael Frederiksen.

> “You get better results if you design good, fun, exciting, lovely, interesting, and real user experiences.”

The following sections describe each UX hat with a few examples of design patterns for that category.

## White Hat

White hat UX is all about using transparent and honest methods to design better systems, achieve better results, and provide a good user experience. Basically, it’s best practice.

### Forms

As well as being best practice for accessibility, having labels and hint text on form fields is great for user experience as it tells the user exactly what to input into each field. If there are any errors in the form fields, client-side continuous validation should be used to show whether the input was valid or invalid after the input had been entered. The user should not have to wait until the form has been submitted to see if their form entries were valid.

### Mobile navigation

On mobile, slide-in navigation from the side is better for usability than drop-down navigation. With slide-in navigation, the user can return to the content at any time by tapping on the content that is still visible. Drop-down navigation on the other hand, tends to push down and hide the previously visible content.

### Footer

For more complex sites and subsites, having a ‘fat footer’ consisting of links in that section can help the user find pages easier. Some websites have their entire sitemap in their footer!

## Grey Hat UX

Grey hat UX (sometimes called anti-patterns) usually does not carry bad intentions, but they are usually the result of bad design for that specific purpose. The book likens this to putting car tyres on a bike. Sure, it might work, but your driving experience will suffer most of the time.

For finding anti-patterns, the authors suggest using analytics and analysis tools (such as [Hotjar](https://digitalcommunications.wp.st-andrews.ac.uk/2021/01/07/how-we-are-using-hotjar-to-improve-our-web-pages/)) to identify problems and behaviours that users have.

### Missing clicks

Users can have issues when links and buttons are styled or formatted badly. On mobile, users may have difficulty pressing buttons if they are too small and links if link text isn’t big enough. If links haven’t been styled to distinguish them from the surrounding text (different colour, underlined), users may fail to see and click on them (and is also an accessibility issue!).

### Lack of efficiency

Patterns under this category can be caused by bad web performance (loading large images, scripts, and stylesheets, poor server performance), forcing the user to wait through a loading screen until webpages open, and having no response to actions that require the user to wait, making them think that the page has hung up and stopped working. For example, no indication that anything is happening when submitting a form which could cause the user to click the submit button many times and subsequently, submit the form many times.

Lack of efficiency could also be users having to navigate through many pages to reach the information that they’re looking for.

### Wrong destination

Users should be able to predict where links will take them before it has been clicked. If a task requires the user to log in but is sent back to the homepage instead of carrying on with their task before logging in, this would be classed as an anti-pattern. Links to external sites without any indication also falls under this category.

## Black Hat UX

Black hat UX (sometimes called dark patterns) deliberately intends on getting the user to do something unintended or make it extremely difficult for the user to achieve their goals. A typical reason for using dark patterns is to increase metrics, whether that be selling more products, or having more people subscribed to a newsletter, for example.

### Trick questions

I’m sure we’ve all fell victim to this before! Trick questions are usually found in registration forms with checkboxes at the bottom. One asks you if you accept the terms and conditions and the other asks you to confirm that you would like to opt out in not receiving contact about offers from the company. A slightly exaggerated example perhaps, but this kind of wording aims to trick people into accepting things that they might not have originally accepted had the wording been clearer.

### Full page call-to-actions

Another popular dark pattern where a huge pop-up call-to-action appears a split second after loading the page. The call-to-action usually either asks you to disable your ad-blocker, sign up to their newsletter, download their app, or enter your email address for 10% off. Just let me browse your website!

### Roach motel

This is a term that is used for services that make it easy for you to sign up but make it a nightmare to delete your account. The same principle applies to checkout pages that remove any links back to the front page, making it harder for users to back out of completing the checkout process.

### Forced continuity

Another dark pattern that people fall victim to is companies offering you a free trial of their product, but they require you to insert your card details beforehand. The companies hope that you’ll forget to cancel before the free trial is over and before you know it, you’ve been put on the paid subscription plan.

## Conclusion

Every design and development choice that we make on the University website can affect user experience (hopefully for the better!). Implementing grey and black hat UX design patterns can have the effect of reducing user satisfaction, lowering conversion, and undermines the understanding of the information, products, and services that you provide. We are continuously iterating over our design patterns to make sure that we are following best practice for user experience, but if you see anything that may fall under grey or black hat UX, please let us know!

## Related links

- [White Hat UX](https://whitehatux.com/)
- [Bad UX design fails](https://digitalcommunications.wp.st-andrews.ac.uk/2021/01/14/bad-ux-design-fails/)
- [Paul](https://boagworld.com/category/usability/) [Boag’s](https://boagworld.com/category/usability/) [User Experience Advice](https://boagworld.com/category/usability/)
- [Deceptive design](https://www.deceptive.design/)
