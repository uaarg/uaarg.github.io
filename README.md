# UAARG website on Github Pages
This website is using the [Jekyll Incorporated](http://incorporated.sendtoinc.com/) theme.

## Installation
Clone this repository to your local machine.

Assuming you already have Ruby 2.3.1 If not, install it for your system!
```
sudo apt install ruby
sudo apt install ruby-dev
```

Then install the required dependencies (Recommended to install as project specific rather than as global gems):

```
bundle install --path vendor/bundle
```

**Note that any packages installed will need to be prefixed by:**
```
bundle exec <Package-Command>
```

*Why do we install dependencies in project workspace?*  - To prevent clutter in global configurations.

To serve a local version that you can use for testing:
```
bundle exec jekyll serve --watch
```
 
You can then open your web browser and preview the site by entering the `server address` outputted by the serve command.
    
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
There are two branches here: `source` and `master`. Make your site configuration changes, write posts, etc. in the `source` branch as this is our development sandbox. 

The `master` branch is for the published result. It is what uaarg.com directly renders.

To publish the files into the master branch we will first need to make `_site` a git repository pointing to the `master` branch. This can be accomplished with the `rake` task. (This will only need to be done the first time the repository is cloned) 
```
bundle exec rake setup
```

Once you've made your changes in the `source` branch, you can generate the website with the `rake` task this will modify files in the `_site` directory:
``` 
bundle exec rake generate
```

To push the files onto the master branch you can use the `rake` task.
```
bundle exec rake push
```

To generate and publish the site you can use the the `rake` task as well. This essentially performs `rake generate` followed by `rake push`.
```
bundle exec rake publish
```

All the above commands are executed at the root of the project folder. That is, don't execute it in the `_site` folder.

## Editing Content

### Members

Member information can be found in the `collections/_members` directory. Follow the format provided. There is also a format document in the google drive (May need to do digging to find it).

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

