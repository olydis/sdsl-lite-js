import * as bind from "./cpp/build/bind";

// bind.func();
function toCharArray(s: string): number[]
{
    const res: number[] = new Array(s.length);
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

function sa(text: string)
{
    const csa = bind.Csa.CreateFromString(text);
    const result: number[] = new Array(csa.SaSize());
    for (let i = 0; i < result.length; ++i) 
        result[i] = csa.SaGet(i);
    csa.delete();
    return result;
}

const input = "Hello KIT";
const output = sa(input);

console.log(input);
console.log(output);