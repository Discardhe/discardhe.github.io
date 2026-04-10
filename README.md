# discardhe.github.io（Jekyll · 蓝白毛玻璃 · 内置相册）

这是一个可以直接用于 **GitHub Pages** 的 Jekyll 站点骨架，包含：

- 主页（导航 + 卡片入口）
- 个人 CV：`/cv/`
- 胶卷（collection）：`/film/`
- 精选照片日记（collection）：`/diary/`
- 王者荣耀专区：`/honor/`
- 内置相册能力（PhotoSwipe 灯箱）：可在胶卷/日记里插入 gallery

## 1) 如何上线到 `https://discardhe.github.io/`

1. 把本项目文件复制到你的仓库 `discardhe/discardhe.github.io` 根目录
2. GitHub → 仓库 Settings → Pages
3. Build and deployment：
   - Source 选 “Deploy from a branch”
   - Branch 选 `main`（或你的默认分支） + `/ (root)`
4. 等 1~3 分钟刷新即可

> 如果你之前用的是别的主题/框架，建议先备份原仓库内容。

## 2) 如何添加照片（相册能力）

推荐的文件约定：

- 原图/展示图：`assets/photos/<分类>/xxx.jpg`
- 然后在 `_data/galleries.yml` 中新增一个 gallery：
  - `id`：唯一字符串（用于在文章中引用）
  - `items`：图片列表（建议填 `w/h` 真实尺寸）

你可以在任意页面（例如胶卷/日记）里通过 include 渲染一个 gallery。

## 字体

模板默认使用系统字体：英文优先 Helvetica，中文优先楷体（不同系统可能显示为 KaiTi / STKaiti / Kaiti SC 等）。


## 3) 如何写“胶卷”和“照片日记”

- 胶卷：在 `_film/` 下新建 Markdown 文件（会自动出现在 `/film/` 列表）
- 日记：在 `_diary/` 下新建 Markdown 文件（会自动出现在 `/diary/` 列表）

你也可以在每篇里通过：

```liquid
{% assign g = site.data.galleries | where: "id", "featured" | first %}
{% include gallery.html gallery=g %}
```

来插入某个相册。

## 4) 本地预览（可选）

如果你本地装了 Ruby/Jekyll：

```bash
bundle exec jekyll serve
```

（不装也可以，直接 push 到 GitHub Pages 看效果。）
