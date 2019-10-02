// Given an array, find the int that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

function findOdd(a) {
    for (let i = 0; i <a.length; i++) {
      let arr = a.filter(item => item == a[i])
      if (arr.length % 2 != 0) return a[i]
    }
  }