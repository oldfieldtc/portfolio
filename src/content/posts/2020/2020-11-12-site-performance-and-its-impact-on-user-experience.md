---
title: Site performance and its impact on user experience
pubDate: 2020-11-12
description: Your site could look amazing and be easy to use, but if your site is slow to load, or even failing to load, this will have an effect on the overall experience. A summary of Paul Boag's "Why performance is the best way to improve the user experience" article.
author: Tommy Oldfield
image:
  filename: developer-laptop
  alt: A laptop on a white desk showing a code editor with code
external:
  isExternal: true
  url: https://digitalcommunications.wp.st-andrews.ac.uk/2020/11/12/site-performance-and-its-impact-on-user-experience/
categories: ['External', 'User Experience']
tags: ["Performance", "Sustainability"]
---

This post was originally posted on the [Digital Communications blog](https://digitalcommunications.wp.st-andrews.ac.uk/).

“Developers have a greater impact on user experience than designers do”, Paul Boag claims in his [Why performance is the best way to improve the user experience](https://boagworld.com/usability/performance-ux/) article, and that “non-visual elements on a webpage can have a profound effect on the user experience”. This post is a summary of Paul Boag’s article and how it can relate to the University website.

## How does performance improve the user experience?

Paul Boag is right in saying that site performance is overlooked when it comes to user experience. Your site could look amazing and be easy to use, but if your site is slow to load, or even failing to load, this will have an affect on the overall experience.

The following sections show the ways a poorly performing website can affect user experience.

### Increases the time to complete a task

The longer it takes for a user to do something on your website, the more likely they are to give up. This will damage conversion rates. A 1-second delay in page load time results in a 7% drop in conversion and if increased to 4 seconds, 25% of users will simply abandon the page ([source – Neil Patel](https://neilpatel.com/blog/loading-time/d)). [Google analytics data from 2016](https://www.thinkwithgoogle.com/intl/en-gb/marketing-strategies/app-and-mobile/mobile-page-speed-new-industry-benchmarks/) found that on mobile devices, if a webpage takes longer than 3 seconds to load, 53% of users will abandon the page.

If users need to visit multiple pages to get the information they want, slow-loading web pages will only make it worse and frustrate the user.

### Damages findability and SEO

Google has stated that [the faster your site is (especially on mobile), the better your rankings](https://developers.google.com/web/updates/2018/07/search-ads-speed). Better search rankings mean that your content can be found easier and could see an increase in your page views.

### Reduces user satisfaction

Fast loading pages evoke positive feelings in users and give them a feeling of progression towards their goals. However, a 1-second delay in page load will decrease user satisfaction by 16%, and 79% of users are less likely to buy from a website that suffers from poor performance ([source – Neil Patel](https://neilpatel.com/blog/loading-time/)).

This may also have a knock-on effect of harming your brand’s reputation as [44% of unhappy users will go and tell their friends about their bad website experience](https://www.elasticpath.com/blog/performance).

### Endangers accessibility

Accessibility doesn’t just cover accessibility for users with disabilities, it covers anyone actually accessing your website. A site with poor performance could result in the site timing out or failing to load assets such as JavaScript and CSS files, and web fonts which will render your site inaccessible.

If your HTML code is bloated or image file sizes are too high, it could affect users with low bandwidth and internet speed. People using mobile data, internet in developing countries and rural areas, and public wifi will be negatively affected by a poorly performing, bloated website.

On the web accessibility side, [a 2016 survey](http://www.clickawaypound.com/cap16finalreport.html#sthash.pzzcwtPK.dpuf) found that 71% of users with disabilities will click off a website if it is difficult for them to use with assistive technologies, such as a screen reader. Those disabled users also have an estimated spending power of nearly £12 billion in the UK alone, so it’s incredibly important to not ignore their needs.

### Undermines understanding

According to the [Aberdeen Group](https://www.globenewswire.com/news-release/2008/12/10/993768/0/en/The-Performance-of-Web-Applications-One-Second-Wonders-for-Winning-or-Losing-Customers.html), each 1 second added to load time leads to users viewing 11% fewer pages. The fewer pages that a user views will lead to them understanding less of your product or service. Poor understanding means that people could miss out on important information and, in the University’s case, could lead them to ask the IT Service Desk, which increases their workload and reduces their capacity to work on other things.

## Improving our performance

I wanted to see if there was any way to improve the University website’s performance, and I decided to look into minifying the HTML on the homepage.

Currently, the homepage’s HTML is 33.3KB (34,138 bytes) in size, which is incredibly small, but it can be reduced even further.

- Removing the code indentation shaves off 1.8KB.
- Removing empty lines gets rid of a minute 0.1KB
- Removing any HTML/JS comments further reduces the size by 0.9KB.

Altogether, these small changes have removed 2.8KB from the homepage’s file size, which is around an 8.5% reduction.

I also used an [online minifying tool](https://www.willpeavy.com/tools/minifier/), which brought the file size even further down to 29.9KB – an 11% reduction from the original!

While these reductions in file size are very small, we need to look at the bigger picture. Any reduction in file size, while keeping full functionality, will allow the University to save on bandwidth and [reduce our carbon footprint](https://digitalcommunications.wp.st-andrews.ac.uk/2020/03/30/website-performance-and-the-hidden-environmental-impact-of-the-internet/). For the week of 19 October 2020 to 25 October 2020, 75.2MB would be saved if tabs, empty lines, and comments were removed from the homepage. If this were extended from the start of the year to 25 October 2020, we could have saved 2.2GB of bandwidth just by making a few changes to our code.

## Conclusion

Site performance can greatly affect the user experience which can have the knock-on effect of damaging SEO, reducing user satisfaction, lowering conversion, and undermining the understanding of your product or service. Even making small changes to your site, such as minifying your code, can make a positive impact on your site’s performance.
