---
title: "今天的光很好"
date: 2026-04-10
mood: "清爽"
summary: "记录一次出门、一次发呆、几张满意的照片。"
---

今天的空气很干净，蓝白的对比很适合拍人像和建筑。

{% assign g = site.data.galleries | where: "id", "featured" | first %}
{% if g %}
  {% include gallery.html gallery=g %}
{% endif %}

