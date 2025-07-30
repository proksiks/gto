const headerEl = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    headerEl.classList.add("header_slide");
  } else {
    headerEl.classList.remove("header_slide");
  }
});
