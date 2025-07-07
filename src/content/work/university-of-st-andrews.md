---
title: University of St Andrews
description: An insight into the work I do at the University of St Andrews.
image:
    filename: uofsta-thumbnail
    alt: University of St Andrews homepage shown on a laptop.
slug: university-of-st-andrews
tags: ["WordPress", "PHP", "TerminalFour", "JavaScript"]
---


## Digital Communications

From January 2020 to November 2024, I was part of the [Digital Communications team](https://digitalcommunications.wp.st-andrews.ac.uk/) as a web developer. I worked on updating the website using TerminalFour, answered support calls, created and updated collections in Funnelback, and worked on the WordPress multisite, which included developing and updating the University WordPress theme, and developing plugins.

## WordPress
The majority of my work involved developing for and being responsible for over 800 sites on a handful of the University's WordPress multisites. Through this, I had helped develop accessible themes and plugins to ensure cookie data is consistent across the University website, and to help the team with the maintenance and auditing of the multisite.

### University of St Andrews theme
The University of St Andrews WordPress theme was built to create a visual consistency between the main University website and subsites on our multisite. The theme uses the [digital pattern library](https://www.st-andrews.ac.uk/dpl/) and is fully responsive and compliant with the current WCAG 2.1 AA accessibility guidelines.

Bespoke child themes have also been developed for the [news](https://news.st-andrews.ac.uk/), [events](https://events.st-andrews.ac.uk/), and the [IT Services](https://itservices.wp.st-andrews.ac.uk/) site.

### Plugins
#### Multisite audit
Keeping up to date with over 800 sites is a tough task. Before joining the team, the entire WordPress multisite was audited every 6 months or so and the data was kept in a manually updated spreadsheet. To help with the maintenance, I developed a plugin that allows super admins to audit the multisite and download the data as a spreadsheet. Based on the University's [WordPress policy](https://www.st-andrews.ac.uk/digital-standards/policies/wordpress/), the plugin gathers data on:

- every website on the multisite - including admins, active plugins, theme, creation date, last updated date.
- sites that have been created but no content has been added within the first 3 months of the creation date
- sites that haven't been updated for at least a year
- sites that aren't using an accessible theme
- external users
- users that don't have a role on any site
- sites that have fewer than 2 admins
- video files that have been uploaded to the multisite
- private and password protected pages
- plugins installed on the multisite and what sites are using theme

The plugin has saved the team weeks of work in not having to manually update their records and allows them to maintain the multisite easier, and quickly provide data when requested.

#### Cookie consent
With the [Privacy and Electronic Communications Regulations (PECR)](https://ico.org.uk/for-organisations/guide-to-pecr/) in effect, the team needed an effective way to set cookies and an easy way for users to consent (or not). The service that's used on the main University website had a WordPress plugin but there was one major issue - the cookies and other settings had to be manually set on each subsite. With over 800 sites, this was unfeasible, especially if something needed to be changed in the future.

I developed a plugin that stored cookie settings and updated the settings in the cookie consent plugin for every subsite. When it came to updating a cookie or a setting, any changes made would copy over to the other subsites. The plugin also blocked 3rd party content in iframes if full consent was not given.

The plugin has since evolved into a fully fledged cookie consent plugin that saves cookie preferences across the various University subdomains and acts as a standalone cookie consent solution for external domains.
