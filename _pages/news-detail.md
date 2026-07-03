---
layout: page
title: "News Detail"
permalink: /news-detail/
---

<p><a href="{{ '/news/' | relative_url }}">← Back to all news</a></p>

<article class="card" id="news-detail-card">
  <span class="badge" id="news-detail-date"></span>
  <h2 id="news-detail-title">News</h2>
  <div id="news-detail-body">
    <p>Details will be updated soon.</p>
  </div>
</article>

<nav class="news-page-nav" id="news-detail-nav">
  <div id="previous-news"></div>
  <div id="next-news"></div>
  <p><a href="{{ '/news/' | relative_url }}">Back to all news</a></p>
</nav>

<script>
(function () {
  const newsItems = [
    {% for item in site.data.news %}
    {
      date: {{ item.date | jsonify }},
      title: {{ item.title | jsonify }},
      slug: {{ item.slug | jsonify }},
      link: {{ item.link | jsonify }}
    }{% unless forloop.last %},{% endunless %}
    {% endfor %}
  ];

  const dateNode = document.getElementById('news-detail-date');
  const titleNode = document.getElementById('news-detail-title');
  const bodyNode = document.getElementById('news-detail-body');
  const previousNode = document.getElementById('previous-news');
  const nextNode = document.getElementById('next-news');

  function renderNewsDetail() {
    let slug = decodeURIComponent(window.location.hash.replace('#', ''));
    if (!slug && newsItems.length > 0) slug = newsItems[0].slug;

    const index = newsItems.findIndex(function (item) {
      return item.slug === slug;
    });

    if (index < 0) {
      dateNode.textContent = '';
      titleNode.textContent = 'News not found';
      bodyNode.innerHTML = '<p>Details will be updated soon.</p>';
      previousNode.innerHTML = '';
      nextNode.innerHTML = '';
      return;
    }

    const item = newsItems[index];
    const previous = newsItems[index - 1];
    const next = newsItems[index + 1];

    dateNode.textContent = item.date;
    titleNode.textContent = item.title;
    bodyNode.innerHTML = '<p>Details will be updated soon.</p>';

    previousNode.innerHTML = previous
      ? '<a href="' + previous.link + '">← Previous<br><strong>' + previous.title + '</strong></a>'
      : '';

    nextNode.innerHTML = next
      ? '<a href="' + next.link + '">Next →<br><strong>' + next.title + '</strong></a>'
      : '';
  }

  window.addEventListener('hashchange', renderNewsDetail);
  renderNewsDetail();
})();
</script>
