// Given an array of integers of any length, return an array that has 1 added to the value represented by the array.

// the array can't be empty
// only non-negative, single digit integers are allowed
// Return nil (or your language's equivalent) for invalid inputs.

// Examples
// For example the array [2, 3, 9] equals 239, adding one would return the array [2, 4, 0].

// [4, 3, 2, 5] would return [4, 3, 2, 6]


function upArray(arr){
    let dum
    let thing = arr.filter(i => i >= 0 && i <= 9)
      if (thing.length != arr.length || thing.length == 0) return null
      let num = parseInt(arr.join(''), 10) + 1
      if (arr.length > 15) {
        let first = Number(arr.slice(0, 15).join(''))
        let sec = Number(arr.slice(15,30).join(''))
        dum = arr.slice(30).join('')
        if (arr.length < 30) {
          return `${first}${Number(sec) + 1}`.split('').map(i => Number(i))
        }
        return `${Number(first)}${Number(sec)}${Number(dum) + 1}`.split('').map(i => Number(i))
      }
      return !isNaN(num) ? [...String(num)].map(i => Number(i)) : null
    }

//     The code provided is supposed return a person's Full Name given their first and last names.

// But it's not working properly.

// Notes
// The first and/or last names are never null (None in Python), but may be empty.

// Task
// Fix the bug so we can all go home early.

class Dinglemouse{

    constructor( firstName, lastName ){
      this.firstName = firstName.replace(/ /g, '')
      this.lastName = lastName.replace(/ /g, '')
    }
    
    getFullName(){
      if (this.firstName && this.lastName) return this.firstName+" "+this.lastName
      else if (this.firstName && !this.lastName) return this.firstName
      else if (!this.firstName && this.lastName) return this.lastName
      else return ''
      
    }
    
  }