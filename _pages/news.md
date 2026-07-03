---
layout: page
title: "News"
permalink: /news/
---

{% for item in site.data.news %}
{% assign news_link = item.link %}
{% case item.slug %}
  {% when '2025-10-01-new-paper-from-our-group' %}
    {% assign news_link = '/xyz_CHANGE/news/2025-10-pnas-mortality-disparities/' %}
  {% when '2025-09-01-another-group-photo' %}
    {% assign news_link = '/xyz_CHANGE/news/2025-09-group-photo/' %}
  {% when '2025-08-01-congrats-to-dr-na-zhao-on-receiving-the-national-natural-science-foundation-of-china-young-scientists-fund' %}
    {% assign news_link = '/xyz_CHANGE/news/2025-08-na-zhao-nsfc/' %}
  {% when '2025-05-01-new-paper-from-our-group-member' %}
    {% assign news_link = '/xyz_CHANGE/news/2025-05-bin-luo-acp-paper/' %}
  {% when '2025-03-01-our-group-attended-the-ai4am-workshop-at-fudan-university' %}
    {% assign news_link = '/xyz_CHANGE/news/2025-03-ai4am-workshop/' %}
  {% when '2025-01-01-pi-dr-zhang-attended-the-inaugural-meeting-of-the-ecological-environment-ai-committee-and-was-elected-executive-committee-member' %}
    {% assign news_link = '/xyz_CHANGE/news/2025-01-ecological-environment-ai-committee/' %}
{% endcase %}
<div class="list-item">
  <span class="badge">{{ item.date }}</span>
  <p>
    {% if news_link and news_link != "" %}
      <a href="{{ news_link }}">{{ item.title }}</a>
    {% else %}
      {{ item.title }}
    {% endif %}
  </p>
</div>
{% endfor %}
