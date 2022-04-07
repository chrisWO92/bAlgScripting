let ourRegex = /^\s\s\s\s\w/;
let testStr1 = `  Hola`;
let testStr2 = `    Hola`;
let testStr3 = `Hola`;
console.log(ourRegex.test(testStr1));
console.log(ourRegex.test(testStr2));
console.log(ourRegex.test(testStr3));


const codeJSElement1 = `
function reverseString(str) {
    let reverStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
      reverStr += str[i];
    }
    return reverStr.toString();
  }

convertToF(30);
`.split("\n");

console.log(codeJSElement1[2], codeJSElement1[2].length, ourRegex.test(codeJSElement1[2]));
console.log(codeJSElement1[2].split("").join(""));