import * as bind from "./cpp/build/bind";

// bind.func();
function toCharArray(s)
{
    const res = new Array(s.length);
    for (let i = 0; i < s.length; ++i) 
        res[i] = s.charCodeAt(i);
    return res;
}
function toVector(a)
{
    const res = new bind.VectorInt();
    for (var x of a) res.push_back(x);
    return res;
}

function sa(text)
{
    const saBuilder = new bind.SaBuilder();
    saBuilder.text = text;
    //const textArray = toCharArray(text);
    //saBuilder.text.resize(textArray.size);
    //for (let i = 0; i < textArray.size; ++i) 
    //    saBuilder.text.push_back(textArray[i]);
    saBuilder.Build();
    const result = [];
    for (let i = 0; i < saBuilder.sa.size(); ++i) 
        result.push(saBuilder.sa.get(i));
    saBuilder.delete();
    return result;
}

const input = "Hello KIT";
const output = sa(input);

console.log(input);
console.log(output);