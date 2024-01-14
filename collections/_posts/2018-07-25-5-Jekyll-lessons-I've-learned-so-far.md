---
title: 5 Jekyll lessons I've learned so far
layout: post
author: dmschulman
tags:
- jekyll
- github
- how-to
- internet
source-id: 1Jt69FSrH3unmScWuqYlRa4ndfUmu2jXpKYK0waHoO8o
published: true
---

About three weeks ago, I had a breakthrough. Ever since my old Wordpress website kicked the bitbucket I've been exploring more minimal, lightweight options to transition my personal website to. [Jekyll](https://jekyllrb.com/) was of course the winner of that competition, but even as I’ve started to enjoy the robustness of engine and simplicity of working with a static site generator there have been [multiple hurdles to clear](https://dmschulman.com/blog/2017/make-the-switch-to-jekyll-in-only-37-easy-steps.html) in order to get things working the way I’ve always wanted.

Getting this site up and running has been a learning experience through and through, but honestly I wouldn't have it any other way since the successes that come after days or weeks of frustration only feel that much sweeter. And one of the sweetest, my breakthrough the other week, came after many months of bashing my head against the keyboard in multiple attempts to get [Jekyll’s collections feature](https://jekyllrb.com/docs/collections/) working (or even rendering) correctly.

In many of these cases the solution was been dead simple, solutions typically are once you can adequately get your head around the problem, but getting from A to B was challenging at times, and I oddly found this to be the case while diagnosing my Jekyll issues. This isn't due to any bug or issue within Jekyll itself but more so regards how Jekyll has evolved over time and how some global changes to the codebase have rendered old syntaxes and features obsolete, indirectly rendering old tutorials, blog posts, Stack Overflows, and other helpful resources obsolete (if not misleading).

Not to mention I'm actually running an instance of [Jekyll for Github Pages](https://jekyllrb.com/docs/github-pages/), not pure Jekyll, a small difference which adds further complexity to figuring out features like permalinking and using plugins. But fear not, many of these resources will still help you understand what the problem at hand might be and may even take you most of the way in solving your problem. But it is important to recognize these small differences between Jekyll implementations when searching for an answer. The answers only became clearer to me after I realized the help I was finding needed to be adjusted slightly for my situation. Given this, I thought I might share five lessons I’ve learned as I’ve puttered along building out my Jekyll website:

## 1. Your config filename should contain a leading underscore

I'm embarrassed to admit this as this was my own damn fault, the result of a typo while following an early tutorial, but for the longest time I couldn’t understand why my Jekyll site, despite the numerous configuration options I’d defined in config.yml, would not work the way I had instructed it to. Even getting something as basic and [well-documented](https://ben.balter.com/2015/02/20/jekyll-collections/) as Jekyll Collections to work was an impossible task, yet no amount of searching could help me identify the real problem at hand.

As it turns out, Jekyll was not able to take my configuration preferences into account because Jekyll was never able to detect I had a config file available. My file was incorrectly named "config.yml". Jekyll only listens for a configuration file named “_config.yml”. After renaming the file appropriately, adding the leading underscore to the filename, everything worked as expected I was off and running again.

![image alt text]({{ site.url }}/public/jyz3TuQRZ7u74D3VdsTXQg_img_0.png)

## 2. Do not use quotation marks around URLs in your front matter

This one still irritates me, not because it's caused any issues on my site (which it has), but because I see this so errantly notated across every Jekyll tutorial and blog post I come across. Even [Jekyll’s own documentation](https://jekyllrb.com/docs/home/) contains errors and/or inconsistencies when dealing with the correct syntax to use with regards to [front matter](https://jekyllrb.com/docs/frontmatter/).

