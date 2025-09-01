import flatpickr from "flatpickr";
import { Russian } from "flatpickr/dist/l10n/ru.js";

const dateInput = document.getElementById("date-input");
const selectArrow = document.querySelector(".select-menu__arrow");
const clearButton = document.querySelector(".select-menu__clear");

document.querySelectorAll(".js-calendar").forEach((element) => {
  const calendarWrapper = element.closest(".calendar-wrapper");

  if (!calendarWrapper) {
    return false;
  }

  const selectArrow = calendarWrapper.querySelector(".select-menu__arrow");
  const clearButton = calendarWrapper.querySelector(".select-menu__clear");

  const calendar = flatpickr(element, {
    positionElement: calendarWrapper,
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
        element.style.maxWidth = "275px";
        clearButton.classList.add("select-menu__clear--active");
      }
    },
  });

  if (clearButton) {
    clearButton.addEventListener("click", function () {
      calendar.clear();
      calendar.close();
      dateInput.style.maxWidth = "210px";
      clearButton.classList.remove("select-menu__clear--active");
    });
  }
});

if (dateInput) {
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
}

if (clearButton) {
  clearButton.addEventListener("click", function () {
    calendar.clear();
    calendar.close();
    dateInput.style.maxWidth = "210px";
    clearButton.classList.remove("select-menu__clear--active");
  });
}

//Кастомный селект
import SlimSelect from "slim-select";
const arrowSelect = document.querySelector(".custom-select__arrow");
const clearButtonSelect = document.querySelector(".custom-select__clear");

const searchArrowSelect = document.querySelector(".head-filter__select-arrow");
const searchClearButtonSelect = document.querySelector(
  ".head-filter__select-clear"
);

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

if (clearButtonSelect) {
  clearButtonSelect.addEventListener("click", function (e) {
    e.stopPropagation();
    select.setSelected([]);
  });
}

const selectSearch = new SlimSelect({
  select: "#search-select",
  settings: {
    placeholderText: "Регион",
    showSearch: false,
    showArrow: false,
  },
  events: {
    afterClose: () => {
      searchArrowSelect.classList.remove("head-filter__select-arrow--active");
    },
    afterOpen: () => {
      searchArrowSelect.classList.add("head-filter__select-arrow--active");
    },
    afterChange: (newVal) => {
      if (newVal.length > 0 && newVal[0].value !== "") {
        searchClearButtonSelect.classList.add(
          "head-filter__select-clear--active"
        );
      } else {
        searchClearButtonSelect.classList.remove(
          "head-filter__select-clear--active"
        );
      }
    },
  },
});

if (searchClearButtonSelect) {
  searchClearButtonSelect.addEventListener("click", function (e) {
    e.stopPropagation();
    selectSearch.setSelected([]);
  });
}
