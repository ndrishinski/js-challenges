// Story
// Joe Stoy, in his book "Denotational Semantics", tells following story:

// The decision which way round the digits run is, of course, mathematically trivial.
// Indeed, one early British computer had numbers running from right to left (because
// the spot on an oscilloscope tube runs from left to right, but in serial logic the
// least significant digits are dealt with first). 

// Turing used to mystify audiences at public lectures when, quite by accident, he would 
// slip into this mode even for decimal arithmetic, and write things like 73+42=16.

// The next version of the machine was made more conventional simply by crossing the
// x-deflection wires: this, however, worried the engineers, whose waveforms were all
// backwards. That problem was in turn solved by providing a little window so that the 
// engineers(who tended to be behind the computer anyway) could view the oscilloscope
// screen from the back. 

// [C. Strachey - private communication.]
// You will play the role of the audience and judge on the truth value of Turing's equations.

// Task
// You are given a string s. It's an equation such as "a+b=c", where a, b, c are numbers made up of the digits 0 to 9. This includes possible leading or trailing zeros. The equations will not contain any spaces.

// Your task is to determine whether s is a valid Turing equation. Return true or false, respectively, in Turing's interpretation, i.e. the numbers being read backwards.

// Still struggling to understand the task? Look at the following examples ;-)

// Examples
// For s = "73+42=16", the output should be true.

// 73 -> 37
// 42 -> 24
// 61 -> 61
// 37+24==61
// For s = "5+8=13", the output should be false.

// 5 -> 5
// 8 -> 8
// 13 -> 31
// 5+8!=31
// For s = "10+20=30", the output should be true.

// 10 -> 01 -> 1
// 20 -> 02 -> 2
// 30 -> 03 -> 3
// 1+2==3
// Note
// All the numbers a,b,c no more than 10 digits, excluding leading zeros(read backwards)

// s contains only digits, "+" and "=", "-","*" or "/" will not appear in the string.

// Happy Coding ^_^

function isTuringEquation(s){
    let str = s.replace(/(\+)|(\=)/g, ' ').split(' ')
    const [first, second, third] = str
    return Number(reverseNum(first)) + Number(reverseNum(second)) == reverseNum(third) ? true : false  
  }
  
  function reverseNum(num) {
    return num.split('').reverse().join('')
  }

//   Polycarpus works as a DJ in the best Berland nightclub, and he often uses dubstep music in his performance. Recently, he has decided to take a couple of old songs and make dubstep remixes from them.

// Let's assume that a song consists of some number of words (that don't contain WUB). To make the dubstep remix of this song, Polycarpus inserts a certain number of words "WUB" before the first word of the song (the number may be zero), after the last word (the number may be zero), and between words (at least one between any pair of neighbouring words), and then the boy glues together all the words, including "WUB", in one string and plays the song at the club.

// For example, a song with words "I AM X" can transform into a dubstep remix as "WUBWUBIWUBAMWUBWUBX" and cannot transform into "WUBWUBIAMWUBX".

// Recently, Jonny has heard Polycarpus's new dubstep track, but since he isn't into modern music, he decided to find out what was the initial song that Polycarpus remixed. Help Jonny restore the original song.

// Input
// The input consists of a single non-empty string, consisting only of uppercase English letters, the string's length doesn't exceed 200 characters

// Output
// Return the words of the initial song that Polycarpus used to make a dubsteb remix. Separate the words with a space.

// Examples
// songDecoder("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB")
//   // =>  WE ARE THE CHAMPIONS MY FRIEND

function songDecoder(song) {
    return song.replace(/(WUB)+/g, ' ').trim()
  }

//   Personalized greeting
// Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

// Use conditionals to return the proper message:

// case	return
// name equals owner	'Hello boss'
// otherwise	'Hello guest'

function greet (name, owner) {
    return name === owner ? 'Hello boss' : 'Hello guest'
  }

//   Find the last element of the given argument(s).

// Examples
// last([1, 2, 3, 4] ) // =>  4
// last("xyz")         // => "z"
// last(1, 2, 3, 4)    // =>  4
// In javascript and CoffeeScript a list will be an array, a string or the list of arguments.

function last(...list){
    if (list.length == 1 && list[0].length > 1) {
     let newArr = [...list[0]]
     return newArr[newArr.length -1 ]
   } else if (list) {
     return list[list.length - 1]
   } 
   }
   