---
title: "胶卷"
permalink: /film/
subtitle: "按时间 / 按卷归档。"
---

<div class="list">
  {% assign items = site.film | sort: "date" | reverse %}
  {% for p in items %}
    <a class="item" href="{{ p.url | relative_url }}">
      <div style="font-weight:700;">{{ p.title }}</div>
      <div class="item__meta">{{ p.date | date: "%Y-%m-%d" }}{% if p.location %} · {{ p.location }}{% endif %}</div>
      {% if p.summary %}<div style="color:var(--muted); margin-top:6px;">{{ p.summary }}</div>{% endif %}
    </a>
  {% endfor %}
</div>

