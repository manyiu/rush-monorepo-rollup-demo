'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var styles = require('@mui/material/styles');
var ExpandMoreIcon = require('@mui/icons-material/ExpandMore');
var material = require('@mui/material');
var MuiAccordion = require('@mui/material/Accordion');
var AccordionDetails = require('@mui/material/AccordionDetails');
var AccordionSummary = require('@mui/material/AccordionSummary');
var Typography = require('@mui/material/Typography');
var React = require('react');
var TextField = require('@mui/material/TextField');
var DateRangePicker = require('@mui/lab/DateRangePicker');
var AdapterDateFns = require('@mui/lab/AdapterDateFns');
var LocalizationProvider = require('@mui/lab/LocalizationProvider');
var DesktopDatePicker = require('@mui/lab/DatePicker');
var Autocomplete = require('@mui/material/Autocomplete');
var CloseIcon = require('@mui/icons-material/Close');
var SearchIcon = require('@mui/icons-material/Search');
var Radio = require('@mui/material/Radio');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () { return e[k]; }
                });
            }
        });
    }
    n["default"] = e;
    return Object.freeze(n);
}

var ExpandMoreIcon__default = /*#__PURE__*/_interopDefaultLegacy(ExpandMoreIcon);
var MuiAccordion__default = /*#__PURE__*/_interopDefaultLegacy(MuiAccordion);
var AccordionDetails__default = /*#__PURE__*/_interopDefaultLegacy(AccordionDetails);
var AccordionSummary__default = /*#__PURE__*/_interopDefaultLegacy(AccordionSummary);
var Typography__default = /*#__PURE__*/_interopDefaultLegacy(Typography);
var React__namespace = /*#__PURE__*/_interopNamespace(React);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var TextField__default = /*#__PURE__*/_interopDefaultLegacy(TextField);
var DateRangePicker__default = /*#__PURE__*/_interopDefaultLegacy(DateRangePicker);
var AdapterDateFns__default = /*#__PURE__*/_interopDefaultLegacy(AdapterDateFns);
var LocalizationProvider__default = /*#__PURE__*/_interopDefaultLegacy(LocalizationProvider);
var DesktopDatePicker__default = /*#__PURE__*/_interopDefaultLegacy(DesktopDatePicker);
var Autocomplete__default = /*#__PURE__*/_interopDefaultLegacy(Autocomplete);
var CloseIcon__default = /*#__PURE__*/_interopDefaultLegacy(CloseIcon);
var SearchIcon__default = /*#__PURE__*/_interopDefaultLegacy(SearchIcon);
var Radio__default = /*#__PURE__*/_interopDefaultLegacy(Radio);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}

var StyledContainer$5 = material.styled("div")(templateObject_1$h || (templateObject_1$h = __makeTemplateObject([""], [""])));
var StyledAccordion = material.styled(MuiAccordion__default["default"])(templateObject_2$a || (templateObject_2$a = __makeTemplateObject(["\n  &.MuiAccordion-root {\n    border-radius: 15px;\n  }\n"], ["\n  &.MuiAccordion-root {\n    border-radius: 15px;\n  }\n"])));
var Accordion = function (_a) {
    var title = _a.title, children = _a.children;
    var _b = React__namespace.useState(false); _b[0]; var setExpanded = _b[1];
    var handleChange = function (panel) { return function (event, isExpanded) {
        setExpanded(isExpanded ? panel : false);
    }; };
    return (React__namespace.createElement(StyledContainer$5, null,
        React__namespace.createElement(StyledAccordion
        // expanded={expanded === "panel1"}
        , { 
            // expanded={expanded === "panel1"}
            onChange: handleChange("panel1"), defaultExpanded: true },
            React__namespace.createElement(AccordionSummary__default["default"], { expandIcon: React__namespace.createElement(ExpandMoreIcon__default["default"], { fontSize: "large", sx: { color: "#2D9FC3" } }), "aria-controls": "panel1bh-content", id: "panel1bh-header" },
                React__namespace.createElement(Typography__default["default"], { variant: "h1", sx: { width: "100%", color: "#2D9FC3" } }, title)),
            React__namespace.createElement(AccordionDetails__default["default"], null, children))));
};
var templateObject_1$h, templateObject_2$a;

