import {
  convertToF as convertToF,
  reverseString as reverseString,
  factorialize as factorialize,
  findLongestWordLength as findLongestWordLength,
  largestOfFour as largestOfFour,
  confirmEnding as confirmEnding,
  repeatStringNumTimes as repeatStringNumTimes,
  truncateString as truncateString,
  findElement as findElement,
  booWho as booWho,
  titleCase as titleCase,
  frankenSplice as frankenSplice,
  bouncer as bouncer,
  getIndexToIns as getIndexToIns,
  mutation as mutation,
  chunkArrayInGroups as chunkArrayInGroups,
} from "/javaScript/modules/functions.js";

function createExerciseCodes() {
  //Exercise 1

  const codeJSElement1 = `
function convertToF(celsius) {
  let fahrenheit = celsius*(9/5) + 32;
  return fahrenheit;
}

convertToF(30);
//${convertToF(30)}
`;

  //Exercise 2

  const codeJSElement2 = `
function reverseString(str) {
  let reverStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverStr += str[i];
  }
  return reverStr.toString();
}

reverseString("hello");
//${reverseString("hello")}
`;

  //Exercise 3

  const codeJSElement3 = `
function factorialize(num) {
  if (num <= 0) {
    return 1;
  }
  else {
    return factorialize(num - 1) * num;
  }
}

factorialize(5);
//${factorialize(5)}
`;

  //Exercise 4

  const codeJSElement4 = `
function findLongestWordLength(str) {
  let arr = str.split(" ");
  let arrLengths = [];
  for (let i of arr) {
    arrLengths.push(i.length);
  }
  return Math.max(...arrLengths);
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
//${findLongestWordLength("The quick brown fox jumped over the lazy dog")}
`;

  //Exercise 5

  const codeJSElement5 = `
function findLongestWordLength(str) {
  let arr = str.split(" ");
  let arrLengths = [];
  for (let i of arr) {
    arrLengths.push(i.length);
  }
  return Math.max(...arrLengths);
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
//${largestOfFour([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1],
])}
`;

  //Exercise 6

  const codeJSElement6 = `
function confirmEnding(str, target) {
  let lastElement = str.slice(str.length - target.length, str.length);
  if (lastElement == target) {
    return true;
  } else {
    return false;
  }
}

confirmEnding("Bastian", "n");
//${confirmEnding("Bastian", "n")}
`;

  //Exercise 7

  const codeJSElement7 = `
function repeatStringNumTimes(str, num) {
  let newStr = "";
  for (let i = 0; i < num; i++) {
    newStr += str;
  }
  return newStr;
  }

  repeatStringNumTimes("*", 3);
  //${repeatStringNumTimes("*", 3)}
  `;

  //Exercise 8

  const codeJSElement8 = `
function truncateString(str, num) {
  if (str.length > num) {
    let arrStr = str.split("");
    let newArr = arrStr.splice(0, num);
    let newStr = "";
    for (let i of newArr) {
      newStr += i;
    }
    return newStr + "...";
  }
  else {
    return str;
  }
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);
//${truncateString("A-tisket a-tasket A green and yellow basket", 8)}
`;

  //Exercise 9

  const codeJSElement9 = `
function findElement(arr, func) {
 for (let i of arr){
    if (func(i)){
      return i;
    }
  }
  return undefined;
}

findElement([1, 2, 3, 4], num => num % 2 === 0);
//${findElement([1, 2, 3, 4], (num) => num % 2 === 0)}
`;

  //Exercise 10

  const codeJSElement10 = `
function booWho(bool) {
  if (typeof bool === "boolean"){
    return true;
  }else {
    return false;
  }
}

booWho(null);
//${booWho(null)}
`;

  //Exercise 11

  const codeJSElement11 = `
function titleCase(str) {
  let newStr = "";
  let arrStr = str.split(" ");
  for (let i of arrStr){
    if (arrStr.indexOf(i) < (arrStr.length - 1)) {
      newStr += i.charAt(0).toUpperCase() + i.slice(1).toLowerCase() + " ";
    }
    else if (arrStr.indexOf(i) == (arrStr.length - 1)){
      newStr += i.charAt(0).toUpperCase() + i.slice(1).toLowerCase();
    }
    console.log(newStr, newStr.length);
  }
  return newStr;
}

titleCase("I'm a little tea pot");
//${titleCase("I'm a little tea pot")}
`;

  //Exercise 12

  const codeJSElement12 = `
function frankenSplice(arr1, arr2, n) {
  let newArr = [];
  if (arr2.length  == n){
    newArr.push(...arr2, ...arr1);
  }else{
    newArr.push(...arr2.slice(0, n), ...arr1, ...arr2.slice(n, (arr2.length)))
  }
  return newArr;
}

frankenSplice([1, 2, 3], [4, 5], 1);
//${frankenSplice([1, 2, 3], [4, 5], 1)}
`;

  //Exercise 13

  const codeJSElement13 = `
function bouncer(arr) {
  let newArr = [];
  for (let i of arr){
    if ((i)){
      newArr.push(i);
    }
  }
  return newArr;
}

bouncer([7, "ate", "", false, 9]);
//${bouncer([7, "ate", "", false, 9])}
`;

  //Exercise14

  const codeJSElement14 = `
function getIndexToIns(arr, num) {
  arr.push(num);
  let sortedArr = arr.sort(function(a, b){return a - b});
  return sortedArr.indexOf(num);
}

getIndexToIns([40, 60, 70, 75, 90, 15, 3, 5], 50);
//${getIndexToIns([40, 60, 70, 75, 90, 15, 3, 5], 50)}
`;

  //Exercise 15

  const codeJSElement15 = `
function mutation(arr) {
  let output = true;
  for (let i of arr[1].toLowerCase()){
    if (arr[0].toLowerCase().indexOf(i) == -1){
      output = false;
      return output;
    }
  }
  return output;
}

mutation(["hello", "hey"]);
//${mutation(["hello", "hey"])}
`;

  //Exercise 16

  const codeJSElement16 = `
function chunkArrayInGroups(arr, size) {
  let globalCont = 0;
  let localCont = 0;
  let totalArr = [];
  let subArr = [];
  while (globalCont < arr.length){
    while (localCont < size) {
      if (arr[globalCont] === undefined){
        totalArr.push(subArr);
        return totalArr;
      }else {
        subArr.push(arr[globalCont]);
        globalCont++;
        localCont++;
      }
    }
    totalArr.push(subArr);
    localCont = 0;
    subArr = [];
  }
  return totalArr; 
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
//${chunkArrayInGroups(["a", "b", "c", "d"], 2)}
`;

  let codeList = [
    codeJSElement1,
    codeJSElement2,
    codeJSElement3,
    codeJSElement4,
    codeJSElement5,
    codeJSElement6,
    codeJSElement7,
    codeJSElement8,
    codeJSElement9,
    codeJSElement10,
    codeJSElement11,
    codeJSElement12,
    codeJSElement13,
    codeJSElement14,
    codeJSElement15,
    codeJSElement16,
  ];

  return codeList;
}

