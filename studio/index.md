---
layout: default
title: Studio
description: "Find out more about how I produce techno and electronic music, view my synthesizer and eurorack modular collections, grab controller templates and patches for your favorite digital instruments."
---

Since around 2011 I've been dabbling in and recording electronic music. Making something I enjoy listening to and having fun in the process is what keeps me creating, but I'm also endlessly fascinated by these incredible machines. See my field notes about various synthesizers, drum machines, and effects as well what I currently use in the studio.

<a href="current-gear.html">My studio</a>

## Gear

I try to collect as much information as I can about each instrument (since you never know when it might go missing). Find my take below on some legendary (and not so legendary) pieces of studio gear that have passed through my racks over the years:

{% assign gear = site.gear | group_by: 'category' | sort: 'name' | reverse %}
{% for category in gear %}
<h3>{{category.name}}</h3>
  <ul class="item-list">
    {% for item in category.items %}
    <li>
    <a href="{{item.url}}">{{item.title}}</a>
    </li>
    {% endfor %}
  </ul>
{% endfor %}