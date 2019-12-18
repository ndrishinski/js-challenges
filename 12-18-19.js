// Write a function named repeater() that takes two arguments (a string and a number), and returns a new string where the input string is repeated that many times.

// Example:
// Repeater.repeat("a", 5)
// should return

// "aaaaa"

function repeater(string, n){
    return string.repeat(n)
  }

//   A string is considered to be in title case if each word in the string is either (a) capitalised (that is, only the first letter of the word is in upper case) or (b) considered to be an exception and put entirely into lower case unless it is the first word, which is always capitalised.

// Write a function that will convert a string into title case, given an optional list of exceptions (minor words). The list of minor words will be given as a string with each word separated by a space. Your function should ignore the case of the minor words string -- it should behave in the same way even if the case of the minor word string is changed.

// ###Arguments (Haskell)

// First argument: space-delimited list of minor words that must always be lowercase except for the first word in the string.
// Second argument: the original string to be converted.
// ###Arguments (Other languages)

// First argument (required): the original string to be converted.
// Second argument (optional): space-delimited list of minor words that must always be lowercase except for the first word in the string. The JavaScript/CoffeeScript tests will pass undefined when this argument is unused.
// ###Example

// titleCase('a clash of KINGS', 'a an the of') // should return: 'A Clash of Kings'
// titleCase('THE WIND IN THE WILLOWS', 'The In') // should return: 'The Wind in the Willows'
// titleCase('the quick brown fox') // should return: 'The Quick Brown Fox'

function titleCase(title, minorWords) {
    let obj = {}
    let final = []
    if (minorWords) {
      minorWords.split(' ').map(i => obj[i.toLowerCase()] = 1)
    }
    title.split(' ').map((i, ind) => {
      if (ind == 0) {
        let word = makeUpperCase(i)
        final.push(word)
      }
      else if (obj[i.toLowerCase()] == 1) {
        let word = i.toLowerCase()
        final.push(word)
      } else {
        let word = makeUpperCase(i)
        final.push(word)
      }
    })
    return final.join(' ')
  }
  
  function makeUpperCase(str) {
      return str.split('').map((i, ind) => ind == 0 ? i.toUpperCase() : i.toLowerCase()).join('')
  }
  
//   Can you find the needle in the haystack?

// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says:

// "found the needle at position " plus the index it found the needle, so:

// findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])
// should return "found the needle at position 5"

function findNeedle(haystack) {
    return `found the needle at position ${haystack.indexOf('needle')}`
  }