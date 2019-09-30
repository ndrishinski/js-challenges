// Your task is to make a function that can take any non-negative integer as a argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 21445 Output: 54421

// Input: 145263 Output: 654321

// Input: 1254859723 Output: 9875543221

function descendingOrder(n){
    return Number(n.toString().split('').sort().reverse().join(''))
  }

//   Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

// Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

// Create a funciton which translates a given DNA string into RNA.

// For example:

// DNAtoRNA("GCAT") returns ("GCAU")
// The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.

  function DNAtoRNA(dna) {
    return dna.replace(/T/gi, 'U');
  }

//   You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement a function likes :: [String] -> String, which must take in input array, containing the names of people who like an item. It must return the display text as shown in the examples:

// likes [] // must be "no one likes this"
// likes ["Peter"] // must be "Peter likes this"
// likes ["Jacob", "Alex"] // must be "Jacob and Alex like this"
// likes ["Max", "John", "Mark"] // must be "Max, John and Mark like this"
// likes ["Alex", "Jacob", "Mark", "Max"] // must be "Alex, Jacob and 2 others like this"
// For 4 or more names, the number in and 2 others simply increases.

function likes(names) {
    let len = names.length;
    if (len == 0) return 'no one likes this';
    if (len == 1) return `${names[0]} likes this`;
    if (len == 2) return `${names[0]} and ${names[1]} like this`;
    if (len == 3) return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    else return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
  }

//   Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

// For example:

//  persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
//                        // and 4 has only one digit

//  persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126,
//                         // 1*2*6 = 12, and finally 1*2 = 2

//  persistence(4) === 0 // because 4 is already a one-digit number

function newNum(num) {
    let ret = 1;
    for (let i = 0; i < num.length; i++) {
      ret *= num[i];
    }
    return ret
  }
  
  function persistence(num) {
    let answ = 0
    let tot = num.toString();
    while (tot > 9) {
      tot = newNum(tot).toString()
      answ++
    }
    return answ
  }

//   You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.


function positiveSum(arr) {
  let newArr = arr.filter(item => item > 0);
  return newArr.length ? newArr.reduce((tot, item) => tot+= item) : 0
}

// Don't give me five!
// In this kata you get the start number and the end number of a region and should return the count of all numbers except numbers with a 5 in it. The start and the end number are both inclusive!

// Examples:

// 1,9 -> 1,2,3,4,6,7,8,9 -> Result 8
// 4,17 -> 4,6,7,8,9,10,11,12,13,14,16,17 -> Result 12
// The result may contain fives. ;-)
// The start number will always be smaller than the end number. Both numbers can be also negative!

// I'm very curious for your solutions and the way you solve it. Maybe someone of you will find an easy pure mathematics solution.

// Have fun coding it and please don't forget to vote and rank this kata! :-)

// I have also created other katas. Take a look if you enjoyed this kata!

function dontGiveMeFive(start, end) {
  let i = start - 1;
  let num = 0;
  while (i < end) {
    i++ 
    !i.toString().includes(5) ? num += 1 : null;
  }
  return num;
}