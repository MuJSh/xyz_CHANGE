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
    <p>Redirecting to the news page...</p>
  </div>
</article>

<nav class="news-page-nav" id="news-detail-nav">
  <div id="previous-news"></div>
  <div id="next-news"></div>
  <p><a href="{{ '/news/' | relative_url }}">Back to all news</a></p>
</nav>

<script>
(function () {
  const redirectMap = {
    '2025-10-01-new-paper-from-our-group': '{{ '/news/2025-10-pnas-mortality-disparities/' | relative_url }}',
    '2025-09-01-another-group-photo': '{{ '/news/2025-09-group-photo/' | relative_url }}',
    '2025-08-01-congrats-to-dr-na-zhao-on-receiving-the-national-natural-science-foundation-of-china-young-scientists-fund': '{{ '/news/2025-08-na-zhao-nsfc/' | relative_url }}',
    '2025-05-01-new-paper-from-our-group-member': '{{ '/news/2025-05-bin-luo-acp-paper/' | relative_url }}',
    '2025-04-01-our-group-attended-the-7th-ozone-conference-in-hefei': '{{ '/news/2025-04-ozone-conference-hefei/' | relative_url }}',
    '2025-03-01-our-group-attended-the-ai4am-workshop-at-fudan-university': '{{ '/news/2025-03-ai4am-workshop/' | relative_url }}',
    '2025-01-01-pi-dr-zhang-attended-the-inaugural-meeting-of-the-ecological-environment-ai-committee-and-was-elected-executive-committee-member': '{{ '/news/2025-01-ecological-environment-ai-committee/' | relative_url }}',
    '2024-12-01-our-group-attended-the-2024-agu-fall-meeting-in-washington-dc': '{{ '/news/2024-12-agu-fall-meeting/' | relative_url }}',
    '2024-11-20-new-paper-from-our-group': '{{ '/news/2024-11-na-zhao-fese-paper/' | relative_url }}',
    '2024-11-15-congratulations-to-zhuyi-wang-and-bin-luo-on-passing-their-phd-mid-term-defenses': '{{ '/news/2024-11-phd-midterm-exams/' | relative_url }}'
  };

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

    if (redirectMap[slug]) {
      window.location.replace(redirectMap[slug]);
      return;
    }

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
