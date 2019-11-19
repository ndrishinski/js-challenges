// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

function fakeBin(x){
    return Array.from(x, (item => item >= 5 ? '1' : '0')).join('')
  }

//   Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []
// You can assume that all values are integers. Do not mutate the input array/list.

function invert(arr) {
    return arr.map(item => -item)
  }

//   Task:
// Given an array of numbers (a list in groovy), determine whether the sum of all of the numbers is odd or even.

// Give your answer in string format as 'odd' or 'even'.

// If the input array is empty consider it as: [0] (array with a zero).

// Example:
// oddOrEven([0]) returns "even"
// oddOrEven([2, 5, 34, 6]) returns "odd"
// oddOrEven([0, -1, -5]) returns "even"
// Have fun!

function oddOrEven(array) {
    return array.reduce((tot, item) => tot += item, 0) % 2 == 0 ? 'even' : 'odd'
 }

//  Scenario
// You're saying good-bye your best friend , See you next happy year .

// Happy Year is the year with only distinct digits , (e.g) 2018

// Task
// Given a year, Find The next happy year or The closest year You'll see your best friend !alt !alt

// Notes
// Year Of Course always Positive .
// Have no fear , It is guaranteed that the answer exists .
// It's not necessary that the year passed to the function is Happy one .
// Input Year with in range (1000  ≤  y  ≤  9000)
// Input >> Output Examples:
// nextHappyYear (7712) ==> return (7801)
// Explanation:
// As the Next closest year with only distinct digits is 7801 .

// nextHappyYear (8989) ==> return (9012)
// Explanation:
// As the Next closest year with only distinct digits is 9012 .

// nextHappyYear (1001) ==> return (1023)
// Explanation:
// As the Next closest year with only distinct digits is 1023 .

function nextHappyYear(year){
    let isHappy = false
    let newYear = year + 1
    while (!isHappy) {
      let current = 0;
      Array.from(String(newYear), (item) => {
        if (String(newYear).indexOf(item) == String(newYear).lastIndexOf(item)) {
          current += 1
        } else {
          current = 0;
          newYear += 1
        }
        
        if (current == 4) {
          isHappy = true
        }
      })
    }
    return newYear 
  }

//   Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

function solution(str, ending){
    return str.slice(str.length - (ending.length)) == ending ? true : false
  }

//   Write a function that accepts two parameters (a and b) and says whether a is smaller than, bigger than, or equal to b.

// Here is an example code:

// var noIfsNoButs = function (a,b) {
//   if(a > b) return a + " is greater than " + b
//   else if(a < b) return a + " is smaller than " + b
//   else if(a == b) return a + " is equal to " + b
// }
// There's only one problem...

// You can't use if statements, and you can't use shorthands like (a < b)?true:false;

// in fact the word "if" and the character "?" are not allowed in the code.

var noIfsNoButs = function (a,b) {
    const eq = a == b
    switch (eq) {
      case true: 
        return `${a} is equal to ${b}`
      default: 
      break;
    }
    const exp = a > b
    switch (exp) {
      case true: 
        return `${a} is greater than ${b}`
      case false: 
        return `${a} is smaller than ${b}`
    }
  }

//   There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return True if you're better, else False!

// Note:
// Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!

function betterThanAverage(classPoints, yourPoints) {
    return classPoints.reduce((tot, item) => tot += item, 0) / classPoints.length > yourPoints ? false : true
  }
  

//   write me a function stringy that takes a size and returns a string of alternating '1s' and '0s'.

//   the string should start with a 1.
  
//   a string with size 6 should return :'101010'.
  
//   with size 4 should return : '1010'.
  
//   with size 12 should return : '101010101010'.
  
//   The size will always be positive and will only use whole numbers.

function stringy(size) {
    let str = '';
    let num = 1;
    
    while (str.length < size) {
      num % 2 == 0 ? str += '0' : str += '1'
      num ++
    }
    return str
  }

//   Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters,

// each taken only once - coming from s1 or s2.
// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

function longest(s1, s2) {
    return [...new Set([...s1, ...s2])].sort().join('')
  }

//   Write function RemoveExclamationMarks which removes all exclamation marks from a given string.
function removeExclamationMarks(s) {
    return s.replace(/\!/g, '');
  }

//   Write function bmi that calculates body mass index (bmi = weight / height ^ 2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

function bmi(weight, height) {
    let bmi = weight / (height * height);
    
    switch (true) {
      case (bmi <= 18.5): 
        return 'Underweight'
      case (bmi <= 25.0):
        return 'Normal'
      case (bmi <= 30.0):
        return 'Overweight'
      case (bmi > 30): 
        return 'Obese'
    }
  }