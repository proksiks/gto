const headers = document.querySelectorAll(".accordion-header");

headers.forEach(header => {
  header.addEventListener("click", () => {
    const content = header.nextElementSibling;
    const isOpen = content.style.maxHeight;

    header.classList.toggle("accordion-header_active");

    document.querySelectorAll(".accordion-content").forEach(c => {
      c.style.maxHeight = null;
      c.style.paddingBottom = 0;
    });

    if (!isOpen) {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
});