var StyledIconButton$1 = material.styled(material.IconButton)(templateObject_1$g || (templateObject_1$g = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  height: 44px;\n  width: 44px;\n"], ["\n  display: flex;\n  align-items: center;\n  height: 44px;\n  width: 44px;\n"])));
var StyledSvgContainer$2 = material.styled("div")(templateObject_2$9 || (templateObject_2$9 = __makeTemplateObject(["\n  display: flex;\n  margin-top: 5px; //temp style\n  circle {\n    fill: ", ";\n  }\n  path {\n    fill: ", ";\n  }\n  &:hover circle {\n    fill: ", ";\n  }\n  &:hover path {\n    fill: ", ";\n  }\n"], ["\n  display: flex;\n  margin-top: 5px; //temp style\n  circle {\n    fill: ", ";\n  }\n  path {\n    fill: ", ";\n  }\n  &:hover circle {\n    fill: ", ";\n  }\n  &:hover path {\n    fill: ", ";\n  }\n"])), function (props) { return props.theme.palette.primaryButtonColor2.contrastText; }, function (props) { return props.theme.palette.text.primary; }, function (props) { return props.theme.palette.text.primary; }, function (props) { return props.theme.palette.primaryButtonColor2.contrastText; });
var ArrowButtonMPFA = function (_a) {
    var id = _a.id, ariaLabel = _a.ariaLabel, onClick = _a.onClick, children = _a.children, props = __rest(_a, ["id", "ariaLabel", "onClick", "children"]);
    return (React__default["default"].createElement(StyledIconButton$1, __assign({ id: id, "aria-label": ariaLabel, type: "button", onClick: onClick }, props),
        React__default["default"].createElement(StyledSvgContainer$2, null, children)));
};
var templateObject_1$g, templateObject_2$9;

var StyledIconButton = material.styled(material.IconButton)(templateObject_1$f || (templateObject_1$f = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  height: 44px;\n  width: 44px;\n"], ["\n  display: flex;\n  align-items: center;\n  height: 44px;\n  width: 44px;\n"])));
var StyledSvgContainer$1 = material.styled("div")(templateObject_2$8 || (templateObject_2$8 = __makeTemplateObject(["\n  display: flex;\n  margin-top: 5px; //temp style\n  circle {\n    fill: ", ";\n  }\n  path {\n    fill: ", ";\n  }\n  &:hover circle {\n    fill: ", ";\n  }\n  &:hover path {\n    fill: ", ";\n  }\n"], ["\n  display: flex;\n  margin-top: 5px; //temp style\n  circle {\n    fill: ", ";\n  }\n  path {\n    fill: ", ";\n  }\n  &:hover circle {\n    fill: ", ";\n  }\n  &:hover path {\n    fill: ", ";\n  }\n"])), function (props) { return props.theme.palette.primaryButtonColor2.contrastText; }, function (props) { return props.theme.palette.primaryButtonColor2.main; }, function (props) { return props.theme.palette.primaryButtonColor2.main; }, function (props) { return props.theme.palette.primaryButtonColor2.contrastText; });
var ArrowButtonTrustee = function (_a) {
    var id = _a.id, ariaLabel = _a.ariaLabel, onClick = _a.onClick, children = _a.children, props = __rest(_a, ["id", "ariaLabel", "onClick", "children"]);
    return (React__default["default"].createElement(StyledIconButton, __assign({ id: id, "aria-label": ariaLabel, type: "button", onClick: onClick }, props),
        React__default["default"].createElement(StyledSvgContainer$1, null, children)));
};
var templateObject_1$f, templateObject_2$8;

var StyledButton$8 = material.styled(material.Button)(templateObject_1$e || (templateObject_1$e = __makeTemplateObject(["\n  background-color: ", ";\n  color: ", ";\n  width: 90px;\n  height: 32px;\n  border-radius: 19px;\n  padding: 0;\n\n  font-size: 11px;\n  text-align: center;\n  letter-spacing: 0.39px;\n  text-transform: uppercase;\n  font-weight: bold;\n\n  &:hover {\n    background-color: ", ";\n    box-shadow: none;\n  }\n"], ["\n  background-color: ", ";\n  color: ", ";\n  width: 90px;\n  height: 32px;\n  border-radius: 19px;\n  padding: 0;\n\n  font-size: 11px;\n  text-align: center;\n  letter-spacing: 0.39px;\n  text-transform: uppercase;\n  font-weight: bold;\n\n  &:hover {\n    background-color: ", ";\n    box-shadow: none;\n  }\n"])), function (props) { return props.theme.palette.primaryButtonColor1.main; }, function (props) { return props.theme.palette.primaryButtonColor1.contrastText; }, function (props) {
    return props.theme.palette.primaryButtonColor1.light;
});
var ButtonCom371 = function (_a) {
    var text = _a.text, id = _a.id, onClick = _a.onClick, props = __rest(_a, ["text", "id", "onClick"]);
    return (React__default["default"].createElement(StyledButton$8, __assign({ id: id, type: "submit", variant: "contained", disableElevation: true, onClick: onClick }, props), text));
};
var templateObject_1$e;

var _path;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgIcUploaderAdd = function SvgIcUploaderAdd(props) {
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 25,
    height: 25,
    viewBox: "0 0 46 46"
  }, props), _path || (_path = /*#__PURE__*/React__namespace.createElement("path", {
    d: "M23 0a23 23 0 1 0 23 23A23 23 0 0 0 23 0Zm14.375 24.438a1.438 1.438 0 0 1-1.437 1.438H25.875v10.062a1.438 1.438 0 0 1-1.437 1.437h-2.875a1.438 1.438 0 0 1-1.437-1.437V25.875H10.063a1.438 1.438 0 0 1-1.437-1.437v-2.875a1.438 1.438 0 0 1 1.438-1.437h10.061V10.063a1.438 1.438 0 0 1 1.438-1.437h2.875a1.438 1.438 0 0 1 1.438 1.438v10.061h10.062a1.438 1.438 0 0 1 1.437 1.438Z",
    fill: "#FFF"
  })));
};

var StyledButton$7 = material.styled(material.Button)(templateObject_1$d || (templateObject_1$d = __makeTemplateObject(["\n  background-color: ", ";\n  color: ", ";\n  width: 189px;\n  height: 38px;\n  border-radius: 19px;\n  margin: 5px;\n  display: flex;\n  justify-content: flex-end;\n\n  font-size: 14px;\n  text-align: center;\n  letter-spacing: 0.5px;\n  text-transform: uppercase;\n  font-weight: bold;\n\n  &:hover {\n    background-color: ", ";\n    box-shadow: none;\n  }\n"], ["\n  background-color: ", ";\n  color: ", ";\n  width: 189px;\n  height: 38px;\n  border-radius: 19px;\n  margin: 5px;\n  display: flex;\n  justify-content: flex-end;\n\n  font-size: 14px;\n  text-align: center;\n  letter-spacing: 0.5px;\n  text-transform: uppercase;\n  font-weight: bold;\n\n  &:hover {\n    background-color: ", ";\n    box-shadow: none;\n  }\n"])), function (props) { return props.theme.palette.primaryButtonColor2.main; }, function (props) { return props.theme.palette.primaryButtonColor2.contrastText; }, function (props) {
    return props.theme.palette.primaryButtonColor2.light;
});
var StyledAddIcon = material.styled(SvgIcUploaderAdd)(templateObject_2$7 || (templateObject_2$7 = __makeTemplateObject(["\n  position: absolute;\n  margin-right: 75%;\n"], ["\n  position: absolute;\n  margin-right: 75%;\n"])));
var ButtonCTAWithIcon = function (_a) {
    var text = _a.text, id = _a.id, onClick = _a.onClick, props = __rest(_a, ["text", "id", "onClick"]);
    return (React__default["default"].createElement(StyledButton$7, __assign({ id: id, type: "button", variant: "contained", disableElevation: true, onClick: onClick }, props),
        React__default["default"].createElement(StyledAddIcon, null),
        text));
};
var templateObject_1$d, templateObject_2$7;

var StyledButton$6 = material.styled(material.Button)(templateObject_1$c || (templateObject_1$c = __makeTemplateObject(["\n  background-color: ", ";\n  color: ", ";\n  width: 107px;\n  height: 38px;\n  border-radius: 19px;\n  margin: 5px;\n\n  font-size: 14px;\n  text-align: center;\n  letter-spacing: 0.5px;\n  text-transform: uppercase;\n  font-weight: bold;\n\n  &:hover {\n    background-color: ", ";\n    box-shadow: none;\n  }\n"], ["\n  background-color: ", ";\n  color: ", ";\n  width: 107px;\n  height: 38px;\n  border-radius: 19px;\n  margin: 5px;\n\n  font-size: 14px;\n  text-align: center;\n  letter-spacing: 0.5px;\n  text-transform: uppercase;\n  font-weight: bold;\n\n  &:hover {\n    background-color: ", ";\n    box-shadow: none;\n  }\n"])), function (props) { return props.theme.palette.primaryButtonColor1.main; }, function (props) { return props.theme.palette.primaryButtonColor1.contrastText; }, function (props) {
    return props.theme.palette.primaryButtonColor1.light;
});
var ButtonGeneralCTA = function (_a) {
    var text = _a.text, id = _a.id, onClick = _a.onClick, props = __rest(_a, ["text", "id", "onClick"]);
    return (React__default["default"].createElement(StyledButton$6, __assign({ id: id, type: "submit", variant: "contained", disableElevation: true, onClick: onClick }, props), text));
};
var templateObject_1$c;

var StyledButton$5 = material.styled(material.Button)(templateObject_1$b || (templateObject_1$b = __makeTemplateObject(["\n  border-color: ", ";\n  border-width: 2px;\n  border-style: solid;\n  width: 107px;\n  height: 38px;\n  border-radius: 19px;\n\n  font-size: 14px;\n  color: ", ";\n  letter-spacing: 0.5px;\n  text-align: center;\n  text-transform: uppercase;\n\n  &:hover {\n    border-width: 2px;\n    border-color: ", ";\n    background-color: ", ";\n    box-shadow: none;\n    color: ", ";\n  }\n"], ["\n  border-color: ", ";\n  border-width: 2px;\n  border-style: solid;\n  width: 107px;\n  height: 38px;\n  border-radius: 19px;\n\n  font-size: 14px;\n  color: ", ";\n  letter-spacing: 0.5px;\n  text-align: center;\n  text-transform: uppercase;\n\n  &:hover {\n    border-width: 2px;\n    border-color: ", ";\n    background-color: ", ";\n    box-shadow: none;\n    color: ", ";\n  }\n"])), function (props) { return props.theme.palette.secondaryButtonColor2.main; }, function (props) { return props.theme.palette.secondaryButtonColor2.main; }, function (props) { return props.theme.palette.secondaryButtonColor2.main; }, function (props) {
    return props.theme.palette.secondaryButtonColor2.main;
}, function (props) { return props.theme.palette.secondaryButtonColor2.contrastText; });
var ClearButton = function (_a) {
    var text = _a.text, id = _a.id, onClick = _a.onClick, props = __rest(_a, ["text", "id", "onClick"]);
    return (React__default["default"].createElement(StyledButton$5, __assign({ id: id, type: "button", variant: "outlined", onClick: onClick }, props), text));
};
var templateObject_1$b;

var StyledButton$4 = material.styled(material.Button)(templateObject_1$a || (templateObject_1$a = __makeTemplateObject(["\n  color: ", ";\n  width: 160px;\n  display: flex;\n  justify-content: flex-start;\n\n  &:focus {\n    color: ", ";\n    font-weight: bold;\n    &:hover,\n    &.Mui-focusVisible {\n      border-width: 2;\n      border-radius: 5px;\n      box-shadow: none;\n      color: ", ";\n    }\n  }\n  &:hover,\n  &.Mui-focusVisible {\n    border-width: 2;\n    border-radius: 5px;\n    background-color: ", ";\n    box-shadow: none;\n    color: ", ";\n  }\n"], ["\n  color: ", ";\n  width: 160px;\n  display: flex;\n  justify-content: flex-start;\n\n  &:focus {\n    color: ", ";\n    font-weight: bold;\n    &:hover,\n    &.Mui-focusVisible {\n      border-width: 2;\n      border-radius: 5px;\n      box-shadow: none;\n      color: ", ";\n    }\n  }\n  &:hover,\n  &.Mui-focusVisible {\n    border-width: 2;\n    border-radius: 5px;\n    background-color: ", ";\n    box-shadow: none;\n    color: ", ";\n  }\n"])), function (props) { return props.theme.palette.text.primary; }, function (props) { return props.theme.palette.secondary.main; }, function (props) { return props.theme.palette.secondary.contrastText; }, function (props) { return props.theme.palette.secondary.main; }, function (props) { return props.theme.palette.secondary.contrastText; });
var StyledSvgContainer = material.styled("div")(templateObject_2$6 || (templateObject_2$6 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  fill: currentcolor;\n"], ["\n  display: flex;\n  align-items: center;\n  fill: currentcolor;\n"])));
var StyledText$1 = material.styled("div")(templateObject_3$6 || (templateObject_3$6 = __makeTemplateObject(["\n  flex: 0;\n  line-height: 17px;\n"], ["\n  flex: 0;\n  line-height: 17px;\n"])));
var DashBoardButton = function (_a) {
    var id = _a.id, text = _a.text, children = _a.children, onClick = _a.onClick, props = __rest(_a, ["id", "text", "children", "onClick"]);
    return (React__default["default"].createElement(StyledButton$4, __assign({ id: id, variant: "text", onClick: onClick }, props),
        React__default["default"].createElement(StyledSvgContainer, null, children),
        React__default["default"].createElement(StyledText$1, null, text)));
};
var templateObject_1$a, templateObject_2$6, templateObject_3$6;

var StyledButton$3 = material.styled(material.Button)(templateObject_1$9 || (templateObject_1$9 = __makeTemplateObject(["\n  border-color: ", ";\n  border-width: 2px;\n  border-style: solid;\n  width: 107px;\n  height: 38px;\n  border-radius: 19px;\n  margin: 5px;\n\n  font-size: 14px;\n  color: ", ";\n  letter-spacing: 0.5px;\n  text-align: center;\n  font-weight: bold;\n  text-transform: uppercase;\n\n  &:hover {\n    border-width: 2px;\n    border-color: ", ";\n    box-shadow: none;\n    background-color: ", ";\n    box-shadow: 0px 3px 6px #00000029;\n  }\n"], ["\n  border-color: ", ";\n  border-width: 2px;\n  border-style: solid;\n  width: 107px;\n  height: 38px;\n  border-radius: 19px;\n  margin: 5px;\n\n  font-size: 14px;\n  color: ", ";\n  letter-spacing: 0.5px;\n  text-align: center;\n  font-weight: bold;\n  text-transform: uppercase;\n\n  &:hover {\n    border-width: 2px;\n    border-color: ", ";\n    box-shadow: none;\n    background-color: ", ";\n    box-shadow: 0px 3px 6px #00000029;\n  }\n"])), function (props) {
    return props.theme.palette.secondaryButtonColor1.contrastText;
}, function (props) { return props.theme.palette.secondaryButtonColor1.contrastText; }, function (props) { return props.theme.palette.secondaryButtonColor1.main; }, function (props) {
    return props.theme.palette.secondaryButtonColor1.main;
});
var OutlineButtonClear = function (_a) {
    var text = _a.text, id = _a.id, onClick = _a.onClick, props = __rest(_a, ["text", "id", "onClick"]);
    return (React__default["default"].createElement(StyledButton$3, __assign({ id: id, type: "button", variant: "outlined", onClick: onClick }, props), text));
};
var templateObject_1$9;

var StyledButton$2 = material.styled(material.Button)(templateObject_1$8 || (templateObject_1$8 = __makeTemplateObject(["\n  border-color: ", ";\n  border-width: 2px;\n  border-style: solid;\n  width: 99px;\n  height: 38px;\n  border-radius: 19px;\n\n  font-size: 14px;\n  color: ", ";\n  letter-spacing: 0.5px;\n  text-align: center;\n  font-weight: bold;\n  text-transform: uppercase;\n\n  &:hover {\n    background-color: ", ";\n    border-width: 2;\n    border-color: ", ";\n    box-shadow: none;\n    color: ", ";\n  }\n"], ["\n  border-color: ", ";\n  border-width: 2px;\n  border-style: solid;\n  width: 99px;\n  height: 38px;\n  border-radius: 19px;\n\n  font-size: 14px;\n  color: ", ";\n  letter-spacing: 0.5px;\n  text-align: center;\n  font-weight: bold;\n  text-transform: uppercase;\n\n  &:hover {\n    background-color: ", ";\n    border-width: 2;\n    border-color: ", ";\n    box-shadow: none;\n    color: ", ";\n  }\n"])), function (props) { return props.theme.palette.primaryButtonColor2.main; }, function (props) { return props.theme.palette.primaryButtonColor2.main; }, function (props) {
    return props.theme.palette.primaryButtonColor2.light;
}, function (props) { return props.theme.palette.primaryButtonColor2.light; }, function (props) { return props.theme.palette.primaryButtonColor2.contrastText; });
var OutlineButtonRec107 = function (_a) {
    var text = _a.text, id = _a.id, onClick = _a.onClick; __rest(_a, ["text", "id", "onClick"]);
    return (React__default["default"].createElement(StyledButton$2, { id: id, type: "button", variant: "outlined", onClick: onClick }, text));
};
var templateObject_1$8;

var StyledButton$1 = material.styled(material.Button)(templateObject_1$7 || (templateObject_1$7 = __makeTemplateObject(["\n  border-color: ", ";\n  border-width: 2px;\n  border-style: solid;\n  width: 107px;\n  height: 38px;\n  border-radius: 19px;\n  margin: 5px;\n\n  font-size: 14px;\n  color: ", ";\n  letter-spacing: 0.5px;\n  text-align: center;\n  font-weight: bold;\n  text-transform: uppercase;\n\n  &:hover {\n    border-width: 2;\n    border-color: ", ";\n    box-shadow: none;\n    background-color: ", ";\n  }\n"], ["\n  border-color: ", ";\n  border-width: 2px;\n  border-style: solid;\n  width: 107px;\n  height: 38px;\n  border-radius: 19px;\n  margin: 5px;\n\n  font-size: 14px;\n  color: ", ";\n  letter-spacing: 0.5px;\n  text-align: center;\n  font-weight: bold;\n  text-transform: uppercase;\n\n  &:hover {\n    border-width: 2;\n    border-color: ", ";\n    box-shadow: none;\n    background-color: ", ";\n  }\n"])), function (props) {
    return props.theme.palette.primaryButtonColor1.contrastText;
}, function (props) { return props.theme.palette.primaryButtonColor1.contrastText; }, function (props) { return props.theme.palette.primaryButtonColor1.light; }, function (props) {
    return props.theme.palette.primaryButtonColor1.light;
});
var OutlineButtonSave = function (_a) {
    var text = _a.text, id = _a.id, onClick = _a.onClick, props = __rest(_a, ["text", "id", "onClick"]);
    return (React__default["default"].createElement(StyledButton$1, __assign({ id: id, type: "button", variant: "outlined", onClick: onClick }, props), text));
};
var templateObject_1$7;

var StyledButton = material.styled(material.Button)(templateObject_1$6 || (templateObject_1$6 = __makeTemplateObject(["\n  background-color: ", ";\n  color: ", ";\n  width: 107px;\n  height: 38px;\n  border-radius: 19px;\n  padding: 0;\n\n  font-size: 14px;\n  text-align: center;\n  letter-spacing: 0.5px;\n  text-transform: uppercase;\n\n  &:hover {\n    background-color: ", ";\n    box-shadow: none;\n  }\n"], ["\n  background-color: ", ";\n  color: ", ";\n  width: 107px;\n  height: 38px;\n  border-radius: 19px;\n  padding: 0;\n\n  font-size: 14px;\n  text-align: center;\n  letter-spacing: 0.5px;\n  text-transform: uppercase;\n\n  &:hover {\n    background-color: ", ";\n    box-shadow: none;\n  }\n"])), function (props) { return props.theme.palette.primaryButtonColor1.main; }, function (props) { return props.theme.palette.primaryButtonColor1.contrastText; }, function (props) {
    return props.theme.palette.primaryButtonColor1.light;
});
var SearchButton = function (_a) {
    var text = _a.text, id = _a.id, onClick = _a.onClick, props = __rest(_a, ["text", "id", "onClick"]);
    return (React__default["default"].createElement(StyledButton, __assign({ id: id, type: "submit", variant: "contained", disableElevation: true, onClick: onClick }, props), text));
};
var templateObject_1$6;

var BasicDateRangePicker = function () {
    var _a = React__namespace.useState([null, null]), value = _a[0], setValue = _a[1];
    return (React__namespace.createElement(LocalizationProvider__default["default"], { dateAdapter: AdapterDateFns__default["default"] },
        React__namespace.createElement(DateRangePicker__default["default"], { value: value, onChange: function (newValue) {
                setValue(newValue);
            }, renderInput: function (_a, endProps) {
                var _b;
                var inputProps = _a.inputProps, startProps = __rest(_a, ["inputProps"]);
                var startValue = inputProps === null || inputProps === void 0 ? void 0 : inputProps.value;
                inputProps === null || inputProps === void 0 ? true : delete inputProps.value;
                return (React__namespace.createElement(TextField__default["default"], __assign({}, startProps, { inputProps: inputProps, value: "".concat(startValue, "-").concat((_b = endProps.inputProps) === null || _b === void 0 ? void 0 : _b.value) })));
            } })));
};

var StyledContainer$4 = material.styled("div")(templateObject_1$5 || (templateObject_1$5 = __makeTemplateObject([""], [""])));
var StyledLabel$4 = material.styled("p")(templateObject_2$5 || (templateObject_2$5 = __makeTemplateObject(["\n  color: ", ";\n  font-size: ", ";\n  text-align: left;\n"], ["\n  color: ", ";\n  font-size: ", ";\n  text-align: left;\n"])), function (props) { return props.theme.typography.body1.color; }, function (props) { return props.theme.typography.body1.fontSize; });
var StyledTextField$4 = material.styled(material.TextField)(templateObject_3$5 || (templateObject_3$5 = __makeTemplateObject(["\n  & input::placeholder {\n    font-style: ", ";\n    font-size: ", ";\n    color: ", ";\n  }\n"], ["\n  & input::placeholder {\n    font-style: ", ";\n    font-size: ", ";\n    color: ", ";\n  }\n"])), function (props) { return props.theme.typography.caption.fontStyle; }, function (props) { return props.theme.typography.caption.fontSize; }, function (props) { return props.theme.typography.caption.color; });
function DatePickerCommon(_a) {
    var label = _a.label, id = _a.id, placeholder = _a.placeholder, helperText = _a.helperText, value = _a.value, onChange = _a.onChange, props = __rest(_a, ["label", "id", "placeholder", "helperText", "value", "onChange"]);
    return (React__default["default"].createElement(LocalizationProvider__default["default"], { dateAdapter: AdapterDateFns__default["default"] },
        React__default["default"].createElement(StyledContainer$4, null,
            React__default["default"].createElement(StyledLabel$4, null, label),
            React__default["default"].createElement(DesktopDatePicker__default["default"], __assign({}, props, { value: value, inputFormat: "dd/MM/yyyy", onChange: onChange, renderInput: function (params) { return (React__default["default"].createElement(StyledTextField$4, __assign({ id: id, variant: "standard" }, params, { inputProps: __assign(__assign({}, params.inputProps), { placeholder: placeholder }), helperText: helperText }))); } })))));
}
var templateObject_1$5, templateObject_2$5, templateObject_3$5;

var StyledContainer$3 = material.styled("div")(templateObject_1$4 || (templateObject_1$4 = __makeTemplateObject([""], [""])));
var StyledLabel$3 = material.styled("p")(templateObject_2$4 || (templateObject_2$4 = __makeTemplateObject(["\n  color: ", ";\n  font-size: ", ";\n  text-align: left;\n"], ["\n  color: ", ";\n  font-size: ", ";\n  text-align: left;\n"])), function (props) { return props.theme.typography.body1.color; }, function (props) { return props.theme.typography.body1.fontSize; });
var StyledTextField$3 = material.styled(material.TextField)(templateObject_3$4 || (templateObject_3$4 = __makeTemplateObject(["\n  & input::placeholder {\n    font-style: ", ";\n    font-size: ", ";\n    color: ", ";\n  }\n"], ["\n  & input::placeholder {\n    font-style: ", ";\n    font-size: ", ";\n    color: ", ";\n  }\n"])), function (props) { return props.theme.typography.caption.fontStyle; }, function (props) { return props.theme.typography.caption.fontSize; }, function (props) { return props.theme.typography.caption.color; });
var StyledPaper = material.styled(material.Paper)(templateObject_4$3 || (templateObject_4$3 = __makeTemplateObject([""], [""])));
var DropDownAutoComplete = function (_a) {
    var label = _a.label, options = _a.options, id = _a.id, placeholder = _a.placeholder, value = _a.value, onChange = _a.onChange, props = __rest(_a, ["label", "options", "id", "placeholder", "value", "onChange"]);
    return (React__default["default"].createElement(StyledContainer$3, null,
        React__default["default"].createElement(StyledLabel$3, null, label),
        React__default["default"].createElement(material.Autocomplete, __assign({}, props, { options: options, id: id, value: value, onChange: onChange, autoHighlight: true, PaperComponent: function (_a) {
                var children = _a.children;
                return React__default["default"].createElement(StyledPaper, null, children);
            }, renderInput: function (params) { return (React__default["default"].createElement(StyledTextField$3, __assign({}, params, { placeholder: placeholder, variant: "standard", InputProps: __assign({}, params.InputProps) }))); } }))));
};
var templateObject_1$4, templateObject_2$4, templateObject_3$4, templateObject_4$3;

var StyledContainer$2 = material.styled("div")(templateObject_1$3 || (templateObject_1$3 = __makeTemplateObject([""], [""])));
var StyledLabel$2 = material.styled("p")(templateObject_2$3 || (templateObject_2$3 = __makeTemplateObject(["\n  color: ", ";\n  font-size: ", ";\n  text-align: left;\n"], ["\n  color: ", ";\n  font-size: ", ";\n  text-align: left;\n"])), function (props) { return props.theme.typography.body1.color; }, function (props) { return props.theme.typography.body1.fontSize; });
var StyledTextField$2 = material.styled(TextField__default["default"])(templateObject_3$3 || (templateObject_3$3 = __makeTemplateObject(["\n  & input::placeholder {\n    font-style: ", ";\n    font-size: ", ";\n    color: ", ";\n  }\n"], ["\n  & input::placeholder {\n    font-style: ", ";\n    font-size: ", ";\n    color: ", ";\n  }\n"])), function (props) { return props.theme.typography.caption.fontStyle; }, function (props) { return props.theme.typography.caption.fontSize; }, function (props) { return props.theme.typography.caption.color; });
var StyledSwitch = material.styled(material.Switch)(templateObject_4$2 || (templateObject_4$2 = __makeTemplateObject(["\n  width: 28px;\n  height: 16px;\n  padding: 0px;\n  display: flex;\n  &:active {\n    & .MuiSwitch-thumb {\n      width: 15px;\n    }\n    & .MuiSwitch-switchBase.Mui-checked {\n      transform: translateX(9px);\n    }\n  }\n  & .MuiSwitch-switchBase {\n    padding: 2px;\n    &.Mui-checked {\n      transform: translateX(12px);\n      color: ", ";\n      & + .MuiSwitch-track {\n        opacity: 1;\n        background-color: ", ";\n      }\n    }\n  }\n  & .MuiSwitch-thumb {\n    box-shadow: 0px 2px 4px 0px rgb(0 35 11 / 20%);\n    width: 12px;\n    height: 12px;\n    border-radius: 6px;\n    transition: ", ";\n  }\n  & .MuiSwitch-track {\n    border-radius: 8px;\n    background-color: ", ";\n    box-sizing: border-box;\n  }\n"], ["\n  width: 28px;\n  height: 16px;\n  padding: 0px;\n  display: flex;\n  &:active {\n    & .MuiSwitch-thumb {\n      width: 15px;\n    }\n    & .MuiSwitch-switchBase.Mui-checked {\n      transform: translateX(9px);\n    }\n  }\n  & .MuiSwitch-switchBase {\n    padding: 2px;\n    &.Mui-checked {\n      transform: translateX(12px);\n      color: ", ";\n      & + .MuiSwitch-track {\n        opacity: 1;\n        background-color: ", ";\n      }\n    }\n  }\n  & .MuiSwitch-thumb {\n    box-shadow: 0px 2px 4px 0px rgb(0 35 11 / 20%);\n    width: 12px;\n    height: 12px;\n    border-radius: 6px;\n    transition: ", ";\n  }\n  & .MuiSwitch-track {\n    border-radius: 8px;\n    background-color: ", ";\n    box-sizing: border-box;\n  }\n"])), function (props) { return props.theme.palette.background.paper; }, function (props) { return props.theme.palette.primary.main; }, function (props) {
    return props.theme.transitions.create(["width"], {
        duration: 200,
    });
}, function (props) { return props.theme.palette.info.light; });
var StyledText = material.styled("div")(templateObject_5$1 || (templateObject_5$1 = __makeTemplateObject(["\n  margin-left: 10px;\n"], ["\n  margin-left: 10px;\n"])));
function DropDownWithSwitch(_a) {
    var id = _a.id, options = _a.options, placeholder = _a.placeholder, label = _a.label, value = _a.value, onChange = _a.onChange, props = __rest(_a, ["id", "options", "placeholder", "label", "value", "onChange"]);
    return (React__namespace.createElement(StyledContainer$2, null,
        React__namespace.createElement(StyledLabel$2, null, label),
        React__namespace.createElement(Autocomplete__default["default"], __assign({}, props, { multiple: true, id: id, options: options, value: value, onChange: onChange, disableCloseOnSelect: true, renderOption: function (props, option, _a) {
                var selected = _a.selected;
                return (React__namespace.createElement("li", __assign({}, props),
                    React__namespace.createElement(StyledSwitch, { checked: selected, name: option }),
                    React__namespace.createElement(StyledText, null, option)));
            }, style: { width: 500 }, renderInput: function (params) { return (React__namespace.createElement(StyledTextField$2, __assign({}, params, { variant: "standard", placeholder: placeholder }))); } }))));
}
var templateObject_1$3, templateObject_2$3, templateObject_3$3, templateObject_4$2, templateObject_5$1;

var Search = material.styled("div")(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["\n  border-radius: 20px;\n  background-color: ", ";\n  width: 183px;\n  height: 38px;\n  border-color: ", ";\n  border-width: 1px;\n  border-style: solid;\n  display: flex;\n  align-items: center;\n  padding: 10px;\n"], ["\n  border-radius: 20px;\n  background-color: ", ";\n  width: 183px;\n  height: 38px;\n  border-color: ", ";\n  border-width: 1px;\n  border-style: solid;\n  display: flex;\n  align-items: center;\n  padding: 10px;\n"])), function (props) { return props.theme.palette.background.paper; }, function (props) { return props.theme.palette.info.light; });
var SearchIconWrapper = material.styled("div")(templateObject_2$2 || (templateObject_2$2 = __makeTemplateObject(["\n  height: 100%;\n  pointer-events: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: ", ";\n"], ["\n  height: 100%;\n  pointer-events: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: ", ";\n"])), function (props) { return props.theme.palette.text.secondary; });
var StyledTextField$1 = material.styled(material.TextField)(templateObject_3$2 || (templateObject_3$2 = __makeTemplateObject(["\n  font-size: 16px;\n  text-align: left;\n  & input::placeholder {\n    font-style: italic;\n    font-size: 16px;\n    color: ", ";\n  }\n"], ["\n  font-size: 16px;\n  text-align: left;\n  & input::placeholder {\n    font-style: italic;\n    font-size: 16px;\n    color: ", ";\n  }\n"])), function (props) { return props.theme.palette.text.secondary; });
var CloseIconWrapper = material.styled(material.IconButton)(templateObject_4$1 || (templateObject_4$1 = __makeTemplateObject(["\n  height: 100%;\n  width: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: ", ";\n"], ["\n  height: 100%;\n  width: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: ", ";\n"])), function (props) { return props.theme.palette.text.secondary; });
var OutlineSearchRec17 = function (_a) {
    var name = _a.name, id = _a.id, placeholder = _a.placeholder, props = __rest(_a, ["name", "id", "placeholder"]);
    return (React__default["default"].createElement(Search, null,
        React__default["default"].createElement(SearchIconWrapper, null,
            React__default["default"].createElement(SearchIcon__default["default"], { sx: { fontSize: "1.4rem" } })),
        React__default["default"].createElement(StyledTextField$1, __assign({ name: name, id: id, placeholder: placeholder, inputProps: { "aria-label": "search" }, variant: "standard" }, props)),
        React__default["default"].createElement(CloseIconWrapper, null,
            React__default["default"].createElement(CloseIcon__default["default"], { sx: { fontSize: "0.9rem" } }))));
};
var templateObject_1$2, templateObject_2$2, templateObject_3$2, templateObject_4$1;

var StyledContainer$1 = material.styled("div")(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject([""], [""])));
var StyledLabel$1 = material.styled("p")(templateObject_2$1 || (templateObject_2$1 = __makeTemplateObject(["\n  color: ", ";\n  font-size: ", ";\n  text-align: left;\n  margin-bottom: 8px; //temp style\n"], ["\n  color: ", ";\n  font-size: ", ";\n  text-align: left;\n  margin-bottom: 8px; //temp style\n"])), function (props) { return props.theme.typography.body1.color; }, function (props) { return props.theme.typography.body1.fontSize; });
var StyledPlaceHolder = material.styled("div")(templateObject_3$1 || (templateObject_3$1 = __makeTemplateObject(["\n  font-style: ", ";\n  color: ", ";\n  font-size: ", ";\n  opacity: 0.4;\n"], ["\n  font-style: ", ";\n  color: ", ";\n  font-size: ", ";\n  opacity: 0.4;\n"])), function (props) { return props.theme.typography.caption.fontStyle; }, function (props) { return props.theme.typography.caption.color; }, function (props) { return props.theme.typography.caption.fontSize; });
var StyledError = material.styled("div")(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  color: ", ";\n"], ["\n  color: ", ";\n"])), function (props) { return props.theme.palette.warning.main; });
var StyledMenuItem = material.styled(material.MenuItem)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  &:focus {\n    color: ", ";\n    font-weight: bold;\n  }\n"], ["\n  &:focus {\n    color: ", ";\n    font-weight: bold;\n  }\n"])), function (props) { return props.theme.palette.primary.main; });
var SelectField = function (_a) {
    var label = _a.label, name = _a.name, id = _a.id, data = _a.data, placeholder = _a.placeholder, value = _a.value, onChange = _a.onChange, error = _a.error, props = __rest(_a, ["label", "name", "id", "data", "placeholder", "value", "onChange", "error"]);
    return (React__default["default"].createElement(StyledContainer$1, null,
        React__default["default"].createElement(StyledLabel$1, null, label),
        React__default["default"].createElement(material.Select, __assign({}, props, { displayEmpty: true, id: id, name: name, variant: "standard", value: value, onChange: onChange, sx: { width: "150px" }, renderValue: value !== ""
                ? undefined
                : function () { return React__default["default"].createElement(StyledPlaceHolder, null, placeholder); } }), data.map(function (item, index) {
            return (React__default["default"].createElement(StyledMenuItem, { key: index, value: item.value }, item.name));
        })),
        error ? React__default["default"].createElement(StyledError, null, error) : null));
};
var templateObject_1$1, templateObject_2$1, templateObject_3$1, templateObject_4, templateObject_5;

var StyledContainer = material.styled("div")(templateObject_1 || (templateObject_1 = __makeTemplateObject([""], [""])));
var StyledLabel = material.styled("p")(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  color: ", ";\n  background-color: ", ";\n  font-size: ", ";\n  text-align: left;\n"], ["\n  color: ", ";\n  background-color: ", ";\n  font-size: ", ";\n  text-align: left;\n"])), function (props) { return props.theme.typography.body1.color; }, function (props) { return props.theme.palette.primaryButtonColor1.main; }, function (props) { return props.theme.typography.body1.fontSize; });
var StyledTextField = material.styled(material.TextField)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  & input::placeholder {\n    font-style: ", ";\n    color: ", ";\n    font-size: ", ";\n  }\n"], ["\n  & input::placeholder {\n    font-style: ", ";\n    color: ", ";\n    font-size: ", ";\n  }\n"])), function (props) { return props.theme.typography.caption.fontStyle; }, function (props) { return props.theme.typography.caption.color; }, function (props) { return props.theme.typography.caption.fontSize; });
var TextFields = function (_a) {
    var name = _a.name, id = _a.id, label = _a.label, placeholder = _a.placeholder, value = _a.value, onChange = _a.onChange, error = _a.error, helperText = _a.helperText, props = __rest(_a, ["name", "id", "label", "placeholder", "value", "onChange", "error", "helperText"]);
    return (React__default["default"].createElement(StyledContainer, null,
        React__default["default"].createElement(StyledLabel, null, label),
        React__default["default"].createElement(StyledTextField, __assign({}, props, { placeholder: placeholder, id: id, name: name, value: value, onChange: onChange, error: error, helperText: helperText, 
            // label={label ? label : undefined}
            variant: "standard" }))));
};
var templateObject_1, templateObject_2, templateObject_3;

var trusteePortalTheme = styles.createTheme({
    palette: {
        primary: {
            main: "#009CCD",
            light: "#4B5CA5",
            contrastText: "#ffffff",
        },
        secondary: {
            main: "#EF841F",
            contrastText: "#ffffff",
        },
        success: {
            main: "#2FCC71",
            light: "#CF2E76",
            contrastText: "#ffffff",
        },
        warning: {
            main: "#F6354A",
            contrastText: "#ffffff",
        },
        info: {
            main: "#f06363",
            light: "#bcbcbc",
            dark: "#9d4de1",
        },
        text: {
            primary: "#3d4f76",
            secondary: "#9D9D9D",
        },
        background: {
            default: "#f3f9f9",
            paper: "#ffffff",
        },
        primaryButtonColor1: {
            main: "#EF841F",
            light: "#EF9F1F",
            contrastText: "#ffffff",
        },
        primaryButtonColor2: {
            main: "#2D9FC3",
            light: "#1DB0DE",
            contrastText: "#ffffff",
        },
        secondaryButtonColor1: {
            main: "#CF2E76",
            light: "#EB3E8B",
            contrastText: "#ffffff",
        },
        secondaryButtonColor2: {
            main: "#F06363",
            contrastText: "#ffffff",
        },
        secondaryButtonColor3: {
            main: "#2FCC71",
            light: "#57E392",
            contrastText: "#ffffff",
        },
    },
    typography: {
        h1: {
            fontSize: 42,
            fontFamily: "Roboto",
            fontWeight: 300,
            color: "#009CCD",
        },
        h2: {
            fontSize: 26,
            fontFamily: "Roboto",
            fontWeight: 500,
            color: "#009CCD",
        },
        h3: {
            fontSize: 22,
            fontFamily: "Roboto",
            fontWeight: 700,
            color: "#EF9F1F",
        },
        h4: {
            fontSize: 20,
            fontFamily: "Roboto",
            fontWeight: 500,
            color: "#009CCD",
        },
        h5: {
            fontSize: 14,
            fontFamily: "Roboto",
            fontWeight: 700,
            color: "#3D4F76",
        },
        body1: {
            fontSize: 14,
            fontFamily: "Roboto",
            fontWeight: 400,
            color: "#42526E",
        },
        body2: {
            fontSize: 16,
            fontFamily: "Roboto",
            fontWeight: 700,
            color: "#3D4F76",
        },
        caption: {
            fontSize: 16,
            fontStyle: "Italic",
            fontFamily: "Roboto",
            fontWeight: 300,
            color: "#9D9D9D",
        },
        overline: {
            fontSize: 12,
            fontFamily: "Roboto",
            fontWeight: 500,
            color: "#F6354A",
        },
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1280,
            xl: 1920,
        },
    },
    components: {
        MuiButton: {
            defaultProps: {
                size: "small",
            },
        },
        MuiFilledInput: {
            defaultProps: {
                margin: "dense",
            },
        },
        MuiFormControl: {
            defaultProps: {
                margin: "dense",
            },
        },
        MuiFormHelperText: {
            defaultProps: {
                margin: "dense",
            },
        },
        MuiIconButton: {
            defaultProps: {
                size: "small",
            },
            styleOverrides: {
                sizeSmall: {
                    marginLeft: 4,
                    marginRight: 4,
                    padding: 12,
                },
            },
        },
        MuiInputBase: {
            defaultProps: {
                margin: "dense",
            },
        },
        MuiInputLabel: {
            defaultProps: {
                margin: "dense",
            },
        },
        MuiListItem: {
            defaultProps: {
                dense: true,
            },
        },
        MuiOutlinedInput: {
            defaultProps: {
                margin: "dense",
            },
        },
        MuiFab: {
            defaultProps: {
                size: "small",
            },
        },
        MuiTable: {
            defaultProps: {
                size: "small",
            },
        },
        MuiTextField: {
            defaultProps: {
                margin: "dense",
            },
        },
        MuiToolbar: {
            defaultProps: {
                variant: "dense",
            },
        },
    },
    transitions: {
        duration: {
            shortest: 150,
            shorter: 200,
            short: 250,
            standard: 300,
            complex: 375,
            enteringScreen: 225,
            leavingScreen: 195,
        },
    },
    spacing: 10,
});

var BpIcon = styles.styled("span")(function (_a) {
    var theme = _a.theme;
    return ({
        borderRadius: "50%",
        width: 14,
        height: 14,
        boxShadow: theme.palette.mode === "dark"
            ? "0 0 0 2px rgb(62 62 62 / 0%)"
            : "inset 0 0 0 2px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
        backgroundColor: "#FAFAFA",
        ".Mui-focusVisible &": {
            outline: "2px auto rgba(19,124,189,.6)",
            outlineOffset: 2,
        },
        "input:hover ~ &": {
            backgroundColor: theme.palette.mode === "dark" ? "#30404d" : "#ebf1f5",
        },
    });
});
var BpCheckedIcon = styles.styled(BpIcon)({
    backgroundColor: trusteePortalTheme.palette.primary.main,
    backgroundImage: "linear-gradient(180deg,hsla(0,0%,0%,.1),hsla(0,0%,100%,0))",
    "&:before": {
        display: "block",
        width: 14,
        height: 14,
        backgroundImage: "radial-gradient(#fff,#fff 15%,transparent 30%)",
        content: '""',
    },
    "input:hover ~ &": {
        backgroundColor: trusteePortalTheme.palette.primary.main,
    },
});
function RadioButton(props) {
    return (React__namespace.createElement(Radio__default["default"], __assign({ sx: {
            "&:hover": {
                bgcolor: "transparent",
            },
        }, disableRipple: true, color: "default", checkedIcon: React__namespace.createElement(BpCheckedIcon, null), icon: React__namespace.createElement(BpIcon, null) }, props)));
}

var adminPortalTheme = styles.createTheme({
    palette: {
        primary: {
            main: "#009CCD",
            light: "#0D6A88",
            contrastText: "#ffffff",
            title: "#ffffff",
        },
        secondary: {
            main: "#EF841F",
            contrastText: "#ffffff",
        },
        success: {
            main: "#2FCC71",
            contrastText: "#ffffff",
        },
        warning: {
            main: "#F6354A",
            contrastText: "#ffffff",
        },
        info: {
            main: "#777777",
            light: "#ED562D",
            dark: "#EF9F1F",
        },
        text: {
            primary: "#3d4f76",
            secondary: "#9D9D9D",
        },
        background: {
            default: "#f3f9f9",
            paper: "#ffffff",
        },
        additionalColor6: {
            main: "#FFCE00",
            contrastText: "#333333",
        },
        primaryButtonColor1: {
            main: "#EF841F",
            light: "#EF9F1F",
            contrastText: "#ffffff",
        },
        primaryButtonColor2: {
            main: "#2D9FC3",
            light: "#1DB0DE",
            contrastText: "#ffffff",
        },
        secondaryButtonColor1: {
            main: "#CF2E76",
            light: "#EB3E8B",
            contrastText: "#ffffff",
        },
        secondaryButtonColor2: {
            main: "#F06363",
            contrastText: "#ffffff",
        },
        secondaryButtonColor3: {
            main: "#2FCC71",
            light: "#57E392",
            contrastText: "#ffffff",
        },
    },
    typography: {
        h1: {
            fontSize: 42,
            fontFamily: "Roboto",
            fontWeight: 300,
            color: "#009CCD",
        },
        h2: {
            fontSize: 26,
            fontFamily: "Roboto",
            fontWeight: 500,
            color: "#009CCD",
        },
        h3: {
            fontSize: 22,
            fontFamily: "Roboto",
            fontWeight: 700,
            color: "#EF9F1F",
        },
        h4: {
            fontSize: 20,
            fontFamily: "Roboto",
            fontWeight: 500,
            color: "#009CCD",
        },
        h5: {
            fontSize: 14,
            fontFamily: "Roboto",
            fontWeight: 700,
            color: "#3D4F76",
        },
        body1: {
            fontSize: 14,
            fontFamily: "Roboto",
            fontWeight: 400,
            color: "#42526E",
        },
        body2: {
            fontSize: 16,
            fontFamily: "Roboto",
            fontWeight: 700,
            color: "#3D4F76",
        },
        caption: {
            fontSize: 16,
            fontStyle: "Italic",
            fontFamily: "Roboto",
            fontWeight: 300,
            color: "#9D9D9D",
        },
        overline: {
            fontSize: 12,
            fontFamily: "Roboto",
            fontWeight: 500,
            color: "#F6354A",
        },
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1280,
            xl: 1920,
        },
    },
    components: {
        MuiButton: {
            defaultProps: {
                size: "small",
            },
        },
        MuiFilledInput: {
            defaultProps: {
                margin: "dense",
            },
        },
        MuiFormControl: {
            defaultProps: {
                margin: "dense",
            },
        },
        MuiFormHelperText: {
            defaultProps: {
                margin: "dense",
            },
        },
        MuiIconButton: {
            defaultProps: {
                size: "small",
            },
            styleOverrides: {
                sizeSmall: {
                    marginLeft: 4,
                    marginRight: 4,
                    padding: 12,
                },
            },
        },
        MuiInputBase: {
            defaultProps: {
                margin: "dense",
            },
        },
        MuiInputLabel: {
            defaultProps: {
                margin: "dense",
            },
        },
        MuiListItem: {
            defaultProps: {
                dense: true,
            },
        },
        MuiOutlinedInput: {
            defaultProps: {
                margin: "dense",
            },
        },
        MuiFab: {
            defaultProps: {
                size: "small",
            },
        },
        MuiTable: {
            defaultProps: {
                size: "small",
            },
        },
        MuiTextField: {
            defaultProps: {
                margin: "dense",
            },
        },
        MuiToolbar: {
            defaultProps: {
                variant: "dense",
            },
        },
    },
    transitions: {
        duration: {
            shortest: 150,
            shorter: 200,
            short: 250,
            standard: 300,
            complex: 375,
            enteringScreen: 225,
            leavingScreen: 195,
        },
    },
    spacing: 10,
});

