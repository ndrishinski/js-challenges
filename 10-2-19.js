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