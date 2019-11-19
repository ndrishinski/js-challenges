// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

// name + " plays banjo" 
// name + " does not play banjo"
// Names given are always valid strings.

function areYouPlayingBanjo(name) {
    return name[0].toLowerCase() == 'r' ? `${name} plays banjo` : `${name} does not play banjo`;
  }

//   Bob needs a fast way to calculate the volume of a cuboid with three values: length, width and the height of the cuboid. Write a function to help Bob with this calculation.
var Kata;

Kata = (function() {
  function Kata() {}

  Kata.getVolumeOfCuboid = function(length, width, height) {
    return length * width * height
  };

  return Kata;

})();

// Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word.

// Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

// Example:

// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"

String.prototype.toJadenCase = function () {
    return this.split(' ').map(item => `${item[0].toUpperCase()}${item.slice(1)}`).join(' ')
  };

//   You have to create a function that takes a positive integer number and returns the next bigger number formed by the same digits:

// 12 ==> 21
// 513 ==> 531
// 2017 ==> 2071
// If no bigger number can be composed using those digits, return -1:

// 9 ==> -1
// 111 ==> -1
// 531 ==> -1

// didn't quite get this one. dangit
function nextBigger(n){
    let len = String(n)
    let arr = [];
    for (let i = 0; i <= len.length; i++) {
      let temp = len.slice(len.length - i -1)
      let sorted = temp.split('').sort().reverse().join('')
      let beg = len.slice(0, len.length -i -1 ).split('').sort().reverse().join('')
      let tot = `${beg}${sorted}`
      
      if (Number(tot) > n) arr.push(Number(tot))
      
    }
    return arr.sort((a, b) => a - b)[0]
  }

//   Your task is to add up letters to one letter.

//   The function will be given a variable amount of arguments, each one being a letter to add.
  
//   Notes:
//   Letters will always be lowercase.
//   Letters can overflow (see second to last example of the description)
//   If no letters are given, the function should return 'z'
//   Examples:
//   addLetters('a', 'b', 'c') = 'f'
//   addLetters('a', 'b') = 'c'
//   addLetters('z') = 'z'
//   addLetters('z', 'a') = 'a'
//   addLetters('y', 'c', 'b') = 'd' // notice the letters overflowing
//   addLetters() = 'z'

function getRealNum(num) {
    let newNum = num;
    while (newNum > 26) {
      newNum -= 26
    }
    return newNum
  }
  
  function addLetters(...letters) {
    let alpha = 'abcdefghijklmnopqrstuvwxyz';
    let newarr = letters.map(item => alpha.indexOf(item) + 1)
    let tot = newarr.reduce((tot, item) => tot += item, 0)
    if (!letters.length) return 'z'
    if (tot > 26) {
      tot = getRealNum(tot)
    }
    return alpha[tot - 1]
  }
  