import { createTheme, styled as styled$1 } from '@mui/material/styles';
export { ThemeProvider } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled, IconButton, Button, TextField as TextField$1, Paper, Autocomplete, Switch, MenuItem, Select } from '@mui/material';
import MuiAccordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import React__default from 'react';
import TextField from '@mui/material/TextField';
import DateRangePicker from '@mui/lab/DateRangePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DesktopDatePicker from '@mui/lab/DatePicker';
import Autocomplete$1 from '@mui/material/Autocomplete';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import Radio from '@mui/material/Radio';

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

var StyledContainer$5 = styled("div")(templateObject_1$h || (templateObject_1$h = __makeTemplateObject([""], [""])));
var StyledAccordion = styled(MuiAccordion)(templateObject_2$a || (templateObject_2$a = __makeTemplateObject(["\n  &.MuiAccordion-root {\n    border-radius: 15px;\n  }\n"], ["\n  &.MuiAccordion-root {\n    border-radius: 15px;\n  }\n"])));
var Accordion = function (_a) {
    var title = _a.title, children = _a.children;
    var _b = React.useState(false); _b[0]; var setExpanded = _b[1];
    var handleChange = function (panel) { return function (event, isExpanded) {
        setExpanded(isExpanded ? panel : false);
    }; };
    return (React.createElement(StyledContainer$5, null,
        React.createElement(StyledAccordion
        // expanded={expanded === "panel1"}
        , { 
            // expanded={expanded === "panel1"}
            onChange: handleChange("panel1"), defaultExpanded: true },
            React.createElement(AccordionSummary, { expandIcon: React.createElement(ExpandMoreIcon, { fontSize: "large", sx: { color: "#2D9FC3" } }), "aria-controls": "panel1bh-content", id: "panel1bh-header" },
                React.createElement(Typography, { variant: "h1", sx: { width: "100%", color: "#2D9FC3" } }, title)),
            React.createElement(AccordionDetails, null, children))));
};
var templateObject_1$h, templateObject_2$a;

