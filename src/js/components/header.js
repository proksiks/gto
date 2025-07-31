const headerDesctopEl = document.querySelector(".header_desktop");
const headerBurgrerEl = document.querySelector(".header-mobile__burger");
const headerMenuEl = document.querySelector(".header-mobile__menu");

let lastPosition = 0;
let limitPosition = 0;
let scrolled = false;

window.addEventListener("scroll", (event) => {
  if (lastPosition < window.scrollY && limitPosition < window.scrollY) {
    headerDesctopEl.classList.add("header_slide");
  }
  if (lastPosition > window.scrollY) {
    headerDesctopEl.classList.remove("header_slide");
  }
  lastPosition = window.scrollY;
});

headerBurgrerEl.addEventListener("click", (event) => {
  document.body.classList.toggle("dis-scroll");
  headerBurgrerEl.classList.toggle("header-mobile__burger_active");
  headerMenuEl.classList.toggle("header-mobile__menu_active");
});
