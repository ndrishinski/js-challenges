// You are given two angles (in degrees) of a triangle.

// Write a function to return the 3rd.

// Note: only positive integers will be tested.

function otherAngle(a, b) {
    return (180 - (a + b))
  }

//   Your task is to write a function which returns the sum of following series upto nth term(parameter).

// Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
// Rules:
// You need to round the answer to 2 decimal places and return it as String.

// If the given value is 0 then it should return 0.00

// You will only be given Natural Numbers as arguments.

// Examples:
// SeriesSum(1) => 1 = "1.00"
// SeriesSum(2) => 1 + 1/4 = "1.25"
// SeriesSum(5) => 1 + 1/4 + 1/7 + 1/10 + 1/13 = "1.57"

function SeriesSum(n) {
    let tot = 1;
    let recurs = 1
    let count = 1;
    while (count < n) {
      tot += 1/(recurs += 3)
      count++
    }
    return  n ? `${tot.toFixed(2)}` : '0.00'
  }

//   Convert number to reversed array of digits
// Given a random number:

// C#: long;
// C++: unsigned long;
// You have to return the digits of this number within an array in reverse order.

// Example:
// 348597 => [7,9,5,8,4,3]

function digitize(n) {
    let arr = [];
    let len = n.toString()
    for (let i = len.length - 1; i >= 0; i--) {
      arr.push(Number(len[i]))
    }
    return arr
  }