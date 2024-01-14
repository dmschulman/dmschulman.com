---
title: Fortune-TV - fortune files full of TV quotes
layout: post
tags:
- internet
- linux
- github
- television
source-id: 1IpqieAzELwirhVdaA-CWF_l_ZdHrpgoVTpDw23JNUFI
published: true
---
There are many things I like about using Linux/UNIX, but one of my favorite things to play around with is a little program known as [fortune](http://en.wikipedia.org/wiki/Fortune_(Unix)). It's very simple (I get along well with very simple programs), the purpose of fortune is to spit out a randomly selected strings from a list of strings (a fortune file in our case), like a Magic 8-Ball or a fortune cookie (except funnier and less edible).

There are about 20 fortune files that come with the base package [fortune-mod](https://launchpad.net/ubuntu/+source/fortune-mod). Some of them are humorous, some of them are pretty obscure, some of them are down right bizarre, but fortune provides a little character in an otherwise dreary (or not so dreary) UNIX environment. A few years ago I had compiled a handful of my own fortune files from a couple of television shows I liked, copy/pasted from IMDB, screened and sorted by hand. For a guy who runs [conky](https://github.com/brndnmtthws/conky) with a fortune output refreshing every minute I was desperate to find fresh and funny material.

The original collection was something like: Arrested Development, Home Movies, It's Always Sunny in Philadelphia, Futurama, and Sealab 2021. These sat in my /usr/share/games/fortune directory for a while and provide a good laugh every so often. I had always intended to add a few more shows here and there but other projects eventually took priority and this idea sat on the back burner for a while.

Whereas I had been using [IMDB](http://www.imdb.com/) in the past for gathering quotations, I recently took a look at [Wikiquote.org](http://www.wikiquote.org/) and found it to be a pretty extensive resource and easy to work with web content-wise. So now, thanks to some inspiration, a free weekend, and a big pot of coffee, I've compiled an even larger archive of TV-centric fortune files: [fortune-tv](https://github.com/dmschulman/fortune-tv). Shows include:

* 3rd Rock From The Sun

* 30 Rock

* The A-Team

* Archer

* Arrested Development

* Batman

* Batman – The Animated Series

* Beavis & Butt-head

* Bob's Burgers

* The Boondocks

* Curb Your Enthusiasm

* Dilbert

* Drawn Together

* Firefly

* Frisky Dingo

* Futurama

* Generation Kill

* Harvey Birdman: Attorney at Law

* Home Movies

* It's Always Sunny In Philadelphia

* King Of The Hill

* Look Around You

* Lucy: Daughter of the Devil

* Mad Men

* Malcolm In The Middle

* Metalocalypse

* Monty Python's Flying Circus

* Moral Orel

* Mr. Show

* Mystery Science Theater 3000

* Newsradio

* The Office (US)

* Parks and Recreation

* Peep Show

* QI

* Rick and Morty

* Robot Chicken

* Rocko's Modern Life

* Saturday Night Live

* Scrubs

* Sealab 2021

* Seinfeld

* The Simpsons

* The Sopranos

* South Park

* Squidbillies

* The Wire

* Trailer Park Boys

* The Twilight Zone

* The Venture Brothers

* Workaholics

* The X-Files

* The Young Ones

Pick and choose your favorites! If you're using these in your bash profile remember to have fortune trim the length of selected quotes (-n to set length) since many of these files contain longer chunks of dialog. There are a couple of formatting issues here and there that I’m finding (also some of the punctuation is not standard which *bothers* me, these were parsed after all from a wiki) but otherwise I’m very happy with the new collection. Tell your friends, tell your family, tell your greybeards, [fortune-tv](https://github.com/dmschulman/fortune-tv) is out now!

