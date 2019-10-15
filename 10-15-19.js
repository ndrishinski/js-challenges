// You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block in a direction and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

// Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).

function isValidWalk(walk) {
    let works = 0
    walk.map(item => {
      if (item == 'n') works += 1
      if (item == 'e') works += 2
      if (item == 's') works -= 1
      if (item == 'w') works -= 2
    })
    return works || walk.length != 10 ? false : true
  }


//   You take your son to the forest to see the monkeys. You know that there are a certain number there (n), but your son is too young to just appreciate the full number, he has to start counting them from 1.

// As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.

// For example:

// monkeyCount(10) // --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// monkeyCount(1) // --> [1]

function monkeyCount(n) {
    let arr = [];
    let num = n;
    while (true) {
      arr.unshift(num)
      if (arr.length == n) return arr
      else num -= 1
    }
   }

//    You need to write a function, that returns the first non-repeated character in the given string.

// For example for string "test" function should return 'e'.
// For string "teeter" function should return 'r'.

// If a string contains all unique characters, then return just the first character of the string.
// Example: for input "trend" function should return 't'

// You can assume, that the input string has always non-zero length.

// If there is no repeating character, return null in JS or Java, and None in Python.

function firstNonRepeated(s) {
    let ans = s.split('').filter(item => s.indexOf(item) == s.lastIndexOf(item))[0]
    return ans ? ans : null
  }