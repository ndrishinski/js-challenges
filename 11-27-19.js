// You will be given an vector of string(s). You must sort it alphabetically (case-sensitive!!) and then return the first value.

// The returned value must be a string, and have "***" between each of its letters.

// You should not remove or add elements from/to the array.

function twoSort(s) {
    let arr = s.sort()[0].split('')
    return arr.map((i, ind) => ind != arr.length -1 ? i += '***' : i).join('')
  }

//   You will be given an array of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Your task is to return an array which includes the developer who is the oldest. In case of a tie, include all same-age senior developers listed in the same order as they appeared in the original input array.

// For example, given the following input array:

// var list1 = [
//   { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
//   { firstName: 'Odval', lastName: 'F.', country: 'Mongolia', continent: 'Asia', age: 38, language: 'Python' },
//   { firstName: 'Emilija', lastName: 'S.', country: 'Lithuania', continent: 'Europe', age: 19, language: 'Python' },
//   { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
// ];
// your function should return the following array:

// [
//   { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
//   { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
// ]
// Notes:

// The input array will always be valid and formatted as in the example above.

function findSenior(list) {
    let oldest = 0
    let arr = list.map(i => {
      if (i.age >= oldest) oldest = i.age
    })
    return list.filter(i => i.age == oldest)
  }

//   Alex just got a new hula hoop, he loves it but feels discouraged because his little brother is better than him

// Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message :)

// -If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".

// -If he doesn't get 10 hoops, return the string "Keep at it until you get it".

function hoopCount (n) {
    return n < 10 ? 'Keep at it until you get it' : 'Great, now move on to tricks'
   }

//    You are given an odd-length array of integers, in which all of them are the same, except for one single number.

//    Complete the method which accepts such an array, and returns that single different number.
   
//    The input array will always be valid! (odd-length >= 3)
   
//    Examples
//    [1, 1, 2] ==> 2
//    [17, 17, 3, 17, 17, 17, 17] ==> 3

function stray(numbers) {  
    let same = [];
    let dif = [];
    
    numbers.map(i => i == numbers[0] ? same.push(i) : dif.push(i))
    
    return same.length > dif.length ? dif[0] : same[0]
  }

//   Description:
// Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.
// Rules for a smiling face:
// -Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
// -A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
// -Every smiling face must have a smiling mouth that should be marked with either ) or D.
// No additional characters are allowed except for those mentioned.
// Valid smiley face examples:
// :) :D ;-D :~)
// Invalid smiley faces:
// ;( :> :} :]

// Example cases:

// countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
// countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
// countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;

// Note: In case of an empty array return 0. You will not be tested with invalid input (input will always be an array). Order of the face (eyes, nose, mouth) elements will always be the same

function validateSmiley(str) {
    switch (str) {
      case ':)':
        return true
      case ';)':
        return true
      case ';-)':
        return true
      case ':-)':
        return true
      case ';~)':
        return true
      case ':~)':
        return true
      case ':D':
        return true
      case ';D':
        return true
      case ';-D':
        return true
      case ':-D':
        return true
      case ';~D':
        return true
      case ':~D':
        return true
      default:
        return false
    }
  }
  
  function countSmileys(arr) {
    if (!arr.length) return 0
    let thing = arr.map(i => validateSmiley(i))
    return thing.filter(i => i == true).length
  }