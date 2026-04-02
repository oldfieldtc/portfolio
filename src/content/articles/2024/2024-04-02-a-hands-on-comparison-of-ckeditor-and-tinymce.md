---
slug: ckeditor-vs-tinymce
title: A hands-on comparison of CKEditor and TinyMCE
pubDate: 2024-04-02
description: How do these two WYSIWYG editors stack up against each other and which one suits our needs the best?
author: Tommy Oldfield
image:
  filename: no-image
  alt: no-alt
external:
    isExternal: false
categories: ['Technology']
tags: ['St Andrews', 'TerminalFour']
---

At the [University of St Andrews](/work/university-of-st-andrews), we’ve been updating our processes around updating course content and have looked into using two of the biggest WYSIWYG (what you see is what you get) editors – [CKEditor](https://ckeditor.com/) and [TinyMCE](https://www.tiny.cloud). How do they stack up against each other and which one suits our needs the best?

## Context

For many years, the way we’ve updated our course pages has been a long and manual affair. Members of the team would copy the information from each course into a Word document and these would be sent to Schools for them to review and update. After a lot of back and forth, the new course pages would be put into a ‘proofing’ section in [TerminalFour](https://www.terminalfour.com/) for Schools to see a preview of how it would look on the website before it goes live. With over 100 courses, this is incredibly time-consuming!

Our idea for future years is to copy the current course pages into this ‘proofing’ section and allow the Schools to review and make changes to the content on the page directly, which would then be sent off to [Digital Communications](https://digitalcommunications.wp.st-andrews.ac.uk/) and/or the Admissions team to review and make changes to the live pages. To facilitate this, a third-party editor must be used.

We decided to look at two editors – CKEditor and TinyMCE – as they are both incredibly popular and come with premium features such as comments and track changes that we were looking for.

## CKEditor

CKEditor has a really nice feature to get you up and running quickly where you can pick the editor and plugins you’d like to use and it will provide you with the code to use. This was useful for trying out all the features CKEditor had to offer, but it was a challenge trying to implement it into the code for the course pages. After following their clear documentation and some trial-and-error, I was able to get CKEditor loaded with multiple editors on a course page demo with comments and track changes working too.

With the editor outputting its own special [comments markup](https://ckeditor.com/docs/ckeditor5/latest/features/collaboration/comments/comments.html#comments-markup) and [changes markup](https://ckeditor.com/docs/ckeditor5/latest/features/collaboration/track-changes/track-changes.html#suggestions-markup), I had real trouble getting the data that I needed. I ended up using [regular expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions) (both loved and hated by programmers!) to extract the data I needed and convert CKEditor’s proprietary HTML tags to [semantic HTML](https://web.dev/learn/html/semantic-html). Despite these hurdles, I was able to successfully implement a working course page proofing demo that emailed the changes to the team.

### Pros

- Clean, easy to use editor with lots of features.
- Not too difficult to set up.
- Great documentation.

### Cons

- Issues with parsing comments and changes data.
- Too expensive for our use case.

## TinyMCE

TinyMCE is the default editor in our content management system, TerminalFour, which gives the team and current content editors a sense of familiarity when using it. It was very easy to get multiple editors set up and rather than looking at TinyMCE’s premium features, we decided to use a comments and track changes plugin by [Loop Index](https://www.loopindex.com/).

While setting up TinyMCE was a breeze, setting up the plugins was trickier. The documentation provided wasn’t as clear as CKEditor’s and for the comments plugin, the documentation provided by their website and in the plugin files are completely different, causing confusion and a lot of trial-and-error to get things working.

Getting the comment and changes data was much easier than in CKEditor, although I still had to do some regular expression wizardry to get the data correctly formatted for email. The process was a little more straightforward in getting a working demo set up but that may be due to the groundwork that was laid when using CKEditor.

### Pros

- Clean, easy to use editor with lots of features.
- Existing familiarity due to use in TerminalFour.
- TinyMCE is easy to self-host and the Loop Index plugins are reasonably priced.

### Cons

- Documentation for the Loop Index plugins could be clearer.
- Upgrading to use the TinyMCE versions of the comments and track changes plugins was too expensive for our use case.

## Conclusion

While both editors have great features and are easy to use, we’ve decided use TinyMCE with the Loop Index plugins for streamlining our course content updates. Both the familiarity and cost were big factors in choosing TinyMCE and we’re looking forward to the efficiency benefits that the updated course content process will bring.
