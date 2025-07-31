const headerEl = document.querySelector(".header_desktop");
const headerBurgrerEl = document.querySelector(".header-mobile__burger");
const headerMenuEl = document.querySelector(".header-mobile__menu");

window.addEventListener("scroll", () => {
  if (window.scrollY > 90) {
    headerEl.classList.add("header_slide");
  } else {
    headerEl.classList.remove("header_slide");
  }
});

headerBurgrerEl.addEventListener("click", (event) => {
  document.body.classList.toggle("dis-scroll");
  headerBurgrerEl.classList.toggle("header-mobile__burger_active");
  headerMenuEl.classList.toggle("header-mobile__menu_active");
});
