// You are given a secret message you need to decipher. Here are the things you need to know to decipher it:

// For each word:

// the second and the last letter is switched (e.g. Hello becomes Holle)
// the first letter is replaced by its character code (e.g. H becomes 72)
// Note: there are no special characters used, only letters and spaces

// Examples

// decipherThis('72olle 103doo 100ya'); // 'Hello good day'
// decipherThis('82yade 115te 103o'); // 'Ready set go'

function decipherThis(str) {
  let alpha = 'abcdefghijklmnopqrstuvwxyz'
  let obj = [];
  let arr = str.split(' ')
  let ans = []
  let newStr = ''
  for ( let i = 0; i < str.length; i++) {
    if (!alpha.includes(str[i])) {
      newStr += str[i]
    }
  } 
  
  newStr.split(' ').map(item => {
    obj.push(String.fromCharCode(item))
  })

  arr.map((item, ind) => {
    let newWord = item.replace(/[0-9][0-9][0-9]|[0-9][0-9]/g, obj[ind])
    if (newWord.length > 2) {
      ans.push(`${newWord[0]}${newWord[newWord.length - 1]}${newWord.slice(2, newWord.length - 1)}${newWord[1]}`)
    } else {
      ans.push(newWord)
    }
  })
  return ans.join(' ')

}; 


// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b.

// array_diff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// array_diff([1,2,2,2,3],[2]) == [1,3]

function array_diff(a, b) {
  return a.filter(item => {
    return b.indexOf(item) == -1
  })
}

// Given the triangle of consecutive odd numbers:

//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...
// Calculate the row sums of this triangle from the row index (starting at index 1) e.g.:

// rowSumOddNumbers(1); // 1
// rowSumOddNumbers(2); // 3 + 5 = 8

function rowSumOddNumbers(n) {
  let init = (n * (n-1)) + 1
  let count = 1;
  let ans = []
  let newInit = init
  while (count <= n) {
    ans.push(newInit)
    newInit += 2
    count += 1
  }
  
  return ans.reduce((item, prev) => item += prev, 0)
}