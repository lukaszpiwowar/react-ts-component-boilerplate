'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var styled = _interopDefault(require('styled-components'));

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}

var Wrapper = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  & {\n    width: 100%;\n    color: black;\n    background-color: #FFFFFF;\n    border: solid 1px #E0E0E0;    \n  }\n"], ["\n  & {\n    width: 100%;\n    color: black;\n    background-color: #FFFFFF;\n    border: solid 1px #E0E0E0;    \n  }\n"])));
var StyledRow = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  & {\n    cursor: pointer;\n    width: 100%;\n    border-bottom: solid 1px #E0E0E0;\n    min-height: 60px;\n  }\n  &.active{\n    background-color: #F5F5F5;\n  }\n  &:last-child {\n    border-bottom: none;\n    padding-bottom: 5px;\n  }\n"], ["\n  & {\n    cursor: pointer;\n    width: 100%;\n    border-bottom: solid 1px #E0E0E0;\n    min-height: 60px;\n  }\n  &.active{\n    background-color: #F5F5F5;\n  }\n  &:last-child {\n    border-bottom: none;\n    padding-bottom: 5px;\n  }\n"])));
var Pos = styled.span(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  & {\n    display: inline-block;\n    padding: 6px 9px;\n    max-width: 30px;\n    max-height: 30px;\n    background: #F5F5F5;\n    border: solid 1px #E0E0E0;\n    color: rgba(0,0,0,0.87);\n    font-size: 14px;\n    font-weight: bold;\n    letter-spacing: 0;\n    line-height: 16px;\n    text-align: center;\n    border-radius: 15px;\n    margin: 15px 18px 0px 21px;\n  }\n"], ["\n  & {\n    display: inline-block;\n    padding: 6px 9px;\n    max-width: 30px;\n    max-height: 30px;\n    background: #F5F5F5;\n    border: solid 1px #E0E0E0;\n    color: rgba(0,0,0,0.87);\n    font-size: 14px;\n    font-weight: bold;\n    letter-spacing: 0;\n    line-height: 16px;\n    text-align: center;\n    border-radius: 15px;\n    margin: 15px 18px 0px 21px;\n  }\n"])));
var ArrowWrapper = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  width: 24px;\n  height: 24px;\n  float: right;\n  display: inline-block;\n  margin: 19px 16px 17px;\n  text-align: center;\n"], ["\n  width: 24px;\n  height: 24px;\n  float: right;\n  display: inline-block;\n  margin: 19px 16px 17px;\n  text-align: center;\n"])));
var Direction;
(function (Direction) {
    Direction["up"] = "up";
    Direction["down"] = "down";
    Direction["left"] = "left";
    Direction["right"] = "right";
})(Direction || (Direction = {}));
var Arrow = function (_a) {
    var direction = _a.direction;
    var directionMap = {
        up: '270deg',
        left: '180deg',
        right: '0deg',
        down: '90deg'
    };
    var dir = directionMap[direction];
    return (React__default.createElement(ArrowWrapper, null,
        React__default.createElement("svg", { style: { marginTop: '5px', transform: "rotate(" + dir + ")" }, width: "15px", height: "15px", viewBox: "0 0 6 10", version: "1.1" },
            React__default.createElement("title", null, "97F2DD0D-79FD-42EA-B576-C2C94DE82C80"),
            React__default.createElement("desc", null, "Created with sketchtool."),
            React__default.createElement("g", { id: "Page-1", stroke: "none", "stroke-width": "1", fill: "none", "fill-rule": "evenodd" },
                React__default.createElement("g", { id: "01_Overview_Goldmie", transform: "translate(-571.000000, -187.000000)" },
                    React__default.createElement("g", { id: "breadcrumbs", transform: "translate(504.000000, 167.000000)" },
                        React__default.createElement("g", { id: "arrow_right", transform: "translate(61.000000, 16.000000)" },
                            React__default.createElement("polygon", { id: "Path", points: "18 0 0 0 0 18 18 18" }),
                            React__default.createElement("polygon", { id: "arrow_x5F_right_1_", "fill-opacity": "1", fill: "#2F82FB", "fill-rule": "nonzero", points: "7.5 13.5 12 9 7.5 4.5 6.45 5.55 9.9 9 6.45 12.45" }))))))));
};
var Question = styled.span(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  color: rgba(0,0,0,0.87);\n  font-size: 18px;\n  font-weight: bold;\n  letter-spacing: 0;\n  line-height: 21px;\n"], ["\n  color: rgba(0,0,0,0.87);\n  font-size: 18px;\n  font-weight: bold;\n  letter-spacing: 0;\n  line-height: 21px;\n"])));
var Answer = styled.p(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  color: rgba(0,0,0,0.87);\n  font-size: 16px;\n  letter-spacing: 0;\n  line-height: 22px;\n  margin: 7px 59px 20px 66px;\n  text-align: justify;\n"], ["\n  color: rgba(0,0,0,0.87);\n  font-size: 16px;\n  letter-spacing: 0;\n  line-height: 22px;\n  margin: 7px 59px 20px 66px;\n  text-align: justify;\n"])));
var Row = function (_a) {
    var item = _a.item;
    var DOWN = 'down';
    var UP = 'up';
    var _b = React.useState(false), active = _b[0], setActive = _b[1];
    var toggle = function () { setActive(!active); };
    return (React__default.createElement(StyledRow, { onClick: toggle, className: active ? 'active' : '' },
        React__default.createElement(Pos, null, item.pos),
        React__default.createElement(Question, null, item.question),
        React__default.createElement(Arrow, { direction: active ? UP : DOWN }),
        active ?
            React__default.createElement(Answer, null, item.answer) : null));
};
var FaqComponent = function (_a) {
    var data = _a.data;
    return (React__default.createElement(Wrapper, null, data.map(function (item, key) { return (React__default.createElement(Row, { item: item, key: key })); })));
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;

exports.FaqComponent = FaqComponent;
