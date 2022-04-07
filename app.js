
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
  let codeElement = addElement('div', id, parentElement);
  codeElement.classList.add("bg-light", "p-3", "mb-3", "rounded");

  for (line of arr) {
    //let codeLine = document.createElement("p");
    let codeLine = document.createElement('code');
    codeLine.innerHTML = `<span>${line}</span><br>`;
    codeLine.classList.add("d-block", "text-info");
    codeElement.appendChild(codeLine);
  }

  let currentDiv = document.getElementById(parentElement);
  currentDiv.appendChild(codeElement);

}

const createCodeElement2 = (codeJS, id, parentElement) => {
  let codeElement = addElement('div', id, parentElement);
  codeElement.classList.add("bg-light", "p-3", "mb-3", "rounded");

  //let codeLine = document.createElement("p");
  let code = document.createElement('code');
  code.innerHTML = codeJS;
  code.classList.add("d-block", "text-info");
  codeElement.appendChild(code);
  let currentDiv = document.getElementById(parentElement);
  currentDiv.appendChild(codeElement);
}


//Exercise 1

function convertToF(celsius) {
  let fahrenheit = celsius * (9 / 5) + 32;
  return fahrenheit;
}

const codeJSElement1 = `
function convertToF(celsius) {
  let fahrenheit = celsius*(9/5) + 32;
  return fahrenheit;
}

convertToF(30);
//${convertToF(30)}
`;

createCodeElement(codeJSElement1.split("\n"), 'code-1', `col-1`);



//Exercise 2

function reverseString(str) {
  let reverStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverStr += `${str[i]}`;
  }
  return reverStr.toString();
}

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


createCodeElement(codeJSElement2.split("\n"), 'code-2', `col-2`);



//Exercise 3

function factorialize(num) {
  if (num <= 0) {
    return 1;
  }
  else {
    return factorialize(num - 1) * num;
  }
}

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

createCodeElement(codeJSElement3.split("\n"), 'code-3', `col-3`);


//Exercise 4

function findLongestWordLength(str) {
  let arr = str.split(" ");
  let arrLengths = [];
  for (let i of arr) {
    arrLengths.push(i.length);
  }
  return Math.max(...arrLengths);
}

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

createCodeElement(codeJSElement4.split("\n"), 'code-4', `col-4`);


//Exersice 5

function largestOfFour(arr) {
  let lengthsArr = [];
  for (let subArr of arr) {
    lengthsArr.push(Math.max(...subArr));
  }
  return lengthsArr;
}

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
//${largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]])}
`;

createCodeElement(codeJSElement5.split("\n"), 'code-5', `col-5`);



// Exercise 6

function confirmEnding(str, target) {
  let lastElement = str.slice(str.length - target.length, str.length);
  if (lastElement == target) {
    return true;
  } else {
    return false;
  }
}

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

createCodeElement(codeJSElement6.split("\n"), 'code-6', `col-6`);


//Exercise 7

function repeatStringNumTimes(str, num) {
  let newStr = "";
  for (let i = 0; i < num; i++) {
    newStr += str;
  }
  return newStr;
}

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

createCodeElement(codeJSElement7.split("\n"), 'code-7', `col-7`);



//Exercise 8

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

createCodeElement(codeJSElement8.split("\n"), 'code-8', `col-8`);



//Exercise 9

function findElement(arr, func) {
  for (let i of arr){
    if (func(i)){
      return i;
    }
  }
  return undefined;
}

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
//${findElement([1, 2, 3, 4], num => num % 2 === 0)}
`;

createCodeElement(codeJSElement9.split("\n"), 'code-9', `col-9`);


//Exercise 10

function booWho(bool) {
  if (typeof bool === "boolean"){
    return true;
  }else {
    return false;
  }
}

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

createCodeElement(codeJSElement10.split("\n"), 'code-10', `col-10`);


//Exercice 11

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
  }
  return newStr;
}

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

createCodeElement(codeJSElement11.split("\n"), 'code-11', `col-11`);


//Exercise 12

function frankenSplice(arr1, arr2, n) {
  let newArr = [];
  if (arr2.length  == n){
    newArr.push(...arr2, ...arr1);
  }else{
    newArr.push(...arr2.slice(0, n), ...arr1, ...arr2.slice(n, (arr2.length)))
  }
  return newArr;
}


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

createCodeElement(codeJSElement12.split("\n"), 'code-12', `col-12`);



//Exercise 13

function bouncer(arr) {
  let newArr = [];
  for (let i of arr){
    if ((i)){
      newArr.push(i);
    }
  }
  return newArr;
}

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

createCodeElement(codeJSElement13.split("\n"), 'code-13', `col-13`);



//Exercise 14

function getIndexToIns(arr, num) {
  arr.push(num);
  let sortedArr = arr.sort(function(a, b){return a - b});
  return sortedArr.indexOf(num);
}

const codeJSElement14 = `
function getIndexToIns(arr, num) {
  arr.push(num);
  let sortedArr = arr.sort(function(a, b){return a - b});
  return sortedArr.indexOf(num);
}

getIndexToIns([40, 60, 70, 75, 90, 15, 3, 5], 50);
//${getIndexToIns([40, 60, 70, 75, 90, 15, 3, 5], 50)}
`;

createCodeElement(codeJSElement14.split("\n"), 'code-14', `col-14`);


//Exercise 15

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

createCodeElement(codeJSElement15.split("\n"), 'code-15', `col-15`);



// Exercise 16

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

createCodeElement(codeJSElement16.split("\n"), 'code-16', `col-16`);