var mpfaPortalTheme = styles.createTheme({
    palette: {
        primary: {
            main: "#E67E23",
            light: "#E67E23",
            contrastText: "#ffffff",
            title: "#ffffff",
        },
        secondary: {
            main: "#2D9FC3",
            contrastText: "#ffffff",
        },
        success: {
            main: "#2FCC71",
            light: "#ffffff",
            contrastText: "#ffffff",
        },
        warning: {
            main: "#F6354A",
            contrastText: "#ffffff",
        },
        info: {
            main: "#F06363",
            light: "#bcbcbc",
            dark: "#ffffff",
        },
        text: {
            primary: "#3d4f76",
            secondary: "#9D9D9D",
        },
        background: {
            default: "#F2F2F2",
            paper: "#ffffff",
        },
        primaryButtonColor1: {
            main: "#EF841F",
            light: "#EF9F1F",
            contrastText: "#ffffff",
        },
        primaryButtonColor2: {
            main: "#2D9FC3",
            light: "#1DB0DE",
            contrastText: "#ffffff",
        },
        secondaryButtonColor1: {
            main: "#CF2E76",
            light: "#EB3E8B",
            contrastText: "#ffffff",
        },
        secondaryButtonColor2: {
            main: "#F06363",
            contrastText: "#ffffff",
        },
        secondaryButtonColor3: {
            main: "#2FCC71",
            light: "#57E392",
            contrastText: "#ffffff",
        },
    },
    typography: {
        h1: {
            fontSize: 42,
            fontFamily: "Roboto",
            fontWeight: 300,
            color: "#E67E23",
        },
        h2: {
            fontSize: 26,
            fontFamily: "Roboto",
            fontWeight: 700,
            color: "#E67E23",
        },
        h3: {
            fontSize: 20,
            fontFamily: "Roboto",
            fontWeight: 700,
            color: "#2C90AD",
        },
        h4: {
            fontSize: 19,
            fontFamily: "Roboto",
            fontWeight: 700,
            color: "#42526E",
        },
        h5: {
            fontSize: 14,
            fontFamily: "Roboto",
            fontWeight: 500,
            color: "#2D9FC3",
        },
        body1: {
            fontSize: 14,
            fontFamily: "Roboto",
            fontWeight: 400,
            color: "#42526E",
        },
        body2: {
            fontSize: 16,
            fontFamily: "Roboto",
            fontWeight: 700,
            color: "#3D4F76",
        },
        caption: {
            fontSize: 16,
            fontStyle: "Italic",
            fontFamily: "Roboto",
            fontWeight: 300,
            color: "#9D9D9D",
        },
        overline: {
            fontSize: 12,
            fontFamily: "Roboto",
            fontWeight: 500,
            color: "#F6354A",
        },
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1280,
            xl: 1920,
        },
    },
    components: {
        MuiButton: {
            defaultProps: {
                size: "small",
            },
        },
        MuiFilledInput: {
            defaultProps: {
                margin: "dense",
            },
        },
        MuiFormControl: {
            defaultProps: {
                margin: "dense",
            },
        },
        MuiFormHelperText: {
            defaultProps: {
                margin: "dense",
            },
        },
        MuiIconButton: {
            defaultProps: {
                size: "small",
            },
            styleOverrides: {
                sizeSmall: {
                    marginLeft: 4,
                    marginRight: 4,
                    padding: 12,
                },
            },
        },
        MuiInputBase: {
            defaultProps: {
                margin: "dense",
            },
        },
        MuiInputLabel: {
            defaultProps: {
                margin: "dense",
            },
        },
        MuiListItem: {
            defaultProps: {
                dense: true,
            },
        },
        MuiOutlinedInput: {
            defaultProps: {
                margin: "dense",
            },
        },
        MuiFab: {
            defaultProps: {
                size: "small",
            },
        },
        MuiTable: {
            defaultProps: {
                size: "small",
            },
        },
        MuiTextField: {
            defaultProps: {
                margin: "dense",
            },
        },
        MuiToolbar: {
            defaultProps: {
                variant: "dense",
            },
        },
    },
    transitions: {
        duration: {
            shortest: 150,
            shorter: 200,
            short: 250,
            standard: 300,
            complex: 375,
            enteringScreen: 225,
            leavingScreen: 195,
        },
    },
    spacing: 10,
});

