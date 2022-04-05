
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

