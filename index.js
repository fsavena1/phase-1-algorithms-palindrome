function reverse(word){
  //split method takes string and puts word into an array 
  //revers array
  //join reversed array

  const wordArray = word.split('')
  const reveresedWordArray = wordArray.reverse()
  const reveresedWord = reveresedWordArray.join('')
  return reveresedWord

}


function isPalindrome(word) {
  const reveresedWord = reverse(word)
  if(word === reveresedWord){
    return true
  }else {
    return false 
  }
}

/* 
  create a function called isPalindrome 
  this function recives an argurment of a string
  if the string is a palindrome it will return a value of ture 
  if not a palindrome it will return a value of false 

  reverse the string 

  if the input is the same as reveresed input 
    return true
    else return false 
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("nerd"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("math"));
}

module.exports = isPalindrome;
