// MAINPAGE
document.addEventListener("DOMContentLoaded", () => {
  const mainElementsItems = document.querySelectorAll(".main-about__item");

  if (mainElementsItems.length) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = Array.from(mainElementsItems).indexOf(entry.target);
          setTimeout(() => {
            entry.target.classList.add("show");
          }, index * 200); // задержка для каждого элемента
          obs.unobserve(entry.target); // анимируем только один раз
        }
      });
    }, {
      threshold: 0.2,
    });

    mainElementsItems.forEach(item => observer.observe(item));
  }
});

const backToTop = document.querySelector(".footer__back-to-top");

if(backToTop){
  window.addEventListener("scroll", () => {
    if (window.scrollY > 1000) {
      backToTop.classList.add("footer__back-to-top-fixed");
    } else {
      backToTop.classList.remove("footer__back-to-top-fixed");
    }
  });
}