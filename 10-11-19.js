// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot seperating them.

// It should look like this:

// Sam Harris => S.H

// Patrick Feeney => P.F

function abbrevName(name){
    let str = ''
    str += name.split(' ')[0][0] + '.'
    str += name.split(' ')[1][0]
    return str.toUpperCase()
  }

//   A square of squares
// You like building blocks. You especially like building blocks that are squares. And what you even like more, is to arrange them into a square of square building blocks!

// However, sometimes, you can't arrange them into a square. Instead, you end up with an ordinary rectangle! Those blasted things! If you just had a way to know, whether you're currently working in vain… Wait! That's it! You just have to check if your number of building blocks is a perfect square.

// Task
// Given an integral number, determine if it's a square number:

// In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

// The tests will always use some integral number, so don't worry about that in dynamic typed languages.

// Examples
// isSquare(-1) returns  false
// isSquare(0) returns   true
// isSquare(3) returns   false
// isSquare(4) returns   true
// isSquare(25) returns  true  
// isSquare(26) returns  false

var isSquare = function(n){
    return Math.sqrt(n) % 1 == 0 ? true : false
  }

//   Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3] --> [2, 4, 6]

// For the beginner, try to use the map method - it comes in very handy quite a lot so is a good one to know.

function maps(x){
    return x.map(item => item * 2)
  }

//   Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

var moveZeros = function (arr) {
    let zeros = [];
    let erything = [];
    let newArr = arr.map(item => {
      item === 0 ? zeros.push(item) : erything.push(item);
    })
    
    return erything.concat(zeros)
  }

//   The museum of incredible dull things
// The museum of incredible dull things wants to get rid of some exhibitions. Miriam, the interior architect, comes up with a plan to remove the most boring exhibitions. She gives them a rating, and then removes the one with the lowest rating.

// However, just as she finished rating all exhibitions, she's off to an important fair, so she asks you to write a program that tells her the ratings of the items after one removed the lowest one. Fair enough.

// Task
// Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

// Don't change the order of the elements that are left.

function removeSmallest(numbers) {
    let isFirst = true;
    let final = [];
    numbers.map(item => {
      if (item === Math.min(...numbers)  && isFirst) {
        isFirst = false
      } else {
        final.push(item)
      }
    })
    return final;
  }

//   Implement a method that accepts 3 integer values a, b, c. The method should return true if a triangle can be built with the sides of given length and false in any other case.

// (In this case, all triangles must have surface greater than 0 to be accepted).

function isTriangle(a,b,c) {
    return test([a,b,c].sort((a, b) => a -b))
   
  }
  
  function test(arr) {
    return arr[0] + arr[1] > arr[2] ? true : false
  }

//   Write function avg which calculates average of numbers in given list.

function find_average(array) {
    return array.reduce((tot, item) => tot+= item) / array.length
  }

//   Introduction
// The first century spans from the year 1 up to and including the year 100, The second - from the year 101 up to and including the year 200, etc.

// Task :
// Given a year, return the century it is in.

// Input , Output Examples ::
// centuryFromYear(1705)  returns (18)
// centuryFromYear(1900)  returns (19)
// centuryFromYear(1601)  returns (17)
// centuryFromYear(2000)  returns (20)

function century(year) {
    return year / 100 % 1 == 0 ? year /100 : Math.floor(year / 100) + 1
  }