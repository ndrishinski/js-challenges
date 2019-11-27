// You will be given an vector of string(s). You must sort it alphabetically (case-sensitive!!) and then return the first value.

// The returned value must be a string, and have "***" between each of its letters.

// You should not remove or add elements from/to the array.

function twoSort(s) {
    let arr = s.sort()[0].split('')
    return arr.map((i, ind) => ind != arr.length -1 ? i += '***' : i).join('')
  }