/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/flatpickr/dist/esm/index.js":
/*!**************************************************!*\
  !*** ./node_modules/flatpickr/dist/esm/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _types_options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types/options */ "./node_modules/flatpickr/dist/esm/types/options.js");
/* harmony import */ var _l10n_default__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./l10n/default */ "./node_modules/flatpickr/dist/esm/l10n/default.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./node_modules/flatpickr/dist/esm/utils/index.js");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/dom */ "./node_modules/flatpickr/dist/esm/utils/dom.js");
/* harmony import */ var _utils_dates__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/dates */ "./node_modules/flatpickr/dist/esm/utils/dates.js");
/* harmony import */ var _utils_formatting__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/formatting */ "./node_modules/flatpickr/dist/esm/utils/formatting.js");
/* harmony import */ var _utils_polyfills__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/polyfills */ "./node_modules/flatpickr/dist/esm/utils/polyfills.js");
/* harmony import */ var _utils_polyfills__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_utils_polyfills__WEBPACK_IMPORTED_MODULE_6__);
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (undefined && undefined.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};







var DEBOUNCED_CHANGE_MS = 300;
function FlatpickrInstance(element, instanceConfig) {
    var self = {
        config: __assign(__assign({}, _types_options__WEBPACK_IMPORTED_MODULE_0__.defaults), flatpickr.defaultConfig),
        l10n: _l10n_default__WEBPACK_IMPORTED_MODULE_1__["default"],
    };
    self.parseDate = (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.createDateParser)({ config: self.config, l10n: self.l10n });
    self._handlers = [];
    self.pluginElements = [];
    self.loadedPlugins = [];
    self._bind = bind;
    self._setHoursFromDate = setHoursFromDate;
    self._positionCalendar = positionCalendar;
    self.changeMonth = changeMonth;
    self.changeYear = changeYear;
    self.clear = clear;
    self.close = close;
    self.onMouseOver = onMouseOver;
    self._createElement = _utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement;
    self.createDay = createDay;
    self.destroy = destroy;
    self.isEnabled = isEnabled;
    self.jumpToDate = jumpToDate;
    self.updateValue = updateValue;
    self.open = open;
    self.redraw = redraw;
    self.set = set;
    self.setDate = setDate;
    self.toggle = toggle;
    function setupHelperFunctions() {
        self.utils = {
            getDaysInMonth: function (month, yr) {
                if (month === void 0) { month = self.currentMonth; }
                if (yr === void 0) { yr = self.currentYear; }
                if (month === 1 && ((yr % 4 === 0 && yr % 100 !== 0) || yr % 400 === 0))
                    return 29;
                return self.l10n.daysInMonth[month];
            },
        };
    }
    function init() {
        self.element = self.input = element;
        self.isOpen = false;
        parseConfig();
        setupLocale();
        setupInputs();
        setupDates();
        setupHelperFunctions();
        if (!self.isMobile)
            build();
        bindEvents();
        if (self.selectedDates.length || self.config.noCalendar) {
            if (self.config.enableTime) {
                setHoursFromDate(self.config.noCalendar ? self.latestSelectedDateObj : undefined);
            }
            updateValue(false);
        }
        setCalendarWidth();
        var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
        if (!self.isMobile && isSafari) {
            positionCalendar();
        }
        triggerEvent("onReady");
    }
    function getClosestActiveElement() {
        var _a;
        return (((_a = self.calendarContainer) === null || _a === void 0 ? void 0 : _a.getRootNode())
            .activeElement || document.activeElement);
    }
    function bindToInstance(fn) {
        return fn.bind(self);
    }
    function setCalendarWidth() {
        var config = self.config;
        if (config.weekNumbers === false && config.showMonths === 1) {
            return;
        }
        else if (config.noCalendar !== true) {
            window.requestAnimationFrame(function () {
                if (self.calendarContainer !== undefined) {
                    self.calendarContainer.style.visibility = "hidden";
                    self.calendarContainer.style.display = "block";
                }
                if (self.daysContainer !== undefined) {
                    var daysWidth = (self.days.offsetWidth + 1) * config.showMonths;
                    self.daysContainer.style.width = daysWidth + "px";
                    self.calendarContainer.style.width =
                        daysWidth +
                            (self.weekWrapper !== undefined
                                ? self.weekWrapper.offsetWidth
                                : 0) +
                            "px";
                    self.calendarContainer.style.removeProperty("visibility");
                    self.calendarContainer.style.removeProperty("display");
                }
            });
        }
    }
    function updateTime(e) {
        if (self.selectedDates.length === 0) {
            var defaultDate = self.config.minDate === undefined ||
                (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.compareDates)(new Date(), self.config.minDate) >= 0
                ? new Date()
                : new Date(self.config.minDate.getTime());
            var defaults = (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.getDefaultHours)(self.config);
            defaultDate.setHours(defaults.hours, defaults.minutes, defaults.seconds, defaultDate.getMilliseconds());
            self.selectedDates = [defaultDate];
            self.latestSelectedDateObj = defaultDate;
        }
        if (e !== undefined && e.type !== "blur") {
            timeWrapper(e);
        }
        var prevValue = self._input.value;
        setHoursFromInputs();
        updateValue();
        if (self._input.value !== prevValue) {
            self._debouncedChange();
        }
    }
    function ampm2military(hour, amPM) {
        return (hour % 12) + 12 * (0,_utils__WEBPACK_IMPORTED_MODULE_2__.int)(amPM === self.l10n.amPM[1]);
    }
    function military2ampm(hour) {
        switch (hour % 24) {
            case 0:
            case 12:
                return 12;
            default:
                return hour % 12;
        }
    }
    function setHoursFromInputs() {
        if (self.hourElement === undefined || self.minuteElement === undefined)
            return;
        var hours = (parseInt(self.hourElement.value.slice(-2), 10) || 0) % 24, minutes = (parseInt(self.minuteElement.value, 10) || 0) % 60, seconds = self.secondElement !== undefined
            ? (parseInt(self.secondElement.value, 10) || 0) % 60
            : 0;
        if (self.amPM !== undefined) {
            hours = ampm2military(hours, self.amPM.textContent);
        }
        var limitMinHours = self.config.minTime !== undefined ||
            (self.config.minDate &&
                self.minDateHasTime &&
                self.latestSelectedDateObj &&
                (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.compareDates)(self.latestSelectedDateObj, self.config.minDate, true) ===
                    0);
        var limitMaxHours = self.config.maxTime !== undefined ||
            (self.config.maxDate &&
                self.maxDateHasTime &&
                self.latestSelectedDateObj &&
                (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.compareDates)(self.latestSelectedDateObj, self.config.maxDate, true) ===
                    0);
        if (self.config.maxTime !== undefined &&
            self.config.minTime !== undefined &&
            self.config.minTime > self.config.maxTime) {
            var minBound = (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.calculateSecondsSinceMidnight)(self.config.minTime.getHours(), self.config.minTime.getMinutes(), self.config.minTime.getSeconds());
            var maxBound = (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.calculateSecondsSinceMidnight)(self.config.maxTime.getHours(), self.config.maxTime.getMinutes(), self.config.maxTime.getSeconds());
            var currentTime = (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.calculateSecondsSinceMidnight)(hours, minutes, seconds);
            if (currentTime > maxBound && currentTime < minBound) {
                var result = (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.parseSeconds)(minBound);
                hours = result[0];
                minutes = result[1];
                seconds = result[2];
            }
        }
        else {
            if (limitMaxHours) {
                var maxTime = self.config.maxTime !== undefined
                    ? self.config.maxTime
                    : self.config.maxDate;
                hours = Math.min(hours, maxTime.getHours());
                if (hours === maxTime.getHours())
                    minutes = Math.min(minutes, maxTime.getMinutes());
                if (minutes === maxTime.getMinutes())
                    seconds = Math.min(seconds, maxTime.getSeconds());
            }
            if (limitMinHours) {
                var minTime = self.config.minTime !== undefined
                    ? self.config.minTime
                    : self.config.minDate;
                hours = Math.max(hours, minTime.getHours());
                if (hours === minTime.getHours() && minutes < minTime.getMinutes())
                    minutes = minTime.getMinutes();
                if (minutes === minTime.getMinutes())
                    seconds = Math.max(seconds, minTime.getSeconds());
            }
        }
        setHours(hours, minutes, seconds);
    }
    function setHoursFromDate(dateObj) {
        var date = dateObj || self.latestSelectedDateObj;
        if (date && date instanceof Date) {
            setHours(date.getHours(), date.getMinutes(), date.getSeconds());
        }
    }
    function setHours(hours, minutes, seconds) {
        if (self.latestSelectedDateObj !== undefined) {
            self.latestSelectedDateObj.setHours(hours % 24, minutes, seconds || 0, 0);
        }
        if (!self.hourElement || !self.minuteElement || self.isMobile)
            return;
        self.hourElement.value = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.pad)(!self.config.time_24hr
            ? ((12 + hours) % 12) + 12 * (0,_utils__WEBPACK_IMPORTED_MODULE_2__.int)(hours % 12 === 0)
            : hours);
        self.minuteElement.value = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.pad)(minutes);
        if (self.amPM !== undefined)
            self.amPM.textContent = self.l10n.amPM[(0,_utils__WEBPACK_IMPORTED_MODULE_2__.int)(hours >= 12)];
        if (self.secondElement !== undefined)
            self.secondElement.value = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.pad)(seconds);
    }
    function onYearInput(event) {
        var eventTarget = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.getEventTarget)(event);
        var year = parseInt(eventTarget.value) + (event.delta || 0);
        if (year / 1000 > 1 ||
            (event.key === "Enter" && !/[^\d]/.test(year.toString()))) {
            changeYear(year);
        }
    }
    function bind(element, event, handler, options) {
        if (event instanceof Array)
            return event.forEach(function (ev) { return bind(element, ev, handler, options); });
        if (element instanceof Array)
            return element.forEach(function (el) { return bind(el, event, handler, options); });
        element.addEventListener(event, handler, options);
        self._handlers.push({
            remove: function () { return element.removeEventListener(event, handler, options); },
        });
    }
    function triggerChange() {
        triggerEvent("onChange");
    }
    function bindEvents() {
        if (self.config.wrap) {
            ["open", "close", "toggle", "clear"].forEach(function (evt) {
                Array.prototype.forEach.call(self.element.querySelectorAll("[data-" + evt + "]"), function (el) {
                    return bind(el, "click", self[evt]);
                });
            });
        }
        if (self.isMobile) {
            setupMobile();
            return;
        }
        var debouncedResize = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.debounce)(onResize, 50);
        self._debouncedChange = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.debounce)(triggerChange, DEBOUNCED_CHANGE_MS);
        if (self.daysContainer && !/iPhone|iPad|iPod/i.test(navigator.userAgent))
            bind(self.daysContainer, "mouseover", function (e) {
                if (self.config.mode === "range")
                    onMouseOver((0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.getEventTarget)(e));
            });
        bind(self._input, "keydown", onKeyDown);
        if (self.calendarContainer !== undefined) {
            bind(self.calendarContainer, "keydown", onKeyDown);
        }
        if (!self.config.inline && !self.config.static)
            bind(window, "resize", debouncedResize);
        if (window.ontouchstart !== undefined)
            bind(window.document, "touchstart", documentClick);
        else
            bind(window.document, "mousedown", documentClick);
        bind(window.document, "focus", documentClick, { capture: true });
        if (self.config.clickOpens === true) {
            bind(self._input, "focus", self.open);
            bind(self._input, "click", self.open);
        }
        if (self.daysContainer !== undefined) {
            bind(self.monthNav, "click", onMonthNavClick);
            bind(self.monthNav, ["keyup", "increment"], onYearInput);
            bind(self.daysContainer, "click", selectDate);
        }
        if (self.timeContainer !== undefined &&
            self.minuteElement !== undefined &&
            self.hourElement !== undefined) {
            var selText = function (e) {
                return (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.getEventTarget)(e).select();
            };
            bind(self.timeContainer, ["increment"], updateTime);
            bind(self.timeContainer, "blur", updateTime, { capture: true });
            bind(self.timeContainer, "click", timeIncrement);
            bind([self.hourElement, self.minuteElement], ["focus", "click"], selText);
            if (self.secondElement !== undefined)
                bind(self.secondElement, "focus", function () { return self.secondElement && self.secondElement.select(); });
            if (self.amPM !== undefined) {
                bind(self.amPM, "click", function (e) {
                    updateTime(e);
                });
            }
        }
        if (self.config.allowInput) {
            bind(self._input, "blur", onBlur);
        }
    }
    function jumpToDate(jumpDate, triggerChange) {
        var jumpTo = jumpDate !== undefined
            ? self.parseDate(jumpDate)
            : self.latestSelectedDateObj ||
                (self.config.minDate && self.config.minDate > self.now
                    ? self.config.minDate
                    : self.config.maxDate && self.config.maxDate < self.now
                        ? self.config.maxDate
                        : self.now);
        var oldYear = self.currentYear;
        var oldMonth = self.currentMonth;
        try {
            if (jumpTo !== undefined) {
                self.currentYear = jumpTo.getFullYear();
                self.currentMonth = jumpTo.getMonth();
            }
        }
        catch (e) {
            e.message = "Invalid date supplied: " + jumpTo;
            self.config.errorHandler(e);
        }
        if (triggerChange && self.currentYear !== oldYear) {
            triggerEvent("onYearChange");
            buildMonthSwitch();
        }
        if (triggerChange &&
            (self.currentYear !== oldYear || self.currentMonth !== oldMonth)) {
            triggerEvent("onMonthChange");
        }
        self.redraw();
    }
    function timeIncrement(e) {
        var eventTarget = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.getEventTarget)(e);
        if (~eventTarget.className.indexOf("arrow"))
            incrementNumInput(e, eventTarget.classList.contains("arrowUp") ? 1 : -1);
    }
    function incrementNumInput(e, delta, inputElem) {
        var target = e && (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.getEventTarget)(e);
        var input = inputElem ||
            (target && target.parentNode && target.parentNode.firstChild);
        var event = createEvent("increment");
        event.delta = delta;
        input && input.dispatchEvent(event);
    }
    function build() {
        var fragment = window.document.createDocumentFragment();
        self.calendarContainer = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("div", "flatpickr-calendar");
        self.calendarContainer.tabIndex = -1;
        if (!self.config.noCalendar) {
            fragment.appendChild(buildMonthNav());
            self.innerContainer = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("div", "flatpickr-innerContainer");
            if (self.config.weekNumbers) {
                var _a = buildWeeks(), weekWrapper = _a.weekWrapper, weekNumbers = _a.weekNumbers;
                self.innerContainer.appendChild(weekWrapper);
                self.weekNumbers = weekNumbers;
                self.weekWrapper = weekWrapper;
            }
            self.rContainer = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("div", "flatpickr-rContainer");
            self.rContainer.appendChild(buildWeekdays());
            if (!self.daysContainer) {
                self.daysContainer = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("div", "flatpickr-days");
                self.daysContainer.tabIndex = -1;
            }
            buildDays();
            self.rContainer.appendChild(self.daysContainer);
            self.innerContainer.appendChild(self.rContainer);
            fragment.appendChild(self.innerContainer);
        }
        if (self.config.enableTime) {
            fragment.appendChild(buildTime());
        }
        (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.toggleClass)(self.calendarContainer, "rangeMode", self.config.mode === "range");
        (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.toggleClass)(self.calendarContainer, "animate", self.config.animate === true);
        (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.toggleClass)(self.calendarContainer, "multiMonth", self.config.showMonths > 1);
        self.calendarContainer.appendChild(fragment);
        var customAppend = self.config.appendTo !== undefined &&
            self.config.appendTo.nodeType !== undefined;
        if (self.config.inline || self.config.static) {
            self.calendarContainer.classList.add(self.config.inline ? "inline" : "static");
            if (self.config.inline) {
                if (!customAppend && self.element.parentNode)
                    self.element.parentNode.insertBefore(self.calendarContainer, self._input.nextSibling);
                else if (self.config.appendTo !== undefined)
                    self.config.appendTo.appendChild(self.calendarContainer);
            }
            if (self.config.static) {
                var wrapper = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("div", "flatpickr-wrapper");
                if (self.element.parentNode)
                    self.element.parentNode.insertBefore(wrapper, self.element);
                wrapper.appendChild(self.element);
                if (self.altInput)
                    wrapper.appendChild(self.altInput);
                wrapper.appendChild(self.calendarContainer);
            }
        }
        if (!self.config.static && !self.config.inline)
            (self.config.appendTo !== undefined
                ? self.config.appendTo
                : window.document.body).appendChild(self.calendarContainer);
    }
    function createDay(className, date, _dayNumber, i) {
        var dateIsEnabled = isEnabled(date, true), dayElement = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("span", className, date.getDate().toString());
        dayElement.dateObj = date;
        dayElement.$i = i;
        dayElement.setAttribute("aria-label", self.formatDate(date, self.config.ariaDateFormat));
        if (className.indexOf("hidden") === -1 &&
            (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.compareDates)(date, self.now) === 0) {
            self.todayDateElem = dayElement;
            dayElement.classList.add("today");
            dayElement.setAttribute("aria-current", "date");
        }
        if (dateIsEnabled) {
            dayElement.tabIndex = -1;
            if (isDateSelected(date)) {
                dayElement.classList.add("selected");
                self.selectedDateElem = dayElement;
                if (self.config.mode === "range") {
                    (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.toggleClass)(dayElement, "startRange", self.selectedDates[0] &&
                        (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.compareDates)(date, self.selectedDates[0], true) === 0);
                    (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.toggleClass)(dayElement, "endRange", self.selectedDates[1] &&
                        (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.compareDates)(date, self.selectedDates[1], true) === 0);
                    if (className === "nextMonthDay")
                        dayElement.classList.add("inRange");
                }
            }
        }
        else {
            dayElement.classList.add("flatpickr-disabled");
        }
        if (self.config.mode === "range") {
            if (isDateInRange(date) && !isDateSelected(date))
                dayElement.classList.add("inRange");
        }
        if (self.weekNumbers &&
            self.config.showMonths === 1 &&
            className !== "prevMonthDay" &&
            i % 7 === 6) {
            self.weekNumbers.insertAdjacentHTML("beforeend", "<span class='flatpickr-day'>" + self.config.getWeek(date) + "</span>");
        }
        triggerEvent("onDayCreate", dayElement);
        return dayElement;
    }
    function focusOnDayElem(targetNode) {
        targetNode.focus();
        if (self.config.mode === "range")
            onMouseOver(targetNode);
    }
    function getFirstAvailableDay(delta) {
        var startMonth = delta > 0 ? 0 : self.config.showMonths - 1;
        var endMonth = delta > 0 ? self.config.showMonths : -1;
        for (var m = startMonth; m != endMonth; m += delta) {
            var month = self.daysContainer.children[m];
            var startIndex = delta > 0 ? 0 : month.children.length - 1;
            var endIndex = delta > 0 ? month.children.length : -1;
            for (var i = startIndex; i != endIndex; i += delta) {
                var c = month.children[i];
                if (c.className.indexOf("hidden") === -1 && isEnabled(c.dateObj))
                    return c;
            }
        }
        return undefined;
    }
    function getNextAvailableDay(current, delta) {
        var givenMonth = current.className.indexOf("Month") === -1
            ? current.dateObj.getMonth()
            : self.currentMonth;
        var endMonth = delta > 0 ? self.config.showMonths : -1;
        var loopDelta = delta > 0 ? 1 : -1;
        for (var m = givenMonth - self.currentMonth; m != endMonth; m += loopDelta) {
            var month = self.daysContainer.children[m];
            var startIndex = givenMonth - self.currentMonth === m
                ? current.$i + delta
                : delta < 0
                    ? month.children.length - 1
                    : 0;
            var numMonthDays = month.children.length;
            for (var i = startIndex; i >= 0 && i < numMonthDays && i != (delta > 0 ? numMonthDays : -1); i += loopDelta) {
                var c = month.children[i];
                if (c.className.indexOf("hidden") === -1 &&
                    isEnabled(c.dateObj) &&
                    Math.abs(current.$i - i) >= Math.abs(delta))
                    return focusOnDayElem(c);
            }
        }
        self.changeMonth(loopDelta);
        focusOnDay(getFirstAvailableDay(loopDelta), 0);
        return undefined;
    }
    function focusOnDay(current, offset) {
        var activeElement = getClosestActiveElement();
        var dayFocused = isInView(activeElement || document.body);
        var startElem = current !== undefined
            ? current
            : dayFocused
                ? activeElement
                : self.selectedDateElem !== undefined && isInView(self.selectedDateElem)
                    ? self.selectedDateElem
                    : self.todayDateElem !== undefined && isInView(self.todayDateElem)
                        ? self.todayDateElem
                        : getFirstAvailableDay(offset > 0 ? 1 : -1);
        if (startElem === undefined) {
            self._input.focus();
        }
        else if (!dayFocused) {
            focusOnDayElem(startElem);
        }
        else {
            getNextAvailableDay(startElem, offset);
        }
    }
    function buildMonthDays(year, month) {
        var firstOfMonth = (new Date(year, month, 1).getDay() - self.l10n.firstDayOfWeek + 7) % 7;
        var prevMonthDays = self.utils.getDaysInMonth((month - 1 + 12) % 12, year);
        var daysInMonth = self.utils.getDaysInMonth(month, year), days = window.document.createDocumentFragment(), isMultiMonth = self.config.showMonths > 1, prevMonthDayClass = isMultiMonth ? "prevMonthDay hidden" : "prevMonthDay", nextMonthDayClass = isMultiMonth ? "nextMonthDay hidden" : "nextMonthDay";
        var dayNumber = prevMonthDays + 1 - firstOfMonth, dayIndex = 0;
        for (; dayNumber <= prevMonthDays; dayNumber++, dayIndex++) {
            days.appendChild(createDay("flatpickr-day " + prevMonthDayClass, new Date(year, month - 1, dayNumber), dayNumber, dayIndex));
        }
        for (dayNumber = 1; dayNumber <= daysInMonth; dayNumber++, dayIndex++) {
            days.appendChild(createDay("flatpickr-day", new Date(year, month, dayNumber), dayNumber, dayIndex));
        }
        for (var dayNum = daysInMonth + 1; dayNum <= 42 - firstOfMonth &&
            (self.config.showMonths === 1 || dayIndex % 7 !== 0); dayNum++, dayIndex++) {
            days.appendChild(createDay("flatpickr-day " + nextMonthDayClass, new Date(year, month + 1, dayNum % daysInMonth), dayNum, dayIndex));
        }
        var dayContainer = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("div", "dayContainer");
        dayContainer.appendChild(days);
        return dayContainer;
    }
    function buildDays() {
        if (self.daysContainer === undefined) {
            return;
        }
        (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.clearNode)(self.daysContainer);
        if (self.weekNumbers)
            (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.clearNode)(self.weekNumbers);
        var frag = document.createDocumentFragment();
        for (var i = 0; i < self.config.showMonths; i++) {
            var d = new Date(self.currentYear, self.currentMonth, 1);
            d.setMonth(self.currentMonth + i);
            frag.appendChild(buildMonthDays(d.getFullYear(), d.getMonth()));
        }
        self.daysContainer.appendChild(frag);
        self.days = self.daysContainer.firstChild;
        if (self.config.mode === "range" && self.selectedDates.length === 1) {
            onMouseOver();
        }
    }
    function buildMonthSwitch() {
        if (self.config.showMonths > 1 ||
            self.config.monthSelectorType !== "dropdown")
            return;
        var shouldBuildMonth = function (month) {
            if (self.config.minDate !== undefined &&
                self.currentYear === self.config.minDate.getFullYear() &&
                month < self.config.minDate.getMonth()) {
                return false;
            }
            return !(self.config.maxDate !== undefined &&
                self.currentYear === self.config.maxDate.getFullYear() &&
                month > self.config.maxDate.getMonth());
        };
        self.monthsDropdownContainer.tabIndex = -1;
        self.monthsDropdownContainer.innerHTML = "";
        for (var i = 0; i < 12; i++) {
            if (!shouldBuildMonth(i))
                continue;
            var month = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("option", "flatpickr-monthDropdown-month");
            month.value = new Date(self.currentYear, i).getMonth().toString();
            month.textContent = (0,_utils_formatting__WEBPACK_IMPORTED_MODULE_5__.monthToStr)(i, self.config.shorthandCurrentMonth, self.l10n);
            month.tabIndex = -1;
            if (self.currentMonth === i) {
                month.selected = true;
            }
            self.monthsDropdownContainer.appendChild(month);
        }
    }
    function buildMonth() {
        var container = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("div", "flatpickr-month");
        var monthNavFragment = window.document.createDocumentFragment();
        var monthElement;
        if (self.config.showMonths > 1 ||
            self.config.monthSelectorType === "static") {
            monthElement = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("span", "cur-month");
        }
        else {
            self.monthsDropdownContainer = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("select", "flatpickr-monthDropdown-months");
            self.monthsDropdownContainer.setAttribute("aria-label", self.l10n.monthAriaLabel);
            bind(self.monthsDropdownContainer, "change", function (e) {
                var target = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.getEventTarget)(e);
                var selectedMonth = parseInt(target.value, 10);
                self.changeMonth(selectedMonth - self.currentMonth);
                triggerEvent("onMonthChange");
            });
            buildMonthSwitch();
            monthElement = self.monthsDropdownContainer;
        }
        var yearInput = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createNumberInput)("cur-year", { tabindex: "-1" });
        var yearElement = yearInput.getElementsByTagName("input")[0];
        yearElement.setAttribute("aria-label", self.l10n.yearAriaLabel);
        if (self.config.minDate) {
            yearElement.setAttribute("min", self.config.minDate.getFullYear().toString());
        }
        if (self.config.maxDate) {
            yearElement.setAttribute("max", self.config.maxDate.getFullYear().toString());
            yearElement.disabled =
                !!self.config.minDate &&
                    self.config.minDate.getFullYear() === self.config.maxDate.getFullYear();
        }
        var currentMonth = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("div", "flatpickr-current-month");
        currentMonth.appendChild(monthElement);
        currentMonth.appendChild(yearInput);
        monthNavFragment.appendChild(currentMonth);
        container.appendChild(monthNavFragment);
        return {
            container: container,
            yearElement: yearElement,
            monthElement: monthElement,
        };
    }
    function buildMonths() {
        (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.clearNode)(self.monthNav);
        self.monthNav.appendChild(self.prevMonthNav);
        if (self.config.showMonths) {
            self.yearElements = [];
            self.monthElements = [];
        }
        for (var m = self.config.showMonths; m--;) {
            var month = buildMonth();
            self.yearElements.push(month.yearElement);
            self.monthElements.push(month.monthElement);
            self.monthNav.appendChild(month.container);
        }
        self.monthNav.appendChild(self.nextMonthNav);
    }
    function buildMonthNav() {
        self.monthNav = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("div", "flatpickr-months");
        self.yearElements = [];
        self.monthElements = [];
        self.prevMonthNav = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("span", "flatpickr-prev-month");
        self.prevMonthNav.innerHTML = self.config.prevArrow;
        self.nextMonthNav = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("span", "flatpickr-next-month");
        self.nextMonthNav.innerHTML = self.config.nextArrow;
        buildMonths();
        Object.defineProperty(self, "_hidePrevMonthArrow", {
            get: function () { return self.__hidePrevMonthArrow; },
            set: function (bool) {
                if (self.__hidePrevMonthArrow !== bool) {
                    (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.toggleClass)(self.prevMonthNav, "flatpickr-disabled", bool);
                    self.__hidePrevMonthArrow = bool;
                }
            },
        });
        Object.defineProperty(self, "_hideNextMonthArrow", {
            get: function () { return self.__hideNextMonthArrow; },
            set: function (bool) {
                if (self.__hideNextMonthArrow !== bool) {
                    (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.toggleClass)(self.nextMonthNav, "flatpickr-disabled", bool);
                    self.__hideNextMonthArrow = bool;
                }
            },
        });
        self.currentYearElement = self.yearElements[0];
        updateNavigationCurrentMonth();
        return self.monthNav;
    }
    function buildTime() {
        self.calendarContainer.classList.add("hasTime");
        if (self.config.noCalendar)
            self.calendarContainer.classList.add("noCalendar");
        var defaults = (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.getDefaultHours)(self.config);
        self.timeContainer = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("div", "flatpickr-time");
        self.timeContainer.tabIndex = -1;
        var separator = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("span", "flatpickr-time-separator", ":");
        var hourInput = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createNumberInput)("flatpickr-hour", {
            "aria-label": self.l10n.hourAriaLabel,
        });
        self.hourElement = hourInput.getElementsByTagName("input")[0];
        var minuteInput = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createNumberInput)("flatpickr-minute", {
            "aria-label": self.l10n.minuteAriaLabel,
        });
        self.minuteElement = minuteInput.getElementsByTagName("input")[0];
        self.hourElement.tabIndex = self.minuteElement.tabIndex = -1;
        self.hourElement.value = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.pad)(self.latestSelectedDateObj
            ? self.latestSelectedDateObj.getHours()
            : self.config.time_24hr
                ? defaults.hours
                : military2ampm(defaults.hours));
        self.minuteElement.value = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.pad)(self.latestSelectedDateObj
            ? self.latestSelectedDateObj.getMinutes()
            : defaults.minutes);
        self.hourElement.setAttribute("step", self.config.hourIncrement.toString());
        self.minuteElement.setAttribute("step", self.config.minuteIncrement.toString());
        self.hourElement.setAttribute("min", self.config.time_24hr ? "0" : "1");
        self.hourElement.setAttribute("max", self.config.time_24hr ? "23" : "12");
        self.hourElement.setAttribute("maxlength", "2");
        self.minuteElement.setAttribute("min", "0");
        self.minuteElement.setAttribute("max", "59");
        self.minuteElement.setAttribute("maxlength", "2");
        self.timeContainer.appendChild(hourInput);
        self.timeContainer.appendChild(separator);
        self.timeContainer.appendChild(minuteInput);
        if (self.config.time_24hr)
            self.timeContainer.classList.add("time24hr");
        if (self.config.enableSeconds) {
            self.timeContainer.classList.add("hasSeconds");
            var secondInput = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createNumberInput)("flatpickr-second");
            self.secondElement = secondInput.getElementsByTagName("input")[0];
            self.secondElement.value = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.pad)(self.latestSelectedDateObj
                ? self.latestSelectedDateObj.getSeconds()
                : defaults.seconds);
            self.secondElement.setAttribute("step", self.minuteElement.getAttribute("step"));
            self.secondElement.setAttribute("min", "0");
            self.secondElement.setAttribute("max", "59");
            self.secondElement.setAttribute("maxlength", "2");
            self.timeContainer.appendChild((0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("span", "flatpickr-time-separator", ":"));
            self.timeContainer.appendChild(secondInput);
        }
        if (!self.config.time_24hr) {
            self.amPM = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("span", "flatpickr-am-pm", self.l10n.amPM[(0,_utils__WEBPACK_IMPORTED_MODULE_2__.int)((self.latestSelectedDateObj
                ? self.hourElement.value
                : self.config.defaultHour) > 11)]);
            self.amPM.title = self.l10n.toggleTitle;
            self.amPM.tabIndex = -1;
            self.timeContainer.appendChild(self.amPM);
        }
        return self.timeContainer;
    }
    function buildWeekdays() {
        if (!self.weekdayContainer)
            self.weekdayContainer = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("div", "flatpickr-weekdays");
        else
            (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.clearNode)(self.weekdayContainer);
        for (var i = self.config.showMonths; i--;) {
            var container = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("div", "flatpickr-weekdaycontainer");
            self.weekdayContainer.appendChild(container);
        }
        updateWeekdays();
        return self.weekdayContainer;
    }
    function updateWeekdays() {
        if (!self.weekdayContainer) {
            return;
        }
        var firstDayOfWeek = self.l10n.firstDayOfWeek;
        var weekdays = __spreadArrays(self.l10n.weekdays.shorthand);
        if (firstDayOfWeek > 0 && firstDayOfWeek < weekdays.length) {
            weekdays = __spreadArrays(weekdays.splice(firstDayOfWeek, weekdays.length), weekdays.splice(0, firstDayOfWeek));
        }
        for (var i = self.config.showMonths; i--;) {
            self.weekdayContainer.children[i].innerHTML = "\n      <span class='flatpickr-weekday'>\n        " + weekdays.join("</span><span class='flatpickr-weekday'>") + "\n      </span>\n      ";
        }
    }
    function buildWeeks() {
        self.calendarContainer.classList.add("hasWeeks");
        var weekWrapper = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("div", "flatpickr-weekwrapper");
        weekWrapper.appendChild((0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("span", "flatpickr-weekday", self.l10n.weekAbbreviation));
        var weekNumbers = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("div", "flatpickr-weeks");
        weekWrapper.appendChild(weekNumbers);
        return {
            weekWrapper: weekWrapper,
            weekNumbers: weekNumbers,
        };
    }
    function changeMonth(value, isOffset) {
        if (isOffset === void 0) { isOffset = true; }
        var delta = isOffset ? value : value - self.currentMonth;
        if ((delta < 0 && self._hidePrevMonthArrow === true) ||
            (delta > 0 && self._hideNextMonthArrow === true))
            return;
        self.currentMonth += delta;
        if (self.currentMonth < 0 || self.currentMonth > 11) {
            self.currentYear += self.currentMonth > 11 ? 1 : -1;
            self.currentMonth = (self.currentMonth + 12) % 12;
            triggerEvent("onYearChange");
            buildMonthSwitch();
        }
        buildDays();
        triggerEvent("onMonthChange");
        updateNavigationCurrentMonth();
    }
    function clear(triggerChangeEvent, toInitial) {
        if (triggerChangeEvent === void 0) { triggerChangeEvent = true; }
        if (toInitial === void 0) { toInitial = true; }
        self.input.value = "";
        if (self.altInput !== undefined)
            self.altInput.value = "";
        if (self.mobileInput !== undefined)
            self.mobileInput.value = "";
        self.selectedDates = [];
        self.latestSelectedDateObj = undefined;
        if (toInitial === true) {
            self.currentYear = self._initialDate.getFullYear();
            self.currentMonth = self._initialDate.getMonth();
        }
        if (self.config.enableTime === true) {
            var _a = (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.getDefaultHours)(self.config), hours = _a.hours, minutes = _a.minutes, seconds = _a.seconds;
            setHours(hours, minutes, seconds);
        }
        self.redraw();
        if (triggerChangeEvent)
            triggerEvent("onChange");
    }
    function close() {
        self.isOpen = false;
        if (!self.isMobile) {
            if (self.calendarContainer !== undefined) {
                self.calendarContainer.classList.remove("open");
            }
            if (self._input !== undefined) {
                self._input.classList.remove("active");
            }
        }
        triggerEvent("onClose");
    }
    function destroy() {
        if (self.config !== undefined)
            triggerEvent("onDestroy");
        for (var i = self._handlers.length; i--;) {
            self._handlers[i].remove();
        }
        self._handlers = [];
        if (self.mobileInput) {
            if (self.mobileInput.parentNode)
                self.mobileInput.parentNode.removeChild(self.mobileInput);
            self.mobileInput = undefined;
        }
        else if (self.calendarContainer && self.calendarContainer.parentNode) {
            if (self.config.static && self.calendarContainer.parentNode) {
                var wrapper = self.calendarContainer.parentNode;
                wrapper.lastChild && wrapper.removeChild(wrapper.lastChild);
                if (wrapper.parentNode) {
                    while (wrapper.firstChild)
                        wrapper.parentNode.insertBefore(wrapper.firstChild, wrapper);
                    wrapper.parentNode.removeChild(wrapper);
                }
            }
            else
                self.calendarContainer.parentNode.removeChild(self.calendarContainer);
        }
        if (self.altInput) {
            self.input.type = "text";
            if (self.altInput.parentNode)
                self.altInput.parentNode.removeChild(self.altInput);
            delete self.altInput;
        }
        if (self.input) {
            self.input.type = self.input._type;
            self.input.classList.remove("flatpickr-input");
            self.input.removeAttribute("readonly");
        }
        [
            "_showTimeInput",
            "latestSelectedDateObj",
            "_hideNextMonthArrow",
            "_hidePrevMonthArrow",
            "__hideNextMonthArrow",
            "__hidePrevMonthArrow",
            "isMobile",
            "isOpen",
            "selectedDateElem",
            "minDateHasTime",
            "maxDateHasTime",
            "days",
            "daysContainer",
            "_input",
            "_positionElement",
            "innerContainer",
            "rContainer",
            "monthNav",
            "todayDateElem",
            "calendarContainer",
            "weekdayContainer",
            "prevMonthNav",
            "nextMonthNav",
            "monthsDropdownContainer",
            "currentMonthElement",
            "currentYearElement",
            "navigationCurrentMonth",
            "selectedDateElem",
            "config",
        ].forEach(function (k) {
            try {
                delete self[k];
            }
            catch (_) { }
        });
    }
    function isCalendarElem(elem) {
        return self.calendarContainer.contains(elem);
    }
    function documentClick(e) {
        if (self.isOpen && !self.config.inline) {
            var eventTarget_1 = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.getEventTarget)(e);
            var isCalendarElement = isCalendarElem(eventTarget_1);
            var isInput = eventTarget_1 === self.input ||
                eventTarget_1 === self.altInput ||
                self.element.contains(eventTarget_1) ||
                (e.path &&
                    e.path.indexOf &&
                    (~e.path.indexOf(self.input) ||
                        ~e.path.indexOf(self.altInput)));
            var lostFocus = !isInput &&
                !isCalendarElement &&
                !isCalendarElem(e.relatedTarget);
            var isIgnored = !self.config.ignoredFocusElements.some(function (elem) {
                return elem.contains(eventTarget_1);
            });
            if (lostFocus && isIgnored) {
                if (self.config.allowInput) {
                    self.setDate(self._input.value, false, self.config.altInput
                        ? self.config.altFormat
                        : self.config.dateFormat);
                }
                if (self.timeContainer !== undefined &&
                    self.minuteElement !== undefined &&
                    self.hourElement !== undefined &&
                    self.input.value !== "" &&
                    self.input.value !== undefined) {
                    updateTime();
                }
                self.close();
                if (self.config &&
                    self.config.mode === "range" &&
                    self.selectedDates.length === 1)
                    self.clear(false);
            }
        }
    }
    function changeYear(newYear) {
        if (!newYear ||
            (self.config.minDate && newYear < self.config.minDate.getFullYear()) ||
            (self.config.maxDate && newYear > self.config.maxDate.getFullYear()))
            return;
        var newYearNum = newYear, isNewYear = self.currentYear !== newYearNum;
        self.currentYear = newYearNum || self.currentYear;
        if (self.config.maxDate &&
            self.currentYear === self.config.maxDate.getFullYear()) {
            self.currentMonth = Math.min(self.config.maxDate.getMonth(), self.currentMonth);
        }
        else if (self.config.minDate &&
            self.currentYear === self.config.minDate.getFullYear()) {
            self.currentMonth = Math.max(self.config.minDate.getMonth(), self.currentMonth);
        }
        if (isNewYear) {
            self.redraw();
            triggerEvent("onYearChange");
            buildMonthSwitch();
        }
    }
    function isEnabled(date, timeless) {
        var _a;
        if (timeless === void 0) { timeless = true; }
        var dateToCheck = self.parseDate(date, undefined, timeless);
        if ((self.config.minDate &&
            dateToCheck &&
            (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.compareDates)(dateToCheck, self.config.minDate, timeless !== undefined ? timeless : !self.minDateHasTime) < 0) ||
            (self.config.maxDate &&
                dateToCheck &&
                (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.compareDates)(dateToCheck, self.config.maxDate, timeless !== undefined ? timeless : !self.maxDateHasTime) > 0))
            return false;
        if (!self.config.enable && self.config.disable.length === 0)
            return true;
        if (dateToCheck === undefined)
            return false;
        var bool = !!self.config.enable, array = (_a = self.config.enable) !== null && _a !== void 0 ? _a : self.config.disable;
        for (var i = 0, d = void 0; i < array.length; i++) {
            d = array[i];
            if (typeof d === "function" &&
                d(dateToCheck))
                return bool;
            else if (d instanceof Date &&
                dateToCheck !== undefined &&
                d.getTime() === dateToCheck.getTime())
                return bool;
            else if (typeof d === "string") {
                var parsed = self.parseDate(d, undefined, true);
                return parsed && parsed.getTime() === dateToCheck.getTime()
                    ? bool
                    : !bool;
            }
            else if (typeof d === "object" &&
                dateToCheck !== undefined &&
                d.from &&
                d.to &&
                dateToCheck.getTime() >= d.from.getTime() &&
                dateToCheck.getTime() <= d.to.getTime())
                return bool;
        }
        return !bool;
    }
    function isInView(elem) {
        if (self.daysContainer !== undefined)
            return (elem.className.indexOf("hidden") === -1 &&
                elem.className.indexOf("flatpickr-disabled") === -1 &&
                self.daysContainer.contains(elem));
        return false;
    }
    function onBlur(e) {
        var isInput = e.target === self._input;
        var valueChanged = self._input.value.trimEnd() !== getDateStr();
        if (isInput &&
            valueChanged &&
            !(e.relatedTarget && isCalendarElem(e.relatedTarget))) {
            self.setDate(self._input.value, true, e.target === self.altInput
                ? self.config.altFormat
                : self.config.dateFormat);
        }
    }
    function onKeyDown(e) {
        var eventTarget = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.getEventTarget)(e);
        var isInput = self.config.wrap
            ? element.contains(eventTarget)
            : eventTarget === self._input;
        var allowInput = self.config.allowInput;
        var allowKeydown = self.isOpen && (!allowInput || !isInput);
        var allowInlineKeydown = self.config.inline && isInput && !allowInput;
        if (e.keyCode === 13 && isInput) {
            if (allowInput) {
                self.setDate(self._input.value, true, eventTarget === self.altInput
                    ? self.config.altFormat
                    : self.config.dateFormat);
                self.close();
                return eventTarget.blur();
            }
            else {
                self.open();
            }
        }
        else if (isCalendarElem(eventTarget) ||
            allowKeydown ||
            allowInlineKeydown) {
            var isTimeObj = !!self.timeContainer &&
                self.timeContainer.contains(eventTarget);
            switch (e.keyCode) {
                case 13:
                    if (isTimeObj) {
                        e.preventDefault();
                        updateTime();
                        focusAndClose();
                    }
                    else
                        selectDate(e);
                    break;
                case 27:
                    e.preventDefault();
                    focusAndClose();
                    break;
                case 8:
                case 46:
                    if (isInput && !self.config.allowInput) {
                        e.preventDefault();
                        self.clear();
                    }
                    break;
                case 37:
                case 39:
                    if (!isTimeObj && !isInput) {
                        e.preventDefault();
                        var activeElement = getClosestActiveElement();
                        if (self.daysContainer !== undefined &&
                            (allowInput === false ||
                                (activeElement && isInView(activeElement)))) {
                            var delta_1 = e.keyCode === 39 ? 1 : -1;
                            if (!e.ctrlKey)
                                focusOnDay(undefined, delta_1);
                            else {
                                e.stopPropagation();
                                changeMonth(delta_1);
                                focusOnDay(getFirstAvailableDay(1), 0);
                            }
                        }
                    }
                    else if (self.hourElement)
                        self.hourElement.focus();
                    break;
                case 38:
                case 40:
                    e.preventDefault();
                    var delta = e.keyCode === 40 ? 1 : -1;
                    if ((self.daysContainer &&
                        eventTarget.$i !== undefined) ||
                        eventTarget === self.input ||
                        eventTarget === self.altInput) {
                        if (e.ctrlKey) {
                            e.stopPropagation();
                            changeYear(self.currentYear - delta);
                            focusOnDay(getFirstAvailableDay(1), 0);
                        }
                        else if (!isTimeObj)
                            focusOnDay(undefined, delta * 7);
                    }
                    else if (eventTarget === self.currentYearElement) {
                        changeYear(self.currentYear - delta);
                    }
                    else if (self.config.enableTime) {
                        if (!isTimeObj && self.hourElement)
                            self.hourElement.focus();
                        updateTime(e);
                        self._debouncedChange();
                    }
                    break;
                case 9:
                    if (isTimeObj) {
                        var elems = [
                            self.hourElement,
                            self.minuteElement,
                            self.secondElement,
                            self.amPM,
                        ]
                            .concat(self.pluginElements)
                            .filter(function (x) { return x; });
                        var i = elems.indexOf(eventTarget);
                        if (i !== -1) {
                            var target = elems[i + (e.shiftKey ? -1 : 1)];
                            e.preventDefault();
                            (target || self._input).focus();
                        }
                    }
                    else if (!self.config.noCalendar &&
                        self.daysContainer &&
                        self.daysContainer.contains(eventTarget) &&
                        e.shiftKey) {
                        e.preventDefault();
                        self._input.focus();
                    }
                    break;
                default:
                    break;
            }
        }
        if (self.amPM !== undefined && eventTarget === self.amPM) {
            switch (e.key) {
                case self.l10n.amPM[0].charAt(0):
                case self.l10n.amPM[0].charAt(0).toLowerCase():
                    self.amPM.textContent = self.l10n.amPM[0];
                    setHoursFromInputs();
                    updateValue();
                    break;
                case self.l10n.amPM[1].charAt(0):
                case self.l10n.amPM[1].charAt(0).toLowerCase():
                    self.amPM.textContent = self.l10n.amPM[1];
                    setHoursFromInputs();
                    updateValue();
                    break;
            }
        }
        if (isInput || isCalendarElem(eventTarget)) {
            triggerEvent("onKeyDown", e);
        }
    }
    function onMouseOver(elem, cellClass) {
        if (cellClass === void 0) { cellClass = "flatpickr-day"; }
        if (self.selectedDates.length !== 1 ||
            (elem &&
                (!elem.classList.contains(cellClass) ||
                    elem.classList.contains("flatpickr-disabled"))))
            return;
        var hoverDate = elem
            ? elem.dateObj.getTime()
            : self.days.firstElementChild.dateObj.getTime(), initialDate = self.parseDate(self.selectedDates[0], undefined, true).getTime(), rangeStartDate = Math.min(hoverDate, self.selectedDates[0].getTime()), rangeEndDate = Math.max(hoverDate, self.selectedDates[0].getTime());
        var containsDisabled = false;
        var minRange = 0, maxRange = 0;
        for (var t = rangeStartDate; t < rangeEndDate; t += _utils_dates__WEBPACK_IMPORTED_MODULE_4__.duration.DAY) {
            if (!isEnabled(new Date(t), true)) {
                containsDisabled =
                    containsDisabled || (t > rangeStartDate && t < rangeEndDate);
                if (t < initialDate && (!minRange || t > minRange))
                    minRange = t;
                else if (t > initialDate && (!maxRange || t < maxRange))
                    maxRange = t;
            }
        }
        var hoverableCells = Array.from(self.rContainer.querySelectorAll("*:nth-child(-n+" + self.config.showMonths + ") > ." + cellClass));
        hoverableCells.forEach(function (dayElem) {
            var date = dayElem.dateObj;
            var timestamp = date.getTime();
            var outOfRange = (minRange > 0 && timestamp < minRange) ||
                (maxRange > 0 && timestamp > maxRange);
            if (outOfRange) {
                dayElem.classList.add("notAllowed");
                ["inRange", "startRange", "endRange"].forEach(function (c) {
                    dayElem.classList.remove(c);
                });
                return;
            }
            else if (containsDisabled && !outOfRange)
                return;
            ["startRange", "inRange", "endRange", "notAllowed"].forEach(function (c) {
                dayElem.classList.remove(c);
            });
            if (elem !== undefined) {
                elem.classList.add(hoverDate <= self.selectedDates[0].getTime()
                    ? "startRange"
                    : "endRange");
                if (initialDate < hoverDate && timestamp === initialDate)
                    dayElem.classList.add("startRange");
                else if (initialDate > hoverDate && timestamp === initialDate)
                    dayElem.classList.add("endRange");
                if (timestamp >= minRange &&
                    (maxRange === 0 || timestamp <= maxRange) &&
                    (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.isBetween)(timestamp, initialDate, hoverDate))
                    dayElem.classList.add("inRange");
            }
        });
    }
    function onResize() {
        if (self.isOpen && !self.config.static && !self.config.inline)
            positionCalendar();
    }
    function open(e, positionElement) {
        if (positionElement === void 0) { positionElement = self._positionElement; }
        if (self.isMobile === true) {
            if (e) {
                e.preventDefault();
                var eventTarget = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.getEventTarget)(e);
                if (eventTarget) {
                    eventTarget.blur();
                }
            }
            if (self.mobileInput !== undefined) {
                self.mobileInput.focus();
                self.mobileInput.click();
            }
            triggerEvent("onOpen");
            return;
        }
        else if (self._input.disabled || self.config.inline) {
            return;
        }
        var wasOpen = self.isOpen;
        self.isOpen = true;
        if (!wasOpen) {
            self.calendarContainer.classList.add("open");
            self._input.classList.add("active");
            triggerEvent("onOpen");
            positionCalendar(positionElement);
        }
        if (self.config.enableTime === true && self.config.noCalendar === true) {
            if (self.config.allowInput === false &&
                (e === undefined ||
                    !self.timeContainer.contains(e.relatedTarget))) {
                setTimeout(function () { return self.hourElement.select(); }, 50);
            }
        }
    }
    function minMaxDateSetter(type) {
        return function (date) {
            var dateObj = (self.config["_" + type + "Date"] = self.parseDate(date, self.config.dateFormat));
            var inverseDateObj = self.config["_" + (type === "min" ? "max" : "min") + "Date"];
            if (dateObj !== undefined) {
                self[type === "min" ? "minDateHasTime" : "maxDateHasTime"] =
                    dateObj.getHours() > 0 ||
                        dateObj.getMinutes() > 0 ||
                        dateObj.getSeconds() > 0;
            }
            if (self.selectedDates) {
                self.selectedDates = self.selectedDates.filter(function (d) { return isEnabled(d); });
                if (!self.selectedDates.length && type === "min")
                    setHoursFromDate(dateObj);
                updateValue();
            }
            if (self.daysContainer) {
                redraw();
                if (dateObj !== undefined)
                    self.currentYearElement[type] = dateObj.getFullYear().toString();
                else
                    self.currentYearElement.removeAttribute(type);
                self.currentYearElement.disabled =
                    !!inverseDateObj &&
                        dateObj !== undefined &&
                        inverseDateObj.getFullYear() === dateObj.getFullYear();
            }
        };
    }
    function parseConfig() {
        var boolOpts = [
            "wrap",
            "weekNumbers",
            "allowInput",
            "allowInvalidPreload",
            "clickOpens",
            "time_24hr",
            "enableTime",
            "noCalendar",
            "altInput",
            "shorthandCurrentMonth",
            "inline",
            "static",
            "enableSeconds",
            "disableMobile",
        ];
        var userConfig = __assign(__assign({}, JSON.parse(JSON.stringify(element.dataset || {}))), instanceConfig);
        var formats = {};
        self.config.parseDate = userConfig.parseDate;
        self.config.formatDate = userConfig.formatDate;
        Object.defineProperty(self.config, "enable", {
            get: function () { return self.config._enable; },
            set: function (dates) {
                self.config._enable = parseDateRules(dates);
            },
        });
        Object.defineProperty(self.config, "disable", {
            get: function () { return self.config._disable; },
            set: function (dates) {
                self.config._disable = parseDateRules(dates);
            },
        });
        var timeMode = userConfig.mode === "time";
        if (!userConfig.dateFormat && (userConfig.enableTime || timeMode)) {
            var defaultDateFormat = flatpickr.defaultConfig.dateFormat || _types_options__WEBPACK_IMPORTED_MODULE_0__.defaults.dateFormat;
            formats.dateFormat =
                userConfig.noCalendar || timeMode
                    ? "H:i" + (userConfig.enableSeconds ? ":S" : "")
                    : defaultDateFormat + " H:i" + (userConfig.enableSeconds ? ":S" : "");
        }
        if (userConfig.altInput &&
            (userConfig.enableTime || timeMode) &&
            !userConfig.altFormat) {
            var defaultAltFormat = flatpickr.defaultConfig.altFormat || _types_options__WEBPACK_IMPORTED_MODULE_0__.defaults.altFormat;
            formats.altFormat =
                userConfig.noCalendar || timeMode
                    ? "h:i" + (userConfig.enableSeconds ? ":S K" : " K")
                    : defaultAltFormat + (" h:i" + (userConfig.enableSeconds ? ":S" : "") + " K");
        }
        Object.defineProperty(self.config, "minDate", {
            get: function () { return self.config._minDate; },
            set: minMaxDateSetter("min"),
        });
        Object.defineProperty(self.config, "maxDate", {
            get: function () { return self.config._maxDate; },
            set: minMaxDateSetter("max"),
        });
        var minMaxTimeSetter = function (type) { return function (val) {
            self.config[type === "min" ? "_minTime" : "_maxTime"] = self.parseDate(val, "H:i:S");
        }; };
        Object.defineProperty(self.config, "minTime", {
            get: function () { return self.config._minTime; },
            set: minMaxTimeSetter("min"),
        });
        Object.defineProperty(self.config, "maxTime", {
            get: function () { return self.config._maxTime; },
            set: minMaxTimeSetter("max"),
        });
        if (userConfig.mode === "time") {
            self.config.noCalendar = true;
            self.config.enableTime = true;
        }
        Object.assign(self.config, formats, userConfig);
        for (var i = 0; i < boolOpts.length; i++)
            self.config[boolOpts[i]] =
                self.config[boolOpts[i]] === true ||
                    self.config[boolOpts[i]] === "true";
        _types_options__WEBPACK_IMPORTED_MODULE_0__.HOOKS.filter(function (hook) { return self.config[hook] !== undefined; }).forEach(function (hook) {
            self.config[hook] = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.arrayify)(self.config[hook] || []).map(bindToInstance);
        });
        self.isMobile =
            !self.config.disableMobile &&
                !self.config.inline &&
                self.config.mode === "single" &&
                !self.config.disable.length &&
                !self.config.enable &&
                !self.config.weekNumbers &&
                /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        for (var i = 0; i < self.config.plugins.length; i++) {
            var pluginConf = self.config.plugins[i](self) || {};
            for (var key in pluginConf) {
                if (_types_options__WEBPACK_IMPORTED_MODULE_0__.HOOKS.indexOf(key) > -1) {
                    self.config[key] = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.arrayify)(pluginConf[key])
                        .map(bindToInstance)
                        .concat(self.config[key]);
                }
                else if (typeof userConfig[key] === "undefined")
                    self.config[key] = pluginConf[key];
            }
        }
        if (!userConfig.altInputClass) {
            self.config.altInputClass =
                getInputElem().className + " " + self.config.altInputClass;
        }
        triggerEvent("onParseConfig");
    }
    function getInputElem() {
        return self.config.wrap
            ? element.querySelector("[data-input]")
            : element;
    }
    function setupLocale() {
        if (typeof self.config.locale !== "object" &&
            typeof flatpickr.l10ns[self.config.locale] === "undefined")
            self.config.errorHandler(new Error("flatpickr: invalid locale " + self.config.locale));
        self.l10n = __assign(__assign({}, flatpickr.l10ns.default), (typeof self.config.locale === "object"
            ? self.config.locale
            : self.config.locale !== "default"
                ? flatpickr.l10ns[self.config.locale]
                : undefined));
        _utils_formatting__WEBPACK_IMPORTED_MODULE_5__.tokenRegex.D = "(" + self.l10n.weekdays.shorthand.join("|") + ")";
        _utils_formatting__WEBPACK_IMPORTED_MODULE_5__.tokenRegex.l = "(" + self.l10n.weekdays.longhand.join("|") + ")";
        _utils_formatting__WEBPACK_IMPORTED_MODULE_5__.tokenRegex.M = "(" + self.l10n.months.shorthand.join("|") + ")";
        _utils_formatting__WEBPACK_IMPORTED_MODULE_5__.tokenRegex.F = "(" + self.l10n.months.longhand.join("|") + ")";
        _utils_formatting__WEBPACK_IMPORTED_MODULE_5__.tokenRegex.K = "(" + self.l10n.amPM[0] + "|" + self.l10n.amPM[1] + "|" + self.l10n.amPM[0].toLowerCase() + "|" + self.l10n.amPM[1].toLowerCase() + ")";
        var userConfig = __assign(__assign({}, instanceConfig), JSON.parse(JSON.stringify(element.dataset || {})));
        if (userConfig.time_24hr === undefined &&
            flatpickr.defaultConfig.time_24hr === undefined) {
            self.config.time_24hr = self.l10n.time_24hr;
        }
        self.formatDate = (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.createDateFormatter)(self);
        self.parseDate = (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.createDateParser)({ config: self.config, l10n: self.l10n });
    }
    function positionCalendar(customPositionElement) {
        if (typeof self.config.position === "function") {
            return void self.config.position(self, customPositionElement);
        }
        if (self.calendarContainer === undefined)
            return;
        triggerEvent("onPreCalendarPosition");
        var positionElement = customPositionElement || self._positionElement;
        var calendarHeight = Array.prototype.reduce.call(self.calendarContainer.children, (function (acc, child) { return acc + child.offsetHeight; }), 0), calendarWidth = self.calendarContainer.offsetWidth, configPos = self.config.position.split(" "), configPosVertical = configPos[0], configPosHorizontal = configPos.length > 1 ? configPos[1] : null, inputBounds = positionElement.getBoundingClientRect(), distanceFromBottom = window.innerHeight - inputBounds.bottom, showOnTop = configPosVertical === "above" ||
            (configPosVertical !== "below" &&
                distanceFromBottom < calendarHeight &&
                inputBounds.top > calendarHeight);
        var top = window.pageYOffset +
            inputBounds.top +
            (!showOnTop ? positionElement.offsetHeight + 2 : -calendarHeight - 2);
        (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.toggleClass)(self.calendarContainer, "arrowTop", !showOnTop);
        (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.toggleClass)(self.calendarContainer, "arrowBottom", showOnTop);
        if (self.config.inline)
            return;
        var left = window.pageXOffset + inputBounds.left;
        var isCenter = false;
        var isRight = false;
        if (configPosHorizontal === "center") {
            left -= (calendarWidth - inputBounds.width) / 2;
            isCenter = true;
        }
        else if (configPosHorizontal === "right") {
            left -= calendarWidth - inputBounds.width;
            isRight = true;
        }
        (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.toggleClass)(self.calendarContainer, "arrowLeft", !isCenter && !isRight);
        (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.toggleClass)(self.calendarContainer, "arrowCenter", isCenter);
        (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.toggleClass)(self.calendarContainer, "arrowRight", isRight);
        var right = window.document.body.offsetWidth -
            (window.pageXOffset + inputBounds.right);
        var rightMost = left + calendarWidth > window.document.body.offsetWidth;
        var centerMost = right + calendarWidth > window.document.body.offsetWidth;
        (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.toggleClass)(self.calendarContainer, "rightMost", rightMost);
        if (self.config.static)
            return;
        self.calendarContainer.style.top = top + "px";
        if (!rightMost) {
            self.calendarContainer.style.left = left + "px";
            self.calendarContainer.style.right = "auto";
        }
        else if (!centerMost) {
            self.calendarContainer.style.left = "auto";
            self.calendarContainer.style.right = right + "px";
        }
        else {
            var doc = getDocumentStyleSheet();
            if (doc === undefined)
                return;
            var bodyWidth = window.document.body.offsetWidth;
            var centerLeft = Math.max(0, bodyWidth / 2 - calendarWidth / 2);
            var centerBefore = ".flatpickr-calendar.centerMost:before";
            var centerAfter = ".flatpickr-calendar.centerMost:after";
            var centerIndex = doc.cssRules.length;
            var centerStyle = "{left:" + inputBounds.left + "px;right:auto;}";
            (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.toggleClass)(self.calendarContainer, "rightMost", false);
            (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.toggleClass)(self.calendarContainer, "centerMost", true);
            doc.insertRule(centerBefore + "," + centerAfter + centerStyle, centerIndex);
            self.calendarContainer.style.left = centerLeft + "px";
            self.calendarContainer.style.right = "auto";
        }
    }
    function getDocumentStyleSheet() {
        var editableSheet = null;
        for (var i = 0; i < document.styleSheets.length; i++) {
            var sheet = document.styleSheets[i];
            if (!sheet.cssRules)
                continue;
            try {
                sheet.cssRules;
            }
            catch (err) {
                continue;
            }
            editableSheet = sheet;
            break;
        }
        return editableSheet != null ? editableSheet : createStyleSheet();
    }
    function createStyleSheet() {
        var style = document.createElement("style");
        document.head.appendChild(style);
        return style.sheet;
    }
    function redraw() {
        if (self.config.noCalendar || self.isMobile)
            return;
        buildMonthSwitch();
        updateNavigationCurrentMonth();
        buildDays();
    }
    function focusAndClose() {
        self._input.focus();
        if (window.navigator.userAgent.indexOf("MSIE") !== -1 ||
            navigator.msMaxTouchPoints !== undefined) {
            setTimeout(self.close, 0);
        }
        else {
            self.close();
        }
    }
    function selectDate(e) {
        e.preventDefault();
        e.stopPropagation();
        var isSelectable = function (day) {
            return day.classList &&
                day.classList.contains("flatpickr-day") &&
                !day.classList.contains("flatpickr-disabled") &&
                !day.classList.contains("notAllowed");
        };
        var t = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.findParent)((0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.getEventTarget)(e), isSelectable);
        if (t === undefined)
            return;
        var target = t;
        var selectedDate = (self.latestSelectedDateObj = new Date(target.dateObj.getTime()));
        var shouldChangeMonth = (selectedDate.getMonth() < self.currentMonth ||
            selectedDate.getMonth() >
                self.currentMonth + self.config.showMonths - 1) &&
            self.config.mode !== "range";
        self.selectedDateElem = target;
        if (self.config.mode === "single")
            self.selectedDates = [selectedDate];
        else if (self.config.mode === "multiple") {
            var selectedIndex = isDateSelected(selectedDate);
            if (selectedIndex)
                self.selectedDates.splice(parseInt(selectedIndex), 1);
            else
                self.selectedDates.push(selectedDate);
        }
        else if (self.config.mode === "range") {
            if (self.selectedDates.length === 2) {
                self.clear(false, false);
            }
            self.latestSelectedDateObj = selectedDate;
            self.selectedDates.push(selectedDate);
            if ((0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.compareDates)(selectedDate, self.selectedDates[0], true) !== 0)
                self.selectedDates.sort(function (a, b) { return a.getTime() - b.getTime(); });
        }
        setHoursFromInputs();
        if (shouldChangeMonth) {
            var isNewYear = self.currentYear !== selectedDate.getFullYear();
            self.currentYear = selectedDate.getFullYear();
            self.currentMonth = selectedDate.getMonth();
            if (isNewYear) {
                triggerEvent("onYearChange");
                buildMonthSwitch();
            }
            triggerEvent("onMonthChange");
        }
        updateNavigationCurrentMonth();
        buildDays();
        updateValue();
        if (!shouldChangeMonth &&
            self.config.mode !== "range" &&
            self.config.showMonths === 1)
            focusOnDayElem(target);
        else if (self.selectedDateElem !== undefined &&
            self.hourElement === undefined) {
            self.selectedDateElem && self.selectedDateElem.focus();
        }
        if (self.hourElement !== undefined)
            self.hourElement !== undefined && self.hourElement.focus();
        if (self.config.closeOnSelect) {
            var single = self.config.mode === "single" && !self.config.enableTime;
            var range = self.config.mode === "range" &&
                self.selectedDates.length === 2 &&
                !self.config.enableTime;
            if (single || range) {
                focusAndClose();
            }
        }
        triggerChange();
    }
    var CALLBACKS = {
        locale: [setupLocale, updateWeekdays],
        showMonths: [buildMonths, setCalendarWidth, buildWeekdays],
        minDate: [jumpToDate],
        maxDate: [jumpToDate],
        positionElement: [updatePositionElement],
        clickOpens: [
            function () {
                if (self.config.clickOpens === true) {
                    bind(self._input, "focus", self.open);
                    bind(self._input, "click", self.open);
                }
                else {
                    self._input.removeEventListener("focus", self.open);
                    self._input.removeEventListener("click", self.open);
                }
            },
        ],
    };
    function set(option, value) {
        if (option !== null && typeof option === "object") {
            Object.assign(self.config, option);
            for (var key in option) {
                if (CALLBACKS[key] !== undefined)
                    CALLBACKS[key].forEach(function (x) { return x(); });
            }
        }
        else {
            self.config[option] = value;
            if (CALLBACKS[option] !== undefined)
                CALLBACKS[option].forEach(function (x) { return x(); });
            else if (_types_options__WEBPACK_IMPORTED_MODULE_0__.HOOKS.indexOf(option) > -1)
                self.config[option] = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.arrayify)(value);
        }
        self.redraw();
        updateValue(true);
    }
    function setSelectedDate(inputDate, format) {
        var dates = [];
        if (inputDate instanceof Array)
            dates = inputDate.map(function (d) { return self.parseDate(d, format); });
        else if (inputDate instanceof Date || typeof inputDate === "number")
            dates = [self.parseDate(inputDate, format)];
        else if (typeof inputDate === "string") {
            switch (self.config.mode) {
                case "single":
                case "time":
                    dates = [self.parseDate(inputDate, format)];
                    break;
                case "multiple":
                    dates = inputDate
                        .split(self.config.conjunction)
                        .map(function (date) { return self.parseDate(date, format); });
                    break;
                case "range":
                    dates = inputDate
                        .split(self.l10n.rangeSeparator)
                        .map(function (date) { return self.parseDate(date, format); });
                    break;
                default:
                    break;
            }
        }
        else
            self.config.errorHandler(new Error("Invalid date supplied: " + JSON.stringify(inputDate)));
        self.selectedDates = (self.config.allowInvalidPreload
            ? dates
            : dates.filter(function (d) { return d instanceof Date && isEnabled(d, false); }));
        if (self.config.mode === "range")
            self.selectedDates.sort(function (a, b) { return a.getTime() - b.getTime(); });
    }
    function setDate(date, triggerChange, format) {
        if (triggerChange === void 0) { triggerChange = false; }
        if (format === void 0) { format = self.config.dateFormat; }
        if ((date !== 0 && !date) || (date instanceof Array && date.length === 0))
            return self.clear(triggerChange);
        setSelectedDate(date, format);
        self.latestSelectedDateObj =
            self.selectedDates[self.selectedDates.length - 1];
        self.redraw();
        jumpToDate(undefined, triggerChange);
        setHoursFromDate();
        if (self.selectedDates.length === 0) {
            self.clear(false);
        }
        updateValue(triggerChange);
        if (triggerChange)
            triggerEvent("onChange");
    }
    function parseDateRules(arr) {
        return arr
            .slice()
            .map(function (rule) {
            if (typeof rule === "string" ||
                typeof rule === "number" ||
                rule instanceof Date) {
                return self.parseDate(rule, undefined, true);
            }
            else if (rule &&
                typeof rule === "object" &&
                rule.from &&
                rule.to)
                return {
                    from: self.parseDate(rule.from, undefined),
                    to: self.parseDate(rule.to, undefined),
                };
            return rule;
        })
            .filter(function (x) { return x; });
    }
    function setupDates() {
        self.selectedDates = [];
        self.now = self.parseDate(self.config.now) || new Date();
        var preloadedDate = self.config.defaultDate ||
            ((self.input.nodeName === "INPUT" ||
                self.input.nodeName === "TEXTAREA") &&
                self.input.placeholder &&
                self.input.value === self.input.placeholder
                ? null
                : self.input.value);
        if (preloadedDate)
            setSelectedDate(preloadedDate, self.config.dateFormat);
        self._initialDate =
            self.selectedDates.length > 0
                ? self.selectedDates[0]
                : self.config.minDate &&
                    self.config.minDate.getTime() > self.now.getTime()
                    ? self.config.minDate
                    : self.config.maxDate &&
                        self.config.maxDate.getTime() < self.now.getTime()
                        ? self.config.maxDate
                        : self.now;
        self.currentYear = self._initialDate.getFullYear();
        self.currentMonth = self._initialDate.getMonth();
        if (self.selectedDates.length > 0)
            self.latestSelectedDateObj = self.selectedDates[0];
        if (self.config.minTime !== undefined)
            self.config.minTime = self.parseDate(self.config.minTime, "H:i");
        if (self.config.maxTime !== undefined)
            self.config.maxTime = self.parseDate(self.config.maxTime, "H:i");
        self.minDateHasTime =
            !!self.config.minDate &&
                (self.config.minDate.getHours() > 0 ||
                    self.config.minDate.getMinutes() > 0 ||
                    self.config.minDate.getSeconds() > 0);
        self.maxDateHasTime =
            !!self.config.maxDate &&
                (self.config.maxDate.getHours() > 0 ||
                    self.config.maxDate.getMinutes() > 0 ||
                    self.config.maxDate.getSeconds() > 0);
    }
    function setupInputs() {
        self.input = getInputElem();
        if (!self.input) {
            self.config.errorHandler(new Error("Invalid input element specified"));
            return;
        }
        self.input._type = self.input.type;
        self.input.type = "text";
        self.input.classList.add("flatpickr-input");
        self._input = self.input;
        if (self.config.altInput) {
            self.altInput = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)(self.input.nodeName, self.config.altInputClass);
            self._input = self.altInput;
            self.altInput.placeholder = self.input.placeholder;
            self.altInput.disabled = self.input.disabled;
            self.altInput.required = self.input.required;
            self.altInput.tabIndex = self.input.tabIndex;
            self.altInput.type = "text";
            self.input.setAttribute("type", "hidden");
            if (!self.config.static && self.input.parentNode)
                self.input.parentNode.insertBefore(self.altInput, self.input.nextSibling);
        }
        if (!self.config.allowInput)
            self._input.setAttribute("readonly", "readonly");
        updatePositionElement();
    }
    function updatePositionElement() {
        self._positionElement = self.config.positionElement || self._input;
    }
    function setupMobile() {
        var inputType = self.config.enableTime
            ? self.config.noCalendar
                ? "time"
                : "datetime-local"
            : "date";
        self.mobileInput = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.createElement)("input", self.input.className + " flatpickr-mobile");
        self.mobileInput.tabIndex = 1;
        self.mobileInput.type = inputType;
        self.mobileInput.disabled = self.input.disabled;
        self.mobileInput.required = self.input.required;
        self.mobileInput.placeholder = self.input.placeholder;
        self.mobileFormatStr =
            inputType === "datetime-local"
                ? "Y-m-d\\TH:i:S"
                : inputType === "date"
                    ? "Y-m-d"
                    : "H:i:S";
        if (self.selectedDates.length > 0) {
            self.mobileInput.defaultValue = self.mobileInput.value = self.formatDate(self.selectedDates[0], self.mobileFormatStr);
        }
        if (self.config.minDate)
            self.mobileInput.min = self.formatDate(self.config.minDate, "Y-m-d");
        if (self.config.maxDate)
            self.mobileInput.max = self.formatDate(self.config.maxDate, "Y-m-d");
        if (self.input.getAttribute("step"))
            self.mobileInput.step = String(self.input.getAttribute("step"));
        self.input.type = "hidden";
        if (self.altInput !== undefined)
            self.altInput.type = "hidden";
        try {
            if (self.input.parentNode)
                self.input.parentNode.insertBefore(self.mobileInput, self.input.nextSibling);
        }
        catch (_a) { }
        bind(self.mobileInput, "change", function (e) {
            self.setDate((0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.getEventTarget)(e).value, false, self.mobileFormatStr);
            triggerEvent("onChange");
            triggerEvent("onClose");
        });
    }
    function toggle(e) {
        if (self.isOpen === true)
            return self.close();
        self.open(e);
    }
    function triggerEvent(event, data) {
        if (self.config === undefined)
            return;
        var hooks = self.config[event];
        if (hooks !== undefined && hooks.length > 0) {
            for (var i = 0; hooks[i] && i < hooks.length; i++)
                hooks[i](self.selectedDates, self.input.value, self, data);
        }
        if (event === "onChange") {
            self.input.dispatchEvent(createEvent("change"));
            self.input.dispatchEvent(createEvent("input"));
        }
    }
    function createEvent(name) {
        var e = document.createEvent("Event");
        e.initEvent(name, true, true);
        return e;
    }
    function isDateSelected(date) {
        for (var i = 0; i < self.selectedDates.length; i++) {
            var selectedDate = self.selectedDates[i];
            if (selectedDate instanceof Date &&
                (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.compareDates)(selectedDate, date) === 0)
                return "" + i;
        }
        return false;
    }
    function isDateInRange(date) {
        if (self.config.mode !== "range" || self.selectedDates.length < 2)
            return false;
        return ((0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.compareDates)(date, self.selectedDates[0]) >= 0 &&
            (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.compareDates)(date, self.selectedDates[1]) <= 0);
    }
    function updateNavigationCurrentMonth() {
        if (self.config.noCalendar || self.isMobile || !self.monthNav)
            return;
        self.yearElements.forEach(function (yearElement, i) {
            var d = new Date(self.currentYear, self.currentMonth, 1);
            d.setMonth(self.currentMonth + i);
            if (self.config.showMonths > 1 ||
                self.config.monthSelectorType === "static") {
                self.monthElements[i].textContent =
                    (0,_utils_formatting__WEBPACK_IMPORTED_MODULE_5__.monthToStr)(d.getMonth(), self.config.shorthandCurrentMonth, self.l10n) + " ";
            }
            else {
                self.monthsDropdownContainer.value = d.getMonth().toString();
            }
            yearElement.value = d.getFullYear().toString();
        });
        self._hidePrevMonthArrow =
            self.config.minDate !== undefined &&
                (self.currentYear === self.config.minDate.getFullYear()
                    ? self.currentMonth <= self.config.minDate.getMonth()
                    : self.currentYear < self.config.minDate.getFullYear());
        self._hideNextMonthArrow =
            self.config.maxDate !== undefined &&
                (self.currentYear === self.config.maxDate.getFullYear()
                    ? self.currentMonth + 1 > self.config.maxDate.getMonth()
                    : self.currentYear > self.config.maxDate.getFullYear());
    }
    function getDateStr(specificFormat) {
        var format = specificFormat ||
            (self.config.altInput ? self.config.altFormat : self.config.dateFormat);
        return self.selectedDates
            .map(function (dObj) { return self.formatDate(dObj, format); })
            .filter(function (d, i, arr) {
            return self.config.mode !== "range" ||
                self.config.enableTime ||
                arr.indexOf(d) === i;
        })
            .join(self.config.mode !== "range"
            ? self.config.conjunction
            : self.l10n.rangeSeparator);
    }
    function updateValue(triggerChange) {
        if (triggerChange === void 0) { triggerChange = true; }
        if (self.mobileInput !== undefined && self.mobileFormatStr) {
            self.mobileInput.value =
                self.latestSelectedDateObj !== undefined
                    ? self.formatDate(self.latestSelectedDateObj, self.mobileFormatStr)
                    : "";
        }
        self.input.value = getDateStr(self.config.dateFormat);
        if (self.altInput !== undefined) {
            self.altInput.value = getDateStr(self.config.altFormat);
        }
        if (triggerChange !== false)
            triggerEvent("onValueUpdate");
    }
    function onMonthNavClick(e) {
        var eventTarget = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.getEventTarget)(e);
        var isPrevMonth = self.prevMonthNav.contains(eventTarget);
        var isNextMonth = self.nextMonthNav.contains(eventTarget);
        if (isPrevMonth || isNextMonth) {
            changeMonth(isPrevMonth ? -1 : 1);
        }
        else if (self.yearElements.indexOf(eventTarget) >= 0) {
            eventTarget.select();
        }
        else if (eventTarget.classList.contains("arrowUp")) {
            self.changeYear(self.currentYear + 1);
        }
        else if (eventTarget.classList.contains("arrowDown")) {
            self.changeYear(self.currentYear - 1);
        }
    }
    function timeWrapper(e) {
        e.preventDefault();
        var isKeyDown = e.type === "keydown", eventTarget = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.getEventTarget)(e), input = eventTarget;
        if (self.amPM !== undefined && eventTarget === self.amPM) {
            self.amPM.textContent =
                self.l10n.amPM[(0,_utils__WEBPACK_IMPORTED_MODULE_2__.int)(self.amPM.textContent === self.l10n.amPM[0])];
        }
        var min = parseFloat(input.getAttribute("min")), max = parseFloat(input.getAttribute("max")), step = parseFloat(input.getAttribute("step")), curValue = parseInt(input.value, 10), delta = e.delta ||
            (isKeyDown ? (e.which === 38 ? 1 : -1) : 0);
        var newValue = curValue + step * delta;
        if (typeof input.value !== "undefined" && input.value.length === 2) {
            var isHourElem = input === self.hourElement, isMinuteElem = input === self.minuteElement;
            if (newValue < min) {
                newValue =
                    max +
                        newValue +
                        (0,_utils__WEBPACK_IMPORTED_MODULE_2__.int)(!isHourElem) +
                        ((0,_utils__WEBPACK_IMPORTED_MODULE_2__.int)(isHourElem) && (0,_utils__WEBPACK_IMPORTED_MODULE_2__.int)(!self.amPM));
                if (isMinuteElem)
                    incrementNumInput(undefined, -1, self.hourElement);
            }
            else if (newValue > max) {
                newValue =
                    input === self.hourElement ? newValue - max - (0,_utils__WEBPACK_IMPORTED_MODULE_2__.int)(!self.amPM) : min;
                if (isMinuteElem)
                    incrementNumInput(undefined, 1, self.hourElement);
            }
            if (self.amPM &&
                isHourElem &&
                (step === 1
                    ? newValue + curValue === 23
                    : Math.abs(newValue - curValue) > step)) {
                self.amPM.textContent =
                    self.l10n.amPM[(0,_utils__WEBPACK_IMPORTED_MODULE_2__.int)(self.amPM.textContent === self.l10n.amPM[0])];
            }
            input.value = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.pad)(newValue);
        }
    }
    init();
    return self;
}
function _flatpickr(nodeList, config) {
    var nodes = Array.prototype.slice
        .call(nodeList)
        .filter(function (x) { return x instanceof HTMLElement; });
    var instances = [];
    for (var i = 0; i < nodes.length; i++) {
        var node = nodes[i];
        try {
            if (node.getAttribute("data-fp-omit") !== null)
                continue;
            if (node._flatpickr !== undefined) {
                node._flatpickr.destroy();
                node._flatpickr = undefined;
            }
            node._flatpickr = FlatpickrInstance(node, config || {});
            instances.push(node._flatpickr);
        }
        catch (e) {
            console.error(e);
        }
    }
    return instances.length === 1 ? instances[0] : instances;
}
if (typeof HTMLElement !== "undefined" &&
    typeof HTMLCollection !== "undefined" &&
    typeof NodeList !== "undefined") {
    HTMLCollection.prototype.flatpickr = NodeList.prototype.flatpickr = function (config) {
        return _flatpickr(this, config);
    };
    HTMLElement.prototype.flatpickr = function (config) {
        return _flatpickr([this], config);
    };
}
var flatpickr = function (selector, config) {
    if (typeof selector === "string") {
        return _flatpickr(window.document.querySelectorAll(selector), config);
    }
    else if (selector instanceof Node) {
        return _flatpickr([selector], config);
    }
    else {
        return _flatpickr(selector, config);
    }
};
flatpickr.defaultConfig = {};
flatpickr.l10ns = {
    en: __assign({}, _l10n_default__WEBPACK_IMPORTED_MODULE_1__["default"]),
    default: __assign({}, _l10n_default__WEBPACK_IMPORTED_MODULE_1__["default"]),
};
flatpickr.localize = function (l10n) {
    flatpickr.l10ns.default = __assign(__assign({}, flatpickr.l10ns.default), l10n);
};
flatpickr.setDefaults = function (config) {
    flatpickr.defaultConfig = __assign(__assign({}, flatpickr.defaultConfig), config);
};
flatpickr.parseDate = (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.createDateParser)({});
flatpickr.formatDate = (0,_utils_dates__WEBPACK_IMPORTED_MODULE_4__.createDateFormatter)({});
flatpickr.compareDates = _utils_dates__WEBPACK_IMPORTED_MODULE_4__.compareDates;
if (typeof jQuery !== "undefined" && typeof jQuery.fn !== "undefined") {
    jQuery.fn.flatpickr = function (config) {
        return _flatpickr(this, config);
    };
}
Date.prototype.fp_incr = function (days) {
    return new Date(this.getFullYear(), this.getMonth(), this.getDate() + (typeof days === "string" ? parseInt(days, 10) : days));
};
if (typeof window !== "undefined") {
    window.flatpickr = flatpickr;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (flatpickr);


/***/ }),

/***/ "./node_modules/flatpickr/dist/esm/l10n/default.js":
/*!*********************************************************!*\
  !*** ./node_modules/flatpickr/dist/esm/l10n/default.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   english: () => (/* binding */ english)
/* harmony export */ });
var english = {
    weekdays: {
        shorthand: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        longhand: [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
        ],
    },
    months: {
        shorthand: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
        ],
        longhand: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
        ],
    },
    daysInMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    firstDayOfWeek: 0,
    ordinal: function (nth) {
        var s = nth % 100;
        if (s > 3 && s < 21)
            return "th";
        switch (s % 10) {
            case 1:
                return "st";
            case 2:
                return "nd";
            case 3:
                return "rd";
            default:
                return "th";
        }
    },
    rangeSeparator: " to ",
    weekAbbreviation: "Wk",
    scrollTitle: "Scroll to increment",
    toggleTitle: "Click to toggle",
    amPM: ["AM", "PM"],
    yearAriaLabel: "Year",
    monthAriaLabel: "Month",
    hourAriaLabel: "Hour",
    minuteAriaLabel: "Minute",
    time_24hr: false,
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (english);


/***/ }),

/***/ "./node_modules/flatpickr/dist/esm/types/options.js":
/*!**********************************************************!*\
  !*** ./node_modules/flatpickr/dist/esm/types/options.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HOOKS: () => (/* binding */ HOOKS),
/* harmony export */   defaults: () => (/* binding */ defaults)
/* harmony export */ });
var HOOKS = [
    "onChange",
    "onClose",
    "onDayCreate",
    "onDestroy",
    "onKeyDown",
    "onMonthChange",
    "onOpen",
    "onParseConfig",
    "onReady",
    "onValueUpdate",
    "onYearChange",
    "onPreCalendarPosition",
];
var defaults = {
    _disable: [],
    allowInput: false,
    allowInvalidPreload: false,
    altFormat: "F j, Y",
    altInput: false,
    altInputClass: "form-control input",
    animate: typeof window === "object" &&
        window.navigator.userAgent.indexOf("MSIE") === -1,
    ariaDateFormat: "F j, Y",
    autoFillDefaultTime: true,
    clickOpens: true,
    closeOnSelect: true,
    conjunction: ", ",
    dateFormat: "Y-m-d",
    defaultHour: 12,
    defaultMinute: 0,
    defaultSeconds: 0,
    disable: [],
    disableMobile: false,
    enableSeconds: false,
    enableTime: false,
    errorHandler: function (err) {
        return typeof console !== "undefined" && console.warn(err);
    },
    getWeek: function (givenDate) {
        var date = new Date(givenDate.getTime());
        date.setHours(0, 0, 0, 0);
        date.setDate(date.getDate() + 3 - ((date.getDay() + 6) % 7));
        var week1 = new Date(date.getFullYear(), 0, 4);
        return (1 +
            Math.round(((date.getTime() - week1.getTime()) / 86400000 -
                3 +
                ((week1.getDay() + 6) % 7)) /
                7));
    },
    hourIncrement: 1,
    ignoredFocusElements: [],
    inline: false,
    locale: "default",
    minuteIncrement: 5,
    mode: "single",
    monthSelectorType: "dropdown",
    nextArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z' /></svg>",
    noCalendar: false,
    now: new Date(),
    onChange: [],
    onClose: [],
    onDayCreate: [],
    onDestroy: [],
    onKeyDown: [],
    onMonthChange: [],
    onOpen: [],
    onParseConfig: [],
    onReady: [],
    onValueUpdate: [],
    onYearChange: [],
    onPreCalendarPosition: [],
    plugins: [],
    position: "auto",
    positionElement: undefined,
    prevArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z' /></svg>",
    shorthandCurrentMonth: false,
    showMonths: 1,
    static: false,
    time_24hr: false,
    weekNumbers: false,
    wrap: false,
};


/***/ }),

/***/ "./node_modules/flatpickr/dist/esm/utils/dates.js":
/*!********************************************************!*\
  !*** ./node_modules/flatpickr/dist/esm/utils/dates.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   calculateSecondsSinceMidnight: () => (/* binding */ calculateSecondsSinceMidnight),
/* harmony export */   compareDates: () => (/* binding */ compareDates),
/* harmony export */   compareTimes: () => (/* binding */ compareTimes),
/* harmony export */   createDateFormatter: () => (/* binding */ createDateFormatter),
/* harmony export */   createDateParser: () => (/* binding */ createDateParser),
/* harmony export */   duration: () => (/* binding */ duration),
/* harmony export */   getDefaultHours: () => (/* binding */ getDefaultHours),
/* harmony export */   isBetween: () => (/* binding */ isBetween),
/* harmony export */   parseSeconds: () => (/* binding */ parseSeconds)
/* harmony export */ });
/* harmony import */ var _formatting__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formatting */ "./node_modules/flatpickr/dist/esm/utils/formatting.js");
/* harmony import */ var _types_options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types/options */ "./node_modules/flatpickr/dist/esm/types/options.js");
/* harmony import */ var _l10n_default__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../l10n/default */ "./node_modules/flatpickr/dist/esm/l10n/default.js");



var createDateFormatter = function (_a) {
    var _b = _a.config, config = _b === void 0 ? _types_options__WEBPACK_IMPORTED_MODULE_1__.defaults : _b, _c = _a.l10n, l10n = _c === void 0 ? _l10n_default__WEBPACK_IMPORTED_MODULE_2__.english : _c, _d = _a.isMobile, isMobile = _d === void 0 ? false : _d;
    return function (dateObj, frmt, overrideLocale) {
        var locale = overrideLocale || l10n;
        if (config.formatDate !== undefined && !isMobile) {
            return config.formatDate(dateObj, frmt, locale);
        }
        return frmt
            .split("")
            .map(function (c, i, arr) {
            return _formatting__WEBPACK_IMPORTED_MODULE_0__.formats[c] && arr[i - 1] !== "\\"
                ? _formatting__WEBPACK_IMPORTED_MODULE_0__.formats[c](dateObj, locale, config)
                : c !== "\\"
                    ? c
                    : "";
        })
            .join("");
    };
};
var createDateParser = function (_a) {
    var _b = _a.config, config = _b === void 0 ? _types_options__WEBPACK_IMPORTED_MODULE_1__.defaults : _b, _c = _a.l10n, l10n = _c === void 0 ? _l10n_default__WEBPACK_IMPORTED_MODULE_2__.english : _c;
    return function (date, givenFormat, timeless, customLocale) {
        if (date !== 0 && !date)
            return undefined;
        var locale = customLocale || l10n;
        var parsedDate;
        var dateOrig = date;
        if (date instanceof Date)
            parsedDate = new Date(date.getTime());
        else if (typeof date !== "string" &&
            date.toFixed !== undefined)
            parsedDate = new Date(date);
        else if (typeof date === "string") {
            var format = givenFormat || (config || _types_options__WEBPACK_IMPORTED_MODULE_1__.defaults).dateFormat;
            var datestr = String(date).trim();
            if (datestr === "today") {
                parsedDate = new Date();
                timeless = true;
            }
            else if (config && config.parseDate) {
                parsedDate = config.parseDate(date, format);
            }
            else if (/Z$/.test(datestr) ||
                /GMT$/.test(datestr)) {
                parsedDate = new Date(date);
            }
            else {
                var matched = void 0, ops = [];
                for (var i = 0, matchIndex = 0, regexStr = ""; i < format.length; i++) {
                    var token = format[i];
                    var isBackSlash = token === "\\";
                    var escaped = format[i - 1] === "\\" || isBackSlash;
                    if (_formatting__WEBPACK_IMPORTED_MODULE_0__.tokenRegex[token] && !escaped) {
                        regexStr += _formatting__WEBPACK_IMPORTED_MODULE_0__.tokenRegex[token];
                        var match = new RegExp(regexStr).exec(date);
                        if (match && (matched = true)) {
                            ops[token !== "Y" ? "push" : "unshift"]({
                                fn: _formatting__WEBPACK_IMPORTED_MODULE_0__.revFormat[token],
                                val: match[++matchIndex],
                            });
                        }
                    }
                    else if (!isBackSlash)
                        regexStr += ".";
                }
                parsedDate =
                    !config || !config.noCalendar
                        ? new Date(new Date().getFullYear(), 0, 1, 0, 0, 0, 0)
                        : new Date(new Date().setHours(0, 0, 0, 0));
                ops.forEach(function (_a) {
                    var fn = _a.fn, val = _a.val;
                    return (parsedDate = fn(parsedDate, val, locale) || parsedDate);
                });
                parsedDate = matched ? parsedDate : undefined;
            }
        }
        if (!(parsedDate instanceof Date && !isNaN(parsedDate.getTime()))) {
            config.errorHandler(new Error("Invalid date provided: " + dateOrig));
            return undefined;
        }
        if (timeless === true)
            parsedDate.setHours(0, 0, 0, 0);
        return parsedDate;
    };
};
function compareDates(date1, date2, timeless) {
    if (timeless === void 0) { timeless = true; }
    if (timeless !== false) {
        return (new Date(date1.getTime()).setHours(0, 0, 0, 0) -
            new Date(date2.getTime()).setHours(0, 0, 0, 0));
    }
    return date1.getTime() - date2.getTime();
}
function compareTimes(date1, date2) {
    return (3600 * (date1.getHours() - date2.getHours()) +
        60 * (date1.getMinutes() - date2.getMinutes()) +
        date1.getSeconds() -
        date2.getSeconds());
}
var isBetween = function (ts, ts1, ts2) {
    return ts > Math.min(ts1, ts2) && ts < Math.max(ts1, ts2);
};
var calculateSecondsSinceMidnight = function (hours, minutes, seconds) {
    return hours * 3600 + minutes * 60 + seconds;
};
var parseSeconds = function (secondsSinceMidnight) {
    var hours = Math.floor(secondsSinceMidnight / 3600), minutes = (secondsSinceMidnight - hours * 3600) / 60;
    return [hours, minutes, secondsSinceMidnight - hours * 3600 - minutes * 60];
};
var duration = {
    DAY: 86400000,
};
function getDefaultHours(config) {
    var hours = config.defaultHour;
    var minutes = config.defaultMinute;
    var seconds = config.defaultSeconds;
    if (config.minDate !== undefined) {
        var minHour = config.minDate.getHours();
        var minMinutes = config.minDate.getMinutes();
        var minSeconds = config.minDate.getSeconds();
        if (hours < minHour) {
            hours = minHour;
        }
        if (hours === minHour && minutes < minMinutes) {
            minutes = minMinutes;
        }
        if (hours === minHour && minutes === minMinutes && seconds < minSeconds)
            seconds = config.minDate.getSeconds();
    }
    if (config.maxDate !== undefined) {
        var maxHr = config.maxDate.getHours();
        var maxMinutes = config.maxDate.getMinutes();
        hours = Math.min(hours, maxHr);
        if (hours === maxHr)
            minutes = Math.min(maxMinutes, minutes);
        if (hours === maxHr && minutes === maxMinutes)
            seconds = config.maxDate.getSeconds();
    }
    return { hours: hours, minutes: minutes, seconds: seconds };
}


/***/ }),

/***/ "./node_modules/flatpickr/dist/esm/utils/dom.js":
/*!******************************************************!*\
  !*** ./node_modules/flatpickr/dist/esm/utils/dom.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clearNode: () => (/* binding */ clearNode),
/* harmony export */   createElement: () => (/* binding */ createElement),
/* harmony export */   createNumberInput: () => (/* binding */ createNumberInput),
/* harmony export */   findParent: () => (/* binding */ findParent),
/* harmony export */   getEventTarget: () => (/* binding */ getEventTarget),
/* harmony export */   toggleClass: () => (/* binding */ toggleClass)
/* harmony export */ });
function toggleClass(elem, className, bool) {
    if (bool === true)
        return elem.classList.add(className);
    elem.classList.remove(className);
}
function createElement(tag, className, content) {
    var e = window.document.createElement(tag);
    className = className || "";
    content = content || "";
    e.className = className;
    if (content !== undefined)
        e.textContent = content;
    return e;
}
function clearNode(node) {
    while (node.firstChild)
        node.removeChild(node.firstChild);
}
function findParent(node, condition) {
    if (condition(node))
        return node;
    else if (node.parentNode)
        return findParent(node.parentNode, condition);
    return undefined;
}
function createNumberInput(inputClassName, opts) {
    var wrapper = createElement("div", "numInputWrapper"), numInput = createElement("input", "numInput " + inputClassName), arrowUp = createElement("span", "arrowUp"), arrowDown = createElement("span", "arrowDown");
    if (navigator.userAgent.indexOf("MSIE 9.0") === -1) {
        numInput.type = "number";
    }
    else {
        numInput.type = "text";
        numInput.pattern = "\\d*";
    }
    if (opts !== undefined)
        for (var key in opts)
            numInput.setAttribute(key, opts[key]);
    wrapper.appendChild(numInput);
    wrapper.appendChild(arrowUp);
    wrapper.appendChild(arrowDown);
    return wrapper;
}
function getEventTarget(event) {
    try {
        if (typeof event.composedPath === "function") {
            var path = event.composedPath();
            return path[0];
        }
        return event.target;
    }
    catch (error) {
        return event.target;
    }
}


/***/ }),

/***/ "./node_modules/flatpickr/dist/esm/utils/formatting.js":
/*!*************************************************************!*\
  !*** ./node_modules/flatpickr/dist/esm/utils/formatting.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formats: () => (/* binding */ formats),
/* harmony export */   monthToStr: () => (/* binding */ monthToStr),
/* harmony export */   revFormat: () => (/* binding */ revFormat),
/* harmony export */   tokenRegex: () => (/* binding */ tokenRegex)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./node_modules/flatpickr/dist/esm/utils/index.js");

var doNothing = function () { return undefined; };
var monthToStr = function (monthNumber, shorthand, locale) { return locale.months[shorthand ? "shorthand" : "longhand"][monthNumber]; };
var revFormat = {
    D: doNothing,
    F: function (dateObj, monthName, locale) {
        dateObj.setMonth(locale.months.longhand.indexOf(monthName));
    },
    G: function (dateObj, hour) {
        dateObj.setHours((dateObj.getHours() >= 12 ? 12 : 0) + parseFloat(hour));
    },
    H: function (dateObj, hour) {
        dateObj.setHours(parseFloat(hour));
    },
    J: function (dateObj, day) {
        dateObj.setDate(parseFloat(day));
    },
    K: function (dateObj, amPM, locale) {
        dateObj.setHours((dateObj.getHours() % 12) +
            12 * (0,_utils__WEBPACK_IMPORTED_MODULE_0__.int)(new RegExp(locale.amPM[1], "i").test(amPM)));
    },
    M: function (dateObj, shortMonth, locale) {
        dateObj.setMonth(locale.months.shorthand.indexOf(shortMonth));
    },
    S: function (dateObj, seconds) {
        dateObj.setSeconds(parseFloat(seconds));
    },
    U: function (_, unixSeconds) { return new Date(parseFloat(unixSeconds) * 1000); },
    W: function (dateObj, weekNum, locale) {
        var weekNumber = parseInt(weekNum);
        var date = new Date(dateObj.getFullYear(), 0, 2 + (weekNumber - 1) * 7, 0, 0, 0, 0);
        date.setDate(date.getDate() - date.getDay() + locale.firstDayOfWeek);
        return date;
    },
    Y: function (dateObj, year) {
        dateObj.setFullYear(parseFloat(year));
    },
    Z: function (_, ISODate) { return new Date(ISODate); },
    d: function (dateObj, day) {
        dateObj.setDate(parseFloat(day));
    },
    h: function (dateObj, hour) {
        dateObj.setHours((dateObj.getHours() >= 12 ? 12 : 0) + parseFloat(hour));
    },
    i: function (dateObj, minutes) {
        dateObj.setMinutes(parseFloat(minutes));
    },
    j: function (dateObj, day) {
        dateObj.setDate(parseFloat(day));
    },
    l: doNothing,
    m: function (dateObj, month) {
        dateObj.setMonth(parseFloat(month) - 1);
    },
    n: function (dateObj, month) {
        dateObj.setMonth(parseFloat(month) - 1);
    },
    s: function (dateObj, seconds) {
        dateObj.setSeconds(parseFloat(seconds));
    },
    u: function (_, unixMillSeconds) {
        return new Date(parseFloat(unixMillSeconds));
    },
    w: doNothing,
    y: function (dateObj, year) {
        dateObj.setFullYear(2000 + parseFloat(year));
    },
};
var tokenRegex = {
    D: "",
    F: "",
    G: "(\\d\\d|\\d)",
    H: "(\\d\\d|\\d)",
    J: "(\\d\\d|\\d)\\w+",
    K: "",
    M: "",
    S: "(\\d\\d|\\d)",
    U: "(.+)",
    W: "(\\d\\d|\\d)",
    Y: "(\\d{4})",
    Z: "(.+)",
    d: "(\\d\\d|\\d)",
    h: "(\\d\\d|\\d)",
    i: "(\\d\\d|\\d)",
    j: "(\\d\\d|\\d)",
    l: "",
    m: "(\\d\\d|\\d)",
    n: "(\\d\\d|\\d)",
    s: "(\\d\\d|\\d)",
    u: "(.+)",
    w: "(\\d\\d|\\d)",
    y: "(\\d{2})",
};
var formats = {
    Z: function (date) { return date.toISOString(); },
    D: function (date, locale, options) {
        return locale.weekdays.shorthand[formats.w(date, locale, options)];
    },
    F: function (date, locale, options) {
        return monthToStr(formats.n(date, locale, options) - 1, false, locale);
    },
    G: function (date, locale, options) {
        return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.pad)(formats.h(date, locale, options));
    },
    H: function (date) { return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.pad)(date.getHours()); },
    J: function (date, locale) {
        return locale.ordinal !== undefined
            ? date.getDate() + locale.ordinal(date.getDate())
            : date.getDate();
    },
    K: function (date, locale) { return locale.amPM[(0,_utils__WEBPACK_IMPORTED_MODULE_0__.int)(date.getHours() > 11)]; },
    M: function (date, locale) {
        return monthToStr(date.getMonth(), true, locale);
    },
    S: function (date) { return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.pad)(date.getSeconds()); },
    U: function (date) { return date.getTime() / 1000; },
    W: function (date, _, options) {
        return options.getWeek(date);
    },
    Y: function (date) { return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.pad)(date.getFullYear(), 4); },
    d: function (date) { return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.pad)(date.getDate()); },
    h: function (date) { return (date.getHours() % 12 ? date.getHours() % 12 : 12); },
    i: function (date) { return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.pad)(date.getMinutes()); },
    j: function (date) { return date.getDate(); },
    l: function (date, locale) {
        return locale.weekdays.longhand[date.getDay()];
    },
    m: function (date) { return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.pad)(date.getMonth() + 1); },
    n: function (date) { return date.getMonth() + 1; },
    s: function (date) { return date.getSeconds(); },
    u: function (date) { return date.getTime(); },
    w: function (date) { return date.getDay(); },
    y: function (date) { return String(date.getFullYear()).substring(2); },
};


/***/ }),

/***/ "./node_modules/flatpickr/dist/esm/utils/index.js":
/*!********************************************************!*\
  !*** ./node_modules/flatpickr/dist/esm/utils/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   arrayify: () => (/* binding */ arrayify),
/* harmony export */   debounce: () => (/* binding */ debounce),
/* harmony export */   int: () => (/* binding */ int),
/* harmony export */   pad: () => (/* binding */ pad)
/* harmony export */ });
var pad = function (number, length) {
    if (length === void 0) { length = 2; }
    return ("000" + number).slice(length * -1);
};
var int = function (bool) { return (bool === true ? 1 : 0); };
function debounce(fn, wait) {
    var t;
    return function () {
        var _this = this;
        var args = arguments;
        clearTimeout(t);
        t = setTimeout(function () { return fn.apply(_this, args); }, wait);
    };
}
var arrayify = function (obj) {
    return obj instanceof Array ? obj : [obj];
};


/***/ }),

/***/ "./node_modules/flatpickr/dist/esm/utils/polyfills.js":
/*!************************************************************!*\
  !*** ./node_modules/flatpickr/dist/esm/utils/polyfills.js ***!
  \************************************************************/
/***/ (() => {

"use strict";

if (typeof Object.assign !== "function") {
    Object.assign = function (target) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (!target) {
            throw TypeError("Cannot convert undefined or null to object");
        }
        var _loop_1 = function (source) {
            if (source) {
                Object.keys(source).forEach(function (key) { return (target[key] = source[key]); });
            }
        };
        for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
            var source = args_1[_a];
            _loop_1(source);
        }
        return target;
    };
}


/***/ }),

/***/ "./node_modules/flatpickr/dist/l10n/ru.js":
/*!************************************************!*\
  !*** ./node_modules/flatpickr/dist/l10n/ru.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports) {

(function (global, factory) {
   true ? factory(exports) :
  0;
}(this, (function (exports) { 'use strict';

  var fp = typeof window !== "undefined" && window.flatpickr !== undefined
      ? window.flatpickr
      : {
          l10ns: {},
      };
  var Russian = {
      weekdays: {
          shorthand: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
          longhand: [
              "Воскресенье",
              "Понедельник",
              "Вторник",
              "Среда",
              "Четверг",
              "Пятница",
              "Суббота",
          ],
      },
      months: {
          shorthand: [
              "Янв",
              "Фев",
              "Март",
              "Апр",
              "Май",
              "Июнь",
              "Июль",
              "Авг",
              "Сен",
              "Окт",
              "Ноя",
              "Дек",
          ],
          longhand: [
              "Январь",
              "Февраль",
              "Март",
              "Апрель",
              "Май",
              "Июнь",
              "Июль",
              "Август",
              "Сентябрь",
              "Октябрь",
              "Ноябрь",
              "Декабрь",
          ],
      },
      firstDayOfWeek: 1,
      ordinal: function () {
          return "";
      },
      rangeSeparator: " — ",
      weekAbbreviation: "Нед.",
      scrollTitle: "Прокрутите для увеличения",
      toggleTitle: "Нажмите для переключения",
      amPM: ["ДП", "ПП"],
      yearAriaLabel: "Год",
      time_24hr: true,
  };
  fp.l10ns.ru = Russian;
  var ru = fp.l10ns;

  exports.Russian = Russian;
  exports.default = ru;

  Object.defineProperty(exports, '__esModule', { value: true });

})));


/***/ }),

/***/ "./node_modules/slim-select/dist/slimselect.js":
/*!*****************************************************!*\
  !*** ./node_modules/slim-select/dist/slimselect.js ***!
  \*****************************************************/
/***/ (function(module) {

(function (global, factory) {
     true ? module.exports = factory() :
    0;
})(this, (function () { 'use strict';

    class CssClasses {
        constructor(classes) {
            if (!classes) {
                classes = {};
            }
            this.main = classes.main || 'ss-main';
            this.placeholder = classes.placeholder || 'ss-placeholder';
            this.values = classes.values || 'ss-values';
            this.single = classes.single || 'ss-single';
            this.max = classes.max || 'ss-max';
            this.value = classes.value || 'ss-value';
            this.valueText = classes.valueText || 'ss-value-text';
            this.valueDelete = classes.valueDelete || 'ss-value-delete';
            this.valueOut = classes.valueOut || 'ss-value-out';
            this.deselect = classes.deselect || 'ss-deselect';
            this.deselectPath = classes.deselectPath || 'M10,10 L90,90 M10,90 L90,10';
            this.arrow = classes.arrow || 'ss-arrow';
            this.arrowClose = classes.arrowClose || 'M10,30 L50,70 L90,30';
            this.arrowOpen = classes.arrowOpen || 'M10,70 L50,30 L90,70';
            this.content = classes.content || 'ss-content';
            this.openAbove = classes.openAbove || 'ss-open-above';
            this.openBelow = classes.openBelow || 'ss-open-below';
            this.search = classes.search || 'ss-search';
            this.searchHighlighter = classes.searchHighlighter || 'ss-search-highlight';
            this.searching = classes.searching || 'ss-searching';
            this.addable = classes.addable || 'ss-addable';
            this.addablePath = classes.addablePath || 'M50,10 L50,90 M10,50 L90,50';
            this.list = classes.list || 'ss-list';
            this.optgroup = classes.optgroup || 'ss-optgroup';
            this.optgroupLabel = classes.optgroupLabel || 'ss-optgroup-label';
            this.optgroupLabelText = classes.optgroupLabelText || 'ss-optgroup-label-text';
            this.optgroupActions = classes.optgroupActions || 'ss-optgroup-actions';
            this.optgroupSelectAll = classes.optgroupSelectAll || 'ss-selectall';
            this.optgroupSelectAllBox = classes.optgroupSelectAllBox || 'M60,10 L10,10 L10,90 L90,90 L90,50';
            this.optgroupSelectAllCheck = classes.optgroupSelectAllCheck || 'M30,45 L50,70 L90,10';
            this.optgroupClosable = classes.optgroupClosable || 'ss-closable';
            this.option = classes.option || 'ss-option';
            this.optionDelete = classes.optionDelete || 'M10,10 L90,90 M10,90 L90,10';
            this.highlighted = classes.highlighted || 'ss-highlighted';
            this.open = classes.open || 'ss-open';
            this.close = classes.close || 'ss-close';
            this.selected = classes.selected || 'ss-selected';
            this.error = classes.error || 'ss-error';
            this.disabled = classes.disabled || 'ss-disabled';
            this.hide = classes.hide || 'ss-hide';
        }
    }

    function generateID() {
        return Math.random().toString(36).substring(2, 10);
    }
    function hasClassInTree(element, className) {
        function hasClass(e, c) {
            if (c && e && e.classList && e.classList.contains(c)) {
                return e;
            }
            if (c && e && e.dataset && e.dataset.id && e.dataset.id === className) {
                return e;
            }
            return null;
        }
        function parentByClass(e, c) {
            if (!e || e === document) {
                return null;
            }
            else if (hasClass(e, c)) {
                return e;
            }
            else {
                return parentByClass(e.parentNode, c);
            }
        }
        return hasClass(element, className) || parentByClass(element, className);
    }
    function debounce(func, wait = 50, immediate = false) {
        let timeout;
        return function (...args) {
            const context = self;
            const later = () => {
                timeout = null;
                if (!immediate) {
                    func.apply(context, args);
                }
            };
            const callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) {
                func.apply(context, args);
            }
        };
    }
    function isEqual(a, b) {
        return JSON.stringify(a) === JSON.stringify(b);
    }
    function kebabCase(str) {
        const result = str.replace(/[A-Z\u00C0-\u00D6\u00D8-\u00DE]/g, (match) => '-' + match.toLowerCase());
        return str[0] === str[0].toUpperCase() ? result.substring(1) : result;
    }

    class Optgroup {
        constructor(optgroup) {
            this.id = !optgroup.id || optgroup.id === '' ? generateID() : optgroup.id;
            this.label = optgroup.label || '';
            this.selectAll = optgroup.selectAll === undefined ? false : optgroup.selectAll;
            this.selectAllText = optgroup.selectAllText || 'Select All';
            this.closable = optgroup.closable || 'off';
            this.options = [];
            if (optgroup.options) {
                for (const o of optgroup.options) {
                    this.options.push(new Option(o));
                }
            }
        }
    }
    class Option {
        constructor(option) {
            this.id = !option.id || option.id === '' ? generateID() : option.id;
            this.value = option.value === undefined ? option.text : option.value;
            this.text = option.text || '';
            this.html = option.html || '';
            this.defaultSelected = option.defaultSelected !== undefined ? option.defaultSelected : false;
            this.selected = option.selected !== undefined ? option.selected : false;
            this.display = option.display !== undefined ? option.display : true;
            this.disabled = option.disabled !== undefined ? option.disabled : false;
            this.mandatory = option.mandatory !== undefined ? option.mandatory : false;
            this.placeholder = option.placeholder !== undefined ? option.placeholder : false;
            this.class = option.class || '';
            this.style = option.style || '';
            this.data = option.data || {};
        }
    }
    class Store {
        constructor(type, data) {
            this.selectType = 'single';
            this.data = [];
            this.selectedOrder = [];
            this.selectType = type;
            this.setData(data);
        }
        validateDataArray(data) {
            if (!Array.isArray(data)) {
                return new Error('Data must be an array');
            }
            for (let dataObj of data) {
                if (dataObj instanceof Optgroup || 'label' in dataObj) {
                    if (!('label' in dataObj)) {
                        return new Error('Optgroup must have a label');
                    }
                    if ('options' in dataObj && dataObj.options) {
                        for (let option of dataObj.options) {
                            const validationError = this.validateOption(option);
                            if (validationError) {
                                return validationError;
                            }
                        }
                    }
                }
                else if (dataObj instanceof Option || 'text' in dataObj) {
                    const validationError = this.validateOption(dataObj);
                    if (validationError) {
                        return validationError;
                    }
                }
                else {
                    return new Error('Data object must be a valid optgroup or option');
                }
            }
            return null;
        }
        validateOption(option) {
            if (!('text' in option)) {
                return new Error('Option must have a text');
            }
            return null;
        }
        partialToFullData(data) {
            let dataFinal = [];
            data.forEach((dataObj) => {
                if (dataObj instanceof Optgroup || 'label' in dataObj) {
                    let optOptions = [];
                    if ('options' in dataObj && dataObj.options) {
                        dataObj.options.forEach((option) => {
                            optOptions.push(new Option(option));
                        });
                    }
                    if (optOptions.length > 0) {
                        dataFinal.push(new Optgroup(dataObj));
                    }
                }
                if (dataObj instanceof Option || 'text' in dataObj) {
                    dataFinal.push(new Option(dataObj));
                }
            });
            return dataFinal;
        }
        setData(data) {
            this.data = this.partialToFullData(data);
            if (this.selectType === 'single') {
                this.setSelectedBy('id', this.getSelected());
            }
        }
        getData() {
            return this.filter(null, true);
        }
        getDataOptions() {
            return this.filter(null, false);
        }
        addOption(option, addToStart = false) {
            if (addToStart) {
                let data = [new Option(option)];
                this.setData(data.concat(this.getData()));
            }
            else {
                this.setData(this.getData().concat(new Option(option)));
            }
        }
        setSelectedBy(selectedType, selectedValues) {
            let firstOption = null;
            let hasSelected = false;
            const selectedObjects = [];
            for (let dataObj of this.data) {
                if (dataObj instanceof Optgroup) {
                    for (let option of dataObj.options) {
                        if (!firstOption) {
                            firstOption = option;
                        }
                        option.selected = hasSelected ? false : selectedValues.includes(option[selectedType]);
                        if (option.selected) {
                            selectedObjects.push(option);
                            if (this.selectType === 'single') {
                                hasSelected = true;
                            }
                        }
                    }
                }
                if (dataObj instanceof Option) {
                    if (!firstOption) {
                        firstOption = dataObj;
                    }
                    dataObj.selected = hasSelected ? false : selectedValues.includes(dataObj[selectedType]);
                    if (dataObj.selected) {
                        selectedObjects.push(dataObj);
                        if (this.selectType === 'single') {
                            hasSelected = true;
                        }
                    }
                }
            }
            if (this.selectType === 'single' && firstOption && !hasSelected) {
                firstOption.selected = true;
                selectedObjects.push(firstOption);
            }
            const selectedIds = selectedValues.map((value) => {
                var _a;
                return ((_a = selectedObjects.find((option) => option[selectedType] === value)) === null || _a === void 0 ? void 0 : _a.id) || '';
            });
            this.selectedOrder = selectedIds;
        }
        getSelected() {
            return this.getSelectedOptions().map((option) => option.id);
        }
        getSelectedValues() {
            return this.getSelectedOptions().map((option) => option.value);
        }
        getSelectedOptions() {
            return this.filter((opt) => {
                return opt.selected;
            }, false);
        }
        getOptgroupByID(id) {
            for (let dataObj of this.data) {
                if (dataObj instanceof Optgroup && dataObj.id === id) {
                    return dataObj;
                }
            }
            return null;
        }
        getOptionByID(id) {
            let options = this.filter((opt) => {
                return opt.id === id;
            }, false);
            return options.length ? options[0] : null;
        }
        getSelectType() {
            return this.selectType;
        }
        getFirstOption() {
            let option = null;
            for (let dataObj of this.data) {
                if (dataObj instanceof Optgroup) {
                    option = dataObj.options[0];
                }
                else if (dataObj instanceof Option) {
                    option = dataObj;
                }
                if (option) {
                    break;
                }
            }
            return option;
        }
        search(search, searchFilter) {
            search = search.trim();
            if (search === '') {
                return this.getData();
            }
            return this.filter((opt) => {
                return searchFilter(opt, search);
            }, true);
        }
        filter(filter, includeOptgroup) {
            const dataSearch = [];
            this.data.forEach((dataObj) => {
                if (dataObj instanceof Optgroup) {
                    let optOptions = [];
                    dataObj.options.forEach((option) => {
                        if (!filter || filter(option)) {
                            if (!includeOptgroup) {
                                dataSearch.push(new Option(option));
                            }
                            else {
                                optOptions.push(new Option(option));
                            }
                        }
                    });
                    if (optOptions.length > 0) {
                        let optgroup = new Optgroup(dataObj);
                        optgroup.options = optOptions;
                        dataSearch.push(optgroup);
                    }
                }
                if (dataObj instanceof Option) {
                    if (!filter || filter(dataObj)) {
                        dataSearch.push(new Option(dataObj));
                    }
                }
            });
            return dataSearch;
        }
        selectedOrderOptions(options) {
            const newOrder = [];
            this.selectedOrder.forEach((id) => {
                const option = options.find((opt) => opt.id === id);
                if (option) {
                    newOrder.push(option);
                }
            });
            options.forEach((option) => {
                let isIn = false;
                newOrder.forEach((selectedOption) => {
                    if (option.id === selectedOption.id) {
                        isIn = true;
                        return;
                    }
                });
                if (!isIn) {
                    newOrder.push(option);
                }
            });
            return newOrder;
        }
    }

    class Render {
        constructor(settings, classes, store, callbacks) {
            this.store = store;
            this.settings = settings;
            this.classes = classes;
            this.callbacks = callbacks;
            this.lastSelectedOption = null;
            this.main = this.mainDiv();
            this.content = this.contentDiv();
            this.updateClassStyles();
            this.updateAriaAttributes();
            if (this.settings.contentLocation) {
                this.settings.contentLocation.appendChild(this.content.main);
            }
        }
        enable() {
            this.main.main.classList.remove(this.classes.disabled);
            this.content.search.input.disabled = false;
        }
        disable() {
            this.main.main.classList.add(this.classes.disabled);
            this.content.search.input.disabled = true;
        }
        open() {
            this.main.arrow.path.setAttribute('d', this.classes.arrowOpen);
            this.main.main.classList.add(this.settings.openPosition === 'up' ? this.classes.openAbove : this.classes.openBelow);
            this.main.main.setAttribute('aria-expanded', 'true');
            this.moveContent();
            const selectedOptions = this.store.getSelectedOptions();
            if (selectedOptions.length) {
                const selectedId = selectedOptions[selectedOptions.length - 1].id;
                const selectedOption = this.content.list.querySelector('[data-id="' + selectedId + '"]');
                if (selectedOption) {
                    this.ensureElementInView(this.content.list, selectedOption);
                }
            }
        }
        close() {
            this.main.main.classList.remove(this.classes.openAbove);
            this.main.main.classList.remove(this.classes.openBelow);
            this.main.main.setAttribute('aria-expanded', 'false');
            this.content.main.classList.remove(this.classes.openAbove);
            this.content.main.classList.remove(this.classes.openBelow);
            this.main.arrow.path.setAttribute('d', this.classes.arrowClose);
        }
        updateClassStyles() {
            this.main.main.className = '';
            this.main.main.removeAttribute('style');
            this.content.main.className = '';
            this.content.main.removeAttribute('style');
            this.main.main.classList.add(this.classes.main);
            this.content.main.classList.add(this.classes.content);
            if (this.settings.style !== '') {
                this.main.main.style.cssText = this.settings.style;
                this.content.main.style.cssText = this.settings.style;
            }
            if (this.settings.class.length) {
                for (const c of this.settings.class) {
                    if (c.trim() !== '') {
                        this.main.main.classList.add(c.trim());
                        this.content.main.classList.add(c.trim());
                    }
                }
            }
            if (this.settings.contentPosition === 'relative' || this.settings.contentPosition === 'fixed') {
                this.content.main.classList.add('ss-' + this.settings.contentPosition);
            }
        }
        updateAriaAttributes() {
            var _a;
            this.main.main.role = 'combobox';
            this.main.main.setAttribute('aria-haspopup', 'listbox');
            this.main.main.setAttribute('aria-controls', (_a = this.content.main.dataset.id) !== null && _a !== void 0 ? _a : '');
            this.main.main.setAttribute('aria-expanded', 'false');
            this.content.main.setAttribute('role', 'listbox');
        }
        mainDiv() {
            var _a;
            const main = document.createElement('div');
            main.dataset.id = this.settings.id;
            main.setAttribute('aria-label', this.settings.ariaLabel);
            main.tabIndex = 0;
            main.onkeydown = (e) => {
                switch (e.key) {
                    case 'ArrowUp':
                    case 'ArrowDown':
                        this.callbacks.open();
                        e.key === 'ArrowDown' ? this.highlight('down') : this.highlight('up');
                        return false;
                    case 'Tab':
                        this.callbacks.close();
                        return true;
                    case 'Enter':
                    case ' ':
                        this.callbacks.open();
                        const highlighted = this.content.list.querySelector('.' + this.classes.highlighted);
                        if (highlighted) {
                            highlighted.click();
                        }
                        return false;
                    case 'Escape':
                        this.callbacks.close();
                        return false;
                }
                if (e.key.length === 1) {
                    this.callbacks.open();
                }
                return true;
            };
            main.onclick = (e) => {
                if (this.settings.disabled) {
                    return;
                }
                this.settings.isOpen ? this.callbacks.close() : this.callbacks.open();
            };
            const values = document.createElement('div');
            values.classList.add(this.classes.values);
            main.appendChild(values);
            const deselect = document.createElement('div');
            deselect.classList.add(this.classes.deselect);
            const selectedOptions = (_a = this.store) === null || _a === void 0 ? void 0 : _a.getSelectedOptions();
            if (!this.settings.allowDeselect || (this.settings.isMultiple && selectedOptions && selectedOptions.length <= 0)) {
                deselect.classList.add(this.classes.hide);
            }
            else {
                deselect.classList.remove(this.classes.hide);
            }
            deselect.onclick = (e) => {
                e.stopPropagation();
                if (this.settings.disabled) {
                    return;
                }
                let shouldDelete = true;
                const before = this.store.getSelectedOptions();
                const after = [];
                if (this.callbacks.beforeChange) {
                    shouldDelete = this.callbacks.beforeChange(after, before) === true;
                }
                if (shouldDelete) {
                    if (this.settings.isMultiple) {
                        this.callbacks.setSelected([], false);
                        this.updateDeselectAll();
                    }
                    else {
                        const firstOption = this.store.getFirstOption();
                        const id = firstOption ? firstOption.id : '';
                        this.callbacks.setSelected(id, false);
                    }
                    if (this.settings.closeOnSelect) {
                        this.callbacks.close();
                    }
                    if (this.callbacks.afterChange) {
                        this.callbacks.afterChange(this.store.getSelectedOptions());
                    }
                }
            };
            const deselectSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            deselectSvg.setAttribute('viewBox', '0 0 100 100');
            const deselectPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            deselectPath.setAttribute('d', this.classes.deselectPath);
            deselectSvg.appendChild(deselectPath);
            deselect.appendChild(deselectSvg);
            main.appendChild(deselect);
            const arrow = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            arrow.classList.add(this.classes.arrow);
            arrow.setAttribute('viewBox', '0 0 100 100');
            const arrowPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            arrowPath.setAttribute('d', this.classes.arrowClose);
            if (this.settings.alwaysOpen) {
                arrow.classList.add(this.classes.hide);
            }
            arrow.appendChild(arrowPath);
            main.appendChild(arrow);
            return {
                main: main,
                values: values,
                deselect: {
                    main: deselect,
                    svg: deselectSvg,
                    path: deselectPath
                },
                arrow: {
                    main: arrow,
                    path: arrowPath
                }
            };
        }
        mainFocus(eventType) {
            if (eventType !== 'click') {
                this.main.main.focus({ preventScroll: true });
            }
        }
        placeholder() {
            const placeholderOption = this.store.filter((o) => o.placeholder, false);
            let placeholderText = this.settings.placeholderText;
            if (placeholderOption.length) {
                if (placeholderOption[0].html !== '') {
                    placeholderText = placeholderOption[0].html;
                }
                else if (placeholderOption[0].text !== '') {
                    placeholderText = placeholderOption[0].text;
                }
            }
            const placeholder = document.createElement('div');
            placeholder.classList.add(this.classes.placeholder);
            placeholder.innerHTML = placeholderText;
            return placeholder;
        }
        renderValues() {
            if (!this.settings.isMultiple) {
                this.renderSingleValue();
                return;
            }
            this.renderMultipleValues();
            this.updateDeselectAll();
        }
        renderSingleValue() {
            const selected = this.store.filter((o) => {
                return o.selected && !o.placeholder;
            }, false);
            const selectedSingle = selected.length > 0 ? selected[0] : null;
            if (!selectedSingle) {
                this.main.values.innerHTML = this.placeholder().outerHTML;
            }
            else {
                const singleValue = document.createElement('div');
                singleValue.classList.add(this.classes.single);
                if (selectedSingle.html) {
                    singleValue.innerHTML = selectedSingle.html;
                }
                else {
                    singleValue.innerText = selectedSingle.text;
                }
                this.main.values.innerHTML = singleValue.outerHTML;
            }
            if (!this.settings.allowDeselect || !selected.length) {
                this.main.deselect.main.classList.add(this.classes.hide);
            }
            else {
                this.main.deselect.main.classList.remove(this.classes.hide);
            }
        }
        renderMultipleValues() {
            let currentNodes = this.main.values.childNodes;
            let selectedOptions = this.store.filter((opt) => {
                return opt.selected && opt.display;
            }, false);
            if (selectedOptions.length === 0) {
                this.main.values.innerHTML = this.placeholder().outerHTML;
                return;
            }
            else {
                const placeholder = this.main.values.querySelector('.' + this.classes.placeholder);
                if (placeholder) {
                    placeholder.remove();
                }
            }
            if (selectedOptions.length > this.settings.maxValuesShown) {
                const singleValue = document.createElement('div');
                singleValue.classList.add(this.classes.max);
                singleValue.textContent = this.settings.maxValuesMessage.replace('{number}', selectedOptions.length.toString());
                this.main.values.innerHTML = singleValue.outerHTML;
                return;
            }
            else {
                const maxValuesMessage = this.main.values.querySelector('.' + this.classes.max);
                if (maxValuesMessage) {
                    maxValuesMessage.remove();
                }
            }
            if (this.settings.keepOrder) {
                selectedOptions = this.store.selectedOrderOptions(selectedOptions);
            }
            let removeNodes = [];
            for (let i = 0; i < currentNodes.length; i++) {
                const node = currentNodes[i];
                const id = node.getAttribute('data-id');
                if (id) {
                    const found = selectedOptions.filter((opt) => {
                        return opt.id === id;
                    }, false);
                    if (!found.length) {
                        removeNodes.push(node);
                    }
                }
            }
            for (const n of removeNodes) {
                n.classList.add(this.classes.valueOut);
                setTimeout(() => {
                    if (this.main.values.hasChildNodes() && this.main.values.contains(n)) {
                        this.main.values.removeChild(n);
                    }
                }, 100);
            }
            currentNodes = this.main.values.childNodes;
            for (let d = 0; d < selectedOptions.length; d++) {
                let shouldAdd = true;
                for (let i = 0; i < currentNodes.length; i++) {
                    if (selectedOptions[d].id === String(currentNodes[i].dataset.id)) {
                        shouldAdd = false;
                    }
                }
                if (shouldAdd) {
                    if (this.settings.keepOrder) {
                        this.main.values.appendChild(this.multipleValue(selectedOptions[d]));
                    }
                    else {
                        if (currentNodes.length === 0) {
                            this.main.values.appendChild(this.multipleValue(selectedOptions[d]));
                        }
                        else if (d === 0) {
                            this.main.values.insertBefore(this.multipleValue(selectedOptions[d]), currentNodes[d]);
                        }
                        else {
                            currentNodes[d - 1].insertAdjacentElement('afterend', this.multipleValue(selectedOptions[d]));
                        }
                    }
                }
            }
        }
        multipleValue(option) {
            const value = document.createElement('div');
            value.classList.add(this.classes.value);
            value.dataset.id = option.id;
            const text = document.createElement('div');
            text.classList.add(this.classes.valueText);
            text.textContent = option.text;
            value.appendChild(text);
            if (!option.mandatory) {
                const deleteDiv = document.createElement('div');
                deleteDiv.classList.add(this.classes.valueDelete);
                deleteDiv.setAttribute('tabindex', '0');
                deleteDiv.onclick = (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    if (this.settings.disabled) {
                        return;
                    }
                    let shouldDelete = true;
                    const before = this.store.getSelectedOptions();
                    const after = before.filter((o) => {
                        return o.selected && o.id !== option.id;
                    }, true);
                    if (this.settings.minSelected && after.length < this.settings.minSelected) {
                        return;
                    }
                    if (this.callbacks.beforeChange) {
                        shouldDelete = this.callbacks.beforeChange(after, before) === true;
                    }
                    if (shouldDelete) {
                        let selectedIds = [];
                        for (const o of after) {
                            if (o instanceof Optgroup) {
                                for (const c of o.options) {
                                    selectedIds.push(c.id);
                                }
                            }
                            if (o instanceof Option) {
                                selectedIds.push(o.id);
                            }
                        }
                        this.callbacks.setSelected(selectedIds, false);
                        if (this.settings.closeOnSelect) {
                            this.callbacks.close();
                        }
                        if (this.callbacks.afterChange) {
                            this.callbacks.afterChange(after);
                        }
                        this.updateDeselectAll();
                    }
                };
                const deleteSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
                deleteSvg.setAttribute('viewBox', '0 0 100 100');
                const deletePath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                deletePath.setAttribute('d', this.classes.optionDelete);
                deleteSvg.appendChild(deletePath);
                deleteDiv.appendChild(deleteSvg);
                value.appendChild(deleteDiv);
                deleteDiv.onkeydown = (e) => {
                    if (e.key === 'Enter') {
                        deleteDiv.click();
                    }
                };
            }
            return value;
        }
        contentDiv() {
            const main = document.createElement('div');
            main.dataset.id = this.settings.id;
            const search = this.searchDiv();
            main.appendChild(search.main);
            const list = this.listDiv();
            main.appendChild(list);
            return {
                main: main,
                search: search,
                list: list
            };
        }
        moveContent() {
            if (this.settings.contentPosition === 'relative') {
                this.moveContentBelow();
                return;
            }
            if (this.settings.openPosition === 'down') {
                this.moveContentBelow();
                return;
            }
            else if (this.settings.openPosition === 'up') {
                this.moveContentAbove();
                return;
            }
            if (this.putContent() === 'up') {
                this.moveContentAbove();
            }
            else {
                this.moveContentBelow();
            }
        }
        searchDiv() {
            const main = document.createElement('div');
            const input = document.createElement('input');
            const addable = document.createElement('div');
            main.classList.add(this.classes.search);
            const searchReturn = {
                main,
                input
            };
            if (!this.settings.showSearch) {
                main.classList.add(this.classes.hide);
                input.readOnly = true;
            }
            input.type = 'search';
            input.placeholder = this.settings.searchPlaceholder;
            input.tabIndex = -1;
            input.setAttribute('aria-label', this.settings.searchPlaceholder);
            input.setAttribute('autocapitalize', 'off');
            input.setAttribute('autocomplete', 'off');
            input.setAttribute('autocorrect', 'off');
            input.oninput = debounce((e) => {
                this.callbacks.search(e.target.value);
            }, 100);
            input.onkeydown = (e) => {
                switch (e.key) {
                    case 'ArrowUp':
                    case 'ArrowDown':
                        e.key === 'ArrowDown' ? this.highlight('down') : this.highlight('up');
                        return false;
                    case 'Tab':
                        this.callbacks.close();
                        return true;
                    case 'Escape':
                        this.callbacks.close();
                        return false;
                    case ' ':
                        const highlighted = this.content.list.querySelector('.' + this.classes.highlighted);
                        if (highlighted) {
                            highlighted.click();
                            return false;
                        }
                        return true;
                    case 'Enter':
                        if (this.callbacks.addable) {
                            addable.click();
                            return false;
                        }
                        else {
                            const highlighted = this.content.list.querySelector('.' + this.classes.highlighted);
                            if (highlighted) {
                                highlighted.click();
                                return false;
                            }
                        }
                        return true;
                }
                return true;
            };
            main.appendChild(input);
            if (this.callbacks.addable) {
                addable.classList.add(this.classes.addable);
                const plus = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
                plus.setAttribute('viewBox', '0 0 100 100');
                const plusPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                plusPath.setAttribute('d', this.classes.addablePath);
                plus.appendChild(plusPath);
                addable.appendChild(plus);
                addable.onclick = (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    if (!this.callbacks.addable) {
                        return;
                    }
                    const inputValue = this.content.search.input.value.trim();
                    if (inputValue === '') {
                        this.content.search.input.focus();
                        return;
                    }
                    const runFinish = (oo) => {
                        let newOption = new Option(oo);
                        this.callbacks.addOption(newOption);
                        if (this.settings.isMultiple) {
                            let ids = this.store.getSelected();
                            ids.push(newOption.id);
                            this.callbacks.setSelected(ids, true);
                        }
                        else {
                            this.callbacks.setSelected([newOption.id], true);
                        }
                        this.callbacks.search('');
                        if (this.settings.closeOnSelect) {
                            setTimeout(() => {
                                this.callbacks.close();
                            }, 100);
                        }
                    };
                    const addableValue = this.callbacks.addable(inputValue);
                    if (addableValue === false || addableValue === undefined || addableValue === null) {
                        return;
                    }
                    if (addableValue instanceof Promise) {
                        addableValue.then((value) => {
                            if (typeof value === 'string') {
                                runFinish({
                                    text: value,
                                    value: value
                                });
                            }
                            else if (addableValue instanceof Error) {
                                this.renderError(addableValue.message);
                            }
                            else {
                                runFinish(value);
                            }
                        });
                    }
                    else if (typeof addableValue === 'string') {
                        runFinish({
                            text: addableValue,
                            value: addableValue
                        });
                    }
                    else if (addableValue instanceof Error) {
                        this.renderError(addableValue.message);
                    }
                    else {
                        runFinish(addableValue);
                    }
                    return;
                };
                main.appendChild(addable);
                searchReturn.addable = {
                    main: addable,
                    svg: plus,
                    path: plusPath
                };
            }
            return searchReturn;
        }
        searchFocus() {
            this.content.search.input.focus();
        }
        getOptions(notPlaceholder = false, notDisabled = false, notHidden = false) {
            let query = '.' + this.classes.option;
            if (notPlaceholder) {
                query += ':not(.' + this.classes.placeholder + ')';
            }
            if (notDisabled) {
                query += ':not(.' + this.classes.disabled + ')';
            }
            if (notHidden) {
                query += ':not(.' + this.classes.hide + ')';
            }
            return Array.from(this.content.list.querySelectorAll(query));
        }
        highlight(dir) {
            const options = this.getOptions(true, true, true);
            if (options.length === 0) {
                return;
            }
            if (options.length === 1) {
                if (!options[0].classList.contains(this.classes.highlighted)) {
                    options[0].classList.add(this.classes.highlighted);
                    return;
                }
            }
            let highlighted = false;
            for (const o of options) {
                if (o.classList.contains(this.classes.highlighted)) {
                    highlighted = true;
                }
            }
            if (!highlighted) {
                for (const o of options) {
                    if (o.classList.contains(this.classes.selected)) {
                        o.classList.add(this.classes.highlighted);
                        break;
                    }
                }
            }
            for (let i = 0; i < options.length; i++) {
                if (options[i].classList.contains(this.classes.highlighted)) {
                    const prevOption = options[i];
                    prevOption.classList.remove(this.classes.highlighted);
                    const prevParent = prevOption.parentElement;
                    if (prevParent && prevParent.classList.contains(this.classes.open)) {
                        const optgroupLabel = prevParent.querySelector('.' + this.classes.optgroupLabel);
                        if (optgroupLabel) {
                            optgroupLabel.click();
                        }
                    }
                    let selectOption = options[dir === 'down' ? (i + 1 < options.length ? i + 1 : 0) : i - 1 >= 0 ? i - 1 : options.length - 1];
                    selectOption.classList.add(this.classes.highlighted);
                    this.ensureElementInView(this.content.list, selectOption);
                    const selectParent = selectOption.parentElement;
                    if (selectParent && selectParent.classList.contains(this.classes.close)) {
                        const optgroupLabel = selectParent.querySelector('.' + this.classes.optgroupLabel);
                        if (optgroupLabel) {
                            optgroupLabel.click();
                        }
                    }
                    return;
                }
            }
            options[dir === 'down' ? 0 : options.length - 1].classList.add(this.classes.highlighted);
            this.ensureElementInView(this.content.list, options[dir === 'down' ? 0 : options.length - 1]);
        }
        listDiv() {
            const options = document.createElement('div');
            options.classList.add(this.classes.list);
            return options;
        }
        renderError(error) {
            this.content.list.innerHTML = '';
            const errorDiv = document.createElement('div');
            errorDiv.classList.add(this.classes.error);
            errorDiv.textContent = error;
            this.content.list.appendChild(errorDiv);
        }
        renderSearching() {
            this.content.list.innerHTML = '';
            const searchingDiv = document.createElement('div');
            searchingDiv.classList.add(this.classes.searching);
            searchingDiv.textContent = this.settings.searchingText;
            this.content.list.appendChild(searchingDiv);
        }
        renderOptions(data) {
            this.content.list.innerHTML = '';
            if (data.length === 0) {
                const noResults = document.createElement('div');
                noResults.classList.add(this.classes.search);
                if (this.callbacks.addable) {
                    noResults.innerHTML = this.settings.addableText.replace('{value}', this.content.search.input.value);
                }
                else {
                    noResults.innerHTML = this.settings.searchText;
                }
                this.content.list.appendChild(noResults);
                return;
            }
            if (this.settings.allowDeselect && !this.settings.isMultiple) {
                const placeholderOption = this.store.filter((o) => o.placeholder, false);
                if (!placeholderOption.length) {
                    this.store.addOption(new Option({
                        text: '',
                        value: '',
                        selected: false,
                        placeholder: true
                    }), true);
                }
            }
            const fragment = document.createDocumentFragment();
            for (const d of data) {
                if (d instanceof Optgroup) {
                    const optgroupEl = document.createElement('div');
                    optgroupEl.classList.add(this.classes.optgroup);
                    const optgroupLabel = document.createElement('div');
                    optgroupLabel.classList.add(this.classes.optgroupLabel);
                    optgroupEl.appendChild(optgroupLabel);
                    const optgroupLabelText = document.createElement('div');
                    optgroupLabelText.classList.add(this.classes.optgroupLabelText);
                    optgroupLabelText.textContent = d.label;
                    optgroupLabel.appendChild(optgroupLabelText);
                    const optgroupActions = document.createElement('div');
                    optgroupActions.classList.add(this.classes.optgroupActions);
                    optgroupLabel.appendChild(optgroupActions);
                    if (this.settings.isMultiple && d.selectAll) {
                        const selectAll = document.createElement('div');
                        selectAll.classList.add(this.classes.optgroupSelectAll);
                        let allSelected = true;
                        for (const o of d.options) {
                            if (!o.selected) {
                                allSelected = false;
                                break;
                            }
                        }
                        if (allSelected) {
                            selectAll.classList.add(this.classes.selected);
                        }
                        const selectAllText = document.createElement('span');
                        selectAllText.textContent = d.selectAllText;
                        selectAll.appendChild(selectAllText);
                        const selectAllSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
                        selectAllSvg.setAttribute('viewBox', '0 0 100 100');
                        selectAll.appendChild(selectAllSvg);
                        const selectAllBox = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                        selectAllBox.setAttribute('d', this.classes.optgroupSelectAllBox);
                        selectAllSvg.appendChild(selectAllBox);
                        const selectAllCheck = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                        selectAllCheck.setAttribute('d', this.classes.optgroupSelectAllCheck);
                        selectAllSvg.appendChild(selectAllCheck);
                        selectAll.addEventListener('click', (e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            const currentSelected = this.store.getSelected();
                            if (allSelected) {
                                const newSelected = currentSelected.filter((s) => {
                                    for (const o of d.options) {
                                        if (s === o.id) {
                                            return false;
                                        }
                                    }
                                    return true;
                                });
                                this.callbacks.setSelected(newSelected, true);
                                return;
                            }
                            else {
                                const newSelected = currentSelected.concat(d.options.map((o) => o.id));
                                for (const o of d.options) {
                                    if (!this.store.getOptionByID(o.id)) {
                                        this.callbacks.addOption(o);
                                    }
                                }
                                this.callbacks.setSelected(newSelected, true);
                                return;
                            }
                        });
                        optgroupActions.appendChild(selectAll);
                    }
                    if (d.closable !== 'off') {
                        const optgroupClosable = document.createElement('div');
                        optgroupClosable.classList.add(this.classes.optgroupClosable);
                        const optgroupClosableSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
                        optgroupClosableSvg.setAttribute('viewBox', '0 0 100 100');
                        optgroupClosableSvg.classList.add(this.classes.arrow);
                        optgroupClosable.appendChild(optgroupClosableSvg);
                        const optgroupClosableArrow = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                        optgroupClosableSvg.appendChild(optgroupClosableArrow);
                        if (d.options.some((o) => o.selected) || this.content.search.input.value.trim() !== '') {
                            optgroupClosable.classList.add(this.classes.open);
                            optgroupClosableArrow.setAttribute('d', this.classes.arrowOpen);
                        }
                        else if (d.closable === 'open') {
                            optgroupEl.classList.add(this.classes.open);
                            optgroupClosableArrow.setAttribute('d', this.classes.arrowOpen);
                        }
                        else if (d.closable === 'close') {
                            optgroupEl.classList.add(this.classes.close);
                            optgroupClosableArrow.setAttribute('d', this.classes.arrowClose);
                        }
                        optgroupLabel.addEventListener('click', (e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            if (optgroupEl.classList.contains(this.classes.close)) {
                                optgroupEl.classList.remove(this.classes.close);
                                optgroupEl.classList.add(this.classes.open);
                                optgroupClosableArrow.setAttribute('d', this.classes.arrowOpen);
                            }
                            else {
                                optgroupEl.classList.remove(this.classes.open);
                                optgroupEl.classList.add(this.classes.close);
                                optgroupClosableArrow.setAttribute('d', this.classes.arrowClose);
                            }
                        });
                        optgroupActions.appendChild(optgroupClosable);
                    }
                    optgroupEl.appendChild(optgroupLabel);
                    for (const o of d.options) {
                        optgroupEl.appendChild(this.option(o));
                        fragment.appendChild(optgroupEl);
                    }
                }
                if (d instanceof Option) {
                    fragment.appendChild(this.option(d));
                }
            }
            this.content.list.appendChild(fragment);
        }
        option(option) {
            if (option.placeholder) {
                const placeholder = document.createElement('div');
                placeholder.classList.add(this.classes.option);
                placeholder.classList.add(this.classes.hide);
                return placeholder;
            }
            const optionEl = document.createElement('div');
            optionEl.dataset.id = option.id;
            optionEl.classList.add(this.classes.option);
            optionEl.setAttribute('role', 'option');
            if (option.class) {
                option.class.split(' ').forEach((dataClass) => {
                    optionEl.classList.add(dataClass);
                });
            }
            if (option.style) {
                optionEl.style.cssText = option.style;
            }
            if (this.settings.searchHighlight && this.content.search.input.value.trim() !== '') {
                optionEl.innerHTML = this.highlightText(option.html !== '' ? option.html : option.text, this.content.search.input.value, this.classes.searchHighlighter);
            }
            else if (option.html !== '') {
                optionEl.innerHTML = option.html;
            }
            else {
                optionEl.textContent = option.text;
            }
            if (this.settings.showOptionTooltips && optionEl.textContent) {
                optionEl.setAttribute('title', optionEl.textContent);
            }
            if (!option.display) {
                optionEl.classList.add(this.classes.hide);
            }
            if (option.disabled) {
                optionEl.classList.add(this.classes.disabled);
            }
            if (option.selected && this.settings.hideSelected) {
                optionEl.classList.add(this.classes.hide);
            }
            if (option.selected) {
                optionEl.classList.add(this.classes.selected);
                optionEl.setAttribute('aria-selected', 'true');
                this.main.main.setAttribute('aria-activedescendant', optionEl.id);
            }
            else {
                optionEl.classList.remove(this.classes.selected);
                optionEl.setAttribute('aria-selected', 'false');
            }
            optionEl.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                const selectedOptions = this.store.getSelected();
                const element = e.currentTarget;
                const elementID = String(element.dataset.id);
                if (option.disabled || (option.selected && !this.settings.allowDeselect)) {
                    return;
                }
                if ((this.settings.isMultiple && this.settings.maxSelected <= selectedOptions.length && !option.selected) ||
                    (this.settings.isMultiple && this.settings.minSelected >= selectedOptions.length && option.selected)) {
                    return;
                }
                let shouldUpdate = false;
                const before = this.store.getSelectedOptions();
                let after = [];
                if (this.settings.isMultiple) {
                    if (option.selected) {
                        after = before.filter((o) => o.id !== elementID);
                    }
                    else {
                        after = before.concat(option);
                        if (!this.settings.closeOnSelect) {
                            if (e.shiftKey && this.lastSelectedOption) {
                                const options = this.store.getDataOptions();
                                let lastClickedOptionIndex = options.findIndex((o) => o.id === this.lastSelectedOption.id);
                                let currentOptionIndex = options.findIndex((o) => o.id === option.id);
                                if (lastClickedOptionIndex >= 0 && currentOptionIndex >= 0) {
                                    const startIndex = Math.min(lastClickedOptionIndex, currentOptionIndex);
                                    const endIndex = Math.max(lastClickedOptionIndex, currentOptionIndex);
                                    const afterRange = options.slice(startIndex, endIndex + 1);
                                    if (afterRange.length > 0 && afterRange.length < this.settings.maxSelected) {
                                        after = before.concat(afterRange.filter((a) => !before.find((b) => b.id === a.id)));
                                    }
                                }
                            }
                            else if (!option.selected) {
                                this.lastSelectedOption = option;
                            }
                        }
                    }
                }
                if (!this.settings.isMultiple) {
                    if (option.selected) {
                        after = [];
                    }
                    else {
                        after = [option];
                    }
                }
                if (!this.callbacks.beforeChange) {
                    shouldUpdate = true;
                }
                if (this.callbacks.beforeChange) {
                    if (this.callbacks.beforeChange(after, before) === false) {
                        shouldUpdate = false;
                    }
                    else {
                        shouldUpdate = true;
                    }
                }
                if (shouldUpdate) {
                    if (!this.store.getOptionByID(elementID)) {
                        this.callbacks.addOption(option);
                    }
                    this.callbacks.setSelected(after.map((o) => o.id), false);
                    if (this.settings.closeOnSelect) {
                        this.callbacks.close();
                    }
                    if (this.callbacks.afterChange) {
                        this.callbacks.afterChange(after);
                    }
                }
            });
            return optionEl;
        }
        destroy() {
            this.main.main.remove();
            this.content.main.remove();
        }
        highlightText(str, search, className) {
            let completedString = str;
            const regex = new RegExp('(?![^<]*>)(' + search.trim() + ')(?![^<]*>[^<>]*</)', 'i');
            if (!str.match(regex)) {
                return str;
            }
            const matchStartPosition = str.match(regex).index;
            const matchEndPosition = matchStartPosition + str.match(regex)[0].toString().length;
            const originalTextFoundByRegex = str.substring(matchStartPosition, matchEndPosition);
            completedString = completedString.replace(regex, `<mark class="${className}">${originalTextFoundByRegex}</mark>`);
            return completedString;
        }
        moveContentAbove() {
            const mainHeight = this.main.main.offsetHeight;
            const contentHeight = this.content.main.offsetHeight;
            this.main.main.classList.remove(this.classes.openBelow);
            this.main.main.classList.add(this.classes.openAbove);
            this.content.main.classList.remove(this.classes.openBelow);
            this.content.main.classList.add(this.classes.openAbove);
            const containerRect = this.main.main.getBoundingClientRect();
            this.content.main.style.margin = '-' + (mainHeight + contentHeight - 1) + 'px 0px 0px 0px';
            this.content.main.style.top =
                containerRect.top + containerRect.height + (this.settings.contentPosition === 'fixed' ? 0 : window.scrollY) + 'px';
            this.content.main.style.left =
                containerRect.left + (this.settings.contentPosition === 'fixed' ? 0 : window.scrollX) + 'px';
            this.content.main.style.width = containerRect.width + 'px';
        }
        moveContentBelow() {
            this.main.main.classList.remove(this.classes.openAbove);
            this.main.main.classList.add(this.classes.openBelow);
            this.content.main.classList.remove(this.classes.openAbove);
            this.content.main.classList.add(this.classes.openBelow);
            const containerRect = this.main.main.getBoundingClientRect();
            this.content.main.style.margin = '-1px 0px 0px 0px';
            if (this.settings.contentPosition !== 'relative') {
                this.content.main.style.top =
                    containerRect.top +
                        containerRect.height +
                        (this.settings.contentPosition === 'fixed' ? 0 : window.scrollY) +
                        'px';
                this.content.main.style.left =
                    containerRect.left + (this.settings.contentPosition === 'fixed' ? 0 : window.scrollX) + 'px';
                this.content.main.style.width = containerRect.width + 'px';
            }
        }
        ensureElementInView(container, element) {
            const cTop = container.scrollTop + container.offsetTop;
            const cBottom = cTop + container.clientHeight;
            const eTop = element.offsetTop;
            const eBottom = eTop + element.clientHeight;
            if (eTop < cTop) {
                container.scrollTop -= cTop - eTop;
            }
            else if (eBottom > cBottom) {
                container.scrollTop += eBottom - cBottom;
            }
        }
        putContent() {
            const mainHeight = this.main.main.offsetHeight;
            const mainRect = this.main.main.getBoundingClientRect();
            const contentHeight = this.content.main.offsetHeight;
            const spaceBelow = window.innerHeight - (mainRect.top + mainHeight);
            if (spaceBelow <= contentHeight) {
                if (mainRect.top > contentHeight) {
                    return 'up';
                }
                else {
                    return 'down';
                }
            }
            return 'down';
        }
        updateDeselectAll() {
            if (!this.store || !this.settings) {
                return;
            }
            const selected = this.store.getSelectedOptions();
            const hasSelectedItems = selected && selected.length > 0;
            const isMultiple = this.settings.isMultiple;
            const allowDeselect = this.settings.allowDeselect;
            const deselectButton = this.main.deselect.main;
            const hideClass = this.classes.hide;
            if (allowDeselect && !(isMultiple && !hasSelectedItems)) {
                deselectButton.classList.remove(hideClass);
            }
            else {
                deselectButton.classList.add(hideClass);
            }
        }
    }

    class Select {
        constructor(select) {
            this.listen = false;
            this.observer = null;
            this.select = select;
            this.valueChange = this.valueChange.bind(this);
            this.select.addEventListener('change', this.valueChange, {
                passive: true
            });
            this.observer = new MutationObserver(this.observeCall.bind(this));
            this.changeListen(true);
        }
        enable() {
            this.select.disabled = false;
        }
        disable() {
            this.select.disabled = true;
        }
        hideUI() {
            this.select.tabIndex = -1;
            this.select.style.display = 'none';
            this.select.setAttribute('aria-hidden', 'true');
        }
        showUI() {
            this.select.removeAttribute('tabindex');
            this.select.style.display = '';
            this.select.removeAttribute('aria-hidden');
        }
        changeListen(listen) {
            this.listen = listen;
            if (listen) {
                if (this.observer) {
                    this.observer.observe(this.select, {
                        subtree: true,
                        childList: true,
                        attributes: true
                    });
                }
            }
            if (!listen) {
                if (this.observer) {
                    this.observer.disconnect();
                }
            }
        }
        valueChange(ev) {
            if (this.listen && this.onValueChange) {
                this.onValueChange(this.getSelectedOptions());
            }
            return true;
        }
        observeCall(mutations) {
            if (!this.listen) {
                return;
            }
            let classChanged = false;
            let disabledChanged = false;
            let optgroupOptionChanged = false;
            for (const m of mutations) {
                if (m.target === this.select) {
                    if (m.attributeName === 'disabled') {
                        disabledChanged = true;
                    }
                    if (m.attributeName === 'class') {
                        classChanged = true;
                    }
                    if (m.type === 'childList') {
                        for (const n of m.addedNodes) {
                            if (n.nodeName === 'OPTION' && n.value === this.select.value) {
                                this.select.dispatchEvent(new Event('change'));
                                break;
                            }
                        }
                        optgroupOptionChanged = true;
                    }
                }
                if (m.target.nodeName === 'OPTGROUP' || m.target.nodeName === 'OPTION') {
                    optgroupOptionChanged = true;
                }
            }
            if (classChanged && this.onClassChange) {
                this.onClassChange(this.select.className.split(' '));
            }
            if (disabledChanged && this.onDisabledChange) {
                this.changeListen(false);
                this.onDisabledChange(this.select.disabled);
                this.changeListen(true);
            }
            if (optgroupOptionChanged && this.onOptionsChange) {
                this.changeListen(false);
                this.onOptionsChange(this.getData());
                this.changeListen(true);
            }
        }
        getData() {
            let data = [];
            const nodes = this.select.childNodes;
            for (const n of nodes) {
                if (n.nodeName === 'OPTGROUP') {
                    data.push(this.getDataFromOptgroup(n));
                }
                if (n.nodeName === 'OPTION') {
                    data.push(this.getDataFromOption(n));
                }
            }
            return data;
        }
        getDataFromOptgroup(optgroup) {
            let data = {
                id: optgroup.id,
                label: optgroup.label,
                selectAll: optgroup.dataset ? optgroup.dataset.selectall === 'true' : false,
                selectAllText: optgroup.dataset ? optgroup.dataset.selectalltext : 'Select all',
                closable: optgroup.dataset ? optgroup.dataset.closable : 'off',
                options: []
            };
            const options = optgroup.childNodes;
            for (const o of options) {
                if (o.nodeName === 'OPTION') {
                    data.options.push(this.getDataFromOption(o));
                }
            }
            return data;
        }
        getDataFromOption(option) {
            return {
                id: option.id,
                value: option.value,
                text: option.text,
                html: option.dataset && option.dataset.html ? option.dataset.html : '',
                defaultSelected: option.defaultSelected,
                selected: option.selected,
                display: option.style.display !== 'none',
                disabled: option.disabled,
                mandatory: option.dataset ? option.dataset.mandatory === 'true' : false,
                placeholder: option.dataset.placeholder === 'true',
                class: option.className,
                style: option.style.cssText,
                data: option.dataset
            };
        }
        getSelectedOptions() {
            let options = [];
            const opts = this.select.childNodes;
            for (const o of opts) {
                if (o.nodeName === 'OPTGROUP') {
                    const optgroupOptions = o.childNodes;
                    for (const oo of optgroupOptions) {
                        if (oo.nodeName === 'OPTION') {
                            const option = oo;
                            if (option.selected) {
                                options.push(this.getDataFromOption(option));
                            }
                        }
                    }
                }
                if (o.nodeName === 'OPTION') {
                    const option = o;
                    if (option.selected) {
                        options.push(this.getDataFromOption(option));
                    }
                }
            }
            return options;
        }
        getSelectedValues() {
            return this.getSelectedOptions().map((option) => option.value);
        }
        setSelected(ids) {
            this.changeListen(false);
            const options = this.select.childNodes;
            for (const o of options) {
                if (o.nodeName === 'OPTGROUP') {
                    const optgroup = o;
                    const optgroupOptions = optgroup.childNodes;
                    for (const oo of optgroupOptions) {
                        if (oo.nodeName === 'OPTION') {
                            const option = oo;
                            option.selected = ids.includes(option.id);
                        }
                    }
                }
                if (o.nodeName === 'OPTION') {
                    const option = o;
                    option.selected = ids.includes(option.id);
                }
            }
            this.changeListen(true);
        }
        setSelectedByValue(values) {
            this.changeListen(false);
            const options = this.select.childNodes;
            for (const o of options) {
                if (o.nodeName === 'OPTGROUP') {
                    const optgroup = o;
                    const optgroupOptions = optgroup.childNodes;
                    for (const oo of optgroupOptions) {
                        if (oo.nodeName === 'OPTION') {
                            const option = oo;
                            option.selected = values.includes(option.value);
                        }
                    }
                }
                if (o.nodeName === 'OPTION') {
                    const option = o;
                    option.selected = values.includes(option.value);
                }
            }
            this.changeListen(true);
        }
        updateSelect(id, style, classes) {
            this.changeListen(false);
            if (id) {
                this.select.dataset.id = id;
            }
            if (style) {
                this.select.style.cssText = style;
            }
            if (classes) {
                this.select.className = '';
                classes.forEach((c) => {
                    if (c.trim() !== '') {
                        this.select.classList.add(c.trim());
                    }
                });
            }
            this.changeListen(true);
        }
        updateOptions(data) {
            this.changeListen(false);
            this.select.innerHTML = '';
            for (const d of data) {
                if (d instanceof Optgroup) {
                    this.select.appendChild(this.createOptgroup(d));
                }
                if (d instanceof Option) {
                    this.select.appendChild(this.createOption(d));
                }
            }
            this.select.dispatchEvent(new Event('change', { bubbles: true }));
            this.changeListen(true);
        }
        createOptgroup(optgroup) {
            const optgroupEl = document.createElement('optgroup');
            optgroupEl.id = optgroup.id;
            optgroupEl.label = optgroup.label;
            if (optgroup.selectAll) {
                optgroupEl.dataset.selectAll = 'true';
            }
            if (optgroup.closable !== 'off') {
                optgroupEl.dataset.closable = optgroup.closable;
            }
            if (optgroup.options) {
                for (const o of optgroup.options) {
                    optgroupEl.appendChild(this.createOption(o));
                }
            }
            return optgroupEl;
        }
        createOption(info) {
            const optionEl = document.createElement('option');
            optionEl.id = info.id;
            optionEl.value = info.value;
            optionEl.textContent = info.text;
            if (info.html !== '') {
                optionEl.setAttribute('data-html', info.html);
            }
            optionEl.defaultSelected = info.defaultSelected;
            optionEl.selected = info.selected;
            if (info.disabled) {
                optionEl.disabled = true;
            }
            if (!info.display) {
                optionEl.style.display = 'none';
            }
            if (info.placeholder) {
                optionEl.setAttribute('data-placeholder', 'true');
            }
            if (info.mandatory) {
                optionEl.setAttribute('data-mandatory', 'true');
            }
            if (info.class) {
                info.class.split(' ').forEach((optionClass) => {
                    optionEl.classList.add(optionClass);
                });
            }
            if (info.data && typeof info.data === 'object') {
                Object.keys(info.data).forEach((key) => {
                    optionEl.setAttribute('data-' + kebabCase(key), info.data[key]);
                });
            }
            return optionEl;
        }
        destroy() {
            this.changeListen(false);
            this.select.removeEventListener('change', this.valueChange);
            if (this.observer) {
                this.observer.disconnect();
                this.observer = null;
            }
            delete this.select.dataset.id;
            this.showUI();
        }
    }

    class Settings {
        constructor(settings) {
            this.id = '';
            this.style = '';
            this.class = [];
            this.isMultiple = false;
            this.isOpen = false;
            this.isFullOpen = false;
            this.intervalMove = null;
            if (!settings) {
                settings = {};
            }
            this.id = 'ss-' + generateID();
            this.style = settings.style || '';
            this.class = settings.class || [];
            this.disabled = settings.disabled !== undefined ? settings.disabled : false;
            this.alwaysOpen = settings.alwaysOpen !== undefined ? settings.alwaysOpen : false;
            this.showSearch = settings.showSearch !== undefined ? settings.showSearch : true;
            this.focusSearch = settings.focusSearch !== undefined ? settings.focusSearch : true;
            this.ariaLabel = settings.ariaLabel || 'Combobox';
            this.searchPlaceholder = settings.searchPlaceholder || 'Search';
            this.searchText = settings.searchText || 'No Results';
            this.searchingText = settings.searchingText || 'Searching...';
            this.searchHighlight = settings.searchHighlight !== undefined ? settings.searchHighlight : false;
            this.closeOnSelect = settings.closeOnSelect !== undefined ? settings.closeOnSelect : true;
            this.contentLocation = settings.contentLocation || document.body;
            this.contentPosition = settings.contentPosition || 'absolute';
            this.openPosition = settings.openPosition || 'auto';
            this.placeholderText = settings.placeholderText !== undefined ? settings.placeholderText : 'Select Value';
            this.allowDeselect = settings.allowDeselect !== undefined ? settings.allowDeselect : false;
            this.hideSelected = settings.hideSelected !== undefined ? settings.hideSelected : false;
            this.keepOrder = settings.keepOrder !== undefined ? settings.keepOrder : false;
            this.showOptionTooltips = settings.showOptionTooltips !== undefined ? settings.showOptionTooltips : false;
            this.minSelected = settings.minSelected || 0;
            this.maxSelected = settings.maxSelected || 1000;
            this.timeoutDelay = settings.timeoutDelay || 200;
            this.maxValuesShown = settings.maxValuesShown || 20;
            this.maxValuesMessage = settings.maxValuesMessage || '{number} selected';
            this.addableText = settings.addableText || 'Press "Enter" to add {value}';
        }
    }

    class SlimSelect {
        constructor(config) {
            var _a;
            this.events = {
                search: undefined,
                searchFilter: (opt, search) => {
                    return opt.text.toLowerCase().indexOf(search.toLowerCase()) !== -1;
                },
                addable: undefined,
                beforeChange: undefined,
                afterChange: undefined,
                beforeOpen: undefined,
                afterOpen: undefined,
                beforeClose: undefined,
                afterClose: undefined
            };
            this.windowResize = debounce(() => {
                if (!this.settings.isOpen && !this.settings.isFullOpen) {
                    return;
                }
                this.render.moveContent();
            });
            this.windowScroll = debounce(() => {
                if (!this.settings.isOpen && !this.settings.isFullOpen) {
                    return;
                }
                this.render.moveContent();
            });
            this.documentClick = (e) => {
                if (!this.settings.isOpen) {
                    return;
                }
                if (e.target && !hasClassInTree(e.target, this.settings.id)) {
                    this.close(e.type);
                }
            };
            this.windowVisibilityChange = () => {
                if (document.hidden) {
                    this.close();
                }
            };
            this.selectEl = (typeof config.select === 'string' ? document.querySelector(config.select) : config.select);
            if (!this.selectEl) {
                if (config.events && config.events.error) {
                    config.events.error(new Error('Could not find select element'));
                }
                return;
            }
            if (this.selectEl.tagName !== 'SELECT') {
                if (config.events && config.events.error) {
                    config.events.error(new Error('Element isnt of type select'));
                }
                return;
            }
            if (this.selectEl.dataset.ssid) {
                this.destroy();
            }
            this.settings = new Settings(config.settings);
            this.cssClasses = new CssClasses(config.cssClasses);
            const debounceEvents = ['afterChange', 'beforeOpen', 'afterOpen', 'beforeClose', 'afterClose'];
            for (const key in config.events) {
                if (!config.events.hasOwnProperty(key)) {
                    continue;
                }
                if (debounceEvents.indexOf(key) !== -1) {
                    this.events[key] = debounce(config.events[key], 100);
                }
                else {
                    this.events[key] = config.events[key];
                }
            }
            this.settings.disabled = ((_a = config.settings) === null || _a === void 0 ? void 0 : _a.disabled) ? config.settings.disabled : this.selectEl.disabled;
            this.settings.isMultiple = this.selectEl.multiple;
            this.settings.style = this.selectEl.style.cssText;
            this.settings.class = this.selectEl.className.split(' ');
            this.select = new Select(this.selectEl);
            this.select.updateSelect(this.settings.id, this.settings.style, this.settings.class);
            this.select.hideUI();
            this.select.onValueChange = (options) => {
                this.setSelected(options.map((option) => option.id));
            };
            this.select.onClassChange = (classes) => {
                this.settings.class = classes;
                this.render.updateClassStyles();
            };
            this.select.onDisabledChange = (disabled) => {
                if (disabled) {
                    this.disable();
                }
                else {
                    this.enable();
                }
            };
            this.select.onOptionsChange = (data) => {
                this.setData(data);
            };
            this.store = new Store(this.settings.isMultiple ? 'multiple' : 'single', config.data ? config.data : this.select.getData());
            if (config.data) {
                this.select.updateOptions(this.store.getData());
            }
            const renderCallbacks = {
                open: this.open.bind(this),
                close: this.close.bind(this),
                addable: this.events.addable ? this.events.addable : undefined,
                setSelected: this.setSelected.bind(this),
                addOption: this.addOption.bind(this),
                search: this.search.bind(this),
                beforeChange: this.events.beforeChange,
                afterChange: this.events.afterChange
            };
            this.render = new Render(this.settings, this.cssClasses, this.store, renderCallbacks);
            this.render.renderValues();
            this.render.renderOptions(this.store.getData());
            const selectAriaLabel = this.selectEl.getAttribute('aria-label');
            const selectAriaLabelledBy = this.selectEl.getAttribute('aria-labelledby');
            if (selectAriaLabel) {
                this.render.main.main.setAttribute('aria-label', selectAriaLabel);
            }
            else if (selectAriaLabelledBy) {
                this.render.main.main.setAttribute('aria-labelledby', selectAriaLabelledBy);
            }
            if (this.selectEl.parentNode) {
                this.selectEl.parentNode.insertBefore(this.render.main.main, this.selectEl.nextSibling);
            }
            window.addEventListener('resize', this.windowResize, false);
            if (this.settings.openPosition === 'auto') {
                window.addEventListener('scroll', this.windowScroll, false);
            }
            document.addEventListener('visibilitychange', this.windowVisibilityChange);
            if (this.settings.disabled) {
                this.disable();
            }
            if (this.settings.alwaysOpen) {
                this.open();
            }
            this.selectEl.slim = this;
        }
        enable() {
            this.settings.disabled = false;
            this.select.enable();
            this.render.enable();
        }
        disable() {
            this.settings.disabled = true;
            this.select.disable();
            this.render.disable();
        }
        getData() {
            return this.store.getData();
        }
        setData(data) {
            const selected = this.store.getSelected();
            const err = this.store.validateDataArray(data);
            if (err) {
                if (this.events.error) {
                    this.events.error(err);
                }
                return;
            }
            this.store.setData(data);
            const dataClean = this.store.getData();
            this.select.updateOptions(dataClean);
            this.render.renderValues();
            this.render.renderOptions(dataClean);
            if (this.events.afterChange && !isEqual(selected, this.store.getSelected())) {
                this.events.afterChange(this.store.getSelectedOptions());
            }
        }
        getSelected() {
            let options = this.store.getSelectedOptions();
            if (this.settings.keepOrder) {
                options = this.store.selectedOrderOptions(options);
            }
            return options.map((option) => option.value);
        }
        setSelected(values, runAfterChange = true) {
            const selected = this.store.getSelected();
            const options = this.store.getDataOptions();
            values = Array.isArray(values) ? values : [values];
            const ids = [];
            for (const value of values) {
                if (options.find((option) => option.id == value)) {
                    ids.push(value);
                    continue;
                }
                for (const option of options.filter((option) => option.value == value)) {
                    ids.push(option.id);
                }
            }
            this.store.setSelectedBy('id', ids);
            const data = this.store.getData();
            this.select.updateOptions(data);
            this.render.renderValues();
            if (this.render.content.search.input.value !== '') {
                this.search(this.render.content.search.input.value);
            }
            else {
                this.render.renderOptions(data);
            }
            if (runAfterChange && this.events.afterChange && !isEqual(selected, this.store.getSelected())) {
                this.events.afterChange(this.store.getSelectedOptions());
            }
        }
        addOption(option) {
            const selected = this.store.getSelected();
            if (!this.store.getDataOptions().some((o) => { var _a; return o.value === ((_a = option.value) !== null && _a !== void 0 ? _a : option.text); })) {
                this.store.addOption(option);
            }
            const data = this.store.getData();
            this.select.updateOptions(data);
            this.render.renderValues();
            this.render.renderOptions(data);
            if (this.events.afterChange && !isEqual(selected, this.store.getSelected())) {
                this.events.afterChange(this.store.getSelectedOptions());
            }
        }
        open() {
            if (this.settings.disabled || this.settings.isOpen) {
                return;
            }
            if (this.events.beforeOpen) {
                this.events.beforeOpen();
            }
            this.render.open();
            if (this.settings.showSearch && this.settings.focusSearch) {
                this.render.searchFocus();
            }
            this.settings.isOpen = true;
            setTimeout(() => {
                if (this.events.afterOpen) {
                    this.events.afterOpen();
                }
                if (this.settings.isOpen) {
                    this.settings.isFullOpen = true;
                }
                document.addEventListener('click', this.documentClick);
            }, this.settings.timeoutDelay);
            if (this.settings.contentPosition === 'absolute') {
                if (this.settings.intervalMove) {
                    clearInterval(this.settings.intervalMove);
                }
                this.settings.intervalMove = setInterval(this.render.moveContent.bind(this.render), 500);
            }
        }
        close(eventType = null) {
            if (!this.settings.isOpen || this.settings.alwaysOpen) {
                return;
            }
            if (this.events.beforeClose) {
                this.events.beforeClose();
            }
            this.render.close();
            if (this.render.content.search.input.value !== '') {
                this.search('');
            }
            this.render.mainFocus(eventType);
            this.settings.isOpen = false;
            this.settings.isFullOpen = false;
            setTimeout(() => {
                if (this.events.afterClose) {
                    this.events.afterClose();
                }
                document.removeEventListener('click', this.documentClick);
            }, this.settings.timeoutDelay);
            if (this.settings.intervalMove) {
                clearInterval(this.settings.intervalMove);
            }
        }
        search(value) {
            if (this.render.content.search.input.value !== value) {
                this.render.content.search.input.value = value;
            }
            if (!this.events.search) {
                this.render.renderOptions(value === '' ? this.store.getData() : this.store.search(value, this.events.searchFilter));
                return;
            }
            this.render.renderSearching();
            const searchResp = this.events.search(value, this.store.getSelectedOptions());
            if (searchResp instanceof Promise) {
                searchResp
                    .then((data) => {
                    this.render.renderOptions(this.store.partialToFullData(data));
                })
                    .catch((err) => {
                    this.render.renderError(typeof err === 'string' ? err : err.message);
                });
                return;
            }
            else if (Array.isArray(searchResp)) {
                this.render.renderOptions(this.store.partialToFullData(searchResp));
            }
            else {
                this.render.renderError('Search event must return a promise or an array of data');
            }
        }
        destroy() {
            document.removeEventListener('click', this.documentClick);
            window.removeEventListener('resize', this.windowResize, false);
            if (this.settings.openPosition === 'auto') {
                window.removeEventListener('scroll', this.windowScroll, false);
            }
            document.removeEventListener('visibilitychange', this.windowVisibilityChange);
            this.store.setData([]);
            this.render.destroy();
            this.select.destroy();
        }
    }

    return SlimSelect;

}));


/***/ }),

/***/ "./node_modules/swiper/modules/a11y.mjs":
/*!**********************************************!*\
  !*** ./node_modules/swiper/modules/a11y.mjs ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ A11y)
/* harmony export */ });
/* harmony import */ var _shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/ssr-window.esm.mjs */ "./node_modules/swiper/shared/ssr-window.esm.mjs");
/* harmony import */ var _shared_classes_to_selector_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/classes-to-selector.mjs */ "./node_modules/swiper/shared/classes-to-selector.mjs");
/* harmony import */ var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");




function A11y(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    a11y: {
      enabled: true,
      notificationClass: 'swiper-notification',
      prevSlideMessage: 'Previous slide',
      nextSlideMessage: 'Next slide',
      firstSlideMessage: 'This is the first slide',
      lastSlideMessage: 'This is the last slide',
      paginationBulletMessage: 'Go to slide {{index}}',
      slideLabelMessage: '{{index}} / {{slidesLength}}',
      containerMessage: null,
      containerRoleDescriptionMessage: null,
      containerRole: null,
      itemRoleDescriptionMessage: null,
      slideRole: 'group',
      id: null,
      scrollOnFocus: true
    }
  });
  swiper.a11y = {
    clicked: false
  };
  let liveRegion = null;
  let preventFocusHandler;
  let focusTargetSlideEl;
  let visibilityChangedTimestamp = new Date().getTime();
  function notify(message) {
    const notification = liveRegion;
    if (notification.length === 0) return;
    (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.s)(notification, message);
  }
  function getRandomNumber(size) {
    if (size === void 0) {
      size = 16;
    }
    const randomChar = () => Math.round(16 * Math.random()).toString(16);
    return 'x'.repeat(size).replace(/x/g, randomChar);
  }
  function makeElFocusable(el) {
    el = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(el);
    el.forEach(subEl => {
      subEl.setAttribute('tabIndex', '0');
    });
  }
  function makeElNotFocusable(el) {
    el = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(el);
    el.forEach(subEl => {
      subEl.setAttribute('tabIndex', '-1');
    });
  }
  function addElRole(el, role) {
    el = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(el);
    el.forEach(subEl => {
      subEl.setAttribute('role', role);
    });
  }
  function addElRoleDescription(el, description) {
    el = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(el);
    el.forEach(subEl => {
      subEl.setAttribute('aria-roledescription', description);
    });
  }
  function addElControls(el, controls) {
    el = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(el);
    el.forEach(subEl => {
      subEl.setAttribute('aria-controls', controls);
    });
  }
  function addElLabel(el, label) {
    el = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(el);
    el.forEach(subEl => {
      subEl.setAttribute('aria-label', label);
    });
  }
  function addElId(el, id) {
    el = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(el);
    el.forEach(subEl => {
      subEl.setAttribute('id', id);
    });
  }
  function addElLive(el, live) {
    el = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(el);
    el.forEach(subEl => {
      subEl.setAttribute('aria-live', live);
    });
  }
  function disableEl(el) {
    el = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(el);
    el.forEach(subEl => {
      subEl.setAttribute('aria-disabled', true);
    });
  }
  function enableEl(el) {
    el = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(el);
    el.forEach(subEl => {
      subEl.setAttribute('aria-disabled', false);
    });
  }
  function onEnterOrSpaceKey(e) {
    if (e.keyCode !== 13 && e.keyCode !== 32) return;
    const params = swiper.params.a11y;
    const targetEl = e.target;
    if (swiper.pagination && swiper.pagination.el && (targetEl === swiper.pagination.el || swiper.pagination.el.contains(e.target))) {
      if (!e.target.matches((0,_shared_classes_to_selector_mjs__WEBPACK_IMPORTED_MODULE_1__.c)(swiper.params.pagination.bulletClass))) return;
    }
    if (swiper.navigation && swiper.navigation.prevEl && swiper.navigation.nextEl) {
      const prevEls = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(swiper.navigation.prevEl);
      const nextEls = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(swiper.navigation.nextEl);
      if (nextEls.includes(targetEl)) {
        if (!(swiper.isEnd && !swiper.params.loop)) {
          swiper.slideNext();
        }
        if (swiper.isEnd) {
          notify(params.lastSlideMessage);
        } else {
          notify(params.nextSlideMessage);
        }
      }
      if (prevEls.includes(targetEl)) {
        if (!(swiper.isBeginning && !swiper.params.loop)) {
          swiper.slidePrev();
        }
        if (swiper.isBeginning) {
          notify(params.firstSlideMessage);
        } else {
          notify(params.prevSlideMessage);
        }
      }
    }
    if (swiper.pagination && targetEl.matches((0,_shared_classes_to_selector_mjs__WEBPACK_IMPORTED_MODULE_1__.c)(swiper.params.pagination.bulletClass))) {
      targetEl.click();
    }
  }
  function updateNavigation() {
    if (swiper.params.loop || swiper.params.rewind || !swiper.navigation) return;
    const {
      nextEl,
      prevEl
    } = swiper.navigation;
    if (prevEl) {
      if (swiper.isBeginning) {
        disableEl(prevEl);
        makeElNotFocusable(prevEl);
      } else {
        enableEl(prevEl);
        makeElFocusable(prevEl);
      }
    }
    if (nextEl) {
      if (swiper.isEnd) {
        disableEl(nextEl);
        makeElNotFocusable(nextEl);
      } else {
        enableEl(nextEl);
        makeElFocusable(nextEl);
      }
    }
  }
  function hasPagination() {
    return swiper.pagination && swiper.pagination.bullets && swiper.pagination.bullets.length;
  }
  function hasClickablePagination() {
    return hasPagination() && swiper.params.pagination.clickable;
  }
  function updatePagination() {
    const params = swiper.params.a11y;
    if (!hasPagination()) return;
    swiper.pagination.bullets.forEach(bulletEl => {
      if (swiper.params.pagination.clickable) {
        makeElFocusable(bulletEl);
        if (!swiper.params.pagination.renderBullet) {
          addElRole(bulletEl, 'button');
          addElLabel(bulletEl, params.paginationBulletMessage.replace(/\{\{index\}\}/, (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.i)(bulletEl) + 1));
        }
      }
      if (bulletEl.matches((0,_shared_classes_to_selector_mjs__WEBPACK_IMPORTED_MODULE_1__.c)(swiper.params.pagination.bulletActiveClass))) {
        bulletEl.setAttribute('aria-current', 'true');
      } else {
        bulletEl.removeAttribute('aria-current');
      }
    });
  }
  const initNavEl = (el, wrapperId, message) => {
    makeElFocusable(el);
    if (el.tagName !== 'BUTTON') {
      addElRole(el, 'button');
      el.addEventListener('keydown', onEnterOrSpaceKey);
    }
    addElLabel(el, message);
    addElControls(el, wrapperId);
  };
  const handlePointerDown = e => {
    if (focusTargetSlideEl && focusTargetSlideEl !== e.target && !focusTargetSlideEl.contains(e.target)) {
      preventFocusHandler = true;
    }
    swiper.a11y.clicked = true;
  };
  const handlePointerUp = () => {
    preventFocusHandler = false;
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        if (!swiper.destroyed) {
          swiper.a11y.clicked = false;
        }
      });
    });
  };
  const onVisibilityChange = e => {
    visibilityChangedTimestamp = new Date().getTime();
  };
  const handleFocus = e => {
    if (swiper.a11y.clicked || !swiper.params.a11y.scrollOnFocus) return;
    if (new Date().getTime() - visibilityChangedTimestamp < 100) return;
    const slideEl = e.target.closest(`.${swiper.params.slideClass}, swiper-slide`);
    if (!slideEl || !swiper.slides.includes(slideEl)) return;
    focusTargetSlideEl = slideEl;
    const isActive = swiper.slides.indexOf(slideEl) === swiper.activeIndex;
    const isVisible = swiper.params.watchSlidesProgress && swiper.visibleSlides && swiper.visibleSlides.includes(slideEl);
    if (isActive || isVisible) return;
    if (e.sourceCapabilities && e.sourceCapabilities.firesTouchEvents) return;
    if (swiper.isHorizontal()) {
      swiper.el.scrollLeft = 0;
    } else {
      swiper.el.scrollTop = 0;
    }
    requestAnimationFrame(() => {
      if (preventFocusHandler) return;
      if (swiper.params.loop) {
        swiper.slideToLoop(swiper.getSlideIndexWhenGrid(parseInt(slideEl.getAttribute('data-swiper-slide-index'))), 0);
      } else {
        swiper.slideTo(swiper.getSlideIndexWhenGrid(swiper.slides.indexOf(slideEl)), 0);
      }
      preventFocusHandler = false;
    });
  };
  const initSlides = () => {
    const params = swiper.params.a11y;
    if (params.itemRoleDescriptionMessage) {
      addElRoleDescription(swiper.slides, params.itemRoleDescriptionMessage);
    }
    if (params.slideRole) {
      addElRole(swiper.slides, params.slideRole);
    }
    const slidesLength = swiper.slides.length;
    if (params.slideLabelMessage) {
      swiper.slides.forEach((slideEl, index) => {
        const slideIndex = swiper.params.loop ? parseInt(slideEl.getAttribute('data-swiper-slide-index'), 10) : index;
        const ariaLabelMessage = params.slideLabelMessage.replace(/\{\{index\}\}/, slideIndex + 1).replace(/\{\{slidesLength\}\}/, slidesLength);
        addElLabel(slideEl, ariaLabelMessage);
      });
    }
  };
  const init = () => {
    const params = swiper.params.a11y;
    swiper.el.append(liveRegion);

    // Container
    const containerEl = swiper.el;
    if (params.containerRoleDescriptionMessage) {
      addElRoleDescription(containerEl, params.containerRoleDescriptionMessage);
    }
    if (params.containerMessage) {
      addElLabel(containerEl, params.containerMessage);
    }
    if (params.containerRole) {
      addElRole(containerEl, params.containerRole);
    }

    // Wrapper
    const wrapperEl = swiper.wrapperEl;
    const wrapperId = params.id || wrapperEl.getAttribute('id') || `swiper-wrapper-${getRandomNumber(16)}`;
    const live = swiper.params.autoplay && swiper.params.autoplay.enabled ? 'off' : 'polite';
    addElId(wrapperEl, wrapperId);
    addElLive(wrapperEl, live);

    // Slide
    initSlides();

    // Navigation
    let {
      nextEl,
      prevEl
    } = swiper.navigation ? swiper.navigation : {};
    nextEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(nextEl);
    prevEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(prevEl);
    if (nextEl) {
      nextEl.forEach(el => initNavEl(el, wrapperId, params.nextSlideMessage));
    }
    if (prevEl) {
      prevEl.forEach(el => initNavEl(el, wrapperId, params.prevSlideMessage));
    }

    // Pagination
    if (hasClickablePagination()) {
      const paginationEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(swiper.pagination.el);
      paginationEl.forEach(el => {
        el.addEventListener('keydown', onEnterOrSpaceKey);
      });
    }

    // Tab focus
    const document = (0,_shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.g)();
    document.addEventListener('visibilitychange', onVisibilityChange);
    swiper.el.addEventListener('focus', handleFocus, true);
    swiper.el.addEventListener('focus', handleFocus, true);
    swiper.el.addEventListener('pointerdown', handlePointerDown, true);
    swiper.el.addEventListener('pointerup', handlePointerUp, true);
  };
  function destroy() {
    if (liveRegion) liveRegion.remove();
    let {
      nextEl,
      prevEl
    } = swiper.navigation ? swiper.navigation : {};
    nextEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(nextEl);
    prevEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(prevEl);
    if (nextEl) {
      nextEl.forEach(el => el.removeEventListener('keydown', onEnterOrSpaceKey));
    }
    if (prevEl) {
      prevEl.forEach(el => el.removeEventListener('keydown', onEnterOrSpaceKey));
    }

    // Pagination
    if (hasClickablePagination()) {
      const paginationEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(swiper.pagination.el);
      paginationEl.forEach(el => {
        el.removeEventListener('keydown', onEnterOrSpaceKey);
      });
    }
    const document = (0,_shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.g)();
    document.removeEventListener('visibilitychange', onVisibilityChange);
    // Tab focus
    if (swiper.el && typeof swiper.el !== 'string') {
      swiper.el.removeEventListener('focus', handleFocus, true);
      swiper.el.removeEventListener('pointerdown', handlePointerDown, true);
      swiper.el.removeEventListener('pointerup', handlePointerUp, true);
    }
  }
  on('beforeInit', () => {
    liveRegion = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.c)('span', swiper.params.a11y.notificationClass);
    liveRegion.setAttribute('aria-live', 'assertive');
    liveRegion.setAttribute('aria-atomic', 'true');
  });
  on('afterInit', () => {
    if (!swiper.params.a11y.enabled) return;
    init();
  });
  on('slidesLengthChange snapGridLengthChange slidesGridLengthChange', () => {
    if (!swiper.params.a11y.enabled) return;
    initSlides();
  });
  on('fromEdge toEdge afterInit lock unlock', () => {
    if (!swiper.params.a11y.enabled) return;
    updateNavigation();
  });
  on('paginationUpdate', () => {
    if (!swiper.params.a11y.enabled) return;
    updatePagination();
  });
  on('destroy', () => {
    if (!swiper.params.a11y.enabled) return;
    destroy();
  });
}




/***/ }),

/***/ "./node_modules/swiper/modules/autoplay.mjs":
/*!**************************************************!*\
  !*** ./node_modules/swiper/modules/autoplay.mjs ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Autoplay)
/* harmony export */ });
/* harmony import */ var _shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/ssr-window.esm.mjs */ "./node_modules/swiper/shared/ssr-window.esm.mjs");


/* eslint no-underscore-dangle: "off" */
/* eslint no-use-before-define: "off" */
function Autoplay(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit,
    params
  } = _ref;
  swiper.autoplay = {
    running: false,
    paused: false,
    timeLeft: 0
  };
  extendParams({
    autoplay: {
      enabled: false,
      delay: 3000,
      waitForTransition: true,
      disableOnInteraction: false,
      stopOnLastSlide: false,
      reverseDirection: false,
      pauseOnMouseEnter: false
    }
  });
  let timeout;
  let raf;
  let autoplayDelayTotal = params && params.autoplay ? params.autoplay.delay : 3000;
  let autoplayDelayCurrent = params && params.autoplay ? params.autoplay.delay : 3000;
  let autoplayTimeLeft;
  let autoplayStartTime = new Date().getTime();
  let wasPaused;
  let isTouched;
  let pausedByTouch;
  let touchStartTimeout;
  let slideChanged;
  let pausedByInteraction;
  let pausedByPointerEnter;
  function onTransitionEnd(e) {
    if (!swiper || swiper.destroyed || !swiper.wrapperEl) return;
    if (e.target !== swiper.wrapperEl) return;
    swiper.wrapperEl.removeEventListener('transitionend', onTransitionEnd);
    if (pausedByPointerEnter || e.detail && e.detail.bySwiperTouchMove) {
      return;
    }
    resume();
  }
  const calcTimeLeft = () => {
    if (swiper.destroyed || !swiper.autoplay.running) return;
    if (swiper.autoplay.paused) {
      wasPaused = true;
    } else if (wasPaused) {
      autoplayDelayCurrent = autoplayTimeLeft;
      wasPaused = false;
    }
    const timeLeft = swiper.autoplay.paused ? autoplayTimeLeft : autoplayStartTime + autoplayDelayCurrent - new Date().getTime();
    swiper.autoplay.timeLeft = timeLeft;
    emit('autoplayTimeLeft', timeLeft, timeLeft / autoplayDelayTotal);
    raf = requestAnimationFrame(() => {
      calcTimeLeft();
    });
  };
  const getSlideDelay = () => {
    let activeSlideEl;
    if (swiper.virtual && swiper.params.virtual.enabled) {
      activeSlideEl = swiper.slides.find(slideEl => slideEl.classList.contains('swiper-slide-active'));
    } else {
      activeSlideEl = swiper.slides[swiper.activeIndex];
    }
    if (!activeSlideEl) return undefined;
    const currentSlideDelay = parseInt(activeSlideEl.getAttribute('data-swiper-autoplay'), 10);
    return currentSlideDelay;
  };
  const run = delayForce => {
    if (swiper.destroyed || !swiper.autoplay.running) return;
    cancelAnimationFrame(raf);
    calcTimeLeft();
    let delay = typeof delayForce === 'undefined' ? swiper.params.autoplay.delay : delayForce;
    autoplayDelayTotal = swiper.params.autoplay.delay;
    autoplayDelayCurrent = swiper.params.autoplay.delay;
    const currentSlideDelay = getSlideDelay();
    if (!Number.isNaN(currentSlideDelay) && currentSlideDelay > 0 && typeof delayForce === 'undefined') {
      delay = currentSlideDelay;
      autoplayDelayTotal = currentSlideDelay;
      autoplayDelayCurrent = currentSlideDelay;
    }
    autoplayTimeLeft = delay;
    const speed = swiper.params.speed;
    const proceed = () => {
      if (!swiper || swiper.destroyed) return;
      if (swiper.params.autoplay.reverseDirection) {
        if (!swiper.isBeginning || swiper.params.loop || swiper.params.rewind) {
          swiper.slidePrev(speed, true, true);
          emit('autoplay');
        } else if (!swiper.params.autoplay.stopOnLastSlide) {
          swiper.slideTo(swiper.slides.length - 1, speed, true, true);
          emit('autoplay');
        }
      } else {
        if (!swiper.isEnd || swiper.params.loop || swiper.params.rewind) {
          swiper.slideNext(speed, true, true);
          emit('autoplay');
        } else if (!swiper.params.autoplay.stopOnLastSlide) {
          swiper.slideTo(0, speed, true, true);
          emit('autoplay');
        }
      }
      if (swiper.params.cssMode) {
        autoplayStartTime = new Date().getTime();
        requestAnimationFrame(() => {
          run();
        });
      }
    };
    if (delay > 0) {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        proceed();
      }, delay);
    } else {
      requestAnimationFrame(() => {
        proceed();
      });
    }

    // eslint-disable-next-line
    return delay;
  };
  const start = () => {
    autoplayStartTime = new Date().getTime();
    swiper.autoplay.running = true;
    run();
    emit('autoplayStart');
  };
  const stop = () => {
    swiper.autoplay.running = false;
    clearTimeout(timeout);
    cancelAnimationFrame(raf);
    emit('autoplayStop');
  };
  const pause = (internal, reset) => {
    if (swiper.destroyed || !swiper.autoplay.running) return;
    clearTimeout(timeout);
    if (!internal) {
      pausedByInteraction = true;
    }
    const proceed = () => {
      emit('autoplayPause');
      if (swiper.params.autoplay.waitForTransition) {
        swiper.wrapperEl.addEventListener('transitionend', onTransitionEnd);
      } else {
        resume();
      }
    };
    swiper.autoplay.paused = true;
    if (reset) {
      if (slideChanged) {
        autoplayTimeLeft = swiper.params.autoplay.delay;
      }
      slideChanged = false;
      proceed();
      return;
    }
    const delay = autoplayTimeLeft || swiper.params.autoplay.delay;
    autoplayTimeLeft = delay - (new Date().getTime() - autoplayStartTime);
    if (swiper.isEnd && autoplayTimeLeft < 0 && !swiper.params.loop) return;
    if (autoplayTimeLeft < 0) autoplayTimeLeft = 0;
    proceed();
  };
  const resume = () => {
    if (swiper.isEnd && autoplayTimeLeft < 0 && !swiper.params.loop || swiper.destroyed || !swiper.autoplay.running) return;
    autoplayStartTime = new Date().getTime();
    if (pausedByInteraction) {
      pausedByInteraction = false;
      run(autoplayTimeLeft);
    } else {
      run();
    }
    swiper.autoplay.paused = false;
    emit('autoplayResume');
  };
  const onVisibilityChange = () => {
    if (swiper.destroyed || !swiper.autoplay.running) return;
    const document = (0,_shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.g)();
    if (document.visibilityState === 'hidden') {
      pausedByInteraction = true;
      pause(true);
    }
    if (document.visibilityState === 'visible') {
      resume();
    }
  };
  const onPointerEnter = e => {
    if (e.pointerType !== 'mouse') return;
    pausedByInteraction = true;
    pausedByPointerEnter = true;
    if (swiper.animating || swiper.autoplay.paused) return;
    pause(true);
  };
  const onPointerLeave = e => {
    if (e.pointerType !== 'mouse') return;
    pausedByPointerEnter = false;
    if (swiper.autoplay.paused) {
      resume();
    }
  };
  const attachMouseEvents = () => {
    if (swiper.params.autoplay.pauseOnMouseEnter) {
      swiper.el.addEventListener('pointerenter', onPointerEnter);
      swiper.el.addEventListener('pointerleave', onPointerLeave);
    }
  };
  const detachMouseEvents = () => {
    if (swiper.el && typeof swiper.el !== 'string') {
      swiper.el.removeEventListener('pointerenter', onPointerEnter);
      swiper.el.removeEventListener('pointerleave', onPointerLeave);
    }
  };
  const attachDocumentEvents = () => {
    const document = (0,_shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.g)();
    document.addEventListener('visibilitychange', onVisibilityChange);
  };
  const detachDocumentEvents = () => {
    const document = (0,_shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.g)();
    document.removeEventListener('visibilitychange', onVisibilityChange);
  };
  on('init', () => {
    if (swiper.params.autoplay.enabled) {
      attachMouseEvents();
      attachDocumentEvents();
      start();
    }
  });
  on('destroy', () => {
    detachMouseEvents();
    detachDocumentEvents();
    if (swiper.autoplay.running) {
      stop();
    }
  });
  on('_freeModeStaticRelease', () => {
    if (pausedByTouch || pausedByInteraction) {
      resume();
    }
  });
  on('_freeModeNoMomentumRelease', () => {
    if (!swiper.params.autoplay.disableOnInteraction) {
      pause(true, true);
    } else {
      stop();
    }
  });
  on('beforeTransitionStart', (_s, speed, internal) => {
    if (swiper.destroyed || !swiper.autoplay.running) return;
    if (internal || !swiper.params.autoplay.disableOnInteraction) {
      pause(true, true);
    } else {
      stop();
    }
  });
  on('sliderFirstMove', () => {
    if (swiper.destroyed || !swiper.autoplay.running) return;
    if (swiper.params.autoplay.disableOnInteraction) {
      stop();
      return;
    }
    isTouched = true;
    pausedByTouch = false;
    pausedByInteraction = false;
    touchStartTimeout = setTimeout(() => {
      pausedByInteraction = true;
      pausedByTouch = true;
      pause(true);
    }, 200);
  });
  on('touchEnd', () => {
    if (swiper.destroyed || !swiper.autoplay.running || !isTouched) return;
    clearTimeout(touchStartTimeout);
    clearTimeout(timeout);
    if (swiper.params.autoplay.disableOnInteraction) {
      pausedByTouch = false;
      isTouched = false;
      return;
    }
    if (pausedByTouch && swiper.params.cssMode) resume();
    pausedByTouch = false;
    isTouched = false;
  });
  on('slideChange', () => {
    if (swiper.destroyed || !swiper.autoplay.running) return;
    slideChanged = true;
  });
  Object.assign(swiper.autoplay, {
    start,
    stop,
    pause,
    resume
  });
}




/***/ }),

/***/ "./node_modules/swiper/modules/controller.mjs":
/*!****************************************************!*\
  !*** ./node_modules/swiper/modules/controller.mjs ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Controller)
/* harmony export */ });
/* harmony import */ var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");


/* eslint no-bitwise: ["error", { "allow": [">>"] }] */
function Controller(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    controller: {
      control: undefined,
      inverse: false,
      by: 'slide' // or 'container'
    }
  });

  swiper.controller = {
    control: undefined
  };
  function LinearSpline(x, y) {
    const binarySearch = function search() {
      let maxIndex;
      let minIndex;
      let guess;
      return (array, val) => {
        minIndex = -1;
        maxIndex = array.length;
        while (maxIndex - minIndex > 1) {
          guess = maxIndex + minIndex >> 1;
          if (array[guess] <= val) {
            minIndex = guess;
          } else {
            maxIndex = guess;
          }
        }
        return maxIndex;
      };
    }();
    this.x = x;
    this.y = y;
    this.lastIndex = x.length - 1;
    // Given an x value (x2), return the expected y2 value:
    // (x1,y1) is the known point before given value,
    // (x3,y3) is the known point after given value.
    let i1;
    let i3;
    this.interpolate = function interpolate(x2) {
      if (!x2) return 0;

      // Get the indexes of x1 and x3 (the array indexes before and after given x2):
      i3 = binarySearch(this.x, x2);
      i1 = i3 - 1;

      // We have our indexes i1 & i3, so we can calculate already:
      // y2 := ((x2−x1) × (y3−y1)) ÷ (x3−x1) + y1
      return (x2 - this.x[i1]) * (this.y[i3] - this.y[i1]) / (this.x[i3] - this.x[i1]) + this.y[i1];
    };
    return this;
  }
  function getInterpolateFunction(c) {
    swiper.controller.spline = swiper.params.loop ? new LinearSpline(swiper.slidesGrid, c.slidesGrid) : new LinearSpline(swiper.snapGrid, c.snapGrid);
  }
  function setTranslate(_t, byController) {
    const controlled = swiper.controller.control;
    let multiplier;
    let controlledTranslate;
    const Swiper = swiper.constructor;
    function setControlledTranslate(c) {
      if (c.destroyed) return;

      // this will create an Interpolate function based on the snapGrids
      // x is the Grid of the scrolled scroller and y will be the controlled scroller
      // it makes sense to create this only once and recall it for the interpolation
      // the function does a lot of value caching for performance
      const translate = swiper.rtlTranslate ? -swiper.translate : swiper.translate;
      if (swiper.params.controller.by === 'slide') {
        getInterpolateFunction(c);
        // i am not sure why the values have to be multiplicated this way, tried to invert the snapGrid
        // but it did not work out
        controlledTranslate = -swiper.controller.spline.interpolate(-translate);
      }
      if (!controlledTranslate || swiper.params.controller.by === 'container') {
        multiplier = (c.maxTranslate() - c.minTranslate()) / (swiper.maxTranslate() - swiper.minTranslate());
        if (Number.isNaN(multiplier) || !Number.isFinite(multiplier)) {
          multiplier = 1;
        }
        controlledTranslate = (translate - swiper.minTranslate()) * multiplier + c.minTranslate();
      }
      if (swiper.params.controller.inverse) {
        controlledTranslate = c.maxTranslate() - controlledTranslate;
      }
      c.updateProgress(controlledTranslate);
      c.setTranslate(controlledTranslate, swiper);
      c.updateActiveIndex();
      c.updateSlidesClasses();
    }
    if (Array.isArray(controlled)) {
      for (let i = 0; i < controlled.length; i += 1) {
        if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
          setControlledTranslate(controlled[i]);
        }
      }
    } else if (controlled instanceof Swiper && byController !== controlled) {
      setControlledTranslate(controlled);
    }
  }
  function setTransition(duration, byController) {
    const Swiper = swiper.constructor;
    const controlled = swiper.controller.control;
    let i;
    function setControlledTransition(c) {
      if (c.destroyed) return;
      c.setTransition(duration, swiper);
      if (duration !== 0) {
        c.transitionStart();
        if (c.params.autoHeight) {
          (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.n)(() => {
            c.updateAutoHeight();
          });
        }
        (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.l)(c.wrapperEl, () => {
          if (!controlled) return;
          c.transitionEnd();
        });
      }
    }
    if (Array.isArray(controlled)) {
      for (i = 0; i < controlled.length; i += 1) {
        if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
          setControlledTransition(controlled[i]);
        }
      }
    } else if (controlled instanceof Swiper && byController !== controlled) {
      setControlledTransition(controlled);
    }
  }
  function removeSpline() {
    if (!swiper.controller.control) return;
    if (swiper.controller.spline) {
      swiper.controller.spline = undefined;
      delete swiper.controller.spline;
    }
  }
  on('beforeInit', () => {
    if (typeof window !== 'undefined' && (
    // eslint-disable-line
    typeof swiper.params.controller.control === 'string' || swiper.params.controller.control instanceof HTMLElement)) {
      const controlElements = typeof swiper.params.controller.control === 'string' ? [...document.querySelectorAll(swiper.params.controller.control)] : [swiper.params.controller.control];
      controlElements.forEach(controlElement => {
        if (!swiper.controller.control) swiper.controller.control = [];
        if (controlElement && controlElement.swiper) {
          swiper.controller.control.push(controlElement.swiper);
        } else if (controlElement) {
          const eventName = `${swiper.params.eventsPrefix}init`;
          const onControllerSwiper = e => {
            swiper.controller.control.push(e.detail[0]);
            swiper.update();
            controlElement.removeEventListener(eventName, onControllerSwiper);
          };
          controlElement.addEventListener(eventName, onControllerSwiper);
        }
      });
      return;
    }
    swiper.controller.control = swiper.params.controller.control;
  });
  on('update', () => {
    removeSpline();
  });
  on('resize', () => {
    removeSpline();
  });
  on('observerUpdate', () => {
    removeSpline();
  });
  on('setTranslate', (_s, translate, byController) => {
    if (!swiper.controller.control || swiper.controller.control.destroyed) return;
    swiper.controller.setTranslate(translate, byController);
  });
  on('setTransition', (_s, duration, byController) => {
    if (!swiper.controller.control || swiper.controller.control.destroyed) return;
    swiper.controller.setTransition(duration, byController);
  });
  Object.assign(swiper.controller, {
    setTranslate,
    setTransition
  });
}




/***/ }),

/***/ "./node_modules/swiper/modules/effect-cards.mjs":
/*!******************************************************!*\
  !*** ./node_modules/swiper/modules/effect-cards.mjs ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EffectCards)
/* harmony export */ });
/* harmony import */ var _shared_create_shadow_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/create-shadow.mjs */ "./node_modules/swiper/shared/create-shadow.mjs");
/* harmony import */ var _shared_effect_init_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/effect-init.mjs */ "./node_modules/swiper/shared/effect-init.mjs");
/* harmony import */ var _shared_effect_target_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/effect-target.mjs */ "./node_modules/swiper/shared/effect-target.mjs");
/* harmony import */ var _shared_effect_virtual_transition_end_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/effect-virtual-transition-end.mjs */ "./node_modules/swiper/shared/effect-virtual-transition-end.mjs");
/* harmony import */ var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");






function EffectCards(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    cardsEffect: {
      slideShadows: true,
      rotate: true,
      perSlideRotate: 2,
      perSlideOffset: 8
    }
  });
  const setTranslate = () => {
    const {
      slides,
      activeIndex,
      rtlTranslate: rtl
    } = swiper;
    const params = swiper.params.cardsEffect;
    const {
      startTranslate,
      isTouched
    } = swiper.touchEventsData;
    const currentTranslate = rtl ? -swiper.translate : swiper.translate;
    for (let i = 0; i < slides.length; i += 1) {
      const slideEl = slides[i];
      const slideProgress = slideEl.progress;
      const progress = Math.min(Math.max(slideProgress, -4), 4);
      let offset = slideEl.swiperSlideOffset;
      if (swiper.params.centeredSlides && !swiper.params.cssMode) {
        swiper.wrapperEl.style.transform = `translateX(${swiper.minTranslate()}px)`;
      }
      if (swiper.params.centeredSlides && swiper.params.cssMode) {
        offset -= slides[0].swiperSlideOffset;
      }
      let tX = swiper.params.cssMode ? -offset - swiper.translate : -offset;
      let tY = 0;
      const tZ = -100 * Math.abs(progress);
      let scale = 1;
      let rotate = -params.perSlideRotate * progress;
      let tXAdd = params.perSlideOffset - Math.abs(progress) * 0.75;
      const slideIndex = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.from + i : i;
      const isSwipeToNext = (slideIndex === activeIndex || slideIndex === activeIndex - 1) && progress > 0 && progress < 1 && (isTouched || swiper.params.cssMode) && currentTranslate < startTranslate;
      const isSwipeToPrev = (slideIndex === activeIndex || slideIndex === activeIndex + 1) && progress < 0 && progress > -1 && (isTouched || swiper.params.cssMode) && currentTranslate > startTranslate;
      if (isSwipeToNext || isSwipeToPrev) {
        const subProgress = (1 - Math.abs((Math.abs(progress) - 0.5) / 0.5)) ** 0.5;
        rotate += -28 * progress * subProgress;
        scale += -0.5 * subProgress;
        tXAdd += 96 * subProgress;
        tY = `${-25 * subProgress * Math.abs(progress)}%`;
      }
      if (progress < 0) {
        // next
        tX = `calc(${tX}px ${rtl ? '-' : '+'} (${tXAdd * Math.abs(progress)}%))`;
      } else if (progress > 0) {
        // prev
        tX = `calc(${tX}px ${rtl ? '-' : '+'} (-${tXAdd * Math.abs(progress)}%))`;
      } else {
        tX = `${tX}px`;
      }
      if (!swiper.isHorizontal()) {
        const prevY = tY;
        tY = tX;
        tX = prevY;
      }
      const scaleString = progress < 0 ? `${1 + (1 - scale) * progress}` : `${1 - (1 - scale) * progress}`;

      /* eslint-disable */
      const transform = `
        translate3d(${tX}, ${tY}, ${tZ}px)
        rotateZ(${params.rotate ? rtl ? -rotate : rotate : 0}deg)
        scale(${scaleString})
      `;
      /* eslint-enable */

      if (params.slideShadows) {
        // Set shadows
        let shadowEl = slideEl.querySelector('.swiper-slide-shadow');
        if (!shadowEl) {
          shadowEl = (0,_shared_create_shadow_mjs__WEBPACK_IMPORTED_MODULE_0__.c)('cards', slideEl);
        }
        if (shadowEl) shadowEl.style.opacity = Math.min(Math.max((Math.abs(progress) - 0.5) / 0.5, 0), 1);
      }
      slideEl.style.zIndex = -Math.abs(Math.round(slideProgress)) + slides.length;
      const targetEl = (0,_shared_effect_target_mjs__WEBPACK_IMPORTED_MODULE_2__.e)(params, slideEl);
      targetEl.style.transform = transform;
    }
  };
  const setTransition = duration => {
    const transformElements = swiper.slides.map(slideEl => (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_4__.g)(slideEl));
    transformElements.forEach(el => {
      el.style.transitionDuration = `${duration}ms`;
      el.querySelectorAll('.swiper-slide-shadow').forEach(shadowEl => {
        shadowEl.style.transitionDuration = `${duration}ms`;
      });
    });
    (0,_shared_effect_virtual_transition_end_mjs__WEBPACK_IMPORTED_MODULE_3__.e)({
      swiper,
      duration,
      transformElements
    });
  };
  (0,_shared_effect_init_mjs__WEBPACK_IMPORTED_MODULE_1__.e)({
    effect: 'cards',
    swiper,
    on,
    setTranslate,
    setTransition,
    perspective: () => true,
    overwriteParams: () => ({
      _loopSwapReset: false,
      watchSlidesProgress: true,
      loopAdditionalSlides: swiper.params.cardsEffect.rotate ? 3 : 2,
      centeredSlides: true,
      virtualTranslate: !swiper.params.cssMode
    })
  });
}




/***/ }),

/***/ "./node_modules/swiper/modules/effect-coverflow.mjs":
/*!**********************************************************!*\
  !*** ./node_modules/swiper/modules/effect-coverflow.mjs ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EffectCoverflow)
/* harmony export */ });
/* harmony import */ var _shared_create_shadow_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/create-shadow.mjs */ "./node_modules/swiper/shared/create-shadow.mjs");
/* harmony import */ var _shared_effect_init_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/effect-init.mjs */ "./node_modules/swiper/shared/effect-init.mjs");
/* harmony import */ var _shared_effect_target_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/effect-target.mjs */ "./node_modules/swiper/shared/effect-target.mjs");
/* harmony import */ var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");





function EffectCoverflow(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      scale: 1,
      modifier: 1,
      slideShadows: true
    }
  });
  const setTranslate = () => {
    const {
      width: swiperWidth,
      height: swiperHeight,
      slides,
      slidesSizesGrid
    } = swiper;
    const params = swiper.params.coverflowEffect;
    const isHorizontal = swiper.isHorizontal();
    const transform = swiper.translate;
    const center = isHorizontal ? -transform + swiperWidth / 2 : -transform + swiperHeight / 2;
    const rotate = isHorizontal ? params.rotate : -params.rotate;
    const translate = params.depth;
    const r = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_3__.p)(swiper);
    // Each slide offset from center
    for (let i = 0, length = slides.length; i < length; i += 1) {
      const slideEl = slides[i];
      const slideSize = slidesSizesGrid[i];
      const slideOffset = slideEl.swiperSlideOffset;
      const centerOffset = (center - slideOffset - slideSize / 2) / slideSize;
      const offsetMultiplier = typeof params.modifier === 'function' ? params.modifier(centerOffset) : centerOffset * params.modifier;
      let rotateY = isHorizontal ? rotate * offsetMultiplier : 0;
      let rotateX = isHorizontal ? 0 : rotate * offsetMultiplier;
      // var rotateZ = 0
      let translateZ = -translate * Math.abs(offsetMultiplier);
      let stretch = params.stretch;
      // Allow percentage to make a relative stretch for responsive sliders
      if (typeof stretch === 'string' && stretch.indexOf('%') !== -1) {
        stretch = parseFloat(params.stretch) / 100 * slideSize;
      }
      let translateY = isHorizontal ? 0 : stretch * offsetMultiplier;
      let translateX = isHorizontal ? stretch * offsetMultiplier : 0;
      let scale = 1 - (1 - params.scale) * Math.abs(offsetMultiplier);

      // Fix for ultra small values
      if (Math.abs(translateX) < 0.001) translateX = 0;
      if (Math.abs(translateY) < 0.001) translateY = 0;
      if (Math.abs(translateZ) < 0.001) translateZ = 0;
      if (Math.abs(rotateY) < 0.001) rotateY = 0;
      if (Math.abs(rotateX) < 0.001) rotateX = 0;
      if (Math.abs(scale) < 0.001) scale = 0;
      const slideTransform = `translate3d(${translateX}px,${translateY}px,${translateZ}px)  rotateX(${r(rotateX)}deg) rotateY(${r(rotateY)}deg) scale(${scale})`;
      const targetEl = (0,_shared_effect_target_mjs__WEBPACK_IMPORTED_MODULE_2__.e)(params, slideEl);
      targetEl.style.transform = slideTransform;
      slideEl.style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;
      if (params.slideShadows) {
        // Set shadows
        let shadowBeforeEl = isHorizontal ? slideEl.querySelector('.swiper-slide-shadow-left') : slideEl.querySelector('.swiper-slide-shadow-top');
        let shadowAfterEl = isHorizontal ? slideEl.querySelector('.swiper-slide-shadow-right') : slideEl.querySelector('.swiper-slide-shadow-bottom');
        if (!shadowBeforeEl) {
          shadowBeforeEl = (0,_shared_create_shadow_mjs__WEBPACK_IMPORTED_MODULE_0__.c)('coverflow', slideEl, isHorizontal ? 'left' : 'top');
        }
        if (!shadowAfterEl) {
          shadowAfterEl = (0,_shared_create_shadow_mjs__WEBPACK_IMPORTED_MODULE_0__.c)('coverflow', slideEl, isHorizontal ? 'right' : 'bottom');
        }
        if (shadowBeforeEl) shadowBeforeEl.style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0;
        if (shadowAfterEl) shadowAfterEl.style.opacity = -offsetMultiplier > 0 ? -offsetMultiplier : 0;
      }
    }
  };
  const setTransition = duration => {
    const transformElements = swiper.slides.map(slideEl => (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_3__.g)(slideEl));
    transformElements.forEach(el => {
      el.style.transitionDuration = `${duration}ms`;
      el.querySelectorAll('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').forEach(shadowEl => {
        shadowEl.style.transitionDuration = `${duration}ms`;
      });
    });
  };
  (0,_shared_effect_init_mjs__WEBPACK_IMPORTED_MODULE_1__.e)({
    effect: 'coverflow',
    swiper,
    on,
    setTranslate,
    setTransition,
    perspective: () => true,
    overwriteParams: () => ({
      watchSlidesProgress: true
    })
  });
}




/***/ }),

/***/ "./node_modules/swiper/modules/effect-creative.mjs":
/*!*********************************************************!*\
  !*** ./node_modules/swiper/modules/effect-creative.mjs ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EffectCreative)
/* harmony export */ });
/* harmony import */ var _shared_create_shadow_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/create-shadow.mjs */ "./node_modules/swiper/shared/create-shadow.mjs");
/* harmony import */ var _shared_effect_init_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/effect-init.mjs */ "./node_modules/swiper/shared/effect-init.mjs");
/* harmony import */ var _shared_effect_target_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/effect-target.mjs */ "./node_modules/swiper/shared/effect-target.mjs");
/* harmony import */ var _shared_effect_virtual_transition_end_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/effect-virtual-transition-end.mjs */ "./node_modules/swiper/shared/effect-virtual-transition-end.mjs");
/* harmony import */ var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");






function EffectCreative(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    creativeEffect: {
      limitProgress: 1,
      shadowPerProgress: false,
      progressMultiplier: 1,
      perspective: true,
      prev: {
        translate: [0, 0, 0],
        rotate: [0, 0, 0],
        opacity: 1,
        scale: 1
      },
      next: {
        translate: [0, 0, 0],
        rotate: [0, 0, 0],
        opacity: 1,
        scale: 1
      }
    }
  });
  const getTranslateValue = value => {
    if (typeof value === 'string') return value;
    return `${value}px`;
  };
  const setTranslate = () => {
    const {
      slides,
      wrapperEl,
      slidesSizesGrid
    } = swiper;
    const params = swiper.params.creativeEffect;
    const {
      progressMultiplier: multiplier
    } = params;
    const isCenteredSlides = swiper.params.centeredSlides;
    const rotateFix = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_4__.p)(swiper);
    if (isCenteredSlides) {
      const margin = slidesSizesGrid[0] / 2 - swiper.params.slidesOffsetBefore || 0;
      wrapperEl.style.transform = `translateX(calc(50% - ${margin}px))`;
    }
    for (let i = 0; i < slides.length; i += 1) {
      const slideEl = slides[i];
      const slideProgress = slideEl.progress;
      const progress = Math.min(Math.max(slideEl.progress, -params.limitProgress), params.limitProgress);
      let originalProgress = progress;
      if (!isCenteredSlides) {
        originalProgress = Math.min(Math.max(slideEl.originalProgress, -params.limitProgress), params.limitProgress);
      }
      const offset = slideEl.swiperSlideOffset;
      const t = [swiper.params.cssMode ? -offset - swiper.translate : -offset, 0, 0];
      const r = [0, 0, 0];
      let custom = false;
      if (!swiper.isHorizontal()) {
        t[1] = t[0];
        t[0] = 0;
      }
      let data = {
        translate: [0, 0, 0],
        rotate: [0, 0, 0],
        scale: 1,
        opacity: 1
      };
      if (progress < 0) {
        data = params.next;
        custom = true;
      } else if (progress > 0) {
        data = params.prev;
        custom = true;
      }
      // set translate
      t.forEach((value, index) => {
        t[index] = `calc(${value}px + (${getTranslateValue(data.translate[index])} * ${Math.abs(progress * multiplier)}))`;
      });
      // set rotates
      r.forEach((value, index) => {
        let val = data.rotate[index] * Math.abs(progress * multiplier);
        r[index] = val;
      });
      slideEl.style.zIndex = -Math.abs(Math.round(slideProgress)) + slides.length;
      const translateString = t.join(', ');
      const rotateString = `rotateX(${rotateFix(r[0])}deg) rotateY(${rotateFix(r[1])}deg) rotateZ(${rotateFix(r[2])}deg)`;
      const scaleString = originalProgress < 0 ? `scale(${1 + (1 - data.scale) * originalProgress * multiplier})` : `scale(${1 - (1 - data.scale) * originalProgress * multiplier})`;
      const opacityString = originalProgress < 0 ? 1 + (1 - data.opacity) * originalProgress * multiplier : 1 - (1 - data.opacity) * originalProgress * multiplier;
      const transform = `translate3d(${translateString}) ${rotateString} ${scaleString}`;

      // Set shadows
      if (custom && data.shadow || !custom) {
        let shadowEl = slideEl.querySelector('.swiper-slide-shadow');
        if (!shadowEl && data.shadow) {
          shadowEl = (0,_shared_create_shadow_mjs__WEBPACK_IMPORTED_MODULE_0__.c)('creative', slideEl);
        }
        if (shadowEl) {
          const shadowOpacity = params.shadowPerProgress ? progress * (1 / params.limitProgress) : progress;
          shadowEl.style.opacity = Math.min(Math.max(Math.abs(shadowOpacity), 0), 1);
        }
      }
      const targetEl = (0,_shared_effect_target_mjs__WEBPACK_IMPORTED_MODULE_2__.e)(params, slideEl);
      targetEl.style.transform = transform;
      targetEl.style.opacity = opacityString;
      if (data.origin) {
        targetEl.style.transformOrigin = data.origin;
      }
    }
  };
  const setTransition = duration => {
    const transformElements = swiper.slides.map(slideEl => (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_4__.g)(slideEl));
    transformElements.forEach(el => {
      el.style.transitionDuration = `${duration}ms`;
      el.querySelectorAll('.swiper-slide-shadow').forEach(shadowEl => {
        shadowEl.style.transitionDuration = `${duration}ms`;
      });
    });
    (0,_shared_effect_virtual_transition_end_mjs__WEBPACK_IMPORTED_MODULE_3__.e)({
      swiper,
      duration,
      transformElements,
      allSlides: true
    });
  };
  (0,_shared_effect_init_mjs__WEBPACK_IMPORTED_MODULE_1__.e)({
    effect: 'creative',
    swiper,
    on,
    setTranslate,
    setTransition,
    perspective: () => swiper.params.creativeEffect.perspective,
    overwriteParams: () => ({
      watchSlidesProgress: true,
      virtualTranslate: !swiper.params.cssMode
    })
  });
}




/***/ }),

/***/ "./node_modules/swiper/modules/effect-cube.mjs":
/*!*****************************************************!*\
  !*** ./node_modules/swiper/modules/effect-cube.mjs ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EffectCube)
/* harmony export */ });
/* harmony import */ var _shared_effect_init_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/effect-init.mjs */ "./node_modules/swiper/shared/effect-init.mjs");
/* harmony import */ var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");



function EffectCube(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    cubeEffect: {
      slideShadows: true,
      shadow: true,
      shadowOffset: 20,
      shadowScale: 0.94
    }
  });
  const createSlideShadows = (slideEl, progress, isHorizontal) => {
    let shadowBefore = isHorizontal ? slideEl.querySelector('.swiper-slide-shadow-left') : slideEl.querySelector('.swiper-slide-shadow-top');
    let shadowAfter = isHorizontal ? slideEl.querySelector('.swiper-slide-shadow-right') : slideEl.querySelector('.swiper-slide-shadow-bottom');
    if (!shadowBefore) {
      shadowBefore = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.c)('div', `swiper-slide-shadow-cube swiper-slide-shadow-${isHorizontal ? 'left' : 'top'}`.split(' '));
      slideEl.append(shadowBefore);
    }
    if (!shadowAfter) {
      shadowAfter = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.c)('div', `swiper-slide-shadow-cube swiper-slide-shadow-${isHorizontal ? 'right' : 'bottom'}`.split(' '));
      slideEl.append(shadowAfter);
    }
    if (shadowBefore) shadowBefore.style.opacity = Math.max(-progress, 0);
    if (shadowAfter) shadowAfter.style.opacity = Math.max(progress, 0);
  };
  const recreateShadows = () => {
    // create new ones
    const isHorizontal = swiper.isHorizontal();
    swiper.slides.forEach(slideEl => {
      const progress = Math.max(Math.min(slideEl.progress, 1), -1);
      createSlideShadows(slideEl, progress, isHorizontal);
    });
  };
  const setTranslate = () => {
    const {
      el,
      wrapperEl,
      slides,
      width: swiperWidth,
      height: swiperHeight,
      rtlTranslate: rtl,
      size: swiperSize,
      browser
    } = swiper;
    const r = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.p)(swiper);
    const params = swiper.params.cubeEffect;
    const isHorizontal = swiper.isHorizontal();
    const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
    let wrapperRotate = 0;
    let cubeShadowEl;
    if (params.shadow) {
      if (isHorizontal) {
        cubeShadowEl = swiper.wrapperEl.querySelector('.swiper-cube-shadow');
        if (!cubeShadowEl) {
          cubeShadowEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.c)('div', 'swiper-cube-shadow');
          swiper.wrapperEl.append(cubeShadowEl);
        }
        cubeShadowEl.style.height = `${swiperWidth}px`;
      } else {
        cubeShadowEl = el.querySelector('.swiper-cube-shadow');
        if (!cubeShadowEl) {
          cubeShadowEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.c)('div', 'swiper-cube-shadow');
          el.append(cubeShadowEl);
        }
      }
    }
    for (let i = 0; i < slides.length; i += 1) {
      const slideEl = slides[i];
      let slideIndex = i;
      if (isVirtual) {
        slideIndex = parseInt(slideEl.getAttribute('data-swiper-slide-index'), 10);
      }
      let slideAngle = slideIndex * 90;
      let round = Math.floor(slideAngle / 360);
      if (rtl) {
        slideAngle = -slideAngle;
        round = Math.floor(-slideAngle / 360);
      }
      const progress = Math.max(Math.min(slideEl.progress, 1), -1);
      let tx = 0;
      let ty = 0;
      let tz = 0;
      if (slideIndex % 4 === 0) {
        tx = -round * 4 * swiperSize;
        tz = 0;
      } else if ((slideIndex - 1) % 4 === 0) {
        tx = 0;
        tz = -round * 4 * swiperSize;
      } else if ((slideIndex - 2) % 4 === 0) {
        tx = swiperSize + round * 4 * swiperSize;
        tz = swiperSize;
      } else if ((slideIndex - 3) % 4 === 0) {
        tx = -swiperSize;
        tz = 3 * swiperSize + swiperSize * 4 * round;
      }
      if (rtl) {
        tx = -tx;
      }
      if (!isHorizontal) {
        ty = tx;
        tx = 0;
      }
      const transform = `rotateX(${r(isHorizontal ? 0 : -slideAngle)}deg) rotateY(${r(isHorizontal ? slideAngle : 0)}deg) translate3d(${tx}px, ${ty}px, ${tz}px)`;
      if (progress <= 1 && progress > -1) {
        wrapperRotate = slideIndex * 90 + progress * 90;
        if (rtl) wrapperRotate = -slideIndex * 90 - progress * 90;
      }
      slideEl.style.transform = transform;
      if (params.slideShadows) {
        createSlideShadows(slideEl, progress, isHorizontal);
      }
    }
    wrapperEl.style.transformOrigin = `50% 50% -${swiperSize / 2}px`;
    wrapperEl.style['-webkit-transform-origin'] = `50% 50% -${swiperSize / 2}px`;
    if (params.shadow) {
      if (isHorizontal) {
        cubeShadowEl.style.transform = `translate3d(0px, ${swiperWidth / 2 + params.shadowOffset}px, ${-swiperWidth / 2}px) rotateX(89.99deg) rotateZ(0deg) scale(${params.shadowScale})`;
      } else {
        const shadowAngle = Math.abs(wrapperRotate) - Math.floor(Math.abs(wrapperRotate) / 90) * 90;
        const multiplier = 1.5 - (Math.sin(shadowAngle * 2 * Math.PI / 360) / 2 + Math.cos(shadowAngle * 2 * Math.PI / 360) / 2);
        const scale1 = params.shadowScale;
        const scale2 = params.shadowScale / multiplier;
        const offset = params.shadowOffset;
        cubeShadowEl.style.transform = `scale3d(${scale1}, 1, ${scale2}) translate3d(0px, ${swiperHeight / 2 + offset}px, ${-swiperHeight / 2 / scale2}px) rotateX(-89.99deg)`;
      }
    }
    const zFactor = (browser.isSafari || browser.isWebView) && browser.needPerspectiveFix ? -swiperSize / 2 : 0;
    wrapperEl.style.transform = `translate3d(0px,0,${zFactor}px) rotateX(${r(swiper.isHorizontal() ? 0 : wrapperRotate)}deg) rotateY(${r(swiper.isHorizontal() ? -wrapperRotate : 0)}deg)`;
    wrapperEl.style.setProperty('--swiper-cube-translate-z', `${zFactor}px`);
  };
  const setTransition = duration => {
    const {
      el,
      slides
    } = swiper;
    slides.forEach(slideEl => {
      slideEl.style.transitionDuration = `${duration}ms`;
      slideEl.querySelectorAll('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').forEach(subEl => {
        subEl.style.transitionDuration = `${duration}ms`;
      });
    });
    if (swiper.params.cubeEffect.shadow && !swiper.isHorizontal()) {
      const shadowEl = el.querySelector('.swiper-cube-shadow');
      if (shadowEl) shadowEl.style.transitionDuration = `${duration}ms`;
    }
  };
  (0,_shared_effect_init_mjs__WEBPACK_IMPORTED_MODULE_0__.e)({
    effect: 'cube',
    swiper,
    on,
    setTranslate,
    setTransition,
    recreateShadows,
    getEffectParams: () => swiper.params.cubeEffect,
    perspective: () => true,
    overwriteParams: () => ({
      slidesPerView: 1,
      slidesPerGroup: 1,
      watchSlidesProgress: true,
      resistanceRatio: 0,
      spaceBetween: 0,
      centeredSlides: false,
      virtualTranslate: true
    })
  });
}




/***/ }),

/***/ "./node_modules/swiper/modules/effect-fade.mjs":
/*!*****************************************************!*\
  !*** ./node_modules/swiper/modules/effect-fade.mjs ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EffectFade)
/* harmony export */ });
/* harmony import */ var _shared_effect_init_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/effect-init.mjs */ "./node_modules/swiper/shared/effect-init.mjs");
/* harmony import */ var _shared_effect_target_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/effect-target.mjs */ "./node_modules/swiper/shared/effect-target.mjs");
/* harmony import */ var _shared_effect_virtual_transition_end_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/effect-virtual-transition-end.mjs */ "./node_modules/swiper/shared/effect-virtual-transition-end.mjs");
/* harmony import */ var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");





function EffectFade(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    fadeEffect: {
      crossFade: false
    }
  });
  const setTranslate = () => {
    const {
      slides
    } = swiper;
    const params = swiper.params.fadeEffect;
    for (let i = 0; i < slides.length; i += 1) {
      const slideEl = swiper.slides[i];
      const offset = slideEl.swiperSlideOffset;
      let tx = -offset;
      if (!swiper.params.virtualTranslate) tx -= swiper.translate;
      let ty = 0;
      if (!swiper.isHorizontal()) {
        ty = tx;
        tx = 0;
      }
      const slideOpacity = swiper.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(slideEl.progress), 0) : 1 + Math.min(Math.max(slideEl.progress, -1), 0);
      const targetEl = (0,_shared_effect_target_mjs__WEBPACK_IMPORTED_MODULE_1__.e)(params, slideEl);
      targetEl.style.opacity = slideOpacity;
      targetEl.style.transform = `translate3d(${tx}px, ${ty}px, 0px)`;
    }
  };
  const setTransition = duration => {
    const transformElements = swiper.slides.map(slideEl => (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_3__.g)(slideEl));
    transformElements.forEach(el => {
      el.style.transitionDuration = `${duration}ms`;
    });
    (0,_shared_effect_virtual_transition_end_mjs__WEBPACK_IMPORTED_MODULE_2__.e)({
      swiper,
      duration,
      transformElements,
      allSlides: true
    });
  };
  (0,_shared_effect_init_mjs__WEBPACK_IMPORTED_MODULE_0__.e)({
    effect: 'fade',
    swiper,
    on,
    setTranslate,
    setTransition,
    overwriteParams: () => ({
      slidesPerView: 1,
      slidesPerGroup: 1,
      watchSlidesProgress: true,
      spaceBetween: 0,
      virtualTranslate: !swiper.params.cssMode
    })
  });
}




/***/ }),

/***/ "./node_modules/swiper/modules/effect-flip.mjs":
/*!*****************************************************!*\
  !*** ./node_modules/swiper/modules/effect-flip.mjs ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EffectFlip)
/* harmony export */ });
/* harmony import */ var _shared_create_shadow_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/create-shadow.mjs */ "./node_modules/swiper/shared/create-shadow.mjs");
/* harmony import */ var _shared_effect_init_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/effect-init.mjs */ "./node_modules/swiper/shared/effect-init.mjs");
/* harmony import */ var _shared_effect_target_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/effect-target.mjs */ "./node_modules/swiper/shared/effect-target.mjs");
/* harmony import */ var _shared_effect_virtual_transition_end_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/effect-virtual-transition-end.mjs */ "./node_modules/swiper/shared/effect-virtual-transition-end.mjs");
/* harmony import */ var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");






function EffectFlip(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    flipEffect: {
      slideShadows: true,
      limitRotation: true
    }
  });
  const createSlideShadows = (slideEl, progress) => {
    let shadowBefore = swiper.isHorizontal() ? slideEl.querySelector('.swiper-slide-shadow-left') : slideEl.querySelector('.swiper-slide-shadow-top');
    let shadowAfter = swiper.isHorizontal() ? slideEl.querySelector('.swiper-slide-shadow-right') : slideEl.querySelector('.swiper-slide-shadow-bottom');
    if (!shadowBefore) {
      shadowBefore = (0,_shared_create_shadow_mjs__WEBPACK_IMPORTED_MODULE_0__.c)('flip', slideEl, swiper.isHorizontal() ? 'left' : 'top');
    }
    if (!shadowAfter) {
      shadowAfter = (0,_shared_create_shadow_mjs__WEBPACK_IMPORTED_MODULE_0__.c)('flip', slideEl, swiper.isHorizontal() ? 'right' : 'bottom');
    }
    if (shadowBefore) shadowBefore.style.opacity = Math.max(-progress, 0);
    if (shadowAfter) shadowAfter.style.opacity = Math.max(progress, 0);
  };
  const recreateShadows = () => {
    // Set shadows
    swiper.params.flipEffect;
    swiper.slides.forEach(slideEl => {
      let progress = slideEl.progress;
      if (swiper.params.flipEffect.limitRotation) {
        progress = Math.max(Math.min(slideEl.progress, 1), -1);
      }
      createSlideShadows(slideEl, progress);
    });
  };
  const setTranslate = () => {
    const {
      slides,
      rtlTranslate: rtl
    } = swiper;
    const params = swiper.params.flipEffect;
    const rotateFix = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_4__.p)(swiper);
    for (let i = 0; i < slides.length; i += 1) {
      const slideEl = slides[i];
      let progress = slideEl.progress;
      if (swiper.params.flipEffect.limitRotation) {
        progress = Math.max(Math.min(slideEl.progress, 1), -1);
      }
      const offset = slideEl.swiperSlideOffset;
      const rotate = -180 * progress;
      let rotateY = rotate;
      let rotateX = 0;
      let tx = swiper.params.cssMode ? -offset - swiper.translate : -offset;
      let ty = 0;
      if (!swiper.isHorizontal()) {
        ty = tx;
        tx = 0;
        rotateX = -rotateY;
        rotateY = 0;
      } else if (rtl) {
        rotateY = -rotateY;
      }
      slideEl.style.zIndex = -Math.abs(Math.round(progress)) + slides.length;
      if (params.slideShadows) {
        createSlideShadows(slideEl, progress);
      }
      const transform = `translate3d(${tx}px, ${ty}px, 0px) rotateX(${rotateFix(rotateX)}deg) rotateY(${rotateFix(rotateY)}deg)`;
      const targetEl = (0,_shared_effect_target_mjs__WEBPACK_IMPORTED_MODULE_2__.e)(params, slideEl);
      targetEl.style.transform = transform;
    }
  };
  const setTransition = duration => {
    const transformElements = swiper.slides.map(slideEl => (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_4__.g)(slideEl));
    transformElements.forEach(el => {
      el.style.transitionDuration = `${duration}ms`;
      el.querySelectorAll('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').forEach(shadowEl => {
        shadowEl.style.transitionDuration = `${duration}ms`;
      });
    });
    (0,_shared_effect_virtual_transition_end_mjs__WEBPACK_IMPORTED_MODULE_3__.e)({
      swiper,
      duration,
      transformElements
    });
  };
  (0,_shared_effect_init_mjs__WEBPACK_IMPORTED_MODULE_1__.e)({
    effect: 'flip',
    swiper,
    on,
    setTranslate,
    setTransition,
    recreateShadows,
    getEffectParams: () => swiper.params.flipEffect,
    perspective: () => true,
    overwriteParams: () => ({
      slidesPerView: 1,
      slidesPerGroup: 1,
      watchSlidesProgress: true,
      spaceBetween: 0,
      virtualTranslate: !swiper.params.cssMode
    })
  });
}




/***/ }),

/***/ "./node_modules/swiper/modules/free-mode.mjs":
/*!***************************************************!*\
  !*** ./node_modules/swiper/modules/free-mode.mjs ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ freeMode)
/* harmony export */ });
/* harmony import */ var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");


function freeMode(_ref) {
  let {
    swiper,
    extendParams,
    emit,
    once
  } = _ref;
  extendParams({
    freeMode: {
      enabled: false,
      momentum: true,
      momentumRatio: 1,
      momentumBounce: true,
      momentumBounceRatio: 1,
      momentumVelocityRatio: 1,
      sticky: false,
      minimumVelocity: 0.02
    }
  });
  function onTouchStart() {
    if (swiper.params.cssMode) return;
    const translate = swiper.getTranslate();
    swiper.setTranslate(translate);
    swiper.setTransition(0);
    swiper.touchEventsData.velocities.length = 0;
    swiper.freeMode.onTouchEnd({
      currentPos: swiper.rtl ? swiper.translate : -swiper.translate
    });
  }
  function onTouchMove() {
    if (swiper.params.cssMode) return;
    const {
      touchEventsData: data,
      touches
    } = swiper;
    // Velocity
    if (data.velocities.length === 0) {
      data.velocities.push({
        position: touches[swiper.isHorizontal() ? 'startX' : 'startY'],
        time: data.touchStartTime
      });
    }
    data.velocities.push({
      position: touches[swiper.isHorizontal() ? 'currentX' : 'currentY'],
      time: (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.f)()
    });
  }
  function onTouchEnd(_ref2) {
    let {
      currentPos
    } = _ref2;
    if (swiper.params.cssMode) return;
    const {
      params,
      wrapperEl,
      rtlTranslate: rtl,
      snapGrid,
      touchEventsData: data
    } = swiper;
    // Time diff
    const touchEndTime = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.f)();
    const timeDiff = touchEndTime - data.touchStartTime;
    if (currentPos < -swiper.minTranslate()) {
      swiper.slideTo(swiper.activeIndex);
      return;
    }
    if (currentPos > -swiper.maxTranslate()) {
      if (swiper.slides.length < snapGrid.length) {
        swiper.slideTo(snapGrid.length - 1);
      } else {
        swiper.slideTo(swiper.slides.length - 1);
      }
      return;
    }
    if (params.freeMode.momentum) {
      if (data.velocities.length > 1) {
        const lastMoveEvent = data.velocities.pop();
        const velocityEvent = data.velocities.pop();
        const distance = lastMoveEvent.position - velocityEvent.position;
        const time = lastMoveEvent.time - velocityEvent.time;
        swiper.velocity = distance / time;
        swiper.velocity /= 2;
        if (Math.abs(swiper.velocity) < params.freeMode.minimumVelocity) {
          swiper.velocity = 0;
        }
        // this implies that the user stopped moving a finger then released.
        // There would be no events with distance zero, so the last event is stale.
        if (time > 150 || (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.f)() - lastMoveEvent.time > 300) {
          swiper.velocity = 0;
        }
      } else {
        swiper.velocity = 0;
      }
      swiper.velocity *= params.freeMode.momentumVelocityRatio;
      data.velocities.length = 0;
      let momentumDuration = 1000 * params.freeMode.momentumRatio;
      const momentumDistance = swiper.velocity * momentumDuration;
      let newPosition = swiper.translate + momentumDistance;
      if (rtl) newPosition = -newPosition;
      let doBounce = false;
      let afterBouncePosition;
      const bounceAmount = Math.abs(swiper.velocity) * 20 * params.freeMode.momentumBounceRatio;
      let needsLoopFix;
      if (newPosition < swiper.maxTranslate()) {
        if (params.freeMode.momentumBounce) {
          if (newPosition + swiper.maxTranslate() < -bounceAmount) {
            newPosition = swiper.maxTranslate() - bounceAmount;
          }
          afterBouncePosition = swiper.maxTranslate();
          doBounce = true;
          data.allowMomentumBounce = true;
        } else {
          newPosition = swiper.maxTranslate();
        }
        if (params.loop && params.centeredSlides) needsLoopFix = true;
      } else if (newPosition > swiper.minTranslate()) {
        if (params.freeMode.momentumBounce) {
          if (newPosition - swiper.minTranslate() > bounceAmount) {
            newPosition = swiper.minTranslate() + bounceAmount;
          }
          afterBouncePosition = swiper.minTranslate();
          doBounce = true;
          data.allowMomentumBounce = true;
        } else {
          newPosition = swiper.minTranslate();
        }
        if (params.loop && params.centeredSlides) needsLoopFix = true;
      } else if (params.freeMode.sticky) {
        let nextSlide;
        for (let j = 0; j < snapGrid.length; j += 1) {
          if (snapGrid[j] > -newPosition) {
            nextSlide = j;
            break;
          }
        }
        if (Math.abs(snapGrid[nextSlide] - newPosition) < Math.abs(snapGrid[nextSlide - 1] - newPosition) || swiper.swipeDirection === 'next') {
          newPosition = snapGrid[nextSlide];
        } else {
          newPosition = snapGrid[nextSlide - 1];
        }
        newPosition = -newPosition;
      }
      if (needsLoopFix) {
        once('transitionEnd', () => {
          swiper.loopFix();
        });
      }
      // Fix duration
      if (swiper.velocity !== 0) {
        if (rtl) {
          momentumDuration = Math.abs((-newPosition - swiper.translate) / swiper.velocity);
        } else {
          momentumDuration = Math.abs((newPosition - swiper.translate) / swiper.velocity);
        }
        if (params.freeMode.sticky) {
          // If freeMode.sticky is active and the user ends a swipe with a slow-velocity
          // event, then durations can be 20+ seconds to slide one (or zero!) slides.
          // It's easy to see this when simulating touch with mouse events. To fix this,
          // limit single-slide swipes to the default slide duration. This also has the
          // nice side effect of matching slide speed if the user stopped moving before
          // lifting finger or mouse vs. moving slowly before lifting the finger/mouse.
          // For faster swipes, also apply limits (albeit higher ones).
          const moveDistance = Math.abs((rtl ? -newPosition : newPosition) - swiper.translate);
          const currentSlideSize = swiper.slidesSizesGrid[swiper.activeIndex];
          if (moveDistance < currentSlideSize) {
            momentumDuration = params.speed;
          } else if (moveDistance < 2 * currentSlideSize) {
            momentumDuration = params.speed * 1.5;
          } else {
            momentumDuration = params.speed * 2.5;
          }
        }
      } else if (params.freeMode.sticky) {
        swiper.slideToClosest();
        return;
      }
      if (params.freeMode.momentumBounce && doBounce) {
        swiper.updateProgress(afterBouncePosition);
        swiper.setTransition(momentumDuration);
        swiper.setTranslate(newPosition);
        swiper.transitionStart(true, swiper.swipeDirection);
        swiper.animating = true;
        (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.l)(wrapperEl, () => {
          if (!swiper || swiper.destroyed || !data.allowMomentumBounce) return;
          emit('momentumBounce');
          swiper.setTransition(params.speed);
          setTimeout(() => {
            swiper.setTranslate(afterBouncePosition);
            (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.l)(wrapperEl, () => {
              if (!swiper || swiper.destroyed) return;
              swiper.transitionEnd();
            });
          }, 0);
        });
      } else if (swiper.velocity) {
        emit('_freeModeNoMomentumRelease');
        swiper.updateProgress(newPosition);
        swiper.setTransition(momentumDuration);
        swiper.setTranslate(newPosition);
        swiper.transitionStart(true, swiper.swipeDirection);
        if (!swiper.animating) {
          swiper.animating = true;
          (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.l)(wrapperEl, () => {
            if (!swiper || swiper.destroyed) return;
            swiper.transitionEnd();
          });
        }
      } else {
        swiper.updateProgress(newPosition);
      }
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    } else if (params.freeMode.sticky) {
      swiper.slideToClosest();
      return;
    } else if (params.freeMode) {
      emit('_freeModeNoMomentumRelease');
    }
    if (!params.freeMode.momentum || timeDiff >= params.longSwipesMs) {
      emit('_freeModeStaticRelease');
      swiper.updateProgress();
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    }
  }
  Object.assign(swiper, {
    freeMode: {
      onTouchStart,
      onTouchMove,
      onTouchEnd
    }
  });
}




/***/ }),

/***/ "./node_modules/swiper/modules/grid.mjs":
/*!**********************************************!*\
  !*** ./node_modules/swiper/modules/grid.mjs ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Grid)
/* harmony export */ });
function Grid(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    grid: {
      rows: 1,
      fill: 'column'
    }
  });
  let slidesNumberEvenToRows;
  let slidesPerRow;
  let numFullColumns;
  let wasMultiRow;
  const getSpaceBetween = () => {
    let spaceBetween = swiper.params.spaceBetween;
    if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
      spaceBetween = parseFloat(spaceBetween.replace('%', '')) / 100 * swiper.size;
    } else if (typeof spaceBetween === 'string') {
      spaceBetween = parseFloat(spaceBetween);
    }
    return spaceBetween;
  };
  const initSlides = slides => {
    const {
      slidesPerView
    } = swiper.params;
    const {
      rows,
      fill
    } = swiper.params.grid;
    const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : slides.length;
    numFullColumns = Math.floor(slidesLength / rows);
    if (Math.floor(slidesLength / rows) === slidesLength / rows) {
      slidesNumberEvenToRows = slidesLength;
    } else {
      slidesNumberEvenToRows = Math.ceil(slidesLength / rows) * rows;
    }
    if (slidesPerView !== 'auto' && fill === 'row') {
      slidesNumberEvenToRows = Math.max(slidesNumberEvenToRows, slidesPerView * rows);
    }
    slidesPerRow = slidesNumberEvenToRows / rows;
  };
  const unsetSlides = () => {
    if (swiper.slides) {
      swiper.slides.forEach(slide => {
        if (slide.swiperSlideGridSet) {
          slide.style.height = '';
          slide.style[swiper.getDirectionLabel('margin-top')] = '';
        }
      });
    }
  };
  const updateSlide = (i, slide, slides) => {
    const {
      slidesPerGroup
    } = swiper.params;
    const spaceBetween = getSpaceBetween();
    const {
      rows,
      fill
    } = swiper.params.grid;
    const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : slides.length;
    // Set slides order
    let newSlideOrderIndex;
    let column;
    let row;
    if (fill === 'row' && slidesPerGroup > 1) {
      const groupIndex = Math.floor(i / (slidesPerGroup * rows));
      const slideIndexInGroup = i - rows * slidesPerGroup * groupIndex;
      const columnsInGroup = groupIndex === 0 ? slidesPerGroup : Math.min(Math.ceil((slidesLength - groupIndex * rows * slidesPerGroup) / rows), slidesPerGroup);
      row = Math.floor(slideIndexInGroup / columnsInGroup);
      column = slideIndexInGroup - row * columnsInGroup + groupIndex * slidesPerGroup;
      newSlideOrderIndex = column + row * slidesNumberEvenToRows / rows;
      slide.style.order = newSlideOrderIndex;
    } else if (fill === 'column') {
      column = Math.floor(i / rows);
      row = i - column * rows;
      if (column > numFullColumns || column === numFullColumns && row === rows - 1) {
        row += 1;
        if (row >= rows) {
          row = 0;
          column += 1;
        }
      }
    } else {
      row = Math.floor(i / slidesPerRow);
      column = i - row * slidesPerRow;
    }
    slide.row = row;
    slide.column = column;
    slide.style.height = `calc((100% - ${(rows - 1) * spaceBetween}px) / ${rows})`;
    slide.style[swiper.getDirectionLabel('margin-top')] = row !== 0 ? spaceBetween && `${spaceBetween}px` : '';
    slide.swiperSlideGridSet = true;
  };
  const updateWrapperSize = (slideSize, snapGrid) => {
    const {
      centeredSlides,
      roundLengths
    } = swiper.params;
    const spaceBetween = getSpaceBetween();
    const {
      rows
    } = swiper.params.grid;
    swiper.virtualSize = (slideSize + spaceBetween) * slidesNumberEvenToRows;
    swiper.virtualSize = Math.ceil(swiper.virtualSize / rows) - spaceBetween;
    if (!swiper.params.cssMode) {
      swiper.wrapperEl.style[swiper.getDirectionLabel('width')] = `${swiper.virtualSize + spaceBetween}px`;
    }
    if (centeredSlides) {
      const newSlidesGrid = [];
      for (let i = 0; i < snapGrid.length; i += 1) {
        let slidesGridItem = snapGrid[i];
        if (roundLengths) slidesGridItem = Math.floor(slidesGridItem);
        if (snapGrid[i] < swiper.virtualSize + snapGrid[0]) newSlidesGrid.push(slidesGridItem);
      }
      snapGrid.splice(0, snapGrid.length);
      snapGrid.push(...newSlidesGrid);
    }
  };
  const onInit = () => {
    wasMultiRow = swiper.params.grid && swiper.params.grid.rows > 1;
  };
  const onUpdate = () => {
    const {
      params,
      el
    } = swiper;
    const isMultiRow = params.grid && params.grid.rows > 1;
    if (wasMultiRow && !isMultiRow) {
      el.classList.remove(`${params.containerModifierClass}grid`, `${params.containerModifierClass}grid-column`);
      numFullColumns = 1;
      swiper.emitContainerClasses();
    } else if (!wasMultiRow && isMultiRow) {
      el.classList.add(`${params.containerModifierClass}grid`);
      if (params.grid.fill === 'column') {
        el.classList.add(`${params.containerModifierClass}grid-column`);
      }
      swiper.emitContainerClasses();
    }
    wasMultiRow = isMultiRow;
  };
  on('init', onInit);
  on('update', onUpdate);
  swiper.grid = {
    initSlides,
    unsetSlides,
    updateSlide,
    updateWrapperSize
  };
}




/***/ }),

/***/ "./node_modules/swiper/modules/hash-navigation.mjs":
/*!*********************************************************!*\
  !*** ./node_modules/swiper/modules/hash-navigation.mjs ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HashNavigation)
/* harmony export */ });
/* harmony import */ var _shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/ssr-window.esm.mjs */ "./node_modules/swiper/shared/ssr-window.esm.mjs");
/* harmony import */ var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");



function HashNavigation(_ref) {
  let {
    swiper,
    extendParams,
    emit,
    on
  } = _ref;
  let initialized = false;
  const document = (0,_shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.g)();
  const window = (0,_shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
  extendParams({
    hashNavigation: {
      enabled: false,
      replaceState: false,
      watchState: false,
      getSlideIndex(_s, hash) {
        if (swiper.virtual && swiper.params.virtual.enabled) {
          const slideWithHash = swiper.slides.find(slideEl => slideEl.getAttribute('data-hash') === hash);
          if (!slideWithHash) return 0;
          const index = parseInt(slideWithHash.getAttribute('data-swiper-slide-index'), 10);
          return index;
        }
        return swiper.getSlideIndex((0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.e)(swiper.slidesEl, `.${swiper.params.slideClass}[data-hash="${hash}"], swiper-slide[data-hash="${hash}"]`)[0]);
      }
    }
  });
  const onHashChange = () => {
    emit('hashChange');
    const newHash = document.location.hash.replace('#', '');
    const activeSlideEl = swiper.virtual && swiper.params.virtual.enabled ? swiper.slidesEl.querySelector(`[data-swiper-slide-index="${swiper.activeIndex}"]`) : swiper.slides[swiper.activeIndex];
    const activeSlideHash = activeSlideEl ? activeSlideEl.getAttribute('data-hash') : '';
    if (newHash !== activeSlideHash) {
      const newIndex = swiper.params.hashNavigation.getSlideIndex(swiper, newHash);
      if (typeof newIndex === 'undefined' || Number.isNaN(newIndex)) return;
      swiper.slideTo(newIndex);
    }
  };
  const setHash = () => {
    if (!initialized || !swiper.params.hashNavigation.enabled) return;
    const activeSlideEl = swiper.virtual && swiper.params.virtual.enabled ? swiper.slidesEl.querySelector(`[data-swiper-slide-index="${swiper.activeIndex}"]`) : swiper.slides[swiper.activeIndex];
    const activeSlideHash = activeSlideEl ? activeSlideEl.getAttribute('data-hash') || activeSlideEl.getAttribute('data-history') : '';
    if (swiper.params.hashNavigation.replaceState && window.history && window.history.replaceState) {
      window.history.replaceState(null, null, `#${activeSlideHash}` || '');
      emit('hashSet');
    } else {
      document.location.hash = activeSlideHash || '';
      emit('hashSet');
    }
  };
  const init = () => {
    if (!swiper.params.hashNavigation.enabled || swiper.params.history && swiper.params.history.enabled) return;
    initialized = true;
    const hash = document.location.hash.replace('#', '');
    if (hash) {
      const speed = 0;
      const index = swiper.params.hashNavigation.getSlideIndex(swiper, hash);
      swiper.slideTo(index || 0, speed, swiper.params.runCallbacksOnInit, true);
    }
    if (swiper.params.hashNavigation.watchState) {
      window.addEventListener('hashchange', onHashChange);
    }
  };
  const destroy = () => {
    if (swiper.params.hashNavigation.watchState) {
      window.removeEventListener('hashchange', onHashChange);
    }
  };
  on('init', () => {
    if (swiper.params.hashNavigation.enabled) {
      init();
    }
  });
  on('destroy', () => {
    if (swiper.params.hashNavigation.enabled) {
      destroy();
    }
  });
  on('transitionEnd _freeModeNoMomentumRelease', () => {
    if (initialized) {
      setHash();
    }
  });
  on('slideChange', () => {
    if (initialized && swiper.params.cssMode) {
      setHash();
    }
  });
}




/***/ }),

/***/ "./node_modules/swiper/modules/history.mjs":
/*!*************************************************!*\
  !*** ./node_modules/swiper/modules/history.mjs ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ History)
/* harmony export */ });
/* harmony import */ var _shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/ssr-window.esm.mjs */ "./node_modules/swiper/shared/ssr-window.esm.mjs");


function History(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    history: {
      enabled: false,
      root: '',
      replaceState: false,
      key: 'slides',
      keepQuery: false
    }
  });
  let initialized = false;
  let paths = {};
  const slugify = text => {
    return text.toString().replace(/\s+/g, '-').replace(/[^\w-]+/g, '').replace(/--+/g, '-').replace(/^-+/, '').replace(/-+$/, '');
  };
  const getPathValues = urlOverride => {
    const window = (0,_shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
    let location;
    if (urlOverride) {
      location = new URL(urlOverride);
    } else {
      location = window.location;
    }
    const pathArray = location.pathname.slice(1).split('/').filter(part => part !== '');
    const total = pathArray.length;
    const key = pathArray[total - 2];
    const value = pathArray[total - 1];
    return {
      key,
      value
    };
  };
  const setHistory = (key, index) => {
    const window = (0,_shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
    if (!initialized || !swiper.params.history.enabled) return;
    let location;
    if (swiper.params.url) {
      location = new URL(swiper.params.url);
    } else {
      location = window.location;
    }
    const slide = swiper.virtual && swiper.params.virtual.enabled ? swiper.slidesEl.querySelector(`[data-swiper-slide-index="${index}"]`) : swiper.slides[index];
    let value = slugify(slide.getAttribute('data-history'));
    if (swiper.params.history.root.length > 0) {
      let root = swiper.params.history.root;
      if (root[root.length - 1] === '/') root = root.slice(0, root.length - 1);
      value = `${root}/${key ? `${key}/` : ''}${value}`;
    } else if (!location.pathname.includes(key)) {
      value = `${key ? `${key}/` : ''}${value}`;
    }
    if (swiper.params.history.keepQuery) {
      value += location.search;
    }
    const currentState = window.history.state;
    if (currentState && currentState.value === value) {
      return;
    }
    if (swiper.params.history.replaceState) {
      window.history.replaceState({
        value
      }, null, value);
    } else {
      window.history.pushState({
        value
      }, null, value);
    }
  };
  const scrollToSlide = (speed, value, runCallbacks) => {
    if (value) {
      for (let i = 0, length = swiper.slides.length; i < length; i += 1) {
        const slide = swiper.slides[i];
        const slideHistory = slugify(slide.getAttribute('data-history'));
        if (slideHistory === value) {
          const index = swiper.getSlideIndex(slide);
          swiper.slideTo(index, speed, runCallbacks);
        }
      }
    } else {
      swiper.slideTo(0, speed, runCallbacks);
    }
  };
  const setHistoryPopState = () => {
    paths = getPathValues(swiper.params.url);
    scrollToSlide(swiper.params.speed, paths.value, false);
  };
  const init = () => {
    const window = (0,_shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
    if (!swiper.params.history) return;
    if (!window.history || !window.history.pushState) {
      swiper.params.history.enabled = false;
      swiper.params.hashNavigation.enabled = true;
      return;
    }
    initialized = true;
    paths = getPathValues(swiper.params.url);
    if (!paths.key && !paths.value) {
      if (!swiper.params.history.replaceState) {
        window.addEventListener('popstate', setHistoryPopState);
      }
      return;
    }
    scrollToSlide(0, paths.value, swiper.params.runCallbacksOnInit);
    if (!swiper.params.history.replaceState) {
      window.addEventListener('popstate', setHistoryPopState);
    }
  };
  const destroy = () => {
    const window = (0,_shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
    if (!swiper.params.history.replaceState) {
      window.removeEventListener('popstate', setHistoryPopState);
    }
  };
  on('init', () => {
    if (swiper.params.history.enabled) {
      init();
    }
  });
  on('destroy', () => {
    if (swiper.params.history.enabled) {
      destroy();
    }
  });
  on('transitionEnd _freeModeNoMomentumRelease', () => {
    if (initialized) {
      setHistory(swiper.params.history.key, swiper.activeIndex);
    }
  });
  on('slideChange', () => {
    if (initialized && swiper.params.cssMode) {
      setHistory(swiper.params.history.key, swiper.activeIndex);
    }
  });
}




/***/ }),

/***/ "./node_modules/swiper/modules/index.mjs":
/*!***********************************************!*\
  !*** ./node_modules/swiper/modules/index.mjs ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A11y: () => (/* reexport safe */ _a11y_mjs__WEBPACK_IMPORTED_MODULE_9__["default"]),
/* harmony export */   Autoplay: () => (/* reexport safe */ _autoplay_mjs__WEBPACK_IMPORTED_MODULE_12__["default"]),
/* harmony export */   Controller: () => (/* reexport safe */ _controller_mjs__WEBPACK_IMPORTED_MODULE_8__["default"]),
/* harmony export */   EffectCards: () => (/* reexport safe */ _effect_cards_mjs__WEBPACK_IMPORTED_MODULE_22__["default"]),
/* harmony export */   EffectCoverflow: () => (/* reexport safe */ _effect_coverflow_mjs__WEBPACK_IMPORTED_MODULE_20__["default"]),
/* harmony export */   EffectCreative: () => (/* reexport safe */ _effect_creative_mjs__WEBPACK_IMPORTED_MODULE_21__["default"]),
/* harmony export */   EffectCube: () => (/* reexport safe */ _effect_cube_mjs__WEBPACK_IMPORTED_MODULE_18__["default"]),
/* harmony export */   EffectFade: () => (/* reexport safe */ _effect_fade_mjs__WEBPACK_IMPORTED_MODULE_17__["default"]),
/* harmony export */   EffectFlip: () => (/* reexport safe */ _effect_flip_mjs__WEBPACK_IMPORTED_MODULE_19__["default"]),
/* harmony export */   FreeMode: () => (/* reexport safe */ _free_mode_mjs__WEBPACK_IMPORTED_MODULE_14__["default"]),
/* harmony export */   Grid: () => (/* reexport safe */ _grid_mjs__WEBPACK_IMPORTED_MODULE_15__["default"]),
/* harmony export */   HashNavigation: () => (/* reexport safe */ _hash_navigation_mjs__WEBPACK_IMPORTED_MODULE_11__["default"]),
/* harmony export */   History: () => (/* reexport safe */ _history_mjs__WEBPACK_IMPORTED_MODULE_10__["default"]),
/* harmony export */   Keyboard: () => (/* reexport safe */ _keyboard_mjs__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   Manipulation: () => (/* reexport safe */ _manipulation_mjs__WEBPACK_IMPORTED_MODULE_16__["default"]),
/* harmony export */   Mousewheel: () => (/* reexport safe */ _mousewheel_mjs__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   Navigation: () => (/* reexport safe */ _navigation_mjs__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   Pagination: () => (/* reexport safe */ _pagination_mjs__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   Parallax: () => (/* reexport safe */ _parallax_mjs__WEBPACK_IMPORTED_MODULE_6__["default"]),
/* harmony export */   Scrollbar: () => (/* reexport safe */ _scrollbar_mjs__WEBPACK_IMPORTED_MODULE_5__["default"]),
/* harmony export */   Thumbs: () => (/* reexport safe */ _thumbs_mjs__WEBPACK_IMPORTED_MODULE_13__["default"]),
/* harmony export */   Virtual: () => (/* reexport safe */ _virtual_mjs__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   Zoom: () => (/* reexport safe */ _zoom_mjs__WEBPACK_IMPORTED_MODULE_7__["default"])
/* harmony export */ });
/* harmony import */ var _virtual_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./virtual.mjs */ "./node_modules/swiper/modules/virtual.mjs");
/* harmony import */ var _keyboard_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keyboard.mjs */ "./node_modules/swiper/modules/keyboard.mjs");
/* harmony import */ var _mousewheel_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mousewheel.mjs */ "./node_modules/swiper/modules/mousewheel.mjs");
/* harmony import */ var _navigation_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navigation.mjs */ "./node_modules/swiper/modules/navigation.mjs");
/* harmony import */ var _pagination_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pagination.mjs */ "./node_modules/swiper/modules/pagination.mjs");
/* harmony import */ var _scrollbar_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scrollbar.mjs */ "./node_modules/swiper/modules/scrollbar.mjs");
/* harmony import */ var _parallax_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./parallax.mjs */ "./node_modules/swiper/modules/parallax.mjs");
/* harmony import */ var _zoom_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./zoom.mjs */ "./node_modules/swiper/modules/zoom.mjs");
/* harmony import */ var _controller_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./controller.mjs */ "./node_modules/swiper/modules/controller.mjs");
/* harmony import */ var _a11y_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./a11y.mjs */ "./node_modules/swiper/modules/a11y.mjs");
/* harmony import */ var _history_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./history.mjs */ "./node_modules/swiper/modules/history.mjs");
/* harmony import */ var _hash_navigation_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./hash-navigation.mjs */ "./node_modules/swiper/modules/hash-navigation.mjs");
/* harmony import */ var _autoplay_mjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./autoplay.mjs */ "./node_modules/swiper/modules/autoplay.mjs");
/* harmony import */ var _thumbs_mjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./thumbs.mjs */ "./node_modules/swiper/modules/thumbs.mjs");
/* harmony import */ var _free_mode_mjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./free-mode.mjs */ "./node_modules/swiper/modules/free-mode.mjs");
/* harmony import */ var _grid_mjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./grid.mjs */ "./node_modules/swiper/modules/grid.mjs");
/* harmony import */ var _manipulation_mjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./manipulation.mjs */ "./node_modules/swiper/modules/manipulation.mjs");
/* harmony import */ var _effect_fade_mjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./effect-fade.mjs */ "./node_modules/swiper/modules/effect-fade.mjs");
/* harmony import */ var _effect_cube_mjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./effect-cube.mjs */ "./node_modules/swiper/modules/effect-cube.mjs");
/* harmony import */ var _effect_flip_mjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./effect-flip.mjs */ "./node_modules/swiper/modules/effect-flip.mjs");
/* harmony import */ var _effect_coverflow_mjs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./effect-coverflow.mjs */ "./node_modules/swiper/modules/effect-coverflow.mjs");
/* harmony import */ var _effect_creative_mjs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./effect-creative.mjs */ "./node_modules/swiper/modules/effect-creative.mjs");
/* harmony import */ var _effect_cards_mjs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./effect-cards.mjs */ "./node_modules/swiper/modules/effect-cards.mjs");
























/***/ }),

/***/ "./node_modules/swiper/modules/keyboard.mjs":
/*!**************************************************!*\
  !*** ./node_modules/swiper/modules/keyboard.mjs ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Keyboard)
/* harmony export */ });
/* harmony import */ var _shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/ssr-window.esm.mjs */ "./node_modules/swiper/shared/ssr-window.esm.mjs");
/* harmony import */ var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");



/* eslint-disable consistent-return */
function Keyboard(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit
  } = _ref;
  const document = (0,_shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.g)();
  const window = (0,_shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
  swiper.keyboard = {
    enabled: false
  };
  extendParams({
    keyboard: {
      enabled: false,
      onlyInViewport: true,
      pageUpDown: true
    }
  });
  function handle(event) {
    if (!swiper.enabled) return;
    const {
      rtlTranslate: rtl
    } = swiper;
    let e = event;
    if (e.originalEvent) e = e.originalEvent; // jquery fix
    const kc = e.keyCode || e.charCode;
    const pageUpDown = swiper.params.keyboard.pageUpDown;
    const isPageUp = pageUpDown && kc === 33;
    const isPageDown = pageUpDown && kc === 34;
    const isArrowLeft = kc === 37;
    const isArrowRight = kc === 39;
    const isArrowUp = kc === 38;
    const isArrowDown = kc === 40;
    // Directions locks
    if (!swiper.allowSlideNext && (swiper.isHorizontal() && isArrowRight || swiper.isVertical() && isArrowDown || isPageDown)) {
      return false;
    }
    if (!swiper.allowSlidePrev && (swiper.isHorizontal() && isArrowLeft || swiper.isVertical() && isArrowUp || isPageUp)) {
      return false;
    }
    if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) {
      return undefined;
    }
    if (document.activeElement && (document.activeElement.isContentEditable || document.activeElement.nodeName && (document.activeElement.nodeName.toLowerCase() === 'input' || document.activeElement.nodeName.toLowerCase() === 'textarea'))) {
      return undefined;
    }
    if (swiper.params.keyboard.onlyInViewport && (isPageUp || isPageDown || isArrowLeft || isArrowRight || isArrowUp || isArrowDown)) {
      let inView = false;
      // Check that swiper should be inside of visible area of window
      if ((0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.b)(swiper.el, `.${swiper.params.slideClass}, swiper-slide`).length > 0 && (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.b)(swiper.el, `.${swiper.params.slideActiveClass}`).length === 0) {
        return undefined;
      }
      const el = swiper.el;
      const swiperWidth = el.clientWidth;
      const swiperHeight = el.clientHeight;
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      const swiperOffset = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.d)(el);
      if (rtl) swiperOffset.left -= el.scrollLeft;
      const swiperCoord = [[swiperOffset.left, swiperOffset.top], [swiperOffset.left + swiperWidth, swiperOffset.top], [swiperOffset.left, swiperOffset.top + swiperHeight], [swiperOffset.left + swiperWidth, swiperOffset.top + swiperHeight]];
      for (let i = 0; i < swiperCoord.length; i += 1) {
        const point = swiperCoord[i];
        if (point[0] >= 0 && point[0] <= windowWidth && point[1] >= 0 && point[1] <= windowHeight) {
          if (point[0] === 0 && point[1] === 0) continue; // eslint-disable-line
          inView = true;
        }
      }
      if (!inView) return undefined;
    }
    if (swiper.isHorizontal()) {
      if (isPageUp || isPageDown || isArrowLeft || isArrowRight) {
        if (e.preventDefault) e.preventDefault();else e.returnValue = false;
      }
      if ((isPageDown || isArrowRight) && !rtl || (isPageUp || isArrowLeft) && rtl) swiper.slideNext();
      if ((isPageUp || isArrowLeft) && !rtl || (isPageDown || isArrowRight) && rtl) swiper.slidePrev();
    } else {
      if (isPageUp || isPageDown || isArrowUp || isArrowDown) {
        if (e.preventDefault) e.preventDefault();else e.returnValue = false;
      }
      if (isPageDown || isArrowDown) swiper.slideNext();
      if (isPageUp || isArrowUp) swiper.slidePrev();
    }
    emit('keyPress', kc);
    return undefined;
  }
  function enable() {
    if (swiper.keyboard.enabled) return;
    document.addEventListener('keydown', handle);
    swiper.keyboard.enabled = true;
  }
  function disable() {
    if (!swiper.keyboard.enabled) return;
    document.removeEventListener('keydown', handle);
    swiper.keyboard.enabled = false;
  }
  on('init', () => {
    if (swiper.params.keyboard.enabled) {
      enable();
    }
  });
  on('destroy', () => {
    if (swiper.keyboard.enabled) {
      disable();
    }
  });
  Object.assign(swiper.keyboard, {
    enable,
    disable
  });
}




/***/ }),

/***/ "./node_modules/swiper/modules/manipulation.mjs":
/*!******************************************************!*\
  !*** ./node_modules/swiper/modules/manipulation.mjs ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Manipulation)
/* harmony export */ });
/* harmony import */ var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");


function appendSlide(slides) {
  const swiper = this;
  const {
    params,
    slidesEl
  } = swiper;
  if (params.loop) {
    swiper.loopDestroy();
  }
  const appendElement = slideEl => {
    if (typeof slideEl === 'string') {
      const tempDOM = document.createElement('div');
      (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.s)(tempDOM, slideEl);
      slidesEl.append(tempDOM.children[0]);
      (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.s)(tempDOM, '');
    } else {
      slidesEl.append(slideEl);
    }
  };
  if (typeof slides === 'object' && 'length' in slides) {
    for (let i = 0; i < slides.length; i += 1) {
      if (slides[i]) appendElement(slides[i]);
    }
  } else {
    appendElement(slides);
  }
  swiper.recalcSlides();
  if (params.loop) {
    swiper.loopCreate();
  }
  if (!params.observer || swiper.isElement) {
    swiper.update();
  }
}

function prependSlide(slides) {
  const swiper = this;
  const {
    params,
    activeIndex,
    slidesEl
  } = swiper;
  if (params.loop) {
    swiper.loopDestroy();
  }
  let newActiveIndex = activeIndex + 1;
  const prependElement = slideEl => {
    if (typeof slideEl === 'string') {
      const tempDOM = document.createElement('div');
      (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.s)(tempDOM, slideEl);
      slidesEl.prepend(tempDOM.children[0]);
      (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.s)(tempDOM, '');
    } else {
      slidesEl.prepend(slideEl);
    }
  };
  if (typeof slides === 'object' && 'length' in slides) {
    for (let i = 0; i < slides.length; i += 1) {
      if (slides[i]) prependElement(slides[i]);
    }
    newActiveIndex = activeIndex + slides.length;
  } else {
    prependElement(slides);
  }
  swiper.recalcSlides();
  if (params.loop) {
    swiper.loopCreate();
  }
  if (!params.observer || swiper.isElement) {
    swiper.update();
  }
  swiper.slideTo(newActiveIndex, 0, false);
}

function addSlide(index, slides) {
  const swiper = this;
  const {
    params,
    activeIndex,
    slidesEl
  } = swiper;
  let activeIndexBuffer = activeIndex;
  if (params.loop) {
    activeIndexBuffer -= swiper.loopedSlides;
    swiper.loopDestroy();
    swiper.recalcSlides();
  }
  const baseLength = swiper.slides.length;
  if (index <= 0) {
    swiper.prependSlide(slides);
    return;
  }
  if (index >= baseLength) {
    swiper.appendSlide(slides);
    return;
  }
  let newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + 1 : activeIndexBuffer;
  const slidesBuffer = [];
  for (let i = baseLength - 1; i >= index; i -= 1) {
    const currentSlide = swiper.slides[i];
    currentSlide.remove();
    slidesBuffer.unshift(currentSlide);
  }
  if (typeof slides === 'object' && 'length' in slides) {
    for (let i = 0; i < slides.length; i += 1) {
      if (slides[i]) slidesEl.append(slides[i]);
    }
    newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + slides.length : activeIndexBuffer;
  } else {
    slidesEl.append(slides);
  }
  for (let i = 0; i < slidesBuffer.length; i += 1) {
    slidesEl.append(slidesBuffer[i]);
  }
  swiper.recalcSlides();
  if (params.loop) {
    swiper.loopCreate();
  }
  if (!params.observer || swiper.isElement) {
    swiper.update();
  }
  if (params.loop) {
    swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
  } else {
    swiper.slideTo(newActiveIndex, 0, false);
  }
}

function removeSlide(slidesIndexes) {
  const swiper = this;
  const {
    params,
    activeIndex
  } = swiper;
  let activeIndexBuffer = activeIndex;
  if (params.loop) {
    activeIndexBuffer -= swiper.loopedSlides;
    swiper.loopDestroy();
  }
  let newActiveIndex = activeIndexBuffer;
  let indexToRemove;
  if (typeof slidesIndexes === 'object' && 'length' in slidesIndexes) {
    for (let i = 0; i < slidesIndexes.length; i += 1) {
      indexToRemove = slidesIndexes[i];
      if (swiper.slides[indexToRemove]) swiper.slides[indexToRemove].remove();
      if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
    }
    newActiveIndex = Math.max(newActiveIndex, 0);
  } else {
    indexToRemove = slidesIndexes;
    if (swiper.slides[indexToRemove]) swiper.slides[indexToRemove].remove();
    if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
    newActiveIndex = Math.max(newActiveIndex, 0);
  }
  swiper.recalcSlides();
  if (params.loop) {
    swiper.loopCreate();
  }
  if (!params.observer || swiper.isElement) {
    swiper.update();
  }
  if (params.loop) {
    swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
  } else {
    swiper.slideTo(newActiveIndex, 0, false);
  }
}

function removeAllSlides() {
  const swiper = this;
  const slidesIndexes = [];
  for (let i = 0; i < swiper.slides.length; i += 1) {
    slidesIndexes.push(i);
  }
  swiper.removeSlide(slidesIndexes);
}

function Manipulation(_ref) {
  let {
    swiper
  } = _ref;
  Object.assign(swiper, {
    appendSlide: appendSlide.bind(swiper),
    prependSlide: prependSlide.bind(swiper),
    addSlide: addSlide.bind(swiper),
    removeSlide: removeSlide.bind(swiper),
    removeAllSlides: removeAllSlides.bind(swiper)
  });
}




/***/ }),

/***/ "./node_modules/swiper/modules/mousewheel.mjs":
/*!****************************************************!*\
  !*** ./node_modules/swiper/modules/mousewheel.mjs ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Mousewheel)
/* harmony export */ });
/* harmony import */ var _shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/ssr-window.esm.mjs */ "./node_modules/swiper/shared/ssr-window.esm.mjs");
/* harmony import */ var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");



/* eslint-disable consistent-return */
function Mousewheel(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit
  } = _ref;
  const window = (0,_shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
  extendParams({
    mousewheel: {
      enabled: false,
      releaseOnEdges: false,
      invert: false,
      forceToAxis: false,
      sensitivity: 1,
      eventsTarget: 'container',
      thresholdDelta: null,
      thresholdTime: null,
      noMousewheelClass: 'swiper-no-mousewheel'
    }
  });
  swiper.mousewheel = {
    enabled: false
  };
  let timeout;
  let lastScrollTime = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.f)();
  let lastEventBeforeSnap;
  const recentWheelEvents = [];
  function normalize(e) {
    // Reasonable defaults
    const PIXEL_STEP = 10;
    const LINE_HEIGHT = 40;
    const PAGE_HEIGHT = 800;
    let sX = 0;
    let sY = 0; // spinX, spinY
    let pX = 0;
    let pY = 0; // pixelX, pixelY

    // Legacy
    if ('detail' in e) {
      sY = e.detail;
    }
    if ('wheelDelta' in e) {
      sY = -e.wheelDelta / 120;
    }
    if ('wheelDeltaY' in e) {
      sY = -e.wheelDeltaY / 120;
    }
    if ('wheelDeltaX' in e) {
      sX = -e.wheelDeltaX / 120;
    }

    // side scrolling on FF with DOMMouseScroll
    if ('axis' in e && e.axis === e.HORIZONTAL_AXIS) {
      sX = sY;
      sY = 0;
    }
    pX = sX * PIXEL_STEP;
    pY = sY * PIXEL_STEP;
    if ('deltaY' in e) {
      pY = e.deltaY;
    }
    if ('deltaX' in e) {
      pX = e.deltaX;
    }
    if (e.shiftKey && !pX) {
      // if user scrolls with shift he wants horizontal scroll
      pX = pY;
      pY = 0;
    }
    if ((pX || pY) && e.deltaMode) {
      if (e.deltaMode === 1) {
        // delta in LINE units
        pX *= LINE_HEIGHT;
        pY *= LINE_HEIGHT;
      } else {
        // delta in PAGE units
        pX *= PAGE_HEIGHT;
        pY *= PAGE_HEIGHT;
      }
    }

    // Fall-back if spin cannot be determined
    if (pX && !sX) {
      sX = pX < 1 ? -1 : 1;
    }
    if (pY && !sY) {
      sY = pY < 1 ? -1 : 1;
    }
    return {
      spinX: sX,
      spinY: sY,
      pixelX: pX,
      pixelY: pY
    };
  }
  function handleMouseEnter() {
    if (!swiper.enabled) return;
    swiper.mouseEntered = true;
  }
  function handleMouseLeave() {
    if (!swiper.enabled) return;
    swiper.mouseEntered = false;
  }
  function animateSlider(newEvent) {
    if (swiper.params.mousewheel.thresholdDelta && newEvent.delta < swiper.params.mousewheel.thresholdDelta) {
      // Prevent if delta of wheel scroll delta is below configured threshold
      return false;
    }
    if (swiper.params.mousewheel.thresholdTime && (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.f)() - lastScrollTime < swiper.params.mousewheel.thresholdTime) {
      // Prevent if time between scrolls is below configured threshold
      return false;
    }

    // If the movement is NOT big enough and
    // if the last time the user scrolled was too close to the current one (avoid continuously triggering the slider):
    //   Don't go any further (avoid insignificant scroll movement).
    if (newEvent.delta >= 6 && (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.f)() - lastScrollTime < 60) {
      // Return false as a default
      return true;
    }
    // If user is scrolling towards the end:
    //   If the slider hasn't hit the latest slide or
    //   if the slider is a loop and
    //   if the slider isn't moving right now:
    //     Go to next slide and
    //     emit a scroll event.
    // Else (the user is scrolling towards the beginning) and
    // if the slider hasn't hit the first slide or
    // if the slider is a loop and
    // if the slider isn't moving right now:
    //   Go to prev slide and
    //   emit a scroll event.
    if (newEvent.direction < 0) {
      if ((!swiper.isEnd || swiper.params.loop) && !swiper.animating) {
        swiper.slideNext();
        emit('scroll', newEvent.raw);
      }
    } else if ((!swiper.isBeginning || swiper.params.loop) && !swiper.animating) {
      swiper.slidePrev();
      emit('scroll', newEvent.raw);
    }
    // If you got here is because an animation has been triggered so store the current time
    lastScrollTime = new window.Date().getTime();
    // Return false as a default
    return false;
  }
  function releaseScroll(newEvent) {
    const params = swiper.params.mousewheel;
    if (newEvent.direction < 0) {
      if (swiper.isEnd && !swiper.params.loop && params.releaseOnEdges) {
        // Return true to animate scroll on edges
        return true;
      }
    } else if (swiper.isBeginning && !swiper.params.loop && params.releaseOnEdges) {
      // Return true to animate scroll on edges
      return true;
    }
    return false;
  }
  function handle(event) {
    let e = event;
    let disableParentSwiper = true;
    if (!swiper.enabled) return;

    // Ignore event if the target or its parents have the swiper-no-mousewheel class
    if (event.target.closest(`.${swiper.params.mousewheel.noMousewheelClass}`)) return;
    const params = swiper.params.mousewheel;
    if (swiper.params.cssMode) {
      e.preventDefault();
    }
    let targetEl = swiper.el;
    if (swiper.params.mousewheel.eventsTarget !== 'container') {
      targetEl = document.querySelector(swiper.params.mousewheel.eventsTarget);
    }
    const targetElContainsTarget = targetEl && targetEl.contains(e.target);
    if (!swiper.mouseEntered && !targetElContainsTarget && !params.releaseOnEdges) return true;
    if (e.originalEvent) e = e.originalEvent; // jquery fix
    let delta = 0;
    const rtlFactor = swiper.rtlTranslate ? -1 : 1;
    const data = normalize(e);
    if (params.forceToAxis) {
      if (swiper.isHorizontal()) {
        if (Math.abs(data.pixelX) > Math.abs(data.pixelY)) delta = -data.pixelX * rtlFactor;else return true;
      } else if (Math.abs(data.pixelY) > Math.abs(data.pixelX)) delta = -data.pixelY;else return true;
    } else {
      delta = Math.abs(data.pixelX) > Math.abs(data.pixelY) ? -data.pixelX * rtlFactor : -data.pixelY;
    }
    if (delta === 0) return true;
    if (params.invert) delta = -delta;

    // Get the scroll positions
    let positions = swiper.getTranslate() + delta * params.sensitivity;
    if (positions >= swiper.minTranslate()) positions = swiper.minTranslate();
    if (positions <= swiper.maxTranslate()) positions = swiper.maxTranslate();

    // When loop is true:
    //     the disableParentSwiper will be true.
    // When loop is false:
    //     if the scroll positions is not on edge,
    //     then the disableParentSwiper will be true.
    //     if the scroll on edge positions,
    //     then the disableParentSwiper will be false.
    disableParentSwiper = swiper.params.loop ? true : !(positions === swiper.minTranslate() || positions === swiper.maxTranslate());
    if (disableParentSwiper && swiper.params.nested) e.stopPropagation();
    if (!swiper.params.freeMode || !swiper.params.freeMode.enabled) {
      // Register the new event in a variable which stores the relevant data
      const newEvent = {
        time: (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.f)(),
        delta: Math.abs(delta),
        direction: Math.sign(delta),
        raw: event
      };

      // Keep the most recent events
      if (recentWheelEvents.length >= 2) {
        recentWheelEvents.shift(); // only store the last N events
      }

      const prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : undefined;
      recentWheelEvents.push(newEvent);

      // If there is at least one previous recorded event:
      //   If direction has changed or
      //   if the scroll is quicker than the previous one:
      //     Animate the slider.
      // Else (this is the first time the wheel is moved):
      //     Animate the slider.
      if (prevEvent) {
        if (newEvent.direction !== prevEvent.direction || newEvent.delta > prevEvent.delta || newEvent.time > prevEvent.time + 150) {
          animateSlider(newEvent);
        }
      } else {
        animateSlider(newEvent);
      }

      // If it's time to release the scroll:
      //   Return now so you don't hit the preventDefault.
      if (releaseScroll(newEvent)) {
        return true;
      }
    } else {
      // Freemode or scrollContainer:

      // If we recently snapped after a momentum scroll, then ignore wheel events
      // to give time for the deceleration to finish. Stop ignoring after 500 msecs
      // or if it's a new scroll (larger delta or inverse sign as last event before
      // an end-of-momentum snap).
      const newEvent = {
        time: (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.f)(),
        delta: Math.abs(delta),
        direction: Math.sign(delta)
      };
      const ignoreWheelEvents = lastEventBeforeSnap && newEvent.time < lastEventBeforeSnap.time + 500 && newEvent.delta <= lastEventBeforeSnap.delta && newEvent.direction === lastEventBeforeSnap.direction;
      if (!ignoreWheelEvents) {
        lastEventBeforeSnap = undefined;
        let position = swiper.getTranslate() + delta * params.sensitivity;
        const wasBeginning = swiper.isBeginning;
        const wasEnd = swiper.isEnd;
        if (position >= swiper.minTranslate()) position = swiper.minTranslate();
        if (position <= swiper.maxTranslate()) position = swiper.maxTranslate();
        swiper.setTransition(0);
        swiper.setTranslate(position);
        swiper.updateProgress();
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
        if (!wasBeginning && swiper.isBeginning || !wasEnd && swiper.isEnd) {
          swiper.updateSlidesClasses();
        }
        if (swiper.params.loop) {
          swiper.loopFix({
            direction: newEvent.direction < 0 ? 'next' : 'prev',
            byMousewheel: true
          });
        }
        if (swiper.params.freeMode.sticky) {
          // When wheel scrolling starts with sticky (aka snap) enabled, then detect
          // the end of a momentum scroll by storing recent (N=15?) wheel events.
          // 1. do all N events have decreasing or same (absolute value) delta?
          // 2. did all N events arrive in the last M (M=500?) msecs?
          // 3. does the earliest event have an (absolute value) delta that's
          //    at least P (P=1?) larger than the most recent event's delta?
          // 4. does the latest event have a delta that's smaller than Q (Q=6?) pixels?
          // If 1-4 are "yes" then we're near the end of a momentum scroll deceleration.
          // Snap immediately and ignore remaining wheel events in this scroll.
          // See comment above for "remaining wheel events in this scroll" determination.
          // If 1-4 aren't satisfied, then wait to snap until 500ms after the last event.
          clearTimeout(timeout);
          timeout = undefined;
          if (recentWheelEvents.length >= 15) {
            recentWheelEvents.shift(); // only store the last N events
          }

          const prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : undefined;
          const firstEvent = recentWheelEvents[0];
          recentWheelEvents.push(newEvent);
          if (prevEvent && (newEvent.delta > prevEvent.delta || newEvent.direction !== prevEvent.direction)) {
            // Increasing or reverse-sign delta means the user started scrolling again. Clear the wheel event log.
            recentWheelEvents.splice(0);
          } else if (recentWheelEvents.length >= 15 && newEvent.time - firstEvent.time < 500 && firstEvent.delta - newEvent.delta >= 1 && newEvent.delta <= 6) {
            // We're at the end of the deceleration of a momentum scroll, so there's no need
            // to wait for more events. Snap ASAP on the next tick.
            // Also, because there's some remaining momentum we'll bias the snap in the
            // direction of the ongoing scroll because it's better UX for the scroll to snap
            // in the same direction as the scroll instead of reversing to snap.  Therefore,
            // if it's already scrolled more than 20% in the current direction, keep going.
            const snapToThreshold = delta > 0 ? 0.8 : 0.2;
            lastEventBeforeSnap = newEvent;
            recentWheelEvents.splice(0);
            timeout = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.n)(() => {
              if (swiper.destroyed || !swiper.params) return;
              swiper.slideToClosest(swiper.params.speed, true, undefined, snapToThreshold);
            }, 0); // no delay; move on next tick
          }

          if (!timeout) {
            // if we get here, then we haven't detected the end of a momentum scroll, so
            // we'll consider a scroll "complete" when there haven't been any wheel events
            // for 500ms.
            timeout = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.n)(() => {
              if (swiper.destroyed || !swiper.params) return;
              const snapToThreshold = 0.5;
              lastEventBeforeSnap = newEvent;
              recentWheelEvents.splice(0);
              swiper.slideToClosest(swiper.params.speed, true, undefined, snapToThreshold);
            }, 500);
          }
        }

        // Emit event
        if (!ignoreWheelEvents) emit('scroll', e);

        // Stop autoplay
        if (swiper.params.autoplay && swiper.params.autoplay.disableOnInteraction) swiper.autoplay.stop();
        // Return page scroll on edge positions
        if (params.releaseOnEdges && (position === swiper.minTranslate() || position === swiper.maxTranslate())) {
          return true;
        }
      }
    }
    if (e.preventDefault) e.preventDefault();else e.returnValue = false;
    return false;
  }
  function events(method) {
    let targetEl = swiper.el;
    if (swiper.params.mousewheel.eventsTarget !== 'container') {
      targetEl = document.querySelector(swiper.params.mousewheel.eventsTarget);
    }
    targetEl[method]('mouseenter', handleMouseEnter);
    targetEl[method]('mouseleave', handleMouseLeave);
    targetEl[method]('wheel', handle);
  }
  function enable() {
    if (swiper.params.cssMode) {
      swiper.wrapperEl.removeEventListener('wheel', handle);
      return true;
    }
    if (swiper.mousewheel.enabled) return false;
    events('addEventListener');
    swiper.mousewheel.enabled = true;
    return true;
  }
  function disable() {
    if (swiper.params.cssMode) {
      swiper.wrapperEl.addEventListener(event, handle);
      return true;
    }
    if (!swiper.mousewheel.enabled) return false;
    events('removeEventListener');
    swiper.mousewheel.enabled = false;
    return true;
  }
  on('init', () => {
    if (!swiper.params.mousewheel.enabled && swiper.params.cssMode) {
      disable();
    }
    if (swiper.params.mousewheel.enabled) enable();
  });
  on('destroy', () => {
    if (swiper.params.cssMode) {
      enable();
    }
    if (swiper.mousewheel.enabled) disable();
  });
  Object.assign(swiper.mousewheel, {
    enable,
    disable
  });
}




/***/ }),

/***/ "./node_modules/swiper/modules/navigation.mjs":
/*!****************************************************!*\
  !*** ./node_modules/swiper/modules/navigation.mjs ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Navigation)
/* harmony export */ });
/* harmony import */ var _shared_create_element_if_not_defined_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/create-element-if-not-defined.mjs */ "./node_modules/swiper/shared/create-element-if-not-defined.mjs");
/* harmony import */ var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");



function Navigation(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit
  } = _ref;
  extendParams({
    navigation: {
      nextEl: null,
      prevEl: null,
      hideOnClick: false,
      disabledClass: 'swiper-button-disabled',
      hiddenClass: 'swiper-button-hidden',
      lockClass: 'swiper-button-lock',
      navigationDisabledClass: 'swiper-navigation-disabled'
    }
  });
  swiper.navigation = {
    nextEl: null,
    prevEl: null
  };
  function getEl(el) {
    let res;
    if (el && typeof el === 'string' && swiper.isElement) {
      res = swiper.el.querySelector(el) || swiper.hostEl.querySelector(el);
      if (res) return res;
    }
    if (el) {
      if (typeof el === 'string') res = [...document.querySelectorAll(el)];
      if (swiper.params.uniqueNavElements && typeof el === 'string' && res && res.length > 1 && swiper.el.querySelectorAll(el).length === 1) {
        res = swiper.el.querySelector(el);
      } else if (res && res.length === 1) {
        res = res[0];
      }
    }
    if (el && !res) return el;
    // if (Array.isArray(res) && res.length === 1) res = res[0];
    return res;
  }
  function toggleEl(el, disabled) {
    const params = swiper.params.navigation;
    el = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.m)(el);
    el.forEach(subEl => {
      if (subEl) {
        subEl.classList[disabled ? 'add' : 'remove'](...params.disabledClass.split(' '));
        if (subEl.tagName === 'BUTTON') subEl.disabled = disabled;
        if (swiper.params.watchOverflow && swiper.enabled) {
          subEl.classList[swiper.isLocked ? 'add' : 'remove'](params.lockClass);
        }
      }
    });
  }
  function update() {
    // Update Navigation Buttons
    const {
      nextEl,
      prevEl
    } = swiper.navigation;
    if (swiper.params.loop) {
      toggleEl(prevEl, false);
      toggleEl(nextEl, false);
      return;
    }
    toggleEl(prevEl, swiper.isBeginning && !swiper.params.rewind);
    toggleEl(nextEl, swiper.isEnd && !swiper.params.rewind);
  }
  function onPrevClick(e) {
    e.preventDefault();
    if (swiper.isBeginning && !swiper.params.loop && !swiper.params.rewind) return;
    swiper.slidePrev();
    emit('navigationPrev');
  }
  function onNextClick(e) {
    e.preventDefault();
    if (swiper.isEnd && !swiper.params.loop && !swiper.params.rewind) return;
    swiper.slideNext();
    emit('navigationNext');
  }
  function init() {
    const params = swiper.params.navigation;
    swiper.params.navigation = (0,_shared_create_element_if_not_defined_mjs__WEBPACK_IMPORTED_MODULE_0__.c)(swiper, swiper.originalParams.navigation, swiper.params.navigation, {
      nextEl: 'swiper-button-next',
      prevEl: 'swiper-button-prev'
    });
    if (!(params.nextEl || params.prevEl)) return;
    let nextEl = getEl(params.nextEl);
    let prevEl = getEl(params.prevEl);
    Object.assign(swiper.navigation, {
      nextEl,
      prevEl
    });
    nextEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.m)(nextEl);
    prevEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.m)(prevEl);
    const initButton = (el, dir) => {
      if (el) {
        el.addEventListener('click', dir === 'next' ? onNextClick : onPrevClick);
      }
      if (!swiper.enabled && el) {
        el.classList.add(...params.lockClass.split(' '));
      }
    };
    nextEl.forEach(el => initButton(el, 'next'));
    prevEl.forEach(el => initButton(el, 'prev'));
  }
  function destroy() {
    let {
      nextEl,
      prevEl
    } = swiper.navigation;
    nextEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.m)(nextEl);
    prevEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.m)(prevEl);
    const destroyButton = (el, dir) => {
      el.removeEventListener('click', dir === 'next' ? onNextClick : onPrevClick);
      el.classList.remove(...swiper.params.navigation.disabledClass.split(' '));
    };
    nextEl.forEach(el => destroyButton(el, 'next'));
    prevEl.forEach(el => destroyButton(el, 'prev'));
  }
  on('init', () => {
    if (swiper.params.navigation.enabled === false) {
      // eslint-disable-next-line
      disable();
    } else {
      init();
      update();
    }
  });
  on('toEdge fromEdge lock unlock', () => {
    update();
  });
  on('destroy', () => {
    destroy();
  });
  on('enable disable', () => {
    let {
      nextEl,
      prevEl
    } = swiper.navigation;
    nextEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.m)(nextEl);
    prevEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.m)(prevEl);
    if (swiper.enabled) {
      update();
      return;
    }
    [...nextEl, ...prevEl].filter(el => !!el).forEach(el => el.classList.add(swiper.params.navigation.lockClass));
  });
  on('click', (_s, e) => {
    let {
      nextEl,
      prevEl
    } = swiper.navigation;
    nextEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.m)(nextEl);
    prevEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.m)(prevEl);
    const targetEl = e.target;
    let targetIsButton = prevEl.includes(targetEl) || nextEl.includes(targetEl);
    if (swiper.isElement && !targetIsButton) {
      const path = e.path || e.composedPath && e.composedPath();
      if (path) {
        targetIsButton = path.find(pathEl => nextEl.includes(pathEl) || prevEl.includes(pathEl));
      }
    }
    if (swiper.params.navigation.hideOnClick && !targetIsButton) {
      if (swiper.pagination && swiper.params.pagination && swiper.params.pagination.clickable && (swiper.pagination.el === targetEl || swiper.pagination.el.contains(targetEl))) return;
      let isHidden;
      if (nextEl.length) {
        isHidden = nextEl[0].classList.contains(swiper.params.navigation.hiddenClass);
      } else if (prevEl.length) {
        isHidden = prevEl[0].classList.contains(swiper.params.navigation.hiddenClass);
      }
      if (isHidden === true) {
        emit('navigationShow');
      } else {
        emit('navigationHide');
      }
      [...nextEl, ...prevEl].filter(el => !!el).forEach(el => el.classList.toggle(swiper.params.navigation.hiddenClass));
    }
  });
  const enable = () => {
    swiper.el.classList.remove(...swiper.params.navigation.navigationDisabledClass.split(' '));
    init();
    update();
  };
  const disable = () => {
    swiper.el.classList.add(...swiper.params.navigation.navigationDisabledClass.split(' '));
    destroy();
  };
  Object.assign(swiper.navigation, {
    enable,
    disable,
    update,
    init,
    destroy
  });
}




/***/ }),

/***/ "./node_modules/swiper/modules/pagination.mjs":
/*!****************************************************!*\
  !*** ./node_modules/swiper/modules/pagination.mjs ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Pagination)
/* harmony export */ });
/* harmony import */ var _shared_classes_to_selector_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/classes-to-selector.mjs */ "./node_modules/swiper/shared/classes-to-selector.mjs");
/* harmony import */ var _shared_create_element_if_not_defined_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/create-element-if-not-defined.mjs */ "./node_modules/swiper/shared/create-element-if-not-defined.mjs");
/* harmony import */ var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");




function Pagination(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit
  } = _ref;
  const pfx = 'swiper-pagination';
  extendParams({
    pagination: {
      el: null,
      bulletElement: 'span',
      clickable: false,
      hideOnClick: false,
      renderBullet: null,
      renderProgressbar: null,
      renderFraction: null,
      renderCustom: null,
      progressbarOpposite: false,
      type: 'bullets',
      // 'bullets' or 'progressbar' or 'fraction' or 'custom'
      dynamicBullets: false,
      dynamicMainBullets: 1,
      formatFractionCurrent: number => number,
      formatFractionTotal: number => number,
      bulletClass: `${pfx}-bullet`,
      bulletActiveClass: `${pfx}-bullet-active`,
      modifierClass: `${pfx}-`,
      currentClass: `${pfx}-current`,
      totalClass: `${pfx}-total`,
      hiddenClass: `${pfx}-hidden`,
      progressbarFillClass: `${pfx}-progressbar-fill`,
      progressbarOppositeClass: `${pfx}-progressbar-opposite`,
      clickableClass: `${pfx}-clickable`,
      lockClass: `${pfx}-lock`,
      horizontalClass: `${pfx}-horizontal`,
      verticalClass: `${pfx}-vertical`,
      paginationDisabledClass: `${pfx}-disabled`
    }
  });
  swiper.pagination = {
    el: null,
    bullets: []
  };
  let bulletSize;
  let dynamicBulletIndex = 0;
  function isPaginationDisabled() {
    return !swiper.params.pagination.el || !swiper.pagination.el || Array.isArray(swiper.pagination.el) && swiper.pagination.el.length === 0;
  }
  function setSideBullets(bulletEl, position) {
    const {
      bulletActiveClass
    } = swiper.params.pagination;
    if (!bulletEl) return;
    bulletEl = bulletEl[`${position === 'prev' ? 'previous' : 'next'}ElementSibling`];
    if (bulletEl) {
      bulletEl.classList.add(`${bulletActiveClass}-${position}`);
      bulletEl = bulletEl[`${position === 'prev' ? 'previous' : 'next'}ElementSibling`];
      if (bulletEl) {
        bulletEl.classList.add(`${bulletActiveClass}-${position}-${position}`);
      }
    }
  }
  function getMoveDirection(prevIndex, nextIndex, length) {
    prevIndex = prevIndex % length;
    nextIndex = nextIndex % length;
    if (nextIndex === prevIndex + 1) {
      return 'next';
    } else if (nextIndex === prevIndex - 1) {
      return 'previous';
    }
    return;
  }
  function onBulletClick(e) {
    const bulletEl = e.target.closest((0,_shared_classes_to_selector_mjs__WEBPACK_IMPORTED_MODULE_0__.c)(swiper.params.pagination.bulletClass));
    if (!bulletEl) {
      return;
    }
    e.preventDefault();
    const index = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.i)(bulletEl) * swiper.params.slidesPerGroup;
    if (swiper.params.loop) {
      if (swiper.realIndex === index) return;
      const moveDirection = getMoveDirection(swiper.realIndex, index, swiper.slides.length);
      if (moveDirection === 'next') {
        swiper.slideNext();
      } else if (moveDirection === 'previous') {
        swiper.slidePrev();
      } else {
        swiper.slideToLoop(index);
      }
    } else {
      swiper.slideTo(index);
    }
  }
  function update() {
    // Render || Update Pagination bullets/items
    const rtl = swiper.rtl;
    const params = swiper.params.pagination;
    if (isPaginationDisabled()) return;
    let el = swiper.pagination.el;
    el = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(el);
    // Current/Total
    let current;
    let previousIndex;
    const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
    const total = swiper.params.loop ? Math.ceil(slidesLength / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
    if (swiper.params.loop) {
      previousIndex = swiper.previousRealIndex || 0;
      current = swiper.params.slidesPerGroup > 1 ? Math.floor(swiper.realIndex / swiper.params.slidesPerGroup) : swiper.realIndex;
    } else if (typeof swiper.snapIndex !== 'undefined') {
      current = swiper.snapIndex;
      previousIndex = swiper.previousSnapIndex;
    } else {
      previousIndex = swiper.previousIndex || 0;
      current = swiper.activeIndex || 0;
    }
    // Types
    if (params.type === 'bullets' && swiper.pagination.bullets && swiper.pagination.bullets.length > 0) {
      const bullets = swiper.pagination.bullets;
      let firstIndex;
      let lastIndex;
      let midIndex;
      if (params.dynamicBullets) {
        bulletSize = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.h)(bullets[0], swiper.isHorizontal() ? 'width' : 'height', true);
        el.forEach(subEl => {
          subEl.style[swiper.isHorizontal() ? 'width' : 'height'] = `${bulletSize * (params.dynamicMainBullets + 4)}px`;
        });
        if (params.dynamicMainBullets > 1 && previousIndex !== undefined) {
          dynamicBulletIndex += current - (previousIndex || 0);
          if (dynamicBulletIndex > params.dynamicMainBullets - 1) {
            dynamicBulletIndex = params.dynamicMainBullets - 1;
          } else if (dynamicBulletIndex < 0) {
            dynamicBulletIndex = 0;
          }
        }
        firstIndex = Math.max(current - dynamicBulletIndex, 0);
        lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1);
        midIndex = (lastIndex + firstIndex) / 2;
      }
      bullets.forEach(bulletEl => {
        const classesToRemove = [...['', '-next', '-next-next', '-prev', '-prev-prev', '-main'].map(suffix => `${params.bulletActiveClass}${suffix}`)].map(s => typeof s === 'string' && s.includes(' ') ? s.split(' ') : s).flat();
        bulletEl.classList.remove(...classesToRemove);
      });
      if (el.length > 1) {
        bullets.forEach(bullet => {
          const bulletIndex = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.i)(bullet);
          if (bulletIndex === current) {
            bullet.classList.add(...params.bulletActiveClass.split(' '));
          } else if (swiper.isElement) {
            bullet.setAttribute('part', 'bullet');
          }
          if (params.dynamicBullets) {
            if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) {
              bullet.classList.add(...`${params.bulletActiveClass}-main`.split(' '));
            }
            if (bulletIndex === firstIndex) {
              setSideBullets(bullet, 'prev');
            }
            if (bulletIndex === lastIndex) {
              setSideBullets(bullet, 'next');
            }
          }
        });
      } else {
        const bullet = bullets[current];
        if (bullet) {
          bullet.classList.add(...params.bulletActiveClass.split(' '));
        }
        if (swiper.isElement) {
          bullets.forEach((bulletEl, bulletIndex) => {
            bulletEl.setAttribute('part', bulletIndex === current ? 'bullet-active' : 'bullet');
          });
        }
        if (params.dynamicBullets) {
          const firstDisplayedBullet = bullets[firstIndex];
          const lastDisplayedBullet = bullets[lastIndex];
          for (let i = firstIndex; i <= lastIndex; i += 1) {
            if (bullets[i]) {
              bullets[i].classList.add(...`${params.bulletActiveClass}-main`.split(' '));
            }
          }
          setSideBullets(firstDisplayedBullet, 'prev');
          setSideBullets(lastDisplayedBullet, 'next');
        }
      }
      if (params.dynamicBullets) {
        const dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4);
        const bulletsOffset = (bulletSize * dynamicBulletsLength - bulletSize) / 2 - midIndex * bulletSize;
        const offsetProp = rtl ? 'right' : 'left';
        bullets.forEach(bullet => {
          bullet.style[swiper.isHorizontal() ? offsetProp : 'top'] = `${bulletsOffset}px`;
        });
      }
    }
    el.forEach((subEl, subElIndex) => {
      if (params.type === 'fraction') {
        subEl.querySelectorAll((0,_shared_classes_to_selector_mjs__WEBPACK_IMPORTED_MODULE_0__.c)(params.currentClass)).forEach(fractionEl => {
          fractionEl.textContent = params.formatFractionCurrent(current + 1);
        });
        subEl.querySelectorAll((0,_shared_classes_to_selector_mjs__WEBPACK_IMPORTED_MODULE_0__.c)(params.totalClass)).forEach(totalEl => {
          totalEl.textContent = params.formatFractionTotal(total);
        });
      }
      if (params.type === 'progressbar') {
        let progressbarDirection;
        if (params.progressbarOpposite) {
          progressbarDirection = swiper.isHorizontal() ? 'vertical' : 'horizontal';
        } else {
          progressbarDirection = swiper.isHorizontal() ? 'horizontal' : 'vertical';
        }
        const scale = (current + 1) / total;
        let scaleX = 1;
        let scaleY = 1;
        if (progressbarDirection === 'horizontal') {
          scaleX = scale;
        } else {
          scaleY = scale;
        }
        subEl.querySelectorAll((0,_shared_classes_to_selector_mjs__WEBPACK_IMPORTED_MODULE_0__.c)(params.progressbarFillClass)).forEach(progressEl => {
          progressEl.style.transform = `translate3d(0,0,0) scaleX(${scaleX}) scaleY(${scaleY})`;
          progressEl.style.transitionDuration = `${swiper.params.speed}ms`;
        });
      }
      if (params.type === 'custom' && params.renderCustom) {
        (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.s)(subEl, params.renderCustom(swiper, current + 1, total));
        if (subElIndex === 0) emit('paginationRender', subEl);
      } else {
        if (subElIndex === 0) emit('paginationRender', subEl);
        emit('paginationUpdate', subEl);
      }
      if (swiper.params.watchOverflow && swiper.enabled) {
        subEl.classList[swiper.isLocked ? 'add' : 'remove'](params.lockClass);
      }
    });
  }
  function render() {
    // Render Container
    const params = swiper.params.pagination;
    if (isPaginationDisabled()) return;
    const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.grid && swiper.params.grid.rows > 1 ? swiper.slides.length / Math.ceil(swiper.params.grid.rows) : swiper.slides.length;
    let el = swiper.pagination.el;
    el = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(el);
    let paginationHTML = '';
    if (params.type === 'bullets') {
      let numberOfBullets = swiper.params.loop ? Math.ceil(slidesLength / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
      if (swiper.params.freeMode && swiper.params.freeMode.enabled && numberOfBullets > slidesLength) {
        numberOfBullets = slidesLength;
      }
      for (let i = 0; i < numberOfBullets; i += 1) {
        if (params.renderBullet) {
          paginationHTML += params.renderBullet.call(swiper, i, params.bulletClass);
        } else {
          // prettier-ignore
          paginationHTML += `<${params.bulletElement} ${swiper.isElement ? 'part="bullet"' : ''} class="${params.bulletClass}"></${params.bulletElement}>`;
        }
      }
    }
    if (params.type === 'fraction') {
      if (params.renderFraction) {
        paginationHTML = params.renderFraction.call(swiper, params.currentClass, params.totalClass);
      } else {
        paginationHTML = `<span class="${params.currentClass}"></span>` + ' / ' + `<span class="${params.totalClass}"></span>`;
      }
    }
    if (params.type === 'progressbar') {
      if (params.renderProgressbar) {
        paginationHTML = params.renderProgressbar.call(swiper, params.progressbarFillClass);
      } else {
        paginationHTML = `<span class="${params.progressbarFillClass}"></span>`;
      }
    }
    swiper.pagination.bullets = [];
    el.forEach(subEl => {
      if (params.type !== 'custom') {
        (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.s)(subEl, paginationHTML || '');
      }
      if (params.type === 'bullets') {
        swiper.pagination.bullets.push(...subEl.querySelectorAll((0,_shared_classes_to_selector_mjs__WEBPACK_IMPORTED_MODULE_0__.c)(params.bulletClass)));
      }
    });
    if (params.type !== 'custom') {
      emit('paginationRender', el[0]);
    }
  }
  function init() {
    swiper.params.pagination = (0,_shared_create_element_if_not_defined_mjs__WEBPACK_IMPORTED_MODULE_1__.c)(swiper, swiper.originalParams.pagination, swiper.params.pagination, {
      el: 'swiper-pagination'
    });
    const params = swiper.params.pagination;
    if (!params.el) return;
    let el;
    if (typeof params.el === 'string' && swiper.isElement) {
      el = swiper.el.querySelector(params.el);
    }
    if (!el && typeof params.el === 'string') {
      el = [...document.querySelectorAll(params.el)];
    }
    if (!el) {
      el = params.el;
    }
    if (!el || el.length === 0) return;
    if (swiper.params.uniqueNavElements && typeof params.el === 'string' && Array.isArray(el) && el.length > 1) {
      el = [...swiper.el.querySelectorAll(params.el)];
      // check if it belongs to another nested Swiper
      if (el.length > 1) {
        el = el.find(subEl => {
          if ((0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.b)(subEl, '.swiper')[0] !== swiper.el) return false;
          return true;
        });
      }
    }
    if (Array.isArray(el) && el.length === 1) el = el[0];
    Object.assign(swiper.pagination, {
      el
    });
    el = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(el);
    el.forEach(subEl => {
      if (params.type === 'bullets' && params.clickable) {
        subEl.classList.add(...(params.clickableClass || '').split(' '));
      }
      subEl.classList.add(params.modifierClass + params.type);
      subEl.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
      if (params.type === 'bullets' && params.dynamicBullets) {
        subEl.classList.add(`${params.modifierClass}${params.type}-dynamic`);
        dynamicBulletIndex = 0;
        if (params.dynamicMainBullets < 1) {
          params.dynamicMainBullets = 1;
        }
      }
      if (params.type === 'progressbar' && params.progressbarOpposite) {
        subEl.classList.add(params.progressbarOppositeClass);
      }
      if (params.clickable) {
        subEl.addEventListener('click', onBulletClick);
      }
      if (!swiper.enabled) {
        subEl.classList.add(params.lockClass);
      }
    });
  }
  function destroy() {
    const params = swiper.params.pagination;
    if (isPaginationDisabled()) return;
    let el = swiper.pagination.el;
    if (el) {
      el = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(el);
      el.forEach(subEl => {
        subEl.classList.remove(params.hiddenClass);
        subEl.classList.remove(params.modifierClass + params.type);
        subEl.classList.remove(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
        if (params.clickable) {
          subEl.classList.remove(...(params.clickableClass || '').split(' '));
          subEl.removeEventListener('click', onBulletClick);
        }
      });
    }
    if (swiper.pagination.bullets) swiper.pagination.bullets.forEach(subEl => subEl.classList.remove(...params.bulletActiveClass.split(' ')));
  }
  on('changeDirection', () => {
    if (!swiper.pagination || !swiper.pagination.el) return;
    const params = swiper.params.pagination;
    let {
      el
    } = swiper.pagination;
    el = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(el);
    el.forEach(subEl => {
      subEl.classList.remove(params.horizontalClass, params.verticalClass);
      subEl.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
    });
  });
  on('init', () => {
    if (swiper.params.pagination.enabled === false) {
      // eslint-disable-next-line
      disable();
    } else {
      init();
      render();
      update();
    }
  });
  on('activeIndexChange', () => {
    if (typeof swiper.snapIndex === 'undefined') {
      update();
    }
  });
  on('snapIndexChange', () => {
    update();
  });
  on('snapGridLengthChange', () => {
    render();
    update();
  });
  on('destroy', () => {
    destroy();
  });
  on('enable disable', () => {
    let {
      el
    } = swiper.pagination;
    if (el) {
      el = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(el);
      el.forEach(subEl => subEl.classList[swiper.enabled ? 'remove' : 'add'](swiper.params.pagination.lockClass));
    }
  });
  on('lock unlock', () => {
    update();
  });
  on('click', (_s, e) => {
    const targetEl = e.target;
    const el = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(swiper.pagination.el);
    if (swiper.params.pagination.el && swiper.params.pagination.hideOnClick && el && el.length > 0 && !targetEl.classList.contains(swiper.params.pagination.bulletClass)) {
      if (swiper.navigation && (swiper.navigation.nextEl && targetEl === swiper.navigation.nextEl || swiper.navigation.prevEl && targetEl === swiper.navigation.prevEl)) return;
      const isHidden = el[0].classList.contains(swiper.params.pagination.hiddenClass);
      if (isHidden === true) {
        emit('paginationShow');
      } else {
        emit('paginationHide');
      }
      el.forEach(subEl => subEl.classList.toggle(swiper.params.pagination.hiddenClass));
    }
  });
  const enable = () => {
    swiper.el.classList.remove(swiper.params.pagination.paginationDisabledClass);
    let {
      el
    } = swiper.pagination;
    if (el) {
      el = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(el);
      el.forEach(subEl => subEl.classList.remove(swiper.params.pagination.paginationDisabledClass));
    }
    init();
    render();
    update();
  };
  const disable = () => {
    swiper.el.classList.add(swiper.params.pagination.paginationDisabledClass);
    let {
      el
    } = swiper.pagination;
    if (el) {
      el = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_2__.m)(el);
      el.forEach(subEl => subEl.classList.add(swiper.params.pagination.paginationDisabledClass));
    }
    destroy();
  };
  Object.assign(swiper.pagination, {
    enable,
    disable,
    render,
    update,
    init,
    destroy
  });
}




/***/ }),

/***/ "./node_modules/swiper/modules/parallax.mjs":
/*!**************************************************!*\
  !*** ./node_modules/swiper/modules/parallax.mjs ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Parallax)
/* harmony export */ });
/* harmony import */ var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");


function Parallax(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    parallax: {
      enabled: false
    }
  });
  const elementsSelector = '[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]';
  const setTransform = (el, progress) => {
    const {
      rtl
    } = swiper;
    const rtlFactor = rtl ? -1 : 1;
    const p = el.getAttribute('data-swiper-parallax') || '0';
    let x = el.getAttribute('data-swiper-parallax-x');
    let y = el.getAttribute('data-swiper-parallax-y');
    const scale = el.getAttribute('data-swiper-parallax-scale');
    const opacity = el.getAttribute('data-swiper-parallax-opacity');
    const rotate = el.getAttribute('data-swiper-parallax-rotate');
    if (x || y) {
      x = x || '0';
      y = y || '0';
    } else if (swiper.isHorizontal()) {
      x = p;
      y = '0';
    } else {
      y = p;
      x = '0';
    }
    if (x.indexOf('%') >= 0) {
      x = `${parseInt(x, 10) * progress * rtlFactor}%`;
    } else {
      x = `${x * progress * rtlFactor}px`;
    }
    if (y.indexOf('%') >= 0) {
      y = `${parseInt(y, 10) * progress}%`;
    } else {
      y = `${y * progress}px`;
    }
    if (typeof opacity !== 'undefined' && opacity !== null) {
      const currentOpacity = opacity - (opacity - 1) * (1 - Math.abs(progress));
      el.style.opacity = currentOpacity;
    }
    let transform = `translate3d(${x}, ${y}, 0px)`;
    if (typeof scale !== 'undefined' && scale !== null) {
      const currentScale = scale - (scale - 1) * (1 - Math.abs(progress));
      transform += ` scale(${currentScale})`;
    }
    if (rotate && typeof rotate !== 'undefined' && rotate !== null) {
      const currentRotate = rotate * progress * -1;
      transform += ` rotate(${currentRotate}deg)`;
    }
    el.style.transform = transform;
  };
  const setTranslate = () => {
    const {
      el,
      slides,
      progress,
      snapGrid,
      isElement
    } = swiper;
    const elements = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.e)(el, elementsSelector);
    if (swiper.isElement) {
      elements.push(...(0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.e)(swiper.hostEl, elementsSelector));
    }
    elements.forEach(subEl => {
      setTransform(subEl, progress);
    });
    slides.forEach((slideEl, slideIndex) => {
      let slideProgress = slideEl.progress;
      if (swiper.params.slidesPerGroup > 1 && swiper.params.slidesPerView !== 'auto') {
        slideProgress += Math.ceil(slideIndex / 2) - progress * (snapGrid.length - 1);
      }
      slideProgress = Math.min(Math.max(slideProgress, -1), 1);
      slideEl.querySelectorAll(`${elementsSelector}, [data-swiper-parallax-rotate]`).forEach(subEl => {
        setTransform(subEl, slideProgress);
      });
    });
  };
  const setTransition = function (duration) {
    if (duration === void 0) {
      duration = swiper.params.speed;
    }
    const {
      el,
      hostEl
    } = swiper;
    const elements = [...el.querySelectorAll(elementsSelector)];
    if (swiper.isElement) {
      elements.push(...hostEl.querySelectorAll(elementsSelector));
    }
    elements.forEach(parallaxEl => {
      let parallaxDuration = parseInt(parallaxEl.getAttribute('data-swiper-parallax-duration'), 10) || duration;
      if (duration === 0) parallaxDuration = 0;
      parallaxEl.style.transitionDuration = `${parallaxDuration}ms`;
    });
  };
  on('beforeInit', () => {
    if (!swiper.params.parallax.enabled) return;
    swiper.params.watchSlidesProgress = true;
    swiper.originalParams.watchSlidesProgress = true;
  });
  on('init', () => {
    if (!swiper.params.parallax.enabled) return;
    setTranslate();
  });
  on('setTranslate', () => {
    if (!swiper.params.parallax.enabled) return;
    setTranslate();
  });
  on('setTransition', (_swiper, duration) => {
    if (!swiper.params.parallax.enabled) return;
    setTransition(duration);
  });
}




/***/ }),

/***/ "./node_modules/swiper/modules/scrollbar.mjs":
/*!***************************************************!*\
  !*** ./node_modules/swiper/modules/scrollbar.mjs ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Scrollbar)
/* harmony export */ });
/* harmony import */ var _shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/ssr-window.esm.mjs */ "./node_modules/swiper/shared/ssr-window.esm.mjs");
/* harmony import */ var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");
/* harmony import */ var _shared_create_element_if_not_defined_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/create-element-if-not-defined.mjs */ "./node_modules/swiper/shared/create-element-if-not-defined.mjs");
/* harmony import */ var _shared_classes_to_selector_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/classes-to-selector.mjs */ "./node_modules/swiper/shared/classes-to-selector.mjs");





function Scrollbar(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit
  } = _ref;
  const document = (0,_shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.g)();
  let isTouched = false;
  let timeout = null;
  let dragTimeout = null;
  let dragStartPos;
  let dragSize;
  let trackSize;
  let divider;
  extendParams({
    scrollbar: {
      el: null,
      dragSize: 'auto',
      hide: false,
      draggable: false,
      snapOnRelease: true,
      lockClass: 'swiper-scrollbar-lock',
      dragClass: 'swiper-scrollbar-drag',
      scrollbarDisabledClass: 'swiper-scrollbar-disabled',
      horizontalClass: `swiper-scrollbar-horizontal`,
      verticalClass: `swiper-scrollbar-vertical`
    }
  });
  swiper.scrollbar = {
    el: null,
    dragEl: null
  };
  function setTranslate() {
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
    const {
      scrollbar,
      rtlTranslate: rtl
    } = swiper;
    const {
      dragEl,
      el
    } = scrollbar;
    const params = swiper.params.scrollbar;
    const progress = swiper.params.loop ? swiper.progressLoop : swiper.progress;
    let newSize = dragSize;
    let newPos = (trackSize - dragSize) * progress;
    if (rtl) {
      newPos = -newPos;
      if (newPos > 0) {
        newSize = dragSize - newPos;
        newPos = 0;
      } else if (-newPos + dragSize > trackSize) {
        newSize = trackSize + newPos;
      }
    } else if (newPos < 0) {
      newSize = dragSize + newPos;
      newPos = 0;
    } else if (newPos + dragSize > trackSize) {
      newSize = trackSize - newPos;
    }
    if (swiper.isHorizontal()) {
      dragEl.style.transform = `translate3d(${newPos}px, 0, 0)`;
      dragEl.style.width = `${newSize}px`;
    } else {
      dragEl.style.transform = `translate3d(0px, ${newPos}px, 0)`;
      dragEl.style.height = `${newSize}px`;
    }
    if (params.hide) {
      clearTimeout(timeout);
      el.style.opacity = 1;
      timeout = setTimeout(() => {
        el.style.opacity = 0;
        el.style.transitionDuration = '400ms';
      }, 1000);
    }
  }
  function setTransition(duration) {
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
    swiper.scrollbar.dragEl.style.transitionDuration = `${duration}ms`;
  }
  function updateSize() {
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
    const {
      scrollbar
    } = swiper;
    const {
      dragEl,
      el
    } = scrollbar;
    dragEl.style.width = '';
    dragEl.style.height = '';
    trackSize = swiper.isHorizontal() ? el.offsetWidth : el.offsetHeight;
    divider = swiper.size / (swiper.virtualSize + swiper.params.slidesOffsetBefore - (swiper.params.centeredSlides ? swiper.snapGrid[0] : 0));
    if (swiper.params.scrollbar.dragSize === 'auto') {
      dragSize = trackSize * divider;
    } else {
      dragSize = parseInt(swiper.params.scrollbar.dragSize, 10);
    }
    if (swiper.isHorizontal()) {
      dragEl.style.width = `${dragSize}px`;
    } else {
      dragEl.style.height = `${dragSize}px`;
    }
    if (divider >= 1) {
      el.style.display = 'none';
    } else {
      el.style.display = '';
    }
    if (swiper.params.scrollbar.hide) {
      el.style.opacity = 0;
    }
    if (swiper.params.watchOverflow && swiper.enabled) {
      scrollbar.el.classList[swiper.isLocked ? 'add' : 'remove'](swiper.params.scrollbar.lockClass);
    }
  }
  function getPointerPosition(e) {
    return swiper.isHorizontal() ? e.clientX : e.clientY;
  }
  function setDragPosition(e) {
    const {
      scrollbar,
      rtlTranslate: rtl
    } = swiper;
    const {
      el
    } = scrollbar;
    let positionRatio;
    positionRatio = (getPointerPosition(e) - (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.d)(el)[swiper.isHorizontal() ? 'left' : 'top'] - (dragStartPos !== null ? dragStartPos : dragSize / 2)) / (trackSize - dragSize);
    positionRatio = Math.max(Math.min(positionRatio, 1), 0);
    if (rtl) {
      positionRatio = 1 - positionRatio;
    }
    const position = swiper.minTranslate() + (swiper.maxTranslate() - swiper.minTranslate()) * positionRatio;
    swiper.updateProgress(position);
    swiper.setTranslate(position);
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
  }
  function onDragStart(e) {
    const params = swiper.params.scrollbar;
    const {
      scrollbar,
      wrapperEl
    } = swiper;
    const {
      el,
      dragEl
    } = scrollbar;
    isTouched = true;
    dragStartPos = e.target === dragEl ? getPointerPosition(e) - e.target.getBoundingClientRect()[swiper.isHorizontal() ? 'left' : 'top'] : null;
    e.preventDefault();
    e.stopPropagation();
    wrapperEl.style.transitionDuration = '100ms';
    dragEl.style.transitionDuration = '100ms';
    setDragPosition(e);
    clearTimeout(dragTimeout);
    el.style.transitionDuration = '0ms';
    if (params.hide) {
      el.style.opacity = 1;
    }
    if (swiper.params.cssMode) {
      swiper.wrapperEl.style['scroll-snap-type'] = 'none';
    }
    emit('scrollbarDragStart', e);
  }
  function onDragMove(e) {
    const {
      scrollbar,
      wrapperEl
    } = swiper;
    const {
      el,
      dragEl
    } = scrollbar;
    if (!isTouched) return;
    if (e.preventDefault && e.cancelable) e.preventDefault();else e.returnValue = false;
    setDragPosition(e);
    wrapperEl.style.transitionDuration = '0ms';
    el.style.transitionDuration = '0ms';
    dragEl.style.transitionDuration = '0ms';
    emit('scrollbarDragMove', e);
  }
  function onDragEnd(e) {
    const params = swiper.params.scrollbar;
    const {
      scrollbar,
      wrapperEl
    } = swiper;
    const {
      el
    } = scrollbar;
    if (!isTouched) return;
    isTouched = false;
    if (swiper.params.cssMode) {
      swiper.wrapperEl.style['scroll-snap-type'] = '';
      wrapperEl.style.transitionDuration = '';
    }
    if (params.hide) {
      clearTimeout(dragTimeout);
      dragTimeout = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.n)(() => {
        el.style.opacity = 0;
        el.style.transitionDuration = '400ms';
      }, 1000);
    }
    emit('scrollbarDragEnd', e);
    if (params.snapOnRelease) {
      swiper.slideToClosest();
    }
  }
  function events(method) {
    const {
      scrollbar,
      params
    } = swiper;
    const el = scrollbar.el;
    if (!el) return;
    const target = el;
    const activeListener = params.passiveListeners ? {
      passive: false,
      capture: false
    } : false;
    const passiveListener = params.passiveListeners ? {
      passive: true,
      capture: false
    } : false;
    if (!target) return;
    const eventMethod = method === 'on' ? 'addEventListener' : 'removeEventListener';
    target[eventMethod]('pointerdown', onDragStart, activeListener);
    document[eventMethod]('pointermove', onDragMove, activeListener);
    document[eventMethod]('pointerup', onDragEnd, passiveListener);
  }
  function enableDraggable() {
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
    events('on');
  }
  function disableDraggable() {
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
    events('off');
  }
  function init() {
    const {
      scrollbar,
      el: swiperEl
    } = swiper;
    swiper.params.scrollbar = (0,_shared_create_element_if_not_defined_mjs__WEBPACK_IMPORTED_MODULE_2__.c)(swiper, swiper.originalParams.scrollbar, swiper.params.scrollbar, {
      el: 'swiper-scrollbar'
    });
    const params = swiper.params.scrollbar;
    if (!params.el) return;
    let el;
    if (typeof params.el === 'string' && swiper.isElement) {
      el = swiper.el.querySelector(params.el);
    }
    if (!el && typeof params.el === 'string') {
      el = document.querySelectorAll(params.el);
      if (!el.length) return;
    } else if (!el) {
      el = params.el;
    }
    if (swiper.params.uniqueNavElements && typeof params.el === 'string' && el.length > 1 && swiperEl.querySelectorAll(params.el).length === 1) {
      el = swiperEl.querySelector(params.el);
    }
    if (el.length > 0) el = el[0];
    el.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
    let dragEl;
    if (el) {
      dragEl = el.querySelector((0,_shared_classes_to_selector_mjs__WEBPACK_IMPORTED_MODULE_3__.c)(swiper.params.scrollbar.dragClass));
      if (!dragEl) {
        dragEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.c)('div', swiper.params.scrollbar.dragClass);
        el.append(dragEl);
      }
    }
    Object.assign(scrollbar, {
      el,
      dragEl
    });
    if (params.draggable) {
      enableDraggable();
    }
    if (el) {
      el.classList[swiper.enabled ? 'remove' : 'add'](...(0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.j)(swiper.params.scrollbar.lockClass));
    }
  }
  function destroy() {
    const params = swiper.params.scrollbar;
    const el = swiper.scrollbar.el;
    if (el) {
      el.classList.remove(...(0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.j)(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass));
    }
    disableDraggable();
  }
  on('changeDirection', () => {
    if (!swiper.scrollbar || !swiper.scrollbar.el) return;
    const params = swiper.params.scrollbar;
    let {
      el
    } = swiper.scrollbar;
    el = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.m)(el);
    el.forEach(subEl => {
      subEl.classList.remove(params.horizontalClass, params.verticalClass);
      subEl.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
    });
  });
  on('init', () => {
    if (swiper.params.scrollbar.enabled === false) {
      // eslint-disable-next-line
      disable();
    } else {
      init();
      updateSize();
      setTranslate();
    }
  });
  on('update resize observerUpdate lock unlock changeDirection', () => {
    updateSize();
  });
  on('setTranslate', () => {
    setTranslate();
  });
  on('setTransition', (_s, duration) => {
    setTransition(duration);
  });
  on('enable disable', () => {
    const {
      el
    } = swiper.scrollbar;
    if (el) {
      el.classList[swiper.enabled ? 'remove' : 'add'](...(0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.j)(swiper.params.scrollbar.lockClass));
    }
  });
  on('destroy', () => {
    destroy();
  });
  const enable = () => {
    swiper.el.classList.remove(...(0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.j)(swiper.params.scrollbar.scrollbarDisabledClass));
    if (swiper.scrollbar.el) {
      swiper.scrollbar.el.classList.remove(...(0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.j)(swiper.params.scrollbar.scrollbarDisabledClass));
    }
    init();
    updateSize();
    setTranslate();
  };
  const disable = () => {
    swiper.el.classList.add(...(0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.j)(swiper.params.scrollbar.scrollbarDisabledClass));
    if (swiper.scrollbar.el) {
      swiper.scrollbar.el.classList.add(...(0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.j)(swiper.params.scrollbar.scrollbarDisabledClass));
    }
    destroy();
  };
  Object.assign(swiper.scrollbar, {
    enable,
    disable,
    updateSize,
    setTranslate,
    init,
    destroy
  });
}




/***/ }),

/***/ "./node_modules/swiper/modules/thumbs.mjs":
/*!************************************************!*\
  !*** ./node_modules/swiper/modules/thumbs.mjs ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Thumb)
/* harmony export */ });
/* harmony import */ var _shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/ssr-window.esm.mjs */ "./node_modules/swiper/shared/ssr-window.esm.mjs");
/* harmony import */ var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");



function Thumb(_ref) {
  let {
    swiper,
    extendParams,
    on
  } = _ref;
  extendParams({
    thumbs: {
      swiper: null,
      multipleActiveThumbs: true,
      autoScrollOffset: 0,
      slideThumbActiveClass: 'swiper-slide-thumb-active',
      thumbsContainerClass: 'swiper-thumbs'
    }
  });
  let initialized = false;
  let swiperCreated = false;
  swiper.thumbs = {
    swiper: null
  };
  function onThumbClick() {
    const thumbsSwiper = swiper.thumbs.swiper;
    if (!thumbsSwiper || thumbsSwiper.destroyed) return;
    const clickedIndex = thumbsSwiper.clickedIndex;
    const clickedSlide = thumbsSwiper.clickedSlide;
    if (clickedSlide && clickedSlide.classList.contains(swiper.params.thumbs.slideThumbActiveClass)) return;
    if (typeof clickedIndex === 'undefined' || clickedIndex === null) return;
    let slideToIndex;
    if (thumbsSwiper.params.loop) {
      slideToIndex = parseInt(thumbsSwiper.clickedSlide.getAttribute('data-swiper-slide-index'), 10);
    } else {
      slideToIndex = clickedIndex;
    }
    if (swiper.params.loop) {
      swiper.slideToLoop(slideToIndex);
    } else {
      swiper.slideTo(slideToIndex);
    }
  }
  function init() {
    const {
      thumbs: thumbsParams
    } = swiper.params;
    if (initialized) return false;
    initialized = true;
    const SwiperClass = swiper.constructor;
    if (thumbsParams.swiper instanceof SwiperClass) {
      if (thumbsParams.swiper.destroyed) {
        initialized = false;
        return false;
      }
      swiper.thumbs.swiper = thumbsParams.swiper;
      Object.assign(swiper.thumbs.swiper.originalParams, {
        watchSlidesProgress: true,
        slideToClickedSlide: false
      });
      Object.assign(swiper.thumbs.swiper.params, {
        watchSlidesProgress: true,
        slideToClickedSlide: false
      });
      swiper.thumbs.swiper.update();
    } else if ((0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.o)(thumbsParams.swiper)) {
      const thumbsSwiperParams = Object.assign({}, thumbsParams.swiper);
      Object.assign(thumbsSwiperParams, {
        watchSlidesProgress: true,
        slideToClickedSlide: false
      });
      swiper.thumbs.swiper = new SwiperClass(thumbsSwiperParams);
      swiperCreated = true;
    }
    swiper.thumbs.swiper.el.classList.add(swiper.params.thumbs.thumbsContainerClass);
    swiper.thumbs.swiper.on('tap', onThumbClick);
    return true;
  }
  function update(initial) {
    const thumbsSwiper = swiper.thumbs.swiper;
    if (!thumbsSwiper || thumbsSwiper.destroyed) return;
    const slidesPerView = thumbsSwiper.params.slidesPerView === 'auto' ? thumbsSwiper.slidesPerViewDynamic() : thumbsSwiper.params.slidesPerView;

    // Activate thumbs
    let thumbsToActivate = 1;
    const thumbActiveClass = swiper.params.thumbs.slideThumbActiveClass;
    if (swiper.params.slidesPerView > 1 && !swiper.params.centeredSlides) {
      thumbsToActivate = swiper.params.slidesPerView;
    }
    if (!swiper.params.thumbs.multipleActiveThumbs) {
      thumbsToActivate = 1;
    }
    thumbsToActivate = Math.floor(thumbsToActivate);
    thumbsSwiper.slides.forEach(slideEl => slideEl.classList.remove(thumbActiveClass));
    if (thumbsSwiper.params.loop || thumbsSwiper.params.virtual && thumbsSwiper.params.virtual.enabled) {
      for (let i = 0; i < thumbsToActivate; i += 1) {
        (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.e)(thumbsSwiper.slidesEl, `[data-swiper-slide-index="${swiper.realIndex + i}"]`).forEach(slideEl => {
          slideEl.classList.add(thumbActiveClass);
        });
      }
    } else {
      for (let i = 0; i < thumbsToActivate; i += 1) {
        if (thumbsSwiper.slides[swiper.realIndex + i]) {
          thumbsSwiper.slides[swiper.realIndex + i].classList.add(thumbActiveClass);
        }
      }
    }
    const autoScrollOffset = swiper.params.thumbs.autoScrollOffset;
    const useOffset = autoScrollOffset && !thumbsSwiper.params.loop;
    if (swiper.realIndex !== thumbsSwiper.realIndex || useOffset) {
      const currentThumbsIndex = thumbsSwiper.activeIndex;
      let newThumbsIndex;
      let direction;
      if (thumbsSwiper.params.loop) {
        const newThumbsSlide = thumbsSwiper.slides.find(slideEl => slideEl.getAttribute('data-swiper-slide-index') === `${swiper.realIndex}`);
        newThumbsIndex = thumbsSwiper.slides.indexOf(newThumbsSlide);
        direction = swiper.activeIndex > swiper.previousIndex ? 'next' : 'prev';
      } else {
        newThumbsIndex = swiper.realIndex;
        direction = newThumbsIndex > swiper.previousIndex ? 'next' : 'prev';
      }
      if (useOffset) {
        newThumbsIndex += direction === 'next' ? autoScrollOffset : -1 * autoScrollOffset;
      }
      if (thumbsSwiper.visibleSlidesIndexes && thumbsSwiper.visibleSlidesIndexes.indexOf(newThumbsIndex) < 0) {
        if (thumbsSwiper.params.centeredSlides) {
          if (newThumbsIndex > currentThumbsIndex) {
            newThumbsIndex = newThumbsIndex - Math.floor(slidesPerView / 2) + 1;
          } else {
            newThumbsIndex = newThumbsIndex + Math.floor(slidesPerView / 2) - 1;
          }
        } else if (newThumbsIndex > currentThumbsIndex && thumbsSwiper.params.slidesPerGroup === 1) ;
        thumbsSwiper.slideTo(newThumbsIndex, initial ? 0 : undefined);
      }
    }
  }
  on('beforeInit', () => {
    const {
      thumbs
    } = swiper.params;
    if (!thumbs || !thumbs.swiper) return;
    if (typeof thumbs.swiper === 'string' || thumbs.swiper instanceof HTMLElement) {
      const document = (0,_shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.g)();
      const getThumbsElementAndInit = () => {
        const thumbsElement = typeof thumbs.swiper === 'string' ? document.querySelector(thumbs.swiper) : thumbs.swiper;
        if (thumbsElement && thumbsElement.swiper) {
          thumbs.swiper = thumbsElement.swiper;
          init();
          update(true);
        } else if (thumbsElement) {
          const eventName = `${swiper.params.eventsPrefix}init`;
          const onThumbsSwiper = e => {
            thumbs.swiper = e.detail[0];
            thumbsElement.removeEventListener(eventName, onThumbsSwiper);
            init();
            update(true);
            thumbs.swiper.update();
            swiper.update();
          };
          thumbsElement.addEventListener(eventName, onThumbsSwiper);
        }
        return thumbsElement;
      };
      const watchForThumbsToAppear = () => {
        if (swiper.destroyed) return;
        const thumbsElement = getThumbsElementAndInit();
        if (!thumbsElement) {
          requestAnimationFrame(watchForThumbsToAppear);
        }
      };
      requestAnimationFrame(watchForThumbsToAppear);
    } else {
      init();
      update(true);
    }
  });
  on('slideChange update resize observerUpdate', () => {
    update();
  });
  on('setTransition', (_s, duration) => {
    const thumbsSwiper = swiper.thumbs.swiper;
    if (!thumbsSwiper || thumbsSwiper.destroyed) return;
    thumbsSwiper.setTransition(duration);
  });
  on('beforeDestroy', () => {
    const thumbsSwiper = swiper.thumbs.swiper;
    if (!thumbsSwiper || thumbsSwiper.destroyed) return;
    if (swiperCreated) {
      thumbsSwiper.destroy();
    }
  });
  Object.assign(swiper.thumbs, {
    init,
    update
  });
}




/***/ }),

/***/ "./node_modules/swiper/modules/virtual.mjs":
/*!*************************************************!*\
  !*** ./node_modules/swiper/modules/virtual.mjs ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Virtual)
/* harmony export */ });
/* harmony import */ var _shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/ssr-window.esm.mjs */ "./node_modules/swiper/shared/ssr-window.esm.mjs");
/* harmony import */ var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");



function Virtual(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit
  } = _ref;
  extendParams({
    virtual: {
      enabled: false,
      slides: [],
      cache: true,
      renderSlide: null,
      renderExternal: null,
      renderExternalUpdate: true,
      addSlidesBefore: 0,
      addSlidesAfter: 0
    }
  });
  let cssModeTimeout;
  const document = (0,_shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.g)();
  swiper.virtual = {
    cache: {},
    from: undefined,
    to: undefined,
    slides: [],
    offset: 0,
    slidesGrid: []
  };
  const tempDOM = document.createElement('div');
  function renderSlide(slide, index) {
    const params = swiper.params.virtual;
    if (params.cache && swiper.virtual.cache[index]) {
      return swiper.virtual.cache[index];
    }
    // eslint-disable-next-line
    let slideEl;
    if (params.renderSlide) {
      slideEl = params.renderSlide.call(swiper, slide, index);
      if (typeof slideEl === 'string') {
        (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.s)(tempDOM, slideEl);
        slideEl = tempDOM.children[0];
      }
    } else if (swiper.isElement) {
      slideEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.c)('swiper-slide');
    } else {
      slideEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.c)('div', swiper.params.slideClass);
    }
    slideEl.setAttribute('data-swiper-slide-index', index);
    if (!params.renderSlide) {
      (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.s)(slideEl, slide);
    }
    if (params.cache) {
      swiper.virtual.cache[index] = slideEl;
    }
    return slideEl;
  }
  function update(force, beforeInit, forceActiveIndex) {
    const {
      slidesPerView,
      slidesPerGroup,
      centeredSlides,
      loop: isLoop,
      initialSlide
    } = swiper.params;
    if (beforeInit && !isLoop && initialSlide > 0) {
      return;
    }
    const {
      addSlidesBefore,
      addSlidesAfter
    } = swiper.params.virtual;
    const {
      from: previousFrom,
      to: previousTo,
      slides,
      slidesGrid: previousSlidesGrid,
      offset: previousOffset
    } = swiper.virtual;
    if (!swiper.params.cssMode) {
      swiper.updateActiveIndex();
    }
    const activeIndex = typeof forceActiveIndex === 'undefined' ? swiper.activeIndex || 0 : forceActiveIndex;
    let offsetProp;
    if (swiper.rtlTranslate) offsetProp = 'right';else offsetProp = swiper.isHorizontal() ? 'left' : 'top';
    let slidesAfter;
    let slidesBefore;
    if (centeredSlides) {
      slidesAfter = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesAfter;
      slidesBefore = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesBefore;
    } else {
      slidesAfter = slidesPerView + (slidesPerGroup - 1) + addSlidesAfter;
      slidesBefore = (isLoop ? slidesPerView : slidesPerGroup) + addSlidesBefore;
    }
    let from = activeIndex - slidesBefore;
    let to = activeIndex + slidesAfter;
    if (!isLoop) {
      from = Math.max(from, 0);
      to = Math.min(to, slides.length - 1);
    }
    let offset = (swiper.slidesGrid[from] || 0) - (swiper.slidesGrid[0] || 0);
    if (isLoop && activeIndex >= slidesBefore) {
      from -= slidesBefore;
      if (!centeredSlides) offset += swiper.slidesGrid[0];
    } else if (isLoop && activeIndex < slidesBefore) {
      from = -slidesBefore;
      if (centeredSlides) offset += swiper.slidesGrid[0];
    }
    Object.assign(swiper.virtual, {
      from,
      to,
      offset,
      slidesGrid: swiper.slidesGrid,
      slidesBefore,
      slidesAfter
    });
    function onRendered() {
      swiper.updateSlides();
      swiper.updateProgress();
      swiper.updateSlidesClasses();
      emit('virtualUpdate');
    }
    if (previousFrom === from && previousTo === to && !force) {
      if (swiper.slidesGrid !== previousSlidesGrid && offset !== previousOffset) {
        swiper.slides.forEach(slideEl => {
          slideEl.style[offsetProp] = `${offset - Math.abs(swiper.cssOverflowAdjustment())}px`;
        });
      }
      swiper.updateProgress();
      emit('virtualUpdate');
      return;
    }
    if (swiper.params.virtual.renderExternal) {
      swiper.params.virtual.renderExternal.call(swiper, {
        offset,
        from,
        to,
        slides: function getSlides() {
          const slidesToRender = [];
          for (let i = from; i <= to; i += 1) {
            slidesToRender.push(slides[i]);
          }
          return slidesToRender;
        }()
      });
      if (swiper.params.virtual.renderExternalUpdate) {
        onRendered();
      } else {
        emit('virtualUpdate');
      }
      return;
    }
    const prependIndexes = [];
    const appendIndexes = [];
    const getSlideIndex = index => {
      let slideIndex = index;
      if (index < 0) {
        slideIndex = slides.length + index;
      } else if (slideIndex >= slides.length) {
        // eslint-disable-next-line
        slideIndex = slideIndex - slides.length;
      }
      return slideIndex;
    };
    if (force) {
      swiper.slides.filter(el => el.matches(`.${swiper.params.slideClass}, swiper-slide`)).forEach(slideEl => {
        slideEl.remove();
      });
    } else {
      for (let i = previousFrom; i <= previousTo; i += 1) {
        if (i < from || i > to) {
          const slideIndex = getSlideIndex(i);
          swiper.slides.filter(el => el.matches(`.${swiper.params.slideClass}[data-swiper-slide-index="${slideIndex}"], swiper-slide[data-swiper-slide-index="${slideIndex}"]`)).forEach(slideEl => {
            slideEl.remove();
          });
        }
      }
    }
    const loopFrom = isLoop ? -slides.length : 0;
    const loopTo = isLoop ? slides.length * 2 : slides.length;
    for (let i = loopFrom; i < loopTo; i += 1) {
      if (i >= from && i <= to) {
        const slideIndex = getSlideIndex(i);
        if (typeof previousTo === 'undefined' || force) {
          appendIndexes.push(slideIndex);
        } else {
          if (i > previousTo) appendIndexes.push(slideIndex);
          if (i < previousFrom) prependIndexes.push(slideIndex);
        }
      }
    }
    appendIndexes.forEach(index => {
      swiper.slidesEl.append(renderSlide(slides[index], index));
    });
    if (isLoop) {
      for (let i = prependIndexes.length - 1; i >= 0; i -= 1) {
        const index = prependIndexes[i];
        swiper.slidesEl.prepend(renderSlide(slides[index], index));
      }
    } else {
      prependIndexes.sort((a, b) => b - a);
      prependIndexes.forEach(index => {
        swiper.slidesEl.prepend(renderSlide(slides[index], index));
      });
    }
    (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.e)(swiper.slidesEl, '.swiper-slide, swiper-slide').forEach(slideEl => {
      slideEl.style[offsetProp] = `${offset - Math.abs(swiper.cssOverflowAdjustment())}px`;
    });
    onRendered();
  }
  function appendSlide(slides) {
    if (typeof slides === 'object' && 'length' in slides) {
      for (let i = 0; i < slides.length; i += 1) {
        if (slides[i]) swiper.virtual.slides.push(slides[i]);
      }
    } else {
      swiper.virtual.slides.push(slides);
    }
    update(true);
  }
  function prependSlide(slides) {
    const activeIndex = swiper.activeIndex;
    let newActiveIndex = activeIndex + 1;
    let numberOfNewSlides = 1;
    if (Array.isArray(slides)) {
      for (let i = 0; i < slides.length; i += 1) {
        if (slides[i]) swiper.virtual.slides.unshift(slides[i]);
      }
      newActiveIndex = activeIndex + slides.length;
      numberOfNewSlides = slides.length;
    } else {
      swiper.virtual.slides.unshift(slides);
    }
    if (swiper.params.virtual.cache) {
      const cache = swiper.virtual.cache;
      const newCache = {};
      Object.keys(cache).forEach(cachedIndex => {
        const cachedEl = cache[cachedIndex];
        const cachedElIndex = cachedEl.getAttribute('data-swiper-slide-index');
        if (cachedElIndex) {
          cachedEl.setAttribute('data-swiper-slide-index', parseInt(cachedElIndex, 10) + numberOfNewSlides);
        }
        newCache[parseInt(cachedIndex, 10) + numberOfNewSlides] = cachedEl;
      });
      swiper.virtual.cache = newCache;
    }
    update(true);
    swiper.slideTo(newActiveIndex, 0);
  }
  function removeSlide(slidesIndexes) {
    if (typeof slidesIndexes === 'undefined' || slidesIndexes === null) return;
    let activeIndex = swiper.activeIndex;
    if (Array.isArray(slidesIndexes)) {
      for (let i = slidesIndexes.length - 1; i >= 0; i -= 1) {
        if (swiper.params.virtual.cache) {
          delete swiper.virtual.cache[slidesIndexes[i]];
          // shift cache indexes
          Object.keys(swiper.virtual.cache).forEach(key => {
            if (key > slidesIndexes) {
              swiper.virtual.cache[key - 1] = swiper.virtual.cache[key];
              swiper.virtual.cache[key - 1].setAttribute('data-swiper-slide-index', key - 1);
              delete swiper.virtual.cache[key];
            }
          });
        }
        swiper.virtual.slides.splice(slidesIndexes[i], 1);
        if (slidesIndexes[i] < activeIndex) activeIndex -= 1;
        activeIndex = Math.max(activeIndex, 0);
      }
    } else {
      if (swiper.params.virtual.cache) {
        delete swiper.virtual.cache[slidesIndexes];
        // shift cache indexes
        Object.keys(swiper.virtual.cache).forEach(key => {
          if (key > slidesIndexes) {
            swiper.virtual.cache[key - 1] = swiper.virtual.cache[key];
            swiper.virtual.cache[key - 1].setAttribute('data-swiper-slide-index', key - 1);
            delete swiper.virtual.cache[key];
          }
        });
      }
      swiper.virtual.slides.splice(slidesIndexes, 1);
      if (slidesIndexes < activeIndex) activeIndex -= 1;
      activeIndex = Math.max(activeIndex, 0);
    }
    update(true);
    swiper.slideTo(activeIndex, 0);
  }
  function removeAllSlides() {
    swiper.virtual.slides = [];
    if (swiper.params.virtual.cache) {
      swiper.virtual.cache = {};
    }
    update(true);
    swiper.slideTo(0, 0);
  }
  on('beforeInit', () => {
    if (!swiper.params.virtual.enabled) return;
    let domSlidesAssigned;
    if (typeof swiper.passedParams.virtual.slides === 'undefined') {
      const slides = [...swiper.slidesEl.children].filter(el => el.matches(`.${swiper.params.slideClass}, swiper-slide`));
      if (slides && slides.length) {
        swiper.virtual.slides = [...slides];
        domSlidesAssigned = true;
        slides.forEach((slideEl, slideIndex) => {
          slideEl.setAttribute('data-swiper-slide-index', slideIndex);
          swiper.virtual.cache[slideIndex] = slideEl;
          slideEl.remove();
        });
      }
    }
    if (!domSlidesAssigned) {
      swiper.virtual.slides = swiper.params.virtual.slides;
    }
    swiper.classNames.push(`${swiper.params.containerModifierClass}virtual`);
    swiper.params.watchSlidesProgress = true;
    swiper.originalParams.watchSlidesProgress = true;
    update(false, true);
  });
  on('setTranslate', () => {
    if (!swiper.params.virtual.enabled) return;
    if (swiper.params.cssMode && !swiper._immediateVirtual) {
      clearTimeout(cssModeTimeout);
      cssModeTimeout = setTimeout(() => {
        update();
      }, 100);
    } else {
      update();
    }
  });
  on('init update resize', () => {
    if (!swiper.params.virtual.enabled) return;
    if (swiper.params.cssMode) {
      (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.a)(swiper.wrapperEl, '--swiper-virtual-size', `${swiper.virtualSize}px`);
    }
  });
  Object.assign(swiper.virtual, {
    appendSlide,
    prependSlide,
    removeSlide,
    removeAllSlides,
    update
  });
}




/***/ }),

/***/ "./node_modules/swiper/modules/zoom.mjs":
/*!**********************************************!*\
  !*** ./node_modules/swiper/modules/zoom.mjs ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Zoom)
/* harmony export */ });
/* harmony import */ var _shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/ssr-window.esm.mjs */ "./node_modules/swiper/shared/ssr-window.esm.mjs");
/* harmony import */ var _shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils.mjs */ "./node_modules/swiper/shared/utils.mjs");



function Zoom(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit
  } = _ref;
  const window = (0,_shared_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
  extendParams({
    zoom: {
      enabled: false,
      limitToOriginalSize: false,
      maxRatio: 3,
      minRatio: 1,
      panOnMouseMove: false,
      toggle: true,
      containerClass: 'swiper-zoom-container',
      zoomedSlideClass: 'swiper-slide-zoomed'
    }
  });
  swiper.zoom = {
    enabled: false
  };
  let currentScale = 1;
  let isScaling = false;
  let isPanningWithMouse = false;
  let mousePanStart = {
    x: 0,
    y: 0
  };
  const mousePanSensitivity = -3; // Negative to invert pan direction
  let fakeGestureTouched;
  let fakeGestureMoved;
  const evCache = [];
  const gesture = {
    originX: 0,
    originY: 0,
    slideEl: undefined,
    slideWidth: undefined,
    slideHeight: undefined,
    imageEl: undefined,
    imageWrapEl: undefined,
    maxRatio: 3
  };
  const image = {
    isTouched: undefined,
    isMoved: undefined,
    currentX: undefined,
    currentY: undefined,
    minX: undefined,
    minY: undefined,
    maxX: undefined,
    maxY: undefined,
    width: undefined,
    height: undefined,
    startX: undefined,
    startY: undefined,
    touchesStart: {},
    touchesCurrent: {}
  };
  const velocity = {
    x: undefined,
    y: undefined,
    prevPositionX: undefined,
    prevPositionY: undefined,
    prevTime: undefined
  };
  let scale = 1;
  Object.defineProperty(swiper.zoom, 'scale', {
    get() {
      return scale;
    },
    set(value) {
      if (scale !== value) {
        const imageEl = gesture.imageEl;
        const slideEl = gesture.slideEl;
        emit('zoomChange', value, imageEl, slideEl);
      }
      scale = value;
    }
  });
  function getDistanceBetweenTouches() {
    if (evCache.length < 2) return 1;
    const x1 = evCache[0].pageX;
    const y1 = evCache[0].pageY;
    const x2 = evCache[1].pageX;
    const y2 = evCache[1].pageY;
    const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    return distance;
  }
  function getMaxRatio() {
    const params = swiper.params.zoom;
    const maxRatio = gesture.imageWrapEl.getAttribute('data-swiper-zoom') || params.maxRatio;
    if (params.limitToOriginalSize && gesture.imageEl && gesture.imageEl.naturalWidth) {
      const imageMaxRatio = gesture.imageEl.naturalWidth / gesture.imageEl.offsetWidth;
      return Math.min(imageMaxRatio, maxRatio);
    }
    return maxRatio;
  }
  function getScaleOrigin() {
    if (evCache.length < 2) return {
      x: null,
      y: null
    };
    const box = gesture.imageEl.getBoundingClientRect();
    return [(evCache[0].pageX + (evCache[1].pageX - evCache[0].pageX) / 2 - box.x - window.scrollX) / currentScale, (evCache[0].pageY + (evCache[1].pageY - evCache[0].pageY) / 2 - box.y - window.scrollY) / currentScale];
  }
  function getSlideSelector() {
    return swiper.isElement ? `swiper-slide` : `.${swiper.params.slideClass}`;
  }
  function eventWithinSlide(e) {
    const slideSelector = getSlideSelector();
    if (e.target.matches(slideSelector)) return true;
    if (swiper.slides.filter(slideEl => slideEl.contains(e.target)).length > 0) return true;
    return false;
  }
  function eventWithinZoomContainer(e) {
    const selector = `.${swiper.params.zoom.containerClass}`;
    if (e.target.matches(selector)) return true;
    if ([...swiper.hostEl.querySelectorAll(selector)].filter(containerEl => containerEl.contains(e.target)).length > 0) return true;
    return false;
  }

  // Events
  function onGestureStart(e) {
    if (e.pointerType === 'mouse') {
      evCache.splice(0, evCache.length);
    }
    if (!eventWithinSlide(e)) return;
    const params = swiper.params.zoom;
    fakeGestureTouched = false;
    fakeGestureMoved = false;
    evCache.push(e);
    if (evCache.length < 2) {
      return;
    }
    fakeGestureTouched = true;
    gesture.scaleStart = getDistanceBetweenTouches();
    if (!gesture.slideEl) {
      gesture.slideEl = e.target.closest(`.${swiper.params.slideClass}, swiper-slide`);
      if (!gesture.slideEl) gesture.slideEl = swiper.slides[swiper.activeIndex];
      let imageEl = gesture.slideEl.querySelector(`.${params.containerClass}`);
      if (imageEl) {
        imageEl = imageEl.querySelectorAll('picture, img, svg, canvas, .swiper-zoom-target')[0];
      }
      gesture.imageEl = imageEl;
      if (imageEl) {
        gesture.imageWrapEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.b)(gesture.imageEl, `.${params.containerClass}`)[0];
      } else {
        gesture.imageWrapEl = undefined;
      }
      if (!gesture.imageWrapEl) {
        gesture.imageEl = undefined;
        return;
      }
      gesture.maxRatio = getMaxRatio();
    }
    if (gesture.imageEl) {
      const [originX, originY] = getScaleOrigin();
      gesture.originX = originX;
      gesture.originY = originY;
      gesture.imageEl.style.transitionDuration = '0ms';
    }
    isScaling = true;
  }
  function onGestureChange(e) {
    if (!eventWithinSlide(e)) return;
    const params = swiper.params.zoom;
    const zoom = swiper.zoom;
    const pointerIndex = evCache.findIndex(cachedEv => cachedEv.pointerId === e.pointerId);
    if (pointerIndex >= 0) evCache[pointerIndex] = e;
    if (evCache.length < 2) {
      return;
    }
    fakeGestureMoved = true;
    gesture.scaleMove = getDistanceBetweenTouches();
    if (!gesture.imageEl) {
      return;
    }
    zoom.scale = gesture.scaleMove / gesture.scaleStart * currentScale;
    if (zoom.scale > gesture.maxRatio) {
      zoom.scale = gesture.maxRatio - 1 + (zoom.scale - gesture.maxRatio + 1) ** 0.5;
    }
    if (zoom.scale < params.minRatio) {
      zoom.scale = params.minRatio + 1 - (params.minRatio - zoom.scale + 1) ** 0.5;
    }
    gesture.imageEl.style.transform = `translate3d(0,0,0) scale(${zoom.scale})`;
  }
  function onGestureEnd(e) {
    if (!eventWithinSlide(e)) return;
    if (e.pointerType === 'mouse' && e.type === 'pointerout') return;
    const params = swiper.params.zoom;
    const zoom = swiper.zoom;
    const pointerIndex = evCache.findIndex(cachedEv => cachedEv.pointerId === e.pointerId);
    if (pointerIndex >= 0) evCache.splice(pointerIndex, 1);
    if (!fakeGestureTouched || !fakeGestureMoved) {
      return;
    }
    fakeGestureTouched = false;
    fakeGestureMoved = false;
    if (!gesture.imageEl) return;
    zoom.scale = Math.max(Math.min(zoom.scale, gesture.maxRatio), params.minRatio);
    gesture.imageEl.style.transitionDuration = `${swiper.params.speed}ms`;
    gesture.imageEl.style.transform = `translate3d(0,0,0) scale(${zoom.scale})`;
    currentScale = zoom.scale;
    isScaling = false;
    if (zoom.scale > 1 && gesture.slideEl) {
      gesture.slideEl.classList.add(`${params.zoomedSlideClass}`);
    } else if (zoom.scale <= 1 && gesture.slideEl) {
      gesture.slideEl.classList.remove(`${params.zoomedSlideClass}`);
    }
    if (zoom.scale === 1) {
      gesture.originX = 0;
      gesture.originY = 0;
      gesture.slideEl = undefined;
    }
  }
  let allowTouchMoveTimeout;
  function allowTouchMove() {
    swiper.touchEventsData.preventTouchMoveFromPointerMove = false;
  }
  function preventTouchMove() {
    clearTimeout(allowTouchMoveTimeout);
    swiper.touchEventsData.preventTouchMoveFromPointerMove = true;
    allowTouchMoveTimeout = setTimeout(() => {
      if (swiper.destroyed) return;
      allowTouchMove();
    });
  }
  function onTouchStart(e) {
    const device = swiper.device;
    if (!gesture.imageEl) return;
    if (image.isTouched) return;
    if (device.android && e.cancelable) e.preventDefault();
    image.isTouched = true;
    const event = evCache.length > 0 ? evCache[0] : e;
    image.touchesStart.x = event.pageX;
    image.touchesStart.y = event.pageY;
  }
  function onTouchMove(e) {
    const isMouseEvent = e.pointerType === 'mouse';
    const isMousePan = isMouseEvent && swiper.params.zoom.panOnMouseMove;
    if (!eventWithinSlide(e) || !eventWithinZoomContainer(e)) {
      return;
    }
    const zoom = swiper.zoom;
    if (!gesture.imageEl) {
      return;
    }
    if (!image.isTouched || !gesture.slideEl) {
      if (isMousePan) onMouseMove(e);
      return;
    }
    if (isMousePan) {
      onMouseMove(e);
      return;
    }
    if (!image.isMoved) {
      image.width = gesture.imageEl.offsetWidth || gesture.imageEl.clientWidth;
      image.height = gesture.imageEl.offsetHeight || gesture.imageEl.clientHeight;
      image.startX = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.k)(gesture.imageWrapEl, 'x') || 0;
      image.startY = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.k)(gesture.imageWrapEl, 'y') || 0;
      gesture.slideWidth = gesture.slideEl.offsetWidth;
      gesture.slideHeight = gesture.slideEl.offsetHeight;
      gesture.imageWrapEl.style.transitionDuration = '0ms';
    }
    // Define if we need image drag
    const scaledWidth = image.width * zoom.scale;
    const scaledHeight = image.height * zoom.scale;
    image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
    image.maxX = -image.minX;
    image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
    image.maxY = -image.minY;
    image.touchesCurrent.x = evCache.length > 0 ? evCache[0].pageX : e.pageX;
    image.touchesCurrent.y = evCache.length > 0 ? evCache[0].pageY : e.pageY;
    const touchesDiff = Math.max(Math.abs(image.touchesCurrent.x - image.touchesStart.x), Math.abs(image.touchesCurrent.y - image.touchesStart.y));
    if (touchesDiff > 5) {
      swiper.allowClick = false;
    }
    if (!image.isMoved && !isScaling) {
      if (swiper.isHorizontal() && (Math.floor(image.minX) === Math.floor(image.startX) && image.touchesCurrent.x < image.touchesStart.x || Math.floor(image.maxX) === Math.floor(image.startX) && image.touchesCurrent.x > image.touchesStart.x)) {
        image.isTouched = false;
        allowTouchMove();
        return;
      }
      if (!swiper.isHorizontal() && (Math.floor(image.minY) === Math.floor(image.startY) && image.touchesCurrent.y < image.touchesStart.y || Math.floor(image.maxY) === Math.floor(image.startY) && image.touchesCurrent.y > image.touchesStart.y)) {
        image.isTouched = false;
        allowTouchMove();
        return;
      }
    }
    if (e.cancelable) {
      e.preventDefault();
    }
    e.stopPropagation();
    preventTouchMove();
    image.isMoved = true;
    const scaleRatio = (zoom.scale - currentScale) / (gesture.maxRatio - swiper.params.zoom.minRatio);
    const {
      originX,
      originY
    } = gesture;
    image.currentX = image.touchesCurrent.x - image.touchesStart.x + image.startX + scaleRatio * (image.width - originX * 2);
    image.currentY = image.touchesCurrent.y - image.touchesStart.y + image.startY + scaleRatio * (image.height - originY * 2);
    if (image.currentX < image.minX) {
      image.currentX = image.minX + 1 - (image.minX - image.currentX + 1) ** 0.8;
    }
    if (image.currentX > image.maxX) {
      image.currentX = image.maxX - 1 + (image.currentX - image.maxX + 1) ** 0.8;
    }
    if (image.currentY < image.minY) {
      image.currentY = image.minY + 1 - (image.minY - image.currentY + 1) ** 0.8;
    }
    if (image.currentY > image.maxY) {
      image.currentY = image.maxY - 1 + (image.currentY - image.maxY + 1) ** 0.8;
    }

    // Velocity
    if (!velocity.prevPositionX) velocity.prevPositionX = image.touchesCurrent.x;
    if (!velocity.prevPositionY) velocity.prevPositionY = image.touchesCurrent.y;
    if (!velocity.prevTime) velocity.prevTime = Date.now();
    velocity.x = (image.touchesCurrent.x - velocity.prevPositionX) / (Date.now() - velocity.prevTime) / 2;
    velocity.y = (image.touchesCurrent.y - velocity.prevPositionY) / (Date.now() - velocity.prevTime) / 2;
    if (Math.abs(image.touchesCurrent.x - velocity.prevPositionX) < 2) velocity.x = 0;
    if (Math.abs(image.touchesCurrent.y - velocity.prevPositionY) < 2) velocity.y = 0;
    velocity.prevPositionX = image.touchesCurrent.x;
    velocity.prevPositionY = image.touchesCurrent.y;
    velocity.prevTime = Date.now();
    gesture.imageWrapEl.style.transform = `translate3d(${image.currentX}px, ${image.currentY}px,0)`;
  }
  function onTouchEnd() {
    const zoom = swiper.zoom;
    evCache.length = 0;
    if (!gesture.imageEl) return;
    if (!image.isTouched || !image.isMoved) {
      image.isTouched = false;
      image.isMoved = false;
      return;
    }
    image.isTouched = false;
    image.isMoved = false;
    let momentumDurationX = 300;
    let momentumDurationY = 300;
    const momentumDistanceX = velocity.x * momentumDurationX;
    const newPositionX = image.currentX + momentumDistanceX;
    const momentumDistanceY = velocity.y * momentumDurationY;
    const newPositionY = image.currentY + momentumDistanceY;

    // Fix duration
    if (velocity.x !== 0) momentumDurationX = Math.abs((newPositionX - image.currentX) / velocity.x);
    if (velocity.y !== 0) momentumDurationY = Math.abs((newPositionY - image.currentY) / velocity.y);
    const momentumDuration = Math.max(momentumDurationX, momentumDurationY);
    image.currentX = newPositionX;
    image.currentY = newPositionY;
    // Define if we need image drag
    const scaledWidth = image.width * zoom.scale;
    const scaledHeight = image.height * zoom.scale;
    image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
    image.maxX = -image.minX;
    image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
    image.maxY = -image.minY;
    image.currentX = Math.max(Math.min(image.currentX, image.maxX), image.minX);
    image.currentY = Math.max(Math.min(image.currentY, image.maxY), image.minY);
    gesture.imageWrapEl.style.transitionDuration = `${momentumDuration}ms`;
    gesture.imageWrapEl.style.transform = `translate3d(${image.currentX}px, ${image.currentY}px,0)`;
  }
  function onTransitionEnd() {
    const zoom = swiper.zoom;
    if (gesture.slideEl && swiper.activeIndex !== swiper.slides.indexOf(gesture.slideEl)) {
      if (gesture.imageEl) {
        gesture.imageEl.style.transform = 'translate3d(0,0,0) scale(1)';
      }
      if (gesture.imageWrapEl) {
        gesture.imageWrapEl.style.transform = 'translate3d(0,0,0)';
      }
      gesture.slideEl.classList.remove(`${swiper.params.zoom.zoomedSlideClass}`);
      zoom.scale = 1;
      currentScale = 1;
      gesture.slideEl = undefined;
      gesture.imageEl = undefined;
      gesture.imageWrapEl = undefined;
      gesture.originX = 0;
      gesture.originY = 0;
    }
  }
  function onMouseMove(e) {
    // Only pan if zoomed in and mouse panning is enabled
    if (currentScale <= 1 || !gesture.imageWrapEl) return;
    if (!eventWithinSlide(e) || !eventWithinZoomContainer(e)) return;
    const currentTransform = window.getComputedStyle(gesture.imageWrapEl).transform;
    const matrix = new window.DOMMatrix(currentTransform);
    if (!isPanningWithMouse) {
      isPanningWithMouse = true;
      mousePanStart.x = e.clientX;
      mousePanStart.y = e.clientY;
      image.startX = matrix.e;
      image.startY = matrix.f;
      image.width = gesture.imageEl.offsetWidth || gesture.imageEl.clientWidth;
      image.height = gesture.imageEl.offsetHeight || gesture.imageEl.clientHeight;
      gesture.slideWidth = gesture.slideEl.offsetWidth;
      gesture.slideHeight = gesture.slideEl.offsetHeight;
      return;
    }
    const deltaX = (e.clientX - mousePanStart.x) * mousePanSensitivity;
    const deltaY = (e.clientY - mousePanStart.y) * mousePanSensitivity;
    const scaledWidth = image.width * currentScale;
    const scaledHeight = image.height * currentScale;
    const slideWidth = gesture.slideWidth;
    const slideHeight = gesture.slideHeight;
    const minX = Math.min(slideWidth / 2 - scaledWidth / 2, 0);
    const maxX = -minX;
    const minY = Math.min(slideHeight / 2 - scaledHeight / 2, 0);
    const maxY = -minY;
    const newX = Math.max(Math.min(image.startX + deltaX, maxX), minX);
    const newY = Math.max(Math.min(image.startY + deltaY, maxY), minY);
    gesture.imageWrapEl.style.transitionDuration = '0ms';
    gesture.imageWrapEl.style.transform = `translate3d(${newX}px, ${newY}px, 0)`;
    mousePanStart.x = e.clientX;
    mousePanStart.y = e.clientY;
    image.startX = newX;
    image.startY = newY;
    image.currentX = newX;
    image.currentY = newY;
  }
  function zoomIn(e) {
    const zoom = swiper.zoom;
    const params = swiper.params.zoom;
    if (!gesture.slideEl) {
      if (e && e.target) {
        gesture.slideEl = e.target.closest(`.${swiper.params.slideClass}, swiper-slide`);
      }
      if (!gesture.slideEl) {
        if (swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual) {
          gesture.slideEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.e)(swiper.slidesEl, `.${swiper.params.slideActiveClass}`)[0];
        } else {
          gesture.slideEl = swiper.slides[swiper.activeIndex];
        }
      }
      let imageEl = gesture.slideEl.querySelector(`.${params.containerClass}`);
      if (imageEl) {
        imageEl = imageEl.querySelectorAll('picture, img, svg, canvas, .swiper-zoom-target')[0];
      }
      gesture.imageEl = imageEl;
      if (imageEl) {
        gesture.imageWrapEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.b)(gesture.imageEl, `.${params.containerClass}`)[0];
      } else {
        gesture.imageWrapEl = undefined;
      }
    }
    if (!gesture.imageEl || !gesture.imageWrapEl) return;
    if (swiper.params.cssMode) {
      swiper.wrapperEl.style.overflow = 'hidden';
      swiper.wrapperEl.style.touchAction = 'none';
    }
    gesture.slideEl.classList.add(`${params.zoomedSlideClass}`);
    let touchX;
    let touchY;
    let offsetX;
    let offsetY;
    let diffX;
    let diffY;
    let translateX;
    let translateY;
    let imageWidth;
    let imageHeight;
    let scaledWidth;
    let scaledHeight;
    let translateMinX;
    let translateMinY;
    let translateMaxX;
    let translateMaxY;
    let slideWidth;
    let slideHeight;
    if (typeof image.touchesStart.x === 'undefined' && e) {
      touchX = e.pageX;
      touchY = e.pageY;
    } else {
      touchX = image.touchesStart.x;
      touchY = image.touchesStart.y;
    }
    const prevScale = currentScale;
    const forceZoomRatio = typeof e === 'number' ? e : null;
    if (currentScale === 1 && forceZoomRatio) {
      touchX = undefined;
      touchY = undefined;
      image.touchesStart.x = undefined;
      image.touchesStart.y = undefined;
    }
    const maxRatio = getMaxRatio();
    zoom.scale = forceZoomRatio || maxRatio;
    currentScale = forceZoomRatio || maxRatio;
    if (e && !(currentScale === 1 && forceZoomRatio)) {
      slideWidth = gesture.slideEl.offsetWidth;
      slideHeight = gesture.slideEl.offsetHeight;
      offsetX = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.d)(gesture.slideEl).left + window.scrollX;
      offsetY = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.d)(gesture.slideEl).top + window.scrollY;
      diffX = offsetX + slideWidth / 2 - touchX;
      diffY = offsetY + slideHeight / 2 - touchY;
      imageWidth = gesture.imageEl.offsetWidth || gesture.imageEl.clientWidth;
      imageHeight = gesture.imageEl.offsetHeight || gesture.imageEl.clientHeight;
      scaledWidth = imageWidth * zoom.scale;
      scaledHeight = imageHeight * zoom.scale;
      translateMinX = Math.min(slideWidth / 2 - scaledWidth / 2, 0);
      translateMinY = Math.min(slideHeight / 2 - scaledHeight / 2, 0);
      translateMaxX = -translateMinX;
      translateMaxY = -translateMinY;
      if (prevScale > 0 && forceZoomRatio && typeof image.currentX === 'number' && typeof image.currentY === 'number') {
        translateX = image.currentX * zoom.scale / prevScale;
        translateY = image.currentY * zoom.scale / prevScale;
      } else {
        translateX = diffX * zoom.scale;
        translateY = diffY * zoom.scale;
      }
      if (translateX < translateMinX) {
        translateX = translateMinX;
      }
      if (translateX > translateMaxX) {
        translateX = translateMaxX;
      }
      if (translateY < translateMinY) {
        translateY = translateMinY;
      }
      if (translateY > translateMaxY) {
        translateY = translateMaxY;
      }
    } else {
      translateX = 0;
      translateY = 0;
    }
    if (forceZoomRatio && zoom.scale === 1) {
      gesture.originX = 0;
      gesture.originY = 0;
    }
    image.currentX = translateX;
    image.currentY = translateY;
    gesture.imageWrapEl.style.transitionDuration = '300ms';
    gesture.imageWrapEl.style.transform = `translate3d(${translateX}px, ${translateY}px,0)`;
    gesture.imageEl.style.transitionDuration = '300ms';
    gesture.imageEl.style.transform = `translate3d(0,0,0) scale(${zoom.scale})`;
  }
  function zoomOut() {
    const zoom = swiper.zoom;
    const params = swiper.params.zoom;
    if (!gesture.slideEl) {
      if (swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual) {
        gesture.slideEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.e)(swiper.slidesEl, `.${swiper.params.slideActiveClass}`)[0];
      } else {
        gesture.slideEl = swiper.slides[swiper.activeIndex];
      }
      let imageEl = gesture.slideEl.querySelector(`.${params.containerClass}`);
      if (imageEl) {
        imageEl = imageEl.querySelectorAll('picture, img, svg, canvas, .swiper-zoom-target')[0];
      }
      gesture.imageEl = imageEl;
      if (imageEl) {
        gesture.imageWrapEl = (0,_shared_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.b)(gesture.imageEl, `.${params.containerClass}`)[0];
      } else {
        gesture.imageWrapEl = undefined;
      }
    }
    if (!gesture.imageEl || !gesture.imageWrapEl) return;
    if (swiper.params.cssMode) {
      swiper.wrapperEl.style.overflow = '';
      swiper.wrapperEl.style.touchAction = '';
    }
    zoom.scale = 1;
    currentScale = 1;
    image.currentX = undefined;
    image.currentY = undefined;
    image.touchesStart.x = undefined;
    image.touchesStart.y = undefined;
    gesture.imageWrapEl.style.transitionDuration = '300ms';
    gesture.imageWrapEl.style.transform = 'translate3d(0,0,0)';
    gesture.imageEl.style.transitionDuration = '300ms';
    gesture.imageEl.style.transform = 'translate3d(0,0,0) scale(1)';
    gesture.slideEl.classList.remove(`${params.zoomedSlideClass}`);
    gesture.slideEl = undefined;
    gesture.originX = 0;
    gesture.originY = 0;
    if (swiper.params.zoom.panOnMouseMove) {
      mousePanStart = {
        x: 0,
        y: 0
      };
      if (isPanningWithMouse) {
        isPanningWithMouse = false;
        image.startX = 0;
        image.startY = 0;
      }
    }
  }

  // Toggle Zoom
  function zoomToggle(e) {
    const zoom = swiper.zoom;
    if (zoom.scale && zoom.scale !== 1) {
      // Zoom Out
      zoomOut();
    } else {
      // Zoom In
      zoomIn(e);
    }
  }
  function getListeners() {
    const passiveListener = swiper.params.passiveListeners ? {
      passive: true,
      capture: false
    } : false;
    const activeListenerWithCapture = swiper.params.passiveListeners ? {
      passive: false,
      capture: true
    } : true;
    return {
      passiveListener,
      activeListenerWithCapture
    };
  }

  // Attach/Detach Events
  function enable() {
    const zoom = swiper.zoom;
    if (zoom.enabled) return;
    zoom.enabled = true;
    const {
      passiveListener,
      activeListenerWithCapture
    } = getListeners();

    // Scale image
    swiper.wrapperEl.addEventListener('pointerdown', onGestureStart, passiveListener);
    swiper.wrapperEl.addEventListener('pointermove', onGestureChange, activeListenerWithCapture);
    ['pointerup', 'pointercancel', 'pointerout'].forEach(eventName => {
      swiper.wrapperEl.addEventListener(eventName, onGestureEnd, passiveListener);
    });

    // Move image
    swiper.wrapperEl.addEventListener('pointermove', onTouchMove, activeListenerWithCapture);
  }
  function disable() {
    const zoom = swiper.zoom;
    if (!zoom.enabled) return;
    zoom.enabled = false;
    const {
      passiveListener,
      activeListenerWithCapture
    } = getListeners();

    // Scale image
    swiper.wrapperEl.removeEventListener('pointerdown', onGestureStart, passiveListener);
    swiper.wrapperEl.removeEventListener('pointermove', onGestureChange, activeListenerWithCapture);
    ['pointerup', 'pointercancel', 'pointerout'].forEach(eventName => {
      swiper.wrapperEl.removeEventListener(eventName, onGestureEnd, passiveListener);
    });

    // Move image
    swiper.wrapperEl.removeEventListener('pointermove', onTouchMove, activeListenerWithCapture);
  }
  on('init', () => {
    if (swiper.params.zoom.enabled) {
      enable();
    }
  });
  on('destroy', () => {
    disable();
  });
  on('touchStart', (_s, e) => {
    if (!swiper.zoom.enabled) return;
    onTouchStart(e);
  });
  on('touchEnd', (_s, e) => {
    if (!swiper.zoom.enabled) return;
    onTouchEnd();
  });
  on('doubleTap', (_s, e) => {
    if (!swiper.animating && swiper.params.zoom.enabled && swiper.zoom.enabled && swiper.params.zoom.toggle) {
      zoomToggle(e);
    }
  });
  on('transitionEnd', () => {
    if (swiper.zoom.enabled && swiper.params.zoom.enabled) {
      onTransitionEnd();
    }
  });
  on('slideChange', () => {
    if (swiper.zoom.enabled && swiper.params.zoom.enabled && swiper.params.cssMode) {
      onTransitionEnd();
    }
  });
  Object.assign(swiper.zoom, {
    enable,
    disable,
    in: zoomIn,
    out: zoomOut,
    toggle: zoomToggle
  });
}




/***/ }),

/***/ "./node_modules/swiper/shared/classes-to-selector.mjs":
/*!************************************************************!*\
  !*** ./node_modules/swiper/shared/classes-to-selector.mjs ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ classesToSelector)
/* harmony export */ });
function classesToSelector(classes) {
  if (classes === void 0) {
    classes = '';
  }
  return `.${classes.trim().replace(/([\.:!+\/()[\]])/g, '\\$1') // eslint-disable-line
  .replace(/ /g, '.')}`;
}




/***/ }),

/***/ "./node_modules/swiper/shared/create-element-if-not-defined.mjs":
/*!**********************************************************************!*\
  !*** ./node_modules/swiper/shared/create-element-if-not-defined.mjs ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ createElementIfNotDefined)
/* harmony export */ });
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.mjs */ "./node_modules/swiper/shared/utils.mjs");


function createElementIfNotDefined(swiper, originalParams, params, checkProps) {
  if (swiper.params.createElements) {
    Object.keys(checkProps).forEach(key => {
      if (!params[key] && params.auto === true) {
        let element = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.e)(swiper.el, `.${checkProps[key]}`)[0];
        if (!element) {
          element = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.c)('div', checkProps[key]);
          element.className = checkProps[key];
          swiper.el.append(element);
        }
        params[key] = element;
        originalParams[key] = element;
      }
    });
  }
  return params;
}




/***/ }),

/***/ "./node_modules/swiper/shared/create-shadow.mjs":
/*!******************************************************!*\
  !*** ./node_modules/swiper/shared/create-shadow.mjs ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ createShadow)
/* harmony export */ });
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.mjs */ "./node_modules/swiper/shared/utils.mjs");


function createShadow(suffix, slideEl, side) {
  const shadowClass = `swiper-slide-shadow${side ? `-${side}` : ''}${suffix ? ` swiper-slide-shadow-${suffix}` : ''}`;
  const shadowContainer = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.g)(slideEl);
  let shadowEl = shadowContainer.querySelector(`.${shadowClass.split(' ').join('.')}`);
  if (!shadowEl) {
    shadowEl = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.c)('div', shadowClass.split(' '));
    shadowContainer.append(shadowEl);
  }
  return shadowEl;
}




/***/ }),

/***/ "./node_modules/swiper/shared/effect-init.mjs":
/*!****************************************************!*\
  !*** ./node_modules/swiper/shared/effect-init.mjs ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   e: () => (/* binding */ effectInit)
/* harmony export */ });
function effectInit(params) {
  const {
    effect,
    swiper,
    on,
    setTranslate,
    setTransition,
    overwriteParams,
    perspective,
    recreateShadows,
    getEffectParams
  } = params;
  on('beforeInit', () => {
    if (swiper.params.effect !== effect) return;
    swiper.classNames.push(`${swiper.params.containerModifierClass}${effect}`);
    if (perspective && perspective()) {
      swiper.classNames.push(`${swiper.params.containerModifierClass}3d`);
    }
    const overwriteParamsResult = overwriteParams ? overwriteParams() : {};
    Object.assign(swiper.params, overwriteParamsResult);
    Object.assign(swiper.originalParams, overwriteParamsResult);
  });
  on('setTranslate _virtualUpdated', () => {
    if (swiper.params.effect !== effect) return;
    setTranslate();
  });
  on('setTransition', (_s, duration) => {
    if (swiper.params.effect !== effect) return;
    setTransition(duration);
  });
  on('transitionEnd', () => {
    if (swiper.params.effect !== effect) return;
    if (recreateShadows) {
      if (!getEffectParams || !getEffectParams().slideShadows) return;
      // remove shadows
      swiper.slides.forEach(slideEl => {
        slideEl.querySelectorAll('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').forEach(shadowEl => shadowEl.remove());
      });
      // create new one
      recreateShadows();
    }
  });
  let requireUpdateOnVirtual;
  on('virtualUpdate', () => {
    if (swiper.params.effect !== effect) return;
    if (!swiper.slides.length) {
      requireUpdateOnVirtual = true;
    }
    requestAnimationFrame(() => {
      if (requireUpdateOnVirtual && swiper.slides && swiper.slides.length) {
        setTranslate();
        requireUpdateOnVirtual = false;
      }
    });
  });
}




/***/ }),

/***/ "./node_modules/swiper/shared/effect-target.mjs":
/*!******************************************************!*\
  !*** ./node_modules/swiper/shared/effect-target.mjs ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   e: () => (/* binding */ effectTarget)
/* harmony export */ });
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.mjs */ "./node_modules/swiper/shared/utils.mjs");


function effectTarget(effectParams, slideEl) {
  const transformEl = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.g)(slideEl);
  if (transformEl !== slideEl) {
    transformEl.style.backfaceVisibility = 'hidden';
    transformEl.style['-webkit-backface-visibility'] = 'hidden';
  }
  return transformEl;
}




/***/ }),

/***/ "./node_modules/swiper/shared/effect-virtual-transition-end.mjs":
/*!**********************************************************************!*\
  !*** ./node_modules/swiper/shared/effect-virtual-transition-end.mjs ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   e: () => (/* binding */ effectVirtualTransitionEnd)
/* harmony export */ });
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.mjs */ "./node_modules/swiper/shared/utils.mjs");


function effectVirtualTransitionEnd(_ref) {
  let {
    swiper,
    duration,
    transformElements,
    allSlides
  } = _ref;
  const {
    activeIndex
  } = swiper;
  const getSlide = el => {
    if (!el.parentElement) {
      // assume shadow root
      const slide = swiper.slides.find(slideEl => slideEl.shadowRoot && slideEl.shadowRoot === el.parentNode);
      return slide;
    }
    return el.parentElement;
  };
  if (swiper.params.virtualTranslate && duration !== 0) {
    let eventTriggered = false;
    let transitionEndTarget;
    if (allSlides) {
      transitionEndTarget = transformElements;
    } else {
      transitionEndTarget = transformElements.filter(transformEl => {
        const el = transformEl.classList.contains('swiper-slide-transform') ? getSlide(transformEl) : transformEl;
        return swiper.getSlideIndex(el) === activeIndex;
      });
    }
    transitionEndTarget.forEach(el => {
      (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_0__.l)(el, () => {
        if (eventTriggered) return;
        if (!swiper || swiper.destroyed) return;
        eventTriggered = true;
        swiper.animating = false;
        const evt = new window.CustomEvent('transitionend', {
          bubbles: true,
          cancelable: true
        });
        swiper.wrapperEl.dispatchEvent(evt);
      });
    });
  }
}




/***/ }),

/***/ "./node_modules/swiper/shared/ssr-window.esm.mjs":
/*!*******************************************************!*\
  !*** ./node_modules/swiper/shared/ssr-window.esm.mjs ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ getWindow),
/* harmony export */   g: () => (/* binding */ getDocument)
/* harmony export */ });
/**
 * SSR Window 5.0.1
 * Better handling for window object in SSR environment
 * https://github.com/nolimits4web/ssr-window
 *
 * Copyright 2025, Vladimir Kharlampidi
 *
 * Licensed under MIT
 *
 * Released on: June 27, 2025
 */
/* eslint-disable no-param-reassign */
function isObject(obj) {
  return obj !== null && typeof obj === 'object' && 'constructor' in obj && obj.constructor === Object;
}
function extend(target, src) {
  if (target === void 0) {
    target = {};
  }
  if (src === void 0) {
    src = {};
  }
  const noExtend = ['__proto__', 'constructor', 'prototype'];
  Object.keys(src).filter(key => noExtend.indexOf(key) < 0).forEach(key => {
    if (typeof target[key] === 'undefined') target[key] = src[key];else if (isObject(src[key]) && isObject(target[key]) && Object.keys(src[key]).length > 0) {
      extend(target[key], src[key]);
    }
  });
}
const ssrDocument = {
  body: {},
  addEventListener() {},
  removeEventListener() {},
  activeElement: {
    blur() {},
    nodeName: ''
  },
  querySelector() {
    return null;
  },
  querySelectorAll() {
    return [];
  },
  getElementById() {
    return null;
  },
  createEvent() {
    return {
      initEvent() {}
    };
  },
  createElement() {
    return {
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {},
      getElementsByTagName() {
        return [];
      }
    };
  },
  createElementNS() {
    return {};
  },
  importNode() {
    return null;
  },
  location: {
    hash: '',
    host: '',
    hostname: '',
    href: '',
    origin: '',
    pathname: '',
    protocol: '',
    search: ''
  }
};
function getDocument() {
  const doc = typeof document !== 'undefined' ? document : {};
  extend(doc, ssrDocument);
  return doc;
}
const ssrWindow = {
  document: ssrDocument,
  navigator: {
    userAgent: ''
  },
  location: {
    hash: '',
    host: '',
    hostname: '',
    href: '',
    origin: '',
    pathname: '',
    protocol: '',
    search: ''
  },
  history: {
    replaceState() {},
    pushState() {},
    go() {},
    back() {}
  },
  CustomEvent: function CustomEvent() {
    return this;
  },
  addEventListener() {},
  removeEventListener() {},
  getComputedStyle() {
    return {
      getPropertyValue() {
        return '';
      }
    };
  },
  Image() {},
  Date() {},
  screen: {},
  setTimeout() {},
  clearTimeout() {},
  matchMedia() {
    return {};
  },
  requestAnimationFrame(callback) {
    if (typeof setTimeout === 'undefined') {
      callback();
      return null;
    }
    return setTimeout(callback, 0);
  },
  cancelAnimationFrame(id) {
    if (typeof setTimeout === 'undefined') {
      return;
    }
    clearTimeout(id);
  }
};
function getWindow() {
  const win = typeof window !== 'undefined' ? window : {};
  extend(win, ssrWindow);
  return win;
}




/***/ }),

/***/ "./node_modules/swiper/shared/swiper-core.mjs":
/*!****************************************************!*\
  !*** ./node_modules/swiper/shared/swiper-core.mjs ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ Swiper),
/* harmony export */   d: () => (/* binding */ defaults)
/* harmony export */ });
/* harmony import */ var _ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ssr-window.esm.mjs */ "./node_modules/swiper/shared/ssr-window.esm.mjs");
/* harmony import */ var _utils_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.mjs */ "./node_modules/swiper/shared/utils.mjs");



let support;
function calcSupport() {
  const window = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
  const document = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.g)();
  return {
    smoothScroll: document.documentElement && document.documentElement.style && 'scrollBehavior' in document.documentElement.style,
    touch: !!('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch)
  };
}
function getSupport() {
  if (!support) {
    support = calcSupport();
  }
  return support;
}

let deviceCached;
function calcDevice(_temp) {
  let {
    userAgent
  } = _temp === void 0 ? {} : _temp;
  const support = getSupport();
  const window = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
  const platform = window.navigator.platform;
  const ua = userAgent || window.navigator.userAgent;
  const device = {
    ios: false,
    android: false
  };
  const screenWidth = window.screen.width;
  const screenHeight = window.screen.height;
  const android = ua.match(/(Android);?[\s\/]+([\d.]+)?/); // eslint-disable-line
  let ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
  const ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
  const iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
  const windows = platform === 'Win32';
  let macos = platform === 'MacIntel';

  // iPadOs 13 fix
  const iPadScreens = ['1024x1366', '1366x1024', '834x1194', '1194x834', '834x1112', '1112x834', '768x1024', '1024x768', '820x1180', '1180x820', '810x1080', '1080x810'];
  if (!ipad && macos && support.touch && iPadScreens.indexOf(`${screenWidth}x${screenHeight}`) >= 0) {
    ipad = ua.match(/(Version)\/([\d.]+)/);
    if (!ipad) ipad = [0, 1, '13_0_0'];
    macos = false;
  }

  // Android
  if (android && !windows) {
    device.os = 'android';
    device.android = true;
  }
  if (ipad || iphone || ipod) {
    device.os = 'ios';
    device.ios = true;
  }

  // Export object
  return device;
}
function getDevice(overrides) {
  if (overrides === void 0) {
    overrides = {};
  }
  if (!deviceCached) {
    deviceCached = calcDevice(overrides);
  }
  return deviceCached;
}

let browser;
function calcBrowser() {
  const window = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
  const device = getDevice();
  let needPerspectiveFix = false;
  function isSafari() {
    const ua = window.navigator.userAgent.toLowerCase();
    return ua.indexOf('safari') >= 0 && ua.indexOf('chrome') < 0 && ua.indexOf('android') < 0;
  }
  if (isSafari()) {
    const ua = String(window.navigator.userAgent);
    if (ua.includes('Version/')) {
      const [major, minor] = ua.split('Version/')[1].split(' ')[0].split('.').map(num => Number(num));
      needPerspectiveFix = major < 16 || major === 16 && minor < 2;
    }
  }
  const isWebView = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent);
  const isSafariBrowser = isSafari();
  const need3dFix = isSafariBrowser || isWebView && device.ios;
  return {
    isSafari: needPerspectiveFix || isSafariBrowser,
    needPerspectiveFix,
    need3dFix,
    isWebView
  };
}
function getBrowser() {
  if (!browser) {
    browser = calcBrowser();
  }
  return browser;
}

function Resize(_ref) {
  let {
    swiper,
    on,
    emit
  } = _ref;
  const window = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
  let observer = null;
  let animationFrame = null;
  const resizeHandler = () => {
    if (!swiper || swiper.destroyed || !swiper.initialized) return;
    emit('beforeResize');
    emit('resize');
  };
  const createObserver = () => {
    if (!swiper || swiper.destroyed || !swiper.initialized) return;
    observer = new ResizeObserver(entries => {
      animationFrame = window.requestAnimationFrame(() => {
        const {
          width,
          height
        } = swiper;
        let newWidth = width;
        let newHeight = height;
        entries.forEach(_ref2 => {
          let {
            contentBoxSize,
            contentRect,
            target
          } = _ref2;
          if (target && target !== swiper.el) return;
          newWidth = contentRect ? contentRect.width : (contentBoxSize[0] || contentBoxSize).inlineSize;
          newHeight = contentRect ? contentRect.height : (contentBoxSize[0] || contentBoxSize).blockSize;
        });
        if (newWidth !== width || newHeight !== height) {
          resizeHandler();
        }
      });
    });
    observer.observe(swiper.el);
  };
  const removeObserver = () => {
    if (animationFrame) {
      window.cancelAnimationFrame(animationFrame);
    }
    if (observer && observer.unobserve && swiper.el) {
      observer.unobserve(swiper.el);
      observer = null;
    }
  };
  const orientationChangeHandler = () => {
    if (!swiper || swiper.destroyed || !swiper.initialized) return;
    emit('orientationchange');
  };
  on('init', () => {
    if (swiper.params.resizeObserver && typeof window.ResizeObserver !== 'undefined') {
      createObserver();
      return;
    }
    window.addEventListener('resize', resizeHandler);
    window.addEventListener('orientationchange', orientationChangeHandler);
  });
  on('destroy', () => {
    removeObserver();
    window.removeEventListener('resize', resizeHandler);
    window.removeEventListener('orientationchange', orientationChangeHandler);
  });
}

function Observer(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit
  } = _ref;
  const observers = [];
  const window = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
  const attach = function (target, options) {
    if (options === void 0) {
      options = {};
    }
    const ObserverFunc = window.MutationObserver || window.WebkitMutationObserver;
    const observer = new ObserverFunc(mutations => {
      // The observerUpdate event should only be triggered
      // once despite the number of mutations.  Additional
      // triggers are redundant and are very costly
      if (swiper.__preventObserver__) return;
      if (mutations.length === 1) {
        emit('observerUpdate', mutations[0]);
        return;
      }
      const observerUpdate = function observerUpdate() {
        emit('observerUpdate', mutations[0]);
      };
      if (window.requestAnimationFrame) {
        window.requestAnimationFrame(observerUpdate);
      } else {
        window.setTimeout(observerUpdate, 0);
      }
    });
    observer.observe(target, {
      attributes: typeof options.attributes === 'undefined' ? true : options.attributes,
      childList: swiper.isElement || (typeof options.childList === 'undefined' ? true : options).childList,
      characterData: typeof options.characterData === 'undefined' ? true : options.characterData
    });
    observers.push(observer);
  };
  const init = () => {
    if (!swiper.params.observer) return;
    if (swiper.params.observeParents) {
      const containerParents = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.b)(swiper.hostEl);
      for (let i = 0; i < containerParents.length; i += 1) {
        attach(containerParents[i]);
      }
    }
    // Observe container
    attach(swiper.hostEl, {
      childList: swiper.params.observeSlideChildren
    });

    // Observe wrapper
    attach(swiper.wrapperEl, {
      attributes: false
    });
  };
  const destroy = () => {
    observers.forEach(observer => {
      observer.disconnect();
    });
    observers.splice(0, observers.length);
  };
  extendParams({
    observer: false,
    observeParents: false,
    observeSlideChildren: false
  });
  on('init', init);
  on('destroy', destroy);
}

/* eslint-disable no-underscore-dangle */

var eventsEmitter = {
  on(events, handler, priority) {
    const self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (typeof handler !== 'function') return self;
    const method = priority ? 'unshift' : 'push';
    events.split(' ').forEach(event => {
      if (!self.eventsListeners[event]) self.eventsListeners[event] = [];
      self.eventsListeners[event][method](handler);
    });
    return self;
  },
  once(events, handler, priority) {
    const self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (typeof handler !== 'function') return self;
    function onceHandler() {
      self.off(events, onceHandler);
      if (onceHandler.__emitterProxy) {
        delete onceHandler.__emitterProxy;
      }
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      handler.apply(self, args);
    }
    onceHandler.__emitterProxy = handler;
    return self.on(events, onceHandler, priority);
  },
  onAny(handler, priority) {
    const self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (typeof handler !== 'function') return self;
    const method = priority ? 'unshift' : 'push';
    if (self.eventsAnyListeners.indexOf(handler) < 0) {
      self.eventsAnyListeners[method](handler);
    }
    return self;
  },
  offAny(handler) {
    const self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (!self.eventsAnyListeners) return self;
    const index = self.eventsAnyListeners.indexOf(handler);
    if (index >= 0) {
      self.eventsAnyListeners.splice(index, 1);
    }
    return self;
  },
  off(events, handler) {
    const self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (!self.eventsListeners) return self;
    events.split(' ').forEach(event => {
      if (typeof handler === 'undefined') {
        self.eventsListeners[event] = [];
      } else if (self.eventsListeners[event]) {
        self.eventsListeners[event].forEach((eventHandler, index) => {
          if (eventHandler === handler || eventHandler.__emitterProxy && eventHandler.__emitterProxy === handler) {
            self.eventsListeners[event].splice(index, 1);
          }
        });
      }
    });
    return self;
  },
  emit() {
    const self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (!self.eventsListeners) return self;
    let events;
    let data;
    let context;
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    if (typeof args[0] === 'string' || Array.isArray(args[0])) {
      events = args[0];
      data = args.slice(1, args.length);
      context = self;
    } else {
      events = args[0].events;
      data = args[0].data;
      context = args[0].context || self;
    }
    data.unshift(context);
    const eventsArray = Array.isArray(events) ? events : events.split(' ');
    eventsArray.forEach(event => {
      if (self.eventsAnyListeners && self.eventsAnyListeners.length) {
        self.eventsAnyListeners.forEach(eventHandler => {
          eventHandler.apply(context, [event, ...data]);
        });
      }
      if (self.eventsListeners && self.eventsListeners[event]) {
        self.eventsListeners[event].forEach(eventHandler => {
          eventHandler.apply(context, data);
        });
      }
    });
    return self;
  }
};

function updateSize() {
  const swiper = this;
  let width;
  let height;
  const el = swiper.el;
  if (typeof swiper.params.width !== 'undefined' && swiper.params.width !== null) {
    width = swiper.params.width;
  } else {
    width = el.clientWidth;
  }
  if (typeof swiper.params.height !== 'undefined' && swiper.params.height !== null) {
    height = swiper.params.height;
  } else {
    height = el.clientHeight;
  }
  if (width === 0 && swiper.isHorizontal() || height === 0 && swiper.isVertical()) {
    return;
  }

  // Subtract paddings
  width = width - parseInt((0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.q)(el, 'padding-left') || 0, 10) - parseInt((0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.q)(el, 'padding-right') || 0, 10);
  height = height - parseInt((0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.q)(el, 'padding-top') || 0, 10) - parseInt((0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.q)(el, 'padding-bottom') || 0, 10);
  if (Number.isNaN(width)) width = 0;
  if (Number.isNaN(height)) height = 0;
  Object.assign(swiper, {
    width,
    height,
    size: swiper.isHorizontal() ? width : height
  });
}

function updateSlides() {
  const swiper = this;
  function getDirectionPropertyValue(node, label) {
    return parseFloat(node.getPropertyValue(swiper.getDirectionLabel(label)) || 0);
  }
  const params = swiper.params;
  const {
    wrapperEl,
    slidesEl,
    size: swiperSize,
    rtlTranslate: rtl,
    wrongRTL
  } = swiper;
  const isVirtual = swiper.virtual && params.virtual.enabled;
  const previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
  const slides = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.e)(slidesEl, `.${swiper.params.slideClass}, swiper-slide`);
  const slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
  let snapGrid = [];
  const slidesGrid = [];
  const slidesSizesGrid = [];
  let offsetBefore = params.slidesOffsetBefore;
  if (typeof offsetBefore === 'function') {
    offsetBefore = params.slidesOffsetBefore.call(swiper);
  }
  let offsetAfter = params.slidesOffsetAfter;
  if (typeof offsetAfter === 'function') {
    offsetAfter = params.slidesOffsetAfter.call(swiper);
  }
  const previousSnapGridLength = swiper.snapGrid.length;
  const previousSlidesGridLength = swiper.slidesGrid.length;
  let spaceBetween = params.spaceBetween;
  let slidePosition = -offsetBefore;
  let prevSlideSize = 0;
  let index = 0;
  if (typeof swiperSize === 'undefined') {
    return;
  }
  if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
    spaceBetween = parseFloat(spaceBetween.replace('%', '')) / 100 * swiperSize;
  } else if (typeof spaceBetween === 'string') {
    spaceBetween = parseFloat(spaceBetween);
  }
  swiper.virtualSize = -spaceBetween;

  // reset margins
  slides.forEach(slideEl => {
    if (rtl) {
      slideEl.style.marginLeft = '';
    } else {
      slideEl.style.marginRight = '';
    }
    slideEl.style.marginBottom = '';
    slideEl.style.marginTop = '';
  });

  // reset cssMode offsets
  if (params.centeredSlides && params.cssMode) {
    (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.a)(wrapperEl, '--swiper-centered-offset-before', '');
    (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.a)(wrapperEl, '--swiper-centered-offset-after', '');
  }
  const gridEnabled = params.grid && params.grid.rows > 1 && swiper.grid;
  if (gridEnabled) {
    swiper.grid.initSlides(slides);
  } else if (swiper.grid) {
    swiper.grid.unsetSlides();
  }

  // Calc slides
  let slideSize;
  const shouldResetSlideSize = params.slidesPerView === 'auto' && params.breakpoints && Object.keys(params.breakpoints).filter(key => {
    return typeof params.breakpoints[key].slidesPerView !== 'undefined';
  }).length > 0;
  for (let i = 0; i < slidesLength; i += 1) {
    slideSize = 0;
    let slide;
    if (slides[i]) slide = slides[i];
    if (gridEnabled) {
      swiper.grid.updateSlide(i, slide, slides);
    }
    if (slides[i] && (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.q)(slide, 'display') === 'none') continue; // eslint-disable-line

    if (params.slidesPerView === 'auto') {
      if (shouldResetSlideSize) {
        slides[i].style[swiper.getDirectionLabel('width')] = ``;
      }
      const slideStyles = getComputedStyle(slide);
      const currentTransform = slide.style.transform;
      const currentWebKitTransform = slide.style.webkitTransform;
      if (currentTransform) {
        slide.style.transform = 'none';
      }
      if (currentWebKitTransform) {
        slide.style.webkitTransform = 'none';
      }
      if (params.roundLengths) {
        slideSize = swiper.isHorizontal() ? (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.h)(slide, 'width', true) : (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.h)(slide, 'height', true);
      } else {
        // eslint-disable-next-line
        const width = getDirectionPropertyValue(slideStyles, 'width');
        const paddingLeft = getDirectionPropertyValue(slideStyles, 'padding-left');
        const paddingRight = getDirectionPropertyValue(slideStyles, 'padding-right');
        const marginLeft = getDirectionPropertyValue(slideStyles, 'margin-left');
        const marginRight = getDirectionPropertyValue(slideStyles, 'margin-right');
        const boxSizing = slideStyles.getPropertyValue('box-sizing');
        if (boxSizing && boxSizing === 'border-box') {
          slideSize = width + marginLeft + marginRight;
        } else {
          const {
            clientWidth,
            offsetWidth
          } = slide;
          slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight + (offsetWidth - clientWidth);
        }
      }
      if (currentTransform) {
        slide.style.transform = currentTransform;
      }
      if (currentWebKitTransform) {
        slide.style.webkitTransform = currentWebKitTransform;
      }
      if (params.roundLengths) slideSize = Math.floor(slideSize);
    } else {
      slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;
      if (params.roundLengths) slideSize = Math.floor(slideSize);
      if (slides[i]) {
        slides[i].style[swiper.getDirectionLabel('width')] = `${slideSize}px`;
      }
    }
    if (slides[i]) {
      slides[i].swiperSlideSize = slideSize;
    }
    slidesSizesGrid.push(slideSize);
    if (params.centeredSlides) {
      slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
      if (prevSlideSize === 0 && i !== 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
      if (i === 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
      if (Math.abs(slidePosition) < 1 / 1000) slidePosition = 0;
      if (params.roundLengths) slidePosition = Math.floor(slidePosition);
      if (index % params.slidesPerGroup === 0) snapGrid.push(slidePosition);
      slidesGrid.push(slidePosition);
    } else {
      if (params.roundLengths) slidePosition = Math.floor(slidePosition);
      if ((index - Math.min(swiper.params.slidesPerGroupSkip, index)) % swiper.params.slidesPerGroup === 0) snapGrid.push(slidePosition);
      slidesGrid.push(slidePosition);
      slidePosition = slidePosition + slideSize + spaceBetween;
    }
    swiper.virtualSize += slideSize + spaceBetween;
    prevSlideSize = slideSize;
    index += 1;
  }
  swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
  if (rtl && wrongRTL && (params.effect === 'slide' || params.effect === 'coverflow')) {
    wrapperEl.style.width = `${swiper.virtualSize + spaceBetween}px`;
  }
  if (params.setWrapperSize) {
    wrapperEl.style[swiper.getDirectionLabel('width')] = `${swiper.virtualSize + spaceBetween}px`;
  }
  if (gridEnabled) {
    swiper.grid.updateWrapperSize(slideSize, snapGrid);
  }

  // Remove last grid elements depending on width
  if (!params.centeredSlides) {
    const newSlidesGrid = [];
    for (let i = 0; i < snapGrid.length; i += 1) {
      let slidesGridItem = snapGrid[i];
      if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem);
      if (snapGrid[i] <= swiper.virtualSize - swiperSize) {
        newSlidesGrid.push(slidesGridItem);
      }
    }
    snapGrid = newSlidesGrid;
    if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) {
      snapGrid.push(swiper.virtualSize - swiperSize);
    }
  }
  if (isVirtual && params.loop) {
    const size = slidesSizesGrid[0] + spaceBetween;
    if (params.slidesPerGroup > 1) {
      const groups = Math.ceil((swiper.virtual.slidesBefore + swiper.virtual.slidesAfter) / params.slidesPerGroup);
      const groupSize = size * params.slidesPerGroup;
      for (let i = 0; i < groups; i += 1) {
        snapGrid.push(snapGrid[snapGrid.length - 1] + groupSize);
      }
    }
    for (let i = 0; i < swiper.virtual.slidesBefore + swiper.virtual.slidesAfter; i += 1) {
      if (params.slidesPerGroup === 1) {
        snapGrid.push(snapGrid[snapGrid.length - 1] + size);
      }
      slidesGrid.push(slidesGrid[slidesGrid.length - 1] + size);
      swiper.virtualSize += size;
    }
  }
  if (snapGrid.length === 0) snapGrid = [0];
  if (spaceBetween !== 0) {
    const key = swiper.isHorizontal() && rtl ? 'marginLeft' : swiper.getDirectionLabel('marginRight');
    slides.filter((_, slideIndex) => {
      if (!params.cssMode || params.loop) return true;
      if (slideIndex === slides.length - 1) {
        return false;
      }
      return true;
    }).forEach(slideEl => {
      slideEl.style[key] = `${spaceBetween}px`;
    });
  }
  if (params.centeredSlides && params.centeredSlidesBounds) {
    let allSlidesSize = 0;
    slidesSizesGrid.forEach(slideSizeValue => {
      allSlidesSize += slideSizeValue + (spaceBetween || 0);
    });
    allSlidesSize -= spaceBetween;
    const maxSnap = allSlidesSize > swiperSize ? allSlidesSize - swiperSize : 0;
    snapGrid = snapGrid.map(snap => {
      if (snap <= 0) return -offsetBefore;
      if (snap > maxSnap) return maxSnap + offsetAfter;
      return snap;
    });
  }
  if (params.centerInsufficientSlides) {
    let allSlidesSize = 0;
    slidesSizesGrid.forEach(slideSizeValue => {
      allSlidesSize += slideSizeValue + (spaceBetween || 0);
    });
    allSlidesSize -= spaceBetween;
    const offsetSize = (params.slidesOffsetBefore || 0) + (params.slidesOffsetAfter || 0);
    if (allSlidesSize + offsetSize < swiperSize) {
      const allSlidesOffset = (swiperSize - allSlidesSize - offsetSize) / 2;
      snapGrid.forEach((snap, snapIndex) => {
        snapGrid[snapIndex] = snap - allSlidesOffset;
      });
      slidesGrid.forEach((snap, snapIndex) => {
        slidesGrid[snapIndex] = snap + allSlidesOffset;
      });
    }
  }
  Object.assign(swiper, {
    slides,
    snapGrid,
    slidesGrid,
    slidesSizesGrid
  });
  if (params.centeredSlides && params.cssMode && !params.centeredSlidesBounds) {
    (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.a)(wrapperEl, '--swiper-centered-offset-before', `${-snapGrid[0]}px`);
    (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.a)(wrapperEl, '--swiper-centered-offset-after', `${swiper.size / 2 - slidesSizesGrid[slidesSizesGrid.length - 1] / 2}px`);
    const addToSnapGrid = -swiper.snapGrid[0];
    const addToSlidesGrid = -swiper.slidesGrid[0];
    swiper.snapGrid = swiper.snapGrid.map(v => v + addToSnapGrid);
    swiper.slidesGrid = swiper.slidesGrid.map(v => v + addToSlidesGrid);
  }
  if (slidesLength !== previousSlidesLength) {
    swiper.emit('slidesLengthChange');
  }
  if (snapGrid.length !== previousSnapGridLength) {
    if (swiper.params.watchOverflow) swiper.checkOverflow();
    swiper.emit('snapGridLengthChange');
  }
  if (slidesGrid.length !== previousSlidesGridLength) {
    swiper.emit('slidesGridLengthChange');
  }
  if (params.watchSlidesProgress) {
    swiper.updateSlidesOffset();
  }
  swiper.emit('slidesUpdated');
  if (!isVirtual && !params.cssMode && (params.effect === 'slide' || params.effect === 'fade')) {
    const backFaceHiddenClass = `${params.containerModifierClass}backface-hidden`;
    const hasClassBackfaceClassAdded = swiper.el.classList.contains(backFaceHiddenClass);
    if (slidesLength <= params.maxBackfaceHiddenSlides) {
      if (!hasClassBackfaceClassAdded) swiper.el.classList.add(backFaceHiddenClass);
    } else if (hasClassBackfaceClassAdded) {
      swiper.el.classList.remove(backFaceHiddenClass);
    }
  }
}

function updateAutoHeight(speed) {
  const swiper = this;
  const activeSlides = [];
  const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
  let newHeight = 0;
  let i;
  if (typeof speed === 'number') {
    swiper.setTransition(speed);
  } else if (speed === true) {
    swiper.setTransition(swiper.params.speed);
  }
  const getSlideByIndex = index => {
    if (isVirtual) {
      return swiper.slides[swiper.getSlideIndexByData(index)];
    }
    return swiper.slides[index];
  };
  // Find slides currently in view
  if (swiper.params.slidesPerView !== 'auto' && swiper.params.slidesPerView > 1) {
    if (swiper.params.centeredSlides) {
      (swiper.visibleSlides || []).forEach(slide => {
        activeSlides.push(slide);
      });
    } else {
      for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
        const index = swiper.activeIndex + i;
        if (index > swiper.slides.length && !isVirtual) break;
        activeSlides.push(getSlideByIndex(index));
      }
    }
  } else {
    activeSlides.push(getSlideByIndex(swiper.activeIndex));
  }

  // Find new height from highest slide in view
  for (i = 0; i < activeSlides.length; i += 1) {
    if (typeof activeSlides[i] !== 'undefined') {
      const height = activeSlides[i].offsetHeight;
      newHeight = height > newHeight ? height : newHeight;
    }
  }

  // Update Height
  if (newHeight || newHeight === 0) swiper.wrapperEl.style.height = `${newHeight}px`;
}

function updateSlidesOffset() {
  const swiper = this;
  const slides = swiper.slides;
  // eslint-disable-next-line
  const minusOffset = swiper.isElement ? swiper.isHorizontal() ? swiper.wrapperEl.offsetLeft : swiper.wrapperEl.offsetTop : 0;
  for (let i = 0; i < slides.length; i += 1) {
    slides[i].swiperSlideOffset = (swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop) - minusOffset - swiper.cssOverflowAdjustment();
  }
}

const toggleSlideClasses$1 = (slideEl, condition, className) => {
  if (condition && !slideEl.classList.contains(className)) {
    slideEl.classList.add(className);
  } else if (!condition && slideEl.classList.contains(className)) {
    slideEl.classList.remove(className);
  }
};
function updateSlidesProgress(translate) {
  if (translate === void 0) {
    translate = this && this.translate || 0;
  }
  const swiper = this;
  const params = swiper.params;
  const {
    slides,
    rtlTranslate: rtl,
    snapGrid
  } = swiper;
  if (slides.length === 0) return;
  if (typeof slides[0].swiperSlideOffset === 'undefined') swiper.updateSlidesOffset();
  let offsetCenter = -translate;
  if (rtl) offsetCenter = translate;
  swiper.visibleSlidesIndexes = [];
  swiper.visibleSlides = [];
  let spaceBetween = params.spaceBetween;
  if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
    spaceBetween = parseFloat(spaceBetween.replace('%', '')) / 100 * swiper.size;
  } else if (typeof spaceBetween === 'string') {
    spaceBetween = parseFloat(spaceBetween);
  }
  for (let i = 0; i < slides.length; i += 1) {
    const slide = slides[i];
    let slideOffset = slide.swiperSlideOffset;
    if (params.cssMode && params.centeredSlides) {
      slideOffset -= slides[0].swiperSlideOffset;
    }
    const slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + spaceBetween);
    const originalSlideProgress = (offsetCenter - snapGrid[0] + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + spaceBetween);
    const slideBefore = -(offsetCenter - slideOffset);
    const slideAfter = slideBefore + swiper.slidesSizesGrid[i];
    const isFullyVisible = slideBefore >= 0 && slideBefore <= swiper.size - swiper.slidesSizesGrid[i];
    const isVisible = slideBefore >= 0 && slideBefore < swiper.size - 1 || slideAfter > 1 && slideAfter <= swiper.size || slideBefore <= 0 && slideAfter >= swiper.size;
    if (isVisible) {
      swiper.visibleSlides.push(slide);
      swiper.visibleSlidesIndexes.push(i);
    }
    toggleSlideClasses$1(slide, isVisible, params.slideVisibleClass);
    toggleSlideClasses$1(slide, isFullyVisible, params.slideFullyVisibleClass);
    slide.progress = rtl ? -slideProgress : slideProgress;
    slide.originalProgress = rtl ? -originalSlideProgress : originalSlideProgress;
  }
}

function updateProgress(translate) {
  const swiper = this;
  if (typeof translate === 'undefined') {
    const multiplier = swiper.rtlTranslate ? -1 : 1;
    // eslint-disable-next-line
    translate = swiper && swiper.translate && swiper.translate * multiplier || 0;
  }
  const params = swiper.params;
  const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
  let {
    progress,
    isBeginning,
    isEnd,
    progressLoop
  } = swiper;
  const wasBeginning = isBeginning;
  const wasEnd = isEnd;
  if (translatesDiff === 0) {
    progress = 0;
    isBeginning = true;
    isEnd = true;
  } else {
    progress = (translate - swiper.minTranslate()) / translatesDiff;
    const isBeginningRounded = Math.abs(translate - swiper.minTranslate()) < 1;
    const isEndRounded = Math.abs(translate - swiper.maxTranslate()) < 1;
    isBeginning = isBeginningRounded || progress <= 0;
    isEnd = isEndRounded || progress >= 1;
    if (isBeginningRounded) progress = 0;
    if (isEndRounded) progress = 1;
  }
  if (params.loop) {
    const firstSlideIndex = swiper.getSlideIndexByData(0);
    const lastSlideIndex = swiper.getSlideIndexByData(swiper.slides.length - 1);
    const firstSlideTranslate = swiper.slidesGrid[firstSlideIndex];
    const lastSlideTranslate = swiper.slidesGrid[lastSlideIndex];
    const translateMax = swiper.slidesGrid[swiper.slidesGrid.length - 1];
    const translateAbs = Math.abs(translate);
    if (translateAbs >= firstSlideTranslate) {
      progressLoop = (translateAbs - firstSlideTranslate) / translateMax;
    } else {
      progressLoop = (translateAbs + translateMax - lastSlideTranslate) / translateMax;
    }
    if (progressLoop > 1) progressLoop -= 1;
  }
  Object.assign(swiper, {
    progress,
    progressLoop,
    isBeginning,
    isEnd
  });
  if (params.watchSlidesProgress || params.centeredSlides && params.autoHeight) swiper.updateSlidesProgress(translate);
  if (isBeginning && !wasBeginning) {
    swiper.emit('reachBeginning toEdge');
  }
  if (isEnd && !wasEnd) {
    swiper.emit('reachEnd toEdge');
  }
  if (wasBeginning && !isBeginning || wasEnd && !isEnd) {
    swiper.emit('fromEdge');
  }
  swiper.emit('progress', progress);
}

const toggleSlideClasses = (slideEl, condition, className) => {
  if (condition && !slideEl.classList.contains(className)) {
    slideEl.classList.add(className);
  } else if (!condition && slideEl.classList.contains(className)) {
    slideEl.classList.remove(className);
  }
};
function updateSlidesClasses() {
  const swiper = this;
  const {
    slides,
    params,
    slidesEl,
    activeIndex
  } = swiper;
  const isVirtual = swiper.virtual && params.virtual.enabled;
  const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
  const getFilteredSlide = selector => {
    return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.e)(slidesEl, `.${params.slideClass}${selector}, swiper-slide${selector}`)[0];
  };
  let activeSlide;
  let prevSlide;
  let nextSlide;
  if (isVirtual) {
    if (params.loop) {
      let slideIndex = activeIndex - swiper.virtual.slidesBefore;
      if (slideIndex < 0) slideIndex = swiper.virtual.slides.length + slideIndex;
      if (slideIndex >= swiper.virtual.slides.length) slideIndex -= swiper.virtual.slides.length;
      activeSlide = getFilteredSlide(`[data-swiper-slide-index="${slideIndex}"]`);
    } else {
      activeSlide = getFilteredSlide(`[data-swiper-slide-index="${activeIndex}"]`);
    }
  } else {
    if (gridEnabled) {
      activeSlide = slides.find(slideEl => slideEl.column === activeIndex);
      nextSlide = slides.find(slideEl => slideEl.column === activeIndex + 1);
      prevSlide = slides.find(slideEl => slideEl.column === activeIndex - 1);
    } else {
      activeSlide = slides[activeIndex];
    }
  }
  if (activeSlide) {
    if (!gridEnabled) {
      // Next Slide
      nextSlide = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.r)(activeSlide, `.${params.slideClass}, swiper-slide`)[0];
      if (params.loop && !nextSlide) {
        nextSlide = slides[0];
      }

      // Prev Slide
      prevSlide = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.t)(activeSlide, `.${params.slideClass}, swiper-slide`)[0];
      if (params.loop && !prevSlide === 0) {
        prevSlide = slides[slides.length - 1];
      }
    }
  }
  slides.forEach(slideEl => {
    toggleSlideClasses(slideEl, slideEl === activeSlide, params.slideActiveClass);
    toggleSlideClasses(slideEl, slideEl === nextSlide, params.slideNextClass);
    toggleSlideClasses(slideEl, slideEl === prevSlide, params.slidePrevClass);
  });
  swiper.emitSlidesClasses();
}

const processLazyPreloader = (swiper, imageEl) => {
  if (!swiper || swiper.destroyed || !swiper.params) return;
  const slideSelector = () => swiper.isElement ? `swiper-slide` : `.${swiper.params.slideClass}`;
  const slideEl = imageEl.closest(slideSelector());
  if (slideEl) {
    let lazyEl = slideEl.querySelector(`.${swiper.params.lazyPreloaderClass}`);
    if (!lazyEl && swiper.isElement) {
      if (slideEl.shadowRoot) {
        lazyEl = slideEl.shadowRoot.querySelector(`.${swiper.params.lazyPreloaderClass}`);
      } else {
        // init later
        requestAnimationFrame(() => {
          if (slideEl.shadowRoot) {
            lazyEl = slideEl.shadowRoot.querySelector(`.${swiper.params.lazyPreloaderClass}`);
            if (lazyEl) lazyEl.remove();
          }
        });
      }
    }
    if (lazyEl) lazyEl.remove();
  }
};
const unlazy = (swiper, index) => {
  if (!swiper.slides[index]) return;
  const imageEl = swiper.slides[index].querySelector('[loading="lazy"]');
  if (imageEl) imageEl.removeAttribute('loading');
};
const preload = swiper => {
  if (!swiper || swiper.destroyed || !swiper.params) return;
  let amount = swiper.params.lazyPreloadPrevNext;
  const len = swiper.slides.length;
  if (!len || !amount || amount < 0) return;
  amount = Math.min(amount, len);
  const slidesPerView = swiper.params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : Math.ceil(swiper.params.slidesPerView);
  const activeIndex = swiper.activeIndex;
  if (swiper.params.grid && swiper.params.grid.rows > 1) {
    const activeColumn = activeIndex;
    const preloadColumns = [activeColumn - amount];
    preloadColumns.push(...Array.from({
      length: amount
    }).map((_, i) => {
      return activeColumn + slidesPerView + i;
    }));
    swiper.slides.forEach((slideEl, i) => {
      if (preloadColumns.includes(slideEl.column)) unlazy(swiper, i);
    });
    return;
  }
  const slideIndexLastInView = activeIndex + slidesPerView - 1;
  if (swiper.params.rewind || swiper.params.loop) {
    for (let i = activeIndex - amount; i <= slideIndexLastInView + amount; i += 1) {
      const realIndex = (i % len + len) % len;
      if (realIndex < activeIndex || realIndex > slideIndexLastInView) unlazy(swiper, realIndex);
    }
  } else {
    for (let i = Math.max(activeIndex - amount, 0); i <= Math.min(slideIndexLastInView + amount, len - 1); i += 1) {
      if (i !== activeIndex && (i > slideIndexLastInView || i < activeIndex)) {
        unlazy(swiper, i);
      }
    }
  }
};

function getActiveIndexByTranslate(swiper) {
  const {
    slidesGrid,
    params
  } = swiper;
  const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
  let activeIndex;
  for (let i = 0; i < slidesGrid.length; i += 1) {
    if (typeof slidesGrid[i + 1] !== 'undefined') {
      if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2) {
        activeIndex = i;
      } else if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1]) {
        activeIndex = i + 1;
      }
    } else if (translate >= slidesGrid[i]) {
      activeIndex = i;
    }
  }
  // Normalize slideIndex
  if (params.normalizeSlideIndex) {
    if (activeIndex < 0 || typeof activeIndex === 'undefined') activeIndex = 0;
  }
  return activeIndex;
}
function updateActiveIndex(newActiveIndex) {
  const swiper = this;
  const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
  const {
    snapGrid,
    params,
    activeIndex: previousIndex,
    realIndex: previousRealIndex,
    snapIndex: previousSnapIndex
  } = swiper;
  let activeIndex = newActiveIndex;
  let snapIndex;
  const getVirtualRealIndex = aIndex => {
    let realIndex = aIndex - swiper.virtual.slidesBefore;
    if (realIndex < 0) {
      realIndex = swiper.virtual.slides.length + realIndex;
    }
    if (realIndex >= swiper.virtual.slides.length) {
      realIndex -= swiper.virtual.slides.length;
    }
    return realIndex;
  };
  if (typeof activeIndex === 'undefined') {
    activeIndex = getActiveIndexByTranslate(swiper);
  }
  if (snapGrid.indexOf(translate) >= 0) {
    snapIndex = snapGrid.indexOf(translate);
  } else {
    const skip = Math.min(params.slidesPerGroupSkip, activeIndex);
    snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
  }
  if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
  if (activeIndex === previousIndex && !swiper.params.loop) {
    if (snapIndex !== previousSnapIndex) {
      swiper.snapIndex = snapIndex;
      swiper.emit('snapIndexChange');
    }
    return;
  }
  if (activeIndex === previousIndex && swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled) {
    swiper.realIndex = getVirtualRealIndex(activeIndex);
    return;
  }
  const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;

  // Get real index
  let realIndex;
  if (swiper.virtual && params.virtual.enabled && params.loop) {
    realIndex = getVirtualRealIndex(activeIndex);
  } else if (gridEnabled) {
    const firstSlideInColumn = swiper.slides.find(slideEl => slideEl.column === activeIndex);
    let activeSlideIndex = parseInt(firstSlideInColumn.getAttribute('data-swiper-slide-index'), 10);
    if (Number.isNaN(activeSlideIndex)) {
      activeSlideIndex = Math.max(swiper.slides.indexOf(firstSlideInColumn), 0);
    }
    realIndex = Math.floor(activeSlideIndex / params.grid.rows);
  } else if (swiper.slides[activeIndex]) {
    const slideIndex = swiper.slides[activeIndex].getAttribute('data-swiper-slide-index');
    if (slideIndex) {
      realIndex = parseInt(slideIndex, 10);
    } else {
      realIndex = activeIndex;
    }
  } else {
    realIndex = activeIndex;
  }
  Object.assign(swiper, {
    previousSnapIndex,
    snapIndex,
    previousRealIndex,
    realIndex,
    previousIndex,
    activeIndex
  });
  if (swiper.initialized) {
    preload(swiper);
  }
  swiper.emit('activeIndexChange');
  swiper.emit('snapIndexChange');
  if (swiper.initialized || swiper.params.runCallbacksOnInit) {
    if (previousRealIndex !== realIndex) {
      swiper.emit('realIndexChange');
    }
    swiper.emit('slideChange');
  }
}

function updateClickedSlide(el, path) {
  const swiper = this;
  const params = swiper.params;
  let slide = el.closest(`.${params.slideClass}, swiper-slide`);
  if (!slide && swiper.isElement && path && path.length > 1 && path.includes(el)) {
    [...path.slice(path.indexOf(el) + 1, path.length)].forEach(pathEl => {
      if (!slide && pathEl.matches && pathEl.matches(`.${params.slideClass}, swiper-slide`)) {
        slide = pathEl;
      }
    });
  }
  let slideFound = false;
  let slideIndex;
  if (slide) {
    for (let i = 0; i < swiper.slides.length; i += 1) {
      if (swiper.slides[i] === slide) {
        slideFound = true;
        slideIndex = i;
        break;
      }
    }
  }
  if (slide && slideFound) {
    swiper.clickedSlide = slide;
    if (swiper.virtual && swiper.params.virtual.enabled) {
      swiper.clickedIndex = parseInt(slide.getAttribute('data-swiper-slide-index'), 10);
    } else {
      swiper.clickedIndex = slideIndex;
    }
  } else {
    swiper.clickedSlide = undefined;
    swiper.clickedIndex = undefined;
    return;
  }
  if (params.slideToClickedSlide && swiper.clickedIndex !== undefined && swiper.clickedIndex !== swiper.activeIndex) {
    swiper.slideToClickedSlide();
  }
}

var update = {
  updateSize,
  updateSlides,
  updateAutoHeight,
  updateSlidesOffset,
  updateSlidesProgress,
  updateProgress,
  updateSlidesClasses,
  updateActiveIndex,
  updateClickedSlide
};

function getSwiperTranslate(axis) {
  if (axis === void 0) {
    axis = this.isHorizontal() ? 'x' : 'y';
  }
  const swiper = this;
  const {
    params,
    rtlTranslate: rtl,
    translate,
    wrapperEl
  } = swiper;
  if (params.virtualTranslate) {
    return rtl ? -translate : translate;
  }
  if (params.cssMode) {
    return translate;
  }
  let currentTranslate = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.k)(wrapperEl, axis);
  currentTranslate += swiper.cssOverflowAdjustment();
  if (rtl) currentTranslate = -currentTranslate;
  return currentTranslate || 0;
}

function setTranslate(translate, byController) {
  const swiper = this;
  const {
    rtlTranslate: rtl,
    params,
    wrapperEl,
    progress
  } = swiper;
  let x = 0;
  let y = 0;
  const z = 0;
  if (swiper.isHorizontal()) {
    x = rtl ? -translate : translate;
  } else {
    y = translate;
  }
  if (params.roundLengths) {
    x = Math.floor(x);
    y = Math.floor(y);
  }
  swiper.previousTranslate = swiper.translate;
  swiper.translate = swiper.isHorizontal() ? x : y;
  if (params.cssMode) {
    wrapperEl[swiper.isHorizontal() ? 'scrollLeft' : 'scrollTop'] = swiper.isHorizontal() ? -x : -y;
  } else if (!params.virtualTranslate) {
    if (swiper.isHorizontal()) {
      x -= swiper.cssOverflowAdjustment();
    } else {
      y -= swiper.cssOverflowAdjustment();
    }
    wrapperEl.style.transform = `translate3d(${x}px, ${y}px, ${z}px)`;
  }

  // Check if we need to update progress
  let newProgress;
  const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
  if (translatesDiff === 0) {
    newProgress = 0;
  } else {
    newProgress = (translate - swiper.minTranslate()) / translatesDiff;
  }
  if (newProgress !== progress) {
    swiper.updateProgress(translate);
  }
  swiper.emit('setTranslate', swiper.translate, byController);
}

function minTranslate() {
  return -this.snapGrid[0];
}

function maxTranslate() {
  return -this.snapGrid[this.snapGrid.length - 1];
}

function translateTo(translate, speed, runCallbacks, translateBounds, internal) {
  if (translate === void 0) {
    translate = 0;
  }
  if (speed === void 0) {
    speed = this.params.speed;
  }
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  if (translateBounds === void 0) {
    translateBounds = true;
  }
  const swiper = this;
  const {
    params,
    wrapperEl
  } = swiper;
  if (swiper.animating && params.preventInteractionOnTransition) {
    return false;
  }
  const minTranslate = swiper.minTranslate();
  const maxTranslate = swiper.maxTranslate();
  let newTranslate;
  if (translateBounds && translate > minTranslate) newTranslate = minTranslate;else if (translateBounds && translate < maxTranslate) newTranslate = maxTranslate;else newTranslate = translate;

  // Update progress
  swiper.updateProgress(newTranslate);
  if (params.cssMode) {
    const isH = swiper.isHorizontal();
    if (speed === 0) {
      wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = -newTranslate;
    } else {
      if (!swiper.support.smoothScroll) {
        (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.u)({
          swiper,
          targetPosition: -newTranslate,
          side: isH ? 'left' : 'top'
        });
        return true;
      }
      wrapperEl.scrollTo({
        [isH ? 'left' : 'top']: -newTranslate,
        behavior: 'smooth'
      });
    }
    return true;
  }
  if (speed === 0) {
    swiper.setTransition(0);
    swiper.setTranslate(newTranslate);
    if (runCallbacks) {
      swiper.emit('beforeTransitionStart', speed, internal);
      swiper.emit('transitionEnd');
    }
  } else {
    swiper.setTransition(speed);
    swiper.setTranslate(newTranslate);
    if (runCallbacks) {
      swiper.emit('beforeTransitionStart', speed, internal);
      swiper.emit('transitionStart');
    }
    if (!swiper.animating) {
      swiper.animating = true;
      if (!swiper.onTranslateToWrapperTransitionEnd) {
        swiper.onTranslateToWrapperTransitionEnd = function transitionEnd(e) {
          if (!swiper || swiper.destroyed) return;
          if (e.target !== this) return;
          swiper.wrapperEl.removeEventListener('transitionend', swiper.onTranslateToWrapperTransitionEnd);
          swiper.onTranslateToWrapperTransitionEnd = null;
          delete swiper.onTranslateToWrapperTransitionEnd;
          swiper.animating = false;
          if (runCallbacks) {
            swiper.emit('transitionEnd');
          }
        };
      }
      swiper.wrapperEl.addEventListener('transitionend', swiper.onTranslateToWrapperTransitionEnd);
    }
  }
  return true;
}

var translate = {
  getTranslate: getSwiperTranslate,
  setTranslate,
  minTranslate,
  maxTranslate,
  translateTo
};

function setTransition(duration, byController) {
  const swiper = this;
  if (!swiper.params.cssMode) {
    swiper.wrapperEl.style.transitionDuration = `${duration}ms`;
    swiper.wrapperEl.style.transitionDelay = duration === 0 ? `0ms` : '';
  }
  swiper.emit('setTransition', duration, byController);
}

function transitionEmit(_ref) {
  let {
    swiper,
    runCallbacks,
    direction,
    step
  } = _ref;
  const {
    activeIndex,
    previousIndex
  } = swiper;
  let dir = direction;
  if (!dir) {
    if (activeIndex > previousIndex) dir = 'next';else if (activeIndex < previousIndex) dir = 'prev';else dir = 'reset';
  }
  swiper.emit(`transition${step}`);
  if (runCallbacks && dir === 'reset') {
    swiper.emit(`slideResetTransition${step}`);
  } else if (runCallbacks && activeIndex !== previousIndex) {
    swiper.emit(`slideChangeTransition${step}`);
    if (dir === 'next') {
      swiper.emit(`slideNextTransition${step}`);
    } else {
      swiper.emit(`slidePrevTransition${step}`);
    }
  }
}

function transitionStart(runCallbacks, direction) {
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  const swiper = this;
  const {
    params
  } = swiper;
  if (params.cssMode) return;
  if (params.autoHeight) {
    swiper.updateAutoHeight();
  }
  transitionEmit({
    swiper,
    runCallbacks,
    direction,
    step: 'Start'
  });
}

function transitionEnd(runCallbacks, direction) {
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  const swiper = this;
  const {
    params
  } = swiper;
  swiper.animating = false;
  if (params.cssMode) return;
  swiper.setTransition(0);
  transitionEmit({
    swiper,
    runCallbacks,
    direction,
    step: 'End'
  });
}

var transition = {
  setTransition,
  transitionStart,
  transitionEnd
};

function slideTo(index, speed, runCallbacks, internal, initial) {
  if (index === void 0) {
    index = 0;
  }
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  if (typeof index === 'string') {
    index = parseInt(index, 10);
  }
  const swiper = this;
  let slideIndex = index;
  if (slideIndex < 0) slideIndex = 0;
  const {
    params,
    snapGrid,
    slidesGrid,
    previousIndex,
    activeIndex,
    rtlTranslate: rtl,
    wrapperEl,
    enabled
  } = swiper;
  if (!enabled && !internal && !initial || swiper.destroyed || swiper.animating && params.preventInteractionOnTransition) {
    return false;
  }
  if (typeof speed === 'undefined') {
    speed = swiper.params.speed;
  }
  const skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);
  let snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
  if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
  const translate = -snapGrid[snapIndex];
  // Normalize slideIndex
  if (params.normalizeSlideIndex) {
    for (let i = 0; i < slidesGrid.length; i += 1) {
      const normalizedTranslate = -Math.floor(translate * 100);
      const normalizedGrid = Math.floor(slidesGrid[i] * 100);
      const normalizedGridNext = Math.floor(slidesGrid[i + 1] * 100);
      if (typeof slidesGrid[i + 1] !== 'undefined') {
        if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext - (normalizedGridNext - normalizedGrid) / 2) {
          slideIndex = i;
        } else if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext) {
          slideIndex = i + 1;
        }
      } else if (normalizedTranslate >= normalizedGrid) {
        slideIndex = i;
      }
    }
  }
  // Directions locks
  if (swiper.initialized && slideIndex !== activeIndex) {
    if (!swiper.allowSlideNext && (rtl ? translate > swiper.translate && translate > swiper.minTranslate() : translate < swiper.translate && translate < swiper.minTranslate())) {
      return false;
    }
    if (!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate()) {
      if ((activeIndex || 0) !== slideIndex) {
        return false;
      }
    }
  }
  if (slideIndex !== (previousIndex || 0) && runCallbacks) {
    swiper.emit('beforeSlideChangeStart');
  }

  // Update progress
  swiper.updateProgress(translate);
  let direction;
  if (slideIndex > activeIndex) direction = 'next';else if (slideIndex < activeIndex) direction = 'prev';else direction = 'reset';

  // initial virtual
  const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
  const isInitialVirtual = isVirtual && initial;
  // Update Index
  if (!isInitialVirtual && (rtl && -translate === swiper.translate || !rtl && translate === swiper.translate)) {
    swiper.updateActiveIndex(slideIndex);
    // Update Height
    if (params.autoHeight) {
      swiper.updateAutoHeight();
    }
    swiper.updateSlidesClasses();
    if (params.effect !== 'slide') {
      swiper.setTranslate(translate);
    }
    if (direction !== 'reset') {
      swiper.transitionStart(runCallbacks, direction);
      swiper.transitionEnd(runCallbacks, direction);
    }
    return false;
  }
  if (params.cssMode) {
    const isH = swiper.isHorizontal();
    const t = rtl ? translate : -translate;
    if (speed === 0) {
      if (isVirtual) {
        swiper.wrapperEl.style.scrollSnapType = 'none';
        swiper._immediateVirtual = true;
      }
      if (isVirtual && !swiper._cssModeVirtualInitialSet && swiper.params.initialSlide > 0) {
        swiper._cssModeVirtualInitialSet = true;
        requestAnimationFrame(() => {
          wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = t;
        });
      } else {
        wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = t;
      }
      if (isVirtual) {
        requestAnimationFrame(() => {
          swiper.wrapperEl.style.scrollSnapType = '';
          swiper._immediateVirtual = false;
        });
      }
    } else {
      if (!swiper.support.smoothScroll) {
        (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.u)({
          swiper,
          targetPosition: t,
          side: isH ? 'left' : 'top'
        });
        return true;
      }
      wrapperEl.scrollTo({
        [isH ? 'left' : 'top']: t,
        behavior: 'smooth'
      });
    }
    return true;
  }
  const browser = getBrowser();
  const isSafari = browser.isSafari;
  if (isVirtual && !initial && isSafari && swiper.isElement) {
    swiper.virtual.update(false, false, slideIndex);
  }
  swiper.setTransition(speed);
  swiper.setTranslate(translate);
  swiper.updateActiveIndex(slideIndex);
  swiper.updateSlidesClasses();
  swiper.emit('beforeTransitionStart', speed, internal);
  swiper.transitionStart(runCallbacks, direction);
  if (speed === 0) {
    swiper.transitionEnd(runCallbacks, direction);
  } else if (!swiper.animating) {
    swiper.animating = true;
    if (!swiper.onSlideToWrapperTransitionEnd) {
      swiper.onSlideToWrapperTransitionEnd = function transitionEnd(e) {
        if (!swiper || swiper.destroyed) return;
        if (e.target !== this) return;
        swiper.wrapperEl.removeEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
        swiper.onSlideToWrapperTransitionEnd = null;
        delete swiper.onSlideToWrapperTransitionEnd;
        swiper.transitionEnd(runCallbacks, direction);
      };
    }
    swiper.wrapperEl.addEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
  }
  return true;
}

function slideToLoop(index, speed, runCallbacks, internal) {
  if (index === void 0) {
    index = 0;
  }
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  if (typeof index === 'string') {
    const indexAsNumber = parseInt(index, 10);
    index = indexAsNumber;
  }
  const swiper = this;
  if (swiper.destroyed) return;
  if (typeof speed === 'undefined') {
    speed = swiper.params.speed;
  }
  const gridEnabled = swiper.grid && swiper.params.grid && swiper.params.grid.rows > 1;
  let newIndex = index;
  if (swiper.params.loop) {
    if (swiper.virtual && swiper.params.virtual.enabled) {
      // eslint-disable-next-line
      newIndex = newIndex + swiper.virtual.slidesBefore;
    } else {
      let targetSlideIndex;
      if (gridEnabled) {
        const slideIndex = newIndex * swiper.params.grid.rows;
        targetSlideIndex = swiper.slides.find(slideEl => slideEl.getAttribute('data-swiper-slide-index') * 1 === slideIndex).column;
      } else {
        targetSlideIndex = swiper.getSlideIndexByData(newIndex);
      }
      const cols = gridEnabled ? Math.ceil(swiper.slides.length / swiper.params.grid.rows) : swiper.slides.length;
      const {
        centeredSlides
      } = swiper.params;
      let slidesPerView = swiper.params.slidesPerView;
      if (slidesPerView === 'auto') {
        slidesPerView = swiper.slidesPerViewDynamic();
      } else {
        slidesPerView = Math.ceil(parseFloat(swiper.params.slidesPerView, 10));
        if (centeredSlides && slidesPerView % 2 === 0) {
          slidesPerView = slidesPerView + 1;
        }
      }
      let needLoopFix = cols - targetSlideIndex < slidesPerView;
      if (centeredSlides) {
        needLoopFix = needLoopFix || targetSlideIndex < Math.ceil(slidesPerView / 2);
      }
      if (internal && centeredSlides && swiper.params.slidesPerView !== 'auto' && !gridEnabled) {
        needLoopFix = false;
      }
      if (needLoopFix) {
        const direction = centeredSlides ? targetSlideIndex < swiper.activeIndex ? 'prev' : 'next' : targetSlideIndex - swiper.activeIndex - 1 < swiper.params.slidesPerView ? 'next' : 'prev';
        swiper.loopFix({
          direction,
          slideTo: true,
          activeSlideIndex: direction === 'next' ? targetSlideIndex + 1 : targetSlideIndex - cols + 1,
          slideRealIndex: direction === 'next' ? swiper.realIndex : undefined
        });
      }
      if (gridEnabled) {
        const slideIndex = newIndex * swiper.params.grid.rows;
        newIndex = swiper.slides.find(slideEl => slideEl.getAttribute('data-swiper-slide-index') * 1 === slideIndex).column;
      } else {
        newIndex = swiper.getSlideIndexByData(newIndex);
      }
    }
  }
  requestAnimationFrame(() => {
    swiper.slideTo(newIndex, speed, runCallbacks, internal);
  });
  return swiper;
}

/* eslint no-unused-vars: "off" */
function slideNext(speed, runCallbacks, internal) {
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  const swiper = this;
  const {
    enabled,
    params,
    animating
  } = swiper;
  if (!enabled || swiper.destroyed) return swiper;
  if (typeof speed === 'undefined') {
    speed = swiper.params.speed;
  }
  let perGroup = params.slidesPerGroup;
  if (params.slidesPerView === 'auto' && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
    perGroup = Math.max(swiper.slidesPerViewDynamic('current', true), 1);
  }
  const increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : perGroup;
  const isVirtual = swiper.virtual && params.virtual.enabled;
  if (params.loop) {
    if (animating && !isVirtual && params.loopPreventsSliding) return false;
    swiper.loopFix({
      direction: 'next'
    });
    // eslint-disable-next-line
    swiper._clientLeft = swiper.wrapperEl.clientLeft;
    if (swiper.activeIndex === swiper.slides.length - 1 && params.cssMode) {
      requestAnimationFrame(() => {
        swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
      });
      return true;
    }
  }
  if (params.rewind && swiper.isEnd) {
    return swiper.slideTo(0, speed, runCallbacks, internal);
  }
  return swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
}

/* eslint no-unused-vars: "off" */
function slidePrev(speed, runCallbacks, internal) {
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  const swiper = this;
  const {
    params,
    snapGrid,
    slidesGrid,
    rtlTranslate,
    enabled,
    animating
  } = swiper;
  if (!enabled || swiper.destroyed) return swiper;
  if (typeof speed === 'undefined') {
    speed = swiper.params.speed;
  }
  const isVirtual = swiper.virtual && params.virtual.enabled;
  if (params.loop) {
    if (animating && !isVirtual && params.loopPreventsSliding) return false;
    swiper.loopFix({
      direction: 'prev'
    });
    // eslint-disable-next-line
    swiper._clientLeft = swiper.wrapperEl.clientLeft;
  }
  const translate = rtlTranslate ? swiper.translate : -swiper.translate;
  function normalize(val) {
    if (val < 0) return -Math.floor(Math.abs(val));
    return Math.floor(val);
  }
  const normalizedTranslate = normalize(translate);
  const normalizedSnapGrid = snapGrid.map(val => normalize(val));
  const isFreeMode = params.freeMode && params.freeMode.enabled;
  let prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
  if (typeof prevSnap === 'undefined' && (params.cssMode || isFreeMode)) {
    let prevSnapIndex;
    snapGrid.forEach((snap, snapIndex) => {
      if (normalizedTranslate >= snap) {
        // prevSnap = snap;
        prevSnapIndex = snapIndex;
      }
    });
    if (typeof prevSnapIndex !== 'undefined') {
      prevSnap = isFreeMode ? snapGrid[prevSnapIndex] : snapGrid[prevSnapIndex > 0 ? prevSnapIndex - 1 : prevSnapIndex];
    }
  }
  let prevIndex = 0;
  if (typeof prevSnap !== 'undefined') {
    prevIndex = slidesGrid.indexOf(prevSnap);
    if (prevIndex < 0) prevIndex = swiper.activeIndex - 1;
    if (params.slidesPerView === 'auto' && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
      prevIndex = prevIndex - swiper.slidesPerViewDynamic('previous', true) + 1;
      prevIndex = Math.max(prevIndex, 0);
    }
  }
  if (params.rewind && swiper.isBeginning) {
    const lastIndex = swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
    return swiper.slideTo(lastIndex, speed, runCallbacks, internal);
  } else if (params.loop && swiper.activeIndex === 0 && params.cssMode) {
    requestAnimationFrame(() => {
      swiper.slideTo(prevIndex, speed, runCallbacks, internal);
    });
    return true;
  }
  return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
}

/* eslint no-unused-vars: "off" */
function slideReset(speed, runCallbacks, internal) {
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  const swiper = this;
  if (swiper.destroyed) return;
  if (typeof speed === 'undefined') {
    speed = swiper.params.speed;
  }
  return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
}

/* eslint no-unused-vars: "off" */
function slideToClosest(speed, runCallbacks, internal, threshold) {
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }
  if (threshold === void 0) {
    threshold = 0.5;
  }
  const swiper = this;
  if (swiper.destroyed) return;
  if (typeof speed === 'undefined') {
    speed = swiper.params.speed;
  }
  let index = swiper.activeIndex;
  const skip = Math.min(swiper.params.slidesPerGroupSkip, index);
  const snapIndex = skip + Math.floor((index - skip) / swiper.params.slidesPerGroup);
  const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
  if (translate >= swiper.snapGrid[snapIndex]) {
    // The current translate is on or after the current snap index, so the choice
    // is between the current index and the one after it.
    const currentSnap = swiper.snapGrid[snapIndex];
    const nextSnap = swiper.snapGrid[snapIndex + 1];
    if (translate - currentSnap > (nextSnap - currentSnap) * threshold) {
      index += swiper.params.slidesPerGroup;
    }
  } else {
    // The current translate is before the current snap index, so the choice
    // is between the current index and the one before it.
    const prevSnap = swiper.snapGrid[snapIndex - 1];
    const currentSnap = swiper.snapGrid[snapIndex];
    if (translate - prevSnap <= (currentSnap - prevSnap) * threshold) {
      index -= swiper.params.slidesPerGroup;
    }
  }
  index = Math.max(index, 0);
  index = Math.min(index, swiper.slidesGrid.length - 1);
  return swiper.slideTo(index, speed, runCallbacks, internal);
}

function slideToClickedSlide() {
  const swiper = this;
  if (swiper.destroyed) return;
  const {
    params,
    slidesEl
  } = swiper;
  const slidesPerView = params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : params.slidesPerView;
  let slideToIndex = swiper.getSlideIndexWhenGrid(swiper.clickedIndex);
  let realIndex;
  const slideSelector = swiper.isElement ? `swiper-slide` : `.${params.slideClass}`;
  const isGrid = swiper.grid && swiper.params.grid && swiper.params.grid.rows > 1;
  if (params.loop) {
    if (swiper.animating) return;
    realIndex = parseInt(swiper.clickedSlide.getAttribute('data-swiper-slide-index'), 10);
    if (params.centeredSlides) {
      swiper.slideToLoop(realIndex);
    } else if (slideToIndex > (isGrid ? (swiper.slides.length - slidesPerView) / 2 - (swiper.params.grid.rows - 1) : swiper.slides.length - slidesPerView)) {
      swiper.loopFix();
      slideToIndex = swiper.getSlideIndex((0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.e)(slidesEl, `${slideSelector}[data-swiper-slide-index="${realIndex}"]`)[0]);
      (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.n)(() => {
        swiper.slideTo(slideToIndex);
      });
    } else {
      swiper.slideTo(slideToIndex);
    }
  } else {
    swiper.slideTo(slideToIndex);
  }
}

var slide = {
  slideTo,
  slideToLoop,
  slideNext,
  slidePrev,
  slideReset,
  slideToClosest,
  slideToClickedSlide
};

function loopCreate(slideRealIndex, initial) {
  const swiper = this;
  const {
    params,
    slidesEl
  } = swiper;
  if (!params.loop || swiper.virtual && swiper.params.virtual.enabled) return;
  const initSlides = () => {
    const slides = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.e)(slidesEl, `.${params.slideClass}, swiper-slide`);
    slides.forEach((el, index) => {
      el.setAttribute('data-swiper-slide-index', index);
    });
  };
  const clearBlankSlides = () => {
    const slides = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.e)(slidesEl, `.${params.slideBlankClass}`);
    slides.forEach(el => {
      el.remove();
    });
    if (slides.length > 0) {
      swiper.recalcSlides();
      swiper.updateSlides();
    }
  };
  const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
  if (params.loopAddBlankSlides && (params.slidesPerGroup > 1 || gridEnabled)) {
    clearBlankSlides();
  }
  const slidesPerGroup = params.slidesPerGroup * (gridEnabled ? params.grid.rows : 1);
  const shouldFillGroup = swiper.slides.length % slidesPerGroup !== 0;
  const shouldFillGrid = gridEnabled && swiper.slides.length % params.grid.rows !== 0;
  const addBlankSlides = amountOfSlides => {
    for (let i = 0; i < amountOfSlides; i += 1) {
      const slideEl = swiper.isElement ? (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.c)('swiper-slide', [params.slideBlankClass]) : (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.c)('div', [params.slideClass, params.slideBlankClass]);
      swiper.slidesEl.append(slideEl);
    }
  };
  if (shouldFillGroup) {
    if (params.loopAddBlankSlides) {
      const slidesToAdd = slidesPerGroup - swiper.slides.length % slidesPerGroup;
      addBlankSlides(slidesToAdd);
      swiper.recalcSlides();
      swiper.updateSlides();
    } else {
      (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.v)('Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)');
    }
    initSlides();
  } else if (shouldFillGrid) {
    if (params.loopAddBlankSlides) {
      const slidesToAdd = params.grid.rows - swiper.slides.length % params.grid.rows;
      addBlankSlides(slidesToAdd);
      swiper.recalcSlides();
      swiper.updateSlides();
    } else {
      (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.v)('Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)');
    }
    initSlides();
  } else {
    initSlides();
  }
  swiper.loopFix({
    slideRealIndex,
    direction: params.centeredSlides ? undefined : 'next',
    initial
  });
}

function loopFix(_temp) {
  let {
    slideRealIndex,
    slideTo = true,
    direction,
    setTranslate,
    activeSlideIndex,
    initial,
    byController,
    byMousewheel
  } = _temp === void 0 ? {} : _temp;
  const swiper = this;
  if (!swiper.params.loop) return;
  swiper.emit('beforeLoopFix');
  const {
    slides,
    allowSlidePrev,
    allowSlideNext,
    slidesEl,
    params
  } = swiper;
  const {
    centeredSlides,
    initialSlide
  } = params;
  swiper.allowSlidePrev = true;
  swiper.allowSlideNext = true;
  if (swiper.virtual && params.virtual.enabled) {
    if (slideTo) {
      if (!params.centeredSlides && swiper.snapIndex === 0) {
        swiper.slideTo(swiper.virtual.slides.length, 0, false, true);
      } else if (params.centeredSlides && swiper.snapIndex < params.slidesPerView) {
        swiper.slideTo(swiper.virtual.slides.length + swiper.snapIndex, 0, false, true);
      } else if (swiper.snapIndex === swiper.snapGrid.length - 1) {
        swiper.slideTo(swiper.virtual.slidesBefore, 0, false, true);
      }
    }
    swiper.allowSlidePrev = allowSlidePrev;
    swiper.allowSlideNext = allowSlideNext;
    swiper.emit('loopFix');
    return;
  }
  let slidesPerView = params.slidesPerView;
  if (slidesPerView === 'auto') {
    slidesPerView = swiper.slidesPerViewDynamic();
  } else {
    slidesPerView = Math.ceil(parseFloat(params.slidesPerView, 10));
    if (centeredSlides && slidesPerView % 2 === 0) {
      slidesPerView = slidesPerView + 1;
    }
  }
  const slidesPerGroup = params.slidesPerGroupAuto ? slidesPerView : params.slidesPerGroup;
  let loopedSlides = centeredSlides ? Math.max(slidesPerGroup, Math.ceil(slidesPerView / 2)) : slidesPerGroup;
  if (loopedSlides % slidesPerGroup !== 0) {
    loopedSlides += slidesPerGroup - loopedSlides % slidesPerGroup;
  }
  loopedSlides += params.loopAdditionalSlides;
  swiper.loopedSlides = loopedSlides;
  const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
  if (slides.length < slidesPerView + loopedSlides || swiper.params.effect === 'cards' && slides.length < slidesPerView + loopedSlides * 2) {
    (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.v)('Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters');
  } else if (gridEnabled && params.grid.fill === 'row') {
    (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.v)('Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`');
  }
  const prependSlidesIndexes = [];
  const appendSlidesIndexes = [];
  const cols = gridEnabled ? Math.ceil(slides.length / params.grid.rows) : slides.length;
  const isInitialOverflow = initial && cols - initialSlide < slidesPerView && !centeredSlides;
  let activeIndex = isInitialOverflow ? initialSlide : swiper.activeIndex;
  if (typeof activeSlideIndex === 'undefined') {
    activeSlideIndex = swiper.getSlideIndex(slides.find(el => el.classList.contains(params.slideActiveClass)));
  } else {
    activeIndex = activeSlideIndex;
  }
  const isNext = direction === 'next' || !direction;
  const isPrev = direction === 'prev' || !direction;
  let slidesPrepended = 0;
  let slidesAppended = 0;
  const activeColIndex = gridEnabled ? slides[activeSlideIndex].column : activeSlideIndex;
  const activeColIndexWithShift = activeColIndex + (centeredSlides && typeof setTranslate === 'undefined' ? -slidesPerView / 2 + 0.5 : 0);
  // prepend last slides before start
  if (activeColIndexWithShift < loopedSlides) {
    slidesPrepended = Math.max(loopedSlides - activeColIndexWithShift, slidesPerGroup);
    for (let i = 0; i < loopedSlides - activeColIndexWithShift; i += 1) {
      const index = i - Math.floor(i / cols) * cols;
      if (gridEnabled) {
        const colIndexToPrepend = cols - index - 1;
        for (let i = slides.length - 1; i >= 0; i -= 1) {
          if (slides[i].column === colIndexToPrepend) prependSlidesIndexes.push(i);
        }
        // slides.forEach((slide, slideIndex) => {
        //   if (slide.column === colIndexToPrepend) prependSlidesIndexes.push(slideIndex);
        // });
      } else {
        prependSlidesIndexes.push(cols - index - 1);
      }
    }
  } else if (activeColIndexWithShift + slidesPerView > cols - loopedSlides) {
    slidesAppended = Math.max(activeColIndexWithShift - (cols - loopedSlides * 2), slidesPerGroup);
    if (isInitialOverflow) {
      slidesAppended = Math.max(slidesAppended, slidesPerView - cols + initialSlide + 1);
    }
    for (let i = 0; i < slidesAppended; i += 1) {
      const index = i - Math.floor(i / cols) * cols;
      if (gridEnabled) {
        slides.forEach((slide, slideIndex) => {
          if (slide.column === index) appendSlidesIndexes.push(slideIndex);
        });
      } else {
        appendSlidesIndexes.push(index);
      }
    }
  }
  swiper.__preventObserver__ = true;
  requestAnimationFrame(() => {
    swiper.__preventObserver__ = false;
  });
  if (swiper.params.effect === 'cards' && slides.length < slidesPerView + loopedSlides * 2) {
    if (appendSlidesIndexes.includes(activeSlideIndex)) {
      appendSlidesIndexes.splice(appendSlidesIndexes.indexOf(activeSlideIndex), 1);
    }
    if (prependSlidesIndexes.includes(activeSlideIndex)) {
      prependSlidesIndexes.splice(prependSlidesIndexes.indexOf(activeSlideIndex), 1);
    }
  }
  if (isPrev) {
    prependSlidesIndexes.forEach(index => {
      slides[index].swiperLoopMoveDOM = true;
      slidesEl.prepend(slides[index]);
      slides[index].swiperLoopMoveDOM = false;
    });
  }
  if (isNext) {
    appendSlidesIndexes.forEach(index => {
      slides[index].swiperLoopMoveDOM = true;
      slidesEl.append(slides[index]);
      slides[index].swiperLoopMoveDOM = false;
    });
  }
  swiper.recalcSlides();
  if (params.slidesPerView === 'auto') {
    swiper.updateSlides();
  } else if (gridEnabled && (prependSlidesIndexes.length > 0 && isPrev || appendSlidesIndexes.length > 0 && isNext)) {
    swiper.slides.forEach((slide, slideIndex) => {
      swiper.grid.updateSlide(slideIndex, slide, swiper.slides);
    });
  }
  if (params.watchSlidesProgress) {
    swiper.updateSlidesOffset();
  }
  if (slideTo) {
    if (prependSlidesIndexes.length > 0 && isPrev) {
      if (typeof slideRealIndex === 'undefined') {
        const currentSlideTranslate = swiper.slidesGrid[activeIndex];
        const newSlideTranslate = swiper.slidesGrid[activeIndex + slidesPrepended];
        const diff = newSlideTranslate - currentSlideTranslate;
        if (byMousewheel) {
          swiper.setTranslate(swiper.translate - diff);
        } else {
          swiper.slideTo(activeIndex + Math.ceil(slidesPrepended), 0, false, true);
          if (setTranslate) {
            swiper.touchEventsData.startTranslate = swiper.touchEventsData.startTranslate - diff;
            swiper.touchEventsData.currentTranslate = swiper.touchEventsData.currentTranslate - diff;
          }
        }
      } else {
        if (setTranslate) {
          const shift = gridEnabled ? prependSlidesIndexes.length / params.grid.rows : prependSlidesIndexes.length;
          swiper.slideTo(swiper.activeIndex + shift, 0, false, true);
          swiper.touchEventsData.currentTranslate = swiper.translate;
        }
      }
    } else if (appendSlidesIndexes.length > 0 && isNext) {
      if (typeof slideRealIndex === 'undefined') {
        const currentSlideTranslate = swiper.slidesGrid[activeIndex];
        const newSlideTranslate = swiper.slidesGrid[activeIndex - slidesAppended];
        const diff = newSlideTranslate - currentSlideTranslate;
        if (byMousewheel) {
          swiper.setTranslate(swiper.translate - diff);
        } else {
          swiper.slideTo(activeIndex - slidesAppended, 0, false, true);
          if (setTranslate) {
            swiper.touchEventsData.startTranslate = swiper.touchEventsData.startTranslate - diff;
            swiper.touchEventsData.currentTranslate = swiper.touchEventsData.currentTranslate - diff;
          }
        }
      } else {
        const shift = gridEnabled ? appendSlidesIndexes.length / params.grid.rows : appendSlidesIndexes.length;
        swiper.slideTo(swiper.activeIndex - shift, 0, false, true);
      }
    }
  }
  swiper.allowSlidePrev = allowSlidePrev;
  swiper.allowSlideNext = allowSlideNext;
  if (swiper.controller && swiper.controller.control && !byController) {
    const loopParams = {
      slideRealIndex,
      direction,
      setTranslate,
      activeSlideIndex,
      byController: true
    };
    if (Array.isArray(swiper.controller.control)) {
      swiper.controller.control.forEach(c => {
        if (!c.destroyed && c.params.loop) c.loopFix({
          ...loopParams,
          slideTo: c.params.slidesPerView === params.slidesPerView ? slideTo : false
        });
      });
    } else if (swiper.controller.control instanceof swiper.constructor && swiper.controller.control.params.loop) {
      swiper.controller.control.loopFix({
        ...loopParams,
        slideTo: swiper.controller.control.params.slidesPerView === params.slidesPerView ? slideTo : false
      });
    }
  }
  swiper.emit('loopFix');
}

function loopDestroy() {
  const swiper = this;
  const {
    params,
    slidesEl
  } = swiper;
  if (!params.loop || !slidesEl || swiper.virtual && swiper.params.virtual.enabled) return;
  swiper.recalcSlides();
  const newSlidesOrder = [];
  swiper.slides.forEach(slideEl => {
    const index = typeof slideEl.swiperSlideIndex === 'undefined' ? slideEl.getAttribute('data-swiper-slide-index') * 1 : slideEl.swiperSlideIndex;
    newSlidesOrder[index] = slideEl;
  });
  swiper.slides.forEach(slideEl => {
    slideEl.removeAttribute('data-swiper-slide-index');
  });
  newSlidesOrder.forEach(slideEl => {
    slidesEl.append(slideEl);
  });
  swiper.recalcSlides();
  swiper.slideTo(swiper.realIndex, 0);
}

var loop = {
  loopCreate,
  loopFix,
  loopDestroy
};

function setGrabCursor(moving) {
  const swiper = this;
  if (!swiper.params.simulateTouch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
  const el = swiper.params.touchEventsTarget === 'container' ? swiper.el : swiper.wrapperEl;
  if (swiper.isElement) {
    swiper.__preventObserver__ = true;
  }
  el.style.cursor = 'move';
  el.style.cursor = moving ? 'grabbing' : 'grab';
  if (swiper.isElement) {
    requestAnimationFrame(() => {
      swiper.__preventObserver__ = false;
    });
  }
}

function unsetGrabCursor() {
  const swiper = this;
  if (swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) {
    return;
  }
  if (swiper.isElement) {
    swiper.__preventObserver__ = true;
  }
  swiper[swiper.params.touchEventsTarget === 'container' ? 'el' : 'wrapperEl'].style.cursor = '';
  if (swiper.isElement) {
    requestAnimationFrame(() => {
      swiper.__preventObserver__ = false;
    });
  }
}

var grabCursor = {
  setGrabCursor,
  unsetGrabCursor
};

// Modified from https://stackoverflow.com/questions/54520554/custom-element-getrootnode-closest-function-crossing-multiple-parent-shadowd
function closestElement(selector, base) {
  if (base === void 0) {
    base = this;
  }
  function __closestFrom(el) {
    if (!el || el === (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.g)() || el === (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)()) return null;
    if (el.assignedSlot) el = el.assignedSlot;
    const found = el.closest(selector);
    if (!found && !el.getRootNode) {
      return null;
    }
    return found || __closestFrom(el.getRootNode().host);
  }
  return __closestFrom(base);
}
function preventEdgeSwipe(swiper, event, startX) {
  const window = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
  const {
    params
  } = swiper;
  const edgeSwipeDetection = params.edgeSwipeDetection;
  const edgeSwipeThreshold = params.edgeSwipeThreshold;
  if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= window.innerWidth - edgeSwipeThreshold)) {
    if (edgeSwipeDetection === 'prevent') {
      event.preventDefault();
      return true;
    }
    return false;
  }
  return true;
}
function onTouchStart(event) {
  const swiper = this;
  const document = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.g)();
  let e = event;
  if (e.originalEvent) e = e.originalEvent;
  const data = swiper.touchEventsData;
  if (e.type === 'pointerdown') {
    if (data.pointerId !== null && data.pointerId !== e.pointerId) {
      return;
    }
    data.pointerId = e.pointerId;
  } else if (e.type === 'touchstart' && e.targetTouches.length === 1) {
    data.touchId = e.targetTouches[0].identifier;
  }
  if (e.type === 'touchstart') {
    // don't proceed touch event
    preventEdgeSwipe(swiper, e, e.targetTouches[0].pageX);
    return;
  }
  const {
    params,
    touches,
    enabled
  } = swiper;
  if (!enabled) return;
  if (!params.simulateTouch && e.pointerType === 'mouse') return;
  if (swiper.animating && params.preventInteractionOnTransition) {
    return;
  }
  if (!swiper.animating && params.cssMode && params.loop) {
    swiper.loopFix();
  }
  let targetEl = e.target;
  if (params.touchEventsTarget === 'wrapper') {
    if (!(0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.w)(targetEl, swiper.wrapperEl)) return;
  }
  if ('which' in e && e.which === 3) return;
  if ('button' in e && e.button > 0) return;
  if (data.isTouched && data.isMoved) return;

  // change target el for shadow root component
  const swipingClassHasValue = !!params.noSwipingClass && params.noSwipingClass !== '';
  // eslint-disable-next-line
  const eventPath = e.composedPath ? e.composedPath() : e.path;
  if (swipingClassHasValue && e.target && e.target.shadowRoot && eventPath) {
    targetEl = eventPath[0];
  }
  const noSwipingSelector = params.noSwipingSelector ? params.noSwipingSelector : `.${params.noSwipingClass}`;
  const isTargetShadow = !!(e.target && e.target.shadowRoot);

  // use closestElement for shadow root element to get the actual closest for nested shadow root element
  if (params.noSwiping && (isTargetShadow ? closestElement(noSwipingSelector, targetEl) : targetEl.closest(noSwipingSelector))) {
    swiper.allowClick = true;
    return;
  }
  if (params.swipeHandler) {
    if (!targetEl.closest(params.swipeHandler)) return;
  }
  touches.currentX = e.pageX;
  touches.currentY = e.pageY;
  const startX = touches.currentX;
  const startY = touches.currentY;

  // Do NOT start if iOS edge swipe is detected. Otherwise iOS app cannot swipe-to-go-back anymore

  if (!preventEdgeSwipe(swiper, e, startX)) {
    return;
  }
  Object.assign(data, {
    isTouched: true,
    isMoved: false,
    allowTouchCallbacks: true,
    isScrolling: undefined,
    startMoving: undefined
  });
  touches.startX = startX;
  touches.startY = startY;
  data.touchStartTime = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.f)();
  swiper.allowClick = true;
  swiper.updateSize();
  swiper.swipeDirection = undefined;
  if (params.threshold > 0) data.allowThresholdMove = false;
  let preventDefault = true;
  if (targetEl.matches(data.focusableElements)) {
    preventDefault = false;
    if (targetEl.nodeName === 'SELECT') {
      data.isTouched = false;
    }
  }
  if (document.activeElement && document.activeElement.matches(data.focusableElements) && document.activeElement !== targetEl && (e.pointerType === 'mouse' || e.pointerType !== 'mouse' && !targetEl.matches(data.focusableElements))) {
    document.activeElement.blur();
  }
  const shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;
  if ((params.touchStartForcePreventDefault || shouldPreventDefault) && !targetEl.isContentEditable) {
    e.preventDefault();
  }
  if (params.freeMode && params.freeMode.enabled && swiper.freeMode && swiper.animating && !params.cssMode) {
    swiper.freeMode.onTouchStart();
  }
  swiper.emit('touchStart', e);
}

function onTouchMove(event) {
  const document = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.g)();
  const swiper = this;
  const data = swiper.touchEventsData;
  const {
    params,
    touches,
    rtlTranslate: rtl,
    enabled
  } = swiper;
  if (!enabled) return;
  if (!params.simulateTouch && event.pointerType === 'mouse') return;
  let e = event;
  if (e.originalEvent) e = e.originalEvent;
  if (e.type === 'pointermove') {
    if (data.touchId !== null) return; // return from pointer if we use touch
    const id = e.pointerId;
    if (id !== data.pointerId) return;
  }
  let targetTouch;
  if (e.type === 'touchmove') {
    targetTouch = [...e.changedTouches].find(t => t.identifier === data.touchId);
    if (!targetTouch || targetTouch.identifier !== data.touchId) return;
  } else {
    targetTouch = e;
  }
  if (!data.isTouched) {
    if (data.startMoving && data.isScrolling) {
      swiper.emit('touchMoveOpposite', e);
    }
    return;
  }
  const pageX = targetTouch.pageX;
  const pageY = targetTouch.pageY;
  if (e.preventedByNestedSwiper) {
    touches.startX = pageX;
    touches.startY = pageY;
    return;
  }
  if (!swiper.allowTouchMove) {
    if (!e.target.matches(data.focusableElements)) {
      swiper.allowClick = false;
    }
    if (data.isTouched) {
      Object.assign(touches, {
        startX: pageX,
        startY: pageY,
        currentX: pageX,
        currentY: pageY
      });
      data.touchStartTime = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.f)();
    }
    return;
  }
  if (params.touchReleaseOnEdges && !params.loop) {
    if (swiper.isVertical()) {
      // Vertical
      if (pageY < touches.startY && swiper.translate <= swiper.maxTranslate() || pageY > touches.startY && swiper.translate >= swiper.minTranslate()) {
        data.isTouched = false;
        data.isMoved = false;
        return;
      }
    } else if (rtl && (pageX > touches.startX && -swiper.translate <= swiper.maxTranslate() || pageX < touches.startX && -swiper.translate >= swiper.minTranslate())) {
      return;
    } else if (!rtl && (pageX < touches.startX && swiper.translate <= swiper.maxTranslate() || pageX > touches.startX && swiper.translate >= swiper.minTranslate())) {
      return;
    }
  }
  if (document.activeElement && document.activeElement.matches(data.focusableElements) && document.activeElement !== e.target && e.pointerType !== 'mouse') {
    document.activeElement.blur();
  }
  if (document.activeElement) {
    if (e.target === document.activeElement && e.target.matches(data.focusableElements)) {
      data.isMoved = true;
      swiper.allowClick = false;
      return;
    }
  }
  if (data.allowTouchCallbacks) {
    swiper.emit('touchMove', e);
  }
  touches.previousX = touches.currentX;
  touches.previousY = touches.currentY;
  touches.currentX = pageX;
  touches.currentY = pageY;
  const diffX = touches.currentX - touches.startX;
  const diffY = touches.currentY - touches.startY;
  if (swiper.params.threshold && Math.sqrt(diffX ** 2 + diffY ** 2) < swiper.params.threshold) return;
  if (typeof data.isScrolling === 'undefined') {
    let touchAngle;
    if (swiper.isHorizontal() && touches.currentY === touches.startY || swiper.isVertical() && touches.currentX === touches.startX) {
      data.isScrolling = false;
    } else {
      // eslint-disable-next-line
      if (diffX * diffX + diffY * diffY >= 25) {
        touchAngle = Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180 / Math.PI;
        data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;
      }
    }
  }
  if (data.isScrolling) {
    swiper.emit('touchMoveOpposite', e);
  }
  if (typeof data.startMoving === 'undefined') {
    if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) {
      data.startMoving = true;
    }
  }
  if (data.isScrolling || e.type === 'touchmove' && data.preventTouchMoveFromPointerMove) {
    data.isTouched = false;
    return;
  }
  if (!data.startMoving) {
    return;
  }
  swiper.allowClick = false;
  if (!params.cssMode && e.cancelable) {
    e.preventDefault();
  }
  if (params.touchMoveStopPropagation && !params.nested) {
    e.stopPropagation();
  }
  let diff = swiper.isHorizontal() ? diffX : diffY;
  let touchesDiff = swiper.isHorizontal() ? touches.currentX - touches.previousX : touches.currentY - touches.previousY;
  if (params.oneWayMovement) {
    diff = Math.abs(diff) * (rtl ? 1 : -1);
    touchesDiff = Math.abs(touchesDiff) * (rtl ? 1 : -1);
  }
  touches.diff = diff;
  diff *= params.touchRatio;
  if (rtl) {
    diff = -diff;
    touchesDiff = -touchesDiff;
  }
  const prevTouchesDirection = swiper.touchesDirection;
  swiper.swipeDirection = diff > 0 ? 'prev' : 'next';
  swiper.touchesDirection = touchesDiff > 0 ? 'prev' : 'next';
  const isLoop = swiper.params.loop && !params.cssMode;
  const allowLoopFix = swiper.touchesDirection === 'next' && swiper.allowSlideNext || swiper.touchesDirection === 'prev' && swiper.allowSlidePrev;
  if (!data.isMoved) {
    if (isLoop && allowLoopFix) {
      swiper.loopFix({
        direction: swiper.swipeDirection
      });
    }
    data.startTranslate = swiper.getTranslate();
    swiper.setTransition(0);
    if (swiper.animating) {
      const evt = new window.CustomEvent('transitionend', {
        bubbles: true,
        cancelable: true,
        detail: {
          bySwiperTouchMove: true
        }
      });
      swiper.wrapperEl.dispatchEvent(evt);
    }
    data.allowMomentumBounce = false;
    // Grab Cursor
    if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
      swiper.setGrabCursor(true);
    }
    swiper.emit('sliderFirstMove', e);
  }
  let loopFixed;
  new Date().getTime();
  if (params._loopSwapReset !== false && data.isMoved && data.allowThresholdMove && prevTouchesDirection !== swiper.touchesDirection && isLoop && allowLoopFix && Math.abs(diff) >= 1) {
    Object.assign(touches, {
      startX: pageX,
      startY: pageY,
      currentX: pageX,
      currentY: pageY,
      startTranslate: data.currentTranslate
    });
    data.loopSwapReset = true;
    data.startTranslate = data.currentTranslate;
    return;
  }
  swiper.emit('sliderMove', e);
  data.isMoved = true;
  data.currentTranslate = diff + data.startTranslate;
  let disableParentSwiper = true;
  let resistanceRatio = params.resistanceRatio;
  if (params.touchReleaseOnEdges) {
    resistanceRatio = 0;
  }
  if (diff > 0) {
    if (isLoop && allowLoopFix && !loopFixed && data.allowThresholdMove && data.currentTranslate > (params.centeredSlides ? swiper.minTranslate() - swiper.slidesSizesGrid[swiper.activeIndex + 1] - (params.slidesPerView !== 'auto' && swiper.slides.length - params.slidesPerView >= 2 ? swiper.slidesSizesGrid[swiper.activeIndex + 1] + swiper.params.spaceBetween : 0) - swiper.params.spaceBetween : swiper.minTranslate())) {
      swiper.loopFix({
        direction: 'prev',
        setTranslate: true,
        activeSlideIndex: 0
      });
    }
    if (data.currentTranslate > swiper.minTranslate()) {
      disableParentSwiper = false;
      if (params.resistance) {
        data.currentTranslate = swiper.minTranslate() - 1 + (-swiper.minTranslate() + data.startTranslate + diff) ** resistanceRatio;
      }
    }
  } else if (diff < 0) {
    if (isLoop && allowLoopFix && !loopFixed && data.allowThresholdMove && data.currentTranslate < (params.centeredSlides ? swiper.maxTranslate() + swiper.slidesSizesGrid[swiper.slidesSizesGrid.length - 1] + swiper.params.spaceBetween + (params.slidesPerView !== 'auto' && swiper.slides.length - params.slidesPerView >= 2 ? swiper.slidesSizesGrid[swiper.slidesSizesGrid.length - 1] + swiper.params.spaceBetween : 0) : swiper.maxTranslate())) {
      swiper.loopFix({
        direction: 'next',
        setTranslate: true,
        activeSlideIndex: swiper.slides.length - (params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : Math.ceil(parseFloat(params.slidesPerView, 10)))
      });
    }
    if (data.currentTranslate < swiper.maxTranslate()) {
      disableParentSwiper = false;
      if (params.resistance) {
        data.currentTranslate = swiper.maxTranslate() + 1 - (swiper.maxTranslate() - data.startTranslate - diff) ** resistanceRatio;
      }
    }
  }
  if (disableParentSwiper) {
    e.preventedByNestedSwiper = true;
  }

  // Directions locks
  if (!swiper.allowSlideNext && swiper.swipeDirection === 'next' && data.currentTranslate < data.startTranslate) {
    data.currentTranslate = data.startTranslate;
  }
  if (!swiper.allowSlidePrev && swiper.swipeDirection === 'prev' && data.currentTranslate > data.startTranslate) {
    data.currentTranslate = data.startTranslate;
  }
  if (!swiper.allowSlidePrev && !swiper.allowSlideNext) {
    data.currentTranslate = data.startTranslate;
  }

  // Threshold
  if (params.threshold > 0) {
    if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
      if (!data.allowThresholdMove) {
        data.allowThresholdMove = true;
        touches.startX = touches.currentX;
        touches.startY = touches.currentY;
        data.currentTranslate = data.startTranslate;
        touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
        return;
      }
    } else {
      data.currentTranslate = data.startTranslate;
      return;
    }
  }
  if (!params.followFinger || params.cssMode) return;

  // Update active index in free mode
  if (params.freeMode && params.freeMode.enabled && swiper.freeMode || params.watchSlidesProgress) {
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
  }
  if (params.freeMode && params.freeMode.enabled && swiper.freeMode) {
    swiper.freeMode.onTouchMove();
  }
  // Update progress
  swiper.updateProgress(data.currentTranslate);
  // Update translate
  swiper.setTranslate(data.currentTranslate);
}

function onTouchEnd(event) {
  const swiper = this;
  const data = swiper.touchEventsData;
  let e = event;
  if (e.originalEvent) e = e.originalEvent;
  let targetTouch;
  const isTouchEvent = e.type === 'touchend' || e.type === 'touchcancel';
  if (!isTouchEvent) {
    if (data.touchId !== null) return; // return from pointer if we use touch
    if (e.pointerId !== data.pointerId) return;
    targetTouch = e;
  } else {
    targetTouch = [...e.changedTouches].find(t => t.identifier === data.touchId);
    if (!targetTouch || targetTouch.identifier !== data.touchId) return;
  }
  if (['pointercancel', 'pointerout', 'pointerleave', 'contextmenu'].includes(e.type)) {
    const proceed = ['pointercancel', 'contextmenu'].includes(e.type) && (swiper.browser.isSafari || swiper.browser.isWebView);
    if (!proceed) {
      return;
    }
  }
  data.pointerId = null;
  data.touchId = null;
  const {
    params,
    touches,
    rtlTranslate: rtl,
    slidesGrid,
    enabled
  } = swiper;
  if (!enabled) return;
  if (!params.simulateTouch && e.pointerType === 'mouse') return;
  if (data.allowTouchCallbacks) {
    swiper.emit('touchEnd', e);
  }
  data.allowTouchCallbacks = false;
  if (!data.isTouched) {
    if (data.isMoved && params.grabCursor) {
      swiper.setGrabCursor(false);
    }
    data.isMoved = false;
    data.startMoving = false;
    return;
  }

  // Return Grab Cursor
  if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
    swiper.setGrabCursor(false);
  }

  // Time diff
  const touchEndTime = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.f)();
  const timeDiff = touchEndTime - data.touchStartTime;

  // Tap, doubleTap, Click
  if (swiper.allowClick) {
    const pathTree = e.path || e.composedPath && e.composedPath();
    swiper.updateClickedSlide(pathTree && pathTree[0] || e.target, pathTree);
    swiper.emit('tap click', e);
    if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) {
      swiper.emit('doubleTap doubleClick', e);
    }
  }
  data.lastClickTime = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.f)();
  (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.n)(() => {
    if (!swiper.destroyed) swiper.allowClick = true;
  });
  if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 && !data.loopSwapReset || data.currentTranslate === data.startTranslate && !data.loopSwapReset) {
    data.isTouched = false;
    data.isMoved = false;
    data.startMoving = false;
    return;
  }
  data.isTouched = false;
  data.isMoved = false;
  data.startMoving = false;
  let currentPos;
  if (params.followFinger) {
    currentPos = rtl ? swiper.translate : -swiper.translate;
  } else {
    currentPos = -data.currentTranslate;
  }
  if (params.cssMode) {
    return;
  }
  if (params.freeMode && params.freeMode.enabled) {
    swiper.freeMode.onTouchEnd({
      currentPos
    });
    return;
  }

  // Find current slide
  const swipeToLast = currentPos >= -swiper.maxTranslate() && !swiper.params.loop;
  let stopIndex = 0;
  let groupSize = swiper.slidesSizesGrid[0];
  for (let i = 0; i < slidesGrid.length; i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup) {
    const increment = i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
    if (typeof slidesGrid[i + increment] !== 'undefined') {
      if (swipeToLast || currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + increment]) {
        stopIndex = i;
        groupSize = slidesGrid[i + increment] - slidesGrid[i];
      }
    } else if (swipeToLast || currentPos >= slidesGrid[i]) {
      stopIndex = i;
      groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
    }
  }
  let rewindFirstIndex = null;
  let rewindLastIndex = null;
  if (params.rewind) {
    if (swiper.isBeginning) {
      rewindLastIndex = params.virtual && params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
    } else if (swiper.isEnd) {
      rewindFirstIndex = 0;
    }
  }
  // Find current slide size
  const ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
  const increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
  if (timeDiff > params.longSwipesMs) {
    // Long touches
    if (!params.longSwipes) {
      swiper.slideTo(swiper.activeIndex);
      return;
    }
    if (swiper.swipeDirection === 'next') {
      if (ratio >= params.longSwipesRatio) swiper.slideTo(params.rewind && swiper.isEnd ? rewindFirstIndex : stopIndex + increment);else swiper.slideTo(stopIndex);
    }
    if (swiper.swipeDirection === 'prev') {
      if (ratio > 1 - params.longSwipesRatio) {
        swiper.slideTo(stopIndex + increment);
      } else if (rewindLastIndex !== null && ratio < 0 && Math.abs(ratio) > params.longSwipesRatio) {
        swiper.slideTo(rewindLastIndex);
      } else {
        swiper.slideTo(stopIndex);
      }
    }
  } else {
    // Short swipes
    if (!params.shortSwipes) {
      swiper.slideTo(swiper.activeIndex);
      return;
    }
    const isNavButtonTarget = swiper.navigation && (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl);
    if (!isNavButtonTarget) {
      if (swiper.swipeDirection === 'next') {
        swiper.slideTo(rewindFirstIndex !== null ? rewindFirstIndex : stopIndex + increment);
      }
      if (swiper.swipeDirection === 'prev') {
        swiper.slideTo(rewindLastIndex !== null ? rewindLastIndex : stopIndex);
      }
    } else if (e.target === swiper.navigation.nextEl) {
      swiper.slideTo(stopIndex + increment);
    } else {
      swiper.slideTo(stopIndex);
    }
  }
}

function onResize() {
  const swiper = this;
  const {
    params,
    el
  } = swiper;
  if (el && el.offsetWidth === 0) return;

  // Breakpoints
  if (params.breakpoints) {
    swiper.setBreakpoint();
  }

  // Save locks
  const {
    allowSlideNext,
    allowSlidePrev,
    snapGrid
  } = swiper;
  const isVirtual = swiper.virtual && swiper.params.virtual.enabled;

  // Disable locks on resize
  swiper.allowSlideNext = true;
  swiper.allowSlidePrev = true;
  swiper.updateSize();
  swiper.updateSlides();
  swiper.updateSlidesClasses();
  const isVirtualLoop = isVirtual && params.loop;
  if ((params.slidesPerView === 'auto' || params.slidesPerView > 1) && swiper.isEnd && !swiper.isBeginning && !swiper.params.centeredSlides && !isVirtualLoop) {
    swiper.slideTo(swiper.slides.length - 1, 0, false, true);
  } else {
    if (swiper.params.loop && !isVirtual) {
      swiper.slideToLoop(swiper.realIndex, 0, false, true);
    } else {
      swiper.slideTo(swiper.activeIndex, 0, false, true);
    }
  }
  if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
    clearTimeout(swiper.autoplay.resizeTimeout);
    swiper.autoplay.resizeTimeout = setTimeout(() => {
      if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
        swiper.autoplay.resume();
      }
    }, 500);
  }
  // Return locks after resize
  swiper.allowSlidePrev = allowSlidePrev;
  swiper.allowSlideNext = allowSlideNext;
  if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) {
    swiper.checkOverflow();
  }
}

function onClick(e) {
  const swiper = this;
  if (!swiper.enabled) return;
  if (!swiper.allowClick) {
    if (swiper.params.preventClicks) e.preventDefault();
    if (swiper.params.preventClicksPropagation && swiper.animating) {
      e.stopPropagation();
      e.stopImmediatePropagation();
    }
  }
}

function onScroll() {
  const swiper = this;
  const {
    wrapperEl,
    rtlTranslate,
    enabled
  } = swiper;
  if (!enabled) return;
  swiper.previousTranslate = swiper.translate;
  if (swiper.isHorizontal()) {
    swiper.translate = -wrapperEl.scrollLeft;
  } else {
    swiper.translate = -wrapperEl.scrollTop;
  }
  // eslint-disable-next-line
  if (swiper.translate === 0) swiper.translate = 0;
  swiper.updateActiveIndex();
  swiper.updateSlidesClasses();
  let newProgress;
  const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
  if (translatesDiff === 0) {
    newProgress = 0;
  } else {
    newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff;
  }
  if (newProgress !== swiper.progress) {
    swiper.updateProgress(rtlTranslate ? -swiper.translate : swiper.translate);
  }
  swiper.emit('setTranslate', swiper.translate, false);
}

function onLoad(e) {
  const swiper = this;
  processLazyPreloader(swiper, e.target);
  if (swiper.params.cssMode || swiper.params.slidesPerView !== 'auto' && !swiper.params.autoHeight) {
    return;
  }
  swiper.update();
}

function onDocumentTouchStart() {
  const swiper = this;
  if (swiper.documentTouchHandlerProceeded) return;
  swiper.documentTouchHandlerProceeded = true;
  if (swiper.params.touchReleaseOnEdges) {
    swiper.el.style.touchAction = 'auto';
  }
}

const events = (swiper, method) => {
  const document = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.g)();
  const {
    params,
    el,
    wrapperEl,
    device
  } = swiper;
  const capture = !!params.nested;
  const domMethod = method === 'on' ? 'addEventListener' : 'removeEventListener';
  const swiperMethod = method;
  if (!el || typeof el === 'string') return;

  // Touch Events
  document[domMethod]('touchstart', swiper.onDocumentTouchStart, {
    passive: false,
    capture
  });
  el[domMethod]('touchstart', swiper.onTouchStart, {
    passive: false
  });
  el[domMethod]('pointerdown', swiper.onTouchStart, {
    passive: false
  });
  document[domMethod]('touchmove', swiper.onTouchMove, {
    passive: false,
    capture
  });
  document[domMethod]('pointermove', swiper.onTouchMove, {
    passive: false,
    capture
  });
  document[domMethod]('touchend', swiper.onTouchEnd, {
    passive: true
  });
  document[domMethod]('pointerup', swiper.onTouchEnd, {
    passive: true
  });
  document[domMethod]('pointercancel', swiper.onTouchEnd, {
    passive: true
  });
  document[domMethod]('touchcancel', swiper.onTouchEnd, {
    passive: true
  });
  document[domMethod]('pointerout', swiper.onTouchEnd, {
    passive: true
  });
  document[domMethod]('pointerleave', swiper.onTouchEnd, {
    passive: true
  });
  document[domMethod]('contextmenu', swiper.onTouchEnd, {
    passive: true
  });

  // Prevent Links Clicks
  if (params.preventClicks || params.preventClicksPropagation) {
    el[domMethod]('click', swiper.onClick, true);
  }
  if (params.cssMode) {
    wrapperEl[domMethod]('scroll', swiper.onScroll);
  }

  // Resize handler
  if (params.updateOnWindowResize) {
    swiper[swiperMethod](device.ios || device.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate', onResize, true);
  } else {
    swiper[swiperMethod]('observerUpdate', onResize, true);
  }

  // Images loader
  el[domMethod]('load', swiper.onLoad, {
    capture: true
  });
};
function attachEvents() {
  const swiper = this;
  const {
    params
  } = swiper;
  swiper.onTouchStart = onTouchStart.bind(swiper);
  swiper.onTouchMove = onTouchMove.bind(swiper);
  swiper.onTouchEnd = onTouchEnd.bind(swiper);
  swiper.onDocumentTouchStart = onDocumentTouchStart.bind(swiper);
  if (params.cssMode) {
    swiper.onScroll = onScroll.bind(swiper);
  }
  swiper.onClick = onClick.bind(swiper);
  swiper.onLoad = onLoad.bind(swiper);
  events(swiper, 'on');
}
function detachEvents() {
  const swiper = this;
  events(swiper, 'off');
}
var events$1 = {
  attachEvents,
  detachEvents
};

const isGridEnabled = (swiper, params) => {
  return swiper.grid && params.grid && params.grid.rows > 1;
};
function setBreakpoint() {
  const swiper = this;
  const {
    realIndex,
    initialized,
    params,
    el
  } = swiper;
  const breakpoints = params.breakpoints;
  if (!breakpoints || breakpoints && Object.keys(breakpoints).length === 0) return;
  const document = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.g)();

  // Get breakpoint for window/container width and update parameters
  const breakpointsBase = params.breakpointsBase === 'window' || !params.breakpointsBase ? params.breakpointsBase : 'container';
  const breakpointContainer = ['window', 'container'].includes(params.breakpointsBase) || !params.breakpointsBase ? swiper.el : document.querySelector(params.breakpointsBase);
  const breakpoint = swiper.getBreakpoint(breakpoints, breakpointsBase, breakpointContainer);
  if (!breakpoint || swiper.currentBreakpoint === breakpoint) return;
  const breakpointOnlyParams = breakpoint in breakpoints ? breakpoints[breakpoint] : undefined;
  const breakpointParams = breakpointOnlyParams || swiper.originalParams;
  const wasMultiRow = isGridEnabled(swiper, params);
  const isMultiRow = isGridEnabled(swiper, breakpointParams);
  const wasGrabCursor = swiper.params.grabCursor;
  const isGrabCursor = breakpointParams.grabCursor;
  const wasEnabled = params.enabled;
  if (wasMultiRow && !isMultiRow) {
    el.classList.remove(`${params.containerModifierClass}grid`, `${params.containerModifierClass}grid-column`);
    swiper.emitContainerClasses();
  } else if (!wasMultiRow && isMultiRow) {
    el.classList.add(`${params.containerModifierClass}grid`);
    if (breakpointParams.grid.fill && breakpointParams.grid.fill === 'column' || !breakpointParams.grid.fill && params.grid.fill === 'column') {
      el.classList.add(`${params.containerModifierClass}grid-column`);
    }
    swiper.emitContainerClasses();
  }
  if (wasGrabCursor && !isGrabCursor) {
    swiper.unsetGrabCursor();
  } else if (!wasGrabCursor && isGrabCursor) {
    swiper.setGrabCursor();
  }

  // Toggle navigation, pagination, scrollbar
  ['navigation', 'pagination', 'scrollbar'].forEach(prop => {
    if (typeof breakpointParams[prop] === 'undefined') return;
    const wasModuleEnabled = params[prop] && params[prop].enabled;
    const isModuleEnabled = breakpointParams[prop] && breakpointParams[prop].enabled;
    if (wasModuleEnabled && !isModuleEnabled) {
      swiper[prop].disable();
    }
    if (!wasModuleEnabled && isModuleEnabled) {
      swiper[prop].enable();
    }
  });
  const directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
  const needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);
  const wasLoop = params.loop;
  if (directionChanged && initialized) {
    swiper.changeDirection();
  }
  (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.x)(swiper.params, breakpointParams);
  const isEnabled = swiper.params.enabled;
  const hasLoop = swiper.params.loop;
  Object.assign(swiper, {
    allowTouchMove: swiper.params.allowTouchMove,
    allowSlideNext: swiper.params.allowSlideNext,
    allowSlidePrev: swiper.params.allowSlidePrev
  });
  if (wasEnabled && !isEnabled) {
    swiper.disable();
  } else if (!wasEnabled && isEnabled) {
    swiper.enable();
  }
  swiper.currentBreakpoint = breakpoint;
  swiper.emit('_beforeBreakpoint', breakpointParams);
  if (initialized) {
    if (needsReLoop) {
      swiper.loopDestroy();
      swiper.loopCreate(realIndex);
      swiper.updateSlides();
    } else if (!wasLoop && hasLoop) {
      swiper.loopCreate(realIndex);
      swiper.updateSlides();
    } else if (wasLoop && !hasLoop) {
      swiper.loopDestroy();
    }
  }
  swiper.emit('breakpoint', breakpointParams);
}

function getBreakpoint(breakpoints, base, containerEl) {
  if (base === void 0) {
    base = 'window';
  }
  if (!breakpoints || base === 'container' && !containerEl) return undefined;
  let breakpoint = false;
  const window = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
  const currentHeight = base === 'window' ? window.innerHeight : containerEl.clientHeight;
  const points = Object.keys(breakpoints).map(point => {
    if (typeof point === 'string' && point.indexOf('@') === 0) {
      const minRatio = parseFloat(point.substr(1));
      const value = currentHeight * minRatio;
      return {
        value,
        point
      };
    }
    return {
      value: point,
      point
    };
  });
  points.sort((a, b) => parseInt(a.value, 10) - parseInt(b.value, 10));
  for (let i = 0; i < points.length; i += 1) {
    const {
      point,
      value
    } = points[i];
    if (base === 'window') {
      if (window.matchMedia(`(min-width: ${value}px)`).matches) {
        breakpoint = point;
      }
    } else if (value <= containerEl.clientWidth) {
      breakpoint = point;
    }
  }
  return breakpoint || 'max';
}

var breakpoints = {
  setBreakpoint,
  getBreakpoint
};

function prepareClasses(entries, prefix) {
  const resultClasses = [];
  entries.forEach(item => {
    if (typeof item === 'object') {
      Object.keys(item).forEach(classNames => {
        if (item[classNames]) {
          resultClasses.push(prefix + classNames);
        }
      });
    } else if (typeof item === 'string') {
      resultClasses.push(prefix + item);
    }
  });
  return resultClasses;
}
function addClasses() {
  const swiper = this;
  const {
    classNames,
    params,
    rtl,
    el,
    device
  } = swiper;
  // prettier-ignore
  const suffixes = prepareClasses(['initialized', params.direction, {
    'free-mode': swiper.params.freeMode && params.freeMode.enabled
  }, {
    'autoheight': params.autoHeight
  }, {
    'rtl': rtl
  }, {
    'grid': params.grid && params.grid.rows > 1
  }, {
    'grid-column': params.grid && params.grid.rows > 1 && params.grid.fill === 'column'
  }, {
    'android': device.android
  }, {
    'ios': device.ios
  }, {
    'css-mode': params.cssMode
  }, {
    'centered': params.cssMode && params.centeredSlides
  }, {
    'watch-progress': params.watchSlidesProgress
  }], params.containerModifierClass);
  classNames.push(...suffixes);
  el.classList.add(...classNames);
  swiper.emitContainerClasses();
}

function removeClasses() {
  const swiper = this;
  const {
    el,
    classNames
  } = swiper;
  if (!el || typeof el === 'string') return;
  el.classList.remove(...classNames);
  swiper.emitContainerClasses();
}

var classes = {
  addClasses,
  removeClasses
};

function checkOverflow() {
  const swiper = this;
  const {
    isLocked: wasLocked,
    params
  } = swiper;
  const {
    slidesOffsetBefore
  } = params;
  if (slidesOffsetBefore) {
    const lastSlideIndex = swiper.slides.length - 1;
    const lastSlideRightEdge = swiper.slidesGrid[lastSlideIndex] + swiper.slidesSizesGrid[lastSlideIndex] + slidesOffsetBefore * 2;
    swiper.isLocked = swiper.size > lastSlideRightEdge;
  } else {
    swiper.isLocked = swiper.snapGrid.length === 1;
  }
  if (params.allowSlideNext === true) {
    swiper.allowSlideNext = !swiper.isLocked;
  }
  if (params.allowSlidePrev === true) {
    swiper.allowSlidePrev = !swiper.isLocked;
  }
  if (wasLocked && wasLocked !== swiper.isLocked) {
    swiper.isEnd = false;
  }
  if (wasLocked !== swiper.isLocked) {
    swiper.emit(swiper.isLocked ? 'lock' : 'unlock');
  }
}
var checkOverflow$1 = {
  checkOverflow
};

var defaults = {
  init: true,
  direction: 'horizontal',
  oneWayMovement: false,
  swiperElementNodeName: 'SWIPER-CONTAINER',
  touchEventsTarget: 'wrapper',
  initialSlide: 0,
  speed: 300,
  cssMode: false,
  updateOnWindowResize: true,
  resizeObserver: true,
  nested: false,
  createElements: false,
  eventsPrefix: 'swiper',
  enabled: true,
  focusableElements: 'input, select, option, textarea, button, video, label',
  // Overrides
  width: null,
  height: null,
  //
  preventInteractionOnTransition: false,
  // ssr
  userAgent: null,
  url: null,
  // To support iOS's swipe-to-go-back gesture (when being used in-app).
  edgeSwipeDetection: false,
  edgeSwipeThreshold: 20,
  // Autoheight
  autoHeight: false,
  // Set wrapper width
  setWrapperSize: false,
  // Virtual Translate
  virtualTranslate: false,
  // Effects
  effect: 'slide',
  // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'

  // Breakpoints
  breakpoints: undefined,
  breakpointsBase: 'window',
  // Slides grid
  spaceBetween: 0,
  slidesPerView: 1,
  slidesPerGroup: 1,
  slidesPerGroupSkip: 0,
  slidesPerGroupAuto: false,
  centeredSlides: false,
  centeredSlidesBounds: false,
  slidesOffsetBefore: 0,
  // in px
  slidesOffsetAfter: 0,
  // in px
  normalizeSlideIndex: true,
  centerInsufficientSlides: false,
  // Disable swiper and hide navigation when container not overflow
  watchOverflow: true,
  // Round length
  roundLengths: false,
  // Touches
  touchRatio: 1,
  touchAngle: 45,
  simulateTouch: true,
  shortSwipes: true,
  longSwipes: true,
  longSwipesRatio: 0.5,
  longSwipesMs: 300,
  followFinger: true,
  allowTouchMove: true,
  threshold: 5,
  touchMoveStopPropagation: false,
  touchStartPreventDefault: true,
  touchStartForcePreventDefault: false,
  touchReleaseOnEdges: false,
  // Unique Navigation Elements
  uniqueNavElements: true,
  // Resistance
  resistance: true,
  resistanceRatio: 0.85,
  // Progress
  watchSlidesProgress: false,
  // Cursor
  grabCursor: false,
  // Clicks
  preventClicks: true,
  preventClicksPropagation: true,
  slideToClickedSlide: false,
  // loop
  loop: false,
  loopAddBlankSlides: true,
  loopAdditionalSlides: 0,
  loopPreventsSliding: true,
  // rewind
  rewind: false,
  // Swiping/no swiping
  allowSlidePrev: true,
  allowSlideNext: true,
  swipeHandler: null,
  // '.swipe-handler',
  noSwiping: true,
  noSwipingClass: 'swiper-no-swiping',
  noSwipingSelector: null,
  // Passive Listeners
  passiveListeners: true,
  maxBackfaceHiddenSlides: 10,
  // NS
  containerModifierClass: 'swiper-',
  // NEW
  slideClass: 'swiper-slide',
  slideBlankClass: 'swiper-slide-blank',
  slideActiveClass: 'swiper-slide-active',
  slideVisibleClass: 'swiper-slide-visible',
  slideFullyVisibleClass: 'swiper-slide-fully-visible',
  slideNextClass: 'swiper-slide-next',
  slidePrevClass: 'swiper-slide-prev',
  wrapperClass: 'swiper-wrapper',
  lazyPreloaderClass: 'swiper-lazy-preloader',
  lazyPreloadPrevNext: 0,
  // Callbacks
  runCallbacksOnInit: true,
  // Internals
  _emitClasses: false
};

function moduleExtendParams(params, allModulesParams) {
  return function extendParams(obj) {
    if (obj === void 0) {
      obj = {};
    }
    const moduleParamName = Object.keys(obj)[0];
    const moduleParams = obj[moduleParamName];
    if (typeof moduleParams !== 'object' || moduleParams === null) {
      (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.x)(allModulesParams, obj);
      return;
    }
    if (params[moduleParamName] === true) {
      params[moduleParamName] = {
        enabled: true
      };
    }
    if (moduleParamName === 'navigation' && params[moduleParamName] && params[moduleParamName].enabled && !params[moduleParamName].prevEl && !params[moduleParamName].nextEl) {
      params[moduleParamName].auto = true;
    }
    if (['pagination', 'scrollbar'].indexOf(moduleParamName) >= 0 && params[moduleParamName] && params[moduleParamName].enabled && !params[moduleParamName].el) {
      params[moduleParamName].auto = true;
    }
    if (!(moduleParamName in params && 'enabled' in moduleParams)) {
      (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.x)(allModulesParams, obj);
      return;
    }
    if (typeof params[moduleParamName] === 'object' && !('enabled' in params[moduleParamName])) {
      params[moduleParamName].enabled = true;
    }
    if (!params[moduleParamName]) params[moduleParamName] = {
      enabled: false
    };
    (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.x)(allModulesParams, obj);
  };
}

/* eslint no-param-reassign: "off" */
const prototypes = {
  eventsEmitter,
  update,
  translate,
  transition,
  slide,
  loop,
  grabCursor,
  events: events$1,
  breakpoints,
  checkOverflow: checkOverflow$1,
  classes
};
const extendedDefaults = {};
class Swiper {
  constructor() {
    let el;
    let params;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    if (args.length === 1 && args[0].constructor && Object.prototype.toString.call(args[0]).slice(8, -1) === 'Object') {
      params = args[0];
    } else {
      [el, params] = args;
    }
    if (!params) params = {};
    params = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.x)({}, params);
    if (el && !params.el) params.el = el;
    const document = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.g)();
    if (params.el && typeof params.el === 'string' && document.querySelectorAll(params.el).length > 1) {
      const swipers = [];
      document.querySelectorAll(params.el).forEach(containerEl => {
        const newParams = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.x)({}, params, {
          el: containerEl
        });
        swipers.push(new Swiper(newParams));
      });
      // eslint-disable-next-line no-constructor-return
      return swipers;
    }

    // Swiper Instance
    const swiper = this;
    swiper.__swiper__ = true;
    swiper.support = getSupport();
    swiper.device = getDevice({
      userAgent: params.userAgent
    });
    swiper.browser = getBrowser();
    swiper.eventsListeners = {};
    swiper.eventsAnyListeners = [];
    swiper.modules = [...swiper.__modules__];
    if (params.modules && Array.isArray(params.modules)) {
      swiper.modules.push(...params.modules);
    }
    const allModulesParams = {};
    swiper.modules.forEach(mod => {
      mod({
        params,
        swiper,
        extendParams: moduleExtendParams(params, allModulesParams),
        on: swiper.on.bind(swiper),
        once: swiper.once.bind(swiper),
        off: swiper.off.bind(swiper),
        emit: swiper.emit.bind(swiper)
      });
    });

    // Extend defaults with modules params
    const swiperParams = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.x)({}, defaults, allModulesParams);

    // Extend defaults with passed params
    swiper.params = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.x)({}, swiperParams, extendedDefaults, params);
    swiper.originalParams = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.x)({}, swiper.params);
    swiper.passedParams = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.x)({}, params);

    // add event listeners
    if (swiper.params && swiper.params.on) {
      Object.keys(swiper.params.on).forEach(eventName => {
        swiper.on(eventName, swiper.params.on[eventName]);
      });
    }
    if (swiper.params && swiper.params.onAny) {
      swiper.onAny(swiper.params.onAny);
    }

    // Extend Swiper
    Object.assign(swiper, {
      enabled: swiper.params.enabled,
      el,
      // Classes
      classNames: [],
      // Slides
      slides: [],
      slidesGrid: [],
      snapGrid: [],
      slidesSizesGrid: [],
      // isDirection
      isHorizontal() {
        return swiper.params.direction === 'horizontal';
      },
      isVertical() {
        return swiper.params.direction === 'vertical';
      },
      // Indexes
      activeIndex: 0,
      realIndex: 0,
      //
      isBeginning: true,
      isEnd: false,
      // Props
      translate: 0,
      previousTranslate: 0,
      progress: 0,
      velocity: 0,
      animating: false,
      cssOverflowAdjustment() {
        // Returns 0 unless `translate` is > 2**23
        // Should be subtracted from css values to prevent overflow
        return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
      },
      // Locks
      allowSlideNext: swiper.params.allowSlideNext,
      allowSlidePrev: swiper.params.allowSlidePrev,
      // Touch Events
      touchEventsData: {
        isTouched: undefined,
        isMoved: undefined,
        allowTouchCallbacks: undefined,
        touchStartTime: undefined,
        isScrolling: undefined,
        currentTranslate: undefined,
        startTranslate: undefined,
        allowThresholdMove: undefined,
        // Form elements to match
        focusableElements: swiper.params.focusableElements,
        // Last click time
        lastClickTime: 0,
        clickTimeout: undefined,
        // Velocities
        velocities: [],
        allowMomentumBounce: undefined,
        startMoving: undefined,
        pointerId: null,
        touchId: null
      },
      // Clicks
      allowClick: true,
      // Touches
      allowTouchMove: swiper.params.allowTouchMove,
      touches: {
        startX: 0,
        startY: 0,
        currentX: 0,
        currentY: 0,
        diff: 0
      },
      // Images
      imagesToLoad: [],
      imagesLoaded: 0
    });
    swiper.emit('_swiper');

    // Init
    if (swiper.params.init) {
      swiper.init();
    }

    // Return app instance
    // eslint-disable-next-line no-constructor-return
    return swiper;
  }
  getDirectionLabel(property) {
    if (this.isHorizontal()) {
      return property;
    }
    // prettier-ignore
    return {
      'width': 'height',
      'margin-top': 'margin-left',
      'margin-bottom ': 'margin-right',
      'margin-left': 'margin-top',
      'margin-right': 'margin-bottom',
      'padding-left': 'padding-top',
      'padding-right': 'padding-bottom',
      'marginRight': 'marginBottom'
    }[property];
  }
  getSlideIndex(slideEl) {
    const {
      slidesEl,
      params
    } = this;
    const slides = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.e)(slidesEl, `.${params.slideClass}, swiper-slide`);
    const firstSlideIndex = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.i)(slides[0]);
    return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.i)(slideEl) - firstSlideIndex;
  }
  getSlideIndexByData(index) {
    return this.getSlideIndex(this.slides.find(slideEl => slideEl.getAttribute('data-swiper-slide-index') * 1 === index));
  }
  getSlideIndexWhenGrid(index) {
    if (this.grid && this.params.grid && this.params.grid.rows > 1) {
      if (this.params.grid.fill === 'column') {
        index = Math.floor(index / this.params.grid.rows);
      } else if (this.params.grid.fill === 'row') {
        index = index % Math.ceil(this.slides.length / this.params.grid.rows);
      }
    }
    return index;
  }
  recalcSlides() {
    const swiper = this;
    const {
      slidesEl,
      params
    } = swiper;
    swiper.slides = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.e)(slidesEl, `.${params.slideClass}, swiper-slide`);
  }
  enable() {
    const swiper = this;
    if (swiper.enabled) return;
    swiper.enabled = true;
    if (swiper.params.grabCursor) {
      swiper.setGrabCursor();
    }
    swiper.emit('enable');
  }
  disable() {
    const swiper = this;
    if (!swiper.enabled) return;
    swiper.enabled = false;
    if (swiper.params.grabCursor) {
      swiper.unsetGrabCursor();
    }
    swiper.emit('disable');
  }
  setProgress(progress, speed) {
    const swiper = this;
    progress = Math.min(Math.max(progress, 0), 1);
    const min = swiper.minTranslate();
    const max = swiper.maxTranslate();
    const current = (max - min) * progress + min;
    swiper.translateTo(current, typeof speed === 'undefined' ? 0 : speed);
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
  }
  emitContainerClasses() {
    const swiper = this;
    if (!swiper.params._emitClasses || !swiper.el) return;
    const cls = swiper.el.className.split(' ').filter(className => {
      return className.indexOf('swiper') === 0 || className.indexOf(swiper.params.containerModifierClass) === 0;
    });
    swiper.emit('_containerClasses', cls.join(' '));
  }
  getSlideClasses(slideEl) {
    const swiper = this;
    if (swiper.destroyed) return '';
    return slideEl.className.split(' ').filter(className => {
      return className.indexOf('swiper-slide') === 0 || className.indexOf(swiper.params.slideClass) === 0;
    }).join(' ');
  }
  emitSlidesClasses() {
    const swiper = this;
    if (!swiper.params._emitClasses || !swiper.el) return;
    const updates = [];
    swiper.slides.forEach(slideEl => {
      const classNames = swiper.getSlideClasses(slideEl);
      updates.push({
        slideEl,
        classNames
      });
      swiper.emit('_slideClass', slideEl, classNames);
    });
    swiper.emit('_slideClasses', updates);
  }
  slidesPerViewDynamic(view, exact) {
    if (view === void 0) {
      view = 'current';
    }
    if (exact === void 0) {
      exact = false;
    }
    const swiper = this;
    const {
      params,
      slides,
      slidesGrid,
      slidesSizesGrid,
      size: swiperSize,
      activeIndex
    } = swiper;
    let spv = 1;
    if (typeof params.slidesPerView === 'number') return params.slidesPerView;
    if (params.centeredSlides) {
      let slideSize = slides[activeIndex] ? Math.ceil(slides[activeIndex].swiperSlideSize) : 0;
      let breakLoop;
      for (let i = activeIndex + 1; i < slides.length; i += 1) {
        if (slides[i] && !breakLoop) {
          slideSize += Math.ceil(slides[i].swiperSlideSize);
          spv += 1;
          if (slideSize > swiperSize) breakLoop = true;
        }
      }
      for (let i = activeIndex - 1; i >= 0; i -= 1) {
        if (slides[i] && !breakLoop) {
          slideSize += slides[i].swiperSlideSize;
          spv += 1;
          if (slideSize > swiperSize) breakLoop = true;
        }
      }
    } else {
      // eslint-disable-next-line
      if (view === 'current') {
        for (let i = activeIndex + 1; i < slides.length; i += 1) {
          const slideInView = exact ? slidesGrid[i] + slidesSizesGrid[i] - slidesGrid[activeIndex] < swiperSize : slidesGrid[i] - slidesGrid[activeIndex] < swiperSize;
          if (slideInView) {
            spv += 1;
          }
        }
      } else {
        // previous
        for (let i = activeIndex - 1; i >= 0; i -= 1) {
          const slideInView = slidesGrid[activeIndex] - slidesGrid[i] < swiperSize;
          if (slideInView) {
            spv += 1;
          }
        }
      }
    }
    return spv;
  }
  update() {
    const swiper = this;
    if (!swiper || swiper.destroyed) return;
    const {
      snapGrid,
      params
    } = swiper;
    // Breakpoints
    if (params.breakpoints) {
      swiper.setBreakpoint();
    }
    [...swiper.el.querySelectorAll('[loading="lazy"]')].forEach(imageEl => {
      if (imageEl.complete) {
        processLazyPreloader(swiper, imageEl);
      }
    });
    swiper.updateSize();
    swiper.updateSlides();
    swiper.updateProgress();
    swiper.updateSlidesClasses();
    function setTranslate() {
      const translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
      const newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
      swiper.setTranslate(newTranslate);
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    }
    let translated;
    if (params.freeMode && params.freeMode.enabled && !params.cssMode) {
      setTranslate();
      if (params.autoHeight) {
        swiper.updateAutoHeight();
      }
    } else {
      if ((params.slidesPerView === 'auto' || params.slidesPerView > 1) && swiper.isEnd && !params.centeredSlides) {
        const slides = swiper.virtual && params.virtual.enabled ? swiper.virtual.slides : swiper.slides;
        translated = swiper.slideTo(slides.length - 1, 0, false, true);
      } else {
        translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
      }
      if (!translated) {
        setTranslate();
      }
    }
    if (params.watchOverflow && snapGrid !== swiper.snapGrid) {
      swiper.checkOverflow();
    }
    swiper.emit('update');
  }
  changeDirection(newDirection, needUpdate) {
    if (needUpdate === void 0) {
      needUpdate = true;
    }
    const swiper = this;
    const currentDirection = swiper.params.direction;
    if (!newDirection) {
      // eslint-disable-next-line
      newDirection = currentDirection === 'horizontal' ? 'vertical' : 'horizontal';
    }
    if (newDirection === currentDirection || newDirection !== 'horizontal' && newDirection !== 'vertical') {
      return swiper;
    }
    swiper.el.classList.remove(`${swiper.params.containerModifierClass}${currentDirection}`);
    swiper.el.classList.add(`${swiper.params.containerModifierClass}${newDirection}`);
    swiper.emitContainerClasses();
    swiper.params.direction = newDirection;
    swiper.slides.forEach(slideEl => {
      if (newDirection === 'vertical') {
        slideEl.style.width = '';
      } else {
        slideEl.style.height = '';
      }
    });
    swiper.emit('changeDirection');
    if (needUpdate) swiper.update();
    return swiper;
  }
  changeLanguageDirection(direction) {
    const swiper = this;
    if (swiper.rtl && direction === 'rtl' || !swiper.rtl && direction === 'ltr') return;
    swiper.rtl = direction === 'rtl';
    swiper.rtlTranslate = swiper.params.direction === 'horizontal' && swiper.rtl;
    if (swiper.rtl) {
      swiper.el.classList.add(`${swiper.params.containerModifierClass}rtl`);
      swiper.el.dir = 'rtl';
    } else {
      swiper.el.classList.remove(`${swiper.params.containerModifierClass}rtl`);
      swiper.el.dir = 'ltr';
    }
    swiper.update();
  }
  mount(element) {
    const swiper = this;
    if (swiper.mounted) return true;

    // Find el
    let el = element || swiper.params.el;
    if (typeof el === 'string') {
      el = document.querySelector(el);
    }
    if (!el) {
      return false;
    }
    el.swiper = swiper;
    if (el.parentNode && el.parentNode.host && el.parentNode.host.nodeName === swiper.params.swiperElementNodeName.toUpperCase()) {
      swiper.isElement = true;
    }
    const getWrapperSelector = () => {
      return `.${(swiper.params.wrapperClass || '').trim().split(' ').join('.')}`;
    };
    const getWrapper = () => {
      if (el && el.shadowRoot && el.shadowRoot.querySelector) {
        const res = el.shadowRoot.querySelector(getWrapperSelector());
        // Children needs to return slot items
        return res;
      }
      return (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.e)(el, getWrapperSelector())[0];
    };
    // Find Wrapper
    let wrapperEl = getWrapper();
    if (!wrapperEl && swiper.params.createElements) {
      wrapperEl = (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.c)('div', swiper.params.wrapperClass);
      el.append(wrapperEl);
      (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.e)(el, `.${swiper.params.slideClass}`).forEach(slideEl => {
        wrapperEl.append(slideEl);
      });
    }
    Object.assign(swiper, {
      el,
      wrapperEl,
      slidesEl: swiper.isElement && !el.parentNode.host.slideSlots ? el.parentNode.host : wrapperEl,
      hostEl: swiper.isElement ? el.parentNode.host : el,
      mounted: true,
      // RTL
      rtl: el.dir.toLowerCase() === 'rtl' || (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.q)(el, 'direction') === 'rtl',
      rtlTranslate: swiper.params.direction === 'horizontal' && (el.dir.toLowerCase() === 'rtl' || (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.q)(el, 'direction') === 'rtl'),
      wrongRTL: (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.q)(wrapperEl, 'display') === '-webkit-box'
    });
    return true;
  }
  init(el) {
    const swiper = this;
    if (swiper.initialized) return swiper;
    const mounted = swiper.mount(el);
    if (mounted === false) return swiper;
    swiper.emit('beforeInit');

    // Set breakpoint
    if (swiper.params.breakpoints) {
      swiper.setBreakpoint();
    }

    // Add Classes
    swiper.addClasses();

    // Update size
    swiper.updateSize();

    // Update slides
    swiper.updateSlides();
    if (swiper.params.watchOverflow) {
      swiper.checkOverflow();
    }

    // Set Grab Cursor
    if (swiper.params.grabCursor && swiper.enabled) {
      swiper.setGrabCursor();
    }

    // Slide To Initial Slide
    if (swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled) {
      swiper.slideTo(swiper.params.initialSlide + swiper.virtual.slidesBefore, 0, swiper.params.runCallbacksOnInit, false, true);
    } else {
      swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit, false, true);
    }

    // Create loop
    if (swiper.params.loop) {
      swiper.loopCreate(undefined, true);
    }

    // Attach events
    swiper.attachEvents();
    const lazyElements = [...swiper.el.querySelectorAll('[loading="lazy"]')];
    if (swiper.isElement) {
      lazyElements.push(...swiper.hostEl.querySelectorAll('[loading="lazy"]'));
    }
    lazyElements.forEach(imageEl => {
      if (imageEl.complete) {
        processLazyPreloader(swiper, imageEl);
      } else {
        imageEl.addEventListener('load', e => {
          processLazyPreloader(swiper, e.target);
        });
      }
    });
    preload(swiper);

    // Init Flag
    swiper.initialized = true;
    preload(swiper);

    // Emit
    swiper.emit('init');
    swiper.emit('afterInit');
    return swiper;
  }
  destroy(deleteInstance, cleanStyles) {
    if (deleteInstance === void 0) {
      deleteInstance = true;
    }
    if (cleanStyles === void 0) {
      cleanStyles = true;
    }
    const swiper = this;
    const {
      params,
      el,
      wrapperEl,
      slides
    } = swiper;
    if (typeof swiper.params === 'undefined' || swiper.destroyed) {
      return null;
    }
    swiper.emit('beforeDestroy');

    // Init Flag
    swiper.initialized = false;

    // Detach events
    swiper.detachEvents();

    // Destroy loop
    if (params.loop) {
      swiper.loopDestroy();
    }

    // Cleanup styles
    if (cleanStyles) {
      swiper.removeClasses();
      if (el && typeof el !== 'string') {
        el.removeAttribute('style');
      }
      if (wrapperEl) {
        wrapperEl.removeAttribute('style');
      }
      if (slides && slides.length) {
        slides.forEach(slideEl => {
          slideEl.classList.remove(params.slideVisibleClass, params.slideFullyVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass);
          slideEl.removeAttribute('style');
          slideEl.removeAttribute('data-swiper-slide-index');
        });
      }
    }
    swiper.emit('destroy');

    // Detach emitter events
    Object.keys(swiper.eventsListeners).forEach(eventName => {
      swiper.off(eventName);
    });
    if (deleteInstance !== false) {
      if (swiper.el && typeof swiper.el !== 'string') {
        swiper.el.swiper = null;
      }
      (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.y)(swiper);
    }
    swiper.destroyed = true;
    return null;
  }
  static extendDefaults(newDefaults) {
    (0,_utils_mjs__WEBPACK_IMPORTED_MODULE_1__.x)(extendedDefaults, newDefaults);
  }
  static get extendedDefaults() {
    return extendedDefaults;
  }
  static get defaults() {
    return defaults;
  }
  static installModule(mod) {
    if (!Swiper.prototype.__modules__) Swiper.prototype.__modules__ = [];
    const modules = Swiper.prototype.__modules__;
    if (typeof mod === 'function' && modules.indexOf(mod) < 0) {
      modules.push(mod);
    }
  }
  static use(module) {
    if (Array.isArray(module)) {
      module.forEach(m => Swiper.installModule(m));
      return Swiper;
    }
    Swiper.installModule(module);
    return Swiper;
  }
}
Object.keys(prototypes).forEach(prototypeGroup => {
  Object.keys(prototypes[prototypeGroup]).forEach(protoMethod => {
    Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
  });
});
Swiper.use([Resize, Observer]);




/***/ }),

/***/ "./node_modules/swiper/shared/utils.mjs":
/*!**********************************************!*\
  !*** ./node_modules/swiper/shared/utils.mjs ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ setCSSProperty),
/* harmony export */   b: () => (/* binding */ elementParents),
/* harmony export */   c: () => (/* binding */ createElement),
/* harmony export */   d: () => (/* binding */ elementOffset),
/* harmony export */   e: () => (/* binding */ elementChildren),
/* harmony export */   f: () => (/* binding */ now),
/* harmony export */   g: () => (/* binding */ getSlideTransformEl),
/* harmony export */   h: () => (/* binding */ elementOuterSize),
/* harmony export */   i: () => (/* binding */ elementIndex),
/* harmony export */   j: () => (/* binding */ classesToTokens),
/* harmony export */   k: () => (/* binding */ getTranslate),
/* harmony export */   l: () => (/* binding */ elementTransitionEnd),
/* harmony export */   m: () => (/* binding */ makeElementsArray),
/* harmony export */   n: () => (/* binding */ nextTick),
/* harmony export */   o: () => (/* binding */ isObject),
/* harmony export */   p: () => (/* binding */ getRotateFix),
/* harmony export */   q: () => (/* binding */ elementStyle),
/* harmony export */   r: () => (/* binding */ elementNextAll),
/* harmony export */   s: () => (/* binding */ setInnerHTML),
/* harmony export */   t: () => (/* binding */ elementPrevAll),
/* harmony export */   u: () => (/* binding */ animateCSSModeScroll),
/* harmony export */   v: () => (/* binding */ showWarning),
/* harmony export */   w: () => (/* binding */ elementIsChildOf),
/* harmony export */   x: () => (/* binding */ extend),
/* harmony export */   y: () => (/* binding */ deleteProps)
/* harmony export */ });
/* harmony import */ var _ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ssr-window.esm.mjs */ "./node_modules/swiper/shared/ssr-window.esm.mjs");


function classesToTokens(classes) {
  if (classes === void 0) {
    classes = '';
  }
  return classes.trim().split(' ').filter(c => !!c.trim());
}

function deleteProps(obj) {
  const object = obj;
  Object.keys(object).forEach(key => {
    try {
      object[key] = null;
    } catch (e) {
      // no getter for object
    }
    try {
      delete object[key];
    } catch (e) {
      // something got wrong
    }
  });
}
function nextTick(callback, delay) {
  if (delay === void 0) {
    delay = 0;
  }
  return setTimeout(callback, delay);
}
function now() {
  return Date.now();
}
function getComputedStyle(el) {
  const window = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
  let style;
  if (window.getComputedStyle) {
    style = window.getComputedStyle(el, null);
  }
  if (!style && el.currentStyle) {
    style = el.currentStyle;
  }
  if (!style) {
    style = el.style;
  }
  return style;
}
function getTranslate(el, axis) {
  if (axis === void 0) {
    axis = 'x';
  }
  const window = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
  let matrix;
  let curTransform;
  let transformMatrix;
  const curStyle = getComputedStyle(el);
  if (window.WebKitCSSMatrix) {
    curTransform = curStyle.transform || curStyle.webkitTransform;
    if (curTransform.split(',').length > 6) {
      curTransform = curTransform.split(', ').map(a => a.replace(',', '.')).join(', ');
    }
    // Some old versions of Webkit choke when 'none' is passed; pass
    // empty string instead in this case
    transformMatrix = new window.WebKitCSSMatrix(curTransform === 'none' ? '' : curTransform);
  } else {
    transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,');
    matrix = transformMatrix.toString().split(',');
  }
  if (axis === 'x') {
    // Latest Chrome and webkits Fix
    if (window.WebKitCSSMatrix) curTransform = transformMatrix.m41;
    // Crazy IE10 Matrix
    else if (matrix.length === 16) curTransform = parseFloat(matrix[12]);
    // Normal Browsers
    else curTransform = parseFloat(matrix[4]);
  }
  if (axis === 'y') {
    // Latest Chrome and webkits Fix
    if (window.WebKitCSSMatrix) curTransform = transformMatrix.m42;
    // Crazy IE10 Matrix
    else if (matrix.length === 16) curTransform = parseFloat(matrix[13]);
    // Normal Browsers
    else curTransform = parseFloat(matrix[5]);
  }
  return curTransform || 0;
}
function isObject(o) {
  return typeof o === 'object' && o !== null && o.constructor && Object.prototype.toString.call(o).slice(8, -1) === 'Object';
}
function isNode(node) {
  // eslint-disable-next-line
  if (typeof window !== 'undefined' && typeof window.HTMLElement !== 'undefined') {
    return node instanceof HTMLElement;
  }
  return node && (node.nodeType === 1 || node.nodeType === 11);
}
function extend() {
  const to = Object(arguments.length <= 0 ? undefined : arguments[0]);
  const noExtend = ['__proto__', 'constructor', 'prototype'];
  for (let i = 1; i < arguments.length; i += 1) {
    const nextSource = i < 0 || arguments.length <= i ? undefined : arguments[i];
    if (nextSource !== undefined && nextSource !== null && !isNode(nextSource)) {
      const keysArray = Object.keys(Object(nextSource)).filter(key => noExtend.indexOf(key) < 0);
      for (let nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
        const nextKey = keysArray[nextIndex];
        const desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
        if (desc !== undefined && desc.enumerable) {
          if (isObject(to[nextKey]) && isObject(nextSource[nextKey])) {
            if (nextSource[nextKey].__swiper__) {
              to[nextKey] = nextSource[nextKey];
            } else {
              extend(to[nextKey], nextSource[nextKey]);
            }
          } else if (!isObject(to[nextKey]) && isObject(nextSource[nextKey])) {
            to[nextKey] = {};
            if (nextSource[nextKey].__swiper__) {
              to[nextKey] = nextSource[nextKey];
            } else {
              extend(to[nextKey], nextSource[nextKey]);
            }
          } else {
            to[nextKey] = nextSource[nextKey];
          }
        }
      }
    }
  }
  return to;
}
function setCSSProperty(el, varName, varValue) {
  el.style.setProperty(varName, varValue);
}
function animateCSSModeScroll(_ref) {
  let {
    swiper,
    targetPosition,
    side
  } = _ref;
  const window = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
  const startPosition = -swiper.translate;
  let startTime = null;
  let time;
  const duration = swiper.params.speed;
  swiper.wrapperEl.style.scrollSnapType = 'none';
  window.cancelAnimationFrame(swiper.cssModeFrameID);
  const dir = targetPosition > startPosition ? 'next' : 'prev';
  const isOutOfBound = (current, target) => {
    return dir === 'next' && current >= target || dir === 'prev' && current <= target;
  };
  const animate = () => {
    time = new Date().getTime();
    if (startTime === null) {
      startTime = time;
    }
    const progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
    const easeProgress = 0.5 - Math.cos(progress * Math.PI) / 2;
    let currentPosition = startPosition + easeProgress * (targetPosition - startPosition);
    if (isOutOfBound(currentPosition, targetPosition)) {
      currentPosition = targetPosition;
    }
    swiper.wrapperEl.scrollTo({
      [side]: currentPosition
    });
    if (isOutOfBound(currentPosition, targetPosition)) {
      swiper.wrapperEl.style.overflow = 'hidden';
      swiper.wrapperEl.style.scrollSnapType = '';
      setTimeout(() => {
        swiper.wrapperEl.style.overflow = '';
        swiper.wrapperEl.scrollTo({
          [side]: currentPosition
        });
      });
      window.cancelAnimationFrame(swiper.cssModeFrameID);
      return;
    }
    swiper.cssModeFrameID = window.requestAnimationFrame(animate);
  };
  animate();
}
function getSlideTransformEl(slideEl) {
  return slideEl.querySelector('.swiper-slide-transform') || slideEl.shadowRoot && slideEl.shadowRoot.querySelector('.swiper-slide-transform') || slideEl;
}
function elementChildren(element, selector) {
  if (selector === void 0) {
    selector = '';
  }
  const window = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
  const children = [...element.children];
  if (window.HTMLSlotElement && element instanceof HTMLSlotElement) {
    children.push(...element.assignedElements());
  }
  if (!selector) {
    return children;
  }
  return children.filter(el => el.matches(selector));
}
function elementIsChildOfSlot(el, slot) {
  // Breadth-first search through all parent's children and assigned elements
  const elementsQueue = [slot];
  while (elementsQueue.length > 0) {
    const elementToCheck = elementsQueue.shift();
    if (el === elementToCheck) {
      return true;
    }
    elementsQueue.push(...elementToCheck.children, ...(elementToCheck.shadowRoot ? elementToCheck.shadowRoot.children : []), ...(elementToCheck.assignedElements ? elementToCheck.assignedElements() : []));
  }
}
function elementIsChildOf(el, parent) {
  const window = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
  let isChild = parent.contains(el);
  if (!isChild && window.HTMLSlotElement && parent instanceof HTMLSlotElement) {
    const children = [...parent.assignedElements()];
    isChild = children.includes(el);
    if (!isChild) {
      isChild = elementIsChildOfSlot(el, parent);
    }
  }
  return isChild;
}
function showWarning(text) {
  try {
    console.warn(text);
    return;
  } catch (err) {
    // err
  }
}
function createElement(tag, classes) {
  if (classes === void 0) {
    classes = [];
  }
  const el = document.createElement(tag);
  el.classList.add(...(Array.isArray(classes) ? classes : classesToTokens(classes)));
  return el;
}
function elementOffset(el) {
  const window = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
  const document = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.g)();
  const box = el.getBoundingClientRect();
  const body = document.body;
  const clientTop = el.clientTop || body.clientTop || 0;
  const clientLeft = el.clientLeft || body.clientLeft || 0;
  const scrollTop = el === window ? window.scrollY : el.scrollTop;
  const scrollLeft = el === window ? window.scrollX : el.scrollLeft;
  return {
    top: box.top + scrollTop - clientTop,
    left: box.left + scrollLeft - clientLeft
  };
}
function elementPrevAll(el, selector) {
  const prevEls = [];
  while (el.previousElementSibling) {
    const prev = el.previousElementSibling; // eslint-disable-line
    if (selector) {
      if (prev.matches(selector)) prevEls.push(prev);
    } else prevEls.push(prev);
    el = prev;
  }
  return prevEls;
}
function elementNextAll(el, selector) {
  const nextEls = [];
  while (el.nextElementSibling) {
    const next = el.nextElementSibling; // eslint-disable-line
    if (selector) {
      if (next.matches(selector)) nextEls.push(next);
    } else nextEls.push(next);
    el = next;
  }
  return nextEls;
}
function elementStyle(el, prop) {
  const window = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
  return window.getComputedStyle(el, null).getPropertyValue(prop);
}
function elementIndex(el) {
  let child = el;
  let i;
  if (child) {
    i = 0;
    // eslint-disable-next-line
    while ((child = child.previousSibling) !== null) {
      if (child.nodeType === 1) i += 1;
    }
    return i;
  }
  return undefined;
}
function elementParents(el, selector) {
  const parents = []; // eslint-disable-line
  let parent = el.parentElement; // eslint-disable-line
  while (parent) {
    if (selector) {
      if (parent.matches(selector)) parents.push(parent);
    } else {
      parents.push(parent);
    }
    parent = parent.parentElement;
  }
  return parents;
}
function elementTransitionEnd(el, callback) {
  function fireCallBack(e) {
    if (e.target !== el) return;
    callback.call(el, e);
    el.removeEventListener('transitionend', fireCallBack);
  }
  if (callback) {
    el.addEventListener('transitionend', fireCallBack);
  }
}
function elementOuterSize(el, size, includeMargins) {
  const window = (0,_ssr_window_esm_mjs__WEBPACK_IMPORTED_MODULE_0__.a)();
  if (includeMargins) {
    return el[size === 'width' ? 'offsetWidth' : 'offsetHeight'] + parseFloat(window.getComputedStyle(el, null).getPropertyValue(size === 'width' ? 'margin-right' : 'margin-top')) + parseFloat(window.getComputedStyle(el, null).getPropertyValue(size === 'width' ? 'margin-left' : 'margin-bottom'));
  }
  return el.offsetWidth;
}
function makeElementsArray(el) {
  return (Array.isArray(el) ? el : [el]).filter(e => !!e);
}
function getRotateFix(swiper) {
  return v => {
    if (Math.abs(v) > 0 && swiper.browser && swiper.browser.need3dFix && Math.abs(v) % 90 === 0) {
      return v + 0.001;
    }
    return v;
  };
}
function setInnerHTML(el, html) {
  if (html === void 0) {
    html = '';
  }
  if (typeof trustedTypes !== 'undefined') {
    el.innerHTML = trustedTypes.createPolicy('html', {
      createHTML: s => s
    }).createHTML(html);
  } else {
    el.innerHTML = html;
  }
}




/***/ }),

/***/ "./node_modules/swiper/swiper-bundle.mjs":
/*!***********************************************!*\
  !*** ./node_modules/swiper/swiper-bundle.mjs ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Swiper: () => (/* reexport safe */ _shared_swiper_core_mjs__WEBPACK_IMPORTED_MODULE_0__.S),
/* harmony export */   "default": () => (/* reexport safe */ _shared_swiper_core_mjs__WEBPACK_IMPORTED_MODULE_0__.S)
/* harmony export */ });
/* harmony import */ var _shared_swiper_core_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/swiper-core.mjs */ "./node_modules/swiper/shared/swiper-core.mjs");
/* harmony import */ var _modules_virtual_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/virtual.mjs */ "./node_modules/swiper/modules/virtual.mjs");
/* harmony import */ var _modules_keyboard_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/keyboard.mjs */ "./node_modules/swiper/modules/keyboard.mjs");
/* harmony import */ var _modules_mousewheel_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/mousewheel.mjs */ "./node_modules/swiper/modules/mousewheel.mjs");
/* harmony import */ var _modules_navigation_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/navigation.mjs */ "./node_modules/swiper/modules/navigation.mjs");
/* harmony import */ var _modules_pagination_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/pagination.mjs */ "./node_modules/swiper/modules/pagination.mjs");
/* harmony import */ var _modules_scrollbar_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/scrollbar.mjs */ "./node_modules/swiper/modules/scrollbar.mjs");
/* harmony import */ var _modules_parallax_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/parallax.mjs */ "./node_modules/swiper/modules/parallax.mjs");
/* harmony import */ var _modules_zoom_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/zoom.mjs */ "./node_modules/swiper/modules/zoom.mjs");
/* harmony import */ var _modules_controller_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/controller.mjs */ "./node_modules/swiper/modules/controller.mjs");
/* harmony import */ var _modules_a11y_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/a11y.mjs */ "./node_modules/swiper/modules/a11y.mjs");
/* harmony import */ var _modules_history_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/history.mjs */ "./node_modules/swiper/modules/history.mjs");
/* harmony import */ var _modules_hash_navigation_mjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modules/hash-navigation.mjs */ "./node_modules/swiper/modules/hash-navigation.mjs");
/* harmony import */ var _modules_autoplay_mjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modules/autoplay.mjs */ "./node_modules/swiper/modules/autoplay.mjs");
/* harmony import */ var _modules_thumbs_mjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./modules/thumbs.mjs */ "./node_modules/swiper/modules/thumbs.mjs");
/* harmony import */ var _modules_free_mode_mjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./modules/free-mode.mjs */ "./node_modules/swiper/modules/free-mode.mjs");
/* harmony import */ var _modules_grid_mjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./modules/grid.mjs */ "./node_modules/swiper/modules/grid.mjs");
/* harmony import */ var _modules_manipulation_mjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./modules/manipulation.mjs */ "./node_modules/swiper/modules/manipulation.mjs");
/* harmony import */ var _modules_effect_fade_mjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./modules/effect-fade.mjs */ "./node_modules/swiper/modules/effect-fade.mjs");
/* harmony import */ var _modules_effect_cube_mjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./modules/effect-cube.mjs */ "./node_modules/swiper/modules/effect-cube.mjs");
/* harmony import */ var _modules_effect_flip_mjs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./modules/effect-flip.mjs */ "./node_modules/swiper/modules/effect-flip.mjs");
/* harmony import */ var _modules_effect_coverflow_mjs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./modules/effect-coverflow.mjs */ "./node_modules/swiper/modules/effect-coverflow.mjs");
/* harmony import */ var _modules_effect_creative_mjs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./modules/effect-creative.mjs */ "./node_modules/swiper/modules/effect-creative.mjs");
/* harmony import */ var _modules_effect_cards_mjs__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./modules/effect-cards.mjs */ "./node_modules/swiper/modules/effect-cards.mjs");
/**
 * Swiper 11.2.10
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2025 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: June 28, 2025
 */


























// Swiper Class
const modules = [_modules_virtual_mjs__WEBPACK_IMPORTED_MODULE_1__["default"], _modules_keyboard_mjs__WEBPACK_IMPORTED_MODULE_2__["default"], _modules_mousewheel_mjs__WEBPACK_IMPORTED_MODULE_3__["default"], _modules_navigation_mjs__WEBPACK_IMPORTED_MODULE_4__["default"], _modules_pagination_mjs__WEBPACK_IMPORTED_MODULE_5__["default"], _modules_scrollbar_mjs__WEBPACK_IMPORTED_MODULE_6__["default"], _modules_parallax_mjs__WEBPACK_IMPORTED_MODULE_7__["default"], _modules_zoom_mjs__WEBPACK_IMPORTED_MODULE_8__["default"], _modules_controller_mjs__WEBPACK_IMPORTED_MODULE_9__["default"], _modules_a11y_mjs__WEBPACK_IMPORTED_MODULE_10__["default"], _modules_history_mjs__WEBPACK_IMPORTED_MODULE_11__["default"], _modules_hash_navigation_mjs__WEBPACK_IMPORTED_MODULE_12__["default"], _modules_autoplay_mjs__WEBPACK_IMPORTED_MODULE_13__["default"], _modules_thumbs_mjs__WEBPACK_IMPORTED_MODULE_14__["default"], _modules_free_mode_mjs__WEBPACK_IMPORTED_MODULE_15__["default"], _modules_grid_mjs__WEBPACK_IMPORTED_MODULE_16__["default"], _modules_manipulation_mjs__WEBPACK_IMPORTED_MODULE_17__["default"], _modules_effect_fade_mjs__WEBPACK_IMPORTED_MODULE_18__["default"], _modules_effect_cube_mjs__WEBPACK_IMPORTED_MODULE_19__["default"], _modules_effect_flip_mjs__WEBPACK_IMPORTED_MODULE_20__["default"], _modules_effect_coverflow_mjs__WEBPACK_IMPORTED_MODULE_21__["default"], _modules_effect_creative_mjs__WEBPACK_IMPORTED_MODULE_22__["default"], _modules_effect_cards_mjs__WEBPACK_IMPORTED_MODULE_23__["default"]];
_shared_swiper_core_mjs__WEBPACK_IMPORTED_MODULE_0__.S.use(modules);




/***/ }),

/***/ "./src/js/_components.js":
/*!*******************************!*\
  !*** ./src/js/_components.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_swiper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/swiper.js */ "./src/js/components/swiper.js");
/* harmony import */ var _components_header_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/header.js */ "./src/js/components/header.js");
/* harmony import */ var _components_select_menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/select-menu.js */ "./src/js/components/select-menu.js");
/* harmony import */ var _components_accordion_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/accordion.js */ "./src/js/components/accordion.js");
/* harmony import */ var _components_tabs_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/tabs.js */ "./src/js/components/tabs.js");
/* harmony import */ var _components_news_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/news.js */ "./src/js/components/news.js");
/* harmony import */ var _components_map_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/map.js */ "./src/js/components/map.js");
/* harmony import */ var _components_hero_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/hero.js */ "./src/js/components/hero.js");







// import "./components/standards.js";


/***/ }),

/***/ "./src/js/components/accordion.js":
/*!****************************************!*\
  !*** ./src/js/components/accordion.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
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

/***/ }),

/***/ "./src/js/components/header.js":
/*!*************************************!*\
  !*** ./src/js/components/header.js ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
console.log("DEV BY TG-@ProKsiKzzz");
const headerDesctopEl = document.querySelector(".header_desktop");
const headerBurgrerEl = document.querySelector(".header-mobile__burger");
const headerMenuEl = document.querySelector(".header-mobile__menu");
const headerLinksEl = document.querySelectorAll(".header__menu-link");
const headerMobileLinkEl = document.querySelector(".header-mobile__menu-link");
const allHeaderItemsEl = document.querySelectorAll(".header__menu-item");
let lastPosition = 0;
let limitPosition = 0;
let scrolled = false;
window.addEventListener("scroll", event => {
  if (lastPosition < window.scrollY && limitPosition < window.scrollY) {
    headerDesctopEl.classList.add("header_slide");
  }
  if (lastPosition > window.scrollY) {
    headerDesctopEl.classList.remove("header_slide");
  }
  lastPosition = window.scrollY;
});
headerBurgrerEl.addEventListener("click", event => {
  document.body.classList.toggle("dis-scroll");
  headerBurgrerEl.classList.toggle("header-mobile__burger_active");
  headerMenuEl.classList.toggle("header-mobile__menu_active");
});
if (headerLinksEl.length > 0) {
  headerLinksEl.forEach(link => {
    window.location.href.includes(link.href) ? link.classList.add("header__menu-link_active") : link.classList.remove("header__menu-link_active");
    link.addEventListener("click", () => {
      headerMenuEl.classList.remove("header-mobile__menu_active");
      headerBurgrerEl.classList.remove("header-mobile__burger_active");
      document.body.classList.remove("dis-scroll");
    });
    link.innerHTML = `<span class="header__menu-link_text">${link.textContent}</span>`;
    const dublicate = link.appendChild(document.createElement("span"));
    dublicate.textContent = link.textContent;
    dublicate.classList.add("header__menu-link_dublicate");
  });
}
if (headerMobileLinkEl.length > 0) {
  headerMobileLinkEl.forEach(link => {
    window.location.href.includes(link.href) ? link.classList.add("header-mobile__menu-link_active") : link.classList.remove("header-mobile__menu-link_active");
    link.addEventListener("click", () => {
      headerMenuEl.classList.remove("header-mobile__menu_active");
      headerBurgrerEl.classList.remove("header-mobile__burger_active");
      document.body.classList.remove("dis-scroll");
    });
  });
}

/***/ }),

/***/ "./src/js/components/hero.js":
/*!***********************************!*\
  !*** ./src/js/components/hero.js ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
const grid = document.getElementById("grid");
const cols = getCols();
const rows = Math.floor(window.innerHeight / (window.innerWidth / cols));
function getCols() {
  if (window.innerWidth <= 480) return 4;
  if (window.innerWidth <= 768) return 5;
  if (window.innerWidth <= 1200) return 6;
  return 7;
}
function randomColor() {
  return `hsl(${Math.floor(Math.random() * 360)}, 70%, 50%)`;
}
const svgIcons = [`<svg width="56" height="58" viewBox="0 0 56 58" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M51.9358 22.3712H46.8474L34.4716 7.72898C33.9463 7.10131 33.2062 6.69169 32.3954 6.57993C31.5846 6.46817 30.7612 6.66229 30.0858 7.12445L17.1883 15.8629C16.4591 16.357 15.956 17.1205 15.7897 17.9855C15.6234 18.8506 15.8076 19.7462 16.3017 20.4755C16.7958 21.2047 17.5593 21.7078 18.4244 21.8741C19.2894 22.0404 20.1851 21.8562 20.9143 21.3621L31.3454 14.2903L42.7754 27.8365C43.0869 28.2058 43.4756 28.5022 43.9142 28.7048C44.3528 28.9075 44.8305 29.0114 45.3136 29.0092H51.9437C52.8239 29.0082 53.6677 28.6575 54.2894 28.0343C54.9111 27.4111 55.2598 26.5665 55.2587 25.6863C55.2577 24.806 54.907 23.9622 54.2838 23.3406C53.6606 22.7189 52.816 22.3702 51.9358 22.3712ZM53.6126 7.45398C53.6126 8.76595 53.2235 10.0485 52.4945 11.1393C51.7656 12.2301 50.7294 13.0802 49.5172 13.582C48.305 14.0839 46.9712 14.2149 45.6845 13.9586C44.3978 13.7023 43.2161 13.0702 42.2887 12.1421C41.3613 11.2141 40.73 10.0319 40.4746 8.74499C40.2192 7.45811 40.3513 6.1244 40.854 4.91256C41.3567 3.70073 42.2075 2.66521 43.2989 1.937C44.3902 1.20878 45.673 0.820597 46.9849 0.821535C47.8557 0.821639 48.7179 0.993297 49.5222 1.3267C50.3266 1.66011 51.0574 2.14873 51.6729 2.76465C52.2884 3.38057 52.7765 4.11172 53.1093 4.91633C53.4421 5.72094 53.6132 6.58324 53.6126 7.45398ZM34.2369 22.4013C34.229 22.3973 34.229 22.4013 34.2369 22.4013L34.229 22.3934H34.2226C34.1436 22.3143 34.0362 22.2914 33.9619 22.2243C33.7108 22.001 33.4246 21.8208 33.1147 21.6909C32.8326 21.6035 32.5405 21.5522 32.2455 21.5383C32.1159 21.5304 31.9958 21.4656 31.8606 21.4656C31.5282 21.4865 31.2013 21.5598 30.8918 21.6829C30.8009 21.6931 30.7114 21.713 30.6247 21.7422C30.4402 21.84 30.2678 21.9591 30.1111 22.097C29.9065 22.2059 29.7156 22.3385 29.5421 22.4921L1.66813 51.5728C1.36749 51.887 1.13168 52.2573 0.97416 52.6626C0.816639 53.0679 0.740495 53.5003 0.750071 53.935C0.759647 54.3698 0.854756 54.7984 1.02997 55.1963C1.20519 55.5943 1.45707 55.9539 1.77125 56.2545C2.08543 56.5552 2.45575 56.791 2.86106 56.9485C3.26638 57.106 3.69874 57.1822 4.13348 57.1726C4.56822 57.163 4.99682 57.0679 5.39481 56.8927C5.79279 56.7175 6.15236 56.4656 6.453 56.1514L32.0329 29.4604L41.9899 38.9433H28.7242C27.8698 38.9806 27.0628 39.3462 26.4715 39.964C25.8801 40.5817 25.55 41.4039 25.55 42.2591C25.55 43.1143 25.8801 43.9364 26.4715 44.5542C27.0628 45.1719 27.8698 45.5376 28.7242 45.5749H50.2818C50.9438 45.5731 51.59 45.3735 52.1376 45.0016C52.6852 44.6297 53.1091 44.1025 53.3548 43.4878C53.6005 42.8732 53.6568 42.1991 53.5165 41.5522C53.3761 40.9053 53.0455 40.3151 52.5672 39.8576L34.2369 22.4013Z" fill="#fff"/>
</svg>`, `<svg width="72" height="57" viewBox="0 0 72 57" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M50.7791 21.4018C50.7712 21.3979 50.7712 21.4018 50.7791 21.4018L50.7713 21.3939H50.7657C50.6914 21.3149 50.5816 21.292 50.5065 21.2248C50.2546 21.0023 49.9686 20.8217 49.6594 20.6898C49.3757 20.6036 49.0824 20.5529 48.7862 20.5389C48.6566 20.531 48.5373 20.4678 48.4021 20.4678C48.0701 20.489 47.7433 20.5612 47.4333 20.6819C47.3432 20.6932 47.2543 20.7128 47.1678 20.7404C46.9837 20.8398 46.8114 20.9596 46.6541 21.0976C46.4507 21.2063 46.261 21.3389 46.0891 21.4927L18.2096 50.5757C17.903 50.8889 17.6617 51.2598 17.4995 51.667C17.3373 52.0742 17.2575 52.5094 17.2647 52.9477C17.272 53.3859 17.3661 53.8183 17.5417 54.2199C17.7172 54.6214 17.9707 54.9842 18.2875 55.2871C18.6042 55.59 18.978 55.827 19.387 55.9845C19.796 56.1419 20.2322 56.2166 20.6703 56.2043C21.1084 56.1919 21.5397 56.0928 21.9392 55.9125C22.3387 55.7323 22.6985 55.4746 22.9976 55.1543L48.5783 28.461L58.5353 37.9438H45.2673C44.4129 37.9811 43.6059 38.3468 43.0145 38.9645C42.4232 39.5823 42.0931 40.4044 42.0931 41.2596C42.0931 42.1148 42.4232 42.937 43.0145 43.5547C43.6059 44.1725 44.4129 44.5381 45.2673 44.5755H66.8233C67.4854 44.574 68.1319 44.3746 68.6797 44.0028C69.2276 43.631 69.6517 43.1039 69.8976 42.4891C70.1435 41.8744 70.1999 41.2002 70.0596 40.5531C69.9193 39.9061 69.5887 39.3158 69.1102 38.8581L50.7791 21.4018ZM3.50966 28.0058H28.6881C29.5425 27.9685 30.3495 27.6028 30.9408 26.9851C31.5322 26.3673 31.8623 25.5452 31.8623 24.69C31.8623 23.8348 31.5322 23.0126 30.9408 22.3949C30.3495 21.7771 29.5425 21.4115 28.6881 21.3742H3.50966C2.6553 21.4115 1.84831 21.7771 1.25695 22.3949C0.665585 23.0126 0.335492 23.8348 0.335492 24.69C0.335492 25.5452 0.665585 26.3673 1.25695 26.9851C1.84831 27.6028 2.6553 27.9685 3.50966 28.0058ZM3.50966 37.9533H22.0604C22.9394 37.9533 23.7824 37.6041 24.404 36.9826C25.0255 36.361 25.3747 35.518 25.3747 34.639C25.3747 33.76 25.0255 32.9171 24.404 32.2955C23.7824 31.674 22.9394 31.3248 22.0604 31.3248H3.50966C2.63067 31.3248 1.78768 31.674 1.16614 32.2955C0.544594 32.9171 0.195416 33.76 0.195416 34.639C0.195416 35.518 0.544594 36.361 1.16614 36.9826C1.78768 37.6041 2.63067 37.9533 3.50966 37.9533ZM18.7414 44.5913C18.7414 43.7117 18.3923 42.8681 17.7707 42.2458C17.1492 41.6235 16.306 41.2733 15.4264 41.2723H3.50966C2.62941 41.2723 1.78521 41.622 1.16278 42.2444C0.540352 42.8668 0.190674 43.711 0.190674 44.5913C0.190674 45.4715 0.540352 46.3157 1.16278 46.9381C1.78521 47.5606 2.62941 47.9102 3.50966 47.9102H15.4264C16.3067 47.9102 17.1509 47.5606 17.7733 46.9381C18.3957 46.3157 18.7454 45.4715 18.7454 44.5913M69.699 6.45452C69.699 7.67471 69.3371 8.86749 68.6592 9.88204C67.9813 10.8966 67.0178 11.6873 65.8905 12.1543C64.7632 12.6212 63.5228 12.7434 62.326 12.5053C61.1293 12.2673 60.03 11.6797 59.1672 10.8169C58.3044 9.95412 57.7168 8.85484 57.4788 7.6581C57.2407 6.46136 57.3629 5.22091 57.8298 4.09361C58.2968 2.9663 59.0875 2.00278 60.1021 1.32488C61.1166 0.646982 62.3094 0.285156 63.5296 0.285156C65.1657 0.285575 66.7346 0.935696 67.8915 2.09259C69.0484 3.24948 69.6985 4.81843 69.699 6.45452ZM68.4828 21.3734H63.396L51.0186 6.72715C50.4918 6.09954 49.7504 5.6903 48.9387 5.579C48.1269 5.46771 47.3027 5.66232 46.6265 6.12499L33.7369 14.8634C33.3759 15.108 33.0665 15.4213 32.8265 15.7855C32.5865 16.1497 32.4206 16.5575 32.3382 16.9858C32.2558 17.4141 32.2586 17.8544 32.3464 18.2816C32.4342 18.7088 32.6053 19.1145 32.8499 19.4756C33.0945 19.8367 33.4078 20.1461 33.772 20.3861C34.1362 20.6261 34.544 20.792 34.9723 20.8744C35.4006 20.9567 35.8409 20.9539 36.2681 20.8661C36.6953 20.7783 37.101 20.6073 37.4621 20.3627L47.8821 13.2885L59.3216 26.8371C59.6323 27.2062 60.0204 27.5026 60.4583 27.7053C60.8962 27.9079 61.3733 28.0119 61.8559 28.0098H68.4899C69.3701 28.009 70.2141 27.6586 70.836 27.0357C71.4579 26.4127 71.8069 25.5683 71.8061 24.688C71.8054 23.8078 71.455 22.9639 70.8321 22.3419C70.2091 21.72 69.3646 21.3711 68.4844 21.3718" fill="#fff"/>
</svg>`, `<svg width="80" height="70" viewBox="0 0 80 70" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.62677 23.3805H28.7262C29.1646 23.3873 29.5999 23.3068 30.0068 23.1437C30.4137 22.9807 30.7842 22.7383 31.0966 22.4307C31.4089 22.1231 31.657 21.7565 31.8263 21.3521C31.9957 20.9477 32.0829 20.5137 32.0829 20.0753C32.0829 19.6369 31.9957 19.2029 31.8263 18.7986C31.657 18.3942 31.4089 18.0275 31.0966 17.72C30.7842 17.4124 30.4137 17.17 30.0068 17.0069C29.5999 16.8439 29.1646 16.7634 28.7262 16.7702H3.62677C2.75904 16.7836 1.93139 17.1377 1.3225 17.7561C0.713609 18.3745 0.372327 19.2075 0.372327 20.0753C0.372327 20.9432 0.713609 21.7762 1.3225 22.3946C1.93139 23.013 2.75904 23.3671 3.62677 23.3805ZM3.62677 33.298H22.1183C22.9858 33.2845 23.8132 32.9305 24.422 32.3123C25.0307 31.694 25.3719 30.8612 25.3719 29.9936C25.3719 29.126 25.0307 28.2931 24.422 27.6749C23.8132 27.0567 22.9858 26.7026 22.1183 26.6892H3.62677C2.75925 26.7026 1.9318 27.0567 1.32306 27.6749C0.714312 28.2931 0.37311 29.126 0.37311 29.9936C0.37311 30.8612 0.714312 31.694 1.32306 32.3123C1.9318 32.9305 2.75925 33.2845 3.62677 33.298ZM18.8096 39.9106C18.8098 39.4767 18.7245 39.0469 18.5586 38.646C18.3927 38.245 18.1494 37.8806 17.8427 37.5736C17.5359 37.2667 17.1717 37.0231 16.7709 36.857C16.37 36.6908 15.9403 36.6052 15.5064 36.6051H3.62519C2.74829 36.6051 1.90731 36.9534 1.28725 37.5735C0.667194 38.1935 0.318848 39.0345 0.318848 39.9114C0.318848 40.7883 0.667194 41.6293 1.28725 42.2494C1.90731 42.8694 2.74829 43.2178 3.62519 43.2178H15.5064C16.3827 43.2165 17.2228 42.8675 17.8421 42.2475C18.4614 41.6275 18.8093 40.787 18.8096 39.9106ZM25.5139 39.3749L25.8023 39.6064C25.8987 39.6804 25.9791 39.7731 26.0387 39.8789C26.0983 39.9848 26.136 40.1016 26.1493 40.2223C26.1627 40.3431 26.1515 40.4653 26.1165 40.5816C26.0814 40.6979 26.0232 40.8059 25.9454 40.8992L7.59138 60.9325L8.23463 61.5267C8.39587 61.6665 8.4975 61.8627 8.51866 62.075C8.53982 62.2874 8.47891 62.4998 8.34842 62.6686L8.14455 62.9191C8.07847 63.0035 7.99608 63.0736 7.90228 63.1254C7.80848 63.1772 7.7052 63.2096 7.59862 63.2206C7.49203 63.2316 7.38432 63.221 7.28193 63.1894C7.17953 63.1578 7.08455 63.106 7.00266 63.0369L6.30409 62.392L5.75882 63.01C5.60212 63.1946 5.38073 63.3122 5.14006 63.3388C4.89938 63.3654 4.65765 63.299 4.46442 63.153L4.17599 62.9231C4.08015 62.8486 4.0002 62.7556 3.94084 62.6497C3.88149 62.5438 3.84393 62.4272 3.83037 62.3065C3.81682 62.1859 3.82756 62.0638 3.86194 61.9474C3.89633 61.8309 3.95367 61.7226 4.03058 61.6287L4.68174 60.8914L3.81248 60.0853C3.65007 59.9465 3.54714 59.7507 3.52493 59.5382C3.50273 59.3257 3.56295 59.1128 3.69315 58.9434L3.90098 58.6906C3.96691 58.6064 4.04912 58.5363 4.14272 58.4846C4.23631 58.4329 4.33937 58.4006 4.44573 58.3896C4.55209 58.3786 4.65958 58.3892 4.76177 58.4207C4.86396 58.4521 4.95876 58.5039 5.0405 58.5728L5.97061 59.4334L24.225 39.5195C24.3801 39.3331 24.6013 39.2139 24.8422 39.1868C25.0832 39.1597 25.3252 39.2268 25.5179 39.3741M40.7884 60.2134H34.2895V62.637H40.7844L40.7884 60.2134ZM42.2969 62.2047V63.5063C42.3099 63.67 42.2863 63.8346 42.2278 63.988C42.1692 64.1415 42.0773 64.28 41.9586 64.3935C41.8399 64.507 41.6974 64.5926 41.5414 64.6442C41.3855 64.6958 41.22 64.712 41.057 64.6916H0.333072V67.1105H41.9516C45.265 66.6885 44.7095 62.2008 44.7095 62.2008L42.2969 62.2047ZM20.5275 64.1385C21.1811 64.7749 22.0584 65.1293 22.9706 65.1257C23.8829 65.122 24.7572 64.7604 25.4056 64.1187L40.3664 49.4274C40.9879 48.8208 41.359 48.003 41.4063 47.1357L53.1808 17.9595C53.3528 17.535 53.4392 17.0806 53.435 16.6226C53.4309 16.1646 53.3363 15.712 53.1567 15.2906C52.9771 14.8693 52.716 14.4876 52.3884 14.1674C52.0609 13.8473 51.6733 13.595 51.2479 13.4251C50.9224 13.2975 50.5801 13.2176 50.2317 13.188C49.6233 12.9338 48.9552 12.8579 48.3053 12.969C47.6554 13.08 47.0504 13.3736 46.561 13.8155L27.6871 33.2703C26.9999 33.8902 26.5867 34.7574 26.5382 35.6816C26.4898 36.6058 26.81 37.5114 27.4286 38.1998L27.4832 38.2606C28.1097 38.9246 28.9719 39.3161 29.8841 39.351C30.7964 39.3859 31.6859 39.0613 32.3613 38.4471L40.9749 29.5688L34.9074 44.6086C34.8322 44.796 34.7733 44.9895 34.7312 45.187L20.5196 59.1457C19.8591 59.7938 19.4827 60.6775 19.4732 61.6028C19.4637 62.5281 19.8219 63.4193 20.4691 64.0808L20.5275 64.1385ZM76.7709 57.7257V59.0288C76.784 59.1927 76.7603 59.3574 76.7017 59.511C76.6431 59.6646 76.551 59.8032 76.4321 59.9167C76.3132 60.0302 76.1705 60.1158 76.0143 60.1673C75.8582 60.2187 75.6926 60.2347 75.5295 60.2141H64.6408L68.5604 22.4717C68.5645 22.35 68.5437 22.2288 68.4994 22.1154C68.455 22.002 68.388 21.8988 68.3025 21.8122C68.2169 21.7256 68.1145 21.6573 68.0017 21.6116C67.8888 21.5659 67.7678 21.5437 67.6461 21.5464H67.2755C67.0327 21.5504 66.8009 21.6479 66.6283 21.8187C66.4557 21.9895 66.3558 22.2203 66.3493 22.463L62.4226 60.2165H57.5579C57.9346 59.802 58.2058 59.3028 58.3485 58.7612C58.4911 58.2196 58.5011 57.6516 58.3774 57.1054L56.5907 49.0355C56.5049 48.6456 56.3531 48.2733 56.1418 47.9347C56.0994 47.2935 55.8806 46.6766 55.5097 46.1519L50.7738 39.3804C50.241 38.628 49.432 38.1171 48.5236 37.9595C47.6152 37.8018 46.6814 38.0102 45.9262 38.5391C45.1711 39.0679 44.656 39.8742 44.4936 40.7818C44.3312 41.6893 44.5347 42.6242 45.0596 43.3821L49.7046 50.0162C49.7177 50.1951 49.7441 50.3729 49.7836 50.548L51.5727 58.6155C51.7033 59.2119 51.989 59.7634 52.4009 60.2141H47.4832V62.637H62.1698L61.8244 65.9663L60.56 65.8683C60.4532 65.8653 60.3469 65.8838 60.2473 65.9226C60.1477 65.9614 60.0569 66.0198 59.9802 66.0942C59.9035 66.1687 59.8425 66.2577 59.8008 66.3562C59.7592 66.4546 59.7376 66.5603 59.7374 66.6672V66.9936C59.7397 67.2069 59.8237 67.4113 59.9722 67.5645C60.1207 67.7177 60.3224 67.8081 60.5355 67.817L61.7209 67.9095L61.668 68.8901C61.6659 69.0112 61.688 69.1315 61.733 69.244C61.778 69.3564 61.845 69.4588 61.9301 69.5449C62.0152 69.6311 62.1166 69.6995 62.2285 69.7459C62.3403 69.7924 62.4604 69.816 62.5815 69.8155H62.9521C63.1945 69.81 63.4256 69.7118 63.5978 69.5412C63.7701 69.3705 63.8704 69.1404 63.8782 68.898L63.9217 68.0762L64.87 68.1505C64.9771 68.1535 65.0837 68.135 65.1835 68.0961C65.2833 68.0571 65.3742 67.9985 65.4509 67.9236C65.5276 67.8488 65.5884 67.7593 65.6298 67.6605C65.6712 67.5617 65.6923 67.4555 65.6918 67.3484L65.6974 67.0244C65.6944 66.8113 65.6101 66.6073 65.4617 66.4543C65.3134 66.3012 65.1122 66.2106 64.8992 66.201L64.026 66.1338L64.3887 62.6323H76.4287C79.7406 62.2087 79.1851 57.7225 79.1851 57.7225L76.7709 57.7257ZM47.1023 15.6417C46.7597 16.488 46.7631 17.4349 47.1117 18.2787C47.4604 19.1225 48.1264 19.7956 48.9665 20.1532L55.4986 22.9672C56.3456 23.3171 57.2963 23.3197 58.1453 22.9744C58.9942 22.629 59.6731 21.9636 60.0354 21.1217C60.3977 20.2799 60.4141 19.3293 60.0813 18.4755C59.7484 17.6216 59.0929 16.9329 58.2565 16.5584L51.7221 13.7491C50.8722 13.3819 49.9114 13.367 49.0507 13.7078C48.1899 14.0486 47.4997 14.7172 47.1316 15.5667L47.1023 15.6417ZM55.0979 22.3801C55.5326 23.183 56.2651 23.7831 57.1379 24.0512C58.0107 24.3193 58.9538 24.234 59.7643 23.8135L71.0694 18.0132C71.8921 17.5905 72.5132 16.8583 72.796 15.9776C73.0789 15.0969 73.0003 14.14 72.5775 13.3172C72.1548 12.4945 71.4226 11.8734 70.5419 11.5906C69.6612 11.3078 68.7043 11.3864 67.8816 11.8091L56.5812 17.611C55.7574 18.0327 55.1347 18.7643 54.85 19.6449C54.5654 20.5256 54.642 21.4832 55.0632 22.3074L55.0979 22.3801ZM58.1799 9.09621C57.628 10.1641 56.7718 11.0444 55.7196 11.6256C54.6673 12.2068 53.4663 12.4628 52.2685 12.3612C51.0707 12.2597 49.93 11.8051 48.9906 11.0551C48.0512 10.305 47.3554 9.29316 46.9913 8.14757C46.6271 7.00197 46.6109 5.77409 46.9448 4.6193C47.2786 3.4645 47.9475 2.43468 48.8668 1.66014C49.7861 0.885599 50.9145 0.401143 52.1092 0.268066C53.3039 0.134988 54.5112 0.359271 55.5784 0.912537C57.0087 1.65268 58.0864 2.93064 58.5746 4.46534C59.0627 6.00003 58.9213 7.66578 58.1814 9.09621" fill="#fff"/>
</svg>`, `<svg width="72" height="57" viewBox="0 0 72 57" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.0224 47.9089C16.8741 47.8577 17.6733 47.4805 18.2542 46.8555C18.8351 46.2306 19.1531 45.4059 19.142 44.5528C19.1309 43.6996 18.7917 42.8835 18.1947 42.2739C17.5978 41.6642 16.789 41.3079 15.9363 41.2788H12.3059C11.4542 41.33 10.655 41.7072 10.0741 42.3322C9.49316 42.9571 9.17525 43.7818 9.18633 44.635C9.19742 45.4881 9.53664 46.3042 10.1336 46.9139C10.7305 47.5235 11.5393 47.8799 12.392 47.9089H16.0224ZM3.35097 41.2788C4.00741 41.2788 4.6491 41.4735 5.1949 41.8382C5.74071 42.2029 6.16611 42.7212 6.41732 43.3277C6.66852 43.9342 6.73425 44.6015 6.60619 45.2453C6.47812 45.8891 6.16202 46.4805 5.69785 46.9447C5.23368 47.4089 4.6423 47.725 3.99848 47.853C3.35466 47.9811 2.68732 47.9154 2.08085 47.6642C1.47439 47.413 0.956032 46.9875 0.591337 46.4417C0.226642 45.8959 0.0319858 45.2543 0.0319858 44.5978C0.0313616 44.1618 0.116784 43.7299 0.283358 43.327C0.449932 42.924 0.694382 42.5579 1.0027 42.2495C1.31102 41.9412 1.67715 41.6968 2.08011 41.5302C2.48307 41.3636 2.91494 41.2782 3.35097 41.2788ZM21.9816 31.3219C22.638 31.3219 23.2797 31.5165 23.8255 31.8812C24.3713 32.2459 24.7967 32.7643 25.0479 33.3707C25.2991 33.9772 25.3648 34.6445 25.2368 35.2884C25.1087 35.9322 24.7926 36.5236 24.3284 36.9877C23.8643 37.4519 23.2729 37.768 22.6291 37.8961C21.9852 38.0241 21.3179 37.9584 20.7114 37.7072C20.105 37.456 19.5866 37.0306 19.2219 36.4848C18.8572 35.939 18.6626 35.2973 18.6626 34.6409C18.6626 33.7606 19.0122 32.9164 19.6347 32.294C20.2571 31.6715 21.1013 31.3219 21.9816 31.3219ZM28.7728 28.0029C29.6279 27.9561 30.4317 27.5807 31.0164 26.955C31.6011 26.3294 31.9213 25.502 31.9102 24.6457C31.8991 23.7895 31.5575 22.9707 30.9567 22.3605C30.356 21.7502 29.5427 21.3958 28.6867 21.3712H25.0556C24.2005 21.418 23.3967 21.7935 22.812 22.4191C22.2273 23.0447 21.9071 23.8721 21.9182 24.7284C21.9293 25.5846 22.2709 26.4034 22.8717 27.0136C23.4724 27.6239 24.2857 27.9783 25.1417 28.0029H28.7728ZM3.50981 28.0029H7.10617C7.96057 27.9604 8.76557 27.5896 9.35322 26.9679C9.94087 26.3463 10.2658 25.5217 10.2602 24.6662C10.2546 23.8108 9.91888 22.9906 9.32313 22.3766C8.72738 21.7627 7.91759 21.4025 7.06271 21.3712H3.46635C2.61194 21.4137 1.80694 21.7845 1.21929 22.4062C0.631645 23.0279 0.306732 23.8524 0.312338 24.7079C0.317944 25.5633 0.653638 26.3836 1.24939 26.9975C1.84513 27.6114 2.65492 27.9716 3.50981 28.0029ZM3.50981 37.9504H13.0566C13.9049 37.9 14.7015 37.5262 15.2824 36.906C15.8633 36.2858 16.1841 35.4664 16.1789 34.6166C16.1736 33.7669 15.8426 32.9515 15.2541 32.3386C14.6656 31.7256 13.8644 31.3617 13.0155 31.3219H3.50981C2.63082 31.3219 1.78783 31.671 1.16628 32.2926C0.544743 32.9141 0.195565 33.7571 0.195565 34.6361C0.195565 35.5151 0.544743 36.3581 1.16628 36.9796C1.78783 37.6012 2.63082 37.9504 3.50981 37.9504ZM16.1014 21.3712C16.7578 21.3712 17.3995 21.5659 17.9453 21.9306C18.4911 22.2953 18.9165 22.8136 19.1678 23.4201C19.419 24.0266 19.4847 24.6939 19.3566 25.3377C19.2286 25.9815 18.9125 26.5729 18.4483 27.0371C17.9841 27.5013 17.3927 27.8174 16.7489 27.9454C16.1051 28.0735 15.4378 28.0078 14.8313 27.7566C14.2248 27.5054 13.7065 27.0799 13.3418 26.5341C12.9771 25.9883 12.7824 25.3467 12.7824 24.6902C12.7824 23.81 13.1321 22.9658 13.7545 22.3433C14.377 21.7209 15.2212 21.3712 16.1014 21.3712ZM50.7793 21.3981C50.7714 21.3981 50.7714 21.3981 50.7793 21.3981L50.7714 21.391H50.7659C50.6916 21.312 50.5817 21.2883 50.5051 21.2219C50.2533 20.9985 49.967 20.8176 49.6572 20.6861C49.3744 20.6016 49.0826 20.5509 48.7879 20.5352C48.6583 20.5273 48.539 20.4648 48.4038 20.4648C48.072 20.487 47.7454 20.5589 47.435 20.6782C47.3449 20.6909 47.2561 20.7112 47.1695 20.739C46.9848 20.8374 46.8123 20.9573 46.6558 21.0962C46.4523 21.2028 46.2626 21.3339 46.0908 21.4866L18.2098 50.5744C17.9088 50.8888 17.6727 51.2593 17.515 51.665C17.3573 52.0706 17.281 52.5033 17.2905 52.9384C17.3 53.3735 17.3951 53.8025 17.5704 54.2008C17.7457 54.5992 17.9977 54.9591 18.3121 55.2601C18.6265 55.561 18.9971 55.7971 19.4027 55.9548C19.8083 56.1125 20.241 56.1888 20.6761 56.1793C21.1112 56.1698 21.5402 56.0747 21.9386 55.8994C22.3369 55.7241 22.6968 55.4721 22.9978 55.1577L48.5785 28.462L58.5354 37.9448H45.2674C44.8198 37.9253 44.3728 37.9966 43.9535 38.1544C43.5342 38.3122 43.1511 38.5533 42.8275 38.8631C42.5038 39.173 42.2462 39.5451 42.0703 39.9571C41.8943 40.3692 41.8036 40.8126 41.8036 41.2607C41.8036 41.7087 41.8943 42.1521 42.0703 42.5642C42.2462 42.9762 42.5038 43.3484 42.8275 43.6582C43.1511 43.968 43.5342 44.2091 43.9535 44.3669C44.3728 44.5247 44.8198 44.596 45.2674 44.5765H66.8234C67.4857 44.5752 68.1324 44.3758 68.6804 44.004C69.2284 43.6322 69.6527 43.1049 69.8986 42.49C70.1446 41.8751 70.2009 41.2007 70.0604 40.5535C69.92 39.9063 69.5891 39.316 69.1104 38.8583L50.7793 21.3981ZM69.6967 6.45396C69.6963 7.67411 69.334 8.86672 68.6557 9.88099C67.9775 10.8953 67.0137 11.6856 65.8863 12.1522C64.7588 12.6187 63.5184 12.7405 62.3217 12.502C61.1251 12.2636 60.0261 11.6756 59.1636 10.8126C58.3011 9.94954 57.7139 8.85011 57.4762 7.65333C57.2385 6.45655 57.361 5.21617 57.8283 4.08903C58.2956 2.9619 59.0865 1.99862 60.1012 1.32102C61.1159 0.643416 62.3088 0.281914 63.5289 0.282227C65.165 0.282227 66.7341 0.932102 67.8911 2.08891C69.048 3.24572 69.6981 4.81472 69.6983 6.4508M68.4845 21.3704H63.3978L51.0172 6.72738C50.4909 6.09964 49.7499 5.69014 48.9383 5.57855C48.1268 5.46696 47.3028 5.66125 46.6266 6.12364L33.7371 14.8621C33.0077 15.3561 32.5045 16.1195 32.3381 16.9846C32.1716 17.8496 32.3557 18.7453 32.8497 19.4747C33.3436 20.204 34.1071 20.7073 34.9722 20.8737C35.8372 21.0401 36.7329 20.8561 37.4622 20.3621L47.8823 13.2887L59.3225 26.8357C59.6333 27.2049 60.0213 27.5013 60.4592 27.7039C60.8972 27.9066 61.3743 28.0105 61.8568 28.0084H68.4908C69.3711 28.0077 70.215 27.6573 70.8369 27.0343C71.4588 26.4114 71.8078 25.5669 71.8071 24.6867C71.8063 23.8064 71.4559 22.9625 70.833 22.3406C70.21 21.7187 69.3648 21.3697 68.4845 21.3704Z" fill="#fff"/>
</svg>`, `<svg width="77" height="74" viewBox="0 0 77 74" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M69.4266 70.5732H55.0159C54.83 70.5732 54.646 70.6098 54.4743 70.6809C54.3026 70.752 54.1466 70.8563 54.0151 70.9877C53.8837 71.1191 53.7795 71.2751 53.7083 71.4469C53.6372 71.6186 53.6006 71.8026 53.6006 71.9885C53.6006 72.1743 53.6372 72.3584 53.7083 72.5301C53.7795 72.7018 53.8837 72.8578 54.0151 72.9892C54.1466 73.1207 54.3026 73.2249 54.4743 73.2961C54.646 73.3672 54.83 73.4038 55.0159 73.4038H69.4235C69.7988 73.4038 70.1588 73.2547 70.4242 72.9892C70.6897 72.7238 70.8388 72.3638 70.8388 71.9885C70.8388 71.6131 70.6897 71.2531 70.4242 70.9877C70.1588 70.7223 69.7988 70.5732 69.4235 70.5732M42.354 70.5732H27.9496C27.5742 70.5732 27.2142 70.7223 26.9488 70.9877C26.6834 71.2531 26.5343 71.6131 26.5343 71.9885C26.5343 72.3638 26.6834 72.7238 26.9488 72.9892C27.2142 73.2547 27.5742 73.4038 27.9496 73.4038H42.3571C42.7325 73.4038 43.0925 73.2547 43.3579 72.9892C43.6233 72.7238 43.7724 72.3638 43.7724 71.9885C43.7724 71.6131 43.6233 71.2531 43.3579 70.9877C43.0925 70.7223 42.7325 70.5732 42.3571 70.5732M75.0349 73.497H75.1076C75.4855 73.497 75.8479 73.3469 76.1151 73.0797C76.3823 72.8125 76.5324 72.4501 76.5324 72.0722C76.5324 71.6944 76.3823 71.332 76.1151 71.0648C75.8479 70.7976 75.4855 70.6474 75.1076 70.6474H75.0349C74.657 70.6474 74.2947 70.7976 74.0275 71.0648C73.7603 71.332 73.6101 71.6944 73.6101 72.0722C73.6101 72.4501 73.7603 72.8125 74.0275 73.0797C74.2947 73.3469 74.657 73.497 75.0349 73.497ZM48.8703 73.497H48.9422C49.32 73.497 49.6824 73.3469 49.9496 73.0797C50.2168 72.8125 50.367 72.4501 50.367 72.0722C50.367 71.6944 50.2168 71.332 49.9496 71.0648C49.6824 70.7976 49.32 70.6474 48.9422 70.6474H48.8703C48.4924 70.6474 48.13 70.7976 47.8628 71.0648C47.5956 71.332 47.4455 71.6944 47.4455 72.0722C47.4455 72.4501 47.5956 72.8125 47.8628 73.0797C48.13 73.3469 48.4924 73.497 48.8703 73.497ZM21.9635 73.497H22.0355C22.4133 73.497 22.7757 73.3469 23.0429 73.0797C23.3101 72.8125 23.4602 72.4501 23.4602 72.0722C23.4602 71.6944 23.3101 71.332 23.0429 71.0648C22.7757 70.7976 22.4133 70.6474 22.0355 70.6474H21.9635C21.5857 70.6474 21.2233 70.7976 20.9561 71.0648C20.6889 71.332 20.5387 71.6944 20.5387 72.0722C20.5387 72.4501 20.6889 72.8125 20.9561 73.0797C21.2233 73.3469 21.5857 73.497 21.9635 73.497ZM16.6002 70.5732H2.19265C1.81729 70.5732 1.4573 70.7223 1.19188 70.9877C0.926455 71.2531 0.777344 71.6131 0.777344 71.9885C0.777344 72.3638 0.926455 72.7238 1.19188 72.9892C1.4573 73.2547 1.81729 73.4038 2.19265 73.4038H16.6002C16.7861 73.4038 16.9701 73.3672 17.1418 73.2961C17.3135 73.2249 17.4696 73.1207 17.601 72.9892C17.7324 72.8578 17.8367 72.7018 17.9078 72.5301C17.9789 72.3584 18.0155 72.1743 18.0155 71.9885C18.0155 71.8026 17.9789 71.6186 17.9078 71.4469C17.8367 71.2751 17.7324 71.1191 17.601 70.9877C17.4696 70.8563 17.3135 70.752 17.1418 70.6809C16.9701 70.6098 16.7861 70.5732 16.6002 70.5732ZM33.87 41.7596H26.3304V46.2189H19.8505V41.7596H3.18756L13.5752 29.0763H7.00993L18.515 15.0299H11.685L23.687 0.375L34.2817 15.0299H27.8737L33.9206 23.3922L30.8347 25.4808C30.7818 25.5179 30.7288 25.5558 30.6767 25.5946C30.3568 25.811 30.0682 26.0705 29.8193 26.3658C29.6528 26.5504 29.5092 26.7545 29.3918 26.9735V26.9775C28.9293 27.7835 28.7495 28.7209 28.8808 29.6408C29.0122 30.5607 29.4472 31.4104 30.1168 32.0547C30.7864 32.699 31.6521 33.1011 32.5764 33.1971C33.5007 33.293 34.4305 33.0773 35.2182 32.5842L38.421 37.0095L33.87 41.7596ZM66.0784 32.7509H60.9901L48.615 18.1079C48.0901 17.4802 47.3502 17.0705 46.5397 16.9587C45.7291 16.8469 44.906 17.0411 44.2308 17.5033L31.3318 26.2418C30.6026 26.736 30.0997 27.4996 29.9335 28.3646C29.7674 29.2296 29.9517 30.1252 30.4459 30.8544C30.9401 31.5835 31.7037 32.0865 32.5688 32.2526C33.4338 32.4187 34.3294 32.2344 35.0585 31.7402L45.4896 24.6692L56.918 38.2154C57.2297 38.5845 57.6185 38.8807 58.057 39.0834C58.4955 39.286 58.9732 39.39 59.4562 39.3881H66.0863C66.9666 39.3871 67.8103 39.0364 68.432 38.4132C69.0537 37.79 69.4024 36.9454 69.4013 36.0652C69.4003 35.1849 69.0496 34.3411 68.4264 33.7195C67.8033 33.0978 66.9586 32.7499 66.0784 32.7509ZM67.7577 17.8305C67.7578 19.1426 67.3688 20.4253 66.6399 21.5163C65.911 22.6073 64.8749 23.4576 63.6627 23.9597C62.4504 24.4618 61.1165 24.593 59.8297 24.3369C58.5428 24.0808 57.3608 23.4488 56.4332 22.5209C55.5056 21.5929 54.874 20.4107 54.6183 19.1237C54.3627 17.8368 54.4944 16.5029 54.997 15.2909C55.4995 14.0788 56.3502 13.043 57.4414 12.3145C58.5327 11.586 59.8155 11.1974 61.1276 11.1981C61.9985 11.1981 62.8608 11.3696 63.6653 11.703C64.4699 12.0363 65.2009 12.5249 65.8166 13.1408C66.4323 13.7567 66.9206 14.4879 67.2536 15.2926C67.5867 16.0972 67.758 16.9596 67.7577 17.8305ZM48.3779 32.7802C48.3685 32.7762 48.3685 32.7802 48.3779 32.7802L48.3685 32.7723C48.2894 32.6932 48.1804 32.6703 48.1053 32.6032C47.8544 32.3797 47.5681 32.1995 47.2582 32.0697C46.976 31.9824 46.6839 31.9312 46.3889 31.9172C46.2577 31.9093 46.14 31.8445 46.0025 31.8445C45.6706 31.8656 45.3442 31.9389 45.0352 32.0618C44.9447 32.0724 44.8554 32.0923 44.7689 32.1211C44.584 32.2193 44.4108 32.3384 44.2529 32.4759C44.0491 32.5852 43.8587 32.7178 43.6855 32.871L15.8124 61.9517C15.5084 62.2652 15.2694 62.6357 15.1092 63.0419C14.949 63.4481 14.8707 63.8819 14.8788 64.3185C14.8869 64.7551 14.9814 65.1857 15.1566 65.5857C15.3319 65.9856 15.5845 66.3469 15.9 66.6489C16.2154 66.9508 16.5875 67.1873 16.9947 67.3448C17.402 67.5024 17.8363 67.5778 18.2729 67.5668C18.7094 67.5558 19.1394 67.4585 19.5382 67.2806C19.937 67.1028 20.2966 66.8478 20.5964 66.5303L46.1748 39.8417L56.1317 49.3245H42.8676C42.0133 49.3618 41.2063 49.7275 40.6149 50.3452C40.0236 50.963 39.6935 51.7852 39.6935 52.6404C39.6935 53.4955 40.0236 54.3177 40.6149 54.9355C41.2063 55.5532 42.0133 55.9189 42.8676 55.9562H64.4197C65.0822 55.9557 65.7294 55.7569 66.2779 55.3855C66.8265 55.0141 67.2514 54.487 67.4979 53.872C67.7444 53.2571 67.8012 52.5825 67.661 51.935C67.5208 51.2875 67.1901 50.6968 66.7114 50.2388L48.3779 32.7802Z" fill="#fff"/>
</svg>`, `<svg width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M31.5887 41.7596H24.0522V46.2189H17.5723V41.7596H0.90625L11.2923 29.0763H4.73336L16.2336 15.0299H9.40365L21.4065 0.375L32.0012 15.0299H25.5924L31.6401 23.3922L28.5581 25.4808C28.5028 25.5179 28.4523 25.5558 28.4001 25.5946C28.08 25.8114 27.791 26.0709 27.5411 26.3658C27.3767 26.5517 27.2338 26.7555 27.1152 26.9735V26.9775C26.653 27.7837 26.4734 28.7212 26.605 29.6411C26.7366 30.561 27.1718 31.4106 27.8415 32.0549C28.5112 32.6991 29.377 33.1011 30.3013 33.197C31.2256 33.293 32.1555 33.0772 32.9432 32.5842L36.142 37.0095L31.5887 41.7596ZM63.7979 32.7509H58.7096L46.3337 18.1079C45.8084 17.4802 45.0683 17.0706 44.2575 16.9588C43.4467 16.8471 42.6234 17.0412 41.9479 17.5033L29.0505 26.2418C28.6894 26.4864 28.3801 26.7997 28.1402 27.1638C27.9002 27.528 27.7343 27.9358 27.652 28.364C27.5697 28.7923 27.5725 29.2326 27.6603 29.6597C27.7481 30.0869 27.9192 30.4925 28.1638 30.8536C28.6578 31.5827 29.4212 32.0858 30.2861 32.252C30.7143 32.3344 31.1546 32.3315 31.5818 32.2437C32.0089 32.1559 32.4146 31.9848 32.7756 31.7402L43.2067 24.6692L54.6351 38.2154C54.9474 38.5847 55.3369 38.8811 55.7761 39.0837C56.2153 39.2863 56.6936 39.3902 57.1773 39.3881H63.8074C64.6876 39.3871 65.5314 39.0364 66.1531 38.4132C66.7748 37.79 67.1235 36.9454 67.1224 36.0652C67.1214 35.1849 66.7707 34.3411 66.1475 33.7195C65.5243 33.0978 64.6797 32.7491 63.7995 32.7501M65.4763 17.8305C65.4763 19.1425 65.0872 20.425 64.3582 21.5158C63.6293 22.6066 62.5931 23.4567 61.3809 23.9585C60.1687 24.4604 58.8349 24.5915 57.5482 24.3352C56.2615 24.0789 55.0798 23.4467 54.1524 22.5187C53.225 21.5906 52.5937 20.4084 52.3383 19.1215C52.0829 17.8346 52.215 16.5009 52.7177 15.2891C53.2204 14.0773 54.0712 13.0417 55.1626 12.3135C56.2539 11.5853 57.5367 11.1971 58.8486 11.1981C59.7194 11.1982 60.5816 11.3698 61.3859 11.7032C62.1903 12.0366 62.9211 12.5253 63.5366 13.1412C64.1521 13.7571 64.6402 14.4882 64.973 15.2929C65.3058 16.0975 65.4769 16.9598 65.4763 17.8305ZM46.0982 32.7802C46.0887 32.7762 46.0887 32.7802 46.0982 32.7802L46.0887 32.7723C46.0097 32.6932 45.9022 32.6703 45.8279 32.6032C45.5765 32.3804 45.2904 32.2002 44.9808 32.0697C44.6986 31.9826 44.4066 31.9313 44.1116 31.9172C43.9804 31.9093 43.8626 31.8445 43.7251 31.8445C43.3935 31.8656 43.0674 31.939 42.7587 32.0618C42.6678 32.0723 42.5783 32.0921 42.4916 32.1211C42.3065 32.2191 42.1333 32.3382 41.9756 32.4759C41.7721 32.5854 41.582 32.718 41.409 32.871L13.535 61.9517C13.231 62.2652 12.992 62.6357 12.8318 63.0418C12.6716 63.448 12.5933 63.8819 12.6014 64.3185C12.6096 64.7551 12.704 65.1857 12.8793 65.5857C13.0545 65.9856 13.3071 66.3469 13.6226 66.6489C13.9381 66.9508 14.3101 67.1873 14.7174 67.3448C15.1246 67.5024 15.559 67.5778 15.9955 67.5668C16.432 67.5558 16.862 67.4585 17.2608 67.2806C17.6596 67.1028 18.0193 66.8478 18.3191 66.5303L43.8958 39.8417L53.8528 49.3245H40.5863C39.732 49.3618 38.925 49.7275 38.3336 50.3452C37.7422 50.963 37.4122 51.7852 37.4122 52.6404C37.4122 53.4955 37.7422 54.3177 38.3336 54.9355C38.925 55.5532 39.732 55.9189 40.5863 55.9562H62.1423C62.8044 55.9547 63.451 55.7553 63.9988 55.3835C64.5466 55.0117 64.9708 54.4846 65.2167 53.8698C65.4626 53.2551 65.519 52.5809 65.3787 51.9338C65.2383 51.2868 64.9077 50.6965 64.4293 50.2388L46.0982 32.7802Z" fill="#fff"/>
</svg>`, `<svg width="76" height="36" viewBox="0 0 76 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M57.6512 7.6731C58.6522 7.43204 59.7078 7.59658 60.5879 8.13082C61.468 8.66507 62.1012 9.52566 62.3492 10.5249C62.5973 11.5241 62.4402 12.5809 61.9121 13.4647C61.384 14.3486 60.5279 14.9877 59.5304 15.2428L42.1073 17.4886L42.0836 17.4941C41.083 17.7312 40.0293 17.564 39.1513 17.0287C38.2733 16.4934 37.642 15.6333 37.3945 14.6352C37.147 13.6371 37.3033 12.5817 37.8294 11.6982C38.3555 10.8147 39.209 10.1745 40.2044 9.91658L57.6283 7.67863L57.6512 7.6731ZM5.20491 31.3865C4.33107 31.6215 3.39982 31.5032 2.61252 31.0571C1.82522 30.611 1.24515 29.8729 0.997716 29.0025C0.750286 28.1321 0.855385 27.1993 1.29029 26.4057C1.72519 25.6122 2.45495 25.0217 3.32178 24.7619L24.2843 20.6875L24.3025 20.682C25.1764 20.4475 26.1074 20.5663 26.8944 21.0126C27.6814 21.4589 28.2612 22.197 28.5085 23.0673C28.7559 23.9376 28.6509 24.8702 28.2162 25.6637C27.7816 26.4572 27.0522 27.0479 26.1856 27.3081L5.22387 31.3801L5.20491 31.3865ZM28.2007 26.2626C27.5265 26.8786 26.6352 27.2015 25.7229 27.1603C24.8106 27.1191 23.952 26.7171 23.3361 26.0429C22.7201 25.3687 22.3972 24.4774 22.4384 23.5651C22.4796 22.6528 22.8815 21.7942 23.5557 21.1782L38.0905 10.9684L38.1024 10.9549C38.7785 10.3491 39.6664 10.0346 40.5731 10.0799C41.4798 10.1252 42.332 10.5266 42.9443 11.1969C43.5567 11.8671 43.8796 12.752 43.8431 13.6591C43.8065 14.5662 43.4133 15.4222 42.749 16.0409L28.2173 26.2468L28.2007 26.2626ZM61.4309 28.3283C61.4057 28.7491 61.2958 29.1605 61.1078 29.5378C60.9198 29.9151 60.6576 30.2507 60.3369 30.5243C60.0162 30.7979 59.6436 31.004 59.2414 31.1302C58.8391 31.2564 58.4156 31.3002 57.996 31.2588C57.5765 31.2175 57.1696 31.0919 56.7997 30.8896C56.4299 30.6873 56.1046 30.4125 55.8435 30.0815C55.5824 29.7506 55.3907 29.3704 55.28 28.9636C55.1693 28.5568 55.1418 28.1319 55.1991 27.7143L56.5425 10.9194V10.8996C56.5673 10.478 56.6771 10.0658 56.8651 9.68762C57.0532 9.30947 57.3157 8.9732 57.6369 8.69899C57.9581 8.42478 58.3314 8.21829 58.7344 8.0919C59.1374 7.96551 59.5617 7.92183 59.982 7.96348C60.4023 8.00513 60.8098 8.13125 61.1801 8.33427C61.5505 8.5373 61.876 8.81304 62.1371 9.14496C62.3983 9.47688 62.5897 9.85813 62.6998 10.2658C62.81 10.6736 62.8367 11.0993 62.7783 11.5176L61.427 28.3101L61.4309 28.3283ZM70.7012 12.808C69.5305 13.1513 68.2844 13.1397 67.1203 12.7747C65.9563 12.4097 64.9266 11.7077 64.1615 10.7575C63.3965 9.80729 62.9304 8.65153 62.8222 7.4364C62.714 6.22127 62.9686 5.00135 63.5538 3.93092C64.1389 2.86049 65.0284 1.98764 66.1097 1.42275C67.191 0.857866 68.4155 0.626315 69.6283 0.757387C70.8412 0.888458 71.988 1.37626 72.9236 2.15911C73.8592 2.94196 74.5417 3.98468 74.8847 5.15541C75.1124 5.93227 75.185 6.7464 75.0981 7.55128C75.0112 8.35617 74.7666 9.13605 74.3782 9.8464C73.9899 10.5567 73.4654 11.1836 72.8348 11.6912C72.2041 12.1989 71.4797 12.5773 70.7027 12.8049M0.178223 33.3004H72.1457V35.6371H0.178223V33.3004Z" fill="#fff"/>
</svg>`, `<svg width="40" height="70" viewBox="0 0 40 70" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.1171 8.11298C10.2437 8.04995 10.3466 7.94779 10.4105 7.82167C10.4744 7.69554 10.496 7.55218 10.472 7.41284C11.0412 7.25595 11.567 6.97076 12.009 6.57914C13.5799 5.07295 12.7052 3.4585 11.1982 1.88909C9.6912 0.319686 8.11626 -0.621483 6.54527 0.884704C6.13158 1.30901 5.82092 1.82271 5.63729 2.38615C5.49435 2.3587 5.34633 2.3797 5.21666 2.44582C5.08699 2.51195 4.98307 2.61942 4.92134 2.75124C4.2827 2.78619 3.65701 2.94536 3.0793 3.21985C2.58017 3.44986 2.12376 3.76304 1.72958 4.146C1.14855 4.703 0.711616 5.39289 0.456413 6.15625C0.201211 6.91961 0.135389 7.73357 0.264615 8.52801C0.393842 9.32246 0.714243 10.0736 1.19823 10.7167C1.68221 11.3598 2.31527 11.8757 3.04288 12.2198C3.77049 12.5639 4.57085 12.7261 5.37503 12.6922C6.1792 12.6583 6.96309 12.4295 7.65919 12.0254C8.35528 11.6212 8.94272 11.054 9.3709 10.3724C9.79908 9.6909 10.0552 8.91548 10.1171 8.11298ZM10.1685 2.87136C10.988 3.72718 11.6217 4.46052 10.7643 5.28631C10.5194 5.51943 10.4664 5.45305 10.0531 5.65298C10.0055 5.54153 9.9278 5.44553 9.82871 5.37574C9.72961 5.30596 9.61304 5.26514 9.49206 5.25787C9.29002 4.89829 9.04277 4.56606 8.75635 4.26928C8.46319 3.96314 8.13234 3.69547 7.77172 3.47272C7.77072 3.34549 7.73286 3.22128 7.66274 3.11511C7.59262 3.00894 7.49323 2.92538 7.3766 2.87452C7.59629 2.46834 7.53465 2.41144 7.78199 2.17595C8.6394 1.35015 9.34744 2.0179 10.1677 2.87214M29.4929 69.9259C28.7335 69.9247 28.0056 69.6224 27.4687 69.0852C26.9319 68.5481 26.6299 67.82 26.6291 67.0606V44.233H23.5875V67.0598C23.575 67.8116 23.2676 68.5284 22.7315 69.0556C22.1954 69.5829 21.4736 69.8784 20.7217 69.8784C19.9698 69.8784 19.248 69.5829 18.7119 69.0556C18.1758 68.5284 17.8684 67.8116 17.8559 67.0598V41.9817C17.855 41.6702 17.9055 41.3608 18.0053 41.0658C17.8337 40.5779 17.7482 40.064 17.7524 39.547L17.8188 24.2369C17.8628 22.9382 18.4112 21.7077 19.3477 20.8068C20.2842 19.9059 21.5349 19.4055 22.8344 19.4118H28.2799V19.4631C29.4237 19.587 30.4826 20.1254 31.2566 20.9767C32.0306 21.828 32.466 22.9332 32.4808 24.0836L32.416 39.3881C32.4132 39.9041 32.3237 40.4159 32.1513 40.9022C32.2909 41.2455 32.3628 41.6126 32.363 41.9832V67.0598C32.3616 67.8197 32.0589 68.548 31.5213 69.0851C30.9838 69.6222 30.2552 69.9243 29.4953 69.9252M36.7923 42.858C36.0562 42.8808 35.3411 42.6108 34.8038 42.1071C34.2665 41.6035 33.9509 40.9073 33.9261 40.1712V23.3835C33.973 22.6555 34.2952 21.9726 34.8273 21.4736C35.3595 20.9746 36.0616 20.6969 36.7911 20.6969C37.5206 20.6969 38.2228 20.9746 38.7549 21.4736C39.287 21.9726 39.6093 22.6555 39.6561 23.3835V40.1728C39.6316 40.9085 39.3163 41.6044 38.7795 42.1081C38.2427 42.6117 37.5281 42.882 36.7923 42.8596M31.2828 12.385C31.2901 13.6048 30.9356 14.7994 30.2641 15.8177C29.5926 16.8361 28.6343 17.6325 27.5102 18.1063C26.3862 18.58 25.1469 18.7099 23.949 18.4795C22.7512 18.2491 21.6485 17.6687 20.7805 16.8117C19.9125 15.9547 19.318 14.8595 19.0722 13.6647C18.8265 12.4699 18.9405 11.2291 19.3998 10.0991C19.8592 8.96905 20.6433 8.00059 21.6529 7.31611C22.6626 6.63163 23.8525 6.26186 25.0723 6.25356C26.7088 6.24347 28.2824 6.88369 29.447 8.03348C30.6116 9.18326 31.2719 10.7485 31.2828 12.385ZM14.0557 23.4799C13.2959 23.4793 12.5675 23.177 12.0305 22.6396C11.4935 22.1021 11.1919 21.3735 11.1919 20.6137V7.7795C11.6526 7.61363 12.073 7.35213 12.4254 7.01219C13.8241 5.67432 13.6163 4.24636 12.8205 2.95591C13.2572 2.74617 13.74 2.65063 14.2237 2.67825C14.7073 2.70587 15.1761 2.85573 15.5861 3.11381C15.996 3.3719 16.3339 3.72977 16.5679 4.15395C16.8019 4.57812 16.9245 5.05473 16.9242 5.53919V20.6137C16.924 21.3738 16.622 22.1027 16.0845 22.6402C15.547 23.1776 14.8181 23.4797 14.058 23.4799" fill="#fff"/>
</svg>`, `<svg width="62" height="72" viewBox="0 0 62 72" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.75445 16.0609C5.11818 16.3024 4.42455 16.3498 3.76133 16.1971C3.09811 16.0443 2.49511 15.6982 2.02864 15.2026C1.56217 14.7071 1.25319 14.0842 1.14081 13.413C1.02842 12.7418 1.11767 12.0523 1.39727 11.4318C1.67687 10.8113 2.13426 10.2876 2.71154 9.92718C3.28882 9.56671 3.96006 9.38558 4.64032 9.40672C5.32058 9.42786 5.97928 9.65032 6.53307 10.0459C7.08685 10.4416 7.51084 10.9926 7.75137 11.6292C8.07346 12.4818 8.04408 13.4273 7.66967 14.2581C7.29527 15.089 6.60645 15.7374 5.75445 16.0609ZM28.5306 53.1656C28.9313 53.0308 29.3551 52.9785 29.7766 53.0118C30.198 53.0451 30.6084 53.1632 30.983 53.3592C31.3575 53.5552 31.6886 53.8249 31.9563 54.1521C32.2239 54.4793 32.4227 54.8573 32.5405 55.2633C32.6583 55.6693 32.6927 56.095 32.6418 56.5147C32.5909 56.9343 32.4556 57.3394 32.244 57.7054C32.0325 58.0714 31.7492 58.3909 31.411 58.6446C31.0728 58.8983 30.6868 59.081 30.2762 59.1816L13.6813 70.4899L13.6639 70.4938C13.2632 70.6286 12.8394 70.6809 12.4179 70.6476C11.9965 70.6143 11.5861 70.4961 11.2116 70.3002C10.837 70.1042 10.5059 69.8345 10.2382 69.5073C9.97056 69.18 9.77185 68.8021 9.65404 68.396C9.53623 67.99 9.50176 67.5644 9.5527 67.1447C9.60364 66.7251 9.73894 66.32 9.95046 65.954C10.162 65.588 10.4453 65.2685 10.7835 65.0148C11.1217 64.7611 11.5077 64.5784 11.9183 64.4778L28.5132 53.1711L28.5306 53.1656ZM26.6064 46.0448C26.6759 45.6276 26.829 45.2289 27.0567 44.8725C27.2844 44.5161 27.5818 44.2095 27.9311 43.9711C28.2803 43.7327 28.6743 43.5675 29.0891 43.4853C29.5039 43.4032 29.9311 43.4059 30.3449 43.4932C30.7586 43.5805 31.1505 43.7506 31.4967 43.9933C31.843 44.236 32.1366 44.5463 32.3598 44.9055C32.583 45.2647 32.7312 45.6653 32.7955 46.0833C32.8598 46.5013 32.8388 46.9279 32.7339 47.3376L32.8556 56.5723L32.8516 56.592C32.7805 57.008 32.6262 57.4054 32.3979 57.7603C32.1696 58.1153 31.872 58.4205 31.5229 58.6576C31.1738 58.8948 30.7804 59.0591 30.3663 59.1406C29.9523 59.2221 29.526 59.2192 29.113 59.132C28.7001 59.0448 28.309 58.8752 27.9632 58.6333C27.6174 58.3913 27.324 58.0821 27.1006 57.724C26.8771 57.366 26.7283 56.9666 26.6629 56.5496C26.5976 56.1327 26.617 55.7068 26.7202 55.2976L26.6024 46.0629L26.6064 46.0448ZM50.2565 50.4764C50.2362 50.0544 50.3015 49.6326 50.4483 49.2364C50.5952 48.8402 50.8207 48.4779 51.1112 48.171C51.4017 47.8642 51.7512 47.6193 52.1388 47.451C52.5263 47.2828 52.9439 47.1946 53.3664 47.1918C53.7889 47.189 54.2076 47.2717 54.5974 47.4349C54.9871 47.5981 55.3398 47.8384 55.6343 48.1414C55.9288 48.4443 56.159 48.8037 56.3111 49.1979C56.4631 49.5921 56.5339 50.013 56.5191 50.4353L59.0692 67.9674V67.9872C59.0882 68.4086 59.0219 68.8294 58.8743 69.2246C58.7268 69.6197 58.501 69.981 58.2105 70.2868C57.92 70.5926 57.5708 70.8367 57.1838 71.0044C56.7967 71.1721 56.3799 71.2599 55.9581 71.2627C55.5363 71.2655 55.1183 71.1831 54.7291 71.0205C54.3399 70.8579 53.9875 70.6184 53.6931 70.3165C53.3986 70.0145 53.1681 69.6562 53.0154 69.263C52.8627 68.8698 52.7908 68.4499 52.8042 68.0283L50.2565 50.4938V50.4764ZM54.3831 46.2036C54.751 46.4016 55.0756 46.6712 55.3377 46.9965C55.5999 47.3217 55.7944 47.6962 55.9098 48.0977C56.0252 48.4992 56.0591 48.9198 56.0096 49.3346C55.9601 49.7495 55.8282 50.1502 55.6215 50.5133C55.4149 50.8764 55.1377 51.1945 54.8064 51.449C54.475 51.7034 54.0961 51.8891 53.692 51.995C53.2879 52.1009 52.8666 52.1249 52.4531 52.0656C52.0395 52.0064 51.642 51.865 51.2838 51.6499L28.4618 41.4156L28.446 41.4061C28.0702 41.2125 27.7374 40.945 27.4676 40.6196C27.1978 40.2942 26.9966 39.9176 26.8761 39.5124C26.7556 39.1072 26.7182 38.6819 26.7663 38.2619C26.8143 37.8419 26.9468 37.436 27.1557 37.0685C27.3646 36.701 27.6457 36.3796 27.982 36.1235C28.3183 35.8675 28.703 35.682 29.1128 35.5784C29.5226 35.4747 29.9491 35.455 30.3668 35.5204C30.7844 35.5858 31.1845 35.735 31.543 35.959L54.3657 46.1973L54.3831 46.2036ZM56.4377 7.87324C56.8019 7.66044 57.2052 7.52331 57.6235 7.47007C58.0419 7.41683 58.4667 7.44857 58.8725 7.5634C59.2783 7.67822 59.6567 7.87376 59.9852 8.13831C60.3136 8.40286 60.5853 8.73097 60.7839 9.103C60.9825 9.47503 61.104 9.88332 61.1411 10.3034C61.1782 10.7235 61.1301 11.1468 60.9998 11.5478C60.8694 11.9489 60.6594 12.3196 60.3824 12.6376C60.1054 12.9556 59.7671 13.2144 59.3877 13.3986L47.7183 18.4497L47.7025 18.4576C47.3384 18.6654 46.9364 18.7981 46.5202 18.8479C46.104 18.8976 45.682 18.8634 45.2793 18.7473C44.8765 18.6312 44.5011 18.4355 44.1753 18.1717C43.8495 17.908 43.5798 17.5817 43.3823 17.2119C43.1848 16.8422 43.0634 16.4366 43.0254 16.0192C42.9873 15.6018 43.0333 15.1809 43.1607 14.7816C43.288 14.3822 43.4942 14.0125 43.7669 13.6941C44.0397 13.3758 44.3735 13.1155 44.7486 12.9284L56.4204 7.88272L56.4377 7.87324ZM37.6341 17.4082C37.2179 17.3333 36.8212 17.1749 36.4678 16.9426C36.1144 16.7104 35.8117 16.409 35.5779 16.0566C35.3441 15.7042 35.184 15.3082 35.1073 14.8923C35.0305 14.4765 35.0388 14.0494 35.1315 13.6368C35.2242 13.2242 35.3994 12.8346 35.6466 12.4915C35.8938 12.1484 36.2079 11.8589 36.57 11.6404C36.9321 11.4219 37.3346 11.2789 37.7534 11.2201C38.1721 11.1613 38.5985 11.1878 39.0067 11.2981L45.7743 12.9789H45.7941C46.2093 13.0551 46.605 13.2144 46.9572 13.4472C47.3094 13.68 47.611 13.9815 47.8439 14.3337C48.0767 14.6859 48.236 15.0815 48.3123 15.4968C48.3886 15.912 48.3802 16.3384 48.2876 16.7504C48.1951 17.1623 48.0203 17.5513 47.7738 17.8941C47.5272 18.2368 47.214 18.5263 46.8529 18.745C46.4918 18.9638 46.0902 19.1074 45.6723 19.1672C45.2543 19.227 44.8286 19.2017 44.4206 19.093L37.6539 17.4098L37.6341 17.4082ZM17.9264 19.7442C18.1103 19.3639 18.369 19.0248 18.6872 18.747C19.0054 18.4693 19.3764 18.2587 19.7779 18.1279C20.1795 17.9971 20.6033 17.9488 21.024 17.9859C21.4447 18.023 21.8536 18.1447 22.2261 18.3438C22.5986 18.5428 22.927 18.815 23.1917 19.1442C23.4564 19.4733 23.6518 19.8525 23.7663 20.259C23.8807 20.6655 23.9119 21.091 23.8578 21.5098C23.8038 21.9287 23.6657 22.3323 23.4518 22.6965L20.0253 28.7718L20.015 28.7892C19.8303 29.1681 19.5711 29.5058 19.2528 29.7822C18.9346 30.0586 18.5638 30.268 18.1628 30.3978C17.7618 30.5277 17.3387 30.5753 16.9188 30.5379C16.499 30.5004 16.091 30.3787 15.7192 30.18C15.3475 29.9812 15.0197 29.7096 14.7553 29.3812C14.491 29.0529 14.2956 28.6746 14.1808 28.269C14.066 27.8634 14.0342 27.4388 14.0873 27.0207C14.1404 26.6025 14.2772 26.1993 14.4897 25.8353L17.9162 19.7623L17.9264 19.7442ZM35.8118 11.4649C36.2056 11.3145 36.6257 11.245 37.0469 11.2608C37.4681 11.2765 37.8818 11.377 38.2633 11.5563C38.6448 11.7356 38.9862 11.9901 39.267 12.3044C39.5479 12.6187 39.7625 12.9864 39.8979 13.3856C40.0334 13.7847 40.0869 14.2071 40.0553 14.6274C40.0237 15.0478 39.9077 15.4574 39.7141 15.8319C39.5206 16.2063 39.2534 16.5379 38.9288 16.8067C38.6041 17.0755 38.2285 17.2761 37.8246 17.3964L21.9061 23.5894L21.8871 23.5965C21.4926 23.7489 21.0714 23.82 20.6487 23.8054C20.2261 23.7908 19.8108 23.6909 19.4277 23.5117C19.0447 23.3325 18.7019 23.0777 18.4198 22.7625C18.1378 22.4474 17.9224 22.0785 17.7866 21.6781C17.6508 21.2776 17.5974 20.8537 17.6296 20.4321C17.6617 20.0104 17.7789 19.5996 17.9739 19.2244C18.1689 18.8491 18.4378 18.5172 18.7644 18.2486C19.091 17.9799 19.4686 17.7801 19.8744 17.6611L35.7952 11.4704L35.8118 11.4649ZM27.1026 12.7869C25.9626 13.219 24.7201 13.3033 23.5321 13.0292C22.3442 12.7551 21.2642 12.1348 20.4288 11.2469C19.5934 10.3589 19.04 9.24315 18.8388 8.04071C18.6375 6.83826 18.7974 5.60315 19.2981 4.49156C19.7989 3.37997 20.618 2.44185 21.652 1.79583C22.6859 1.14982 23.8882 0.824934 25.1068 0.862266C26.3254 0.899598 27.5055 1.29747 28.498 2.00556C29.4905 2.71366 30.2506 3.70016 30.6824 4.84032C31.2612 6.36883 31.2093 8.06465 30.538 9.55486C29.8667 11.0451 28.631 12.2076 27.1026 12.7869ZM24.0207 23.2891C23.6402 22.3327 23.6528 21.2647 24.0557 20.3175C24.4587 19.3703 25.2195 18.6207 26.1725 18.2316C28.175 17.4232 35.4135 15.6152 36.2235 17.6121C36.3026 20.2602 41.3371 46.2328 33.5367 42.337C31.5477 43.1454 27.9055 41.7309 27.0892 39.7363L24.031 23.3121L24.0207 23.2891ZM18.7183 25.8922C19.0479 26.1569 19.3205 26.4855 19.5198 26.8583C19.7191 27.2312 19.8409 27.6405 19.8778 28.0616C19.9147 28.4827 19.8661 28.907 19.7347 29.3088C19.6034 29.7106 19.3921 30.0817 19.1135 30.3997C18.835 30.7177 18.495 30.9761 18.114 31.1593C17.733 31.3424 17.3189 31.4466 16.8965 31.4655C16.4742 31.4844 16.0524 31.4176 15.6566 31.2692C15.2608 31.1208 14.899 30.8939 14.5932 30.602L1.26196 19.9267L1.24616 19.9148C0.622246 19.3859 0.223545 18.6389 0.131333 17.8262C0.0391201 17.0135 0.260338 16.1962 0.74989 15.5409C1.46083 16.5376 2.53612 17.2137 3.74243 17.4226C4.94875 17.6315 6.18878 17.3563 7.19347 16.6567L18.7048 25.878L18.7183 25.8922Z" fill="#fff"/>
</svg>`, `<svg width="72" height="76" viewBox="0 0 72 76" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M26.6028 50.0449C26.6734 49.6287 26.8273 49.2311 27.0553 48.8759C27.2833 48.5207 27.5808 48.2152 27.9297 47.9778C28.2787 47.7403 28.6721 47.5758 29.0862 47.4942C29.5003 47.4125 29.9267 47.4153 30.3397 47.5024C30.7527 47.5895 31.1438 47.7592 31.4896 48.0012C31.8355 48.2432 32.1289 48.5526 32.3522 48.9107C32.5755 49.2689 32.7242 49.6685 32.7893 50.0856C32.8544 50.5026 32.8346 50.9285 32.7311 51.3377L32.8528 60.5724V60.5922C32.7322 61.1782 32.454 61.7203 32.0483 62.16C31.6425 62.5997 31.1245 62.9205 30.55 63.0877C30.4623 63.1225 30.3698 63.1541 30.2774 63.1817L13.6785 74.49L13.6595 74.494C13.2589 74.6283 12.8353 74.6804 12.4141 74.6469C11.9929 74.6134 11.5828 74.4951 11.2085 74.2991C10.8342 74.1032 10.5033 73.8335 10.2358 73.5065C9.96833 73.1794 9.76972 72.8016 9.65192 72.3958C9.53413 71.9901 9.49958 71.5646 9.55035 71.1452C9.60112 70.7257 9.73617 70.3208 9.94738 69.9549C10.1586 69.5889 10.4416 69.2694 10.7794 69.0156C11.1172 68.7618 11.5028 68.5789 11.9131 68.4779L26.7055 58.3992L26.5988 50.0631L26.6028 50.0449ZM6.30481 18.9586C5.66854 19.2002 4.97491 19.2476 4.31169 19.0948C3.64848 18.942 3.04548 18.596 2.57901 18.1004C2.11254 17.6048 1.80356 16.982 1.69117 16.3107C1.57878 15.6395 1.66804 14.95 1.94764 14.3295C2.22724 13.709 2.68462 13.1854 3.26191 12.8249C3.83919 12.4645 4.51043 12.2833 5.19069 12.3045C5.87095 12.3256 6.52964 12.5481 7.08343 12.9437C7.63722 13.3393 8.06121 13.8903 8.30174 14.527C8.62383 15.3795 8.59444 16.325 8.22004 17.1559C7.84564 17.9868 7.15682 18.6351 6.30481 18.9586ZM57.4133 4.12669C59.2136 4.12448 60.9855 4.57456 62.5666 5.43559C64.1476 6.29662 65.487 7.54102 66.4618 9.05455C67.4366 10.5681 68.0156 12.3022 68.1456 14.0978C68.2756 15.8934 67.9524 17.6929 67.2058 19.331C66.4592 20.9692 65.313 22.3936 63.8725 23.4734C62.432 24.5531 60.7433 25.2538 58.9614 25.5109C57.1796 25.768 55.3617 25.5734 53.6747 24.945C51.9877 24.3165 50.4856 23.2743 49.3062 21.9141L51.1364 21.1239C52.5537 22.5451 54.4115 23.4431 56.4057 23.6708C58.3999 23.8985 60.4123 23.4424 62.1135 22.3772C63.8147 21.3119 65.1038 19.7007 65.7698 17.8073C66.4358 15.9138 66.4392 13.8504 65.7795 11.9547C65.1198 10.0591 63.836 8.44357 62.1384 7.3727C60.4408 6.30183 58.4299 5.83905 56.4349 6.06013C54.44 6.2812 52.5792 7.17303 51.1572 8.5896C49.7352 10.0062 48.8363 11.8636 48.6077 13.8576L46.6716 14.6953C46.7184 11.877 47.8706 9.18988 49.8799 7.21301C51.8891 5.23614 54.5946 4.12775 57.4133 4.12669ZM57.4133 7.35006C58.6278 7.35029 59.8241 7.64464 60.9001 8.20794C61.9761 8.77125 62.8996 9.58676 63.5917 10.5847C64.2839 11.5827 64.724 12.7335 64.8745 13.9386C65.0251 15.1437 64.8815 16.3674 64.4561 17.5049C64.0307 18.6425 63.3362 19.6601 62.4318 20.4708C61.5275 21.2814 60.4403 21.861 59.2631 22.16C58.086 22.4589 56.854 22.4684 55.6724 22.1875C54.4909 21.9066 53.3949 21.3437 52.4783 20.547L54.4712 19.684C55.4343 20.2728 56.5519 20.559 57.6795 20.5057C58.807 20.4523 59.8926 20.0619 60.7958 19.3848C61.6991 18.7077 62.3783 17.7752 62.7457 16.7078C63.1131 15.6405 63.1518 14.4874 62.8568 13.3979C62.5617 12.3083 61.9465 11.3323 61.0907 10.5963C60.2349 9.86016 59.1779 9.39781 58.0564 9.26902C56.935 9.14022 55.8007 9.35091 54.8003 9.87382C53.7999 10.3967 52.9795 11.2078 52.4451 12.2021L50.0744 13.2294C50.4491 11.5622 51.38 10.0722 52.7142 9.00454C54.0483 7.93684 55.7061 7.35502 57.4148 7.3548M57.4148 0.506624C59.869 0.505601 62.2826 1.13319 64.4254 2.32956C66.5682 3.52593 68.3689 5.25121 69.6558 7.34092C70.9427 9.43064 71.6729 11.8151 71.7768 14.2671C71.8807 16.7191 71.3548 19.1568 70.2494 21.3479C69.1439 23.539 67.4956 25.4105 65.4617 26.7838C63.4277 28.1572 61.0759 28.9867 58.6305 29.1933C56.185 29.3999 53.7274 28.9767 51.4918 27.964C49.2563 26.9514 47.3174 25.383 45.86 23.4084L48.0213 22.4728C49.8154 24.6865 52.3342 26.1949 55.1327 26.7315C57.9312 27.268 60.8292 26.7982 63.3149 25.4051C65.8006 24.0119 67.7138 21.785 68.7167 19.1178C69.7195 16.4507 69.7474 13.5149 68.7954 10.8292C67.8434 8.14347 65.9728 5.88065 63.5141 4.4405C61.0553 3.00035 58.1667 2.47556 55.3585 2.95885C52.5504 3.44214 50.0034 4.90241 48.1675 7.08166C46.3317 9.26091 45.3252 12.0189 45.3258 14.8684C45.3258 15.0035 45.3298 15.1386 45.3337 15.2737L43.1092 16.2355C43.0665 15.7858 43.0452 15.3291 43.0452 14.8684C43.0451 12.9814 43.4167 11.113 44.1387 9.3697C44.8607 7.62639 45.919 6.04238 47.2532 4.7081C48.5874 3.37382 50.1714 2.3154 51.9147 1.59329C53.6579 0.871179 55.5264 0.499512 57.4133 0.499512M23.1621 27.1004L20.2517 32.2591L20.2414 32.2749C20.1908 32.3689 20.1379 32.459 20.0834 32.5475C19.9954 32.6938 19.8941 32.8316 19.7807 32.9592C19.31 33.4815 18.6808 33.8349 17.9899 33.9649C17.2989 34.095 16.5843 33.9946 15.956 33.6791C15.7306 33.5582 15.5212 33.4099 15.3325 33.2374L15.2598 33.1765L1.92849 22.5004L1.91506 22.4886C1.29048 21.96 0.891238 21.2128 0.79886 20.3998C0.706483 19.5868 0.927936 18.7691 1.418 18.1139C2.01438 18.9491 2.87033 19.5637 3.85245 19.8617C4.83458 20.1597 5.8877 20.1245 6.84771 19.7615C7.20678 19.6271 7.54743 19.4479 7.86158 19.2281L16.506 26.1537L17.7182 24.0019C17.8516 23.4607 18.1195 22.962 18.4971 22.552C18.8746 22.142 19.3496 21.834 19.8779 21.6565L35.3839 15.6286C35.5018 15.5735 35.6233 15.5263 35.7474 15.4871L35.7964 15.4674L35.8138 15.4618C36.6392 15.1797 37.5425 15.234 38.3283 15.6128L43.3795 16.8716L53.9449 12.3009L53.9631 12.2906C54.3274 12.076 54.7313 11.9374 55.1505 11.8829C55.5697 11.8285 55.9957 11.8594 56.4026 11.9738C56.8096 12.0882 57.1893 12.2838 57.5187 12.5487C57.8482 12.8136 58.1206 13.1424 58.3197 13.5154C58.5188 13.8883 58.6404 14.2977 58.6772 14.7189C58.714 15.14 58.6652 15.5643 58.5338 15.9661C58.4024 16.3679 58.1911 16.739 57.9125 17.057C57.634 17.3751 57.294 17.6335 56.913 17.8167L45.3756 22.8086C44.6382 23.2565 43.7557 23.4007 42.914 23.2109L36.9628 21.73L36.2468 22.0065C36.5258 24.7961 38.5772 36.4355 37.6511 42.7012L54.3638 50.1974L54.3796 50.2069C54.8384 50.4671 55.2284 50.8333 55.5171 51.2748C55.8057 51.7163 55.9847 52.2204 56.039 52.7451C56.3448 53.2571 56.5085 53.8414 56.5132 54.4378L59.0633 71.9707V71.9905C59.0836 72.4128 59.0183 72.8349 58.8713 73.2314C58.7243 73.6279 58.4987 73.9905 58.208 74.2975C57.9173 74.6046 57.5675 74.8497 57.1796 75.0181C56.7917 75.1865 56.3738 75.2747 55.951 75.2775C55.5282 75.2803 55.1092 75.1975 54.7191 75.0342C54.3291 74.8709 53.9761 74.6304 53.6814 74.3272C53.3867 74.024 53.1563 73.6644 53.0042 73.2699C52.852 72.8754 52.7812 72.4542 52.7959 72.0316L50.3612 55.2336L30.3122 46.2462C29.8218 46.0876 29.3504 45.8756 28.9063 45.614L28.4606 45.4141L28.4432 45.4046C27.8763 45.0876 27.4167 44.6089 27.1228 44.0296C26.8289 43.4504 26.7142 42.7967 26.7932 42.152L24.0274 27.309L24.0179 27.2877C23.9574 27.1368 23.907 26.9821 23.867 26.8246L23.1621 27.1004ZM27.1006 16.787C25.9605 17.2183 24.7181 17.3018 23.5305 17.027C22.3429 16.7522 21.2634 16.1314 20.4286 15.2432C19.5937 14.3549 19.041 13.2391 18.8403 12.0367C18.6396 10.8344 18.7999 9.59952 19.301 8.48827C19.802 7.37702 20.6213 6.43929 21.6552 5.79363C22.6892 5.14797 23.8914 4.82339 25.1098 4.86091C26.3282 4.89844 27.5081 5.29639 28.5004 6.00445C29.4926 6.71251 30.2526 7.69889 30.6844 8.83886C30.9711 9.59604 31.1059 10.4023 31.0809 11.2116C31.056 12.0208 30.8719 12.8173 30.5391 13.5554C30.2063 14.2935 29.7313 14.9588 29.1414 15.5133C28.5514 16.0678 27.8579 16.5006 27.1006 16.787Z" fill="#fff"/>
</svg>`, `<svg width="54" height="75" viewBox="0 0 54 75" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M50.3244 72.4996H52.221C52.3714 72.4725 52.5259 72.4787 52.6736 72.5178C52.8213 72.5569 52.9586 72.6279 53.0758 72.7259C53.193 72.8239 53.2873 72.9464 53.3521 73.0848C53.4168 73.2232 53.4503 73.3741 53.4503 73.5269C53.4503 73.6797 53.4168 73.8306 53.3521 73.969C53.2873 74.1074 53.193 74.2299 53.0758 74.3279C52.9586 74.4259 52.8213 74.4969 52.6736 74.536C52.5259 74.5751 52.3714 74.5813 52.221 74.5542H50.3244C50.1741 74.5813 50.0196 74.5751 49.8719 74.536C49.7242 74.4969 49.5869 74.4259 49.4697 74.3279C49.3524 74.2299 49.2581 74.1074 49.1934 73.969C49.1287 73.8306 49.0952 73.6797 49.0952 73.5269C49.0952 73.3741 49.1287 73.2232 49.1934 73.0848C49.2581 72.9464 49.3524 72.8239 49.4697 72.7259C49.5869 72.6279 49.7242 72.5569 49.8719 72.5178C50.0196 72.4787 50.1741 72.4725 50.3244 72.4996ZM49.0861 57.9545V57.8905C49.0943 57.5674 49.2284 57.2603 49.4598 57.0346C49.6912 56.809 50.0016 56.6827 50.3248 56.6827C50.6481 56.6827 50.9585 56.809 51.1899 57.0346C51.4213 57.2603 51.5554 57.5674 51.5635 57.8905V57.9545C51.5554 58.2776 51.4213 58.5848 51.1899 58.8104C50.9585 59.036 50.6481 59.1623 50.3248 59.1623C50.0016 59.1623 49.6912 59.036 49.4598 58.8104C49.2284 58.5848 49.0943 58.2776 49.0861 57.9545ZM49.0861 61.9097V61.8464C49.082 61.6811 49.1109 61.5167 49.1713 61.3627C49.2317 61.2088 49.3222 61.0685 49.4377 60.9501C49.5531 60.8317 49.6911 60.7376 49.8434 60.6734C49.9958 60.6091 50.1595 60.5761 50.3248 60.5761C50.4902 60.5761 50.6539 60.6091 50.8062 60.6734C50.9586 60.7376 51.0966 60.8317 51.212 60.9501C51.3274 61.0685 51.418 61.2088 51.4784 61.3627C51.5388 61.5167 51.5677 61.6811 51.5635 61.8464V61.9097C51.5554 62.2328 51.4213 62.5399 51.1899 62.7655C50.9585 62.9912 50.6481 63.1175 50.3248 63.1175C50.0016 63.1175 49.6912 62.9912 49.4598 62.7655C49.2284 62.5399 49.0943 62.2328 49.0861 61.9097ZM49.0861 65.8608V65.7976C49.0943 65.4745 49.2284 65.1674 49.4598 64.9417C49.6912 64.7161 50.0016 64.5898 50.3248 64.5898C50.6481 64.5898 50.9585 64.7161 51.1899 64.9417C51.4213 65.1674 51.5554 65.4745 51.5635 65.7976V65.8608C51.5554 66.1839 51.4213 66.4911 51.1899 66.7167C50.9585 66.9423 50.6481 67.0686 50.3248 67.0686C50.0016 67.0686 49.6912 66.9423 49.4598 66.7167C49.2284 66.4911 49.0943 66.1839 49.0861 65.8608ZM49.0861 69.812V69.7496C49.0943 69.4265 49.2284 69.1193 49.4598 68.8937C49.6912 68.6681 50.0016 68.5418 50.3248 68.5418C50.6481 68.5418 50.9585 68.6681 51.1899 68.8937C51.4213 69.1193 51.5554 69.4265 51.5635 69.7496V69.812C51.5554 70.1351 51.4213 70.4422 51.1899 70.6679C50.9585 70.8935 50.6481 71.0198 50.3248 71.0198C50.0016 71.0198 49.6912 70.8935 49.4598 70.6679C49.2284 70.4422 49.0943 70.1351 49.0861 69.812ZM50.3244 53.138H52.221C52.3719 53.1092 52.5272 53.114 52.676 53.1522C52.8248 53.1903 52.9633 53.2608 53.0817 53.3587C53.2 53.4566 53.2953 53.5794 53.3607 53.7183C53.4262 53.8573 53.4601 54.009 53.4601 54.1626C53.4601 54.3162 53.4262 54.4679 53.3607 54.6068C53.2953 54.7458 53.2 54.8686 53.0817 54.9665C52.9633 55.0644 52.8248 55.1349 52.676 55.173C52.5272 55.2112 52.3719 55.216 52.221 55.1871H50.3244C50.1739 55.2153 50.0191 55.2099 49.8709 55.1715C49.7227 55.133 49.5847 55.0623 49.4669 54.9645C49.3491 54.8667 49.2543 54.7442 49.1892 54.6055C49.1242 54.4669 49.0904 54.3157 49.0904 54.1626C49.0904 54.0095 49.1242 53.8582 49.1892 53.7196C49.2543 53.581 49.3491 53.4584 49.4669 53.3606C49.5847 53.2628 49.7227 53.1922 49.8709 53.1537C50.0191 53.1152 50.1739 53.1099 50.3244 53.138ZM0.832031 64.636H19.1805V74.5439H0.832031V64.636ZM9.12397 72.2096H46.2445V74.5463H9.12397V72.2096ZM30.7764 42.9843C29.7722 42.9843 28.8082 42.59 28.0917 41.8864C27.3752 41.1828 26.9636 40.226 26.9453 39.222L26.1899 17.2882C26.168 16.2709 26.5511 15.2866 27.255 14.5517C27.9588 13.8169 28.9258 13.3918 29.9431 13.3699C30.9604 13.348 31.9448 13.7311 32.6796 14.435C33.4144 15.1388 33.8396 16.1058 33.8615 17.1231L34.6162 39.0632C34.6395 40.0812 34.2575 41.0668 33.5541 41.8032C32.8508 42.5396 31.8837 42.9664 30.8657 42.9898L30.7764 42.9843ZM8.94616 63.1906C7.94199 63.191 6.97788 62.7968 6.26157 62.0931C5.54526 61.3893 5.13409 60.4323 5.11668 59.4283L4.35964 28.7593C4.33784 27.742 4.72107 26.7577 5.42501 26.0229C6.12895 25.2881 7.09594 24.8631 8.11326 24.8413C9.13057 24.8195 10.1149 25.2027 10.8496 25.9067C11.5844 26.6106 12.0094 27.5776 12.0312 28.5949L12.7828 59.2639C12.8063 60.2818 12.4246 61.2673 11.7215 62.0037C11.0185 62.74 10.0517 63.167 9.03388 63.1906H8.94616ZM5.74176 32.7113C5.18112 32.0685 4.75502 31.3198 4.48864 30.5096C4.22225 29.6993 4.12098 28.8439 4.19082 27.9938C4.26066 27.1437 4.50019 26.3163 4.89524 25.5604C5.2903 24.8045 5.83288 24.1354 6.4909 23.5927L22.5959 10.9126C23.995 9.87467 25.7439 9.42348 27.4706 9.65503C29.1972 9.88658 30.7654 10.7826 31.8416 12.1525C32.4028 12.7945 32.8294 13.5425 33.0963 14.3522C33.3632 15.162 33.4649 16.0171 33.3955 16.8669C33.326 17.7167 33.0867 18.5439 32.6918 19.2996C32.2969 20.0553 31.7544 20.724 31.0964 21.2663L28.1813 23.5627H27.6984L14.9891 33.5766C13.872 34.4195 12.5151 34.8839 11.1159 34.9023C9.71658 34.9206 8.34797 34.4919 7.20923 33.6785V34.057C6.65959 33.6801 6.16561 33.2279 5.74176 32.7136M23.9551 13.1514L10.6381 28.6842L23.9551 13.1514ZM41.8523 11.5306C40.902 12.2963 39.7458 12.7629 38.5302 12.8713C37.3146 12.9798 36.0941 12.7252 35.0232 12.1397C33.9523 11.5543 33.0791 10.6644 32.5142 9.58252C31.9493 8.50069 31.718 7.27558 31.8495 6.06223C31.9811 4.84888 32.4696 3.70182 33.2533 2.76621C34.037 1.8306 35.0806 1.14849 36.252 0.806183C37.4235 0.46388 38.6702 0.476776 39.8343 0.843237C40.9985 1.2097 42.0278 1.91326 42.7919 2.86488C43.8157 4.13937 44.2918 5.76809 44.1156 7.39333C43.9395 9.01857 43.1254 10.5074 41.8523 11.533" fill="#fff"/>
</svg>`, `<svg width="60" height="38" viewBox="0 0 60 38" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M31.4557 11.3561C30.3889 9.97473 29.2945 8.56258 28.3335 7.34008C27.8146 6.66816 27.0681 6.20898 26.2344 6.0489C25.4006 5.88881 24.5371 6.03886 23.8063 6.47083L13.4257 12.705C12.8566 13.0463 12.1752 13.1475 11.5314 12.9864C10.8877 12.8254 10.3343 12.4151 9.99296 11.846C9.65165 11.2769 9.55041 10.5955 9.7115 9.95171C9.87259 9.30794 10.2828 8.75453 10.8519 8.41322L21.268 2.16009C21.2954 2.14854 21.3219 2.1348 21.3471 2.119C23.1238 1.08194 25.2186 0.730819 27.2363 1.13187C29.2541 1.53292 31.0554 2.65842 32.3005 4.2961C33.3815 5.67111 34.6404 7.29109 35.8336 8.83916L35.9569 8.77041L44.8826 19.4907C28.2087 19.4907 27.0186 25.4436 19.5761 25.4436C14.5186 25.4436 12.1345 22.466 12.1345 22.466L31.4557 11.3561ZM46.1304 0.992919C47.3508 0.992763 48.5439 1.35452 49.5587 2.03245C50.5735 2.71037 51.3644 3.67401 51.8315 4.80149C52.2986 5.92897 52.4209 7.16965 52.1828 8.36661C51.9448 9.56358 51.3571 10.6631 50.4942 11.526C49.6312 12.389 48.5317 12.9767 47.3347 13.2147C46.1378 13.4528 44.8971 13.3305 43.7696 12.8634C42.6421 12.3963 41.6785 11.6053 41.0006 10.5905C40.3226 9.57574 39.9609 8.38269 39.961 7.16228C39.9619 5.52632 40.6121 3.95761 41.7689 2.80081C42.9257 1.64401 44.4944 0.993757 46.1304 0.992919ZM59.7675 29.6121C55.6006 27.8261 48.7548 25.4459 43.3962 25.4459C38.3332 25.4459 34.1631 26.9284 30.2965 28.7175C26.723 30.2047 23.4467 31.3972 19.5769 31.3972C13.6233 31.3972 4.09623 27.8269 0.228027 26.3326V32.5897C5.28553 34.6672 13.3254 37.3485 19.5769 37.3485C24.6392 37.3485 28.5066 35.8636 32.3787 34.0729C35.9514 32.5897 39.2269 31.3972 43.3954 31.3972C48.75 31.3972 56.4904 34.6672 59.7667 36.1576L59.7675 29.6121Z" fill="#fff"/>
</svg>`, `<svg width="73" height="42" viewBox="0 0 73 42" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.1674 4.20144C16.9328 5.15188 17.3991 6.30798 17.5073 7.52349C17.6155 8.73901 17.3608 9.9593 16.7753 11.03C16.1898 12.1007 15.2999 12.9737 14.2182 13.5385C13.1365 14.1033 11.9115 14.3346 10.6983 14.2031C9.48507 14.0716 8.33812 13.5832 7.40254 12.7997C6.46696 12.0162 5.78479 10.9728 5.44234 9.80155C5.09988 8.63027 5.11253 7.38373 5.47868 6.21963C5.84483 5.05554 6.54802 4.0262 7.49931 3.26185C8.77379 2.23807 10.4025 1.76198 12.0278 1.93815C13.653 2.11432 15.1419 2.92834 16.1674 4.20144ZM0.757812 39.0777H72.7253V41.4136H0.757812V39.0777ZM64.9099 36.9907C64.177 37.6775 63.2036 38.049 62.1994 38.0252C61.1952 38.0014 60.2406 37.5842 59.541 36.8634L50.4984 27.6777L41.53 36.7852C41.1733 37.1528 40.7465 37.4452 40.2748 37.645C39.8031 37.8448 39.2962 37.948 38.7839 37.9484C37.7998 38.1881 36.7717 38.1802 35.7914 37.9255C34.8111 37.6708 33.9091 37.1772 33.1661 36.4889L18.1943 22.4875C17.2394 21.5017 16.6034 20.2511 16.3693 18.8987C16.1353 17.5462 16.314 16.1547 16.8821 14.9053C17.4503 13.6559 18.3816 12.6065 19.5547 11.894C20.7278 11.1815 22.0882 10.8388 23.4589 10.9105L26.8458 9.41699L19.1703 6.65907L19.4279 6.75073C19.001 6.61707 18.6056 6.39851 18.2653 6.10816C17.9251 5.81782 17.647 5.46169 17.4478 5.06118C17.2487 4.66066 17.1325 4.22401 17.1064 3.77747C17.0802 3.33094 17.1446 2.88372 17.2956 2.46269C17.4467 2.04166 17.6812 1.6555 17.9853 1.32741C18.2893 0.999328 18.6565 0.736088 19.0649 0.553502C19.4732 0.370916 19.9143 0.272754 20.3615 0.264914C20.8087 0.257074 21.2529 0.339719 21.6674 0.50788L36.8913 5.97315C37.513 6.19967 38.0529 6.60661 38.442 7.14184C38.831 7.67707 39.0514 8.31624 39.075 8.9775C39.0986 9.63876 38.9243 10.292 38.5744 10.8536C38.2245 11.4152 37.715 11.8596 37.111 12.1299L29.8961 15.3137L29.9293 15.5318L41.2637 26.121L45.1145 22.2077L45.3437 21.9707L48.1624 19.1124C48.7518 18.5223 49.542 18.1762 50.3753 18.1431C51.2086 18.11 52.0238 18.3923 52.6581 18.9338L55.8617 22.188L55.8791 22.2038L65.0221 31.4938C65.3762 31.8535 65.6559 32.2794 65.8453 32.7473C66.0346 33.2152 66.1299 33.7158 66.1257 34.2205C66.1214 34.7252 66.0177 35.2242 65.8205 35.6888C65.6232 36.1534 65.3364 36.5746 64.9763 36.9282L64.9099 36.9907Z" fill="#fff"/>
</svg>`, `<svg width="39" height="71" viewBox="0 0 39 71" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M23.9642 14.9558C23.9704 15.938 23.6852 16.9 23.1448 17.7202C22.6043 18.5404 21.8328 19.1819 20.9278 19.5636C20.0227 19.9453 19.0248 20.0501 18.0603 19.8647C17.0957 19.6793 16.2077 19.2121 15.5087 18.5221C14.8096 17.8321 14.3308 16.9503 14.1329 15.9882C13.935 15.0262 14.0267 14.027 14.3966 13.1171C14.7665 12.2071 15.3978 11.4273 16.2109 10.8762C17.0239 10.3251 17.9821 10.0274 18.9643 10.0208C20.2814 10.0134 21.5476 10.5289 22.485 11.4542C23.4224 12.3794 23.9543 13.6388 23.9642 14.9558ZM23.358 70.6034C22.6022 70.603 21.8774 70.3027 21.3427 69.7684C20.808 69.2342 20.5071 68.5096 20.5061 67.7538V45.6082H17.4771V67.7506C17.4771 68.5068 17.1767 69.232 16.642 69.7667C16.1073 70.3014 15.3821 70.6018 14.626 70.6018C13.8698 70.6018 13.1446 70.3014 12.6099 69.7667C12.0752 69.232 11.7748 68.5068 11.7748 67.7506V42.7974C11.7745 42.5936 11.7962 42.3904 11.8396 42.1913C11.7247 41.7867 11.6681 41.3679 11.6713 40.9474L11.7376 25.7125C11.7813 24.4194 12.3277 23.1943 13.2607 22.2979C14.1937 21.4015 15.4397 20.9045 16.7335 20.9126H22.1506V20.9616C23.2884 21.0859 24.3414 21.6219 25.1114 22.4688C25.8814 23.3156 26.3151 24.4148 26.3309 25.5592L26.2661 40.787C26.2654 41.1948 26.2087 41.6005 26.0978 41.9929C26.1753 42.254 26.2141 42.525 26.2132 42.7974V67.7506C26.2121 68.5065 25.9112 69.231 25.3765 69.7653C24.8419 70.2995 24.1171 70.5998 23.3612 70.6002M27.7691 3.41286V3.36386C27.7691 2.60769 28.0695 1.88248 28.6042 1.34778C29.1389 0.813085 29.8641 0.512695 30.6203 0.512695C31.3765 0.512695 32.1017 0.813085 32.6364 1.34778C33.1711 1.88248 33.4715 2.60769 33.4715 3.36386V3.97234H27.766L27.7691 3.41286ZM4.95585 3.41286V3.36386C4.95585 2.6079 5.25615 1.88289 5.7907 1.34834C6.32525 0.813793 7.05025 0.513487 7.80622 0.513487C8.56219 0.513487 9.28719 0.813793 9.82174 1.34834C10.3563 1.88289 10.6566 2.6079 10.6566 3.36386V3.97234H4.95268L4.95585 3.41286ZM27.766 8.21512H33.4683V25.816C33.4683 26.5722 33.1679 27.2974 32.6332 27.8321C32.0985 28.3668 31.3733 28.6672 30.6171 28.6672C29.861 28.6672 29.1358 28.3668 28.6011 27.8321C28.0664 27.2974 27.766 26.5722 27.766 25.816V8.21512ZM7.80385 28.668C7.04864 28.6663 6.32493 28.3651 5.79158 27.8304C5.25822 27.2957 4.95879 26.5712 4.959 25.816V8.21512H10.6598V25.816C10.6593 26.5724 10.3586 27.2977 9.8237 27.8325C9.28877 28.3673 8.56341 28.6678 7.80701 28.668M37.7775 7.31504H1.03944C0.77205 7.2578 0.532384 7.11057 0.360452 6.89793C0.18852 6.6853 0.0947266 6.42013 0.0947266 6.14668C0.0947266 5.87323 0.18852 5.60805 0.360452 5.39542C0.532384 5.18278 0.77205 5.03556 1.03944 4.97831H37.7775C38.0449 5.03556 38.2845 5.18278 38.4565 5.39542C38.6284 5.60805 38.7222 5.87323 38.7222 6.14668C38.7222 6.42013 38.6284 6.6853 38.4565 6.89793C38.2845 7.11057 38.0449 7.2578 37.7775 7.31504Z" fill="#fff"/>
</svg>`, `<svg width="45" height="68" viewBox="0 0 45 68" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.88602 29.2627C5.30695 29.5405 4.6617 29.6509 4.02321 29.5811C3.38473 29.5114 2.77849 29.2645 2.27303 28.8682C1.76757 28.4719 1.38307 27.9421 1.16298 27.3387C0.942902 26.7353 0.896026 26.0824 1.02765 25.4538L4.85239 16.0049V15.9875C4.94626 15.545 5.12637 15.1253 5.38244 14.7523C5.63852 14.3794 5.96554 14.0605 6.34485 13.814C6.72415 13.5674 7.1483 13.398 7.59308 13.3153C8.03786 13.2327 8.49457 13.2385 8.93711 13.3323C9.37966 13.4262 9.79939 13.6063 10.1723 13.8624C10.5453 14.1185 10.8641 14.4455 11.1107 14.8248C11.3572 15.2041 11.5267 15.6282 11.6093 16.073C11.6919 16.5178 11.6862 16.9745 11.5923 17.4171L10.8582 19.2299L18.6127 15.4083L18.6238 15.3964C19.3683 14.8956 20.2788 14.705 21.1617 14.8649C22.0446 15.0249 22.8303 15.5229 23.3517 16.2531C23.8732 16.9833 24.0893 17.888 23.9542 18.7751C23.819 19.6621 23.3432 20.4614 22.6279 21.0031L22.6509 21.1304V30.4125C22.6828 30.2963 22.7208 30.1818 22.7646 30.0695L27.0872 21.5184L27.0935 21.5034C27.4409 20.6705 28.1011 20.0072 28.9323 19.6558C29.7635 19.3044 30.6993 19.2931 31.5388 19.6243C32.3782 19.9554 33.0543 20.6026 33.4217 21.4268C33.7892 22.251 33.8187 23.1864 33.5039 24.0321L29.1766 32.5746L29.1687 32.5943C28.9021 33.2651 28.4312 33.8351 27.8228 34.2236C27.2145 34.6121 26.4993 34.7994 25.7786 34.7591C25.0579 34.7189 24.3681 34.453 23.8068 33.9991C23.2455 33.5452 22.8411 32.9263 22.6509 32.23V34.8876L22.6548 34.9129C22.7669 35.6826 22.6345 36.4682 22.2763 37.1587L30.9207 63.8378C31.0984 64.7266 30.9186 65.6495 30.4203 66.4065C29.9219 67.1635 29.1451 67.6935 28.2585 67.8814C27.3719 68.0694 26.4469 67.9002 25.6843 67.4105C24.9216 66.9208 24.3828 66.1502 24.1847 65.2658V65.2445L17.7459 45.4072L11.3157 65.2421L11.3102 65.2634C11.1121 66.1478 10.5733 66.9185 9.81061 67.4081C9.04795 67.8978 8.12299 68.067 7.23637 67.8791C6.34975 67.6911 5.573 67.1611 5.07462 66.4041C4.57625 65.6471 4.39645 64.7242 4.57423 63.8355L13.2668 37.0236C13.1133 36.6979 13.0069 36.352 12.9507 35.9963V25.7991L6.85089 28.802L6.83509 28.8154C6.54356 29.0118 6.2238 29.1627 5.88681 29.2627M13.5331 14.8014L13.0527 12.7531H52.9271L52.3329 14.9776H38.8285L38.16 17.485L25.9999 18.9628C25.9342 18.4926 25.8157 18.0313 25.6466 17.5878C25.2681 16.5856 24.6434 15.6947 23.8303 14.9972C23.0171 14.2998 22.0416 13.8181 20.9934 13.5965C19.9453 13.3749 18.8582 13.4206 17.8324 13.7294C16.8065 14.0381 15.8748 14.6 15.1231 15.3632L13.5331 14.8014ZM22.0329 12.0672C20.8928 12.4984 19.6505 12.582 18.4629 12.3073C17.2754 12.0325 16.1959 11.4119 15.361 10.5238C14.5262 9.63565 13.9734 8.51994 13.7725 7.31768C13.5717 6.11543 13.7318 4.88061 14.2326 3.76935C14.7335 2.65808 15.5526 1.72026 16.5863 1.07444C17.6201 0.428623 18.8221 0.103811 20.0405 0.141064C21.2588 0.178317 22.4388 0.575964 23.4312 1.28373C24.4235 1.9915 25.1838 2.97762 25.6158 4.11741C26.1941 5.64678 26.1414 7.34317 25.4694 8.83373C24.7974 10.3243 23.5611 11.487 22.0321 12.0664" fill="#fff"/>
</svg>`, `<svg width="75" height="49" viewBox="0 0 75 49" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.816035 41.7318C0.567445 40.7589 0.710786 39.7272 1.21521 38.8589C1.71963 37.9907 2.5448 37.3551 3.51311 37.0891L33.1035 28.9624L43.6412 23.7247V34.3423L37.701 35.9923C36.7308 36.2591 35.7346 36.4207 34.7298 36.4743L5.57009 44.4794C5.08452 44.6158 4.57686 44.6552 4.07607 44.5953C3.57528 44.5355 3.09119 44.3776 2.65142 44.1307C2.21166 43.8838 1.82483 43.5526 1.51303 43.1562C1.20123 42.7598 0.97057 42.3058 0.834209 41.8203L0.816035 41.7318ZM3.01684 46.1808H44.667V1.39818C44.6749 1.09337 44.8015 0.803696 45.0199 0.590906C45.2383 0.378116 45.5312 0.259033 45.8361 0.259033C46.141 0.259033 46.4339 0.378116 46.6523 0.590906C46.8707 0.803696 46.9973 1.09337 47.0053 1.39818V4.37421C47.4413 3.5844 48.1432 2.97482 48.9864 2.65386L49.0701 2.62226C50.0291 2.28259 51.0837 2.33739 52.0023 2.77462C52.9209 3.21185 53.6285 3.99577 53.9696 4.95424L61.9186 24.9859C62.2582 25.9439 62.2043 26.9974 61.7687 27.9158C61.3331 28.8341 60.5513 29.5423 59.5945 29.8854C59.5115 29.9162 59.4278 29.9423 59.3448 29.9644C59.2215 30.0071 59.088 30.0489 58.9426 30.0861L48.0342 33.1222V21.5413L51.6021 19.768L47.0068 8.17129V46.1816H73.8187C74.1285 46.1816 74.4256 46.3046 74.6446 46.5237C74.8636 46.7427 74.9867 47.0398 74.9867 47.3496C74.9867 47.6593 74.8636 47.9564 74.6446 48.1754C74.4256 48.3945 74.1285 48.5175 73.8187 48.5175H3.01684C2.70707 48.5175 2.41 48.3945 2.19096 48.1754C1.97193 47.9564 1.84887 47.6593 1.84887 47.3496C1.84887 47.0398 1.97193 46.7427 2.19096 46.5237C2.41 46.3046 2.70707 46.1808 3.01684 46.1808ZM69.651 25.3241C68.4729 25.6374 67.2284 25.5944 66.0748 25.2004C64.9212 24.8064 63.9103 24.0792 63.1699 23.1107C62.4296 22.1422 61.9931 20.9759 61.9155 19.7593C61.838 18.5428 62.123 17.3305 62.7344 16.2759C63.3458 15.2213 64.2562 14.3716 65.3505 13.8344C66.4447 13.2971 67.6737 13.0964 68.8821 13.2576C70.0904 13.4189 71.2238 13.9348 72.139 14.7401C73.0541 15.5455 73.7099 16.6041 74.0234 17.7821C74.4426 19.362 74.2175 21.0437 73.3977 22.4578C72.5779 23.8719 71.2304 24.9028 69.651 25.3241Z" fill="#fff"/>
</svg>`];
const cells = [];
for (let r = 0; r < rows; r++) {
  for (let c = 0; c < cols; c++) {
    const cell = document.createElement("div");
    cell.className = "cell";
    const inner = document.createElement("div");
    inner.className = "inner";
    inner.innerHTML = svgIcons[Math.floor(Math.random() * svgIcons.length)];
    cell.appendChild(inner);
    grid.appendChild(cell);
    cells.push({
      el: cell,
      row: r,
      col: c
    });
  }
}
function getNeighbors(row, col) {
  return cells.filter(c => Math.abs(c.row - row) + Math.abs(c.col - col) === 1);
}
function activateCell(el, row, col) {
  cells.forEach(c => {
    c.el.classList.remove("hover", "neighbor");
    c.el.style.background = "#c7d0dc";
    c.el.style.zIndex = 1;
  });
  el.classList.add("hover");
  el.style.background = randomColor();
  el.style.zIndex = 10;
  const neighbors = getNeighbors(row, col);
  neighbors.forEach((n, i) => {
    setTimeout(() => {
      n.el.classList.add("neighbor");
      n.el.style.background = randomColor();
      n.el.style.zIndex = 5;
    }, i * 80);
  });
}
cells.forEach(({
  el,
  row,
  col
}) => {
  el.addEventListener("mouseenter", () => activateCell(el, row, col));
});
grid.addEventListener("mouseleave", () => {
  cells.forEach((c, i) => {
    setTimeout(() => {
      c.el.classList.remove("hover", "neighbor");
      c.el.style.background = "#c7d0dc";
      c.el.style.zIndex = 1;
    }, i * 15);
  });
});
grid.addEventListener("touchmove", e => {
  const touch = e.touches[0];
  const target = document.elementFromPoint(touch.clientX, touch.clientY);
  if (target && target.classList.contains("cell")) {
    const cellObj = cells.find(c => c.el === target);
    if (cellObj) activateCell(cellObj.el, cellObj.row, cellObj.col);
  }
});
document.addEventListener("mousemove", e => {
  const x = (e.clientX / window.innerWidth - 0.5) * 10;
  const y = (e.clientY / window.innerHeight - 0.5) * -10;
  grid.style.transform = `rotateX(${y}deg) rotateY(${x}deg)`;
});
document.addEventListener("mouseleave", () => {
  grid.style.transform = `rotateX(0deg) rotateY(0deg)`;
});
if (window.DeviceOrientationEvent) {
  window.addEventListener("deviceorientation", e => {
    const beta = e.beta || 0;
    const gamma = e.gamma || 0;
    const x = gamma / 45 * 8;
    const y = beta / 45 * -8;
    grid.style.transform = `rotateX(${y}deg) rotateY(${x}deg)`;
  });
}

/***/ }),

/***/ "./src/js/components/map.data.js":
/*!***************************************!*\
  !*** ./src/js/components/map.data.js ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([{
  coordinates: [59.968898, 30.39439],
  format: {
    subject: "Ленинградская область",
    adress: "195197, г.Санкт-Петербург, ул.Замшина, 6",
    phone: "8(812) 660-11-51",
    mail: "gto_47reg@mail.ru"
  },
  position: "top"
}, {
  coordinates: [58.528453, 31.249002],
  format: {
    subject: "Новгородская область",
    adress: "173016, Новгородская область, г. Великий Новгород, ул. Космонавтов, д. 34",
    phone: "8(8162) 765-725",
    mail: "gtonov53@mail.ru"
  },
  position: "top"
}, {
  coordinates: [59.942408, 30.321438],
  format: {
    subject: "Санкт-Петербург",
    adress: "191181, г. Санкт-Петербург, ул. Миллионная, д.22",
    phone: "8 (812) 312-15-41",
    mail: "kfis@gov.spb.ru"
  },
  position: "top"
}, {
  coordinates: [61.776998, 34.371052],
  format: {
    subject: "Карелия Республика",
    adress: "185030, Республика Карелия, г. Петрозаводск, просп. Александра Невского, 57",
    phone: "7 (8142) 71-73-01",
    mail: "minedu@karelia.ru"
  },
  position: "top"
}, {
  coordinates: [64.541214, 40.512474],
  format: {
    subject: "Архангельская обл",
    adress: "163000, Архангельская область, г. Архангельск, ул.Свободы, 8",
    phone: "8(8182)22-99-04",
    mail: "minmst@dvinaland.ru"
  },
  position: "top"
}, {
  coordinates: [67.638221, 53.000871],
  format: {
    subject: "Ненецкий АО",
    adress: "166000, Ненецкий автономный округ, г. Нарьян-Мар, ул. Ленина, д. 23а",
    phone: "(81853) 2-18-30",
    mail: "doks@adm-nao.ru"
  },
  position: "top"
}, {
  coordinates: [57.81356, 28.268383],
  format: {
    subject: "Псковская область",
    adress: "180025, Псковская область, Псковский район, деревня Борисовичи, ул. Балтийская, д. 11",
    phone: "8(811) 220-10-57",
    mail: "gto@csppskov.ru"
  },
  position: "top"
}, {
  coordinates: [54.717828, 20.493761],
  format: {
    subject: "Калининградская область",
    adress: "236007, Калининградская область, г.Калининград, ул. Дмитрия Донского, 1",
    phone: "8(4012)58-00-06",
    mail: "sport@gov39.ru"
  },
  position: "top"
}, {
  coordinates: [68.975492, 33.077415],
  format: {
    subject: "Мурманская область",
    adress: "183038, Мурманская область, г. Мурманск, ул. Челюскинцев, д. 2а",
    phone: "(8152) 487-891",
    mail: "sport@gov-murman.ru"
  },
  position: "top"
}, {
  coordinates: [59.210705, 39.835755],
  format: {
    subject: "Вологодская область",
    adress: "160002, Вологодская область, г. Вологда ул. Гагарина, 46",
    phone: "8(817)2 33-80-90 (доб 821)",
    mail: "gto@shor-vityaz35.ru"
  },
  position: "top"
}, {
  coordinates: [61.691686, 50.820804],
  format: {
    subject: "Коми Республика",
    adress: "167005, Республика Коми, г.Сыктывкар, ул. Петрозаводская,17",
    phone: "8(8212) 301-354",
    mail: "gto11gto@yandex.ru"
  },
  position: "top"
}, {
  coordinates: [48.802775, 44.742488],
  format: {
    subject: "Волгоградская область",
    adress: "404130, город Волжский, улица Комсомольская, д 20",
    phone: "+7 844 341-03-41",
    mail: "gto_34@mail.ru"
  },
  position: "top"
}, {
  coordinates: [46.319009, 44.260731],
  format: {
    subject: "Республика Калмыкия",
    adress: "385007, Республика Калмыкия, город  Элиста, ул. С.М. Буденного, дом 7.",
    phone: "+7 847 224-20-20",
    mail: "gto.rk08@yandex.ru"
  },
  position: "top"
}, {
  coordinates: [46.327175, 48.045315],
  format: {
    subject: "Астраханская область",
    adress: "414057, Астраханская область, город Астрахань, ул. М.Луконина, д.6 а",
    phone: "+7 851 251-51-15",
    mail: "gto-astrakhan@mail.ru"
  },
  position: "top"
}, {
  coordinates: [47.24145, 39.757162],
  format: {
    subject: "Ростовская область",
    adress: "344029, г. Ростов-на-Дону, пр. Шолохова, д. 31",
    phone: "+7 863 283-28-47",
    mail: "gto161@mail.ru"
  },
  position: "top"
}, {
  coordinates: [45.025278, 38.998633],
  format: {
    subject: "Краснодарский край",
    adress: "350038, Краснодарский край, город Краснодар, Железнодорожная ул., д.49",
    phone: "+7 861 239-54-49",
    mail: "gto.kuban@mail.ru"
  },
  position: "top"
}, {
  coordinates: [44.944072, 34.090364],
  format: {
    subject: "Республика Крым",
    adress: "295015,  г. Симферополь, ул. Пушкина, д. 46",
    phone: "+7 979 040-53-45",
    mail: "gto_rk@msport.rk.gov.ru"
  },
  position: "top"
}, {
  coordinates: [44.597121, 40.108619],
  format: {
    subject: "Республика Адыгея",
    adress: "385000, Республика Адыгея, г.Майкоп, ул. Гагарина, 7",
    phone: "+7 877 252-74-92",
    mail: "elena_tkachenko_nik_92@mail.ru"
  },
  position: "top"
}, {
  coordinates: [44.602364, 33.510421],
  format: {
    subject: "Севастополь",
    adress: "299008, Севастополь, Стрелецкий спуск, 1",
    phone: "+7 869 255-72-01",
    mail: "gtosevsport6@mail.ru"
  },
  position: "top"
}, {
  coordinates: [48.000735, 37.804036],
  format: {
    subject: "Донецкая Народная Республика",
    adress: "283001, Донецкая Народная республика г. Донецк, ул. Артема, д. 74 ",
    phone: "+7 856 334-03-05",
    mail: "sportdlyavsekh@mail.ru"
  },
  position: "top"
}, {
  coordinates: [43.325705, 45.689474],
  format: {
    subject: "Чеченская Республика",
    adress: "364024, г. Грозный, ул. Мира 83 А",
    phone: "+7 928 886-55-76",
    mail: "rct95@mail.ru"
  },
  position: "top"
}, {
  coordinates: [45.013542, 41.912885],
  format: {
    subject: "Ставропольский край ",
    adress: "355040 г. Ставрополь, ул. Тухачевского, д.18",
    phone: "+7 865 255-23-87",
    mail: "sstav.ct.gto@yandex.ru"
  },
  position: "top"
}, {
  coordinates: [44.195229, 42.041128],
  format: {
    subject: "Карачаево-Черкесская Республика",
    adress: "369000, Карачаево-Черкесская Республика, г. Черкесск, ул. Космонавтов, д.102а ",
    phone: "+7 878 226-10-38",
    mail: "gto-kchr@mail.ru"
  },
  position: "top"
}, {
  coordinates: [43.489399, 43.603954],
  format: {
    subject: "Кабардино-Балкарская Республика",
    adress: "360000, Кабардино-Балкарская Республика г. Нальчик, ул. Пачева, 57",
    phone: "+7 928 710-22-80",
    mail: "rsdusshor57@mail.ru"
  },
  position: "top"
}, {
  coordinates: [42.965567, 47.500693],
  format: {
    subject: "Республика Дагестан",
    adress: "367030, города Махачкала, ул. Ярагского, 98",
    phone: "+7 988 791-99-38",
    mail: "gto05@bk.ru"
  },
  position: "top"
}, {
  coordinates: [43.233892, 44.746135],
  format: {
    subject: "Республика Ингушетия",
    adress: "Республика Ингушетия г. Назрань, ул. Фабричная 3",
    phone: "+7 928 741-85-82",
    mail: "ham201@yandex.ru"
  },
  position: "top"
}, {
  coordinates: [43.019943, 44.700699],
  format: {
    subject: "Республика Северная Осетия-Алания",
    adress: "362019,Республика Северная Осетия-Алания,г. Владикавказ,ул. Пушкинская д.2",
    phone: "+7 918 830-32-09",
    mail: "gto.rso@mail.ru"
  },
  position: "top"
}, {
  coordinates: [45.617957, 63.314312],
  format: {
    subject: "Байконур",
    adress: "г. Байконур, ул Гагарина д.13",
    phone: "8(33622)5-62-62 (или 22)",
    mail: "ukmpts-baikonur@mail.ru"
  },
  position: "top"
}, {
  coordinates: [56.337386, 43.96461],
  format: {
    subject: "Нижегородская область",
    adress: "603086, Нижегородская обл., г. Нижний Новгород, ул. Бетанкура дом 1а",
    phone: "+7 831 214-39-29",
    mail: "rct-no@mail.ru"
  },
  position: "top"
}, {
  coordinates: [56.140294, 47.24532],
  format: {
    subject: "Чувашская Республика",
    adress: "428004, г. Чебоксары, Президентский бульвар, д. 17",
    phone: "+7 835 256-52-54",
    mail: "sport43@cap.ru"
  },
  position: "top"
}, {
  coordinates: [51.540021, 45.999079],
  format: {
    subject: "Саратовская область ",
    adress: "410012, г.Саратов,  ул. Аткарская зд. 29, стр 2",
    phone: "+7 845 241-05-66",
    mail: "gtosaratov64@mail.ru"
  },
  position: "top"
}, {
  coordinates: [53.239348, 50.181302],
  format: {
    subject: "Самарская область",
    adress: "443011, г. Самара, ул. Советской Армии, 253А",
    phone: "+7 846 212-04-92",
    mail: "gaugto@mail.ru"
  },
  position: "top"
}, {
  coordinates: [53.186129, 45.055865],
  format: {
    subject: "Пензенская область",
    adress: "440072, г. Пенза,улица Антонова ,39А",
    phone: "+7 841 269-97-16",
    mail: "vfskgto-penza@mail.ru"
  },
  position: "top"
}, {
  coordinates: [54.16057, 45.156477],
  format: {
    subject: "Республика Мордовия ",
    adress: "430007, г. Саранск, ул. Студенческая, д. 11б",
    phone: "+7 917 693-57-17",
    mail: "treskin_79@mail.ru"
  },
  position: "top"
}, {
  coordinates: [56.624341, 47.894982],
  format: {
    subject: "Республика Марий Эл ",
    adress: "424006, г.Йошкар-Ола, ул. Карла Маркса, д. 105а",
    phone: "+7 836 234-19-85",
    mail: "gto@uss12.ru"
  },
  position: "top"
}, {
  coordinates: [54.308976, 48.39449],
  format: {
    subject: "Ульяновская область",
    adress: "432000, г. Ульяновск, ул. А. Матросова, д. 4",
    phone: "+7 842 227-09-22",
    mail: "gto_73@bk.ru"
  },
  position: "top"
}, {
  coordinates: [58.615835, 49.625371],
  format: {
    subject: "Кировская область ",
    adress: "610044, город Киров, ул. Сормовская, д. 40",
    phone: "+7 912 721-41-32",
    mail: "43gto@mail.ru"
  },
  position: "top"
}, {
  coordinates: [55.773206, 49.127677],
  format: {
    subject: "Республика Татарстан ",
    adress: "420107, Республика Татарстан, г. Казань, ул. Хади Такташа, д.58",
    phone: "+7 917 856-98-36",
    mail: "vfsk_gto_rt@mail.ru"
  },
  position: "top"
}, {
  coordinates: [58.003359, 56.254991],
  format: {
    subject: "Пермский край",
    adress: "614039, г.Пермь, улица Сибирская, дом 55",
    phone: "+7 342 244-10-85",
    mail: "gto59perm@mail.ru"
  },
  position: "top"
}, {
  coordinates: [54.727781, 56.023415],
  format: {
    subject: "Республика Башкортостан",
    adress: "450080, Уфа, Менделеева, 158/4",
    phone: "+7 347 215-14-02",
    mail: "gtorb_csp.mustafina@mail.ru"
  },
  position: "top"
}, {
  coordinates: [56.854414, 53.229484],
  format: {
    subject: "Удмуртская Республика",
    adress: "426034 г.Ижевск, Кооперативная 9",
    phone: "+7 341 250-00-01",
    mail: "gto18@yandex.ru"
  },
  position: "top"
}, {
  coordinates: [51.769865, 55.075917],
  format: {
    subject: "Оренбургская область ",
    adress: "460006, Оренбургская область, г Оренбург, Кондукторская ул, д. 2 ",
    phone: "+7 905 849-13-75",
    mail: "gto_orenburje@mail.ru"
  },
  position: "top"
}, {
  coordinates: [56.843275, 60.626454],
  format: {
    subject: "Свердловская область",
    adress: "620075, город Екатеринбург, улица Первомайская, дом 56",
    phone: "+7 343 272-00-97",
    mail: "rcfks-karate@egov66.ru"
  },
  position: "top"
}, {
  coordinates: [57.165905, 65.509822],
  format: {
    subject: "Тюменская область ",
    adress: "625001, г. Тюмень, ул. Луначарского, д. 12",
    phone: "+7 345 268-58-71",
    mail: "mail@csp72.ru"
  },
  position: "top"
}, {
  coordinates: [66.535757, 66.583856],
  format: {
    subject: "Ямало-Ненецкий автономный округ",
    adress: "629 003, ЯНАО г. Салехард, Чупрова, д.17-Б",
    phone: "+7 349 224-37-46",
    mail: "gto-yanao@mail.ru"
  },
  position: "top"
}, {
  coordinates: [55.165354, 61.374544],
  format: {
    subject: "Челябинская область ",
    adress: "454080, г. Челябинск, ул. Коммуны, 98А, офис 301 ",
    phone: "+7 351 200-46-71",
    mail: "anogto74@mail.ru"
  },
  position: "top"
}, {
  coordinates: [61.016637, 69.054134],
  format: {
    subject: "Ханты-Мансийский автономный округ - Югра",
    adress: "628011, город Ханты-Мансийск, улица Студенческая дом 31",
    phone: "+7 346 730-06-00",
    mail: "gtougra@yandex.ru"
  },
  position: "top"
}, {
  coordinates: [55.439257, 65.363881],
  format: {
    subject: "Курганская область",
    adress: "640006, Курганская область, г.Курган, ул. Сибирская, 1",
    phone: "+7 352 224-00-03",
    mail: "45regcentrgto@mail.ru"
  },
  position: "top"
}, {
  coordinates: [50.601298, 36.582327],
  format: {
    subject: "Белгородская область",
    adress: "308033, г. Белгород, Народный бульвар, 93",
    phone: "+7 472 232-56-46",
    mail: "rct_gto31@mail.ru"
  },
  position: "top"
}, {
  coordinates: [52.599785, 39.589877],
  format: {
    subject: "Липецкая область",
    adress: "398059, г. Липецк, ул. Коммунальная, д. 12, офис 14 (цокольный этаж) ",
    phone: "+7 474 223-46-51",
    mail: "GTO-48@yandex.ru"
  },
  position: "top"
}, {
  coordinates: [54.529015, 36.172282],
  format: {
    subject: "Калужская область",
    adress: "248007 г. Калуга, ул. Анненки, д.5.",
    phone: "+7 484 240-36-08",
    mail: "gto-kaluga@mail.ru"
  },
  position: "top"
}, {
  coordinates: [54.612337, 39.714582],
  format: {
    subject: "Рязанская область ",
    adress: "390026, г. Рязань, ул. 6-я Линия, д.10, помещение Н1",
    phone: "+7 491 230-02-55",
    mail: "dusshnika@mail.ru"
  },
  position: "top"
}, {
  coordinates: [54.763825, 32.092529],
  format: {
    subject: "Смоленская область",
    adress: "214031, Смоленская область, город Смоленск, ул. Рыленкова, д.14 ",
    phone: "+7 905 699-30-68",
    mail: "Krivenkova.83@mail.ru"
  },
  position: "top"
}, {
  coordinates: [52.728086, 41.450639],
  format: {
    subject: "Тамбовская область",
    adress: "392000, Тамбовская область, город Тамбов, ул. Карла Маркса, 165к1",
    phone: "+7 475 279-24-17",
    mail: "gtotambov@mail.ru"
  },
  position: "top"
}, {
  coordinates: [55.770512, 37.702984],
  format: {
    subject: "Москва",
    adress: "г. Москва, ул. Госпитальный Вал, д.1А, стр.1",
    phone: "+7 495 198-08-03",
    mail: "gto@mosgorsport.ru"
  },
  position: "top"
}, {
  coordinates: [54.178997, 37.6433],
  format: {
    subject: "Тульская область",
    adress: "300045, г. Тула, село Осиновая Гора, строение 2А",
    phone: "+7 487 233-81-68",
    mail: "GTO71region.uss@yandex.ru"
  },
  position: "top"
}, {
  coordinates: [56.994798, 40.979535],
  format: {
    subject: "Ивановская область ",
    adress: "153000, г. Иваново, пл. Революции, 2/1",
    phone: "+7 493 252-82-60",
    mail: "gtoivobl@mail.ru"
  },
  position: "top"
}, {
  coordinates: [57.790103, 40.964506],
  format: {
    subject: "Костромская область",
    adress: "156013, г. Кострома, пр. Мира, 159",
    phone: "+7 494 245-05-11",
    mail: "gto-kostroma@mail.ru"
  },
  position: "top"
}, {
  coordinates: [57.626236, 39.852302],
  format: {
    subject: "Ярославская область ",
    adress: "150014, Ярославль, ул. Свободы, д.87А, офис 530",
    phone: "+7 485 264-05-06",
    mail: "burevestnikvv@yarregion.ru"
  },
  position: "top"
}, {
  coordinates: [53.259315, 34.434419],
  format: {
    subject: "Брянская область",
    adress: "241047, Брянская область, город Брянск, ул. 2-я Мичурина, д.32-а ",
    phone: "+7 900 364-36-04",
    mail: "bryansk.gto@yandex.ru"
  },
  position: "top"
}, {
  coordinates: [52.977176, 36.049222],
  format: {
    subject: "Орловская область",
    adress: "302040, г. Орёл, ул. Матросова, д. 5 (1 этаж., каб. №3)",
    phone: "+7 486 241-33-38",
    mail: "gtoorel@yandex.ru"
  },
  position: "top"
}, {
  coordinates: [51.663345, 39.193613],
  format: {
    subject: "Воронежская область",
    adress: "394018, г. Воронеж, ул. Куколкина, д 11, 2 этаж",
    phone: "+7 473 228-15-80",
    mail: "gto@sport-vrn.ru"
  },
  position: "top"
}, {
  coordinates: [51.739821, 36.191515],
  format: {
    subject: "Курская область ",
    adress: "305004, город Курск, улица Ленина 56-58 ",
    phone: "+7 471 273-08-94",
    mail: "Sportuprav@yandex.ru"
  },
  position: "top"
}, {
  coordinates: [56.117035, 40.351523],
  format: {
    subject: "Владимирская область",
    adress: "600022, г. Владимир, пр. Ленина, д. 59",
    phone: "(4992)34-21-76",
    mail: "ds@avo.ru"
  },
  position: "top"
}, {
  coordinates: [55.817062, 37.383687],
  format: {
    subject: "Московская область",
    adress: "143407, Московская область, г. Красногорск, бульвар Строителей, д. 7",
    phone: "(498) 602-13-43",
    mail: "minsport@mosreg.ru"
  },
  position: "top"
}, {
  coordinates: [56.869604, 35.885135],
  format: {
    subject: "Тверская область",
    adress: "170042, г. Тверь, ул. Горького, д. 97, офис 107",
    phone: "(4822) 33-34-63",
    mail: "kom_sporta@tverreg.ru"
  },
  position: "top"
}, {
  coordinates: [50.260981, 127.500853],
  format: {
    subject: "Амурская область",
    adress: "675004, город Благовещенск, улица Ленина, 160",
    phone: "+7 416 277-20-32",
    mail: "amurgto@mail.ru"
  },
  position: "top"
}, {
  coordinates: [51.826321, 107.574998],
  format: {
    subject: "Республика Бурятия",
    adress: "670000, Республика Бурятия, г. Улан-Удэ, ул. Кирова, 1, кабинет 128",
    phone: "+7 301 221-13-97",
    mail: "gto03bur@yandex.ru"
  },
  position: "top"
}, {
  coordinates: [48.795125, 132.919149],
  format: {
    subject: "Еврейская автономная область",
    adress: "679016, Еврейская автономная область , г. Биробиджан, Шолом-Алейхема, д. 41а",
    phone: "+7 426 222-07-30",
    mail: "Cspeo@post.eao.ru"
  },
  position: "top"
}, {
  coordinates: [52.032084, 113.496189],
  format: {
    subject: "Забайкальский край",
    adress: "672000, Забайкальский край, г Чита, ул Анохина, д. 91",
    phone: "+7 302 240-09-54",
    mail: "sportmasszab@bk.ru"
  },
  position: "top"
}, {
  coordinates: [53.018886, 158.648794],
  format: {
    subject: "Камчатский край",
    adress: "683000, Камчатский край, г. Петропавловск-Камчатский, ул. Советская, д. 35",
    phone: "(4152) 42-35-64",
    mail: "minst@kamgov.ru"
  },
  position: "top"
}, {
  coordinates: [59.56573, 150.812045],
  format: {
    subject: "Магаданская область",
    adress: "685000, Магаданская область, г. Магадан, ул. Пролетарская, д. 14",
    phone: "(4132) 62-20-25",
    mail: "depfis@49gov.ru"
  },
  position: "top"
}, {
  coordinates: [43.123636, 131.876295],
  format: {
    subject: "Приморский край",
    adress: "690091, г. Владивосток, ул. Батарейная, д. 2",
    phone: "+ 7 423 260-50 34 ",
    mail: "vfskgtoprim@mail.ru"
  },
  position: "top"
}, {
  coordinates: [62.030567, 129.732124],
  format: {
    subject: "Республика Саха (Якутия)",
    adress: "677000, г. Якутск, ул. Орджоникидзе, д. 28",
    phone: "+7 411 232-59-13",
    mail: "sakha.gto@gmail.com"
  },
  position: "top"
}, {
  coordinates: [46.952106, 142.761307],
  format: {
    subject: "Сахалинская область",
    adress: "693010, Сахалинская область, город Южно-Сахалинск, ул Алексея Максимовича Горького, д. 7 ",
    phone: "+7 424 255-93-55",
    mail: "gto-65@mail.ru"
  },
  position: "top"
}, {
  coordinates: [48.481758, 135.045929],
  format: {
    subject: "Хабаровский край",
    adress: "680038, Хабаровский край, г. Хабаровск, улица Советская, д. 2а",
    phone: "+7 421 247-94-60",
    mail: "gto.dvhab@mail.ru"
  },
  position: "top"
}, {
  coordinates: [64.737584, 177.506579],
  format: {
    subject: "Чукотский автономный округ",
    adress: "689000, Чукотский автономный округ, г. Анадырь, ул. Беринга, д. 7",
    phone: "(42722) 6-67-42",
    mail: "kkst_87@mail.ru"
  },
  position: "top"
}, {
  coordinates: [52.28458, 104.317913],
  format: {
    subject: "Иркутская область ",
    adress: "664007, город Иркутск, ул. Поленова, 18, каб. 201",
    phone: "+7 991 371-84-90",
    mail: "sport202828@yandex.ru"
  },
  position: "top"
}, {
  coordinates: [55.335981, 86.131044],
  format: {
    subject: "Кемеровская область - Кузбасс",
    adress: "650070,  Кемеровская область - Кузбасс, г. Кемерево, ул. Тухачевского, 19",
    phone: "+7 384 231-86-33",
    mail: "42gto@mail.ru"
  },
  position: "top"
}, {
  coordinates: [53.339473, 83.789065],
  format: {
    subject: "Алтайский край",
    adress: "656056, г. Барнаул, ул. Пролетарская, д. 65",
    phone: "+7 983 352-24-07",
    mail: "starkirkript1@yandex.ru"
  },
  position: "top"
}, {
  coordinates: [55.020451, 73.306785],
  format: {
    subject: "Омская область",
    adress: "644008, г.  Омск, пр.  Мира,  д. 1А",
    phone: "+7 381 221-78-17",
    mail: "gtoomsk@yandex.ru"
  },
  position: "top"
}, {
  coordinates: [51.955362, 85.94468],
  format: {
    subject: "Республика Алтай",
    adress: "649000, г. Горно-Алтайск, улица Чорос-Гуркина 53/1",
    phone: "+7 983 329-83-41",
    mail: "gto.altai@mail.ru"
  },
  position: "top"
}, {
  coordinates: [55.995594, 92.874958],
  format: {
    subject: "Красноярский край",
    adress: "660064, Красноярский край, г.о. город Красноярск, г Красноярск, ост-в Отдыха, д. 12",
    phone: "+7 391 989-12-93",
    mail: "24gto@mail.ru"
  },
  position: "top"
}, {
  coordinates: [55.022484, 82.913602],
  format: {
    subject: "Новосибирская область",
    adress: "630007, г. Новосибирск, Коммунистическая ул., д. 6, оф.507",
    phone: "+7 383 319-56-30",
    mail: "dsm_sport@nso.ru"
  },
  position: "top"
}, {
  coordinates: [53.714075, 91.404999],
  format: {
    subject: "Республика Хакасия",
    adress: "655004 Республика Хакасия г. Абакан, ул. Пушкина, д. 190",
    phone: "+7 390 228-51-04",
    mail: "olimp@r-19.ru"
  },
  position: "top"
}, {
  coordinates: [56.526825, 84.97767],
  format: {
    subject: "Томская область",
    adress: "634027, г. Томск, ул. Смирнова, 48Б",
    phone: "+7 962 785-85-32",
    mail: "cspto@gov70.ru"
  },
  position: "top"
}, {
  coordinates: [51.700904, 94.403342],
  format: {
    subject: "Республика Тыва",
    adress: "667010, Республика Тыва, г.Кызыл, ул.Калинина, д.11",
    phone: "+7 394 223-00-30",
    mail: "usm_17@mail.ru"
  },
  position: "top"
}]);

/***/ }),

/***/ "./src/js/components/map.js":
/*!**********************************!*\
  !*** ./src/js/components/map.js ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _map_theme_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map.theme.js */ "./src/js/components/map.theme.js");
/* harmony import */ var _map_data_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map.data.js */ "./src/js/components/map.data.js");


const layerEl = document.querySelector(".main-map__body-layer");
const mapEl = document.getElementById("map");
async function initMap() {
  await ymaps3.ready;
  const {
    YMap,
    YMapDefaultSchemeLayer,
    YMapDefaultFeaturesLayer,
    YMapMarker
  } = ymaps3;
  ymaps3.import.registerCdn("https://cdn.jsdelivr.net/npm/{package}", ["@yandex/ymaps3-default-ui-theme@0.0.19", "@yandex/ymaps3-clusterer@0.0.11"]);
  const {
    YMapPopupMarker
  } = await ymaps3.import("@yandex/ymaps3-default-ui-theme");
  const {
    YMapClusterer,
    clusterByGrid
  } = await ymaps3.import("@yandex/ymaps3-clusterer");
  const map = new YMap(mapEl, {
    location: {
      center: [37.588144, 55.733842],
      zoom: 10
    }
  }, [new YMapDefaultSchemeLayer({}), new YMapDefaultFeaturesLayer({})]);
  map.addChild(new YMapDefaultSchemeLayer({
    customization: _map_theme_js__WEBPACK_IMPORTED_MODULE_0__["default"]
  }));
  function PopupContent(markerProp) {
    console.log(markerProp);
    const tooltipWrapper = document.createElement("div");
    tooltipWrapper.classList.add("main-map__tooltip");
    const subjectWrapper = document.createElement("div");
    const subjectIcon = document.createElement("div");
    const subjectText = document.createElement("p");
    const tooltipAdress = document.createElement("p");
    tooltipAdress.classList.add("main-map__tooltip-adress");
    tooltipAdress.innerText = markerProp.format.adress;
    subjectWrapper.classList.add("main-map__tooltip-subject");
    subjectText.classList.add("main-map__tooltip-subject-text");
    subjectWrapper.classList.add("main-map__tooltip-subject");
    subjectIcon.innerHTML = `<svg
        width="16"
        height="16"
        viewBox="0 0 10 11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.66715 0C6.5031 1.8737e-05 8.25065 1.11988 8.97867 2.86914C10.3226 6.10043 7.56969 8.34046 5.50504 10.3291C5.27987 10.5457 4.97961 10.667 4.66715 10.667C4.35467 10.667 4.05444 10.5458 3.82926 10.3291C1.76993 8.33378 -0.989701 6.10512 0.355623 2.86914C1.08432 1.11921 2.83119 0 4.66715 0ZM4.66715 3C4.22513 3 3.80099 3.17574 3.48844 3.48828C3.17587 3.80084 3.00015 4.22496 3.00015 4.66699C3.00024 5.10884 3.17604 5.53225 3.48844 5.84473C3.801 6.15729 4.22512 6.33301 4.66715 6.33301C5.10904 6.33291 5.53241 6.1572 5.84488 5.84473C6.15735 5.53224 6.33308 5.10889 6.33316 4.66699C6.33316 4.22496 6.15744 3.80084 5.84488 3.48828C5.53242 3.1759 5.10897 3.0001 4.66715 3Z"
          fill="#8E8D8D"
        />
      </svg>`;
    subjectText.innerText = markerProp.format.subject;
    const tooltipContactWrapper = document.createElement("div");
    tooltipContactWrapper.classList.add("main-map__tooltip-wrapper");
    const tooltipContactText = document.createElement("p");
    tooltipContactText.classList.add("main-map__tooltip-text");
    const contact = document.createElement("a");
    contact.classList.add("main-map__tooltip-link");
    contact.href = `tel:${markerProp.format.phone.replace(/\D/g, "").replace(/^8/, "+7")}`;
    contact.innerText = markerProp.format.phone;
    contact.classList.add("main-map__tooltip");
    tooltipContactText.innerText = "Телефон:";
    const tooltipContactWrapperMail = document.createElement("div");
    tooltipContactWrapperMail.classList.add("main-map__tooltip-wrapper");
    const tooltipContactTextMail = document.createElement("p");
    tooltipContactTextMail.classList.add("main-map__tooltip-text");
    tooltipContactTextMail.innerText = "Почта:";
    const contactMail = document.createElement("a");
    contactMail.classList.add("main-map__tooltip-link");
    contactMail.href = `mailto:${markerProp.format.mail}`;
    contactMail.innerText = markerProp.format.mail;
    contactMail.classList.add("main-map__tooltip");
    const tooltipLinkRegionPage = document.createElement("a");
    tooltipLinkRegionPage.classList.add("main-map__tooltip-link-region");
    tooltipLinkRegionPage.href = "#";
    tooltipLinkRegionPage.innerText = "Новости в регионе";
    tooltipWrapper.appendChild(subjectWrapper);
    subjectWrapper.appendChild(subjectIcon);
    subjectWrapper.appendChild(subjectText);
    tooltipWrapper.appendChild(tooltipAdress);
    tooltipContactWrapper.appendChild(tooltipContactText);
    tooltipContactWrapper.appendChild(contact);
    tooltipWrapper.appendChild(tooltipContactWrapper);
    tooltipContactWrapperMail.appendChild(tooltipContactTextMail);
    tooltipContactWrapperMail.appendChild(contactMail);
    tooltipWrapper.appendChild(tooltipContactWrapperMail);
    tooltipWrapper.appendChild(tooltipLinkRegionPage);
    return tooltipWrapper;
  }

  /*data.forEach((markerProp) => {
    const marker = new YMapPopupMarker({
      coordinates: markerProp.coordinates,
      position: markerProp.position,
      content: () => PopupContent(markerProp),
    });
    map.addChild(marker);
  });*/

  _map_data_js__WEBPACK_IMPORTED_MODULE_1__["default"].forEach(markerProp => {
    setPopupMarker(markerProp);
  });
  let openedPopup = null;
  function setPopupMarker(markerProp) {
    const contentEl = PopupContent(markerProp);
    const popupMarker = new YMapPopupMarker({
      coordinates: markerProp.coordinates,
      position: markerProp.position,
      show: false,
      content: () => contentEl
    });
    map.addChild(popupMarker);
    let isShown = false;
    const markerElement = document.createElement("span");
    markerElement.className = "icon-marker";
    markerElement.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12 12q.825 0 1.413-.587T14 10t-.587-1.412T12 8t-1.412.588T10 10t.588 1.413T12 12m0 10q-4.025-3.425-6.012-6.362T4 10.2q0-3.75 2.413-5.975T12 2t5.588 2.225T20 10.2q0 2.5-1.987 5.438T12 22"/></svg>';
    const marker = new YMapMarker({
      coordinates: markerProp.coordinates,
      anchor: [0.5, 1]
    }, markerElement);
    map.addChild(marker);
    function setPopupVisibility(next) {
      isShown = next;
      popupMarker.update({
        show: isShown
      });
      if (isShown) {
        if (openedPopup && openedPopup !== popupMarker) {
          openedPopup.update({
            show: false
          });
          openedPopup.__setLocalState && openedPopup.__setLocalState(false);
        }
        openedPopup = popupMarker;
      } else if (openedPopup === popupMarker) {
        openedPopup = null;
      }
    }
    popupMarker.__setLocalState = v => {
      isShown = v;
    };
    markerElement.addEventListener("click", e => {
      e.stopPropagation();
      setPopupVisibility(!isShown);
    });
    contentEl.addEventListener("click", e => {
      e.stopPropagation();
      if (isShown) setPopupVisibility(false);
    });
  }
}
if (mapEl) {
  initMap();
}
if (layerEl) {
  layerEl.addEventListener("click", () => {
    layerEl.classList.toggle("main-map__body-layer_hide");
  });
}

/***/ }),

/***/ "./src/js/components/map.theme.js":
/*!****************************************!*\
  !*** ./src/js/components/map.theme.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([{
  tags: "country",
  elements: "geometry.fill",
  stylers: [{
    color: "#859ead"
  }, {
    opacity: 0.8,
    zoom: 0
  }, {
    opacity: 0.8,
    zoom: 1
  }, {
    opacity: 0.8,
    zoom: 2
  }, {
    opacity: 0.8,
    zoom: 3
  }, {
    opacity: 0.8,
    zoom: 4
  }, {
    opacity: 1,
    zoom: 5
  }, {
    opacity: 1,
    zoom: 6
  }, {
    opacity: 1,
    zoom: 7
  }, {
    opacity: 1,
    zoom: 8
  }, {
    opacity: 1,
    zoom: 9
  }, {
    opacity: 1,
    zoom: 10
  }, {
    opacity: 1,
    zoom: 11
  }, {
    opacity: 1,
    zoom: 12
  }, {
    opacity: 1,
    zoom: 13
  }, {
    opacity: 1,
    zoom: 14
  }, {
    opacity: 1,
    zoom: 15
  }, {
    opacity: 1,
    zoom: 16
  }, {
    opacity: 1,
    zoom: 17
  }, {
    opacity: 1,
    zoom: 18
  }, {
    opacity: 1,
    zoom: 19
  }, {
    opacity: 1,
    zoom: 20
  }, {
    opacity: 1,
    zoom: 21
  }]
}, {
  tags: "country",
  elements: "geometry.outline",
  stylers: [{
    color: "#9cd9fc"
  }, {
    opacity: 0.15,
    zoom: 0
  }, {
    opacity: 0.15,
    zoom: 1
  }, {
    opacity: 0.15,
    zoom: 2
  }, {
    opacity: 0.15,
    zoom: 3
  }, {
    opacity: 0.15,
    zoom: 4
  }, {
    opacity: 0.15,
    zoom: 5
  }, {
    opacity: 0.25,
    zoom: 6
  }, {
    opacity: 0.5,
    zoom: 7
  }, {
    opacity: 0.47,
    zoom: 8
  }, {
    opacity: 0.44,
    zoom: 9
  }, {
    opacity: 0.41,
    zoom: 10
  }, {
    opacity: 0.38,
    zoom: 11
  }, {
    opacity: 0.35,
    zoom: 12
  }, {
    opacity: 0.33,
    zoom: 13
  }, {
    opacity: 0.3,
    zoom: 14
  }, {
    opacity: 0.28,
    zoom: 15
  }, {
    opacity: 0.25,
    zoom: 16
  }, {
    opacity: 0.25,
    zoom: 17
  }, {
    opacity: 0.25,
    zoom: 18
  }, {
    opacity: 0.25,
    zoom: 19
  }, {
    opacity: 0.25,
    zoom: 20
  }, {
    opacity: 0.25,
    zoom: 21
  }]
}, {
  tags: "region",
  elements: "geometry.fill",
  stylers: [{
    color: "#a3b6c2",
    opacity: 0.5,
    zoom: 0
  }, {
    color: "#a3b6c2",
    opacity: 0.5,
    zoom: 1
  }, {
    color: "#a3b6c2",
    opacity: 0.5,
    zoom: 2
  }, {
    color: "#a3b6c2",
    opacity: 0.5,
    zoom: 3
  }, {
    color: "#a3b6c2",
    opacity: 0.5,
    zoom: 4
  }, {
    color: "#a3b6c2",
    opacity: 0.5,
    zoom: 5
  }, {
    color: "#a3b6c2",
    opacity: 1,
    zoom: 6
  }, {
    color: "#a3b6c2",
    opacity: 1,
    zoom: 7
  }, {
    color: "#859ead",
    opacity: 1,
    zoom: 8
  }, {
    color: "#859ead",
    opacity: 1,
    zoom: 9
  }, {
    color: "#859ead",
    opacity: 1,
    zoom: 10
  }, {
    color: "#859ead",
    opacity: 1,
    zoom: 11
  }, {
    color: "#859ead",
    opacity: 1,
    zoom: 12
  }, {
    color: "#859ead",
    opacity: 1,
    zoom: 13
  }, {
    color: "#859ead",
    opacity: 1,
    zoom: 14
  }, {
    color: "#859ead",
    opacity: 1,
    zoom: 15
  }, {
    color: "#859ead",
    opacity: 1,
    zoom: 16
  }, {
    color: "#859ead",
    opacity: 1,
    zoom: 17
  }, {
    color: "#859ead",
    opacity: 1,
    zoom: 18
  }, {
    color: "#859ead",
    opacity: 1,
    zoom: 19
  }, {
    color: "#859ead",
    opacity: 1,
    zoom: 20
  }, {
    color: "#859ead",
    opacity: 1,
    zoom: 21
  }]
}, {
  tags: "region",
  elements: "geometry.outline",
  stylers: [{
    color: "#9cd9fc"
  }, {
    opacity: 0.15,
    zoom: 0
  }, {
    opacity: 0.15,
    zoom: 1
  }, {
    opacity: 0.15,
    zoom: 2
  }, {
    opacity: 0.15,
    zoom: 3
  }, {
    opacity: 0.15,
    zoom: 4
  }, {
    opacity: 0.15,
    zoom: 5
  }, {
    opacity: 0.25,
    zoom: 6
  }, {
    opacity: 0.5,
    zoom: 7
  }, {
    opacity: 0.47,
    zoom: 8
  }, {
    opacity: 0.44,
    zoom: 9
  }, {
    opacity: 0.41,
    zoom: 10
  }, {
    opacity: 0.38,
    zoom: 11
  }, {
    opacity: 0.35,
    zoom: 12
  }, {
    opacity: 0.33,
    zoom: 13
  }, {
    opacity: 0.3,
    zoom: 14
  }, {
    opacity: 0.28,
    zoom: 15
  }, {
    opacity: 0.25,
    zoom: 16
  }, {
    opacity: 0.25,
    zoom: 17
  }, {
    opacity: 0.25,
    zoom: 18
  }, {
    opacity: 0.25,
    zoom: 19
  }, {
    opacity: 0.25,
    zoom: 20
  }, {
    opacity: 0.25,
    zoom: 21
  }]
}, {
  tags: {
    any: "admin",
    none: ["country", "region", "locality", "district", "address"]
  },
  elements: "geometry.fill",
  stylers: [{
    color: "#859ead"
  }, {
    opacity: 0.5,
    zoom: 0
  }, {
    opacity: 0.5,
    zoom: 1
  }, {
    opacity: 0.5,
    zoom: 2
  }, {
    opacity: 0.5,
    zoom: 3
  }, {
    opacity: 0.5,
    zoom: 4
  }, {
    opacity: 0.5,
    zoom: 5
  }, {
    opacity: 1,
    zoom: 6
  }, {
    opacity: 1,
    zoom: 7
  }, {
    opacity: 1,
    zoom: 8
  }, {
    opacity: 1,
    zoom: 9
  }, {
    opacity: 1,
    zoom: 10
  }, {
    opacity: 1,
    zoom: 11
  }, {
    opacity: 1,
    zoom: 12
  }, {
    opacity: 1,
    zoom: 13
  }, {
    opacity: 1,
    zoom: 14
  }, {
    opacity: 1,
    zoom: 15
  }, {
    opacity: 1,
    zoom: 16
  }, {
    opacity: 1,
    zoom: 17
  }, {
    opacity: 1,
    zoom: 18
  }, {
    opacity: 1,
    zoom: 19
  }, {
    opacity: 1,
    zoom: 20
  }, {
    opacity: 1,
    zoom: 21
  }]
}, {
  tags: {
    any: "admin",
    none: ["country", "region", "locality", "district", "address"]
  },
  elements: "geometry.outline",
  stylers: [{
    color: "#9cd9fc"
  }, {
    opacity: 0.15,
    zoom: 0
  }, {
    opacity: 0.15,
    zoom: 1
  }, {
    opacity: 0.15,
    zoom: 2
  }, {
    opacity: 0.15,
    zoom: 3
  }, {
    opacity: 0.15,
    zoom: 4
  }, {
    opacity: 0.15,
    zoom: 5
  }, {
    opacity: 0.25,
    zoom: 6
  }, {
    opacity: 0.5,
    zoom: 7
  }, {
    opacity: 0.47,
    zoom: 8
  }, {
    opacity: 0.44,
    zoom: 9
  }, {
    opacity: 0.41,
    zoom: 10
  }, {
    opacity: 0.38,
    zoom: 11
  }, {
    opacity: 0.35,
    zoom: 12
  }, {
    opacity: 0.33,
    zoom: 13
  }, {
    opacity: 0.3,
    zoom: 14
  }, {
    opacity: 0.28,
    zoom: 15
  }, {
    opacity: 0.25,
    zoom: 16
  }, {
    opacity: 0.25,
    zoom: 17
  }, {
    opacity: 0.25,
    zoom: 18
  }, {
    opacity: 0.25,
    zoom: 19
  }, {
    opacity: 0.25,
    zoom: 20
  }, {
    opacity: 0.25,
    zoom: 21
  }]
}, {
  tags: {
    any: "landcover",
    none: "vegetation"
  },
  stylers: [{
    hue: "#b4e2fd"
  }]
}, {
  tags: "vegetation",
  elements: "geometry",
  stylers: [{
    color: "#83cffc",
    opacity: 0.1,
    zoom: 0
  }, {
    color: "#83cffc",
    opacity: 0.1,
    zoom: 1
  }, {
    color: "#83cffc",
    opacity: 0.1,
    zoom: 2
  }, {
    color: "#83cffc",
    opacity: 0.1,
    zoom: 3
  }, {
    color: "#83cffc",
    opacity: 0.1,
    zoom: 4
  }, {
    color: "#83cffc",
    opacity: 0.1,
    zoom: 5
  }, {
    color: "#83cffc",
    opacity: 0.2,
    zoom: 6
  }, {
    color: "#b4e2fd",
    opacity: 0.3,
    zoom: 7
  }, {
    color: "#b4e2fd",
    opacity: 0.4,
    zoom: 8
  }, {
    color: "#b4e2fd",
    opacity: 0.6,
    zoom: 9
  }, {
    color: "#b4e2fd",
    opacity: 0.8,
    zoom: 10
  }, {
    color: "#b4e2fd",
    opacity: 1,
    zoom: 11
  }, {
    color: "#b4e2fd",
    opacity: 1,
    zoom: 12
  }, {
    color: "#b4e2fd",
    opacity: 1,
    zoom: 13
  }, {
    color: "#bee6fd",
    opacity: 1,
    zoom: 14
  }, {
    color: "#c8eafe",
    opacity: 1,
    zoom: 15
  }, {
    color: "#c8eafe",
    opacity: 1,
    zoom: 16
  }, {
    color: "#c8eafe",
    opacity: 1,
    zoom: 17
  }, {
    color: "#c8eafe",
    opacity: 1,
    zoom: 18
  }, {
    color: "#c8eafe",
    opacity: 1,
    zoom: 19
  }, {
    color: "#c8eafe",
    opacity: 1,
    zoom: 20
  }, {
    color: "#c8eafe",
    opacity: 1,
    zoom: 21
  }]
}, {
  tags: "park",
  elements: "geometry",
  stylers: [{
    color: "#b4e2fd",
    opacity: 0.1,
    zoom: 0
  }, {
    color: "#b4e2fd",
    opacity: 0.1,
    zoom: 1
  }, {
    color: "#b4e2fd",
    opacity: 0.1,
    zoom: 2
  }, {
    color: "#b4e2fd",
    opacity: 0.1,
    zoom: 3
  }, {
    color: "#b4e2fd",
    opacity: 0.1,
    zoom: 4
  }, {
    color: "#b4e2fd",
    opacity: 0.1,
    zoom: 5
  }, {
    color: "#b4e2fd",
    opacity: 0.2,
    zoom: 6
  }, {
    color: "#b4e2fd",
    opacity: 0.3,
    zoom: 7
  }, {
    color: "#b4e2fd",
    opacity: 0.4,
    zoom: 8
  }, {
    color: "#b4e2fd",
    opacity: 0.6,
    zoom: 9
  }, {
    color: "#b4e2fd",
    opacity: 0.8,
    zoom: 10
  }, {
    color: "#b4e2fd",
    opacity: 1,
    zoom: 11
  }, {
    color: "#b4e2fd",
    opacity: 1,
    zoom: 12
  }, {
    color: "#b4e2fd",
    opacity: 1,
    zoom: 13
  }, {
    color: "#bee6fd",
    opacity: 1,
    zoom: 14
  }, {
    color: "#c8eafe",
    opacity: 1,
    zoom: 15
  }, {
    color: "#c8eafe",
    opacity: 0.9,
    zoom: 16
  }, {
    color: "#c8eafe",
    opacity: 0.8,
    zoom: 17
  }, {
    color: "#c8eafe",
    opacity: 0.7,
    zoom: 18
  }, {
    color: "#c8eafe",
    opacity: 0.7,
    zoom: 19
  }, {
    color: "#c8eafe",
    opacity: 0.7,
    zoom: 20
  }, {
    color: "#c8eafe",
    opacity: 0.7,
    zoom: 21
  }]
}, {
  tags: "national_park",
  elements: "geometry",
  stylers: [{
    color: "#b4e2fd",
    opacity: 0.1,
    zoom: 0
  }, {
    color: "#b4e2fd",
    opacity: 0.1,
    zoom: 1
  }, {
    color: "#b4e2fd",
    opacity: 0.1,
    zoom: 2
  }, {
    color: "#b4e2fd",
    opacity: 0.1,
    zoom: 3
  }, {
    color: "#b4e2fd",
    opacity: 0.1,
    zoom: 4
  }, {
    color: "#b4e2fd",
    opacity: 0.1,
    zoom: 5
  }, {
    color: "#b4e2fd",
    opacity: 0.2,
    zoom: 6
  }, {
    color: "#b4e2fd",
    opacity: 0.3,
    zoom: 7
  }, {
    color: "#b4e2fd",
    opacity: 0.4,
    zoom: 8
  }, {
    color: "#b4e2fd",
    opacity: 0.6,
    zoom: 9
  }, {
    color: "#b4e2fd",
    opacity: 0.8,
    zoom: 10
  }, {
    color: "#b4e2fd",
    opacity: 1,
    zoom: 11
  }, {
    color: "#b4e2fd",
    opacity: 1,
    zoom: 12
  }, {
    color: "#b4e2fd",
    opacity: 1,
    zoom: 13
  }, {
    color: "#bee6fd",
    opacity: 1,
    zoom: 14
  }, {
    color: "#c8eafe",
    opacity: 1,
    zoom: 15
  }, {
    color: "#c8eafe",
    opacity: 0.7,
    zoom: 16
  }, {
    color: "#c8eafe",
    opacity: 0.7,
    zoom: 17
  }, {
    color: "#c8eafe",
    opacity: 0.7,
    zoom: 18
  }, {
    color: "#c8eafe",
    opacity: 0.7,
    zoom: 19
  }, {
    color: "#c8eafe",
    opacity: 0.7,
    zoom: 20
  }, {
    color: "#c8eafe",
    opacity: 0.7,
    zoom: 21
  }]
}, {
  tags: "cemetery",
  elements: "geometry",
  stylers: [{
    color: "#b4e2fd",
    zoom: 0
  }, {
    color: "#b4e2fd",
    zoom: 1
  }, {
    color: "#b4e2fd",
    zoom: 2
  }, {
    color: "#b4e2fd",
    zoom: 3
  }, {
    color: "#b4e2fd",
    zoom: 4
  }, {
    color: "#b4e2fd",
    zoom: 5
  }, {
    color: "#b4e2fd",
    zoom: 6
  }, {
    color: "#b4e2fd",
    zoom: 7
  }, {
    color: "#b4e2fd",
    zoom: 8
  }, {
    color: "#b4e2fd",
    zoom: 9
  }, {
    color: "#b4e2fd",
    zoom: 10
  }, {
    color: "#b4e2fd",
    zoom: 11
  }, {
    color: "#b4e2fd",
    zoom: 12
  }, {
    color: "#b4e2fd",
    zoom: 13
  }, {
    color: "#bee6fd",
    zoom: 14
  }, {
    color: "#c8eafe",
    zoom: 15
  }, {
    color: "#c8eafe",
    zoom: 16
  }, {
    color: "#c8eafe",
    zoom: 17
  }, {
    color: "#c8eafe",
    zoom: 18
  }, {
    color: "#c8eafe",
    zoom: 19
  }, {
    color: "#c8eafe",
    zoom: 20
  }, {
    color: "#c8eafe",
    zoom: 21
  }]
}, {
  tags: "sports_ground",
  elements: "geometry",
  stylers: [{
    color: "#9cd9fc",
    opacity: 0,
    zoom: 0
  }, {
    color: "#9cd9fc",
    opacity: 0,
    zoom: 1
  }, {
    color: "#9cd9fc",
    opacity: 0,
    zoom: 2
  }, {
    color: "#9cd9fc",
    opacity: 0,
    zoom: 3
  }, {
    color: "#9cd9fc",
    opacity: 0,
    zoom: 4
  }, {
    color: "#9cd9fc",
    opacity: 0,
    zoom: 5
  }, {
    color: "#9cd9fc",
    opacity: 0,
    zoom: 6
  }, {
    color: "#9cd9fc",
    opacity: 0,
    zoom: 7
  }, {
    color: "#9cd9fc",
    opacity: 0,
    zoom: 8
  }, {
    color: "#9cd9fc",
    opacity: 0,
    zoom: 9
  }, {
    color: "#9cd9fc",
    opacity: 0,
    zoom: 10
  }, {
    color: "#9cd9fc",
    opacity: 0,
    zoom: 11
  }, {
    color: "#9cd9fc",
    opacity: 0,
    zoom: 12
  }, {
    color: "#9cd9fc",
    opacity: 0,
    zoom: 13
  }, {
    color: "#a6dcfc",
    opacity: 0,
    zoom: 14
  }, {
    color: "#b0e0fd",
    opacity: 0.5,
    zoom: 15
  }, {
    color: "#b2e1fd",
    opacity: 1,
    zoom: 16
  }, {
    color: "#b3e1fd",
    opacity: 1,
    zoom: 17
  }, {
    color: "#b5e2fd",
    opacity: 1,
    zoom: 18
  }, {
    color: "#b7e3fd",
    opacity: 1,
    zoom: 19
  }, {
    color: "#b8e3fd",
    opacity: 1,
    zoom: 20
  }, {
    color: "#bae4fd",
    opacity: 1,
    zoom: 21
  }]
}, {
  tags: "terrain",
  elements: "geometry",
  stylers: [{
    hue: "#d7effe"
  }, {
    opacity: 0.3,
    zoom: 0
  }, {
    opacity: 0.3,
    zoom: 1
  }, {
    opacity: 0.3,
    zoom: 2
  }, {
    opacity: 0.3,
    zoom: 3
  }, {
    opacity: 0.3,
    zoom: 4
  }, {
    opacity: 0.35,
    zoom: 5
  }, {
    opacity: 0.4,
    zoom: 6
  }, {
    opacity: 0.6,
    zoom: 7
  }, {
    opacity: 0.8,
    zoom: 8
  }, {
    opacity: 0.9,
    zoom: 9
  }, {
    opacity: 1,
    zoom: 10
  }, {
    opacity: 1,
    zoom: 11
  }, {
    opacity: 1,
    zoom: 12
  }, {
    opacity: 1,
    zoom: 13
  }, {
    opacity: 1,
    zoom: 14
  }, {
    opacity: 1,
    zoom: 15
  }, {
    opacity: 1,
    zoom: 16
  }, {
    opacity: 1,
    zoom: 17
  }, {
    opacity: 1,
    zoom: 18
  }, {
    opacity: 1,
    zoom: 19
  }, {
    opacity: 1,
    zoom: 20
  }, {
    opacity: 1,
    zoom: 21
  }]
}, {
  tags: "geographic_line",
  elements: "geometry",
  stylers: [{
    color: "#10a0f9"
  }]
}, {
  tags: "land",
  elements: "geometry",
  stylers: [{
    color: "#d8effd",
    zoom: 0
  }, {
    color: "#d8effd",
    zoom: 1
  }, {
    color: "#d8effd",
    zoom: 2
  }, {
    color: "#d8effd",
    zoom: 3
  }, {
    color: "#d8effd",
    zoom: 4
  }, {
    color: "#ddf1fd",
    zoom: 5
  }, {
    color: "#e2f3fd",
    zoom: 6
  }, {
    color: "#e7f5fe",
    zoom: 7
  }, {
    color: "#ecf7fe",
    zoom: 8
  }, {
    color: "#ecf7fe",
    zoom: 9
  }, {
    color: "#ecf7fe",
    zoom: 10
  }, {
    color: "#ecf7fe",
    zoom: 11
  }, {
    color: "#ecf7fe",
    zoom: 12
  }, {
    color: "#ecf7fe",
    zoom: 13
  }, {
    color: "#f0f9fe",
    zoom: 14
  }, {
    color: "#f5fbfe",
    zoom: 15
  }, {
    color: "#f6fbfe",
    zoom: 16
  }, {
    color: "#f7fcfe",
    zoom: 17
  }, {
    color: "#f7fcfe",
    zoom: 18
  }, {
    color: "#f8fcff",
    zoom: 19
  }, {
    color: "#f9fdff",
    zoom: 20
  }, {
    color: "#fafdff",
    zoom: 21
  }]
}, {
  tags: "residential",
  elements: "geometry",
  stylers: [{
    color: "#d7effe",
    opacity: 0.5,
    zoom: 0
  }, {
    color: "#d7effe",
    opacity: 0.5,
    zoom: 1
  }, {
    color: "#d7effe",
    opacity: 0.5,
    zoom: 2
  }, {
    color: "#d7effe",
    opacity: 0.5,
    zoom: 3
  }, {
    color: "#d7effe",
    opacity: 0.5,
    zoom: 4
  }, {
    color: "#d7effe",
    opacity: 0.5,
    zoom: 5
  }, {
    color: "#d7effe",
    opacity: 0.5,
    zoom: 6
  }, {
    color: "#d7effe",
    opacity: 0.5,
    zoom: 7
  }, {
    color: "#d7effe",
    opacity: 0.5,
    zoom: 8
  }, {
    color: "#d7effe",
    opacity: 0.5,
    zoom: 9
  }, {
    color: "#d7effe",
    opacity: 0.5,
    zoom: 10
  }, {
    color: "#d7effe",
    opacity: 0.5,
    zoom: 11
  }, {
    color: "#d7effe",
    opacity: 0.5,
    zoom: 12
  }, {
    color: "#d7effe",
    opacity: 1,
    zoom: 13
  }, {
    color: "#e1f3fe",
    opacity: 1,
    zoom: 14
  }, {
    color: "#ebf7fe",
    opacity: 1,
    zoom: 15
  }, {
    color: "#edf8fe",
    opacity: 1,
    zoom: 16
  }, {
    color: "#eef8fe",
    opacity: 1,
    zoom: 17
  }, {
    color: "#f0f9fe",
    opacity: 1,
    zoom: 18
  }, {
    color: "#f2faff",
    opacity: 1,
    zoom: 19
  }, {
    color: "#f3faff",
    opacity: 1,
    zoom: 20
  }, {
    color: "#f5fbff",
    opacity: 1,
    zoom: 21
  }]
}, {
  tags: "locality",
  elements: "geometry",
  stylers: [{
    color: "#d7effe",
    zoom: 0
  }, {
    color: "#d7effe",
    zoom: 1
  }, {
    color: "#d7effe",
    zoom: 2
  }, {
    color: "#d7effe",
    zoom: 3
  }, {
    color: "#d7effe",
    zoom: 4
  }, {
    color: "#d7effe",
    zoom: 5
  }, {
    color: "#d7effe",
    zoom: 6
  }, {
    color: "#d7effe",
    zoom: 7
  }, {
    color: "#d7effe",
    zoom: 8
  }, {
    color: "#d7effe",
    zoom: 9
  }, {
    color: "#d7effe",
    zoom: 10
  }, {
    color: "#d7effe",
    zoom: 11
  }, {
    color: "#d7effe",
    zoom: 12
  }, {
    color: "#d7effe",
    zoom: 13
  }, {
    color: "#e1f3fe",
    zoom: 14
  }, {
    color: "#ebf7fe",
    zoom: 15
  }, {
    color: "#edf8fe",
    zoom: 16
  }, {
    color: "#eef8fe",
    zoom: 17
  }, {
    color: "#f0f9fe",
    zoom: 18
  }, {
    color: "#f2faff",
    zoom: 19
  }, {
    color: "#f3faff",
    zoom: 20
  }, {
    color: "#f5fbff",
    zoom: 21
  }]
}, {
  tags: {
    any: "structure",
    none: ["building", "fence"]
  },
  elements: "geometry",
  stylers: [{
    opacity: 0.9
  }, {
    color: "#d7effe",
    zoom: 0
  }, {
    color: "#d7effe",
    zoom: 1
  }, {
    color: "#d7effe",
    zoom: 2
  }, {
    color: "#d7effe",
    zoom: 3
  }, {
    color: "#d7effe",
    zoom: 4
  }, {
    color: "#d7effe",
    zoom: 5
  }, {
    color: "#d7effe",
    zoom: 6
  }, {
    color: "#d7effe",
    zoom: 7
  }, {
    color: "#d7effe",
    zoom: 8
  }, {
    color: "#d7effe",
    zoom: 9
  }, {
    color: "#d7effe",
    zoom: 10
  }, {
    color: "#d7effe",
    zoom: 11
  }, {
    color: "#d7effe",
    zoom: 12
  }, {
    color: "#d7effe",
    zoom: 13
  }, {
    color: "#e1f3fe",
    zoom: 14
  }, {
    color: "#ebf7fe",
    zoom: 15
  }, {
    color: "#edf8fe",
    zoom: 16
  }, {
    color: "#eef8fe",
    zoom: 17
  }, {
    color: "#f0f9fe",
    zoom: 18
  }, {
    color: "#f2faff",
    zoom: 19
  }, {
    color: "#f3faff",
    zoom: 20
  }, {
    color: "#f5fbff",
    zoom: 21
  }]
}, {
  tags: "building",
  elements: "geometry.fill",
  stylers: [{
    color: "#bfe6fd"
  }, {
    opacity: 0.7,
    zoom: 0
  }, {
    opacity: 0.7,
    zoom: 1
  }, {
    opacity: 0.7,
    zoom: 2
  }, {
    opacity: 0.7,
    zoom: 3
  }, {
    opacity: 0.7,
    zoom: 4
  }, {
    opacity: 0.7,
    zoom: 5
  }, {
    opacity: 0.7,
    zoom: 6
  }, {
    opacity: 0.7,
    zoom: 7
  }, {
    opacity: 0.7,
    zoom: 8
  }, {
    opacity: 0.7,
    zoom: 9
  }, {
    opacity: 0.7,
    zoom: 10
  }, {
    opacity: 0.7,
    zoom: 11
  }, {
    opacity: 0.7,
    zoom: 12
  }, {
    opacity: 0.7,
    zoom: 13
  }, {
    opacity: 0.7,
    zoom: 14
  }, {
    opacity: 0.7,
    zoom: 15
  }, {
    opacity: 0.9,
    zoom: 16
  }, {
    opacity: 0.6,
    zoom: 17
  }, {
    opacity: 0.6,
    zoom: 18
  }, {
    opacity: 0.6,
    zoom: 19
  }, {
    opacity: 0.6,
    zoom: 20
  }, {
    opacity: 0.6,
    zoom: 21
  }]
}, {
  tags: "building",
  elements: "geometry.outline",
  stylers: [{
    color: "#98d8fb"
  }, {
    opacity: 0.5,
    zoom: 0
  }, {
    opacity: 0.5,
    zoom: 1
  }, {
    opacity: 0.5,
    zoom: 2
  }, {
    opacity: 0.5,
    zoom: 3
  }, {
    opacity: 0.5,
    zoom: 4
  }, {
    opacity: 0.5,
    zoom: 5
  }, {
    opacity: 0.5,
    zoom: 6
  }, {
    opacity: 0.5,
    zoom: 7
  }, {
    opacity: 0.5,
    zoom: 8
  }, {
    opacity: 0.5,
    zoom: 9
  }, {
    opacity: 0.5,
    zoom: 10
  }, {
    opacity: 0.5,
    zoom: 11
  }, {
    opacity: 0.5,
    zoom: 12
  }, {
    opacity: 0.5,
    zoom: 13
  }, {
    opacity: 0.5,
    zoom: 14
  }, {
    opacity: 0.5,
    zoom: 15
  }, {
    opacity: 0.5,
    zoom: 16
  }, {
    opacity: 1,
    zoom: 17
  }, {
    opacity: 1,
    zoom: 18
  }, {
    opacity: 1,
    zoom: 19
  }, {
    opacity: 1,
    zoom: 20
  }, {
    opacity: 1,
    zoom: 21
  }]
}, {
  tags: {
    any: "urban_area",
    none: ["residential", "industrial", "cemetery", "park", "medical", "sports_ground", "beach", "construction_site"]
  },
  elements: "geometry",
  stylers: [{
    color: "#c4e7fd",
    opacity: 1,
    zoom: 0
  }, {
    color: "#c4e7fd",
    opacity: 1,
    zoom: 1
  }, {
    color: "#c4e7fd",
    opacity: 1,
    zoom: 2
  }, {
    color: "#c4e7fd",
    opacity: 1,
    zoom: 3
  }, {
    color: "#c4e7fd",
    opacity: 1,
    zoom: 4
  }, {
    color: "#c4e7fd",
    opacity: 1,
    zoom: 5
  }, {
    color: "#c4e7fd",
    opacity: 1,
    zoom: 6
  }, {
    color: "#c4e7fd",
    opacity: 1,
    zoom: 7
  }, {
    color: "#c4e7fd",
    opacity: 1,
    zoom: 8
  }, {
    color: "#c4e7fd",
    opacity: 1,
    zoom: 9
  }, {
    color: "#c4e7fd",
    opacity: 1,
    zoom: 10
  }, {
    color: "#c4e7fd",
    opacity: 1,
    zoom: 11
  }, {
    color: "#c4e7fd",
    opacity: 1,
    zoom: 12
  }, {
    color: "#c4e7fd",
    opacity: 1,
    zoom: 13
  }, {
    color: "#d0ecfd",
    opacity: 1,
    zoom: 14
  }, {
    color: "#dcf1fe",
    opacity: 1,
    zoom: 15
  }, {
    color: "#e8f6fe",
    opacity: 0.67,
    zoom: 16
  }, {
    color: "#f5fbff",
    opacity: 0.33,
    zoom: 17
  }, {
    color: "#f5fbff",
    opacity: 0,
    zoom: 18
  }, {
    color: "#f5fbff",
    opacity: 0,
    zoom: 19
  }, {
    color: "#f5fbff",
    opacity: 0,
    zoom: 20
  }, {
    color: "#f5fbff",
    opacity: 0,
    zoom: 21
  }]
}, {
  tags: "poi",
  elements: "label.icon",
  stylers: [{
    color: "#0071b3"
  }, {
    "secondary-color": "#ffffff"
  }, {
    "tertiary-color": "#ffffff"
  }]
}, {
  tags: "poi",
  elements: "label.text.fill",
  stylers: [{
    color: "#046095"
  }]
}, {
  tags: "poi",
  elements: "label.text.outline",
  stylers: [{
    color: "#ffffff"
  }, {
    opacity: 0.5
  }]
}, {
  tags: "outdoor",
  elements: "label.icon",
  stylers: [{
    color: "#0071b3"
  }, {
    "secondary-color": "#ffffff"
  }, {
    "tertiary-color": "#ffffff"
  }]
}, {
  tags: "outdoor",
  elements: "label.text.fill",
  stylers: [{
    color: "#046095"
  }]
}, {
  tags: "outdoor",
  elements: "label.text.outline",
  stylers: [{
    color: "#ffffff"
  }, {
    opacity: 0.5
  }]
}, {
  tags: "park",
  elements: "label.icon",
  stylers: [{
    color: "#0071b3"
  }, {
    "secondary-color": "#ffffff"
  }, {
    "tertiary-color": "#ffffff"
  }]
}, {
  tags: "park",
  elements: "label.text.fill",
  stylers: [{
    color: "#046095"
  }]
}, {
  tags: "park",
  elements: "label.text.outline",
  stylers: [{
    color: "#ffffff"
  }, {
    opacity: 0.5
  }]
}, {
  tags: "cemetery",
  elements: "label.icon",
  stylers: [{
    color: "#0071b3"
  }, {
    "secondary-color": "#ffffff"
  }, {
    "tertiary-color": "#ffffff"
  }]
}, {
  tags: "cemetery",
  elements: "label.text.fill",
  stylers: [{
    color: "#046095"
  }]
}, {
  tags: "cemetery",
  elements: "label.text.outline",
  stylers: [{
    color: "#ffffff"
  }, {
    opacity: 0.5
  }]
}, {
  tags: "beach",
  elements: "label.icon",
  stylers: [{
    color: "#0071b3"
  }, {
    "secondary-color": "#ffffff"
  }, {
    "tertiary-color": "#ffffff"
  }]
}, {
  tags: "beach",
  elements: "label.text.fill",
  stylers: [{
    color: "#046095"
  }]
}, {
  tags: "beach",
  elements: "label.text.outline",
  stylers: [{
    color: "#ffffff"
  }, {
    opacity: 0.5
  }]
}, {
  tags: "medical",
  elements: "label.icon",
  stylers: [{
    color: "#0071b3"
  }, {
    "secondary-color": "#ffffff"
  }, {
    "tertiary-color": "#ffffff"
  }]
}, {
  tags: "medical",
  elements: "label.text.fill",
  stylers: [{
    color: "#046095"
  }]
}, {
  tags: "medical",
  elements: "label.text.outline",
  stylers: [{
    color: "#ffffff"
  }, {
    opacity: 0.5
  }]
}, {
  tags: "shopping",
  elements: "label.icon",
  stylers: [{
    color: "#0071b3"
  }, {
    "secondary-color": "#ffffff"
  }, {
    "tertiary-color": "#ffffff"
  }]
}, {
  tags: "shopping",
  elements: "label.text.fill",
  stylers: [{
    color: "#046095"
  }]
}, {
  tags: "shopping",
  elements: "label.text.outline",
  stylers: [{
    color: "#ffffff"
  }, {
    opacity: 0.5
  }]
}, {
  tags: "commercial_services",
  elements: "label.icon",
  stylers: [{
    color: "#0071b3"
  }, {
    "secondary-color": "#ffffff"
  }, {
    "tertiary-color": "#ffffff"
  }]
}, {
  tags: "commercial_services",
  elements: "label.text.fill",
  stylers: [{
    color: "#046095"
  }]
}, {
  tags: "commercial_services",
  elements: "label.text.outline",
  stylers: [{
    color: "#ffffff"
  }, {
    opacity: 0.5
  }]
}, {
  tags: "food_and_drink",
  elements: "label.icon",
  stylers: [{
    color: "#0071b3"
  }, {
    "secondary-color": "#ffffff"
  }, {
    "tertiary-color": "#ffffff"
  }]
}, {
  tags: "food_and_drink",
  elements: "label.text.fill",
  stylers: [{
    color: "#046095"
  }]
}, {
  tags: "food_and_drink",
  elements: "label.text.outline",
  stylers: [{
    color: "#ffffff"
  }, {
    opacity: 0.5
  }]
}, {
  tags: "road",
  elements: "label.icon",
  types: "point",
  stylers: [{
    color: "#0071b3"
  }, {
    "secondary-color": "#ffffff"
  }, {
    "tertiary-color": "#ffffff"
  }]
}, {
  tags: "road",
  elements: "label.text.fill",
  types: "point",
  stylers: [{
    color: "#ffffff"
  }]
}, {
  tags: "entrance",
  elements: "label.icon",
  stylers: [{
    color: "#0071b3"
  }, {
    "secondary-color": "#ffffff"
  }, {
    hue: "#0071b3"
  }]
}, {
  tags: "locality",
  elements: "label.icon",
  stylers: [{
    color: "#0071b3"
  }, {
    "secondary-color": "#ffffff"
  }]
}, {
  tags: "country",
  elements: "label.text.fill",
  stylers: [{
    opacity: 0.8
  }, {
    color: "#0690e0"
  }]
}, {
  tags: "country",
  elements: "label.text.outline",
  stylers: [{
    color: "#ffffff"
  }, {
    opacity: 0.5
  }]
}, {
  tags: "region",
  elements: "label.text.fill",
  stylers: [{
    color: "#0690e0"
  }, {
    opacity: 0.8
  }]
}, {
  tags: "region",
  elements: "label.text.outline",
  stylers: [{
    color: "#ffffff"
  }, {
    opacity: 0.5
  }]
}, {
  tags: "district",
  elements: "label.text.fill",
  stylers: [{
    color: "#0690e0"
  }, {
    opacity: 0.8
  }]
}, {
  tags: "district",
  elements: "label.text.outline",
  stylers: [{
    color: "#ffffff"
  }, {
    opacity: 0.5
  }]
}, {
  tags: {
    any: "admin",
    none: ["country", "region", "locality", "district", "address"]
  },
  elements: "label.text.fill",
  stylers: [{
    color: "#0690e0"
  }]
}, {
  tags: {
    any: "admin",
    none: ["country", "region", "locality", "district", "address"]
  },
  elements: "label.text.outline",
  stylers: [{
    color: "#ffffff"
  }, {
    opacity: 0.5
  }]
}, {
  tags: "locality",
  elements: "label.text.fill",
  stylers: [{
    color: "#046095",
    zoom: 0
  }, {
    color: "#046095",
    zoom: 1
  }, {
    color: "#046095",
    zoom: 2
  }, {
    color: "#046095",
    zoom: 3
  }, {
    color: "#046095",
    zoom: 4
  }, {
    color: "#045d91",
    zoom: 5
  }, {
    color: "#045b8d",
    zoom: 6
  }, {
    color: "#045889",
    zoom: 7
  }, {
    color: "#035584",
    zoom: 8
  }, {
    color: "#035380",
    zoom: 9
  }, {
    color: "#03507c",
    zoom: 10
  }, {
    color: "#03507c",
    zoom: 11
  }, {
    color: "#03507c",
    zoom: 12
  }, {
    color: "#03507c",
    zoom: 13
  }, {
    color: "#03507c",
    zoom: 14
  }, {
    color: "#03507c",
    zoom: 15
  }, {
    color: "#03507c",
    zoom: 16
  }, {
    color: "#03507c",
    zoom: 17
  }, {
    color: "#03507c",
    zoom: 18
  }, {
    color: "#03507c",
    zoom: 19
  }, {
    color: "#03507c",
    zoom: 20
  }, {
    color: "#03507c",
    zoom: 21
  }]
}, {
  tags: "locality",
  elements: "label.text.outline",
  stylers: [{
    color: "#ffffff"
  }, {
    opacity: 0.5
  }]
}, {
  tags: "road",
  elements: "label.text.fill",
  types: "polyline",
  stylers: [{
    color: "#0570ad"
  }]
}, {
  tags: "road",
  elements: "label.text.outline",
  types: "polyline",
  stylers: [{
    color: "#ffffff"
  }, {
    opacity: 0.5
  }]
}, {
  tags: "road",
  elements: "geometry.fill.pattern",
  types: "polyline",
  stylers: [{
    scale: 1
  }, {
    color: "#20a9f8"
  }]
}, {
  tags: "road",
  elements: "label.text.fill",
  types: "point",
  stylers: [{
    color: "#ffffff"
  }]
}, {
  tags: "structure",
  elements: "label.text.fill",
  stylers: [{
    color: "#057dc7"
  }, {
    opacity: 0.5
  }]
}, {
  tags: "structure",
  elements: "label.text.outline",
  stylers: [{
    color: "#ffffff"
  }, {
    opacity: 0.5
  }]
}, {
  tags: "address",
  elements: "label.text.fill",
  stylers: [{
    color: "#057dc7"
  }, {
    opacity: 0.9,
    zoom: 0
  }, {
    opacity: 0.9,
    zoom: 1
  }, {
    opacity: 0.9,
    zoom: 2
  }, {
    opacity: 0.9,
    zoom: 3
  }, {
    opacity: 0.9,
    zoom: 4
  }, {
    opacity: 0.9,
    zoom: 5
  }, {
    opacity: 0.9,
    zoom: 6
  }, {
    opacity: 0.9,
    zoom: 7
  }, {
    opacity: 0.9,
    zoom: 8
  }, {
    opacity: 0.9,
    zoom: 9
  }, {
    opacity: 0.9,
    zoom: 10
  }, {
    opacity: 0.9,
    zoom: 11
  }, {
    opacity: 0.9,
    zoom: 12
  }, {
    opacity: 0.9,
    zoom: 13
  }, {
    opacity: 0.9,
    zoom: 14
  }, {
    opacity: 0.9,
    zoom: 15
  }, {
    opacity: 0.9,
    zoom: 16
  }, {
    opacity: 1,
    zoom: 17
  }, {
    opacity: 1,
    zoom: 18
  }, {
    opacity: 1,
    zoom: 19
  }, {
    opacity: 1,
    zoom: 20
  }, {
    opacity: 1,
    zoom: 21
  }]
}, {
  tags: "address",
  elements: "label.text.outline",
  stylers: [{
    color: "#ffffff"
  }, {
    opacity: 0.5
  }]
}, {
  tags: "landscape",
  elements: "label.text.fill",
  stylers: [{
    color: "#0690e0",
    opacity: 1,
    zoom: 0
  }, {
    color: "#0690e0",
    opacity: 1,
    zoom: 1
  }, {
    color: "#0690e0",
    opacity: 1,
    zoom: 2
  }, {
    color: "#0690e0",
    opacity: 1,
    zoom: 3
  }, {
    color: "#057dc7",
    opacity: 0.5,
    zoom: 4
  }, {
    color: "#057dc7",
    opacity: 0.5,
    zoom: 5
  }, {
    color: "#057dc7",
    opacity: 0.5,
    zoom: 6
  }, {
    color: "#057dc7",
    opacity: 0.5,
    zoom: 7
  }, {
    color: "#057dc7",
    opacity: 0.5,
    zoom: 8
  }, {
    color: "#057dc7",
    opacity: 0.5,
    zoom: 9
  }, {
    color: "#057dc7",
    opacity: 0.5,
    zoom: 10
  }, {
    color: "#057dc7",
    opacity: 0.5,
    zoom: 11
  }, {
    color: "#057dc7",
    opacity: 0.5,
    zoom: 12
  }, {
    color: "#057dc7",
    opacity: 0.5,
    zoom: 13
  }, {
    color: "#057dc7",
    opacity: 0.5,
    zoom: 14
  }, {
    color: "#057dc7",
    opacity: 0.5,
    zoom: 15
  }, {
    color: "#057dc7",
    opacity: 0.5,
    zoom: 16
  }, {
    color: "#057dc7",
    opacity: 0.5,
    zoom: 17
  }, {
    color: "#057dc7",
    opacity: 0.5,
    zoom: 18
  }, {
    color: "#057dc7",
    opacity: 0.5,
    zoom: 19
  }, {
    color: "#057dc7",
    opacity: 0.5,
    zoom: 20
  }, {
    color: "#057dc7",
    opacity: 0.5,
    zoom: 21
  }]
}, {
  tags: "landscape",
  elements: "label.text.outline",
  stylers: [{
    color: "#ffffff"
  }, {
    opacity: 0.5,
    zoom: 0
  }, {
    opacity: 0.5,
    zoom: 1
  }, {
    opacity: 0.5,
    zoom: 2
  }, {
    opacity: 0.5,
    zoom: 3
  }, {
    opacity: 0,
    zoom: 4
  }, {
    opacity: 0,
    zoom: 5
  }, {
    opacity: 0,
    zoom: 6
  }, {
    opacity: 0,
    zoom: 7
  }, {
    opacity: 0,
    zoom: 8
  }, {
    opacity: 0,
    zoom: 9
  }, {
    opacity: 0,
    zoom: 10
  }, {
    opacity: 0,
    zoom: 11
  }, {
    opacity: 0,
    zoom: 12
  }, {
    opacity: 0,
    zoom: 13
  }, {
    opacity: 0,
    zoom: 14
  }, {
    opacity: 0,
    zoom: 15
  }, {
    opacity: 0,
    zoom: 16
  }, {
    opacity: 0,
    zoom: 17
  }, {
    opacity: 0,
    zoom: 18
  }, {
    opacity: 0,
    zoom: 19
  }, {
    opacity: 0,
    zoom: 20
  }, {
    opacity: 0,
    zoom: 21
  }]
}, {
  tags: "water",
  elements: "label.text.fill",
  stylers: [{
    color: "#0696ea"
  }, {
    opacity: 0.8
  }]
}, {
  tags: "water",
  elements: "label.text.outline",
  types: "polyline",
  stylers: [{
    color: "#ffffff"
  }, {
    opacity: 0.2
  }]
}, {
  tags: {
    any: "road_1",
    none: "is_tunnel"
  },
  elements: "geometry.fill",
  stylers: [{
    color: "#ffffff"
  }, {
    scale: 0,
    zoom: 0
  }, {
    scale: 0,
    zoom: 1
  }, {
    scale: 0,
    zoom: 2
  }, {
    scale: 0,
    zoom: 3
  }, {
    scale: 0,
    zoom: 4
  }, {
    scale: 0,
    zoom: 5
  }, {
    scale: 2.97,
    zoom: 6
  }, {
    scale: 3.19,
    zoom: 7
  }, {
    scale: 3.53,
    zoom: 8
  }, {
    scale: 4,
    zoom: 9
  }, {
    scale: 3.61,
    zoom: 10
  }, {
    scale: 3.06,
    zoom: 11
  }, {
    scale: 2.64,
    zoom: 12
  }, {
    scale: 2.27,
    zoom: 13
  }, {
    scale: 2.03,
    zoom: 14
  }, {
    scale: 1.9,
    zoom: 15
  }, {
    scale: 1.86,
    zoom: 16
  }, {
    scale: 1.48,
    zoom: 17
  }, {
    scale: 1.21,
    zoom: 18
  }, {
    scale: 1.04,
    zoom: 19
  }, {
    scale: 0.94,
    zoom: 20
  }, {
    scale: 0.9,
    zoom: 21
  }]
}, {
  tags: {
    any: "road_1"
  },
  elements: "geometry.outline",
  stylers: [{
    color: "#00000000",
    scale: 1.4,
    zoom: 0
  }, {
    color: "#00000000",
    scale: 1.4,
    zoom: 1
  }, {
    color: "#00000000",
    scale: 1.4,
    zoom: 2
  }, {
    color: "#00000000",
    scale: 1.4,
    zoom: 3
  }, {
    color: "#00000000",
    scale: 1.4,
    zoom: 4
  }, {
    color: "#00000000",
    scale: 1.4,
    zoom: 5
  }, {
    color: "#00000000",
    scale: 3.05,
    zoom: 6
  }, {
    color: "#00000000",
    scale: 3.05,
    zoom: 7
  }, {
    color: "#cdebfe",
    scale: 3.15,
    zoom: 8
  }, {
    color: "#d7effe",
    scale: 3.37,
    zoom: 9
  }, {
    color: "#d7effe",
    scale: 3.36,
    zoom: 10
  }, {
    color: "#d7effe",
    scale: 3.17,
    zoom: 11
  }, {
    color: "#d7effe",
    scale: 3,
    zoom: 12
  }, {
    color: "#d7effe",
    scale: 2.8,
    zoom: 13
  }, {
    color: "#e1f3fe",
    scale: 2.66,
    zoom: 14
  }, {
    color: "#e1f3fe",
    scale: 2.61,
    zoom: 15
  }, {
    color: "#e5f4fe",
    scale: 2.64,
    zoom: 16
  }, {
    color: "#e8f6fe",
    scale: 2.14,
    zoom: 17
  }, {
    color: "#ecf7ff",
    scale: 1.79,
    zoom: 18
  }, {
    color: "#f0f9ff",
    scale: 1.55,
    zoom: 19
  }, {
    color: "#f2faff",
    scale: 1.41,
    zoom: 20
  }, {
    color: "#f5fbff",
    scale: 1.35,
    zoom: 21
  }]
}, {
  tags: {
    any: "road_2",
    none: "is_tunnel"
  },
  elements: "geometry.fill",
  stylers: [{
    color: "#ffffff"
  }, {
    scale: 0,
    zoom: 0
  }, {
    scale: 0,
    zoom: 1
  }, {
    scale: 0,
    zoom: 2
  }, {
    scale: 0,
    zoom: 3
  }, {
    scale: 0,
    zoom: 4
  }, {
    scale: 0,
    zoom: 5
  }, {
    scale: 2.97,
    zoom: 6
  }, {
    scale: 3.19,
    zoom: 7
  }, {
    scale: 3.53,
    zoom: 8
  }, {
    scale: 4,
    zoom: 9
  }, {
    scale: 3.61,
    zoom: 10
  }, {
    scale: 3.06,
    zoom: 11
  }, {
    scale: 2.64,
    zoom: 12
  }, {
    scale: 2.27,
    zoom: 13
  }, {
    scale: 2.03,
    zoom: 14
  }, {
    scale: 1.9,
    zoom: 15
  }, {
    scale: 1.86,
    zoom: 16
  }, {
    scale: 1.48,
    zoom: 17
  }, {
    scale: 1.21,
    zoom: 18
  }, {
    scale: 1.04,
    zoom: 19
  }, {
    scale: 0.94,
    zoom: 20
  }, {
    scale: 0.9,
    zoom: 21
  }]
}, {
  tags: {
    any: "road_2"
  },
  elements: "geometry.outline",
  stylers: [{
    color: "#00000000",
    scale: 1.4,
    zoom: 0
  }, {
    color: "#00000000",
    scale: 1.4,
    zoom: 1
  }, {
    color: "#00000000",
    scale: 1.4,
    zoom: 2
  }, {
    color: "#00000000",
    scale: 1.4,
    zoom: 3
  }, {
    color: "#00000000",
    scale: 1.4,
    zoom: 4
  }, {
    color: "#00000000",
    scale: 1.4,
    zoom: 5
  }, {
    color: "#00000000",
    scale: 3.05,
    zoom: 6
  }, {
    color: "#00000000",
    scale: 3.05,
    zoom: 7
  }, {
    color: "#cdebfe",
    scale: 3.15,
    zoom: 8
  }, {
    color: "#d7effe",
    scale: 3.37,
    zoom: 9
  }, {
    color: "#d7effe",
    scale: 3.36,
    zoom: 10
  }, {
    color: "#d7effe",
    scale: 3.17,
    zoom: 11
  }, {
    color: "#d7effe",
    scale: 3,
    zoom: 12
  }, {
    color: "#d7effe",
    scale: 2.8,
    zoom: 13
  }, {
    color: "#e1f3fe",
    scale: 2.66,
    zoom: 14
  }, {
    color: "#e1f3fe",
    scale: 2.61,
    zoom: 15
  }, {
    color: "#e5f4fe",
    scale: 2.64,
    zoom: 16
  }, {
    color: "#e8f6fe",
    scale: 2.14,
    zoom: 17
  }, {
    color: "#ecf7ff",
    scale: 1.79,
    zoom: 18
  }, {
    color: "#f0f9ff",
    scale: 1.55,
    zoom: 19
  }, {
    color: "#f2faff",
    scale: 1.41,
    zoom: 20
  }, {
    color: "#f5fbff",
    scale: 1.35,
    zoom: 21
  }]
}, {
  tags: {
    any: "road_3",
    none: "is_tunnel"
  },
  elements: "geometry.fill",
  stylers: [{
    color: "#ffffff"
  }, {
    scale: 0,
    zoom: 0
  }, {
    scale: 0,
    zoom: 1
  }, {
    scale: 0,
    zoom: 2
  }, {
    scale: 0,
    zoom: 3
  }, {
    scale: 0,
    zoom: 4
  }, {
    scale: 0,
    zoom: 5
  }, {
    scale: 0,
    zoom: 6
  }, {
    scale: 0,
    zoom: 7
  }, {
    scale: 0,
    zoom: 8
  }, {
    scale: 2.51,
    zoom: 9
  }, {
    scale: 2.62,
    zoom: 10
  }, {
    scale: 1.68,
    zoom: 11
  }, {
    scale: 1.67,
    zoom: 12
  }, {
    scale: 1.38,
    zoom: 13
  }, {
    scale: 1.19,
    zoom: 14
  }, {
    scale: 1.08,
    zoom: 15
  }, {
    scale: 1.04,
    zoom: 16
  }, {
    scale: 0.91,
    zoom: 17
  }, {
    scale: 0.84,
    zoom: 18
  }, {
    scale: 0.82,
    zoom: 19
  }, {
    scale: 0.84,
    zoom: 20
  }, {
    scale: 0.9,
    zoom: 21
  }]
}, {
  tags: {
    any: "road_3"
  },
  elements: "geometry.outline",
  stylers: [{
    color: "#ffffff",
    scale: 1.6,
    zoom: 0
  }, {
    color: "#ffffff",
    scale: 1.6,
    zoom: 1
  }, {
    color: "#ffffff",
    scale: 1.6,
    zoom: 2
  }, {
    color: "#ffffff",
    scale: 1.6,
    zoom: 3
  }, {
    color: "#ffffff",
    scale: 1.6,
    zoom: 4
  }, {
    color: "#ffffff",
    scale: 1.6,
    zoom: 5
  }, {
    color: "#ffffff",
    scale: 1.6,
    zoom: 6
  }, {
    color: "#ffffff",
    scale: 1.6,
    zoom: 7
  }, {
    color: "#ffffff",
    scale: 1.29,
    zoom: 8
  }, {
    color: "#d7effe",
    scale: 4.21,
    zoom: 9
  }, {
    color: "#d7effe",
    scale: 2.74,
    zoom: 10
  }, {
    color: "#d7effe",
    scale: 2.04,
    zoom: 11
  }, {
    color: "#d7effe",
    scale: 2.13,
    zoom: 12
  }, {
    color: "#d7effe",
    scale: 1.88,
    zoom: 13
  }, {
    color: "#e1f3fe",
    scale: 1.7,
    zoom: 14
  }, {
    color: "#e1f3fe",
    scale: 1.59,
    zoom: 15
  }, {
    color: "#e5f4fe",
    scale: 1.55,
    zoom: 16
  }, {
    color: "#e8f6fe",
    scale: 1.37,
    zoom: 17
  }, {
    color: "#ecf7ff",
    scale: 1.27,
    zoom: 18
  }, {
    color: "#f0f9ff",
    scale: 1.23,
    zoom: 19
  }, {
    color: "#f2faff",
    scale: 1.26,
    zoom: 20
  }, {
    color: "#f5fbff",
    scale: 1.35,
    zoom: 21
  }]
}, {
  tags: {
    any: "road_4",
    none: "is_tunnel"
  },
  elements: "geometry.fill",
  stylers: [{
    color: "#ffffff"
  }, {
    scale: 0,
    zoom: 0
  }, {
    scale: 0,
    zoom: 1
  }, {
    scale: 0,
    zoom: 2
  }, {
    scale: 0,
    zoom: 3
  }, {
    scale: 0,
    zoom: 4
  }, {
    scale: 0,
    zoom: 5
  }, {
    scale: 0,
    zoom: 6
  }, {
    scale: 0,
    zoom: 7
  }, {
    scale: 0,
    zoom: 8
  }, {
    scale: 0,
    zoom: 9
  }, {
    scale: 1.69,
    zoom: 10
  }, {
    scale: 1.26,
    zoom: 11
  }, {
    scale: 1.41,
    zoom: 12
  }, {
    scale: 1.19,
    zoom: 13
  }, {
    scale: 1.04,
    zoom: 14
  }, {
    scale: 0.97,
    zoom: 15
  }, {
    scale: 1.15,
    zoom: 16
  }, {
    scale: 0.99,
    zoom: 17
  }, {
    scale: 0.89,
    zoom: 18
  }, {
    scale: 0.85,
    zoom: 19
  }, {
    scale: 0.85,
    zoom: 20
  }, {
    scale: 0.9,
    zoom: 21
  }]
}, {
  tags: {
    any: "road_4"
  },
  elements: "geometry.outline",
  stylers: [{
    color: "#ffffff",
    scale: 1.4,
    zoom: 0
  }, {
    color: "#ffffff",
    scale: 1.4,
    zoom: 1
  }, {
    color: "#ffffff",
    scale: 1.4,
    zoom: 2
  }, {
    color: "#ffffff",
    scale: 1.4,
    zoom: 3
  }, {
    color: "#ffffff",
    scale: 1.4,
    zoom: 4
  }, {
    color: "#ffffff",
    scale: 1.4,
    zoom: 5
  }, {
    color: "#ffffff",
    scale: 1.4,
    zoom: 6
  }, {
    color: "#ffffff",
    scale: 1.4,
    zoom: 7
  }, {
    color: "#ffffff",
    scale: 1.4,
    zoom: 8
  }, {
    color: "#ffffff",
    scale: 1.12,
    zoom: 9
  }, {
    color: "#d7effe",
    scale: 1.9,
    zoom: 10
  }, {
    color: "#d7effe",
    scale: 1.62,
    zoom: 11
  }, {
    color: "#d7effe",
    scale: 1.83,
    zoom: 12
  }, {
    color: "#d7effe",
    scale: 1.64,
    zoom: 13
  }, {
    color: "#e1f3fe",
    scale: 1.51,
    zoom: 14
  }, {
    color: "#e1f3fe",
    scale: 1.44,
    zoom: 15
  }, {
    color: "#e5f4fe",
    scale: 1.69,
    zoom: 16
  }, {
    color: "#e8f6fe",
    scale: 1.47,
    zoom: 17
  }, {
    color: "#ecf7ff",
    scale: 1.34,
    zoom: 18
  }, {
    color: "#f0f9ff",
    scale: 1.28,
    zoom: 19
  }, {
    color: "#f2faff",
    scale: 1.28,
    zoom: 20
  }, {
    color: "#f5fbff",
    scale: 1.34,
    zoom: 21
  }]
}, {
  tags: {
    any: "road_5",
    none: "is_tunnel"
  },
  elements: "geometry.fill",
  stylers: [{
    color: "#ffffff"
  }, {
    scale: 0,
    zoom: 0
  }, {
    scale: 0,
    zoom: 1
  }, {
    scale: 0,
    zoom: 2
  }, {
    scale: 0,
    zoom: 3
  }, {
    scale: 0,
    zoom: 4
  }, {
    scale: 0,
    zoom: 5
  }, {
    scale: 0,
    zoom: 6
  }, {
    scale: 0,
    zoom: 7
  }, {
    scale: 0,
    zoom: 8
  }, {
    scale: 0,
    zoom: 9
  }, {
    scale: 0,
    zoom: 10
  }, {
    scale: 0,
    zoom: 11
  }, {
    scale: 1.25,
    zoom: 12
  }, {
    scale: 0.95,
    zoom: 13
  }, {
    scale: 0.81,
    zoom: 14
  }, {
    scale: 0.95,
    zoom: 15
  }, {
    scale: 1.1,
    zoom: 16
  }, {
    scale: 0.93,
    zoom: 17
  }, {
    scale: 0.85,
    zoom: 18
  }, {
    scale: 0.82,
    zoom: 19
  }, {
    scale: 0.84,
    zoom: 20
  }, {
    scale: 0.9,
    zoom: 21
  }]
}, {
  tags: {
    any: "road_5"
  },
  elements: "geometry.outline",
  stylers: [{
    color: "#ffffff",
    scale: 1.4,
    zoom: 0
  }, {
    color: "#ffffff",
    scale: 1.4,
    zoom: 1
  }, {
    color: "#ffffff",
    scale: 1.4,
    zoom: 2
  }, {
    color: "#ffffff",
    scale: 1.4,
    zoom: 3
  }, {
    color: "#ffffff",
    scale: 1.4,
    zoom: 4
  }, {
    color: "#ffffff",
    scale: 1.4,
    zoom: 5
  }, {
    color: "#ffffff",
    scale: 1.4,
    zoom: 6
  }, {
    color: "#ffffff",
    scale: 1.4,
    zoom: 7
  }, {
    color: "#ffffff",
    scale: 1.4,
    zoom: 8
  }, {
    color: "#ffffff",
    scale: 1.4,
    zoom: 9
  }, {
    color: "#ffffff",
    scale: 1.4,
    zoom: 10
  }, {
    color: "#ffffff",
    scale: 0.62,
    zoom: 11
  }, {
    color: "#d7effe",
    scale: 1.61,
    zoom: 12
  }, {
    color: "#d7effe",
    scale: 1.36,
    zoom: 13
  }, {
    color: "#e1f3fe",
    scale: 1.22,
    zoom: 14
  }, {
    color: "#e1f3fe",
    scale: 1.41,
    zoom: 15
  }, {
    color: "#e5f4fe",
    scale: 1.63,
    zoom: 16
  }, {
    color: "#e8f6fe",
    scale: 1.4,
    zoom: 17
  }, {
    color: "#ecf7ff",
    scale: 1.27,
    zoom: 18
  }, {
    color: "#f0f9ff",
    scale: 1.23,
    zoom: 19
  }, {
    color: "#f2faff",
    scale: 1.25,
    zoom: 20
  }, {
    color: "#f5fbff",
    scale: 1.34,
    zoom: 21
  }]
}, {
  tags: {
    any: "road_6",
    none: "is_tunnel"
  },
  elements: "geometry.fill",
  stylers: [{
    color: "#ffffff"
  }, {
    scale: 0,
    zoom: 0
  }, {
    scale: 0,
    zoom: 1
  }, {
    scale: 0,
    zoom: 2
  }, {
    scale: 0,
    zoom: 3
  }, {
    scale: 0,
    zoom: 4
  }, {
    scale: 0,
    zoom: 5
  }, {
    scale: 0,
    zoom: 6
  }, {
    scale: 0,
    zoom: 7
  }, {
    scale: 0,
    zoom: 8
  }, {
    scale: 0,
    zoom: 9
  }, {
    scale: 0,
    zoom: 10
  }, {
    scale: 0,
    zoom: 11
  }, {
    scale: 0,
    zoom: 12
  }, {
    scale: 2.25,
    zoom: 13
  }, {
    scale: 1.27,
    zoom: 14
  }, {
    scale: 1.25,
    zoom: 15
  }, {
    scale: 1.31,
    zoom: 16
  }, {
    scale: 1.04,
    zoom: 17
  }, {
    scale: 0.9,
    zoom: 18
  }, {
    scale: 0.85,
    zoom: 19
  }, {
    scale: 0.85,
    zoom: 20
  }, {
    scale: 0.9,
    zoom: 21
  }]
}, {
  tags: {
    any: "road_6"
  },
  elements: "geometry.outline",
  stylers: [{
    color: "#ffffff",
    scale: 1.4,
    zoom: 0
  }, {
    color: "#ffffff",
    scale: 1.4,
    zoom: 1
  }, {
    color: "#ffffff",
    scale: 1.4,
    zoom: 2
  }, {
    color: "#ffffff",
    scale: 1.4,
    zoom: 3
  }, {
    color: "#ffffff",
    scale: 1.4,
    zoom: 4
  }, {
    color: "#ffffff",
    scale: 1.4,
    zoom: 5
  }, {
    color: "#ffffff",
    scale: 1.4,
    zoom: 6
  }, {
    color: "#ffffff",
    scale: 1.4,
    zoom: 7
  }, {
    color: "#ffffff",
    scale: 1.4,
    zoom: 8
  }, {
    color: "#ffffff",
    scale: 1.4,
    zoom: 9
  }, {
    color: "#ffffff",
    scale: 1.4,
    zoom: 10
  }, {
    color: "#ffffff",
    scale: 1.4,
    zoom: 11
  }, {
    color: "#ffffff",
    scale: 1.4,
    zoom: 12
  }, {
    color: "#d7effe",
    scale: 2.31,
    zoom: 13
  }, {
    color: "#e1f3fe",
    scale: 1.7,
    zoom: 14
  }, {
    color: "#e1f3fe",
    scale: 1.76,
    zoom: 15
  }, {
    color: "#e5f4fe",
    scale: 1.89,
    zoom: 16
  }, {
    color: "#e8f6fe",
    scale: 1.55,
    zoom: 17
  }, {
    color: "#ecf7ff",
    scale: 1.36,
    zoom: 18
  }, {
    color: "#f0f9ff",
    scale: 1.27,
    zoom: 19
  }, {
    color: "#f2faff",
    scale: 1.27,
    zoom: 20
  }, {
    color: "#f5fbff",
    scale: 1.34,
    zoom: 21
  }]
}, {
  tags: {
    any: "road_7",
    none: "is_tunnel"
  },
  elements: "geometry.fill",
  stylers: [{
    color: "#ffffff"
  }, {
    scale: 0,
    zoom: 0
  }, {
    scale: 0,
    zoom: 1
  }, {
    scale: 0,
    zoom: 2
  }, {
    scale: 0,
    zoom: 3
  }, {
    scale: 0,
    zoom: 4
  }, {
    scale: 0,
    zoom: 5
  }, {
    scale: 0,
    zoom: 6
  }, {
    scale: 0,
    zoom: 7
  }, {
    scale: 0,
    zoom: 8
  }, {
    scale: 0,
    zoom: 9
  }, {
    scale: 0,
    zoom: 10
  }, {
    scale: 0,
    zoom: 11
  }, {
    scale: 0,
    zoom: 12
  }, {
    scale: 0,
    zoom: 13
  }, {
    scale: 0.9,
    zoom: 14
  }, {
    scale: 0.78,
    zoom: 15
  }, {
    scale: 0.88,
    zoom: 16
  }, {
    scale: 0.8,
    zoom: 17
  }, {
    scale: 0.78,
    zoom: 18
  }, {
    scale: 0.79,
    zoom: 19
  }, {
    scale: 0.83,
    zoom: 20
  }, {
    scale: 0.9,
    zoom: 21
  }]
}, {
  tags: {
    any: "road_7"
  },
  elements: "geometry.outline",
  stylers: [{
    color: "#ffffff",
    scale: 1.4,
    zoom: 0
  }, {
    color: "#ffffff",
    scale: 1.4,
    zoom: 1
  }, {
    color: "#ffffff",
    scale: 1.4,
    zoom: 2
  }, {
    color: "#ffffff",
    scale: 1.4,
    zoom: 3
  }, {
    color: "#ffffff",
    scale: 1.4,
    zoom: 4
  }, {
    color: "#ffffff",
    scale: 1.4,
    zoom: 5
  }, {
    color: "#ffffff",
    scale: 1.4,
    zoom: 6
  }, {
    color: "#ffffff",
    scale: 1.4,
    zoom: 7
  }, {
    color: "#ffffff",
    scale: 1.4,
    zoom: 8
  }, {
    color: "#ffffff",
    scale: 1.4,
    zoom: 9
  }, {
    color: "#ffffff",
    scale: 1.4,
    zoom: 10
  }, {
    color: "#ffffff",
    scale: 1.4,
    zoom: 11
  }, {
    color: "#ffffff",
    scale: 1.4,
    zoom: 12
  }, {
    color: "#ffffff",
    scale: 1.4,
    zoom: 13
  }, {
    color: "#e1f3fe",
    scale: 1.31,
    zoom: 14
  }, {
    color: "#e1f3fe",
    scale: 1.19,
    zoom: 15
  }, {
    color: "#e5f4fe",
    scale: 1.31,
    zoom: 16
  }, {
    color: "#e8f6fe",
    scale: 1.21,
    zoom: 17
  }, {
    color: "#ecf7ff",
    scale: 1.17,
    zoom: 18
  }, {
    color: "#f0f9ff",
    scale: 1.18,
    zoom: 19
  }, {
    color: "#f2faff",
    scale: 1.23,
    zoom: 20
  }, {
    color: "#f5fbff",
    scale: 1.33,
    zoom: 21
  }]
}, {
  tags: {
    any: "road_minor",
    none: "is_tunnel"
  },
  elements: "geometry.fill",
  stylers: [{
    color: "#ffffff"
  }, {
    scale: 0,
    zoom: 0
  }, {
    scale: 0,
    zoom: 1
  }, {
    scale: 0,
    zoom: 2
  }, {
    scale: 0,
    zoom: 3
  }, {
    scale: 0,
    zoom: 4
  }, {
    scale: 0,
    zoom: 5
  }, {
    scale: 0,
    zoom: 6
  }, {
    scale: 0,
    zoom: 7
  }, {
    scale: 0,
    zoom: 8
  }, {
    scale: 0,
    zoom: 9
  }, {
    scale: 0,
    zoom: 10
  }, {
    scale: 0,
    zoom: 11
  }, {
    scale: 0,
    zoom: 12
  }, {
    scale: 0,
    zoom: 13
  }, {
    scale: 0,
    zoom: 14
  }, {
    scale: 0,
    zoom: 15
  }, {
    scale: 0.9,
    zoom: 16
  }, {
    scale: 0.9,
    zoom: 17
  }, {
    scale: 0.9,
    zoom: 18
  }, {
    scale: 0.9,
    zoom: 19
  }, {
    scale: 0.9,
    zoom: 20
  }, {
    scale: 0.9,
    zoom: 21
  }]
}, {
  tags: {
    any: "road_minor"
  },
  elements: "geometry.outline",
  stylers: [{
    color: "#ffffff",
    scale: 0.4,
    zoom: 0
  }, {
    color: "#ffffff",
    scale: 0.4,
    zoom: 1
  }, {
    color: "#ffffff",
    scale: 0.4,
    zoom: 2
  }, {
    color: "#ffffff",
    scale: 0.4,
    zoom: 3
  }, {
    color: "#ffffff",
    scale: 0.4,
    zoom: 4
  }, {
    color: "#ffffff",
    scale: 0.4,
    zoom: 5
  }, {
    color: "#ffffff",
    scale: 0.4,
    zoom: 6
  }, {
    color: "#ffffff",
    scale: 0.4,
    zoom: 7
  }, {
    color: "#ffffff",
    scale: 0.4,
    zoom: 8
  }, {
    color: "#ffffff",
    scale: 0.4,
    zoom: 9
  }, {
    color: "#ffffff",
    scale: 0.4,
    zoom: 10
  }, {
    color: "#ffffff",
    scale: 0.4,
    zoom: 11
  }, {
    color: "#ffffff",
    scale: 0.4,
    zoom: 12
  }, {
    color: "#ffffff",
    scale: 0.4,
    zoom: 13
  }, {
    color: "#e1f3fe",
    scale: 0.4,
    zoom: 14
  }, {
    color: "#e1f3fe",
    scale: 0.4,
    zoom: 15
  }, {
    color: "#e5f4fe",
    scale: 1.4,
    zoom: 16
  }, {
    color: "#e8f6fe",
    scale: 1.27,
    zoom: 17
  }, {
    color: "#ecf7ff",
    scale: 1.27,
    zoom: 18
  }, {
    color: "#f0f9ff",
    scale: 1.29,
    zoom: 19
  }, {
    color: "#f2faff",
    scale: 1.31,
    zoom: 20
  }, {
    color: "#f5fbff",
    scale: 1.32,
    zoom: 21
  }]
}, {
  tags: {
    any: "road_unclassified",
    none: "is_tunnel"
  },
  elements: "geometry.fill",
  stylers: [{
    color: "#ffffff"
  }, {
    scale: 0,
    zoom: 0
  }, {
    scale: 0,
    zoom: 1
  }, {
    scale: 0,
    zoom: 2
  }, {
    scale: 0,
    zoom: 3
  }, {
    scale: 0,
    zoom: 4
  }, {
    scale: 0,
    zoom: 5
  }, {
    scale: 0,
    zoom: 6
  }, {
    scale: 0,
    zoom: 7
  }, {
    scale: 0,
    zoom: 8
  }, {
    scale: 0,
    zoom: 9
  }, {
    scale: 0,
    zoom: 10
  }, {
    scale: 0,
    zoom: 11
  }, {
    scale: 0,
    zoom: 12
  }, {
    scale: 0,
    zoom: 13
  }, {
    scale: 0,
    zoom: 14
  }, {
    scale: 0,
    zoom: 15
  }, {
    scale: 0.9,
    zoom: 16
  }, {
    scale: 0.9,
    zoom: 17
  }, {
    scale: 0.9,
    zoom: 18
  }, {
    scale: 0.9,
    zoom: 19
  }, {
    scale: 0.9,
    zoom: 20
  }, {
    scale: 0.9,
    zoom: 21
  }]
}, {
  tags: {
    any: "road_unclassified"
  },
  elements: "geometry.outline",
  stylers: [{
    color: "#ffffff",
    scale: 0.4,
    zoom: 0
  }, {
    color: "#ffffff",
    scale: 0.4,
    zoom: 1
  }, {
    color: "#ffffff",
    scale: 0.4,
    zoom: 2
  }, {
    color: "#ffffff",
    scale: 0.4,
    zoom: 3
  }, {
    color: "#ffffff",
    scale: 0.4,
    zoom: 4
  }, {
    color: "#ffffff",
    scale: 0.4,
    zoom: 5
  }, {
    color: "#ffffff",
    scale: 0.4,
    zoom: 6
  }, {
    color: "#ffffff",
    scale: 0.4,
    zoom: 7
  }, {
    color: "#ffffff",
    scale: 0.4,
    zoom: 8
  }, {
    color: "#ffffff",
    scale: 0.4,
    zoom: 9
  }, {
    color: "#ffffff",
    scale: 0.4,
    zoom: 10
  }, {
    color: "#ffffff",
    scale: 0.4,
    zoom: 11
  }, {
    color: "#ffffff",
    scale: 0.4,
    zoom: 12
  }, {
    color: "#ffffff",
    scale: 0.4,
    zoom: 13
  }, {
    color: "#e1f3fe",
    scale: 0.4,
    zoom: 14
  }, {
    color: "#e1f3fe",
    scale: 0.4,
    zoom: 15
  }, {
    color: "#e5f4fe",
    scale: 1.4,
    zoom: 16
  }, {
    color: "#e8f6fe",
    scale: 1.27,
    zoom: 17
  }, {
    color: "#ecf7ff",
    scale: 1.27,
    zoom: 18
  }, {
    color: "#f0f9ff",
    scale: 1.29,
    zoom: 19
  }, {
    color: "#f2faff",
    scale: 1.31,
    zoom: 20
  }, {
    color: "#f5fbff",
    scale: 1.32,
    zoom: 21
  }]
}, {
  tags: {
    all: "is_tunnel",
    none: "path"
  },
  elements: "geometry.fill",
  stylers: [{
    color: "#cdebfe",
    zoom: 0
  }, {
    color: "#cdebfe",
    zoom: 1
  }, {
    color: "#cdebfe",
    zoom: 2
  }, {
    color: "#cdebfe",
    zoom: 3
  }, {
    color: "#cdebfe",
    zoom: 4
  }, {
    color: "#cdebfe",
    zoom: 5
  }, {
    color: "#cdebfe",
    zoom: 6
  }, {
    color: "#cdebfe",
    zoom: 7
  }, {
    color: "#cdebfe",
    zoom: 8
  }, {
    color: "#cdebfe",
    zoom: 9
  }, {
    color: "#cdebfe",
    zoom: 10
  }, {
    color: "#cdebfe",
    zoom: 11
  }, {
    color: "#cdebfe",
    zoom: 12
  }, {
    color: "#cdebfe",
    zoom: 13
  }, {
    color: "#d7effe",
    zoom: 14
  }, {
    color: "#e1f3fe",
    zoom: 15
  }, {
    color: "#e3f4fe",
    zoom: 16
  }, {
    color: "#e4f4fe",
    zoom: 17
  }, {
    color: "#e6f5fe",
    zoom: 18
  }, {
    color: "#e8f6fe",
    zoom: 19
  }, {
    color: "#e9f6fe",
    zoom: 20
  }, {
    color: "#ebf7fe",
    zoom: 21
  }]
}, {
  tags: {
    all: "path",
    none: "is_tunnel"
  },
  elements: "geometry.fill",
  stylers: [{
    color: "#74c9fb"
  }]
}, {
  tags: {
    all: "path",
    none: "is_tunnel"
  },
  elements: "geometry.outline",
  stylers: [{
    opacity: 0.7
  }, {
    color: "#d7effe",
    zoom: 0
  }, {
    color: "#d7effe",
    zoom: 1
  }, {
    color: "#d7effe",
    zoom: 2
  }, {
    color: "#d7effe",
    zoom: 3
  }, {
    color: "#d7effe",
    zoom: 4
  }, {
    color: "#d7effe",
    zoom: 5
  }, {
    color: "#d7effe",
    zoom: 6
  }, {
    color: "#d7effe",
    zoom: 7
  }, {
    color: "#d7effe",
    zoom: 8
  }, {
    color: "#d7effe",
    zoom: 9
  }, {
    color: "#d7effe",
    zoom: 10
  }, {
    color: "#d7effe",
    zoom: 11
  }, {
    color: "#d7effe",
    zoom: 12
  }, {
    color: "#d7effe",
    zoom: 13
  }, {
    color: "#e1f3fe",
    zoom: 14
  }, {
    color: "#ebf7fe",
    zoom: 15
  }, {
    color: "#edf8fe",
    zoom: 16
  }, {
    color: "#eef8fe",
    zoom: 17
  }, {
    color: "#f0f9fe",
    zoom: 18
  }, {
    color: "#f2faff",
    zoom: 19
  }, {
    color: "#f3faff",
    zoom: 20
  }, {
    color: "#f5fbff",
    zoom: 21
  }]
}, {
  tags: "road_construction",
  elements: "geometry.fill",
  stylers: [{
    color: "#ffffff"
  }]
}, {
  tags: "road_construction",
  elements: "geometry.outline",
  stylers: [{
    color: "#a6ddfc",
    zoom: 0
  }, {
    color: "#a6ddfc",
    zoom: 1
  }, {
    color: "#a6ddfc",
    zoom: 2
  }, {
    color: "#a6ddfc",
    zoom: 3
  }, {
    color: "#a6ddfc",
    zoom: 4
  }, {
    color: "#a6ddfc",
    zoom: 5
  }, {
    color: "#a6ddfc",
    zoom: 6
  }, {
    color: "#a6ddfc",
    zoom: 7
  }, {
    color: "#a6ddfc",
    zoom: 8
  }, {
    color: "#a6ddfc",
    zoom: 9
  }, {
    color: "#a6ddfc",
    zoom: 10
  }, {
    color: "#a6ddfc",
    zoom: 11
  }, {
    color: "#a6ddfc",
    zoom: 12
  }, {
    color: "#a6ddfc",
    zoom: 13
  }, {
    color: "#74c9fb",
    zoom: 14
  }, {
    color: "#a6ddfc",
    zoom: 15
  }, {
    color: "#aee0fc",
    zoom: 16
  }, {
    color: "#b6e3fd",
    zoom: 17
  }, {
    color: "#bee6fd",
    zoom: 18
  }, {
    color: "#c7eafd",
    zoom: 19
  }, {
    color: "#cfedfe",
    zoom: 20
  }, {
    color: "#d7f0fe",
    zoom: 21
  }]
}, {
  tags: {
    any: "ferry"
  },
  stylers: [{
    color: "#5bc0fb"
  }]
}, {
  tags: "transit_location",
  elements: "label.icon",
  stylers: [{
    hue: "#0071b3"
  }, {
    saturation: 0
  }]
}, {
  tags: "transit_location",
  elements: "label.text.fill",
  stylers: [{
    color: "#7aa1b8"
  }]
}, {
  tags: "transit_location",
  elements: "label.text.outline",
  stylers: [{
    color: "#ffffff"
  }]
}, {
  tags: "transit_schema",
  elements: "geometry.fill",
  stylers: [{
    color: "#7aa1b8"
  }, {
    scale: 0.7
  }, {
    opacity: 0.6,
    zoom: 0
  }, {
    opacity: 0.6,
    zoom: 1
  }, {
    opacity: 0.6,
    zoom: 2
  }, {
    opacity: 0.6,
    zoom: 3
  }, {
    opacity: 0.6,
    zoom: 4
  }, {
    opacity: 0.6,
    zoom: 5
  }, {
    opacity: 0.6,
    zoom: 6
  }, {
    opacity: 0.6,
    zoom: 7
  }, {
    opacity: 0.6,
    zoom: 8
  }, {
    opacity: 0.6,
    zoom: 9
  }, {
    opacity: 0.6,
    zoom: 10
  }, {
    opacity: 0.6,
    zoom: 11
  }, {
    opacity: 0.6,
    zoom: 12
  }, {
    opacity: 0.6,
    zoom: 13
  }, {
    opacity: 0.6,
    zoom: 14
  }, {
    opacity: 0.5,
    zoom: 15
  }, {
    opacity: 0.4,
    zoom: 16
  }, {
    opacity: 0.4,
    zoom: 17
  }, {
    opacity: 0.4,
    zoom: 18
  }, {
    opacity: 0.4,
    zoom: 19
  }, {
    opacity: 0.4,
    zoom: 20
  }, {
    opacity: 0.4,
    zoom: 21
  }]
}, {
  tags: "transit_schema",
  elements: "geometry.outline",
  stylers: [{
    opacity: 0
  }]
}, {
  tags: "transit_line",
  elements: "geometry.fill.pattern",
  stylers: [{
    color: "#a3b7c2"
  }, {
    opacity: 0,
    zoom: 0
  }, {
    opacity: 0,
    zoom: 1
  }, {
    opacity: 0,
    zoom: 2
  }, {
    opacity: 0,
    zoom: 3
  }, {
    opacity: 0,
    zoom: 4
  }, {
    opacity: 0,
    zoom: 5
  }, {
    opacity: 0,
    zoom: 6
  }, {
    opacity: 0,
    zoom: 7
  }, {
    opacity: 0,
    zoom: 8
  }, {
    opacity: 0,
    zoom: 9
  }, {
    opacity: 0,
    zoom: 10
  }, {
    opacity: 0,
    zoom: 11
  }, {
    opacity: 0,
    zoom: 12
  }, {
    opacity: 1,
    zoom: 13
  }, {
    opacity: 1,
    zoom: 14
  }, {
    opacity: 1,
    zoom: 15
  }, {
    opacity: 1,
    zoom: 16
  }, {
    opacity: 1,
    zoom: 17
  }, {
    opacity: 1,
    zoom: 18
  }, {
    opacity: 1,
    zoom: 19
  }, {
    opacity: 1,
    zoom: 20
  }, {
    opacity: 1,
    zoom: 21
  }]
}, {
  tags: "transit_line",
  elements: "geometry.fill",
  stylers: [{
    color: "#a3b7c2"
  }, {
    scale: 0.4
  }, {
    opacity: 0,
    zoom: 0
  }, {
    opacity: 0,
    zoom: 1
  }, {
    opacity: 0,
    zoom: 2
  }, {
    opacity: 0,
    zoom: 3
  }, {
    opacity: 0,
    zoom: 4
  }, {
    opacity: 0,
    zoom: 5
  }, {
    opacity: 0,
    zoom: 6
  }, {
    opacity: 0,
    zoom: 7
  }, {
    opacity: 0,
    zoom: 8
  }, {
    opacity: 0,
    zoom: 9
  }, {
    opacity: 0,
    zoom: 10
  }, {
    opacity: 0,
    zoom: 11
  }, {
    opacity: 0,
    zoom: 12
  }, {
    opacity: 1,
    zoom: 13
  }, {
    opacity: 1,
    zoom: 14
  }, {
    opacity: 1,
    zoom: 15
  }, {
    opacity: 1,
    zoom: 16
  }, {
    opacity: 1,
    zoom: 17
  }, {
    opacity: 1,
    zoom: 18
  }, {
    opacity: 1,
    zoom: 19
  }, {
    opacity: 1,
    zoom: 20
  }, {
    opacity: 1,
    zoom: 21
  }]
}, {
  tags: "water",
  elements: "geometry",
  stylers: [{
    color: "#8dd3fc",
    zoom: 0
  }, {
    color: "#8dd3fc",
    zoom: 1
  }, {
    color: "#8dd3fc",
    zoom: 2
  }, {
    color: "#8dd3fc",
    zoom: 3
  }, {
    color: "#8dd3fc",
    zoom: 4
  }, {
    color: "#8dd3fc",
    zoom: 5
  }, {
    color: "#8dd3fc",
    zoom: 6
  }, {
    color: "#8dd3fc",
    zoom: 7
  }, {
    color: "#90d4fc",
    zoom: 8
  }, {
    color: "#94d6fc",
    zoom: 9
  }, {
    color: "#97d7fc",
    zoom: 10
  }, {
    color: "#99d8fc",
    zoom: 11
  }, {
    color: "#9ad8fc",
    zoom: 12
  }, {
    color: "#9cd9fc",
    zoom: 13
  }, {
    color: "#9edafc",
    zoom: 14
  }, {
    color: "#a1dbfc",
    zoom: 15
  }, {
    color: "#a3dcfc",
    zoom: 16
  }, {
    color: "#a5ddfc",
    zoom: 17
  }, {
    color: "#a8defd",
    zoom: 18
  }, {
    color: "#aadffd",
    zoom: 19
  }, {
    color: "#ade0fd",
    zoom: 20
  }, {
    color: "#afe1fd",
    zoom: 21
  }]
}, {
  tags: "water",
  elements: "geometry",
  types: "polyline",
  stylers: [{
    opacity: 0.4,
    zoom: 0
  }, {
    opacity: 0.4,
    zoom: 1
  }, {
    opacity: 0.4,
    zoom: 2
  }, {
    opacity: 0.4,
    zoom: 3
  }, {
    opacity: 0.6,
    zoom: 4
  }, {
    opacity: 0.8,
    zoom: 5
  }, {
    opacity: 1,
    zoom: 6
  }, {
    opacity: 1,
    zoom: 7
  }, {
    opacity: 1,
    zoom: 8
  }, {
    opacity: 1,
    zoom: 9
  }, {
    opacity: 1,
    zoom: 10
  }, {
    opacity: 1,
    zoom: 11
  }, {
    opacity: 1,
    zoom: 12
  }, {
    opacity: 1,
    zoom: 13
  }, {
    opacity: 1,
    zoom: 14
  }, {
    opacity: 1,
    zoom: 15
  }, {
    opacity: 1,
    zoom: 16
  }, {
    opacity: 1,
    zoom: 17
  }, {
    opacity: 1,
    zoom: 18
  }, {
    opacity: 1,
    zoom: 19
  }, {
    opacity: 1,
    zoom: 20
  }, {
    opacity: 1,
    zoom: 21
  }]
}, {
  tags: "bathymetry",
  elements: "geometry",
  stylers: [{
    hue: "#8dd3fc"
  }]
}, {
  tags: {
    any: ["industrial", "construction_site"]
  },
  elements: "geometry",
  stylers: [{
    color: "#ccecff",
    zoom: 0
  }, {
    color: "#ccecff",
    zoom: 1
  }, {
    color: "#ccecff",
    zoom: 2
  }, {
    color: "#ccecff",
    zoom: 3
  }, {
    color: "#ccecff",
    zoom: 4
  }, {
    color: "#ccecff",
    zoom: 5
  }, {
    color: "#ccecff",
    zoom: 6
  }, {
    color: "#ccecff",
    zoom: 7
  }, {
    color: "#ccecff",
    zoom: 8
  }, {
    color: "#ccecff",
    zoom: 9
  }, {
    color: "#ccecff",
    zoom: 10
  }, {
    color: "#ccecff",
    zoom: 11
  }, {
    color: "#ccecff",
    zoom: 12
  }, {
    color: "#ccecff",
    zoom: 13
  }, {
    color: "#d6f0ff",
    zoom: 14
  }, {
    color: "#e0f4ff",
    zoom: 15
  }, {
    color: "#e2f5ff",
    zoom: 16
  }, {
    color: "#e4f5ff",
    zoom: 17
  }, {
    color: "#e5f6ff",
    zoom: 18
  }, {
    color: "#e7f7ff",
    zoom: 19
  }, {
    color: "#e9f7ff",
    zoom: 20
  }, {
    color: "#ebf8ff",
    zoom: 21
  }]
}, {
  tags: {
    any: "transit",
    none: ["transit_location", "transit_line", "transit_schema", "is_unclassified_transit"]
  },
  elements: "geometry",
  stylers: [{
    color: "#ccecff",
    zoom: 0
  }, {
    color: "#ccecff",
    zoom: 1
  }, {
    color: "#ccecff",
    zoom: 2
  }, {
    color: "#ccecff",
    zoom: 3
  }, {
    color: "#ccecff",
    zoom: 4
  }, {
    color: "#ccecff",
    zoom: 5
  }, {
    color: "#ccecff",
    zoom: 6
  }, {
    color: "#ccecff",
    zoom: 7
  }, {
    color: "#ccecff",
    zoom: 8
  }, {
    color: "#ccecff",
    zoom: 9
  }, {
    color: "#ccecff",
    zoom: 10
  }, {
    color: "#ccecff",
    zoom: 11
  }, {
    color: "#ccecff",
    zoom: 12
  }, {
    color: "#ccecff",
    zoom: 13
  }, {
    color: "#d6f0ff",
    zoom: 14
  }, {
    color: "#e0f4ff",
    zoom: 15
  }, {
    color: "#e2f5ff",
    zoom: 16
  }, {
    color: "#e4f5ff",
    zoom: 17
  }, {
    color: "#e5f6ff",
    zoom: 18
  }, {
    color: "#e7f7ff",
    zoom: 19
  }, {
    color: "#e9f7ff",
    zoom: 20
  }, {
    color: "#ebf8ff",
    zoom: 21
  }]
}, {
  tags: "fence",
  elements: "geometry.fill",
  stylers: [{
    color: "#b8e5ff"
  }, {
    opacity: 0.75,
    zoom: 0
  }, {
    opacity: 0.75,
    zoom: 1
  }, {
    opacity: 0.75,
    zoom: 2
  }, {
    opacity: 0.75,
    zoom: 3
  }, {
    opacity: 0.75,
    zoom: 4
  }, {
    opacity: 0.75,
    zoom: 5
  }, {
    opacity: 0.75,
    zoom: 6
  }, {
    opacity: 0.75,
    zoom: 7
  }, {
    opacity: 0.75,
    zoom: 8
  }, {
    opacity: 0.75,
    zoom: 9
  }, {
    opacity: 0.75,
    zoom: 10
  }, {
    opacity: 0.75,
    zoom: 11
  }, {
    opacity: 0.75,
    zoom: 12
  }, {
    opacity: 0.75,
    zoom: 13
  }, {
    opacity: 0.75,
    zoom: 14
  }, {
    opacity: 0.75,
    zoom: 15
  }, {
    opacity: 0.75,
    zoom: 16
  }, {
    opacity: 0.45,
    zoom: 17
  }, {
    opacity: 0.45,
    zoom: 18
  }, {
    opacity: 0.45,
    zoom: 19
  }, {
    opacity: 0.45,
    zoom: 20
  }, {
    opacity: 0.45,
    zoom: 21
  }]
}, {
  tags: "medical",
  elements: "geometry",
  stylers: [{
    color: "#ccecff",
    zoom: 0
  }, {
    color: "#ccecff",
    zoom: 1
  }, {
    color: "#ccecff",
    zoom: 2
  }, {
    color: "#ccecff",
    zoom: 3
  }, {
    color: "#ccecff",
    zoom: 4
  }, {
    color: "#ccecff",
    zoom: 5
  }, {
    color: "#ccecff",
    zoom: 6
  }, {
    color: "#ccecff",
    zoom: 7
  }, {
    color: "#ccecff",
    zoom: 8
  }, {
    color: "#ccecff",
    zoom: 9
  }, {
    color: "#ccecff",
    zoom: 10
  }, {
    color: "#ccecff",
    zoom: 11
  }, {
    color: "#ccecff",
    zoom: 12
  }, {
    color: "#ccecff",
    zoom: 13
  }, {
    color: "#d6f0ff",
    zoom: 14
  }, {
    color: "#e0f4ff",
    zoom: 15
  }, {
    color: "#e2f5ff",
    zoom: 16
  }, {
    color: "#e4f5ff",
    zoom: 17
  }, {
    color: "#e5f6ff",
    zoom: 18
  }, {
    color: "#e7f7ff",
    zoom: 19
  }, {
    color: "#e9f7ff",
    zoom: 20
  }, {
    color: "#ebf8ff",
    zoom: 21
  }]
}, {
  tags: "beach",
  elements: "geometry",
  stylers: [{
    color: "#ccecff",
    opacity: 0.3,
    zoom: 0
  }, {
    color: "#ccecff",
    opacity: 0.3,
    zoom: 1
  }, {
    color: "#ccecff",
    opacity: 0.3,
    zoom: 2
  }, {
    color: "#ccecff",
    opacity: 0.3,
    zoom: 3
  }, {
    color: "#ccecff",
    opacity: 0.3,
    zoom: 4
  }, {
    color: "#ccecff",
    opacity: 0.3,
    zoom: 5
  }, {
    color: "#ccecff",
    opacity: 0.3,
    zoom: 6
  }, {
    color: "#ccecff",
    opacity: 0.3,
    zoom: 7
  }, {
    color: "#ccecff",
    opacity: 0.3,
    zoom: 8
  }, {
    color: "#ccecff",
    opacity: 0.3,
    zoom: 9
  }, {
    color: "#ccecff",
    opacity: 0.3,
    zoom: 10
  }, {
    color: "#ccecff",
    opacity: 0.3,
    zoom: 11
  }, {
    color: "#ccecff",
    opacity: 0.3,
    zoom: 12
  }, {
    color: "#ccecff",
    opacity: 0.65,
    zoom: 13
  }, {
    color: "#d6f0ff",
    opacity: 1,
    zoom: 14
  }, {
    color: "#e0f4ff",
    opacity: 1,
    zoom: 15
  }, {
    color: "#e2f5ff",
    opacity: 1,
    zoom: 16
  }, {
    color: "#e4f5ff",
    opacity: 1,
    zoom: 17
  }, {
    color: "#e5f6ff",
    opacity: 1,
    zoom: 18
  }, {
    color: "#e7f7ff",
    opacity: 1,
    zoom: 19
  }, {
    color: "#e9f7ff",
    opacity: 1,
    zoom: 20
  }, {
    color: "#ebf8ff",
    opacity: 1,
    zoom: 21
  }]
}, {
  tags: {
    all: ["is_tunnel", "path"]
  },
  elements: "geometry.fill",
  stylers: [{
    color: "#6bc6fa"
  }, {
    opacity: 0.3
  }]
}, {
  tags: {
    all: ["is_tunnel", "path"]
  },
  elements: "geometry.outline",
  stylers: [{
    opacity: 0
  }]
}, {
  tags: "road_limited",
  elements: "geometry.fill",
  stylers: [{
    color: "#8dd3fb"
  }, {
    scale: 0,
    zoom: 0
  }, {
    scale: 0,
    zoom: 1
  }, {
    scale: 0,
    zoom: 2
  }, {
    scale: 0,
    zoom: 3
  }, {
    scale: 0,
    zoom: 4
  }, {
    scale: 0,
    zoom: 5
  }, {
    scale: 0,
    zoom: 6
  }, {
    scale: 0,
    zoom: 7
  }, {
    scale: 0,
    zoom: 8
  }, {
    scale: 0,
    zoom: 9
  }, {
    scale: 0,
    zoom: 10
  }, {
    scale: 0,
    zoom: 11
  }, {
    scale: 0,
    zoom: 12
  }, {
    scale: 0.1,
    zoom: 13
  }, {
    scale: 0.2,
    zoom: 14
  }, {
    scale: 0.3,
    zoom: 15
  }, {
    scale: 0.5,
    zoom: 16
  }, {
    scale: 0.6,
    zoom: 17
  }, {
    scale: 0.7,
    zoom: 18
  }, {
    scale: 0.79,
    zoom: 19
  }, {
    scale: 0.83,
    zoom: 20
  }, {
    scale: 0.9,
    zoom: 21
  }]
}, {
  tags: "road_limited",
  elements: "geometry.outline",
  stylers: [{
    color: "#ffffff",
    scale: 1.4,
    zoom: 0
  }, {
    color: "#ffffff",
    scale: 1.4,
    zoom: 1
  }, {
    color: "#ffffff",
    scale: 1.4,
    zoom: 2
  }, {
    color: "#ffffff",
    scale: 1.4,
    zoom: 3
  }, {
    color: "#ffffff",
    scale: 1.4,
    zoom: 4
  }, {
    color: "#ffffff",
    scale: 1.4,
    zoom: 5
  }, {
    color: "#ffffff",
    scale: 1.4,
    zoom: 6
  }, {
    color: "#ffffff",
    scale: 1.4,
    zoom: 7
  }, {
    color: "#ffffff",
    scale: 1.4,
    zoom: 8
  }, {
    color: "#ffffff",
    scale: 1.4,
    zoom: 9
  }, {
    color: "#ffffff",
    scale: 1.4,
    zoom: 10
  }, {
    color: "#ffffff",
    scale: 1.4,
    zoom: 11
  }, {
    color: "#ffffff",
    scale: 1.4,
    zoom: 12
  }, {
    color: "#ffffff",
    scale: 0.1,
    zoom: 13
  }, {
    color: "#e1f3fe",
    scale: 0.2,
    zoom: 14
  }, {
    color: "#e1f3fe",
    scale: 0.3,
    zoom: 15
  }, {
    color: "#e5f4fe",
    scale: 0.5,
    zoom: 16
  }, {
    color: "#e8f6fe",
    scale: 0.6,
    zoom: 17
  }, {
    color: "#ecf7ff",
    scale: 0.7,
    zoom: 18
  }, {
    color: "#f0f9ff",
    scale: 1.18,
    zoom: 19
  }, {
    color: "#f2faff",
    scale: 1.23,
    zoom: 20
  }, {
    color: "#f5fbff",
    scale: 1.33,
    zoom: 21
  }]
}, {
  tags: {
    any: "landcover",
    none: "vegetation"
  },
  stylers: {
    visibility: "off"
  }
}]);

/***/ }),

/***/ "./src/js/components/news.js":
/*!***********************************!*\
  !*** ./src/js/components/news.js ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
const photoButton = document.querySelector("#news-detail-photo");
const videoButton = document.querySelector("#news-detail-video");
const activeTab = document.querySelector(".news-detail__gallery-items_active");
const hideTab = document.querySelector(".news-detail__gallery-items_hide");
if (photoButton) {
  photoButton.addEventListener("click", () => {
    photoButton.classList.toggle("button_red");
    photoButton.classList.toggle("button_gray");
    videoButton.classList.toggle("button_red");
    videoButton.classList.toggle("button_gray");
    activeTab.classList.remove("news-detail__gallery-items_hide");
    activeTab.classList.add("news-detail__gallery-items_active");
    hideTab.classList.remove("news-detail__gallery-items_active");
    hideTab.classList.add("news-detail__gallery-items_hide");
  });
}
if (videoButton) {
  videoButton.addEventListener("click", () => {
    photoButton.classList.toggle("button_red");
    photoButton.classList.toggle("button_gray");
    videoButton.classList.toggle("button_red");
    videoButton.classList.toggle("button_gray");
    activeTab.classList.remove("news-detail__gallery-items_active");
    activeTab.classList.add("news-detail__gallery-items_hide");
    hideTab.classList.remove("news-detail__gallery-items_hide");
    hideTab.classList.add("news-detail__gallery-items_active");
  });
}

/***/ }),

/***/ "./src/js/components/select-menu.js":
/*!******************************************!*\
  !*** ./src/js/components/select-menu.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flatpickr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flatpickr */ "./node_modules/flatpickr/dist/esm/index.js");
/* harmony import */ var flatpickr_dist_l10n_ru_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flatpickr/dist/l10n/ru.js */ "./node_modules/flatpickr/dist/l10n/ru.js");
/* harmony import */ var slim_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! slim-select */ "./node_modules/slim-select/dist/slimselect.js");


const dateInput = document.getElementById("date-input");
const selectArrow = document.querySelector(".select-menu__arrow");
const clearButton = document.querySelector(".select-menu__clear");
document.querySelectorAll(".js-calendar").forEach(element => {
  const calendarWrapper = element.closest(".calendar-wrapper");
  if (!calendarWrapper) {
    return false;
  }
  const selectArrow = calendarWrapper.querySelector(".select-menu__arrow");
  const clearButton = calendarWrapper.querySelector(".select-menu__clear");
  const calendar = (0,flatpickr__WEBPACK_IMPORTED_MODULE_0__["default"])(element, {
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
      const isWeekend = dayElem.dateObj.getDay() === 0 || dayElem.dateObj.getDay() === 6;

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
    }
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
  const calendar = (0,flatpickr__WEBPACK_IMPORTED_MODULE_0__["default"])(dateInput, {
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
      const isWeekend = dayElem.dateObj.getDay() === 0 || dayElem.dateObj.getDay() === 6;

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
    }
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

const arrowSelect = document.querySelector(".custom-select__arrow");
const clearButtonSelect = document.querySelector(".custom-select__clear");
const searchArrowSelect = document.querySelector(".head-filter__select-arrow");
const searchClearButtonSelect = document.querySelector(".head-filter__select-clear");
const select = new slim_select__WEBPACK_IMPORTED_MODULE_2__({
  select: "#my-select",
  settings: {
    placeholderText: "Регион",
    showSearch: false,
    showArrow: false,
    contentLocation: document.getElementById("custom-select")
  },
  events: {
    afterClose: () => {
      arrowSelect.classList.remove("custom-select__arrow--active");
    },
    afterOpen: () => {
      arrowSelect.classList.add("custom-select__arrow--active");
    },
    afterChange: newVal => {
      if (newVal.length > 0 && newVal[0].value !== "") {
        clearButtonSelect.classList.add("custom-select__clear--active");
      } else {
        clearButtonSelect.classList.remove("custom-select__clear--active");
      }
    }
  }
});
if (clearButtonSelect) {
  clearButtonSelect.addEventListener("click", function (e) {
    e.stopPropagation();
    select.setSelected([]);
  });
}
const selectSearch = new slim_select__WEBPACK_IMPORTED_MODULE_2__({
  select: "#search-select",
  settings: {
    placeholderText: "Регион",
    showSearch: false,
    showArrow: false
  },
  events: {
    afterClose: () => {
      searchArrowSelect.classList.remove("head-filter__select-arrow--active");
    },
    afterOpen: () => {
      searchArrowSelect.classList.add("head-filter__select-arrow--active");
    },
    afterChange: newVal => {
      if (newVal.length > 0 && newVal[0].value !== "") {
        searchClearButtonSelect.classList.add("head-filter__select-clear--active");
      } else {
        searchClearButtonSelect.classList.remove("head-filter__select-clear--active");
      }
    }
  }
});
if (searchClearButtonSelect) {
  searchClearButtonSelect.addEventListener("click", function (e) {
    e.stopPropagation();
    selectSearch.setSelected([]);
  });
}

/***/ }),

/***/ "./src/js/components/swiper.js":
/*!*************************************!*\
  !*** ./src/js/components/swiper.js ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper/bundle */ "./node_modules/swiper/swiper-bundle.mjs");
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/modules */ "./node_modules/swiper/modules/index.mjs");


const AUTO_PLAY = {
  enabled: true,
  delay: 1,
  pauseOnMouseEnter: false
  // disableOnInteraction: true,
};
const LOOP_ANIMATION = {
  slidesPerView: "auto",
  loop: true,
  speed: 6000,
  // freeMode: true,
  autoplay: AUTO_PLAY
};
document.addEventListener("DOMContentLoaded", () => {
  swiper_bundle__WEBPACK_IMPORTED_MODULE_0__["default"].use([swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Navigation, swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Pagination]);
  new swiper_bundle__WEBPACK_IMPORTED_MODULE_0__["default"](".loop-items", LOOP_ANIMATION);
  new swiper_bundle__WEBPACK_IMPORTED_MODULE_0__["default"]("#galleryTop", {
    ...LOOP_ANIMATION,
    spaceBetween: 16
  });
  new swiper_bundle__WEBPACK_IMPORTED_MODULE_0__["default"]("#galleryBottom", {
    ...LOOP_ANIMATION,
    spaceBetween: 16,
    speed: 12000
  });
  new swiper_bundle__WEBPACK_IMPORTED_MODULE_0__["default"]("#partnersTop", {
    ...LOOP_ANIMATION,
    spaceBetween: 16
  });
  new swiper_bundle__WEBPACK_IMPORTED_MODULE_0__["default"]("#partnersBottom", {
    ...LOOP_ANIMATION,
    spaceBetween: 16,
    speed: 12000
  });
  new swiper_bundle__WEBPACK_IMPORTED_MODULE_0__["default"](".news__slider", {
    slidesPerView: 1.1,
    spaceBetween: 16,
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar"
    }
  });
  new swiper_bundle__WEBPACK_IMPORTED_MODULE_0__["default"](".about-disciplines__slider", {
    slidesPerView: "auto",
    spaceBetween: 16,
    pagination: {
      el: ".about-disciplines__pagination",
      type: "progressbar"
    },
    navigation: {
      nextEl: ".about-disciplines__button-next",
      prevEl: ".about-disciplines__button-prev"
    }
  });
  new swiper_bundle__WEBPACK_IMPORTED_MODULE_0__["default"](".news-page__slider", {
    slidesPerView: "auto",
    spaceBetween: 8,
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar"
    }
  });
});

/***/ }),

/***/ "./src/js/components/tabs.js":
/*!***********************************!*\
  !*** ./src/js/components/tabs.js ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
const tabs = document.querySelectorAll(".tabs__nav-item");
const contents = document.querySelectorAll(".tabs__panel");
tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("tabs__nav-item--active"));
    tab.classList.add("tabs__nav-item--active");
    const target = tab.getAttribute("data-target");
    contents.forEach(content => {
      if (content.id === target) {
        content.classList.add("tabs__panel--active");
      } else {
        content.classList.remove("tabs__panel--active");
      }
    });
  });
});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_components.js */ "./src/js/_components.js");

})();

/******/ })()
;
//# sourceMappingURL=main.js.map