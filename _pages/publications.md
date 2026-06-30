---
layout: page
title: "Publications"
permalink: /publications/
---

The publication list is generated from `_data/publications.yml`.

{% assign current_year = "" %}
{% for pub in site.data.publications %}
  {% assign pub_year = pub.year | append: "" %}
  {% if pub_year != current_year %}
    {% assign current_year = pub_year %}
    <h2>{{ current_year }}</h2>
  {% endif %}

  <div class="list-item">
    <strong>{{ pub.title }}</strong><br>
    {{ pub.authors }}.<br>
    <em>{{ pub.journal }}</em>{% if pub.year %}, {{ pub.year }}{% endif %}.
    {% if pub.doi and pub.doi != "" %}<br>DOI: {{ pub.doi }}{% endif %}
    {% if pub.url and pub.url != "" %}<br><a href="{{ pub.url }}">Link</a>{% endif %}
  </div>
{% endfor %}
