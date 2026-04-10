---
title: "个人 CV"
permalink: /cv/
subtitle: "好累！"
---

{% assign cv = site.data.cv %}

## 基本信息

{% if cv and cv[0].basics %}
- 姓名：{{ cv[0].basics.name }}  
- 城市：{{ cv[0].basics.location }}  
- 邮箱：{{ cv[0].basics.email }}  
{% if cv[0].basics.mobile %}- 手机：{{ cv[0].basics.mobile }}  {% endif %}
{% if cv[0].basics.wechat %}- 微信：{{ cv[0].basics.wechat }}  {% endif %}
{% else %}
- 姓名：你的名字  
- 城市：城市  
- 邮箱：xxx@xx.com  
- GitHub：<https://github.com/discardhe>
{% endif %}

## 关键技能

- 技术 / 工具：……
- 拍摄 / 审美：……
- 其他：……

## 经历（带 Logo）

{% if cv %}
<div markdown="0">
{% for section in cv %}
{% if section.section %}
<h3 class="cv-section-title">{{ section.section }}</h3>
<div class="list">
{% for it in section.items %}
<div class="cv-item">
{% if it.logo %}
<img class="cv-logo" src="{{ it.logo | relative_url }}" alt="{{ it.name | escape }} logo" loading="lazy">
{% else %}
<div class="cv-logo"></div>
{% endif %}
<div style="flex:1;">
  <div class="cv-item__head">
    <div class="cv-item__name">{{ it.name }}</div>
    <div class="item__meta">{{ it.time }}</div>
  </div>
  {% if it.meta %}<div class="cv-item__meta">{{ it.meta }}</div>{% endif %}
  {% if it.highlights %}
  <ul style="margin:8px 0 0; padding-left: 18px;">
    {% for h in it.highlights %}
    <li>{{ h }}</li>
    {% endfor %}
  </ul>
  {% endif %}
</div>
</div>
{% endfor %}
</div>
{% endif %}
{% endfor %}
</div>
{% else %}
**公司 / 学校**（20xx.xx - 20xx.xx）  
做了什么、负责什么、产出什么（建议 3~5 条要点）。
{% endif %}

## 项目 / 作品

- 作品 A：一句话亮点 + 链接  
- 作品 B：一句话亮点 + 链接
