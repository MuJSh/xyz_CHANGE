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
    <p class="meta">Environment Research Institute<br>Shandong University</p>
    <p><a href="mailto:Yuqiang.Zhang@sdu.edu.cn">Yuqiang.Zhang@sdu.edu.cn</a></p>
    <p><a href="{{ '/members/yuqiang-zhang/' | relative_url }}">Full profile</a></p>
  </aside>

  <main class="home-main">
    <section class="home-top-photo">
      <div class="home-photo-carousel" id="homePhotoCarousel" aria-label="XYZ-CHANGE group photos">
        <img class="home-cover-photo" src="{{ '/assets/img/news/change.jpg' | relative_url }}" alt="XYZ-CHANGE Group photo 1">
        <img class="home-cover-photo" src="{{ '/assets/img/news/change2.jpg' | relative_url }}" alt="XYZ-CHANGE Group photo 2">
      </div>
      <p class="carousel-hint">Photos rotate automatically. Swipe or scroll to view manually.</p>
    </section>

    <section class="home-intro-card">
      <p class="eyebrow">XYZ-CHANGE Group</p>
      <h2>Climate, Health, and Air Quality for Next Generation</h2>
      <p>
        The XYZ-CHANGE Group studies atmospheric chemistry, air quality, climate interactions, environmental health, and data-driven environmental science. The group focuses on how emissions, atmospheric processes, climate change, and urbanization jointly shape air quality and its impacts on ecosystems and human health.
      </p>
      <p>
        We integrate observations, satellite products, chemical transport modeling, climate modeling, health-impact assessment, and machine learning to support policy-relevant analysis for coordinated air pollution control, climate mitigation, and public health protection.
      </p>
    </section>

    <section>
      <h2>About Prof. Zhang</h2>
      <p>
        Dr. Yuqiang Zhang is a Professor and doctoral supervisor at the Environment Research Institute, Shandong University. He was selected for the National Overseas High-Level Young Talents Program and recognized as a Distinguished Young and Middle-Aged Scholar of Shandong University.
      </p>
      <p>
        His research uses global and regional climate models (GCMs), chemical transport models (CTMs), and high-resolution satellite retrievals to investigate coordinated pathways for carbon neutrality and air quality attainment, transboundary transport of air pollutants, impacts of climate change on air quality and human health, and the effects of urbanization on air quality and health.
      </p>
      <p>
        His work has been published in high-profile journals including <em>Nature Geoscience</em>, <em>Nature Climate Change</em>, <em>The Lancet Planetary Health</em>, <em>Nature Communications</em>, and <em>PNAS</em>. He has published 54 SCI papers with more than 4,500 SCI citations, and has served as an invited reviewer for more than 180 manuscripts in over 40 journals, including <em>Nature Climate Change</em>, <em>Nature Communications</em>, <em>The Lancet Planetary Health</em>, <em>Environment International</em>, and <em>Atmospheric Chemistry and Physics</em>. He maintains active collaborations with leading universities in China and abroad. He also serves as a standing committee member of the Ozone Committee of the Chinese Society for Environmental Sciences (2024–2029), a standing committee member of the Artificial Intelligence Committee of the Chinese Society for Environmental Sciences (2024–2029), and an editorial board member of <em>Earth System Science Data</em> (ESSD).
      </p>
    </section>

    <section>
      <div class="section-heading">
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
  </main>
</section>

<script>
(function () {
  const carousel = document.getElementById('homePhotoCarousel');
  if (!carousel) return;

  const slides = carousel.querySelectorAll('.home-cover-photo');
  if (slides.length < 2) return;

  let index = 0;

  setInterval(function () {
    index = (index + 1) % slides.length;
    carousel.scrollTo({
      left: slides[index].offsetLeft,
      behavior: 'smooth'
    });
  }, 4000);
})();
</script>
