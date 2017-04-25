import { Csa } from "../../index";
import * as $ from "jquery";

function GetArray<T>(size: number, get: (index: number) => T): T[]
{
    const result: T[] = new Array(size);
    for (let i = 0; i < size; ++i) result[i] = get(i);
    return result;
}

const nullString = "$";

$(() => {
    const iText = $("#iText");
    const oCsaData = $("#oCsaData");
    iText.change(() => {
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