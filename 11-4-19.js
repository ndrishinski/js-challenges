// You are given a secret message you need to decipher. Here are the things you need to know to decipher it:

// For each word:

// the second and the last letter is switched (e.g. Hello becomes Holle)
// the first letter is replaced by its character code (e.g. H becomes 72)
// Note: there are no special characters used, only letters and spaces

// Examples

// decipherThis('72olle 103doo 100ya'); // 'Hello good day'
// decipherThis('82yade 115te 103o'); // 'Ready set go'

function decipherThis(str) {
  let alpha = 'abcdefghijklmnopqrstuvwxyz'
  let obj = [];
  let arr = str.split(' ')
  let ans = []
  let newStr = ''
  for ( let i = 0; i < str.length; i++) {
    if (!alpha.includes(str[i])) {
      newStr += str[i]
    }
  } 
  
  newStr.split(' ').map(item => {
    obj.push(String.fromCharCode(item))
  })

  arr.map((item, ind) => {
    let newWord = item.replace(/[0-9][0-9][0-9]|[0-9][0-9]/g, obj[ind])
    if (newWord.length > 2) {
      ans.push(`${newWord[0]}${newWord[newWord.length - 1]}${newWord.slice(2, newWord.length - 1)}${newWord[1]}`)
    } else {
      ans.push(newWord)
    }
  })
  return ans.join(' ')

}; 