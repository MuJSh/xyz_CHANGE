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

  const detailContent = {
    '2025-10-01-new-paper-from-our-group': '<p>A collaboration paper between our group, Fudan University, and NAS member Prof. Drew Shindell from Duke University was published in <em>Proceedings of the National Academy of Sciences of the United States of America</em> (PNAS).</p><p>In this paper, we discussed premature mortality disparities across different income groups both between and within countries. We provide evidence that aging populations can exacerbate health risks in countries with low poverty rates, surpassing those in poorer countries by some measures. Moreover, health burdens are concentrated not only in affluent urban areas globally, but also among poorer rural populations in low-income countries.</p><p>These findings can help guide more equitable outcomes for currently underserved populations.</p><p><a href="https://www.pnas.org/doi/10.1073/pnas.2511394122">Read the paper</a></p>',
    '2025-09-01-another-group-photo': '<p>Thanks for the brilliant ideas from our group students!</p><p>Nice pictures of all our group members so far!</p><img src="{{ '/assets/img/news/news9.jpg' | relative_url }}" alt="XYZ-CHANGE group members">',
    '2025-08-01-congrats-to-dr-na-zhao-on-receiving-the-national-natural-science-foundation-of-china-young-scientists-fund': '<p>Congrats to our postdoc Dr. Na Zhao on being awarded the National Natural Science Foundation of China (NSFC) Young Scientists Fund.</p><p>Big congrats!</p>',
    '2025-05-01-new-paper-from-our-group-member': '<p>Congratulations to PhD student Bin Luo on publishing a new paper in <em>Atmospheric Chemistry and Physics</em>.</p><p>The paper, titled <em>Spatial–temporal patterns in anthropogenic and biomass burning emission contributions to air pollution and mortality burden changes in India from 1995 to 2014</em>, was published in ACP.</p><p>In this study, we used a global atmospheric chemistry model to analyze spatial and temporal trends in PM<sub>2.5</sub> and O<sub>3</sub> in India from 1995 to 2014. By combining the model results with population and mortality data, we quantified changes in the mortality burden associated with air pollution and further evaluated the contributions of anthropogenic and biomass burning emissions to air quality impacts.</p><p>Luo, B., Zhang, Y*., Tang, T., Zhang, H., Hu, J., Mu, J., Wang, W., and Xue, L*.: Spatial–temporal patterns in anthropogenic and biomass burning emission contributions to air pollution and mortality burden changes in India from 1995 to 2014, <em>Atmos. Chem. Phys.</em>, 25, 4767–4783, 2025.</p><p><a href="https://doi.org/10.5194/acp-25-4767-2025">Read the paper</a></p>',
    '2025-04-01-our-group-attended-the-7th-ozone-conference-in-hefei': '<p>Two of our group members, PI Dr. Yuqiang Zhang and Xuanying Ji, attended the 7th Ozone Pollution Prevention and Control Conference held in Hefei, China, from April 11 to 13.</p><p>Dr. Zhang convened Session 4, <em>Extreme Climate and Extreme Pollution Events</em>, and gave a presentation in Session 5, <em>Theories and Technologies for Coordinated Control of Ozone and PM<sub>2.5</sub> Pollution</em>, titled <em>Impacts of Marine Chlorine Emissions on Secondary Pollutants over the North China Plain</em>.</p><p>Xuanying Ji presented her research progress in the Young Scholars Session, with a talk titled <em>Changes in the Seasonal Distribution of Ozone in China from 2014 to 2024 and Their Driving Factors</em>.</p><p>In addition, Bin Luo and Xuanying Ji were recognized and commended at the Ozone Committee meeting for their volunteer contributions to the committee literature review effort.</p>',
    '2025-03-01-our-group-attended-the-ai4am-workshop-at-fudan-university': '<p>Several of us attended the AI4AM (AI for Atmospheric Science) workshop hosted by Fudan University in Shanghai.</p><p>At the invitation of Fudan University, PI Dr. Yuqiang Zhang, Jiangshan Mu, and Chengwen Niu participated in the workshop and discussed applications of machine learning in atmospheric science.</p><img src="{{ '/assets/img/news/AISH.jpg' | relative_url }}" alt="AI4AM workshop at Fudan University">',
    '2025-01-01-pi-dr-zhang-attended-the-inaugural-meeting-of-the-ecological-environment-ai-committee-and-was-elected-executive-committee-member': '<p>Ecological and environmental protection is closely related to the future development of humanity, and the rapid development of artificial intelligence is creating new opportunities for ecological and environmental protection and governance.</p><p>On January 13, 2025, at the inaugural meeting and academic forum of the Ecological Environment Artificial Intelligence Committee of the Chinese Society for Environmental Sciences, Prof. Ming Xu from the School of Environment at Tsinghua University announced a strategic collaboration with Beijing Baidu Netcom Science Technology Co., Ltd. The collaboration aims to combine Tsinghua University research strengths in environmental science with Baidu strengths in artificial intelligence to jointly develop the world first pre-trained large model for the ecological and environmental vertical domain.</p><p>At the meeting, the Ecological Environment Artificial Intelligence Committee was officially established. The committee aims to promote industry-academia-research collaboration and advance applications of artificial intelligence in environmental monitoring, pollution prevention and control, ecological restoration, and ecological-environmental management.</p><p>After voting, Prof. Ming Xu, Chair Professor of Carbon Neutrality and Vice Dean of the School of Environment at Tsinghua University, was elected Chair of the committee. The committee will prioritize applications of artificial intelligence in areas such as water resources and the atmospheric environment, and will provide large-model training services for researchers and practitioners in the ecological and environmental field.</p><p>PI Dr. Yuqiang Zhang attended the inaugural meeting and was elected as an Executive Committee Member.</p><p>Related links: <a href="https://www.env.tsinghua.edu.cn/info/1129/9432.htm">Tsinghua University School of Environment</a>; <a href="https://lw.xinhuanet.com/20250120/d166e95e0add47449f21921b415f3003/c.html">Xinhuanet</a>; <a href="http://paper.people.com.cn/zgnyb/pc/content/202501/20/content_30053912.html">China Energy News</a>.</p>',
    '2024-12-01-our-group-attended-the-2024-agu-fall-meeting-in-washington-dc': '<p>Several of us attended the 2024 AGU Fall Meeting, which was held in Washington, D.C., USA.</p><p>AGU is one of the largest conferences in our field and brings together more than 20,000 researchers, scientists, funding agencies, and exhibitors every year.</p><p>Three presentations were given by members of our broader group:</p><p><strong>Jiangshan Mu</strong>: A42F-06, <em>High-Resolution Global NO<sub>2</sub> Dataset (2005–2023) via Air Transformer Model: Decadal Trends and Spatial Insights</em>.</p><p><strong>Bin Luo</strong>: A31E-1753, <em>Anthropogenic Emissions Changes in South Asia Drive the Global Population Ozone Exposure and Tropospheric Ozone Burden from 2000 to 2019</em>.</p><p><strong>Yu Yang</strong>: A51K-1834, <em>Unrevealing a Missing Source of Atmospheric Organic Nitrates from the Multiphase Reactions Between Organic Peroxides and Nitrite</em>.</p><img src="{{ '/assets/img/news/AGU.jpg' | relative_url }}" alt="2024 AGU Fall Meeting">',
    '2024-11-20-new-paper-from-our-group': '<p>Congratulations to Dr. Na Zhao on publishing a new paper in <em>Frontiers of Environmental Science &amp; Engineering</em>.</p><p>The paper, titled <em>Nonlinear relationship between air pollution and precursor emissions in Qingdao, eastern China</em>, used a three-dimensional atmospheric chemistry model to investigate how emission reductions from different sectors and different NOx and NMVOCs reduction ratios affect major air pollutants in Qingdao, including fine particulate matter and ozone.</p><p>Zhao, N., Zhang, Y., &amp; Xue, L. (2025). Nonlinear relationship between air pollution and precursor emissions in Qingdao, eastern China. <em>Frontiers of Environmental Science and Engineering</em>, 19(1), 1–12.</p><p><strong>Abstract:</strong> Exploring the nonlinear relationship between air pollution and precursor emissions in Qingdao, eastern China is crucial for improving air quality. We simulated 32 emission reduction scenarios based on different volatile organic compound (VOC) and nitrogen oxide (NOx) emission reduction ratios using the Weather Research and Forecasting-Comprehensive Air Quality Model Extensions model. The emission reduction of VOCs was beneficial for reducing fine particulate matter (PM2.5) concentration in January and ozone (O3) concentration in June. However, NOx must be reduced by at least 48% and 70% to decrease PM2.5 and O3 concentrations, respectively, when VOCs are not reduced. The responses of PM2.5 and O3 concentrations to emission reductions from different sources were also evaluated. The reduction in VOC emissions from different sources decreased the PM2.5 concentration in January, and O3 concertation in June, while NOx reduction resulted in an increase. Controlling VOC emissions from industry has a positive effect on improving local PM2.5 and O3, while the emission reductions of NOx from transportation and industry are not conducive to reducing PM2.5 and O3 concentrations. The synergistic emission reduction pathways for NOx and VOCs during PM2.5 and O3 combined pollution were also analyzed. The VOC and NOx emission reductions were beneficial for reducing the comprehensive Air Quality Index (sAQI) values. When the NOx emission reduction was large, the sAQI improvement gradually exceeded that of VOCs. A collaborative optimization path should be adopted that focuses on controlling VOCs first, and further control of combined pollution should depend on the deep reduction of NOx.</p><p><a href="https://doi.org/10.1007/s11783-025-1929-3">Read the paper</a></p>',
    '2024-11-15-congratulations-to-zhuyi-wang-and-bin-luo-on-passing-their-phd-mid-term-defenses': '<p>Congratulations to Zhuyi Wang and Bin Luo on passing their PhD mid-term examinations.</p><p>They are now officially PhD candidates.</p><p>Zhuyi\'s presentation was titled <em>Synergistic effects of global and Chinese climate change mitigation policies on future air quality and human health</em>.</p><p>Bin\'s presentation was titled <em>Modeling the impacts of emission changes on regional and global fine particulate matter and ozone pollution</em>.</p>'
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
    bodyNode.innerHTML = detailContent[slug] || '<p>Details will be updated soon.</p>';

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