let codeList = createExerciseCodes();
console.log(codeList[0].split("\n"));

function addElement(tag, id, parentElement) {
  // crea un nuevo div
  // y añade contenido
  let newDiv = document.createElement(tag);
  newDiv.setAttribute("id", id);
  newDiv.classList.add("text-primary");
  //var newContent = document.createTextNode(text);
  //newDiv.appendChild(newContent); //añade texto al div creado.

  // añade el elemento creado y su contenido al DOM
  let currentDiv = document.getElementById(parentElement);
  currentDiv.appendChild(newDiv);

  return newDiv;
}

const createCodeElement = (arr, id, parentElement) => {
  let divElement = addElement("div", id, parentElement);
  divElement.classList.add("bg-light", "p-3", "mb-3", "rounded");
  let codeElement = document.createElement("code");
  for (let line of arr.split("\n")) {
    //let codeLine = document.createElement("p");
    let codeLine = document.createElement("span");
    codeLine.setAttribute("white-space", "pre-wrap");
    codeLine.innerHTML = `${line}<br>`;
    codeLine.classList.add("d-block", "text-info");
    if (/^\s\s(\w|\W)/.test(line)) {
      codeLine.classList.add("ms-2");
    }
    if (/^\s\s\s\s(\w|\W)/.test(line)) {
      codeLine.classList.add("ms-4");
    }
    if (/^\s\s\s\s\s\s(\w|\W)/.test(line)) {
      codeLine.classList.add("ms-5");
    }
    if (/^\s\s\s\s\s\s\s\s(\w|\W)/.test(line)) {
      codeLine.classList.add("ms-5","ps-3");
    }
    codeElement.appendChild(codeLine);
  }
  divElement.appendChild(codeElement);
  let currentDiv = document.getElementById(parentElement);
  currentDiv.appendChild(divElement);
};

const main = (codeList) => {
  for (let i = 0; i < codeList.length; i++) {
    createCodeElement(codeList[i], `code-${i + 1}`, `col-${i + 1}`);
  }
};

main(codeList);
