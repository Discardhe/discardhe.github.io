---
title: "相册"
permalink: /gallery/
subtitle: "点击图片可灯箱浏览（PhotoSwipe）。"
---

{% for g in site.data.galleries %}
  {% include gallery.html gallery=g %}
{% endfor %}

> 添加照片方法：把图片放到 `assets/photos/你的文件夹/`，然后在 `_data/galleries.yml` 里新增条目即可。  
> `w/h` 建议写真实尺寸（不写也能用，但体验会差一点）。

