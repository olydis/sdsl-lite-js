import * as bind from "./cpp/build/bind";

export const Csa: any = bind.Csa;

// bind.func();
function toCharArray(s: string): number[]
{
    const res: number[] = new Array(s.length);
    for (let i = 0; i < s.length; ++i) 
        res[i] = s.charCodeAt(i);
    return res;
}

// const text = "Hello KIT";

// function GetArray<T>(size: number, get: (index: number) => T): T[]
// {
//     const result: T[] = new Array(size);
//     for (let i = 0; i < size; ++i) result[i] = get(i);
//     return result;
// }

// const csa = bind.Csa.CreateFromString(text);

// const size = csa.Size();
// const sa = GetArray<number>(size, i => csa.Sa(i));
// const lf = GetArray<number>(size, i => csa.Lf(i));
// const isa = GetArray<number>(size, i => csa.Isa(i));
// const psi = GetArray<number>(size, i => csa.Psi(i));
// const bwt = GetArray<string>(size, i => String.fromCharCode(csa.Bwt(i)));
// csa.delete();

// console.log(text);
// console.log(sa);
// console.log(lf);
// console.log(isa);
// console.log(psi);
// console.log(bwt);


// polyfill
declare var define: (req: void[], res: () => any) => void;
declare var exports: any;
if (typeof define !== "undefined") define([], () => exports);