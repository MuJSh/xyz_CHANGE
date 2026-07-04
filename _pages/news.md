---
layout: page
title: "News"
permalink: /news/
---

<div class="news-list-page">
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
<div class="news-card-row">
  <div class="news-date-badge">{{ item.date }}</div>
  <div class="news-card-content">
    {% if news_link and news_link != "" %}
      <a href="{{ news_link }}">{{ item.title }}</a>
    {% else %}
      <span>{{ item.title }}</span>
    {% endif %}
  </div>
</div>
{% endfor %}
</div>

<style>
.news-list-page {
  display: grid;
  gap: 14px;
  margin-top: 20px;
}

.news-card-row {
  display: grid;
  grid-template-columns: 116px minmax(0, 1fr);
  align-items: center;
  gap: 18px;
  padding: 18px 20px;
  border: 1px solid var(--border);
  border-radius: 18px;
  background: #ffffff;
  box-shadow: 0 10px 26px rgba(31, 41, 51, 0.04);
  transition: transform 0.18s ease, box-shadow 0.18s ease, border-color 0.18s ease;
}

.news-card-row:hover {
  transform: translateY(-2px);
  border-color: #c7d9e8;
  box-shadow: 0 14px 34px rgba(31, 41, 51, 0.075);
}

.news-date-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 96px;
  padding: 7px 11px;
  border-radius: 999px;
  background: #e9f1fa;
  color: var(--accent-dark);
  font-size: 0.84rem;
  font-weight: 800;
  line-height: 1.1;
  text-align: center;
}

.news-card-content {
  color: #1f2933;
  font-size: 1.02rem;
  font-weight: 650;
  line-height: 1.45;
}

.news-card-content a {
  color: var(--accent);
  text-decoration: none;
}

.news-card-content a:hover {
  color: var(--accent-dark);
  text-decoration: none;
}

@media (max-width: 700px) {
  .news-card-row {
    grid-template-columns: 1fr;
    gap: 10px;
  }

  .news-date-badge {
    justify-content: flex-start;
    width: auto;
  }
}
</style>

<!-- rebuild news cards -->
