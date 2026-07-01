---
layout: page
title: "Publications"
permalink: /publications/
---

An asterisk after an author name denotes the corresponding author.

{% assign current_year = "" %}
{% for pub in site.data.publications %}
  {% assign pub_year = pub.year | append: "" %}
  {% if pub_year != current_year %}
    {% assign current_year = pub_year %}
    <h2>{{ current_year }}</h2>
  {% endif %}

  <div class="list-item publication-item">
    <p>{{ pub.citation }}</p>
    {% if pub.note and pub.note != "" %}
      <p><span class="badge">{{ pub.note }}</span></p>
    {% endif %}
    {% if pub.url and pub.url != "" %}
      <p><a href="{{ pub.url }}">DOI / Link</a></p>
    {% endif %}
  </div>
{% endfor %}
