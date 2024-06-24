"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var render_1 = __importDefault(require("./src/render"));
var app = (0, express_1.default)();
var PORT = process.env.PORT || 3004;
// Serve static files from the 'dist' directory
app.use(express_1.default.static(path_1.default.resolve(__dirname, '../dist')));
// Serve SSR of React components
app.get('*', function (req, res) {
    res.send("\n    <!DOCTYPE html>\n    <html>\n      <head>\n        <title>SSR React with Express</title>\n        <script src=\"/bundle.js\" defer></script>\n      </head>\n      <body>\n        <div id=\"app\">".concat(render_1.default, "</div>\n      </body>\n    </html>\n  "));
});
// Start the server
app.listen(PORT, function () {
    console.log("Server is listening on http://localhost:".concat(PORT));
});
