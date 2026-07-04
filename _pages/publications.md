---
layout: page
title: "Publications"
permalink: /publications/
---

<p class="publications-note">An asterisk after an author name denotes the corresponding author. Group members are shown in bold.</p>

{% assign current_year = "" %}
{% assign first_year = true %}
{% for pub in site.data.publications %}
{% assign pub_year = pub.year | append: "" %}
{% if pub_year != current_year %}
{% unless first_year %}
  </div>
</details>
{% endunless %}
{% assign first_year = false %}
{% assign current_year = pub_year %}
<details class="publication-year-block" open>
  <summary>
    <span class="publication-year-title">{{ current_year }}</span>
  </summary>
  <div class="publication-year-list">
{% endif %}
    {% assign citation = pub.citation %}
    <div class="list-item publication-item">
      <p>{{ citation }}</p>
      {% if pub.note and pub.note != "" %}
      <p><span class="badge">{{ pub.note }}</span></p>
      {% endif %}
      {% if pub.url and pub.url != "" %}
      <p><a href="{{ pub.url }}">DOI / Link</a></p>
      {% endif %}
    </div>
{% endfor %}
{% unless first_year %}
  </div>
</details>
{% endunless %}

<style>
.publications-note {
  margin: 0 0 22px;
  color: var(--muted);
}

.publication-year-block {
  margin: 0 0 18px;
  border: 1px solid var(--border);
  border-radius: 18px;
  background: #ffffff;
  box-shadow: 0 10px 26px rgba(31, 41, 51, 0.05);
  overflow: hidden;
}

.publication-year-block summary {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  padding: 16px 20px;
  cursor: pointer;
  list-style: none;
  background: linear-gradient(135deg, #ffffff 0%, #eef5fb 100%);
}

.publication-year-block summary::-webkit-details-marker {
  display: none;
}

.publication-year-block summary::after {
  content: "+";
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  border-radius: 999px;
  background: #e9f1fa;
  color: var(--accent-dark);
  font-weight: 800;
  flex: 0 0 auto;
}

.publication-year-block[open] summary::after {
  content: "-";
}

.publication-year-title {
  color: var(--accent-dark);
  font-size: 1.25rem;
  font-weight: 800;
}

.publication-year-list {
  padding: 2px 20px 4px;
}

.publication-year-list .publication-item:last-child {
  border-bottom: 0;
}

.publication-item p:first-child {
  margin-top: 0;
}
</style>