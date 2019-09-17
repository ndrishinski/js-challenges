// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

var uniqueInOrder=function(iterable){
    // let final = [];
    // for (let i = 0; i < iterable.length; i++) {
    //   iterable[i] != iterable[i - 1] ? final.push(iterable[i]) : null
    // }
    // return final;
    console.log([...iterable]);
    return [...iterable].filter((a, i) => a !== iterable[i-1])
  }

  // Sum all the numbers of the array (in F# and Haskell you get a list) except the highest and the lowest element (the value, not the index!).
  // (The highest/lowest element is respectively only one element at each edge, even if there are more than one with the same value!)
  
  // Example:
  
  // { 6, 2, 1, 8, 10 } => 16
  // { 1, 1, 11, 2, 3 } => 6
  
  // If array is empty, null or None, or if only 1 Element exists, return 0.

  function sumArray(array) {
    return array && array.length > 2 ? array.sort((a, b) => a - b).slice(1, array.length - 1).reduce((tot, item) => tot += item ) : 0;
  }


//   Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

// Example:
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge. 
// Don't forget the space after the closing parenthesis!

function createPhoneNumber(numbers){
  return `(${numbers.slice(0, 3).join('')}) ${numbers.slice(3, 6).join('')}-${numbers.slice(6, 10).join('')}`
}

// Welcome. In this kata, you are asked to square every digit of a number.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer

function squareDigits(num){
  return Number(`${num}`.split('').map(item => item * item).join(''))
}

// Christmas is comming, and Santa has a long list to go through, 
// to find who deserves presents for the big day. Go through a list of 
// children, and return a list containing every child who appeared on 
// Santas list. Do not add any child more than once. Output should be sorted
// . For java, use Lists.

// Comparison should be case sensitive and the returned list should contain 
// only one copy of each name. "Sam" and "sam" is allowed, but "sAm" and "sAm" is not.

function findChildren(santasList, children) {
  return santasList.filter((item, ind) => {
    return children.indexOf(item) != -1 && ind == santasList.lastIndexOf(item)
  }).sort();
}