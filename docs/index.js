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
    const update = () => {
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
            .append($("<th>").text("i"))
            .append($("<th>").text("Text"))
            .append($("<th>").text("ISA"))
            .append($("<th>").text("LF"))
            .append($("<th>").text("SA"))
            .append($("<th>").text("PSI"))
            .append($("<th>").text("BWT")));
        for (let i = 0; i < size; ++i) {
            oCsaData.append($("<tr>")
                .append($("<td>").text(`${i}`))
                .append($("<td>").addClass(`i${i}`).text(text.charAt(i) || nullString))
                .append($("<td>").addClass(`i${i}`).text(isa[i]))
                .append($("<td>").addClass(`i${sa[lf[i]]}`).text(lf[i]))
                .append($("<td>").addClass(`i${sa[i]}`).text(sa[i]))
                .append($("<td>").addClass(`i${sa[i]}`).text(psi[i]))
                .append($("<td>").addClass(`i${sa[psi[i]]}`).text(bwt[i])));
        }
        const reset = () => oCsaData.find(".hover").removeClass("hover");
        for (let i = 0; i < size; ++i) {
            const elems = oCsaData.find(`.i${i}`);
            elems.mouseenter(() => { reset(); elems.addClass("hover"); });
            elems.mouseleave(() => { reset(); });
        }
    };
    iText.on("input", update);
    update();
});
