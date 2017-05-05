"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./lib/index");
const $ = require("jquery");
function GetArray(size, get) {
    const result = new Array(size);
    for (let i = 0; i < size; ++i)
        result[i] = get(i);
    return result;
}
const nullString = "$";
function next(elem, query) {
    if (elem.length === 0)
        throw "not found";
    const result = elem.next(query);
    return result.length > 0 ? result : next(elem.parent(), query);
}
$(() => {
    const iText = $("#input1");
    const oCsaData = next(iText, "table");
    iText.change(() => {
        const text = iText.val();
        const csa = index_1.Csa.CreateFromString(text);
        const size = csa.Size();
        const sa = GetArray(size, i => csa.Sa(i));
        const lf = GetArray(size, i => csa.Lf(i));
        const isa = GetArray(size, i => csa.Isa(i));
        const psi = GetArray(size, i => csa.Psi(i));
        const bwt = GetArray(size, i => String.fromCharCode(csa.Bwt(i) || nullString.charCodeAt(0)));
        csa.delete();
        oCsaData.children().remove();
        oCsaData.append($("<tr>")
            .append($("<td>").text("i"))
            .append($("<td>").text("Text"))
            .append($("<td>").text("SA"))
            .append($("<td>").text("LF"))
            .append($("<td>").text("ISA"))
            .append($("<td>").text("PSI"))
            .append($("<td>").text("BWT")));
        for (let i = 0; i < size; ++i) {
            oCsaData.append($("<tr>")
                .append($("<td>").text(`${i}`))
                .append($("<td>").text(text.charAt(i) || nullString))
                .append($("<td>").text(sa[i]))
                .append($("<td>").text(lf[i]))
                .append($("<td>").text(isa[i]))
                .append($("<td>").text(psi[i]))
                .append($("<td>").text(bwt[i])));
        }
    });
});
