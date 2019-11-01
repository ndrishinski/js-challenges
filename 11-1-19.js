// A Narcissistic Number is a number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).

// For example, take 153 (3 digits):

//     1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
// and 1634 (4 digits):

//     1^4 + 6^4 + 3^4 + 4^4 = 1 + 1296 + 81 + 256 = 1634
// The Challenge:

// Your code must return true or false depending upon whether the given number is a Narcissistic number in base 10.

// Error checking for text strings or other invalid inputs is not required, only valid integers will be passed into the function.

function narcissistic(value) {
  let arr = String(value).split('');
  let length = arr.length;
  let tot = 0;
  arr.map(item => tot += Math.pow(item, length));
  
  return tot == value ? true : false
  
}

// Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

// Examples
// basicOp('+', 4, 7)         // Output: 11
// basicOp('-', 15, 18)       // Output: -3
// basicOp('*', 5, 5)         // Output: 25
// basicOp('/', 49, 7)        // Output: 7


function basicOp(operation, value1, value2) {
  switch (operation) {
    case '+':
      return value1 + value2
    case '-': 
      return value1 - value2
    case '*':
      return value1 * value2
    case '/':
      return value1 / value2
  }
}

// #Find the missing letter

// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

// You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
// The array will always contain letters in only one case.

// Example:

// ['a','b','c','d','f'] -> 'e' ['O','Q','R','S'] -> 'P'

// ["a","b","c","d","f"] -> "e"
// ["O","Q","R","S"] -> "P"
// (Use the English alphabet with 26 letters!)

// Have fun coding it and please don't forget to vote and rank this kata! :-)

// I have also created other katas. Take a look if you enjoyed this kata!

function findMissingLetter(array) {
  let alpha = 'abcdefghijklmnopqrstuvwxyz';
  let alphaArr = alpha.split('');
  
  let sub = alphaArr.indexOf(array[0].toLowerCase())
  let ans = alphaArr.splice(sub, array.length)
  
  for ( let i = 0; i < ans.length; i++ ) {
    if (ans[i] != array[i].toLowerCase()) {
      return array[i - 1] == ans[i - 1] ? ans[i] : ans[i].toUpperCase()
    }
  }
    
}

// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

function pigIt(str){
  let punc = '.,!?'
  let arr = str.split(' ');
  return arr.map(item => {
    let fir = item.slice(0, 1)
    return punc.includes(item) ? item :`${item.substring(1)}${fir}ay`
  }).join(' ')
}