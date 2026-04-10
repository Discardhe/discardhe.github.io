---
title: "精选照片日记"
permalink: /diary/
subtitle: "每篇一段文字 + 若干张图。"
---

<div class="list">
  {% assign items = site.diary | sort: "date" | reverse %}
  {% for p in items %}
    <a class="item" href="{{ p.url | relative_url }}">
      <div style="font-weight:700;">{{ p.title }}</div>
      <div class="item__meta">{{ p.date | date: "%Y-%m-%d" }}{% if p.mood %} · {{ p.mood }}{% endif %}</div>
      {% if p.summary %}<div style="color:var(--muted); margin-top:6px;">{{ p.summary }}</div>{% endif %}
    </a>
  {% endfor %}
</div>

