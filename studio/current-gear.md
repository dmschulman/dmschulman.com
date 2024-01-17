---
layout: default
title: Current Studio
description: ""
---

{% assign gear = site.gear | group_by: 'category' | sort: 'name' | reverse %}
{% for category in gear %}
<h3>{{category.name}}</h3>
  <ul class="item-list">
    {% for item in category.items %}
    {% if item.own %}
    <li>
    <a href="{{item.url}}">{{item.title}}</a>
    </li>
    {% endif %}
    {% endfor %}
  </ul>
{% endfor %}