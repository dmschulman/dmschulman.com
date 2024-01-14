---
layout: default
title: Studio
description: "Find out more about how I produce techno and electronic music, view my synthesizer and eurorack modular collections, grab controller templates and patches for your favorite digital instruments."
---

{% assign gear = site.gear | group_by: 'category' | sort: 'name' | reverse %}
{% for category in gear %}
<h3>{{ category.name }}</h3>

<ul class="item-list">
{% for item in category.items %}
<li>
<a href="{{ item.url }}" title="{{ item.title }}">{{ item.title }}</a>
</li>
{% endfor %}
</ul>
{% endfor %}