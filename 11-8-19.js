// Write function makeUpperCase.

String.prototype.makeBigger = makeBigger

function makeBigger () {
let s = this.toString()
  return s.toUpperCase()
}

function makeUpperCase(str) {
  return str.makeBigger()
}

// Your task is to make function, which returns the sum of a sequence of integers.

// The sequence is defined by 3 non-negative values: begin, end, step.

// If begin value is greater than the end, function should returns 0

// Examples

// sequenceSum(2,2,2) === 2
// sequenceSum(2,6,2) === 12 // 2 + 4 + 6
// sequenceSum(1,5,1) === 15 // 1 + 2 + 3 + 4 + 5
// sequenceSum(1,5,3) === 5 // 1 + 4

const sequenceSum = (begin, end, step) => {
    let sum = 0;
    
    for (let i = begin; i <= end; i += step) {
      sum += i
    }
    return sum
  };

//   Task
//  	In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up.
// Rules
//  	1.  The input string will always be lower case but maybe empty.
// 2.  If the character in the string is whitespace then pass over it as if it was an empty seat.
// Example
// wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
// Good luck and enjoy!

function wave(str){
    let arr = [];
    let ind = 0;
    let newer = ''
    let len = str.split('').filter(a => a != ' ').length
    while (arr.length < len) {
     if (str[ind] != ' ') {
      newer = str.slice(0, ind)
      newer += str[ind].toUpperCase()
      newer += str.slice(ind + 1)
      arr.push(newer)
     }
     ind++
    }
    return arr
  }