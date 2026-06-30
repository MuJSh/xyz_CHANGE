---
layout: page
title: "Group Members"
permalink: /group-members/
---

## Principal Investigator

<div class="grid">
{% for member in site.data.members.pi %}
  <div class="card member-card">
    <div class="avatar">{{ member.initials }}</div>
    <div>
      <h3>{{ member.name }}</h3>
      <div class="meta">{{ member.role }} · {{ member.affiliation }}</div>
      {% if member.email and member.email != "" %}<p><a href="mailto:{{ member.email }}">{{ member.email }}</a></p>{% endif %}
      {% if member.interests %}
      <p>
        {% for interest in member.interests %}
          <span class="badge">{{ interest }}</span>
        {% endfor %}
      </p>
      {% endif %}
    </div>
  </div>
{% endfor %}
</div>

## Current Members

<div class="grid">
{% for member in site.data.members.current %}
  <div class="card member-card">
    <div class="avatar">{{ member.initials }}</div>
    <div>
      <h3>{{ member.name }}</h3>
      <div class="meta">{{ member.role }} · {{ member.affiliation }}</div>
      {% if member.email and member.email != "" %}<p><a href="mailto:{{ member.email }}">{{ member.email }}</a></p>{% endif %}
      {% if member.interests %}
      <p>
        {% for interest in member.interests %}
          <span class="badge">{{ interest }}</span>
        {% endfor %}
      </p>
      {% endif %}
    </div>
  </div>
{% endfor %}
</div>

## Alumni

{% for member in site.data.members.alumni %}
<div class="list-item">
  <strong>{{ member.name }}</strong><br>
  <span class="meta">{{ member.role }}{% if member.now %} · Now: {{ member.now }}{% endif %}</span>
</div>
{% endfor %}
