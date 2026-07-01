---
layout: page
title: "Publications"
permalink: /publications/
---

An asterisk after an author name denotes the corresponding author. Group members are shown in bold.

{% assign current_year = "" %}
{% for pub in site.data.publications %}
{% assign pub_year = pub.year | append: "" %}
{% if pub_year != current_year %}
{% assign current_year = pub_year %}
<h2>{{ current_year }}</h2>
{% endif %}
{% assign citation = pub.citation
  | replace: 'Zhang, Y*.', '<strong>Zhang, Y*.</strong>'
  | replace: 'Zhang, Y.', '<strong>Zhang, Y.</strong>'
  | replace: 'Li, L.', '<strong>Li, L.</strong>'
  | replace: 'Zhao, N.', '<strong>Zhao, N.</strong>'
  | replace: 'Mu, J.', '<strong>Mu, J.</strong>'
  | replace: 'Wang, Z.', '<strong>Wang, Z.</strong>'
  | replace: 'Luo, B.', '<strong>Luo, B.</strong>'
  | replace: 'Gao, Z.', '<strong>Gao, Z.</strong>'
  | replace: 'Ji, X.', '<strong>Ji, X.</strong>'
  | replace: 'Zhou, Q.', '<strong>Zhou, Q.</strong>'
  | replace: 'Niu, C.', '<strong>Niu, C.</strong>'
  | replace: 'Zhang, K.', '<strong>Zhang, K.</strong>'
  | replace: 'Han, Z.', '<strong>Han, Z.</strong>'
  | replace: 'Liu, Z.', '<strong>Liu, Z.</strong>' %}
<div class="list-item publication-item">
<p>{{ citation }}</p>
{% if pub.note and pub.note != "" %}
<p><span class="badge">{{ pub.note }}</span></p>
{% endif %}
{% if pub.url and pub.url != "" %}
<p><a href="{{ pub.url }}">DOI / Link</a></p>
{% endif %}
</div>
{% endfor %}
