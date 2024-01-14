---
title: Archive.org to the rescue
layout: post
tags:
- life
- internet
- computing
- announcement
- problem solving
source-id: 1XWOvTNVUa9bwFPsTJggi12ZlWJPKLDAAJ1_ulKLOTVc
published: true
---
One day, a few months shy of two years ago, I did something very stupid to my web server. All of the downtime since then, the moving away from Wordpress, the roll over to a new website and hosting solution, was precipitated by one unthinking moment of weakness: upgrading my server's operating system without first taking a full system backup. Up until that point I had been running the same Wordpress install on the same hosting setup for the better part of 10 years. All of that vanished in a matter of minutes as my website’s backend corrupted and my databases became inaccessible. My last post on that system, frozen in time, was dated October 14th, 2015.

The details of the problem that led to this state of affairs are very boring and I won't drag them out on this post, but after completing a partial system upgrade of Ubuntu on my server, I found that many of my system’s packages had not updated correctly, and that coupled with an attempt to configure a series of virtual hosts on my server left me unable to log into Wordpress and unable to access MySQL. I’ve recovered from other server-side issues before, but this situation was well beyond my expertise. As time crept forward and as I tried endlessly to recover my adolescent website, I ultimately came to the conclusion that my data was beyond recoverable and nuking my web server and beginning anew was the solution that gave me the most piece of mind.

Data loss can be humbling. I can't say that a lot of the content on my old site was incredibly successful by any definition, though a lot of my music production tutorials got a warm reception from the internet, but regardless of how many eyes paged across my blog, those posts and the site itself had sentimental value to me. It took me almost a year to come to terms with the fact that a site I had worked so hard on over the years was now completely gone, which as you can imagine took my attention away from blogging and developing this site for some time.

And usually in situations like this I'd turn to the [Internet Archive](https://archive.org/) to find older versions of a website frozen in time, but sadly this too proved to be a flop, according to the [Wayback Machine](https://archive.org/web/) my site was inaccessible, something about my [robots.txt](http://www.robotstxt.org/) file being misconfigured. Even my last resort wasn’t able to help me recover my internet ephemera. That was that, I figured. Maybe starting all over from scratch won’t be such a bad thing after all.

But upon doing a little more digging, I found that IA recently changed the way their web crawlers go about indexing and archiving websites. The archive.org issue was not necessarily my robots.txt's fault, but instead a decision by archive.org to [bypass the robots.txt file altogether](https://blog.archive.org/2017/04/17/robots-txt-meant-for-search-engines-dont-work-well-for-web-archives/) since it had a tendency to screw up the archived snapshots. IA had actually been archiving my site this entire time, multiple snapshots over many years, but because I had a robots.txt file online at the time of the last snapshot, all of my materials were rendered inaccessible due to those rules. The solution? Put up a dummy robots.txt file with the correct rules which would grant IA’s web crawlers the access they so desperately wanted.

After spinning up a new web server just to post a blank robots.txt, I was back in business. In a matter of hours Wayback Machine went from "access denied" to “we archived your site 17 times in the 9 months and not a single thing was updated the entire time”. While it was a great relief to finally be able to view all my content again, blog posts dating all the way back to 2007, the long road to recovery was yet to commence, for after all these are just webpages. In order to “restore” any of this content a lot of copy/pasting would need to be undertaken.

So, while not the perfect outcome, I still have something to work with. As I work to restore all of my old content you will notice a backlog of old posts appearing on [my blog](http://dmschulman.com/blog/index.html). The content itself is actually very easy to work with on Jekyll, I'm proud to say I’m using [Google Docs](https://docs.google.com/document/) and a plugin called [Gabriel](https://github.com/thiscouldbejd/Gabriel) to republish this material, a solution that pays dividends due to the fact that my posts will not only appear on my website but will also be backed up on [Google Drive](https://drive.google.com/drive/) and accessible in a rich text editor as opposed to a lowly database table. I will detail some of the specifics about my process in a future post, not every piece of content will return to the blog as it once was, but I’m excited to have the opportunity to recover the last 10 years worth of my website (as well as thankful for the team over at the Internet Archive for their priceless service).

