// Your task is to write function findSum.

// Upto and including n, this function will return the sum of all multiples of 3 and 5.

// For example:

// findSum(5) should return 8 (3 + 5)

// findSum(10) should return 33 (3 + 5 + 6 + 9 + 10)

// Test.assertSimilar(findSum(5), 8);
// Test.assertSimilar(findSum(10), 33);

function findSum(n) {
    let total = 0;
    for (let i = 0; i <= n; i++) {
      if (i % 3 == 0 || i % 5 == 0) {
        total += i
      }
    }
    return total
  }

//   In this simple exercise, you will create a program that will take two lists of integers, a and b. Each list will consist of 3 positive integers above 0, representing the dimensions of cuboids a and b. You must find the difference of the cuboids' volumes regardless of which is bigger.

// For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.

// Your function will be tested with pre-made examples as well as random ones.

// If you can, try writing it in one line of code.

function findDifference(a, b) {
    return Math.abs(a.reduce((tot, cur) => tot *= cur) - b.reduce((tot, cur) => tot *= cur))
  }