The Ruby community [has its own debate](https://anti-pattern.com/always-use-double-quoted-strings-in-ruby) around whether or not single-quotes or double-quotes should be used on strings. The advice I take away from the discussion is to simply be consistent with whatever style you decide to use. Given my desire for easy readability, and in an effort to prevent prematurely closing statements due to an apostrophe, I prefer to use double quotes everywhere.

Except this has caused problems for me with statements in my document's front matter. Certain values, like "true" and “false”, don’t need any surrounding marks, but on everything else I’ve tried to be consistent by surrounding the value with “ ”. While trying to get a site-wide permalink structure defined in my _config.yml I discovered that this was not appropriate syntax for URL segments. My sitewide URL setting is surrounded by quotes and it seems to work fine, but removing the double quotes from my permalink definition was what stood between me and getting my URLs to look the way I wanted.

I'm still not crystal clear on the true answer here, but yeah, don’t use quotes around your URLs or URIs in front matter. And speaking of permalinks...

## 3. Decide on a permalink structure early on and define it in your _config.yml

As a web developer it's pretty refreshing to have complete control (and I mean complete) over the look and syntax of your URLs. You can even decide on the file extension to present in a URL, or choose to present none at all (note: I like having .html at the end of every page on my site). And for whatever reason, if you really wanted to, you could choose a unique and unstructured permalink for each individual post or page on your site by defining it in the page’s front matter (but please, don’t do this).

Depending on the type(s) of content you plan to curate on site, your URL structural needs might be simple or complex. Setting up your [permalink structure](https://jekyllrb.com/docs/permalinks/) is a breeze with Jekyll but the easiest way to go about doing this is to define everything within your top level _config file. Individual posts and pages can contain a permalink in their front matter, which will always be honored if it's present, even if your _config.yml say otherwise.

It was due to the fact that I had issues getting my permalink structure to work correctly early on (see points 1 and 2). Being the case, I opted to include an embedded permalink on every post and page on site. Once I did manage to get global permalinks working I had to remove the embedded permalink within each document, otherwise they wouldn't abide by the global rule. With my site being so young, this change only had to be made across a few dozen pages and posts, but given the scope of the change I could see how something like this might get out of hand on a larger Jekyll site with hundreds of pages of content.

Prevent issues like this before they become a problem. Decide on a structure from day one and use a global permalink definition in your _config.yml (and make sure to remove or disable any permalink tags that may get added to your documents via a Markdown editor or publishing tool).

![image alt text]({{ site.url }}/public/jyz3TuQRZ7u74D3VdsTXQg_img_1.jpg)

## 4. Using Github Pages? You'll want to install Travis CI for debugging

Flying blind when you're trying to diagnose a bug or software issue is just about as maddening as it can get. If you run Jekyll locally or on a web server you’ll have easy access to view your console and log file, but this is not the case for those of us running our sites via Github Pages. Github will send you an email when an error in your code causes a build failure, but many times these messages are not enough to understand the actual problem at hand.

Fortunately, there are some great tools available which can provide insight into why your latest build failed miserably, and [Travis CI](https://travis-ci.org/) (the CI stands for [Continuous Integration](https://en.wikipedia.org/wiki/Continuous_integration)) is the best choice as it seamlessly integrates into Github. Just follow their [simple instructions](https://docs.travis-ci.com/user/getting-started/) for getting your repo up and running with Travis CI and test out a build or two. Travis CI is free to use for non-commercial open-source projects hosted on Github and I can't recommend using it enough. 

## 5. Still using Github Pages? You'll have a limited selection of plugins available (but there are ways around this)

Let's face it, Github Pages is an incredibly useful service, but it’s still a courtesy provided for free to developers. As such, Github places some limitations on how flexible your Jekyll instance can be with respect to [the use of plugins](https://jekyllrb.com/docs/plugins/) and themes. I didn’t realize this when I first got off the ground with my site, only realizing the limitation once I integrated Travis CI and saw the handful of dependency errors my build was encountering due to the unsupported plugins present in my _config.yml.

And while it would be nice to run every plugin under the sun, the [plugins available to you through Github Pages](https://help.github.com/articles/configuring-jekyll-plugins/) do cover a lot of useful ground from a webmaster perspective. But a [cornucopia of fantastic Jekyll plugins](https://planetjekyll.github.io/plugins/top) exist out there and are tempting to integrate if you administer your own Jekyll site. It's a bit frustrating at first to realize that you can’t use these as a Github Pages user, but with enough hacker ingenuity (and knowledge of Github) there is an obvious workaround to this limitation.

Essentially we can bypass the restrictions Github Pages places on us by building our site in separate repository and pushing the resulting product to our Github Pages repo. [Josh Frankel has an excellent blog post explaining this process](http://joshfrankel.me/blog/deploying-a-jekyll-blog-to-github-pages-with-custom-plugins-and-travisci/), and while I have yet to test this hack myself (I prefer to code my own solutions where possible), I have bookmarked this guide for future reference.

That's pretty much it! Now that I’m able to dive more deeply into my Jekyll site and craft some of the features I’ve been ruminating over for almost a year, I will be following up with detailed post as to how I’m developing my [photo galleries section](https://dmschulman.com/photos/index.html), [project build logs](https://dmschulman.com/projects/index.html), studio gear information pages, [bookmarks display](https://dmschulman.com/about/bookmarks.html), my integrations with Google Apps, and much much more.

As I've taken on developing a lot of these features concurrently my blog might be kind of quite for the next few weeks, but I hope this post has helped others get a better understanding of how to work with and troubleshoot some common issues with their Github Pages site.

**Bonus!** Here are a few other Jekyll blog posts, tools, and other miscellany that have helped me along the way in my early days with this site:
* [Moving to Jekyll / Outcoldman.com](https://www.outcoldman.com/en/archive/2014/04/29/jekyll/)
* [Stupid Jekyll tricks / Ethan Marcotte](https://ethanmarcotte.com/wrote/stupid-jekyll-tricks/)
* [How I'm Using Jekyll in 2016 / Mistakes Made](https://mademistakes.com/articles/using-jekyll-2016/)
* [How I'm Using Jekyll in 2017 / Mistakes Made](https://mademistakes.com/articles/using-jekyll-2017/)
* [A master _config.yml containing a bunch of configuration options](https://github.com/academicpages/academicpages.github.io/blob/master/_config.yml)
* [Gabriel for Google Docs, a Markdown editor and publishing tool](https://chrome.google.com/webstore/detail/gabriel/okimajjeocnndpifeelaajdebkkbckff?hl=en-GB)
