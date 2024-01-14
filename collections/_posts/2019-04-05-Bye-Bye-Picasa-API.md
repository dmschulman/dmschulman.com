---
title: Bye Bye Picasa API
layout: post
author: dmschulman
tags:
- google
- jekyll
- problem solving
- photography
source-id: 1n1KsL9_WrUXqQPG5YC-Jih-0_QwSKU-FlLld6kTAeno
published: true
---
It's always a nice feeling to realize, after a long bout of confusion and pounding my head against the desk, that I was never actually going crazy in the first place. Putting together this Jekyll site has been a [fun and challenging exploration](https://dmschulman.com/blog/2018/5-jekyll-lessons-i-ve-learned-so-far.html) of the unfamiliar and I enjoy the process of cobbling together new features while figuring out what’s possible as I go. Most of the time this means breaking things completely before getting it right, but other times those features break you.

The [Photos](https://dmschulman.com/photos/index.html) section of this website was one such instance of second-guessing myself and being completely unable to understand what had gone wrong. You may have noticed those pages looking a bit stale and broken, they've been that way for quite some time. At the onset of developing those galleries I knew I’d be at the mercy of [Google Photos](https://www.google.com/photos/about/) and whatever changes Google decided to make to their API, but this challenge was nothing foreign to me as I’ve been interacting with this service ever since Google acquired [Picasa](https://picasa.google.com/) in 2004.

I did plan to do a larger write up of how I developed my photo galleries as it aligned well with one of the philosophies I've developed my site around (lean code, quick loads), plus I was also pretty proud of what I had accomplished, but it was more important to first get that particular feature up and running correctly. One hurdle I faced during development was that Google was [actively phasing out all aspects of Picasa](https://support.google.com/picasa/answer/6383491?hl=en) at the time and moving entirely to a new way of doing things in Google Photos, but at least as of this summer, it all still kind of worked.

Going through the code again today, I discovered a bug on my end that was causing all my galleries to parse content from my trip to [Italy](https://dmschulman.com/photos/italy-2004.html), but It's all kind of a moot point now though as I noticed this morning that I can [no longer access the JSON files](http://photos.googleapis.com/data/feed/api/user/dmschulman?alt=json) I had been using to render those galleries. Picasa is now as [dead as disco](https://developers.google.com/picasa-web/docs/3.0/deprecation), officially. It’s probably been like that for a while now, I’ve only recently jumped back in to getting this feature working again, but I thought it would be proper to commemorate the occasion as I have some history with trying to bend Picasa to my will over the years. Here’s to exploring new avenues with Google Photos and [Google Cloud Platform](https://cloud.google.com/) but pausing to remember the ones we’ve lost.

Farewell old friend.

