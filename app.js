
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

//Exercise 1

function convertToF(celsius) {
    let fahrenheit = celsius*(9/5) + 32;
    return fahrenheit;
}

createCodeElement(['function convertToF (celsius) {', '  let fahrenheit = celsius*(9/5) + 32;', '  return fahrenheit;', '}', ' ', 'converToF(30);', `//${convertToF(30)}`], 'code-1', `col-1`);



//Exercise 2

function reverseString(str) {
    let reverStr = "";
    for (let i = str.length -1; i >= 0; i--) {
      reverStr += `${str[i]}`;
    }
    return reverStr.toString();
}


createCodeElement(['function reverseString(str) {', '  let reverStr = "";', '  for (let i = str.length -1; i >= 0; i--) {', 'reverStr += `${str[i]}`;', ' }', 'return reverStr.toString();','}', ' ', 'reverseString("hello");', `//${reverseString("hello")}`], 'code-2', `col-2`);



//Exercise 3

function factorialize(num) {
    if (num <= 0){
      return 1;
    }
    else {
      return factorialize(num-1) * num;
    }
}

createCodeElement(['function factorialize(num) {', '  if (num <= 0){', '  return 1;', '}', 'else {', 'return factorialize(num-1) * num;', '}', '}', ' ', 'factorialize(5);', ' ', `//${factorialize(5)}`], 'code-3', `col-3`);


//Exercise 4

function findLongestWordLength(str) {
    let arr = str.split(" ");
    let arrLengths = [];
    for (let i of arr){
      arrLengths.push(i.length);
    }
    return Math.max(...arrLengths);
}

createCodeElement(['function findLongestWordLength(str) {', 'let arr = str.split(" ");', 'let arrLengths = [];', 'for (let i of arr){', 'arrLengths.push(i.length);', '}', 'return Math.max(...arrLengths);', '}', ' ', 'findLongestWordLength("The quick brown fox jumped over the lazy dog");', ' ', `//${findLongestWordLength("The quick brown fox jumped over the lazy dog")}`], 'code-4', `col-4`);
  

//Exersice 5

function largestOfFour(arr) {
    let lengthsArr = [];
    for (let subArr of arr){
      lengthsArr.push(Math.max(...subArr));
    }
    return lengthsArr;
}

createCodeElement(['function largestOfFour(arr) {', 'let lengthsArr = [];', 'for (let subArr of arr){', 'lengthsArr.push(Math.max(...subArr));', '}', 'return lengthsArr;', '}', ' ', 'largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);', `//${largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]])}`], 'code-5', `col-5`);



// Exercise 6

function confirmEnding(str, target) {
    let lastElement = str.slice(str.length - target.length, str.length);
    if (lastElement == target){
      return true;
    }else {
      return false;
    }
}

createCodeElement(['function confirmEnding(str, target) {', 'let lastElement = str.slice(str.length - target.length, str.length);', 'if (lastElement == target){', 'return true;', '}else {', 'return false;', '}', '}', ' ', 'confirmEnding("Bastian", "n");', `//${confirmEnding("Bastian", "n")}`], 'code-6', `col-6`);


