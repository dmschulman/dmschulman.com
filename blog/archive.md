---
layout: default
title: "Blog Archive"
description: "'ar·chive' /ärˌkīv/ noun, a collection of historical documents or records providing information about a place, institution, or group of people."
---

<ul class="posts">
  {% for post in site.posts %}
    <li>
	<a href="{{site.baseurl}}{{post.url}}" title="{{post.title}}">{{post.title}}</a>
	<span class="date">{{post.date | date: "%B %d, %Y"}}</span>
	<p class="excerpt">{{post.excerpt | strip_html | truncatewords:75}}</p>
    </li>
  {% endfor %}
</ul>
