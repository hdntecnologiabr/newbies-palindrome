const { isPalindrome } = require('./palindrome');

describe("Palindrome", () => {
  it("should return true when a string is a Palindrome", () => {
    let palindromic1 = "level";
    let palindromic2 = "mega bobagem";
    let palindromic3 = "anotaram a data da maratona";
    

    expect(isPalindrome(palindromic1)).toEqual(true);
    expect(isPalindrome(palindromic2)).toEqual(true);
    expect(isPalindrome(palindromic3)).toEqual(true);
  })

  it("should return false a string is not a Palindrome", () => {
    let nonPalindromic1 = "tacoca";
    let nonPalindromic2 = "fatos ocorridos";

    expect(isPalindrome(nonPalindromic1)).toEqual(false);
    expect(isPalindrome(nonPalindromic2)).toEqual(false);
  })
});