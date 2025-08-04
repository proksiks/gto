const stepButtonsEl = document.querySelectorAll(".standards-page__step");
const standardsHeadersEl = document.querySelectorAll(
  ".standards-page__accordion-header"
);
let headerHeight = document.querySelector(".header").offsetHeight;

stepButtonsEl.forEach((element) => {
  element.addEventListener("click", () => {
    stepButtonsEl.forEach((el) =>
      el.classList.remove("standards-page__step_active")
    );
    element.classList.add("standards-page__step_active");

    alert("При клике на кнопку будет подгружаться информация из адмнки и обновляться информация в правой колонке");
  });
});

standardsHeadersEl.forEach((header) => {
  header.addEventListener("click", (event) => {
    document
      .querySelectorAll(".standards-page__accordion-content")
      .forEach((c) => {
        c.style.maxHeight = null;
      });
    standardsHeadersEl.forEach((el) => {
      el.classList.remove("standards-page__accordion-header_active");
    });

    const content = header.nextElementSibling;
    const isOpen = content.style.maxHeight;
    header.classList.toggle("standards-page__accordion-header_active");

    if (!isOpen) {
      content.style.maxHeight = content.scrollHeight + "px";

      setTimeout(() => {
        window.scrollTo({
          top: event.target.offsetTop - headerHeight - 20,
          behavior: "smooth",
        });
      }, 301);
    } else {
      content.style.maxHeight = null;
    }
  });
});
