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
      <div class="home-photo-carousel-shell">
        <button class="home-carousel-arrow home-carousel-arrow-left" type="button" aria-label="Previous group photo">‹</button>
        <div class="home-photo-carousel" id="homePhotoCarousel" aria-label="XYZ-CHANGE group photos">
          <img class="home-cover-photo" src="{{ '/assets/img/news/change.jpg' | relative_url }}" alt="XYZ-CHANGE Group photo 1">
          <img class="home-cover-photo" src="{{ '/assets/img/news/change2.jpg' | relative_url }}" alt="XYZ-CHANGE Group photo 2">
        </div>
        <button class="home-carousel-arrow home-carousel-arrow-right" type="button" aria-label="Next group photo">›</button>
      </div>
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

    <section class="home-about-prof">
      <h2>About Prof. Zhang</h2>
      <p>
        Dr. Yuqiang Zhang is a Professor and doctoral supervisor at the Environment Research Institute, Shandong University. He was selected for the National Overseas High-Level Young Talents Program and recognized as a Distinguished Young and Middle-Aged Scholar of Shandong University.
      </p>
      <p>
        His research integrates global and regional climate models, chemical transport models, high-resolution satellite retrievals, and health-impact assessment to investigate carbon neutrality pathways, air quality attainment, transboundary pollution transport, and climate-related health risks.
      </p>
      <p class="profile-more-link"><a href="{{ '/members/yuqiang-zhang/' | relative_url }}">Read full profile →</a></p>
    </section>

    <section>
      <div class="section-heading">
        <h2>Research Areas</h2>
      </div>
      <div class="research-card-grid home-research-grid">
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
        <div class="research-card research-card-featured">
          <h3>Climate, Pollution, and Health</h3>
          <p>Connecting air pollution, climate change, and human health under current and future scenarios.</p>
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
      <p class="join-action"><a class="button-link" href="{{ '/openings/' | relative_url }}">See openings →</a></p>
    </section>
  </main>
</section>

<style>
.home-about-prof {
  padding-bottom: 2px;
}

.profile-more-link {
  margin-top: 10px;
  margin-bottom: 0;
  font-weight: 700;
}

.home-research-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.home-research-grid .research-card {
  min-height: 158px;
}

.research-card-featured {
  grid-column: span 2;
  background: linear-gradient(135deg, #ffffff 0%, #eef5fb 100%);
  border-color: #d8e7f4;
}

.home-news-block .news-date {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  min-width: 88px;
  padding: 4px 9px;
  border-radius: 999px;
  background: #e9f1fa;
  color: #183f66;
  font-size: 0.78rem;
  font-weight: 800;
  line-height: 1.2;
}

.home-news-block .news-row {
  align-items: center;
}

.home-join {
  position: relative;
  overflow: hidden;
}

.home-join::after {
  content: "";
  position: absolute;
  right: -70px;
  bottom: -70px;
  width: 170px;
  height: 170px;
  border-radius: 50%;
  background: rgba(36, 90, 141, 0.06);
}

.home-join > * {
  position: relative;
  z-index: 1;
}

.join-action {
  margin-top: 18px;
  margin-bottom: 0;
}

.home-photo-carousel-shell {
  position: relative;
  border-radius: 24px;
  overflow: hidden;
}

.home-photo-carousel {
  overflow-x: hidden;
  scrollbar-width: none;
}

.home-photo-carousel::-webkit-scrollbar {
  display: none;
}

.home-carousel-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
  width: 42px;
  height: 42px;
  border: 1px solid rgba(255, 255, 255, 0.85);
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.75);
  color: #183f66;
  font-size: 2rem;
  line-height: 1;
  cursor: pointer;
  box-shadow: 0 8px 22px rgba(31, 41, 51, 0.18);
}

.home-carousel-arrow:hover {
  background: rgba(255, 255, 255, 0.95);
}

.home-carousel-arrow-left {
  left: 16px;
}

.home-carousel-arrow-right {
  right: 16px;
}

@media (max-width: 780px) {
  .home-research-grid {
    grid-template-columns: 1fr;
  }

  .research-card-featured {
    grid-column: span 1;
  }
}
</style>

<script>
(function () {
  const carousel = document.getElementById('homePhotoCarousel');
  if (!carousel) return;

  const slides = carousel.querySelectorAll('.home-cover-photo');
  const prevButton = document.querySelector('.home-carousel-arrow-left');
  const nextButton = document.querySelector('.home-carousel-arrow-right');
  if (slides.length < 2) return;

  let index = 0;
  let timer = null;

  function showSlide(newIndex) {
    index = (newIndex + slides.length) % slides.length;
    carousel.scrollTo({
      left: slides[index].offsetLeft,
      behavior: 'smooth'
    });
  }

  function startAutoPlay() {
    timer = setInterval(function () {
      showSlide(index + 1);
    }, 4000);
  }

  function resetAutoPlay() {
    if (timer) clearInterval(timer);
    startAutoPlay();
  }

  if (prevButton) {
    prevButton.addEventListener('click', function () {
      showSlide(index - 1);
      resetAutoPlay();
    });
  }

  if (nextButton) {
    nextButton.addEventListener('click', function () {
      showSlide(index + 1);
      resetAutoPlay();
    });
  }

  startAutoPlay();
})();
</script>