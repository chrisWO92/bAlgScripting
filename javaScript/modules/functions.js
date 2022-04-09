export {convertToF, reverseString, factorialize, findLongestWordLength, largestOfFour, confirmEnding, repeatStringNumTimes, truncateString, findElement, booWho, titleCase, frankenSplice, bouncer, getIndexToIns, mutation, chunkArrayInGroups, createCodeElement, createRowElement, createCardElement};


//Exercise 1

function convertToF(celsius) {
    let fahrenheit = celsius * (9 / 5) + 32;
    return fahrenheit;
}


//Exercise 2

function reverseString(str) {
    let reverStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
      reverStr += `${str[i]}`;
    }
    return reverStr.toString();
}


//Exercise 3

function factorialize(num) {
    if (num <= 0) {
      return 1;
    }
    else {
      return factorialize(num - 1) * num;
    }
}


//Exercise 4

function findLongestWordLength(str) {
    let arr = str.split(" ");
    let arrLengths = [];
    for (let i of arr) {
      arrLengths.push(i.length);
    }
    return Math.max(...arrLengths);
}


//Exersice 5

function largestOfFour(arr) {
    let lengthsArr = [];
    for (let subArr of arr) {
      lengthsArr.push(Math.max(...subArr));
    }
    return lengthsArr;
}


// Exercise 6

function confirmEnding(str, target) {
    let lastElement = str.slice(str.length - target.length, str.length);
    if (lastElement == target) {
      return true;
    } else {
      return false;
    }
}


//Exercise 7

function repeatStringNumTimes(str, num) {
    let newStr = "";
    for (let i = 0; i < num; i++) {
      newStr += str;
    }
    return newStr;
}


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


//Exercise 9

function findElement(arr, func) {
    for (let i of arr){
      if (func(i)){
        return i;
      }
    }
    return undefined;
}


//Exercise 10

function booWho(bool) {
    if (typeof bool === "boolean"){
      return true;
    }else {
      return false;
    }
}


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



//Exercise 14

function getIndexToIns(arr, num) {
    arr.push(num);
    let sortedArr = arr.sort(function(a, b){return a - b});
    return sortedArr.indexOf(num);
}


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



//Support functions

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


const createCodeElement = (arr, id) => {
  let divElement = document.createElement('div');
  divElement.setAttribute('id', `code-${id}`);
  divElement.classList.add("text-primary", "bg-light", "p-3", "mb-3", "rounded");
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
  
  return divElement;

};

