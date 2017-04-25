"use strict";
exports.__esModule = true;
var bind = require("./cpp/build/bind");
// bind.func();
function toCharArray(s) {
    var res = new Array(s.length);
    for (var i = 0; i < s.length; ++i)
        res[i] = s.charCodeAt(i);
    return res;
}
// function toVector(a)
// {
//     const res = new bind.VectorInt();
//     for (var x of a) res.push_back(x);
//     return res;
// }
function sa(text) {
    var csa = bind.Csa.CreateFromString(text);
    var result = new Array(csa.SaSize());
    for (var i = 0; i < result.length; ++i)
        result[i] = csa.SaGet(i);
    csa["delete"]();
    return result;
}
var input = "Hello KIT";
var output = sa(input);
console.log(input);
console.log(output);
