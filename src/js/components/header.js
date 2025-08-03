const headerDesctopEl = document.querySelector(".header_desktop");
const headerBurgrerEl = document.querySelector(".header-mobile__burger");
const headerMenuEl = document.querySelector(".header-mobile__menu");
const headerLinksEl = document.querySelectorAll(".header__menu-link");
const headerMobileLinkEl = document.querySelector(".header-mobile__menu-link");

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

if (headerLinksEl.length > 0) {
  headerLinksEl.forEach((link) => {
    window.location.href.includes(link.href)
      ? link.classList.add("header__menu-link_active")
      : link.classList.remove("header__menu-link_active");

    link.addEventListener("click", () => {
      headerMenuEl.classList.remove("header-mobile__menu_active");
      headerBurgrerEl.classList.remove("header-mobile__burger_active");
      document.body.classList.remove("dis-scroll");
    });
  });
}

if (headerMobileLinkEl.length > 0) {
  headerMobileLinkEl.forEach((link) => {
    window.location.href.includes(link.href)
      ? link.classList.add("header-mobile__menu-link_active")
      : link.classList.remove("header-mobile__menu-link_active");

    link.addEventListener("click", () => {
      headerMenuEl.classList.remove("header-mobile__menu_active");
      headerBurgrerEl.classList.remove("header-mobile__burger_active");
      document.body.classList.remove("dis-scroll");
    });
  });
}
