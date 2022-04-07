export {convertToF, reverseString, factorialize, findLongestWordLength, largestOfFour, confirmEnding, repeatStringNumTimes, truncateString, findElement, booWho, titleCase, frankenSplice, bouncer, getIndexToIns, mutation, chunkArrayInGroups};


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

