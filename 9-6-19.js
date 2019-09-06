// Description:
// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" spinWords( "This is a test") => returns "This is a test" spinWords( "This is another test" )=> returns "This is rehtona test"

function spinWords(str){
    let arr = str.split(' ')
    let newArr = []
    arr.map((item) => {
      if (item.length >= 5) {
        newArr.push(item.split('').reverse().join(''))
      } else {
        newArr.push(item)
      }
    })
    
    return newArr.join(' ')
  }
  

//   You are given an array (which will have a length of at least 3, 
//     but could be very large) containing integers. The array is either
//     entirely comprised of odd integers or entirely comprised of even 
//     integers except for a single integer N. Write a method that takes
//     the array as an argument and returns this "outlier" N.

function findOutlier(integers){
    let odd = [];
    let even = [];
    integers.map((num) => {
      num % 2 == 0 ? even.push(num) : odd.push(num)
    })
    
    return odd.length > even.length ? even[0] : odd[0]
  }