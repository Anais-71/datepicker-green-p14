"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
require("./Datepicker.css");
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var Datepicker = function Datepicker(_ref) {
  var idPrefix = _ref.idPrefix,
    onChange = _ref.onChange;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isOpen = _useState2[0],
    setIsOpen = _useState2[1];
  var _useState3 = (0, _react.useState)(''),
    _useState4 = _slicedToArray(_useState3, 2),
    selectedDate = _useState4[0],
    setSelectedDate = _useState4[1];
  var _useState5 = (0, _react.useState)(new Date().getMonth()),
    _useState6 = _slicedToArray(_useState5, 2),
    currentMonth = _useState6[0],
    setCurrentMonth = _useState6[1];
  var _useState7 = (0, _react.useState)(new Date().getFullYear()),
    _useState8 = _slicedToArray(_useState7, 2),
    currentYear = _useState8[0],
    setCurrentYear = _useState8[1];
  var inputRef = (0, _react.useRef)(null);
  var monthSelectRef = (0, _react.useRef)(null);
  var yearSelectRef = (0, _react.useRef)(null);
  var daysInMonth = function daysInMonth(month, year) {
    return new Date(year, month + 1, 0).getDate();
  };
  var handleDayClick = function handleDayClick(day) {
    var formattedDate = "".concat(day, "/").concat(currentMonth + 1, "/").concat(currentYear);
    setSelectedDate(formattedDate);
    if (onChange) onChange(formattedDate);
    setIsOpen(false);
  };
  var handleKeyPress = function handleKeyPress(event, action) {
    if (event.key === 'Enter') {
      action();
    }
  };
  var renderCalendar = function renderCalendar() {
    var days = [];
    var totalDays = daysInMonth(currentMonth, currentYear);
    var firstDayIndex = new Date(currentYear, currentMonth, 1).getDay();
    for (var i = 0; i < firstDayIndex; i++) {
      days.push(/*#__PURE__*/_react["default"].createElement("div", {
        key: "empty-".concat(i),
        className: "datepicker__grid--day empty"
      }));
    }
    var _loop = function _loop(day) {
      days.push(/*#__PURE__*/_react["default"].createElement("div", {
        key: day,
        className: "datepicker__grid--day",
        role: "gridcell",
        "aria-selected": selectedDate === "".concat(day, "/").concat(currentMonth + 1, "/").concat(currentYear),
        onClick: function onClick() {
          return handleDayClick(day);
        },
        onKeyDown: function onKeyDown(e) {
          return handleKeyPress(e, function () {
            return handleDayClick(day);
          });
        },
        tabIndex: 0
      }, day));
    };
    for (var day = 1; day <= totalDays; day++) {
      _loop(day);
    }
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "datepicker__grid",
      role: "grid",
      "aria-live": "polite"
    }, ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(function (weekday, index) {
      return /*#__PURE__*/_react["default"].createElement("div", {
        key: index,
        className: "datepicker__grid--weekday",
        role: "columnheader"
      }, weekday);
    }), days);
  };
  var toggleCalendar = function toggleCalendar() {
    return setIsOpen(!isOpen);
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "datepicker"
  }, /*#__PURE__*/_react["default"].createElement("input", {
    ref: inputRef,
    type: "text",
    id: idPrefix,
    value: selectedDate,
    readOnly: true,
    onClick: toggleCalendar,
    onKeyDown: function onKeyDown(e) {
      return handleKeyPress(e, toggleCalendar);
    },
    placeholder: "Please select a date",
    "aria-haspopup": "grid",
    "aria-expanded": isOpen,
    autoComplete: "off",
    className: "datepicker__input",
    tabIndex: 0
  }), isOpen && /*#__PURE__*/_react["default"].createElement("div", {
    className: "datepicker__calendar",
    "data-testid": "calendar",
    style: {
      position: 'absolute',
      top: '100%',
      left: 0
    },
    role: "dialog",
    "aria-modal": "true"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "datepicker__controls"
  }, /*#__PURE__*/_react["default"].createElement("label", {
    htmlFor: "".concat(idPrefix, "-month-select")
  }, "Month:"), /*#__PURE__*/_react["default"].createElement("select", {
    id: "".concat(idPrefix, "-month-select"),
    ref: monthSelectRef,
    "data-testid": "month-select",
    value: currentMonth,
    onChange: function onChange(e) {
      return setCurrentMonth(Number(e.target.value));
    },
    "aria-label": "Select month",
    onKeyDown: function onKeyDown(e) {
      if (e.key === 'Enter') {
        e.preventDefault();
        monthSelectRef.current.size = 12;
      } else if (e.key === 'Escape') {
        monthSelectRef.current.size = 0;
      }
    },
    onBlur: function onBlur() {
      return monthSelectRef.current.size = 0;
    }
  }, ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].map(function (month, index) {
    return /*#__PURE__*/_react["default"].createElement("option", {
      key: index,
      value: index
    }, month);
  })), /*#__PURE__*/_react["default"].createElement("label", {
    htmlFor: "".concat(idPrefix, "-year-select")
  }, "Year:"), /*#__PURE__*/_react["default"].createElement("select", {
    id: "".concat(idPrefix, "-year-select"),
    ref: yearSelectRef,
    value: currentYear,
    onChange: function onChange(e) {
      return setCurrentYear(Number(e.target.value));
    },
    "data-testid": "year-select",
    "aria-label": "Select year",
    onKeyDown: function onKeyDown(e) {
      if (e.key === 'Enter') {
        e.preventDefault();
        yearSelectRef.current.size = 5;
      } else if (e.key === 'Escape') {
        yearSelectRef.current.size = 0;
      }
    },
    onBlur: function onBlur() {
      return yearSelectRef.current.size = 0;
    }
  }, Array.from({
    length: 76
  }, function (_, index) {
    return 1950 + index;
  }).map(function (year) {
    return /*#__PURE__*/_react["default"].createElement("option", {
      key: year,
      value: year
    }, year);
  }))), renderCalendar()));
};
Datepicker.propTypes = {
  idPrefix: _propTypes["default"].string.isRequired,
  onChange: _propTypes["default"].func.isRequired
};
var _default = exports["default"] = Datepicker;