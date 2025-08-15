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

//Кастомный селект
import SlimSelect from "slim-select";
const arrowSelect = document.querySelector(".custom-select__arrow");
const clearButtonSelect = document.querySelector(".custom-select__clear");

const select = new SlimSelect({
  select: "#my-select",
  settings: {
    placeholderText: "Регион",
    showSearch: false,
    showArrow: false,
    contentLocation: document.getElementById("custom-select"),
  },
  events: {
    afterClose: () => {
      arrowSelect.classList.remove("custom-select__arrow--active");
    },
    afterOpen: () => {
      arrowSelect.classList.add("custom-select__arrow--active");
    },
    afterChange: (newVal) => {
      if (newVal.length > 0 && newVal[0].value !== "") {
        clearButtonSelect.classList.add("custom-select__clear--active");
      } else {
        clearButtonSelect.classList.remove("custom-select__clear--active");
      }
    },
  },
});

clearButtonSelect.addEventListener("click", function (e) {
  e.stopPropagation();
  select.setSelected([]);
});
