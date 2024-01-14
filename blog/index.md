---
layout: default
title: Blog
description: blog /bläɡ/ noun, a regularly updated website or web page, typically one run by an individual or small group, that is written in an informal or conversational style.
---

<ul class="posts">
  {% for post in site.posts limit: 10 %}
    {% include lists/log-item.html %}
  {% endfor %}
</ul>

<p>Or if you'd prefer to see it all, view the <a href="archive.html" title="Blog Archive">blog archive</a>.</p>
