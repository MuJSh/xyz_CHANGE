---
layout: page
title: "Group Members"
permalink: /group-members/
---

## Principal Investigator

<div class="grid">
{% for member in site.data.members.pi %}
  <div class="card member-card">
    {% if member.photo and member.photo != "" %}
      <img class="member-photo" src="{{ member.photo }}" alt="{{ member.name }}">
    {% else %}
      <div class="avatar">{{ member.initials }}</div>
    {% endif %}
    <div>
      <h3>{% if member.profile and member.profile != "" %}<a href="{{ member.profile }}">{{ member.name }}</a>{% else %}{{ member.name }}{% endif %}</h3>
      <div class="meta">{{ member.role }} · {{ member.affiliation }}</div>
      {% if member.email and member.email != "" %}<p><a href="mailto:{{ member.email }}">{{ member.email }}</a></p>{% endif %}
      {% if member.education %}
      <ul class="compact-list">
        {% for item in member.education %}
          <li>{{ item }}</li>
        {% endfor %}
      </ul>
      {% endif %}
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
    {% if member.photo and member.photo != "" %}
      <img class="member-photo" src="{{ member.photo }}" alt="{{ member.name }}">
    {% else %}
      <div class="avatar">{{ member.initials }}</div>
    {% endif %}
    <div>
      <h3>{{ member.name }}</h3>
      <div class="meta">{{ member.role }} · {{ member.affiliation }}</div>
      {% if member.email and member.email != "" %}<p><a href="mailto:{{ member.email }}">{{ member.email }}</a></p>{% endif %}
      {% if member.education %}
      <ul class="compact-list">
        {% for item in member.education %}
          <li>{{ item }}</li>
        {% endfor %}
      </ul>
      {% endif %}
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
