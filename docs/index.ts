import { Csa } from "./lib/index";
import * as $ from "jquery";

function GetArray<T>(size: number, get: (index: number) => T): T[]
{
    const result: T[] = new Array(size);
    for (let i = 0; i < size; ++i) result[i] = get(i);
    return result;
}

const nullString = "$";

function next(elem: JQuery, query: string): JQuery {
    if (elem.length === 0) throw "not found";
    const result = elem.next(query);
    return result.length > 0 ? result : next(elem.parent(), query);
}

$(() => {
    const iText = $("#input1");
    const oCsaData = next(iText, "table");
    const update = () => {
        const text = iText.val();

        const csa = Csa.CreateFromString(text);
        const size = csa.Size();
        const sa = GetArray<number>(size, i => csa.Sa(i));
        const lf = GetArray<number>(size, i => csa.Lf(i));
        const isa = GetArray<number>(size, i => csa.Isa(i));
        const psi = GetArray<number>(size, i => csa.Psi(i));
        const bwt = GetArray<string>(size, i => String.fromCharCode(csa.Bwt(i) || nullString.charCodeAt(0)));
        csa.delete();

        oCsaData.children().remove();
        oCsaData.append($("<tr>")
            .append($("<th>").text("i"))
            .append($("<th>").text("Text"))
            .append($("<th>").text("SA"))
            .append($("<th>").text("LF"))
            .append($("<th>").text("ISA"))
            .append($("<th>").text("PSI"))
            .append($("<th>").text("BWT")));
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
    };
    iText.on("input", update);
    update();
});