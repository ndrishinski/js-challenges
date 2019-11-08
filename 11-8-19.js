// Write function makeUpperCase.

String.prototype.makeBigger = makeBigger

function makeBigger () {
let s = this.toString()
  return s.toUpperCase()
}

function makeUpperCase(str) {
  return str.makeBigger()
}