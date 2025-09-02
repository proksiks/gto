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


const dropdownLk = document.getElementById('dropdown-lk');

if (dropdownLk) {
  const toggle = dropdownLk.querySelector('.dropdown-lk-toggle');
  const items = dropdownLk.querySelectorAll('.dropdown-lk-item');

  if (toggle) {
    toggle.addEventListener('click', () => {
      dropdownLk.classList.toggle('open');
    });
  }

  if (items && items.length > 0) {
    items.forEach(item => {
      item.addEventListener('click', e => {
        // Если это "фейковая" ссылка (#), отменяем переход
        if (item.getAttribute('href') === '#') {
          e.preventDefault();
        }

        items.forEach(i => i.classList.remove('active'));
        item.classList.add('active');
        dropdownLk.classList.remove('open');
      });
    });
  }

  // Закрытие при клике вне
  document.addEventListener('click', e => {
    if (!dropdownLk.contains(e.target)) {
      dropdownLk.classList.remove('open');
    }
  });
}