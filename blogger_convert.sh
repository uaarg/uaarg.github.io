BLOGGER=uaarg-news
git clone http://github.com/vilcans/jekyll.git
cd jekyll/
git branch -a
git checkout origin/rss_importer
git checkout -b rss_importer
git branch
mkdir -p _posts
sed -i "s/require \"YAML\"/require \"yaml\"/" ./lib/jekyll/converters/rss.rb
wget http://${BLOGGER}.blogspot.com/feeds/posts/default?alt=rss -O ${BLOGGER}.rss.xml
ruby -r './lib/jekyll/converters/rss' -e 'Jekyll::RSS.process("'${BLOGGER}'.rss.xml")'
