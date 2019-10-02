// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

function squareSum(numbers){
    let tot = 0;
    numbers.map(item => tot += item * item);
    return tot
  }

//   The new "Avengers" movie has just been released! There are a lot of people at the cinema box office standing in a huge line. Each of them has a single 100, 50 or 25 dollar bill. An "Avengers" ticket costs 25 dollars.

// Vasya is currently working as a clerk. He wants to sell a ticket to every single person in this line.

// Can Vasya sell a ticket to every person and give change if he initially has no money and sells the tickets strictly in the order people queue?

// Return YES, if Vasya can sell a ticket to every person and give change with the bills he has at hand at that moment. Otherwise return NO.

// Examples:
// tickets([25, 25, 50]) // => YES 
// tickets([25, 100]) // => NO. Vasya will not have enough money to give change to 100 dollars
// tickets([25, 25, 50, 50, 100]) // => NO. Vasya will not have the right bills to give 75 dollars of change (you can't make two bills of 25 from one of 50)

function tickets(peopleInLine){
    let quarter = 0;
    let half = 0;
    let hundy = 0;
    let dead = 0;
    
    peopleInLine.map((item, ind) => {
      if (item == 25) quarter ++ 
      else if (item == 50 && ind != 0) {
        if (quarter > 0) {
          half++
          quarter--
        }
      }
      else if (item == 100 && ind != 0) { 
        if (quarter > 0 && half > 0) {
          quarter--
          half--
          hundy += 1
        } 
        else if (quarter >= 3) {
          quarter -= 3
          hundy += 1
        }
        else dead+= 1
      }
      else {
        dead += 1
      };
    })
    return dead ? 'NO' : 'YES'
  }

//   You might know some pretty large perfect squares. But what about the NEXT one?

// Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

// If the parameter is itself not a perfect square, than -1 should be returned. You may assume the parameter is positive.

// Examples:

// findNextSquare(121) --> returns 144
// findNextSquare(625) --> returns 676
// findNextSquare(114) --> returns -1 since 114 is not a perfect

function findNextSquare(sq) {
    let sqrt = Math.sqrt(sq)
      return sq % sqrt == 0 ? (sqrt + 1) * (sqrt + 1) : -1 
    }

//     Your task is to write function which takes string and list of delimiters as an input and returns list of strings/characters after splitting given string.

// Example:

// multiple_split('Hi, how are you?', [' ']) => # [Hi,', 'how', 'are', 'you?']
// multiple_split('1+2-3', ['+', '-']) => ['1', '2', '3']
// List of delimiters is optional and can be empty, so take that into account.

// Important note: Result cannot contain empty string.

function multipleSplit(string, delimiters=[]){
    let answ = ''
      if (!delimiters.length && string) return [string]
     for (let i = 0; i < string.length; i++) {
       if (delimiters.indexOf(string[i]) != -1) {
         answ += ' '
       } else {
         answ += string[i] 
       }
     }
    return answ.split(' ').filter(item => item.length)
  
  }

//   Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

function findShort(s){
    let arr = s.split(' ')
    let top = arr[0]
  
    for (let i = 1; i < arr.length; i++) {
      top.length > arr[i].length ? top = arr[i] : null;
    }
    return top.length
  }