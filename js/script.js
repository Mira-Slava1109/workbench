
// Плавна поява контента при завантажені сторінки
document.addEventListener("DOMContentLoaded", function () {
  document.addEventListener("click", function (e) {
    const targetElement = e.target;
    if (targetElement.closest(".icon-menu")) {
      document.documentElement.classList.toggle("menu-open");
    }
  });
})