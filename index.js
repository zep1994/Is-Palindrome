function isPalindrome(string) {
  //use array and string manipulation and string and array methods
  //ignore commas and apostrophes
  string = string.toLowerCase();
  var charactersArray = string.split('');
  var validCharacters = 'abcdefghijklmnopqrstuvwxyz'.split('');
  //two arrays so far.

  var lettersArr = [];
  charactersArray.forEach(char => {
    if (validCharacters.indexOf(char) > -1) lettersArr.push(char);
  })

  if (lettersArr.join('') === lettersArr.reverse().join('')) return true;
  else return false;
}

isPalindrome("Madam I'm Adam");
