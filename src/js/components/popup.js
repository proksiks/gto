const popupPrikaz = document.getElementById("popupPrikaz");
if(popupPrikaz){
  const popupPrikazClose = document.getElementById("popupPrikazClose");

  // Блоки для десктопа и мобилки
  const orderBlock = document.getElementById("orderBlock");
  const orderBlockMob = document.getElementById("orderBlockMob");

  // Функция открытия попапа на десктопе
  function openPopup() {
    popupPrikaz.style.display = "block";
  }

  // Закрытие попапа
  popupPrikazClose.addEventListener("click", () => {
    popupPrikaz.style.display = "none";
  });

  // Закрытие по клику вне контента
  window.addEventListener("click", (e) => {
    if (e.target === popupPrikaz) {
      popupPrikaz.style.display = "none";
    }
  });

  // Десктопный блок
  if (orderBlock) {
    orderBlock.addEventListener("click", () => {
      openPopup();
    });
  }

  // Мобильный блок
  if (orderBlockMob) {
    orderBlockMob.addEventListener("click", () => {
      if (window.innerWidth <= 768) {
        // На мобилке сразу открываем PDF в новой вкладке
        window.open("files-docs/order.pdf", "_blank");
      } else {
        // На десктопе открываем попап
        openPopup();
      }
    });
  }
}