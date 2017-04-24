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
function toVector(a) {
    var res = new bind.VectorInt();
    for (var _i = 0, a_1 = a; _i < a_1.length; _i++) {
        var x = a_1[_i];
        res.push_back(x);
    }
    return res;
}
function sa(text) {
    var saBuilder = new bind.SaBuilder();
    saBuilder.text = text;
    //const textArray = toCharArray(text);
    //saBuilder.text.resize(textArray.size);
    //for (let i = 0; i < textArray.size; ++i) 
    //    saBuilder.text.push_back(textArray[i]);
    saBuilder.Build();
    var result = [];
    for (var i = 0; i < saBuilder.sa.size(); ++i)
        result.push(saBuilder.sa.get(i));
    saBuilder["delete"]();
    return result;
}
var input = "Hello KIT";
var output = sa(input);
console.log(input);
console.log(output);
