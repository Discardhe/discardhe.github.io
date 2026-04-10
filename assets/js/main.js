// PhotoSwipe 初始化（灯箱相册）
// 说明：页面上只要有 .js-pswp-gallery 容器，内部 a 标签指向大图即可。
// 建议为 a 标签补充 data-pswp-width / data-pswp-height（示例见 _data/galleries.yml）。
document.addEventListener("DOMContentLoaded", async () => {
  const galleries = document.querySelectorAll(".js-pswp-gallery");
  if (!galleries.length) return;

  // 动态 import（来自 CDN）
  const PhotoSwipeLightbox = (await import("https://unpkg.com/photoswipe@5/dist/photoswipe-lightbox.esm.min.js")).default;

  galleries.forEach((el) => {
    const lightbox = new PhotoSwipeLightbox({
      gallery: el,
      children: "a",
      pswpModule: () => import("https://unpkg.com/photoswipe@5/dist/photoswipe.esm.min.js"),
      bgOpacity: 0.92
    });
    lightbox.init();
  });
});

