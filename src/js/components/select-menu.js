import flatpickr from "flatpickr";
import { Russian } from "flatpickr/dist/l10n/ru.js";

const dateInput = document.getElementById("date-input");
const selectArrow = document.querySelector(".select-menu__arrow");
const clearButton = document.querySelector(".select-menu__clear");

const calendar = flatpickr(dateInput, {
  positionElement: document.getElementById("calendar-wrapper"),
  locale: "ru",
  mode: "range",
  dateFormat: "d.m.Y",

  onOpen: () => {
    selectArrow.classList.add("select-menu__arrow--active");
  },
  onClose: () => {
    selectArrow.classList.remove("select-menu__arrow--active");
  },
  onDayCreate: function (dObj, dStr, fp, dayElem) {
    // Проверяем, является ли день выходным (0 - воскресенье, 6 - суббота)
    const isWeekend =
      dayElem.dateObj.getDay() === 0 || dayElem.dateObj.getDay() === 6;

    // Проверяем, выбран ли день
    const isSelected = dayElem.classList.contains("selected");

    if (isWeekend) {
      if (isSelected) {
        dayElem.style.color = "white"; // Выбранные выходные - белый текст
      } else {
        dayElem.style.color = "red"; // Невыбранные выходные - красный текст
      }
    }
  },
  onChange: function (selectedDates, dateStr) {
    if (selectedDates.length > 1) {
      dateInput.style.maxWidth = "275px";
      clearButton.classList.add("select-menu__clear--active");
    }
  },
});

clearButton.addEventListener("click", function () {
  calendar.clear();
  calendar.close();
  dateInput.style.maxWidth = "210px";
  clearButton.classList.remove("select-menu__clear--active");
});
