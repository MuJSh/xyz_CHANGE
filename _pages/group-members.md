---
layout: page
title: "Group Members"
permalink: /group-members/
---

<section class="member-section member-pi-section">
  <div class="members-section-heading">
    <h2>Principal Investigator</h2>
    <p>Group leadership and research directions.</p>
  </div>

  <div class="pi-member-grid">
  {% for member in site.data.members.pi %}
    <div class="card member-card pi-member-card">
      {% if member.photo and member.photo != "" %}
        {% if member.photo contains '://' %}
          <img class="member-photo" src="{{ member.photo }}" alt="{{ member.name }}">
        {% else %}
          <img class="member-photo" src="{{ member.photo | relative_url }}" alt="{{ member.name }}">
        {% endif %}
      {% else %}
        <div class="avatar">{{ member.initials }}</div>
      {% endif %}
      <div class="member-card-body">
        <h3>{% if member.profile and member.profile != "" %}<a href="{{ member.profile }}">{{ member.name }}</a>{% else %}{{ member.name }}{% endif %}</h3>
        <div class="meta">{{ member.role }}</div>
        {% if member.email and member.email != "" %}<p><a href="mailto:{{ member.email }}">{{ member.email }}</a></p>{% endif %}
        {% if member.interests %}
        <p class="member-tags">
          {% for interest in member.interests %}
            <span class="badge">{{ interest }}</span>
          {% endfor %}
        </p>
        {% endif %}
      </div>
    </div>
  {% endfor %}
  </div>
</section>

<section class="member-section current-member-section">
  <div class="members-section-heading">
    <h2>Current Members</h2>
    <p>Researchers and students currently working in the group.</p>
  </div>

  <div class="members-card-grid">
  {% for member in site.data.members.current %}
    <div class="card member-card current-member-card">
      {% if member.photo and member.photo != "" %}
        {% if member.photo contains '://' %}
          <img class="member-photo" src="{{ member.photo }}" alt="{{ member.name }}">
        {% else %}
          <img class="member-photo" src="{{ member.photo | relative_url }}" alt="{{ member.name }}">
        {% endif %}
      {% else %}
        <div class="avatar">{{ member.initials }}</div>
      {% endif %}
      <div class="member-card-body">
        <h3>{% if member.profile and member.profile != "" %}<a href="{{ member.profile }}">{{ member.name }}</a>{% else %}{{ member.name }}{% endif %}</h3>
        <div class="meta">{{ member.role }}</div>
        {% if member.email and member.email != "" %}<p><a href="mailto:{{ member.email }}">{{ member.email }}</a></p>{% endif %}
        {% if member.interests %}
        <p class="member-tags">
          {% for interest in member.interests %}
            <span class="badge">{{ interest }}</span>
          {% endfor %}
        </p>
        {% endif %}
      </div>
    </div>
  {% endfor %}
  </div>
</section>

<section class="member-section alumni-member-section">
  <div class="members-section-heading">
    <h2>Alumni</h2>
    <p>Former group members and their current positions.</p>
  </div>

  <div class="alumni-card-grid">
  {% for member in site.data.members.alumni %}
    <div class="alumni-card">
      <h3>{% if member.profile and member.profile != "" %}<a href="{{ member.profile }}">{{ member.name }}</a>{% else %}{{ member.name }}{% endif %}</h3>
      <p class="meta">{{ member.role }}</p>
      {% if member.now %}<p class="alumni-now">Now: {{ member.now }}</p>{% endif %}
    </div>
  {% endfor %}
  </div>
</section>
