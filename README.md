# UAARG website on Github Pages

UAARG's website is hosted on GitHub Pages. Deployment is as simple as pushing to `master`.

## Editing it Locally

Simply change the HTML files in the repo root. To see a live server while you edit, run the following command in a terminal window (or use a live HTML server extension on your editor):

```sh
python3 -m http.server 8080

# Then visit http://localhost:8080
```

## Directory Structure

All images go in `img/`, css in `css/` and fonts in `font/`.

HTML is all in the top-level. They can be added to directories for items like
blog posts.

## Copyright and license

Copyright UAARG under the [MIT License](LICENSE).
