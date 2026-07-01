---
layout: default
title: "Home"
permalink: /
---

<section class="home-hero">
  <div class="home-hero-image">
    <img class="home-cover-photo" src="{{ '/assets/img/news/change.jpg' | relative_url }}" alt="XYZ-CHANGE Group">
  </div>
  <div class="home-hero-content">
    <p class="eyebrow">XYZ-CHANGE Group</p>
    <h1>Climate, Health, and Air Quality for Next Generation</h1>
    <p class="home-lead">
      The XYZ-CHANGE Group studies atmospheric chemistry, air quality, climate interactions, environmental health, and data-driven environmental science.
    </p>
    <p>
      Our work integrates field and satellite observations, chemical transport modeling, climate modeling, health-impact assessment, and machine learning to understand atmospheric processes and support policy-relevant analysis for cleaner air, climate mitigation, and public health protection.
    </p>
    <div class="hero-actions">
      <a class="button-link" href="{{ '/group-members/' | relative_url }}">Group Members</a>
      <a class="button-link secondary" href="{{ '/publications/' | relative_url }}">Publications</a>
      <a class="button-link secondary" href="{{ '/openings/' | relative_url }}">Openings</a>
    </div>
  </div>
</section>

<section class="home-intro-card">
  <h2>About XYZ-CHANGE</h2>
  <p>
    XYZ-CHANGE is an atmospheric chemistry and environmental health research group at Shandong University. The group focuses on how emissions, atmospheric processes, climate change, and urbanization jointly shape air quality and its impacts on ecosystems and human health.
  </p>
  <p>
    We aim to develop scientific evidence for coordinated air pollution control, climate mitigation, and health protection by combining advanced models, high-resolution environmental datasets, satellite retrievals, and interpretable data-driven methods.
  </p>
</section>

<section>
  <div class="section-heading">
    <p class="eyebrow">Research</p>
    <h2>Research Areas</h2>
  </div>
  <div class="research-card-grid">
    <div class="research-card">
      <h3>Atmospheric Deposition</h3>
      <p>Changes in wet and dry atmospheric deposition and their environmental implications.</p>
    </div>
    <div class="research-card">
      <h3>Long-Range Transport</h3>
      <p>Cross-boundary transport of air pollutants and regional-to-global atmospheric connections.</p>
    </div>
    <div class="research-card">
      <h3>Urbanization and Air Quality</h3>
      <p>Urban heat island effects and the influence of urbanization on air quality and health.</p>
    </div>
    <div class="research-card">
      <h3>Machine Learning</h3>
      <p>Interpretable machine learning for environmental datasets, emissions, exposure, and atmospheric processes.</p>
    </div>
    <div class="research-card">
      <h3>Climate, Pollution, and Health</h3>
      <p>Interactions among air pollution, climate change, and human health under current and future scenarios.</p>
    </div>
  </div>
</section>

<section class="home-news-block">
  <div class="section-heading">
    <p class="eyebrow">Updates</p>
    <h2>Latest News</h2>
  </div>
  <div class="news-section">
    {% for item in site.data.news limit:4 %}
    <div class="news-row">
      <span class="news-date">{{ item.date }}</span>
      <span class="news-text">
        {% if item.link and item.link != "" %}
          <a href="{{ item.link }}">{{ item.title }}</a>
        {% else %}
          {{ item.title }}
        {% endif %}
      </span>
    </div>
    {% endfor %}
  </div>
  <p class="view-more"><a href="{{ '/news/' | relative_url }}">View all news</a></p>
</section>

<section class="notice home-join">
  <h2>Join the Group</h2>
  <p>
    We welcome students and collaborators interested in atmospheric chemistry, air pollution, climate-health interactions, satellite remote sensing, chemical transport modeling, and machine learning for environmental applications.
  </p>
  <p><a href="{{ '/openings/' | relative_url }}">See openings</a></p>
</section>