const htmlExercises = () => {

  let htmlExercise1 = `
<p class="mb-3">
              The formula to convert Celsius to Fahrenheit is the temperature in
              Celsius times <code>9/5</code> plus <code>32</code>
            </p>
            <p class="mb-3">
              You are given <code>celsius</code> representing temperature in
              Celsius. Use the variable <code>fahrenheit</code> already defined
              and assign it thee Fahrenheit temperature equivalent to the given
              Celsius temperature. Use the formula mentioned above to help
              convert the celsius temperature to Fahrenheit
            </p>
`;

let htmlExercise2 = `
<p class="mb-3">Reverse the provided string.</p>
            <p class="mb-3">
              You may need to turn the string into an array before you can
              reverse it.
            </p>
            <p class="mb-3">Your result must be a string.</p>
`;

let htmlExercise3 = `
<p class="mb-3">Return the factorial of the provided integer.</p>
            <p class="mb-3">
              If the integer is represented with the letter <code>n</code>, a
              factorial is the product of all positive integers less than or
              equal to <code>n</code>
            </p>
            <p class="mb-3">
              Factorials are often represented with the shorthand notation
              <code>n!</code>
            </p>
            <p class="mb-3">
              For example: <code>5! = 1 * 2 * 3 * 4 * 5 = 120</code>
            </p>
            <p class="mb-3">
              Only integers greater than or equal to zero will be supplied to
              the function.
            </p>
`;

let htmlExercise4 = `
<p class="mb-3">
              Return the length of the longest word in the provided sentence.
            </p>
            <p class="mb-3">Your response should be a number.</p>
`;

let htmlExercise5 = `
<p class="mb-3">
              Return an array consisting of the largest number from each
              provided sub-array. For simplicity, the provided array will
              contain exactly 4 sub-arrays.
            </p>
            <p class="mb-3">
              Remember, you can iterate through an array with a simple for loop,
              and access each member with array syntax <code>arr[i]</code>
            </p>
`;

let htmlExercise6 = `
<p class="mb-3">
              Check if a string (first argument, <code>str</code>) ends with the
              given target string (second argument, <code>target</code>).
            </p>
            <p class="mb-3">
              This challenge can be solved with the
              <code>.endsWith()</code> method, which was introduced in ES2015.
              But for the purpose of this challenge, we would like you to use
              one of the JavaScript substring methods instead.
            </p>
`;

let htmlExercise7 = `
<p class="mb-3">
              Repeat a given string <code>str</code> (first argument) for
              <code>num</code> times (second argument).
            </p>
            <p class="mb-3">
              Return an empty string if <code>num</code> is not a positive
              number. For the purpose of this challenge, do not use the built-in
              <code>.repeat()</code> method.
            </p>
`;

let htmlExercise8 = `
<p class="mb-3">
              Truncate a string (first argument) if it is longer than the given
              maximum string length (second argument). Return the truncated
              string with a <code>...</code> ending.
            </p>
`;

let htmlExercise9 = `
<p class="mb-3">
              Create a function that looks through an array <code>arr</code> and
              returns the first element in it that passes a 'truth test'. This
              means that given an element <code>x</code>, the 'truth test' is
              passed if <code>func(x)</code> is <code>true</code>. If no element
              passes the test, return <code>undefined</code>.
            </p>
`;

let htmlExercise10 = `
<p class="mb-3">
              Check if a value is classified as a boolean primitive. Return
              <code>true</code> or <code>false</code>.
            </p>
            <p class="mb-3">
              Boolean primitives are <code>true</code> or <code>false</code>.
            </p>
`;

let htmlExercise11 = `
<p class="mb-3">
              Return the provided string with the first letter of each word
              capitalized. Make sure the rest of the word is in lower case.
            </p>
            <p class="mb-3">
              For the purpose of this exercise, you should also capitalize
              connecting words like <code>the</code> and <code>of</code>.
            </p>
`;

let htmlExercise12 = `
<p class="mb-3">You are given two arrays and an index.</p>
            <p class="mb-3">
              Begin inserting elements at index <code>n</code> of the second
              array.
            </p>
            <p class="mb-3">
              Return the resulting array. The input arrays should remain the
              same after the function runs.
            </p>
`;

let htmlExercise13 = `
<p class="mb-3">Remove all falsy values from an array.</p>
            <p class="mb-3">
              Falsy values in JavaScript are <code>false</code>,
              <code>null</code>, <code>0</code>, <code>""</code>,
              <code>undefined</code>, and <code>NaN</code>.
            </p>
            <p class="mb-3">Hint: Try converting each value to a Boolean.</p>
`;

let htmlExercise14 = `
<p class="mb-3">You are given two arrays and an index.</p>
            <p class="mb-3">
              For example, <code>getIndexToIns([1,2,3,4], 1.5)</code> should
              return <code>1</code> because it is greater than
              <code>1</code> (index 0), but less than <code>2</code> (index 1).
            </p>
            <p class="mb-3">
              Likewise, <code>getIndexToIns([20,3,5], 19)</code> should return
              <code>2</code> because once the array has been sorted it will look
              like <code>[3,5,20]</code> and <code>19</code> is less than
              <code>20</code> (index 2) and greater than <code>5</code> (index
              1).
            </p>
`;

let htmlExercise15 = `
<p class="mb-3">
              Return <code>true</code> if the string in the first element of the
              array contains all of the letters of the string in the second
              element of the array.
            </p>
            <p class="mb-3">
              For example, <code>["hello", "Hello"]</code>, should return
              <code>true</code> because all of the letters in the second string
              are present in the first, ignoring case.
            </p>
            <p class="mb-3">
              The arguments <code>["hello", "hey"]</code> should return
              <code>false</code> because the string <code>hello</code> does not
              contain a <code>y</code>.
            </p>
            <p class="mb-3">
              Lastly, <code>["Alien", "line"]</code> should return
              <code>true</code> because all of the letters in
              <code>line</code> are present in <code>Alien</code>.
            </p>
`;
let htmlExercise16 = `
<p class="mb-3">Remove all falsy values from an array.</p>
          <p class="mb-3">
            Falsy values in JavaScript are <code>false</code>,
            <code>null</code>, <code>0</code>, <code>""</code>,
            <code>undefined</code>, and <code>NaN</code>.
          </p>
          <p class="mb-3">Hint: Try converting each value to a Boolean.</p>
`;

let html = [htmlExercise1, htmlExercise2, htmlExercise3, htmlExercise4, htmlExercise5, htmlExercise6, htmlExercise7, htmlExercise8, htmlExercise9, htmlExercise10, htmlExercise11, htmlExercise12, htmlExercise13, htmlExercise14, htmlExercise15, htmlExercise16];

return html;

}

let htmlExercisesList = htmlExercises();

const createCardElement = (cardID, htmlExercise, codeArr) => {
  const card = document.createElement('div');
  card.classList.add('col-6', 'col-md-4', 'card');

  const h5 = document.createElement('h5');
  h5.classList.add('mb-3', 'mt-4', 'fw-bold', 'card-header');
  h5.innerText = `Exercise ${cardID + 1}`;
  card.appendChild(h5);

  const cardBody = document.createElement('div');
  cardBody.classList.add('card-body');
  cardBody.setAttribute('id', `col-${cardID}`);
  cardBody.innerHTML = htmlExercise;

  const span = document.createElement('span');
  span.classList.add('mb-3', 'd-block');
  span.innerText = 'Solution:';
  span.style.fontWeight = '900';
  cardBody.appendChild(span);

  const code = createCodeElement(codeArr, cardID);
  cardBody.appendChild(code);
  card.appendChild(cardBody);

  return card;

}


const createRowElement = (rowNumber, exercisesList, codeList) => {

  const row = document.createElement('div');
  row.classList.add('row');

  for (let i = 0; i < exercisesList.length; i++){
    if (exercisesList[i]){
      let card = createCardElement((rowNumber+1)*3-(3-i), exercisesList[i], codeList[i]);
      row.appendChild(card);
    }    
  }

  const container = document.getElementById('container');
  container.appendChild(row);

}