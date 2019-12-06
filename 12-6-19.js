// Description:
// Make a simple function called greet that returns the most-famous "hello world!".

// Style Points
// Sure, this is about as easy as it gets. But how clever can you be to create the most creative hello world you can think of? What is a "hello world" solution you would want to show your friends?

const greet = () => "hello world!";

// In this kata you have to write a simple Morse code decoder. While the Morse code is now mostly superceded by voice and digital data communication channels, it still has its use in some applications around the world.
// The Morse code encodes every character as a sequence of "dots" and "dashes". For example, the letter A is coded as ·−, letter Q is coded as −−·−, and digit 1 is coded as ·−−−−. The Morse code is case-insensitive, traditionally capital letters are used. When the message is written in Morse code, a single space is used to separate the character codes and 3 spaces are used to separate words. For example, the message HEY JUDE in Morse code is ···· · −·−−   ·−−− ··− −·· ·.

// NOTE: Extra spaces before or after the code have no meaning and should be ignored.

// In addition to letters, digits and some punctuation, there are some special service codes, the most notorious of those is the international distress signal SOS (that was first issued by Titanic), that is coded as ···−−−···. These special codes are treated as single special characters, and usually are transmitted as separate words.

// Your task is to implement a function that would take the morse code as input and return a decoded human-readable string.

// For example:

// decodeMorse('.... . -.--   .--- ..- -.. .')
// //should return "HEY JUDE"
// NOTE: For coding purposes you have to use ASCII characters . and -, not Unicode characters.

// The Morse code table is preloaded for you as a dictionary, feel free to use it:

// Coffeescript/C++/Go/JavaScript/PHP/Python/Ruby/TypeScript: MORSE_CODE['.--']
// C#: MorseCode.Get(".--") (returns string)
// Elixir: @morse_codes variable (from use MorseCode.Constants). Ignore the unused variable warning for morse_codes because it's no longer used and kept only for old solutions.
// Elm: MorseCodes.get : Dict String String
// Haskell: morseCodes ! ".--" (Codes are in a Map String String)
// Java: MorseCode.get(".--")
// Kotlin: MorseCode[".--"] ?: "" or MorseCode.getOrDefault(".--", "")
// Rust: self.morse_code
// Scala: morseCodes(".--")
// C: provides parallel arrays, i.e. morse[2] == "-.-" for ascii[2] == "C"
// All the test strings would contain valid Morse code, so you may skip checking for errors and exceptions. In C#, tests will fail if the solution code throws an exception, please keep that in mind. This is mostly because otherwise the engine would simply ignore the tests, resulting in a "valid" solution.

// Good luck!

decodeMorse = function(message){
    var alphabet = {  
     "-----":"0",
     ".----":"1",
     "..---":"2",
     "...--":"3",
     "....-":"4",
     ".....":"5",
     "-....":"6",
     "--...":"7",
     "---..":"8",
     "----.":"9",
     ".-":"A",
     "-...":"B",
     "-.-.":"C",
     "-..":"D",
     ".":"E",
     "..-.":"F",
     "--.":"G",
     "....":"H",
     "..":"I",
     ".---":"J",
     "-.-":"K",
     ".-..":"L",
     "--":"M",
     "-.":"N",
     "---":"O",
     ".--.":"P",
     "--.-":"Q",
     ".-.":"R",
     "...":"S",
     "-":"T",
     "..-":"U",
     "...-":"V",
     ".--":"W",
     "-..-":"X",
     "-.--":"Y",
     "--..":"Z",
     "/":" ",
     "-·-·--":"!",
     "·-·-·-":".",
     "--··--":",",
     "...---...": "SOS",
     "-.-.--": "!",
     ".-.-.-": "."
  };
  var messageConverted = [];
  
  message.split("   ").map(function (word) {
    word.split(" ").map(function (letter) {
    messageConverted.push(alphabet[letter]);
  });
    messageConverted.push(" ");
  });
   
    return messageConverted.join("").trim()
  }

//   Your start-up's BA has told marketing that your website has a large audience in Scandinavia and surrounding countries. Marketing thinks it would be great to welcome visitors to the site in their own language. Luckily you already use an API that detects the user's location, so this is an easy win.

// The Task
// Think of a way to store the languages as a database (eg an object). The languages are listed below so you can copy and paste!
// Write a 'welcome' function that takes a parameter 'language' (always a string), and returns a greeting - if you have it in your database. It should default to English if the language is not in the database, or in the event of an invalid input.
// The Database
// english: 'Welcome',
// czech: 'Vitejte',
// danish: 'Velkomst',
// dutch: 'Welkom',
// estonian: 'Tere tulemast',
// finnish: 'Tervetuloa',
// flemish: 'Welgekomen',
// french: 'Bienvenue',
// german: 'Willkommen',
// irish: 'Failte',
// italian: 'Benvenuto',
// latvian: 'Gaidits',
// lithuanian: 'Laukiamas',
// polish: 'Witamy',
// spanish: 'Bienvenido',
// swedish: 'Valkommen',
// welsh: 'Croeso'
// Possible invalid inputs include:

