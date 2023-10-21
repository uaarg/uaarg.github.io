# UAARG website on Github Pages

UAARG's website is hosted on GitHub Pages using the Jekyll as the content management tool.

If this is the first time you are working on this website, please familiarize yourself with the following technologies:

- HTML and CSS (Note: JavaScript is not used very much in this website.)
- Markdown
- [Bootstrap CSS framework v4](https://getbootstrap.com/docs/4.6/getting-started/introduction/)
- [Jekyll](https://jekyllrb.com/)
- [Liquid Templating](https://shopify.github.io/liquid/)

## Installation

Clone this repository to your local machine.
Make sure you are using a UNIX system.

Install Ruby 2.3.1.

```
sudo apt install ruby
sudo apt install ruby-dev
```

Then install the required dependencies (Recommended to install as project specific rather than as global gems):

```
bundle config set path 'vendor/bundle'
bundle install
```

*Why do we install dependencies in project workspace?*  - To prevent clutter in global configurations.

## Running a Dev Server

To serve a local version that you can use for testing:

```
bundle exec jekyll serve --watch --livereload
```
 
You can then open your web browser and preview the site by entering the `server address` outputted by the serve command.

__Note: In general, to run any installed packages, use__:

```
bundle exec <Package-Command>
```
    
## Directory Structure

Some of the files and folders are directly served to clients. 
Others are pre-processed by Jekyll to generate the actual pages.

Below is a list of these special pre-processed files/directories.

```
_collection: Contains human readable content to be displayed in pages or cards.
_includes: Reusable website components that can be used anywhere.
_layouts: Acts as a "scaffolding" for all content pages.
assets: Contains images, CSS and JS files. Static assets.
vendor: Ruby dependencies.
```
    
## Publish to Github Pages

Simply push to the `master` branch and it should be built by github.

## Editing Content

### Top Level Pages

Simply edit the HTML files at the root of this repository.
Note that the blog page is in a folder rather than HTML.

### Members

Member information can be found in the `collections/_members` directory. Follow the format provided. There is also a format document in the google drive (May need to do digging to find it).

### Posts

Go to `_collections/_posts` and create a file in this format:

```
YEAR-MONTH-DAY-title.md
```

Then copy the [front matter](https://jekyllrb.com/docs/front-matter/) in past blogs and replace the information in them.

Write the content in markdown.

## Developers:

Thank you to all the developers who have worked on this website. Contact UAARG if you want your name added!

1. Rijesh Augustine
1. Cindy Xiao
1. Ryan Sandoval
1. Aditya Harvi
1. Ricky Au
1. Saahil Rachh
1. Khushi Mittal 

## Copyright and license

Copyright 2013 Kippt Inc. under [The MIT License ](LICENSE)

