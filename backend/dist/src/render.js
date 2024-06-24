"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var server_1 = __importDefault(require("react-dom/server"));
var client_1 = __importDefault(require("./client"));
var appMarkup = server_1.default.renderToString(react_1.default.createElement(client_1.default, null));
exports.default = appMarkup;
