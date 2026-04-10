---
layout: default
title: "首页"
---

<section class="hero glass">
  <h1 class="hero__title">discardhe · 日常记录</h1>
  <p class="hero__desc">蓝白毛玻璃 · 现代简约 · 记录生活 / 作品 / 战绩。</p>
  <div class="chips">
    <span class="chip">CV</span>
    <span class="chip">胶卷</span>
    <span class="chip">精选照片日记</span>
    <span class="chip">王者荣耀专区</span>
  </div>
  <div style="display:flex; gap:10px; flex-wrap:wrap; margin-top: 4px;">
    <a class="btn" href="{{ '/gallery/' | relative_url }}">打开相册</a>
    <a class="btn" style="background: rgba(255,255,255,.6); color: var(--ink); border:1px solid rgba(255,255,255,.42); box-shadow:none;" href="{{ '/cv/' | relative_url }}">查看 CV</a>
  </div>
</section>

<section class="grid" style="margin-top:14px;">
  <a class="card glass" href="{{ '/film/' | relative_url }}">
    <h3>胶卷</h3>
    <p>按时间归档的照片合集：一卷一卷地存。</p>
  </a>
  <a class="card glass" href="{{ '/diary/' | relative_url }}">
    <h3>精选照片日记</h3>
    <p>每篇一段话 + 若干张图（适合记录“今天发生了啥”）。</p>
  </a>
  <a class="card glass" href="{{ '/honor/' | relative_url }}">
    <h3>王者荣耀专区</h3>
    <p>战绩卡片、赛季记录、MVP 截图、英雄池。</p>
  </a>
  <a class="card glass" href="{{ '/cv/' | relative_url }}">
    <h3>个人 CV</h3>
    <p>经历 / 技能 / 项目 / 联系方式（支持随时更新）。</p>
  </a>
</section>

