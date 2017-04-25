"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bind = require("./cpp/build/bind");
exports.Csa = bind.Csa;
// bind.func();
function toCharArray(s) {
    const res = new Array(s.length);
    for (let i = 0; i < s.length; ++i)
        res[i] = s.charCodeAt(i);
    return res;
}
// function toVector(a)
// {
//     const res = new bind.VectorInt();
//     for (var x of a) res.push_back(x);
//     return res;
// }
const text = "Hello KIT";
function GetArray(size, get) {
    const result = new Array(size);
    for (let i = 0; i < size; ++i)
        result[i] = get(i);
    return result;
}
const csa = bind.Csa.CreateFromString(text);
const size = csa.Size();
const sa = GetArray(size, i => csa.Sa(i));
const lf = GetArray(size, i => csa.Lf(i));
const isa = GetArray(size, i => csa.Isa(i));
const psi = GetArray(size, i => csa.Psi(i));
const bwt = GetArray(size, i => String.fromCharCode(csa.Bwt(i)));
csa.delete();
console.log(text);
console.log(sa);
console.log(lf);
console.log(isa);
console.log(psi);
console.log(bwt);
