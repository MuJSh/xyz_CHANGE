---
layout: page
title: "News"
permalink: /news/
---

{% for item in site.data.news %}
<div class="list-item">
  <span class="badge">{{ item.date }}</span>
  <p>
    {% if item.link and item.link != "" %}
      <a href="{{ item.link }}">{{ item.title }}</a>
    {% else %}
      {{ item.title }}
    {% endif %}
  </p>
</div>
{% endfor %}
