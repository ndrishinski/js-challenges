// Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. IPs should be considered valid if they consist of four octets, with values between 0 and 255, inclusive.

// Input to the function is guaranteed to be a single string.

// Examples
// Valid inputs:

// 1.2.3.4
// 123.45.67.89
// Invalid inputs:

// 1.2.3
// 1.2.3.4.5
// 123.456.78.90
// 123.045.067.089
// Note that leading zeros (e.g. 01.02.03.04) are considered invalid.

function isValidIP(str) {
    let arr = str.split('.')
    let newArr = [];
    var regex = /[a-z]/g;
    var regex2 = /^[1-9][0-9][0-9]?$|^255/
    if (arr.length == 4) {
    arr.map(item => {
      if (item >= 0 && item <= 255) {
        if (item.length == 1) !item.match(regex) && item.match(/[0-9]/g) ? newArr.push(item) : null 
        else if (!item.match(regex) && item.match(regex2)) newArr.push(item)
      }
    })
  
    }
    
    return newArr.length == 4
  }