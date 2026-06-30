---
layout: default
title: "Home"
permalink: /
---

<section class="hero">
  <div>
    <h1>XYZ-CHANGE Group</h1>
    <p>
      The XYZ-CHANGE Group studies atmospheric chemistry, air quality, climate interactions, environmental health, and data-driven approaches for understanding air pollution and its impacts.
    </p>
    <p>
      Our work integrates observations, satellite products, chemical transport models, health-impact assessment, and machine learning to examine atmospheric processes and their implications for climate, ecosystems, public health, and environmental inequality.
    </p>
  </div>
  <div class="hero-card">
    <div class="label">Research Group</div>
    <h2>Climate, Health, and Air Quality for Next Generation</h2>
    <p class="meta">Shandong University</p>
  </div>
</section>

<section>
  <h2>Research Areas</h2>
  <div class="grid">
    <div class="card">
      <h3>Atmospheric Chemistry</h3>
      <p>Ozone, PM<sub>2.5</sub>, NO<sub>x</sub>, VOCs, aerosols, deposition, and atmospheric oxidation.</p>
    </div>
    <div class="card">
      <h3>Air Quality and Health</h3>
      <p>Exposure assessment, health burden, inequality, environmental justice, and policy-relevant impact analysis.</p>
    </div>
    <div class="card">
      <h3>Climate Interactions</h3>
      <p>Climate change, heat stress, air pollution co-benefits, and climate-sensitive environmental risks.</p>
    </div>
    <div class="card">
      <h3>Data-Driven Methods</h3>
      <p>Satellite remote sensing, chemical transport modeling, machine learning, and interpretable environmental datasets.</p>
    </div>
  </div>
</section>

<section>
  <h2>Latest News</h2>
  {% for item in site.data.news limit:3 %}
    <div class="list-item">
      <span class="badge">{{ item.date }}</span>
      <p>{{ item.title }}</p>
    </div>
  {% endfor %}
  <p><a href="{{ '/news/' | relative_url }}">View all news</a></p>
</section>

<section class="notice">
  <h2>Join the Group</h2>
  <p>
    We welcome students and collaborators interested in atmospheric chemistry, air pollution, climate-health interactions, satellite remote sensing, chemical transport modeling, and machine learning for environmental applications.
  </p>
  <p><a href="{{ '/openings/' | relative_url }}">See openings</a></p>
</section>
