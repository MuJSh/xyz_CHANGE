---
layout: page
title: "Conferences"
permalink: /conferences/
---

This page records conferences, workshops, group meetings, and academic activities involving the group.

{% for item in site.data.conferences %}
<div class="list-item">
  <span class="badge">{{ item.date }}</span>
  <h3>{{ item.title }}</h3>
  <p class="meta">
    {% if item.location and item.location != "" %}{{ item.location }}{% endif %}
    {% if item.role and item.role != "" %}{% if item.location and item.location != "" %} · {% endif %}{{ item.role }}{% endif %}
  </p>
  {% if item.link and item.link != "" %}<p><a href="{{ item.link }}">More information</a></p>{% endif %}
</div>
{% endfor %}
