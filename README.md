# UAARG website on Github Pages

## Installation
Clone this repository to your local machine.

Assuming you already have Ruby 2.3.1 If not, install it for your system!
```
sudo apt install ruby
sudo apt install ruby-dev
```

Then install the required dependencies (Recommended to install as project specific rather than as global gems):

```
bundle config set path 'vendor/bundle'
bundle install
```

__To run any insalled packages, use__:

```
bundle exec <Package-Command>
```

*Why do we install dependencies in project workspace?*  - To prevent clutter in global configurations.

To serve a local version that you can use for testing:

```
bundle exec jekyll serve --watch
```
 
You can then open your web browser and preview the site by entering the `server address` outputted by the serve command.
    
    
## Publish to Github Pages

Simply push to the `source branch` and it should be build by github.

## Editing Content

### Members

Member information can be found in the `collections/_members` directory. Follow the format provided. There is also a format document in the google drive (May need to do digging to find it).

## Developers:

Thank you to all the developers who have worked on this website. Contact UAARG if you want your name added!

1. Rijesh Augustine
1. Cindy Xiao
1. Ryan Sandoval
1. Aditya Harvi
1. Ricky Au

## Copyright and license

Copyright 2013 Kippt Inc. under [The MIT License ](LICENSE)

