---
layout: page
title: "News"
permalink: /news/
---

<section id="news-list-view">
{% for item in site.data.news %}
{% assign news_slug = item.date | append: '-' | append: item.title | slugify %}
<div class="list-item">
  <span class="badge">{{ item.date }}</span>
  <p>
    <a class="news-link" href="#{{ news_slug }}" data-slug="{{ news_slug }}" data-date="{{ item.date | escape }}" data-title="{{ item.title | escape }}">{{ item.title }}</a>
  </p>
</div>
{% endfor %}
</section>

<section id="news-detail-view" style="display: none;">
  <p><a href="{{ '/news/' | relative_url }}" id="back-to-news">← Back to all news</a></p>
  <article class="card">
    <span class="badge" id="news-detail-date"></span>
    <h2 id="news-detail-title"></h2>
    <p class="meta">Details will be added soon.</p>
  </article>
  <nav class="news-nav" style="display: flex; justify-content: space-between; gap: 18px; margin-top: 24px;">
    <div id="previous-news"></div>
    <div id="next-news" style="text-align: right;"></div>
  </nav>
</section>

<script>
(function () {
  const listView = document.getElementById('news-list-view');
  const detailView = document.getElementById('news-detail-view');
  const detailDate = document.getElementById('news-detail-date');
  const detailTitle = document.getElementById('news-detail-title');
  const previousNews = document.getElementById('previous-news');
  const nextNews = document.getElementById('next-news');
  const links = Array.from(document.querySelectorAll('.news-link'));
  const items = links.map(function (link) {
    return {
      slug: link.dataset.slug,
      date: link.dataset.date,
      title: link.dataset.title
    };
  });

  function renderNews() {
    const slug = decodeURIComponent(window.location.hash.replace('#', ''));
    const index = items.findIndex(function (item) { return item.slug === slug; });

    if (index < 0) {
      listView.style.display = '';
      detailView.style.display = 'none';
      return;
    }

    const item = items[index];
    listView.style.display = 'none';
    detailView.style.display = '';
    detailDate.textContent = item.date;
    detailTitle.textContent = item.title;

    const previous = items[index - 1];
    const next = items[index + 1];

    previousNews.innerHTML = previous
      ? '<a href="#' + previous.slug + '">← Previous<br><strong>' + previous.title + '</strong></a>'
      : '';

    nextNews.innerHTML = next
      ? '<a href="#' + next.slug + '">Next →<br><strong>' + next.title + '</strong></a>'
      : '';

    window.scrollTo(0, 0);
  }

  window.addEventListener('hashchange', renderNews);
  renderNews();
})();
</script>
