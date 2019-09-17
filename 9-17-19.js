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