// IP_ADDRESS_INVALID - not a valid ipv4 or ipv6 ip address
// IP_ADDRESS_NOT_FOUND - ip address not in the database
// IP_ADDRESS_REQUIRED - no ip address was supplied

function greet(language) {
	const obj = {
    english: 'Welcome',
    czech: 'Vitejte',
    danish: 'Velkomst',
    dutch: 'Welkom',
    estonian: 'Tere tulemast',
    finnish: 'Tervetuloa',
    flemish: 'Welgekomen',
    french: 'Bienvenue',
    german: 'Willkommen',
    irish: 'Failte',
    italian: 'Benvenuto',
    latvian: 'Gaidits',
    lithuanian: 'Laukiamas',
    polish: 'Witamy',
    spanish: 'Bienvenido',
    swedish: 'Valkommen',
    welsh: 'Croeso',
    IP_ADDRESS_NOT_FOUND: 'Welcome',
    IP_ADDRESS_INVALID: 'Welcome',
    IP_ADDRESS_REQUIRED: 'Welcome',
  }

  return obj[language]
}

// Complete the solution so that it reverses the string value passed into it.

// solution('world'); // returns 'dlrow'

function solution(str){
    return [...str].reverse().join('')
  }

//   Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" (as a string)

function alphabetPosition(text) {
    let alpha = 'abcdefghijklmnopqrstuvwxyz'
    return text.toLowerCase().split('').map(i => {
      if (alpha.indexOf(i) != -1 ) {
        let thi = alpha.indexOf(i)
        return  thi + 1
      }
    }).filter(i => i).join(' ')
  }

//   You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Your task is to return:

// true if developers from all of the following age groups have signed up: teens, twenties, thirties, forties, fifties, sixties, seventies, eighties, nineties, centenarian (at least 100 years young).
// false otherwise.
// For example, given the following input array:

// var list1 = [
//   { firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 19, language: 'Python' },
//   { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 29, language: 'JavaScript' },
//   { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 39, language: 'Ruby' },
//   { firstName: 'Noa', lastName: 'A.', country: 'Israel', continent: 'Asia', age: 40, language: 'Ruby' },
//   { firstName: 'Andrei', lastName: 'E.', country: 'Romania', continent: 'Europe', age: 59, language: 'C' },
//   { firstName: 'Maria', lastName: 'S.', country: 'Peru', continent: 'Americas', age: 60, language: 'C' },
//   { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 75, language: 'Python' },
//   { firstName: 'Chloe', lastName: 'K.', country: 'Guernsey', continent: 'Europe', age: 88, language: 'Ruby' },
//   { firstName: 'Viktoria', lastName: 'W.', country: 'Bulgaria', continent: 'Europe', age: 98, language: 'PHP' },
//   { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'JavaScript' }
// ];
// your function should return true as there is at least one developer from each age group.

// Notes:

// The input array will always be valid and formatted as in the example above.
// Age is represented by a number which can be any positive integer up to 199.

function isAgeDiverse(list) {
    let teens = ''
    let twenties = ''
    let thirties = ''
    let fourties = ''
    let fifties = ''
    let sixties = ''
    let seventies = ''
    let eighties = ''
    let nineties = ''
    let hundies = ''
        
    
    for (let i = 0; i < list.length; i ++) {
      let age = list[i].age
      if (age >= 10 && age < 20) {
        teens += '1'
      }
      if (age >= 20 && age < 30) {
        twenties += '1'
      }
      if (age >= 30 && age < 40) {
        thirties += '1'
      }
      if (age >= 40 && age < 50) {
        fourties += '1'
      }
      if (age >= 50 && age < 60) {
        fifties += '1'
      }
      if (age >= 60 && age < 70) {
        sixties += '1'
      }
      if (age >= 70 && age < 80) {
        seventies += '1'
      }
      if (age >= 80 && age < 90) {
        eighties += '1'
      }
      if (age >= 90 && age < 100) {
        nineties += '1'
      }
      if (age > 100) {
      console.log('hitting hundy', age)
        hundies += '1'
      }
    }
    
    if (teens && twenties && thirties && fourties && fifties && sixties  && seventies && eighties && nineties && hundies) {
      return true
    } else {
      return false
    }
  }
