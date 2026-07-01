---
layout: default
title: "Home"
permalink: /
---

<section class="home-layout">
  <aside class="home-sidebar card">
    <img class="home-profile-photo" src="https://mujsh.github.io/YuqiangZhangLab.github.io/images/peopic/Yuqiangzhang.jpg" alt="Yuqiang Zhang">
    <h1>Yuqiang Zhang</h1>
    <p class="profile-title">Professor</p>
    <p class="meta">Institute of Environmental Research<br>Shandong University</p>
    <p><a href="mailto:Yuqiang.Zhang@sdu.edu.cn">Yuqiang.Zhang@sdu.edu.cn</a></p>
    <p><a href="{{ '/members/yuqiang-zhang/' | relative_url }}">Full profile</a></p>
  </aside>

  <main class="home-main">
    <section>
      <h2>About</h2>
      <p>
        Dr. Yuqiang Zhang is a Professor and doctoral supervisor at the Institute of Environmental Research, Shandong University. He was selected for the National Overseas High-Level Young Talents Program and recognized as a Distinguished Young and Middle-Aged Scholar of Shandong University.
      </p>
      <p>
        His research uses global and regional climate models (GCMs), chemical transport models (CTMs), and high-resolution satellite retrievals to investigate coordinated pathways for carbon neutrality and air quality attainment, transboundary transport of air pollutants, impacts of climate change on air quality and human health, and the effects of urbanization on air quality and health.
      </p>
      <p>
        His work has been published in high-profile journals including <em>Nature Geoscience</em>, <em>Nature Climate Change</em>, <em>The Lancet Planetary Health</em>, <em>Nature Communications</em>, and <em>PNAS</em>. He has published 54 SCI papers with more than 4,500 SCI citations, and has served as an invited reviewer for more than 180 manuscripts in over 40 journals, including <em>Nature Climate Change</em>, <em>Nature Communications</em>, <em>The Lancet Planetary Health</em>, <em>Environment International</em>, and <em>Atmospheric Chemistry and Physics</em>. He maintains active collaborations with leading universities in China and abroad. He also serves as a standing committee member of the Ozone Committee of the Chinese Society for Environmental Sciences (2024–2029), a standing committee member of the Artificial Intelligence Committee of the Chinese Society for Environmental Sciences (2024–2029), and an editorial board member of <em>Earth System Science Data</em> (ESSD).
      </p>
    </section>

    <section>
      <h2>Research Areas</h2>
      <div class="research-tags">
        <span class="research-tag">Wet and dry atmospheric deposition</span>
        <span class="research-tag">Long-range transport of air pollutants</span>
        <span class="research-tag">Urban heat island effects on air quality</span>
        <span class="research-tag">Machine learning</span>
        <span class="research-tag">Air pollution, climate change, and human health</span>
      </div>
    </section>

    <section>
      <h2>About the Group</h2>
      <p>
        The XYZ-CHANGE Group focuses on atmospheric chemistry, air quality, climate interactions, environmental health, and data-driven environmental science. The group integrates observations, satellite products, chemical transport modeling, health-impact assessment, and machine learning to understand atmospheric processes and support policy-relevant analysis for cleaner air, climate mitigation, and public health protection.
      </p>
    </section>

    <section>
      <h2>Latest News</h2>
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
      <p><a href="{{ '/news/' | relative_url }}">View all news</a></p>
    </section>

    <section class="notice">
      <h2>Join the Group</h2>
      <p>
        We welcome students and collaborators interested in atmospheric chemistry, air pollution, climate-health interactions, satellite remote sensing, chemical transport modeling, and machine learning for environmental applications.
      </p>
      <p><a href="{{ '/openings/' | relative_url }}">See openings</a></p>
    </section>
  </main>
</section>
