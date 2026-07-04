---
layout: page
title: "Openings"
permalink: /openings/
---

<section class="openings-hero">
  <p class="openings-kicker">Join XYZ-CHANGE Group</p>
  <h1>Openings</h1>
  <p>
    We welcome motivated researchers and students working at the intersection of atmospheric chemistry, air quality, climate, health, satellite remote sensing, chemical transport modeling, and machine learning for environmental applications.
  </p>
</section>

<section class="opening-card-grid">
  <div class="opening-card">
    <span class="opening-label">Postdoc</span>
    <h2>Postdoctoral Researchers</h2>
    <h3>博士后</h3>
    <p>
      We welcome applicants with backgrounds in atmospheric chemistry modeling, remote sensing, health-impact assessment, environmental epidemiology, or machine learning.
    </p>
    <p class="cn-text">欢迎具有大气化学模式、遥感、健康效应评估、环境流行病学或机器学习背景的申请者加入。</p>
  </div>

  <div class="opening-card">
    <span class="opening-label">Graduate Students</span>
    <h2>PhD and Master Students</h2>
    <h3>博士与硕士研究生</h3>
    <p>
      Prospective PhD and Master students are encouraged to contact the group with a CV, transcripts, and a short description of research interests.
    </p>
    <p class="cn-text">欢迎有志于空气污染、气候变化、环境健康和环境数据科学研究的博士与硕士研究生联系课题组。</p>
  </div>
</section>

<section class="openings-research">
  <h2>Research directions we welcome</h2>
  <div class="opening-tags">
    <span>Atmospheric chemistry</span>
    <span>Air quality and climate interactions</span>
    <span>Satellite remote sensing</span>
    <span>Chemical transport modeling</span>
    <span>Environmental health</span>
    <span>Machine learning for environmental applications</span>
  </div>
</section>

<section class="openings-contact">
  <div>
    <p class="openings-kicker">Contact</p>
    <h2>Interested in joining us?</h2>
    <p>
      We are committed to building an open, collaborative, and interdisciplinary research environment.
    </p>
  </div>
  <a class="button-link" href="mailto:Yuqiang.Zhang@sdu.edu.cn">Send Email</a>
</section>

<style>
.openings-hero {
  margin-bottom: 28px;
  padding: 30px;
  border: 1px solid var(--border);
  border-radius: 24px;
  background: linear-gradient(135deg, #ffffff 0%, #eef5fb 100%);
  box-shadow: 0 14px 34px rgba(31, 41, 51, 0.06);
}

.openings-hero h1 {
  margin: 4px 0 12px;
  font-size: 2.35rem;
}

.openings-hero p {
  max-width: 980px;
}

.openings-kicker {
  margin: 0 0 6px;
  color: var(--accent-dark);
  font-size: 0.82rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.button-link.secondary {
  background: #ffffff;
  color: var(--accent-dark);
  border-color: #d8e3ed;
}

.button-link.secondary:hover {
  background: #e9f1fa;
  color: var(--accent-dark);
}

.opening-card-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;
  margin-bottom: 22px;
}

.opening-card {
  position: relative;
  padding: 26px;
  border: 1px solid var(--border);
  border-radius: 22px;
  background: #ffffff;
  box-shadow: 0 12px 30px rgba(31, 41, 51, 0.05);
}

.opening-card::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 5px;
  background: linear-gradient(90deg, var(--accent) 0%, #7fb7d4 100%);
}

.opening-label {
  display: inline-flex;
  margin-bottom: 16px;
  padding: 5px 11px;
  border-radius: 999px;
  background: #e9f1fa;
  color: var(--accent-dark);
  font-size: 0.78rem;
  font-weight: 800;
}

.opening-card h2 {
  margin: 0 0 6px;
  font-size: 1.35rem;
}

.opening-card h3 {
  margin: 0 0 18px;
  color: var(--muted);
  font-size: 1.02rem;
}

.opening-card p {
  margin-bottom: 12px;
}

.cn-text {
  color: #465568;
}

.openings-research {
  margin-bottom: 22px;
  padding: 24px 26px;
  border: 1px solid var(--border);
  border-radius: 22px;
  background: #f8fbfd;
}

.openings-research h2 {
  margin-top: 0;
}

.opening-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.opening-tags span {
  display: inline-flex;
  padding: 7px 12px;
  border: 1px solid #d8e3ed;
  border-radius: 999px;
  background: #ffffff;
  color: #334155;
  font-size: 0.92rem;
  font-weight: 650;
}

.openings-contact {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 22px;
  padding: 26px;
  border-radius: 22px;
  background: #183f66;
  color: #ffffff;
}

.openings-contact h2,
.openings-contact p,
.openings-contact .openings-kicker {
  color: #ffffff;
}

.openings-contact h2 {
  margin-top: 0;
}

.openings-contact .button-link {
  background: #ffffff;
  color: #183f66;
  border-color: #ffffff;
  flex: 0 0 auto;
}

@media (max-width: 780px) {
  .openings-hero {
    padding: 24px;
  }

  .opening-card-grid {
    grid-template-columns: 1fr;
  }

  .openings-contact {
    display: block;
  }

  .openings-contact .button-link {
    margin-top: 16px;
  }
}
</style>
