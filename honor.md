---
title: "王者荣耀专区"
permalink: /honor/
subtitle: "战绩只是开始，复盘才是进步。"
---

## 赛季概览（示例）

<div class="grid">
  <div class="card glass">
    <h3>本赛季段位</h3>
    <p>最强王者 / 50⭐（示例）</p>
  </div>
  <div class="card glass">
    <h3>主玩位置</h3>
    <p>打野 / 中路（示例）</p>
  </div>
  <div class="card glass">
    <h3>英雄池</h3>
    <p>镜、澜、露娜…（示例）</p>
  </div>
  <div class="card glass">
    <h3>高光战绩</h3>
    <p>10 连胜 / MVP x 8（示例）</p>
  </div>
</div>

## 战绩卡片（建议维护方式）

你可以把每一场（或每一次高光）当作一条记录，格式建议：

- 时间：2026-04-xx  
- 英雄 / 分路：xxx / xxx  
- KDA：x/x/x  
- 一句话复盘：这把赢在…… / 输在……  
- 截图：放到 `assets/photos/honor/`，然后在本页用普通 Markdown 图片或“相册灯箱”展示

---

## 最近 3 条战绩（结构化）

<div markdown="0">
<div class="honor-grid">
{% for m in site.data.honor %}
  <div class="honor-card glass">
    <div class="honor-head">
      <div class="honor-hero">
        <img class="honor-hero__img" src="{{ m.hero_icon | relative_url }}" alt="{{ m.hero | escape }} 图标" loading="lazy">
      </div>
      <div style="flex:1;">
        <div class="honor-title">
          <span class="honor-badge honor-badge--{{ m.result | escape }}">{{ m.result }}</span>
          <span style="font-weight:800;">{{ m.hero }}</span>
          <span style="color:var(--muted);">· {{ m.lane }}</span>
        </div>
        <div class="item__meta">{{ m.date }} · {{ m.duration_min }} 分钟 · 评分 {{ m.rating }} · KDA {{ m.kda }}</div>
      </div>
    </div>

    <div class="honor-metrics">
      <div class="honor-metric">
        <div class="honor-metric__k">伤害占比</div>
        <div class="honor-metric__v">{{ m.stats.damage_share }}</div>
      </div>
      <div class="honor-metric">
        <div class="honor-metric__k">承伤占比</div>
        <div class="honor-metric__v">{{ m.stats.tank_share }}</div>
      </div>
      <div class="honor-metric">
        <div class="honor-metric__k">参团率</div>
        <div class="honor-metric__v">{{ m.stats.participation }}</div>
      </div>
    </div>
  </div>
{% endfor %}
</div>
</div>
