const isPalindrome = (string) => {
  let input = string;
  let inputNospace = input.split(' ').join('');

  let inputReverse = inputNospace.split('').reverse().join('');

  if (inputReverse === inputNospace) {
    console.log("É palindromo\n\n" + inputReverse + " " + inputNospace);
    return true;
  } else {
    console.log("Não é palindromo\n\n" + inputReverse + " " + inputNospace);
    return false;
  }
}

module.exports = {
  isPalindrome
}