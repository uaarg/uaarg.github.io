require "rubygems"
require "tmpdir"

require "bundler/setup"
require "jekyll"


# Change your GitHub reponame
GITHUB_REPONAME = "uaarg/uaarg.github.io"


desc "Generate blog files"
task :generate do
  Jekyll::Site.new(Jekyll.configuration({
    "source"      => ".",
    "destination" => "_site"
  })).process
end


desc "Generate and publish blog to gh-pages"
task :publish => [:generate] do
  pwd = Dir.pwd
  Dir.chdir "_site"

    system "git add ."
    message = "Site updated at #{Time.now.utc}"
    system "git commit -m #{message.inspect}"
    system "git push origin master --force"

    Dir.chdir pwd

end

desc "Setup _site to be a git repository"
task :setup do
  system "git clone https://github.com/uaarg/uaarg.github.io.git _site --branch master"
end

desc "Push current contents of _site"
task :push do
  pwd = Dir.pwd
  Dir.chdir "_site"
    system "git add ."
    message = "Site updated at #{Time.now.utc}"
    system "git commit -m #{message.inspect}"
    system "git push origin master --force"
    Dir.chdir pwd
end
