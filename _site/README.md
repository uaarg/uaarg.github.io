# UAARG website on Github Pages
This website is using the [Jekyll Incorporated](http://incorporated.sendtoinc.com/) theme.

## Installation
Clone this repository to your local machine.

Assuming you already have Ruby 1.9.3. If not, install it for your system!

You'll also need a javascript runtime. Add this to the Gemfile in this directory:
`gem 'therubyracer'`
Then install the required dependencies:
`bundle install`

To serve a local version that you can use for testing:
`jekyll serve --watch`
    
## Configuration
Edit: _config.yml (general options), main.css (theme colors &amp; fonts)

```
uaarg.github.io/
├── _config.yml
├── _assets/
    ├── stylesheets/
        ├── main.scss
```

_Note: when editing _config.yml, you need to restart jekyll to see the changes.__

    
## Publish to Github Pages
There are two branches here: `source` and `master`. Make your site configuration changes, write posts, etc. in the `source` branch; the `master` branch is for the published result!

Once you've made your changes in the `source` branch, publish to `master` with the `rake` task (this will overwrite the master branch!):
``` 
rake publish
```

## Theme Authors

Originally build for [sendtoinc.com](https://sendtoinc.com), your workspace for sharing and organizing knowledge

**Karri Saarinen**

+ [http://twitter.com/karrisaarinen](http://twitter.com/karrisaarinen)
+ [http://github.com/ksaa](http://github.com/ksaa)

**Jori Lallo**

+ [http://twitter.com/jorilallo](http://twitter.com/jorilallo)
+ [http://github.com/jorde](http://github.com/jorilallo)

## Copyright and license

Copyright 2013 Kippt Inc. under [The MIT License ](LICENSE)

