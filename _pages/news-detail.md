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
    <p>xxxx</p>
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

  const detailContent = {
    '2025-10-01-new-paper-from-our-group': '<p>A collaboration paper between our group, Fudan University, and NAS member Prof. Drew Shindell from Duke University was published in <em>Proceedings of the National Academy of Sciences of the United States of America</em> (PNAS).</p><p>In this paper, we discussed premature mortality disparities across different income groups both between and within countries. We provide evidence that aging populations can exacerbate health risks in countries with low poverty rates, surpassing those in poorer countries by some measures. Moreover, health burdens are concentrated not only in affluent urban areas globally, but also among poorer rural populations in low-income countries.</p><p>These findings can help guide more equitable outcomes for currently underserved populations.</p><p><a href="https://www.pnas.org/doi/10.1073/pnas.2511394122">Read the paper</a></p>',
    '2025-09-01-another-group-photo': '<p>Thanks for the brilliant ideas from our group students!</p><p>Nice pictures of all our group members so far!</p><img src="{{ '/assets/img/news/news9.jpg' | relative_url }}" alt="XYZ-CHANGE group members">'
  };

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
      bodyNode.innerHTML = '<p>xxxx</p>';
      previousNode.innerHTML = '';
      nextNode.innerHTML = '';
      return;
    }

    const item = newsItems[index];
    const previous = newsItems[index - 1];
    const next = newsItems[index + 1];

    dateNode.textContent = item.date;
    titleNode.textContent = item.title;
    bodyNode.innerHTML = detailContent[slug] || '<p>xxxx</p>';

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