var themes = {
    adminPortal: adminPortalTheme,
    mpfaPortal: mpfaPortalTheme,
    trusteePortal: trusteePortalTheme,
};

Object.defineProperty(exports, 'ThemeProvider', {
    enumerable: true,
    get: function () { return styles.ThemeProvider; }
});
exports.Accordion = Accordion;
exports.ArrowButtonMPFA = ArrowButtonMPFA;
exports.ArrowButtonTrustee = ArrowButtonTrustee;
exports.BasicDateRangePicker = BasicDateRangePicker;
exports.ButtonCTAWithIcon = ButtonCTAWithIcon;
exports.ButtonCom371 = ButtonCom371;
exports.ButtonGeneralCTA = ButtonGeneralCTA;
exports.ClearButton = ClearButton;
exports.DashBoardButton = DashBoardButton;
exports.DatePickerCommon = DatePickerCommon;
exports.DropDownAutoComplete = DropDownAutoComplete;
exports.DropDownWithSwitch = DropDownWithSwitch;
exports.OutlineButtonClear = OutlineButtonClear;
exports.OutlineButtonRec107 = OutlineButtonRec107;
exports.OutlineButtonSave = OutlineButtonSave;
exports.OutlineSearchRec17 = OutlineSearchRec17;
exports.RadioButton = RadioButton;
exports.SearchButton = SearchButton;
exports.SelectField = SelectField;
exports.TextField = TextFields;
exports.themes = themes;
//# sourceMappingURL=index.js.map
