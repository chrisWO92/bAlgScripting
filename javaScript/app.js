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
  createCodeElement as createCodeElement, 
  createCardElement as createCardElement, 
  createRowElement as createRowElement
} from "/javaScript/modules/functions.js";


//Creación de Arreglo con los códigos de los ejercicios resueltos


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



//Creación de Arreglo con los html de los enunciados de los ejercicios


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
<p class="mb-3">Write a function that splits an array (first argument) into groups the length of <code>size</code> (second argument) and returns them as a two-dimensional array.</p>
          <p class="mb-3">Hint: Try converting each value to a Boolean.</p>
`;

let html = [htmlExercise1, htmlExercise2, htmlExercise3, htmlExercise4, htmlExercise5, htmlExercise6, htmlExercise7, htmlExercise8, htmlExercise9, htmlExercise10, htmlExercise11, htmlExercise12, htmlExercise13, htmlExercise14, htmlExercise15, htmlExercise16];

return html;

}

let htmlExercisesList = htmlExercises();



//MAIN
let codeArr = chunkArrayInGroups(codeList, 3);
let exArr = chunkArrayInGroups(htmlExercisesList, 3);

const main = (htmlExercisesList, codeList) => {
  let exArr = chunkArrayInGroups(htmlExercisesList, 3);
  let codeArr = chunkArrayInGroups(codeList, 3);
  for (let i = 0; i < exArr.length; i++) {
    createRowElement(i, exArr[i], codeArr[i]);
  }
};

main(htmlExercisesList, codeList);