var StyledIconButton$1 = styled(IconButton)(templateObject_1$g || (templateObject_1$g = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  height: 44px;\n  width: 44px;\n"], ["\n  display: flex;\n  align-items: center;\n  height: 44px;\n  width: 44px;\n"])));
var StyledSvgContainer$2 = styled("div")(templateObject_2$9 || (templateObject_2$9 = __makeTemplateObject(["\n  display: flex;\n  margin-top: 5px; //temp style\n  circle {\n    fill: ", ";\n  }\n  path {\n    fill: ", ";\n  }\n  &:hover circle {\n    fill: ", ";\n  }\n  &:hover path {\n    fill: ", ";\n  }\n"], ["\n  display: flex;\n  margin-top: 5px; //temp style\n  circle {\n    fill: ", ";\n  }\n  path {\n    fill: ", ";\n  }\n  &:hover circle {\n    fill: ", ";\n  }\n  &:hover path {\n    fill: ", ";\n  }\n"])), function (props) { return props.theme.palette.primaryButtonColor2.contrastText; }, function (props) { return props.theme.palette.text.primary; }, function (props) { return props.theme.palette.text.primary; }, function (props) { return props.theme.palette.primaryButtonColor2.contrastText; });
var ArrowButtonMPFA = function (_a) {
    var id = _a.id, ariaLabel = _a.ariaLabel, onClick = _a.onClick, children = _a.children, props = __rest(_a, ["id", "ariaLabel", "onClick", "children"]);
    return (React__default.createElement(StyledIconButton$1, __assign({ id: id, "aria-label": ariaLabel, type: "button", onClick: onClick }, props),
        React__default.createElement(StyledSvgContainer$2, null, children)));
};
var templateObject_1$g, templateObject_2$9;

var StyledIconButton = styled(IconButton)(templateObject_1$f || (templateObject_1$f = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  height: 44px;\n  width: 44px;\n"], ["\n  display: flex;\n  align-items: center;\n  height: 44px;\n  width: 44px;\n"])));
var StyledSvgContainer$1 = styled("div")(templateObject_2$8 || (templateObject_2$8 = __makeTemplateObject(["\n  display: flex;\n  margin-top: 5px; //temp style\n  circle {\n    fill: ", ";\n  }\n  path {\n    fill: ", ";\n  }\n  &:hover circle {\n    fill: ", ";\n  }\n  &:hover path {\n    fill: ", ";\n  }\n"], ["\n  display: flex;\n  margin-top: 5px; //temp style\n  circle {\n    fill: ", ";\n  }\n  path {\n    fill: ", ";\n  }\n  &:hover circle {\n    fill: ", ";\n  }\n  &:hover path {\n    fill: ", ";\n  }\n"])), function (props) { return props.theme.palette.primaryButtonColor2.contrastText; }, function (props) { return props.theme.palette.primaryButtonColor2.main; }, function (props) { return props.theme.palette.primaryButtonColor2.main; }, function (props) { return props.theme.palette.primaryButtonColor2.contrastText; });
var ArrowButtonTrustee = function (_a) {
    var id = _a.id, ariaLabel = _a.ariaLabel, onClick = _a.onClick, children = _a.children, props = __rest(_a, ["id", "ariaLabel", "onClick", "children"]);
    return (React__default.createElement(StyledIconButton, __assign({ id: id, "aria-label": ariaLabel, type: "button", onClick: onClick }, props),
        React__default.createElement(StyledSvgContainer$1, null, children)));
};
var templateObject_1$f, templateObject_2$8;

var StyledButton$8 = styled(Button)(templateObject_1$e || (templateObject_1$e = __makeTemplateObject(["\n  background-color: ", ";\n  color: ", ";\n  width: 90px;\n  height: 32px;\n  border-radius: 19px;\n  padding: 0;\n\n  font-size: 11px;\n  text-align: center;\n  letter-spacing: 0.39px;\n  text-transform: uppercase;\n  font-weight: bold;\n\n  &:hover {\n    background-color: ", ";\n    box-shadow: none;\n  }\n"], ["\n  background-color: ", ";\n  color: ", ";\n  width: 90px;\n  height: 32px;\n  border-radius: 19px;\n  padding: 0;\n\n  font-size: 11px;\n  text-align: center;\n  letter-spacing: 0.39px;\n  text-transform: uppercase;\n  font-weight: bold;\n\n  &:hover {\n    background-color: ", ";\n    box-shadow: none;\n  }\n"])), function (props) { return props.theme.palette.primaryButtonColor1.main; }, function (props) { return props.theme.palette.primaryButtonColor1.contrastText; }, function (props) {
    return props.theme.palette.primaryButtonColor1.light;
});
var ButtonCom371 = function (_a) {
    var text = _a.text, id = _a.id, onClick = _a.onClick, props = __rest(_a, ["text", "id", "onClick"]);
    return (React__default.createElement(StyledButton$8, __assign({ id: id, type: "submit", variant: "contained", disableElevation: true, onClick: onClick }, props), text));
};
var templateObject_1$e;

var _path;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgIcUploaderAdd = function SvgIcUploaderAdd(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 25,
    height: 25,
    viewBox: "0 0 46 46"
  }, props), _path || (_path = /*#__PURE__*/React.createElement("path", {
    d: "M23 0a23 23 0 1 0 23 23A23 23 0 0 0 23 0Zm14.375 24.438a1.438 1.438 0 0 1-1.437 1.438H25.875v10.062a1.438 1.438 0 0 1-1.437 1.437h-2.875a1.438 1.438 0 0 1-1.437-1.437V25.875H10.063a1.438 1.438 0 0 1-1.437-1.437v-2.875a1.438 1.438 0 0 1 1.438-1.437h10.061V10.063a1.438 1.438 0 0 1 1.438-1.437h2.875a1.438 1.438 0 0 1 1.438 1.438v10.061h10.062a1.438 1.438 0 0 1 1.437 1.438Z",
    fill: "#FFF"
  })));
};

var StyledButton$7 = styled(Button)(templateObject_1$d || (templateObject_1$d = __makeTemplateObject(["\n  background-color: ", ";\n  color: ", ";\n  width: 189px;\n  height: 38px;\n  border-radius: 19px;\n  margin: 5px;\n  display: flex;\n  justify-content: flex-end;\n\n  font-size: 14px;\n  text-align: center;\n  letter-spacing: 0.5px;\n  text-transform: uppercase;\n  font-weight: bold;\n\n  &:hover {\n    background-color: ", ";\n    box-shadow: none;\n  }\n"], ["\n  background-color: ", ";\n  color: ", ";\n  width: 189px;\n  height: 38px;\n  border-radius: 19px;\n  margin: 5px;\n  display: flex;\n  justify-content: flex-end;\n\n  font-size: 14px;\n  text-align: center;\n  letter-spacing: 0.5px;\n  text-transform: uppercase;\n  font-weight: bold;\n\n  &:hover {\n    background-color: ", ";\n    box-shadow: none;\n  }\n"])), function (props) { return props.theme.palette.primaryButtonColor2.main; }, function (props) { return props.theme.palette.primaryButtonColor2.contrastText; }, function (props) {
    return props.theme.palette.primaryButtonColor2.light;
});
var StyledAddIcon = styled(SvgIcUploaderAdd)(templateObject_2$7 || (templateObject_2$7 = __makeTemplateObject(["\n  position: absolute;\n  margin-right: 75%;\n"], ["\n  position: absolute;\n  margin-right: 75%;\n"])));
var ButtonCTAWithIcon = function (_a) {
    var text = _a.text, id = _a.id, onClick = _a.onClick, props = __rest(_a, ["text", "id", "onClick"]);
    return (React__default.createElement(StyledButton$7, __assign({ id: id, type: "button", variant: "contained", disableElevation: true, onClick: onClick }, props),
        React__default.createElement(StyledAddIcon, null),
        text));
};
var templateObject_1$d, templateObject_2$7;

var StyledButton$6 = styled(Button)(templateObject_1$c || (templateObject_1$c = __makeTemplateObject(["\n  background-color: ", ";\n  color: ", ";\n  width: 107px;\n  height: 38px;\n  border-radius: 19px;\n  margin: 5px;\n\n  font-size: 14px;\n  text-align: center;\n  letter-spacing: 0.5px;\n  text-transform: uppercase;\n  font-weight: bold;\n\n  &:hover {\n    background-color: ", ";\n    box-shadow: none;\n  }\n"], ["\n  background-color: ", ";\n  color: ", ";\n  width: 107px;\n  height: 38px;\n  border-radius: 19px;\n  margin: 5px;\n\n  font-size: 14px;\n  text-align: center;\n  letter-spacing: 0.5px;\n  text-transform: uppercase;\n  font-weight: bold;\n\n  &:hover {\n    background-color: ", ";\n    box-shadow: none;\n  }\n"])), function (props) { return props.theme.palette.primaryButtonColor1.main; }, function (props) { return props.theme.palette.primaryButtonColor1.contrastText; }, function (props) {
    return props.theme.palette.primaryButtonColor1.light;
});
var ButtonGeneralCTA = function (_a) {
    var text = _a.text, id = _a.id, onClick = _a.onClick, props = __rest(_a, ["text", "id", "onClick"]);
    return (React__default.createElement(StyledButton$6, __assign({ id: id, type: "submit", variant: "contained", disableElevation: true, onClick: onClick }, props), text));
};
var templateObject_1$c;

var StyledButton$5 = styled(Button)(templateObject_1$b || (templateObject_1$b = __makeTemplateObject(["\n  border-color: ", ";\n  border-width: 2px;\n  border-style: solid;\n  width: 107px;\n  height: 38px;\n  border-radius: 19px;\n\n  font-size: 14px;\n  color: ", ";\n  letter-spacing: 0.5px;\n  text-align: center;\n  text-transform: uppercase;\n\n  &:hover {\n    border-width: 2px;\n    border-color: ", ";\n    background-color: ", ";\n    box-shadow: none;\n    color: ", ";\n  }\n"], ["\n  border-color: ", ";\n  border-width: 2px;\n  border-style: solid;\n  width: 107px;\n  height: 38px;\n  border-radius: 19px;\n\n  font-size: 14px;\n  color: ", ";\n  letter-spacing: 0.5px;\n  text-align: center;\n  text-transform: uppercase;\n\n  &:hover {\n    border-width: 2px;\n    border-color: ", ";\n    background-color: ", ";\n    box-shadow: none;\n    color: ", ";\n  }\n"])), function (props) { return props.theme.palette.secondaryButtonColor2.main; }, function (props) { return props.theme.palette.secondaryButtonColor2.main; }, function (props) { return props.theme.palette.secondaryButtonColor2.main; }, function (props) {
    return props.theme.palette.secondaryButtonColor2.main;
}, function (props) { return props.theme.palette.secondaryButtonColor2.contrastText; });
var ClearButton = function (_a) {
    var text = _a.text, id = _a.id, onClick = _a.onClick, props = __rest(_a, ["text", "id", "onClick"]);
    return (React__default.createElement(StyledButton$5, __assign({ id: id, type: "button", variant: "outlined", onClick: onClick }, props), text));
};
var templateObject_1$b;

var StyledButton$4 = styled(Button)(templateObject_1$a || (templateObject_1$a = __makeTemplateObject(["\n  color: ", ";\n  width: 160px;\n  display: flex;\n  justify-content: flex-start;\n\n  &:focus {\n    color: ", ";\n    font-weight: bold;\n    &:hover,\n    &.Mui-focusVisible {\n      border-width: 2;\n      border-radius: 5px;\n      box-shadow: none;\n      color: ", ";\n    }\n  }\n  &:hover,\n  &.Mui-focusVisible {\n    border-width: 2;\n    border-radius: 5px;\n    background-color: ", ";\n    box-shadow: none;\n    color: ", ";\n  }\n"], ["\n  color: ", ";\n  width: 160px;\n  display: flex;\n  justify-content: flex-start;\n\n  &:focus {\n    color: ", ";\n    font-weight: bold;\n    &:hover,\n    &.Mui-focusVisible {\n      border-width: 2;\n      border-radius: 5px;\n      box-shadow: none;\n      color: ", ";\n    }\n  }\n  &:hover,\n  &.Mui-focusVisible {\n    border-width: 2;\n    border-radius: 5px;\n    background-color: ", ";\n    box-shadow: none;\n    color: ", ";\n  }\n"])), function (props) { return props.theme.palette.text.primary; }, function (props) { return props.theme.palette.secondary.main; }, function (props) { return props.theme.palette.secondary.contrastText; }, function (props) { return props.theme.palette.secondary.main; }, function (props) { return props.theme.palette.secondary.contrastText; });
var StyledSvgContainer = styled("div")(templateObject_2$6 || (templateObject_2$6 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  fill: currentcolor;\n"], ["\n  display: flex;\n  align-items: center;\n  fill: currentcolor;\n"])));
var StyledText$1 = styled("div")(templateObject_3$6 || (templateObject_3$6 = __makeTemplateObject(["\n  flex: 0;\n  line-height: 17px;\n"], ["\n  flex: 0;\n  line-height: 17px;\n"])));
var DashBoardButton = function (_a) {
    var id = _a.id, text = _a.text, children = _a.children, onClick = _a.onClick, props = __rest(_a, ["id", "text", "children", "onClick"]);
    return (React__default.createElement(StyledButton$4, __assign({ id: id, variant: "text", onClick: onClick }, props),
        React__default.createElement(StyledSvgContainer, null, children),
        React__default.createElement(StyledText$1, null, text)));
};
var templateObject_1$a, templateObject_2$6, templateObject_3$6;

var StyledButton$3 = styled(Button)(templateObject_1$9 || (templateObject_1$9 = __makeTemplateObject(["\n  border-color: ", ";\n  border-width: 2px;\n  border-style: solid;\n  width: 107px;\n  height: 38px;\n  border-radius: 19px;\n  margin: 5px;\n\n  font-size: 14px;\n  color: ", ";\n  letter-spacing: 0.5px;\n  text-align: center;\n  font-weight: bold;\n  text-transform: uppercase;\n\n  &:hover {\n    border-width: 2px;\n    border-color: ", ";\n    box-shadow: none;\n    background-color: ", ";\n    box-shadow: 0px 3px 6px #00000029;\n  }\n"], ["\n  border-color: ", ";\n  border-width: 2px;\n  border-style: solid;\n  width: 107px;\n  height: 38px;\n  border-radius: 19px;\n  margin: 5px;\n\n  font-size: 14px;\n  color: ", ";\n  letter-spacing: 0.5px;\n  text-align: center;\n  font-weight: bold;\n  text-transform: uppercase;\n\n  &:hover {\n    border-width: 2px;\n    border-color: ", ";\n    box-shadow: none;\n    background-color: ", ";\n    box-shadow: 0px 3px 6px #00000029;\n  }\n"])), function (props) {
    return props.theme.palette.secondaryButtonColor1.contrastText;
}, function (props) { return props.theme.palette.secondaryButtonColor1.contrastText; }, function (props) { return props.theme.palette.secondaryButtonColor1.main; }, function (props) {
    return props.theme.palette.secondaryButtonColor1.main;
});
var OutlineButtonClear = function (_a) {
    var text = _a.text, id = _a.id, onClick = _a.onClick, props = __rest(_a, ["text", "id", "onClick"]);
    return (React__default.createElement(StyledButton$3, __assign({ id: id, type: "button", variant: "outlined", onClick: onClick }, props), text));
};
var templateObject_1$9;

var StyledButton$2 = styled(Button)(templateObject_1$8 || (templateObject_1$8 = __makeTemplateObject(["\n  border-color: ", ";\n  border-width: 2px;\n  border-style: solid;\n  width: 99px;\n  height: 38px;\n  border-radius: 19px;\n\n  font-size: 14px;\n  color: ", ";\n  letter-spacing: 0.5px;\n  text-align: center;\n  font-weight: bold;\n  text-transform: uppercase;\n\n  &:hover {\n    background-color: ", ";\n    border-width: 2;\n    border-color: ", ";\n    box-shadow: none;\n    color: ", ";\n  }\n"], ["\n  border-color: ", ";\n  border-width: 2px;\n  border-style: solid;\n  width: 99px;\n  height: 38px;\n  border-radius: 19px;\n\n  font-size: 14px;\n  color: ", ";\n  letter-spacing: 0.5px;\n  text-align: center;\n  font-weight: bold;\n  text-transform: uppercase;\n\n  &:hover {\n    background-color: ", ";\n    border-width: 2;\n    border-color: ", ";\n    box-shadow: none;\n    color: ", ";\n  }\n"])), function (props) { return props.theme.palette.primaryButtonColor2.main; }, function (props) { return props.theme.palette.primaryButtonColor2.main; }, function (props) {
    return props.theme.palette.primaryButtonColor2.light;
}, function (props) { return props.theme.palette.primaryButtonColor2.light; }, function (props) { return props.theme.palette.primaryButtonColor2.contrastText; });
var OutlineButtonRec107 = function (_a) {
    var text = _a.text, id = _a.id, onClick = _a.onClick; __rest(_a, ["text", "id", "onClick"]);
    return (React__default.createElement(StyledButton$2, { id: id, type: "button", variant: "outlined", onClick: onClick }, text));
};
var templateObject_1$8;

var StyledButton$1 = styled(Button)(templateObject_1$7 || (templateObject_1$7 = __makeTemplateObject(["\n  border-color: ", ";\n  border-width: 2px;\n  border-style: solid;\n  width: 107px;\n  height: 38px;\n  border-radius: 19px;\n  margin: 5px;\n\n  font-size: 14px;\n  color: ", ";\n  letter-spacing: 0.5px;\n  text-align: center;\n  font-weight: bold;\n  text-transform: uppercase;\n\n  &:hover {\n    border-width: 2;\n    border-color: ", ";\n    box-shadow: none;\n    background-color: ", ";\n  }\n"], ["\n  border-color: ", ";\n  border-width: 2px;\n  border-style: solid;\n  width: 107px;\n  height: 38px;\n  border-radius: 19px;\n  margin: 5px;\n\n  font-size: 14px;\n  color: ", ";\n  letter-spacing: 0.5px;\n  text-align: center;\n  font-weight: bold;\n  text-transform: uppercase;\n\n  &:hover {\n    border-width: 2;\n    border-color: ", ";\n    box-shadow: none;\n    background-color: ", ";\n  }\n"])), function (props) {
    return props.theme.palette.primaryButtonColor1.contrastText;
}, function (props) { return props.theme.palette.primaryButtonColor1.contrastText; }, function (props) { return props.theme.palette.primaryButtonColor1.light; }, function (props) {
    return props.theme.palette.primaryButtonColor1.light;
});
var OutlineButtonSave = function (_a) {
    var text = _a.text, id = _a.id, onClick = _a.onClick, props = __rest(_a, ["text", "id", "onClick"]);
    return (React__default.createElement(StyledButton$1, __assign({ id: id, type: "button", variant: "outlined", onClick: onClick }, props), text));
};
var templateObject_1$7;

var StyledButton = styled(Button)(templateObject_1$6 || (templateObject_1$6 = __makeTemplateObject(["\n  background-color: ", ";\n  color: ", ";\n  width: 107px;\n  height: 38px;\n  border-radius: 19px;\n  padding: 0;\n\n  font-size: 14px;\n  text-align: center;\n  letter-spacing: 0.5px;\n  text-transform: uppercase;\n\n  &:hover {\n    background-color: ", ";\n    box-shadow: none;\n  }\n"], ["\n  background-color: ", ";\n  color: ", ";\n  width: 107px;\n  height: 38px;\n  border-radius: 19px;\n  padding: 0;\n\n  font-size: 14px;\n  text-align: center;\n  letter-spacing: 0.5px;\n  text-transform: uppercase;\n\n  &:hover {\n    background-color: ", ";\n    box-shadow: none;\n  }\n"])), function (props) { return props.theme.palette.primaryButtonColor1.main; }, function (props) { return props.theme.palette.primaryButtonColor1.contrastText; }, function (props) {
    return props.theme.palette.primaryButtonColor1.light;
});
var SearchButton = function (_a) {
    var text = _a.text, id = _a.id, onClick = _a.onClick, props = __rest(_a, ["text", "id", "onClick"]);
    return (React__default.createElement(StyledButton, __assign({ id: id, type: "submit", variant: "contained", disableElevation: true, onClick: onClick }, props), text));
};
var templateObject_1$6;

var BasicDateRangePicker = function () {
    var _a = React.useState([null, null]), value = _a[0], setValue = _a[1];
    return (React.createElement(LocalizationProvider, { dateAdapter: AdapterDateFns },
        React.createElement(DateRangePicker, { value: value, onChange: function (newValue) {
                setValue(newValue);
            }, renderInput: function (_a, endProps) {
                var _b;
                var inputProps = _a.inputProps, startProps = __rest(_a, ["inputProps"]);
                var startValue = inputProps === null || inputProps === void 0 ? void 0 : inputProps.value;
                inputProps === null || inputProps === void 0 ? true : delete inputProps.value;
                return (React.createElement(TextField, __assign({}, startProps, { inputProps: inputProps, value: "".concat(startValue, "-").concat((_b = endProps.inputProps) === null || _b === void 0 ? void 0 : _b.value) })));
            } })));
};

var StyledContainer$4 = styled("div")(templateObject_1$5 || (templateObject_1$5 = __makeTemplateObject([""], [""])));
var StyledLabel$4 = styled("p")(templateObject_2$5 || (templateObject_2$5 = __makeTemplateObject(["\n  color: ", ";\n  font-size: ", ";\n  text-align: left;\n"], ["\n  color: ", ";\n  font-size: ", ";\n  text-align: left;\n"])), function (props) { return props.theme.typography.body1.color; }, function (props) { return props.theme.typography.body1.fontSize; });
var StyledTextField$4 = styled(TextField$1)(templateObject_3$5 || (templateObject_3$5 = __makeTemplateObject(["\n  & input::placeholder {\n    font-style: ", ";\n    font-size: ", ";\n    color: ", ";\n  }\n"], ["\n  & input::placeholder {\n    font-style: ", ";\n    font-size: ", ";\n    color: ", ";\n  }\n"])), function (props) { return props.theme.typography.caption.fontStyle; }, function (props) { return props.theme.typography.caption.fontSize; }, function (props) { return props.theme.typography.caption.color; });
function DatePickerCommon(_a) {
    var label = _a.label, id = _a.id, placeholder = _a.placeholder, helperText = _a.helperText, value = _a.value, onChange = _a.onChange, props = __rest(_a, ["label", "id", "placeholder", "helperText", "value", "onChange"]);
    return (React__default.createElement(LocalizationProvider, { dateAdapter: AdapterDateFns },
        React__default.createElement(StyledContainer$4, null,
            React__default.createElement(StyledLabel$4, null, label),
            React__default.createElement(DesktopDatePicker, __assign({}, props, { value: value, inputFormat: "dd/MM/yyyy", onChange: onChange, renderInput: function (params) { return (React__default.createElement(StyledTextField$4, __assign({ id: id, variant: "standard" }, params, { inputProps: __assign(__assign({}, params.inputProps), { placeholder: placeholder }), helperText: helperText }))); } })))));
}
var templateObject_1$5, templateObject_2$5, templateObject_3$5;

var StyledContainer$3 = styled("div")(templateObject_1$4 || (templateObject_1$4 = __makeTemplateObject([""], [""])));
var StyledLabel$3 = styled("p")(templateObject_2$4 || (templateObject_2$4 = __makeTemplateObject(["\n  color: ", ";\n  font-size: ", ";\n  text-align: left;\n"], ["\n  color: ", ";\n  font-size: ", ";\n  text-align: left;\n"])), function (props) { return props.theme.typography.body1.color; }, function (props) { return props.theme.typography.body1.fontSize; });
var StyledTextField$3 = styled(TextField$1)(templateObject_3$4 || (templateObject_3$4 = __makeTemplateObject(["\n  & input::placeholder {\n    font-style: ", ";\n    font-size: ", ";\n    color: ", ";\n  }\n"], ["\n  & input::placeholder {\n    font-style: ", ";\n    font-size: ", ";\n    color: ", ";\n  }\n"])), function (props) { return props.theme.typography.caption.fontStyle; }, function (props) { return props.theme.typography.caption.fontSize; }, function (props) { return props.theme.typography.caption.color; });
var StyledPaper = styled(Paper)(templateObject_4$3 || (templateObject_4$3 = __makeTemplateObject([""], [""])));
var DropDownAutoComplete = function (_a) {
    var label = _a.label, options = _a.options, id = _a.id, placeholder = _a.placeholder, value = _a.value, onChange = _a.onChange, props = __rest(_a, ["label", "options", "id", "placeholder", "value", "onChange"]);
    return (React__default.createElement(StyledContainer$3, null,
        React__default.createElement(StyledLabel$3, null, label),
        React__default.createElement(Autocomplete, __assign({}, props, { options: options, id: id, value: value, onChange: onChange, autoHighlight: true, PaperComponent: function (_a) {
                var children = _a.children;
                return React__default.createElement(StyledPaper, null, children);
            }, renderInput: function (params) { return (React__default.createElement(StyledTextField$3, __assign({}, params, { placeholder: placeholder, variant: "standard", InputProps: __assign({}, params.InputProps) }))); } }))));
};
var templateObject_1$4, templateObject_2$4, templateObject_3$4, templateObject_4$3;

var StyledContainer$2 = styled("div")(templateObject_1$3 || (templateObject_1$3 = __makeTemplateObject([""], [""])));
var StyledLabel$2 = styled("p")(templateObject_2$3 || (templateObject_2$3 = __makeTemplateObject(["\n  color: ", ";\n  font-size: ", ";\n  text-align: left;\n"], ["\n  color: ", ";\n  font-size: ", ";\n  text-align: left;\n"])), function (props) { return props.theme.typography.body1.color; }, function (props) { return props.theme.typography.body1.fontSize; });
var StyledTextField$2 = styled(TextField)(templateObject_3$3 || (templateObject_3$3 = __makeTemplateObject(["\n  & input::placeholder {\n    font-style: ", ";\n    font-size: ", ";\n    color: ", ";\n  }\n"], ["\n  & input::placeholder {\n    font-style: ", ";\n    font-size: ", ";\n    color: ", ";\n  }\n"])), function (props) { return props.theme.typography.caption.fontStyle; }, function (props) { return props.theme.typography.caption.fontSize; }, function (props) { return props.theme.typography.caption.color; });
var StyledSwitch = styled(Switch)(templateObject_4$2 || (templateObject_4$2 = __makeTemplateObject(["\n  width: 28px;\n  height: 16px;\n  padding: 0px;\n  display: flex;\n  &:active {\n    & .MuiSwitch-thumb {\n      width: 15px;\n    }\n    & .MuiSwitch-switchBase.Mui-checked {\n      transform: translateX(9px);\n    }\n  }\n  & .MuiSwitch-switchBase {\n    padding: 2px;\n    &.Mui-checked {\n      transform: translateX(12px);\n      color: ", ";\n      & + .MuiSwitch-track {\n        opacity: 1;\n        background-color: ", ";\n      }\n    }\n  }\n  & .MuiSwitch-thumb {\n    box-shadow: 0px 2px 4px 0px rgb(0 35 11 / 20%);\n    width: 12px;\n    height: 12px;\n    border-radius: 6px;\n    transition: ", ";\n  }\n  & .MuiSwitch-track {\n    border-radius: 8px;\n    background-color: ", ";\n    box-sizing: border-box;\n  }\n"], ["\n  width: 28px;\n  height: 16px;\n  padding: 0px;\n  display: flex;\n  &:active {\n    & .MuiSwitch-thumb {\n      width: 15px;\n    }\n    & .MuiSwitch-switchBase.Mui-checked {\n      transform: translateX(9px);\n    }\n  }\n  & .MuiSwitch-switchBase {\n    padding: 2px;\n    &.Mui-checked {\n      transform: translateX(12px);\n      color: ", ";\n      & + .MuiSwitch-track {\n        opacity: 1;\n        background-color: ", ";\n      }\n    }\n  }\n  & .MuiSwitch-thumb {\n    box-shadow: 0px 2px 4px 0px rgb(0 35 11 / 20%);\n    width: 12px;\n    height: 12px;\n    border-radius: 6px;\n    transition: ", ";\n  }\n  & .MuiSwitch-track {\n    border-radius: 8px;\n    background-color: ", ";\n    box-sizing: border-box;\n  }\n"])), function (props) { return props.theme.palette.background.paper; }, function (props) { return props.theme.palette.primary.main; }, function (props) {
    return props.theme.transitions.create(["width"], {
        duration: 200,
    });
}, function (props) { return props.theme.palette.info.light; });
var StyledText = styled("div")(templateObject_5$1 || (templateObject_5$1 = __makeTemplateObject(["\n  margin-left: 10px;\n"], ["\n  margin-left: 10px;\n"])));
function DropDownWithSwitch(_a) {
    var id = _a.id, options = _a.options, placeholder = _a.placeholder, label = _a.label, value = _a.value, onChange = _a.onChange, props = __rest(_a, ["id", "options", "placeholder", "label", "value", "onChange"]);
    return (React.createElement(StyledContainer$2, null,
        React.createElement(StyledLabel$2, null, label),
        React.createElement(Autocomplete$1, __assign({}, props, { multiple: true, id: id, options: options, value: value, onChange: onChange, disableCloseOnSelect: true, renderOption: function (props, option, _a) {
                var selected = _a.selected;
                return (React.createElement("li", __assign({}, props),
                    React.createElement(StyledSwitch, { checked: selected, name: option }),
                    React.createElement(StyledText, null, option)));
            }, style: { width: 500 }, renderInput: function (params) { return (React.createElement(StyledTextField$2, __assign({}, params, { variant: "standard", placeholder: placeholder }))); } }))));
}
var templateObject_1$3, templateObject_2$3, templateObject_3$3, templateObject_4$2, templateObject_5$1;

var Search = styled("div")(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["\n  border-radius: 20px;\n  background-color: ", ";\n  width: 183px;\n  height: 38px;\n  border-color: ", ";\n  border-width: 1px;\n  border-style: solid;\n  display: flex;\n  align-items: center;\n  padding: 10px;\n"], ["\n  border-radius: 20px;\n  background-color: ", ";\n  width: 183px;\n  height: 38px;\n  border-color: ", ";\n  border-width: 1px;\n  border-style: solid;\n  display: flex;\n  align-items: center;\n  padding: 10px;\n"])), function (props) { return props.theme.palette.background.paper; }, function (props) { return props.theme.palette.info.light; });
var SearchIconWrapper = styled("div")(templateObject_2$2 || (templateObject_2$2 = __makeTemplateObject(["\n  height: 100%;\n  pointer-events: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: ", ";\n"], ["\n  height: 100%;\n  pointer-events: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: ", ";\n"])), function (props) { return props.theme.palette.text.secondary; });
var StyledTextField$1 = styled(TextField$1)(templateObject_3$2 || (templateObject_3$2 = __makeTemplateObject(["\n  font-size: 16px;\n  text-align: left;\n  & input::placeholder {\n    font-style: italic;\n    font-size: 16px;\n    color: ", ";\n  }\n"], ["\n  font-size: 16px;\n  text-align: left;\n  & input::placeholder {\n    font-style: italic;\n    font-size: 16px;\n    color: ", ";\n  }\n"])), function (props) { return props.theme.palette.text.secondary; });
var CloseIconWrapper = styled(IconButton)(templateObject_4$1 || (templateObject_4$1 = __makeTemplateObject(["\n  height: 100%;\n  width: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: ", ";\n"], ["\n  height: 100%;\n  width: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: ", ";\n"])), function (props) { return props.theme.palette.text.secondary; });
var OutlineSearchRec17 = function (_a) {
    var name = _a.name, id = _a.id, placeholder = _a.placeholder, props = __rest(_a, ["name", "id", "placeholder"]);
    return (React__default.createElement(Search, null,
        React__default.createElement(SearchIconWrapper, null,
            React__default.createElement(SearchIcon, { sx: { fontSize: "1.4rem" } })),
        React__default.createElement(StyledTextField$1, __assign({ name: name, id: id, placeholder: placeholder, inputProps: { "aria-label": "search" }, variant: "standard" }, props)),
        React__default.createElement(CloseIconWrapper, null,
            React__default.createElement(CloseIcon, { sx: { fontSize: "0.9rem" } }))));
};
var templateObject_1$2, templateObject_2$2, templateObject_3$2, templateObject_4$1;

var StyledContainer$1 = styled("div")(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject([""], [""])));
var StyledLabel$1 = styled("p")(templateObject_2$1 || (templateObject_2$1 = __makeTemplateObject(["\n  color: ", ";\n  font-size: ", ";\n  text-align: left;\n  margin-bottom: 8px; //temp style\n"], ["\n  color: ", ";\n  font-size: ", ";\n  text-align: left;\n  margin-bottom: 8px; //temp style\n"])), function (props) { return props.theme.typography.body1.color; }, function (props) { return props.theme.typography.body1.fontSize; });
var StyledPlaceHolder = styled("div")(templateObject_3$1 || (templateObject_3$1 = __makeTemplateObject(["\n  font-style: ", ";\n  color: ", ";\n  font-size: ", ";\n  opacity: 0.4;\n"], ["\n  font-style: ", ";\n  color: ", ";\n  font-size: ", ";\n  opacity: 0.4;\n"])), function (props) { return props.theme.typography.caption.fontStyle; }, function (props) { return props.theme.typography.caption.color; }, function (props) { return props.theme.typography.caption.fontSize; });
var StyledError = styled("div")(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  color: ", ";\n"], ["\n  color: ", ";\n"])), function (props) { return props.theme.palette.warning.main; });
var StyledMenuItem = styled(MenuItem)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  &:focus {\n    color: ", ";\n    font-weight: bold;\n  }\n"], ["\n  &:focus {\n    color: ", ";\n    font-weight: bold;\n  }\n"])), function (props) { return props.theme.palette.primary.main; });
var SelectField = function (_a) {
    var label = _a.label, name = _a.name, id = _a.id, data = _a.data, placeholder = _a.placeholder, value = _a.value, onChange = _a.onChange, error = _a.error, props = __rest(_a, ["label", "name", "id", "data", "placeholder", "value", "onChange", "error"]);
    return (React__default.createElement(StyledContainer$1, null,
        React__default.createElement(StyledLabel$1, null, label),
        React__default.createElement(Select, __assign({}, props, { displayEmpty: true, id: id, name: name, variant: "standard", value: value, onChange: onChange, sx: { width: "150px" }, renderValue: value !== ""
                ? undefined
                : function () { return React__default.createElement(StyledPlaceHolder, null, placeholder); } }), data.map(function (item, index) {
            return (React__default.createElement(StyledMenuItem, { key: index, value: item.value }, item.name));
        })),
        error ? React__default.createElement(StyledError, null, error) : null));
};
var templateObject_1$1, templateObject_2$1, templateObject_3$1, templateObject_4, templateObject_5;

var StyledContainer = styled("div")(templateObject_1 || (templateObject_1 = __makeTemplateObject([""], [""])));
var StyledLabel = styled("p")(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  color: ", ";\n  background-color: ", ";\n  font-size: ", ";\n  text-align: left;\n"], ["\n  color: ", ";\n  background-color: ", ";\n  font-size: ", ";\n  text-align: left;\n"])), function (props) { return props.theme.typography.body1.color; }, function (props) { return props.theme.palette.primaryButtonColor1.main; }, function (props) { return props.theme.typography.body1.fontSize; });
var StyledTextField = styled(TextField$1)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  & input::placeholder {\n    font-style: ", ";\n    color: ", ";\n    font-size: ", ";\n  }\n"], ["\n  & input::placeholder {\n    font-style: ", ";\n    color: ", ";\n    font-size: ", ";\n  }\n"])), function (props) { return props.theme.typography.caption.fontStyle; }, function (props) { return props.theme.typography.caption.color; }, function (props) { return props.theme.typography.caption.fontSize; });
var TextFields = function (_a) {
    var name = _a.name, id = _a.id, label = _a.label, placeholder = _a.placeholder, value = _a.value, onChange = _a.onChange, error = _a.error, helperText = _a.helperText, props = __rest(_a, ["name", "id", "label", "placeholder", "value", "onChange", "error", "helperText"]);
    return (React__default.createElement(StyledContainer, null,
        React__default.createElement(StyledLabel, null, label),
        React__default.createElement(StyledTextField, __assign({}, props, { placeholder: placeholder, id: id, name: name, value: value, onChange: onChange, error: error, helperText: helperText, 
            // label={label ? label : undefined}
            variant: "standard" }))));
};
var templateObject_1, templateObject_2, templateObject_3;

var trusteePortalTheme = createTheme({
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

var BpIcon = styled$1("span")(function (_a) {
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
var BpCheckedIcon = styled$1(BpIcon)({
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
    return (React.createElement(Radio, __assign({ sx: {
            "&:hover": {
                bgcolor: "transparent",
            },
        }, disableRipple: true, color: "default", checkedIcon: React.createElement(BpCheckedIcon, null), icon: React.createElement(BpIcon, null) }, props)));
}

var adminPortalTheme = createTheme({
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

var mpfaPortalTheme = createTheme({
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

export { Accordion, ArrowButtonMPFA, ArrowButtonTrustee, BasicDateRangePicker, ButtonCTAWithIcon, ButtonCom371, ButtonGeneralCTA, ClearButton, DashBoardButton, DatePickerCommon, DropDownAutoComplete, DropDownWithSwitch, OutlineButtonClear, OutlineButtonRec107, OutlineButtonSave, OutlineSearchRec17, RadioButton, SearchButton, SelectField, TextFields as TextField, themes };
//# sourceMappingURL=index.es.js.map
