"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var App = function () {
    var clickHandler = function () {
        console.log('Button clicked!');
    };
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("h1", null, "Hello, SSR React with Express!"),
        react_1.default.createElement("p", null, "This is rendered on the server."),
        react_1.default.createElement("button", { onClick: clickHandler }, "Clik me!")));
};
exports.default = App;
