// Given an array of integers your solution should find the smallest integer.

// For example:

// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.

class SmallestIntegerFinder {
    findSmallestInt(args) {
      return args.reduce((prev, next) => prev > next ? prev = next : prev)
    }
  }

//   It's bonus time in the big city! The fatcats are rubbing their paws in anticipation... but who is going to make the most money?

// Build a function that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean.

// If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did not make enough money and must receive only his stated salary.

// Return the total figure the individual will receive as a string prefixed with "£" (= "\u00A3", JS and Java) or "$" (C#, C++, Ruby, Clojure, Elixir, PHP and Python, Haskell).


function bonusTime(salary, bonus) {
    return bonus ? `£${salary * 10}` : `£${salary}`
  }

//   Write a function called repeatString which repeats the given String src exactly count times.

// repeatStr(6, "I") // "IIIIII"
// repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"

function repeatStr (n, s) {
    let newS = s;
    for (let i = 1; i < n; i++) {
      newS += s
    }
    return newS
  }

//   Complete the solution so that it reverses all of the words within the string passed in.

// Example:

// reverseWords("The greatest victory is that which requires no battle")
// // should return "battle no requires which that is victory greatest The"

function reverseWords(str){
    return str.split(' ').reverse().join(' '); // reverse those words
  }

//   Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

// Your task is to write a function maskify, which changes all but the last four characters into '#'.

// Examples
// maskify("4556364607935616") == "############5616"
// maskify(     "64607935616") ==      "#######5616"
// maskify(               "1") ==                "1"
// maskify(                "") ==                 ""

// // "What was the name of your first pet?"
// maskify("Skippy")                                   == "##ippy"
// maskify("Nananananananananananananananana Batman!") == "####################################man!"


function maskify(cc) {
    return cc.length < 4 ? cc : '#'.repeat(cc.length - 4) + cc.substring(cc.length - 4)
  }
  
//   Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

//   doubleChar("String") ==> "SSttrriinngg"
  
//   doubleChar("Hello World") ==> "HHeelllloo  WWoorrlldd"
  
//   doubleChar("1234!_ ") ==> "11223344!!__  "

function doubleChar(str) {
    return str.split('').map(item => item.repeat(2)).join('')
  }
//   There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains more than 3 numbers.

// The tests contain some very huge arrays, so think about performance.

// This is the first kata in series:

// function findUniq(arr) {
//   return arr[0] != arr[1] && arr[0] != arr[2] ? arr[0] : arr.filter(item => item != arr[0])[0]
// }

// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

function high(x){
  let alpha = 'abcdefghijklmnopqrstuvwxyz'
  let brokenUp = x.split(' ');
  let scores = [];
  
  brokenUp.map(item => {
  let temp = 0;
    for (let i = 0; i < item.length; i++) {
      temp += alpha.indexOf(item[i]) + 1
    }
      scores.push(temp)
  })
  let larg = 0;
  let large = 0;
  scores.map((item, ind, arr) => {
    if (item > larg) {
      larg = item
      large = ind
    }
  })
  return brokenUp[large]
}

// For every good kata idea there seem to be quite a few bad ones!

// In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

function well(x){
  let good = x.filter(item => item == 'good')
  if (good.length > 2) return 'I smell a series!'
  if (!good.length) return 'Fail!'
  else return 'Publish!'
}