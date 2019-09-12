// Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime' (null in C#) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).

// divisors(12); // should return [2,3,4,6]
// divisors(25); // should return [5]
// divisors(13); // should return "13 is prime"

function divisors(integer) {
    let answ = [];
    for (let i = 2; i < integer; i++) {
      integer % i == 0 ? answ.push(i) : null
    }
    
    answ.filter((item) => {
      return item != integer
    }) 
    
    return answ[0] ? answ : `${integer} is prime`
  };

//   You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

// #Examples:

// Kata.getMiddle("test") should return "es"

// Kata.getMiddle("testing") should return "t"

// Kata.getMiddle("middle") should return "dd"

// Kata.getMiddle("A") should return "A"
// #Input

// A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

// #Output

// The middle character(s) of the word represented as a string.

function getMiddle(s) {
    var isEven = s.length % 2 == 0 ? 1 : 0
    
    if (isEven) {
      return s.slice(s.length / 2 - 1, s.length / 2 + 1) 
    } else {
      return s.slice(s.length / 2, s.length / 2 + 1)
    }
  }

//   Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.


// Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

function lovefunc(flower1, flower2){
    return (flower1 + flower2) % 2 == 0 ? false : true
  }


//   Write simple .camelCase method (camel_case function in PHP, CamelCase in C# or camelCase in Java) for strings. All words must have their first letter capitalized without spaces.

// For instance:

// "hello case".camelCase() => HelloCase
// "camel case word".camelCase() => CamelCaseWord

String.prototype.camelCase=function(){
    let newStr = ''
    for (let i = 0; i < this.length; i++) {
      i == 0 || this[i - 1] == ' ' ? newStr += this[i].toUpperCase() : newStr += this[i]
    }
    
    return newStr.split(' ').join('')
  }