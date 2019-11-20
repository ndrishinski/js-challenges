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


//   Your task in order to complete this Kata is to write a function which formats a duration, given as a number of seconds, in a human-friendly way.

// The function must accept a non-negative integer. If it is zero, it just returns "now". Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.

// It is much easier to understand with an example:

// formatDuration(62)    // returns "1 minute and 2 seconds"
// formatDuration(3662)  // returns "1 hour, 1 minute and 2 seconds"
// For the purpose of this Kata, a year is 365 days and a day is 24 hours.

// Note that spaces are important.

// Detailed rules
// The resulting expression is made of components like 4 seconds, 1 year, etc. In general, a positive integer and one of the valid units of time, separated by a space. The unit of time is used in plural if the integer is greater than 1.

// The components are separated by a comma and a space (", "). Except the last component, which is separated by " and ", just like it would be written in English.

// A more significant units of time will occur before than a least significant one. Therefore, 1 second and 1 year is not correct, but 1 year and 1 second is.

// Different components have different unit of times. So there is not repeated units like in 5 seconds and 1 second.

// A component will not appear at all if its value happens to be zero. Hence, 1 minute and 0 seconds is not valid, but it should be just 1 minute.

// A unit of time must be used "as much as possible". It means that the function should not return 61 seconds, but 1 minute and 1 second instead. Formally, the duration specified by of a component must not be greater than any valid more significant unit of time.

function formatDuration (seconds) {
    let year = seconds >= 31536000 ? seconds / 31536000 : 0
    let leftOverYear = seconds % 31536000
    let days = year ? leftOverYear / 86400 : seconds >= 86400 ? seconds / 86400 : 0
    let leftOverDay = year ? leftOverYear % 86400 : seconds % 86400
    let hours = leftOverDay >= 3600 ? leftOverDay / 3600 : 0 
    let leftOverHour = hours ? leftOverDay % 3600 : seconds % 3600
    let min = leftOverHour >= 60 ? leftOverHour / 60 : 0
    let sec = min ? leftOverHour % 60 : seconds % 60
    
    let yearStr = `${Math.floor(year)} ${Math.floor(year) > 1 ? 'years' : 'year'}`
    let dayStr = `${Math.floor(days)} ${Math.floor(days) > 1 ? 'days' : 'day'}`
    let hourStr = `${Math.floor(hours)} ${Math.floor(hours) > 1 ? 'hours' : 'hour'}`
    let minStr = `${Math.floor(min)} ${Math.floor(min) > 1 ? 'minutes' : 'minute'}`
    let secStr = `${Math.floor(sec)} ${Math.floor(sec) > 1 ? 'seconds' : 'second'}`
    let arr = [yearStr, dayStr, hourStr, minStr, secStr];
    let finishArr = arr.filter(i => i[0] != '0')
    
    switch (finishArr.length) {
      case 0: 
        return 'now'
      case 1: 
        return finishArr[0]
      case 2:
        return `${finishArr[0]} and ${finishArr[1]}`
      case 3:
        return `${finishArr[0]}, ${finishArr[1]} and ${finishArr[2]}`
      case 4: 
        return `${finishArr[0]}, ${finishArr[1]}, ${finishArr[2]} and ${finishArr[3]}`
      case 5:
        return `${finishArr[0]}, ${finishArr[1]}, ${finishArr[2]}, ${finishArr[3]} and ${finishArr[4]}`
    }
  }

//   In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

// Example
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

  function filter_list(l) {
    return l.filter(function(v) {return typeof v == 'number'})
  }