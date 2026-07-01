---
layout: page
title: "News"
permalink: /news/
---

<section id="news-list">
{% for item in site.data.news %}
{% assign news_slug = item.date | append: '-' | append: item.title | slugify %}
<div class="list-item">
  <span class="badge">{{ item.date }}</span>
  <p><a href="#{{ news_slug }}">{{ item.title }}</a></p>
</div>
{% endfor %}
</section>

<hr>

{% for item in site.data.news %}
{% assign news_slug = item.date | append: '-' | append: item.title | slugify %}
{% assign previous_index = forloop.index0 | minus: 1 %}
{% assign next_index = forloop.index0 | plus: 1 %}
{% assign previous_item = site.data.news[previous_index] %}
{% assign next_item = site.data.news[next_index] %}
{% if previous_item %}
{% assign previous_slug = previous_item.date | append: '-' | append: previous_item.title | slugify %}
{% endif %}
{% if next_item %}
{% assign next_slug = next_item.date | append: '-' | append: next_item.title | slugify %}
{% endif %}

<article class="card news-detail" id="{{ news_slug }}">
  <span class="badge">{{ item.date }}</span>
  <h2>{{ item.title }}</h2>
  <p class="meta">Details will be added soon.</p>

  <nav class="news-nav">
    <div>
      {% if previous_item %}
      <a href="#{{ previous_slug }}">← Previous<br><strong>{{ previous_item.title }}</strong></a>
      {% endif %}
    </div>
    <div>
      {% if next_item %}
      <a href="#{{ next_slug }}">Next →<br><strong>{{ next_item.title }}</strong></a>
      {% endif %}
    </div>
  </nav>

  <p class="back-to-news"><a href="#news-list">Back to all news</a></p>
</article>
{% endfor %}
