---
published: false
---

## Hosting this site
This website is hosted by [Github Pages](https://pages.github.com/), a free service provided by Github that lets you host a static site - that is, a site that isn't generated on the fly by a web app running in the background. If you don't have any dynamic content or don't want to deal with databases and content management systems to make a simple site, it's a really good solution. Basically, all the files for this site exist in [this Git repository](https://github.com/cxiao/cxiao.github.io) hosted on Github.

Github Pages is also nice because you can set up a blog really easily via a tool called [Jekyll](http://jekyllrb.com/), which allows you to write pages and blog posts for your website in a form. Jekyll then transforms that into a set of HTML and CSS files for you. With Github pages, all you have to write are 

Again, hosting through Github Pages is free. The only thing I had to pay for to get this site up was the custom domain name. Github repositories have a limit of 1GB with an individual size limit of 100MB. Github is vague about what the bandwidth limits are; according to their [TOS](https://help.github.com/articles/github-terms-of-service#g-general-conditions):

> If your bandwidth usage significantly exceeds the average bandwidth usage (as determined solely by GitHub) of other GitHub customers, we reserve the right to immediately disable your account or throttle your file hosting until you can reduce your bandwidth consumption.

I'm not too worried about this, though; the site for the very popular web development framework [Ruby on Rails](http://rubyonrails.org/) is [hosted on Github Pages](https://github.com/rails/rails.github.com), as are several [popular](http://www.jacklmoore.com/) [developer blogs](http://bost.ocks.org/mike/).

## Writing this post
This blog post was written in [Markdown](http://daringfireball.net/projects/markdown/), an easy way to write nicely-formatted documents in plain text without having to write raw HTML. You can see the Markdown source of this post on the [github repository for this site](https://github.com/cxiao/cxiao.github.io/tree/master/_posts). Once the Markdown posts are uploaded, Jekyll running on the Github servers converts this to an HTML page.

# Examples of Markdown
Here's an example of Markdown formatting in action:

Markdown:
```markdown
It's important when quoting statements to attribute them to the **right person**:

![Albus Dumbledore](/_posts/albus.jpg)

> Do, or do not. There is no try.

-- _Gandalf the Grey_
```

The generated result:

It's important when quoting statements to attribute them to the **right person**:

![Albus Dumbledore](/_posts/albus.jpg)

> Do, or do not. There is no try.

-- _Gandalf the Grey_

## Other features

Jekyll also makes it easy to add the same bit of HTML to multiple pages, making it convenient to add things like comments and analytics. I've added comments to this site through Disqus, an external commenting service.
