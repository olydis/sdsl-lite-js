"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bind = require("./bind");
exports.Csa = bind.Csa;
// bind.func();
function toCharArray(s) {
    const res = new Array(s.length);
    for (let i = 0; i < s.length; ++i)
        res[i] = s.charCodeAt(i);
    return res;
}
if (typeof define !== "undefined")
    define([], () => exports);
