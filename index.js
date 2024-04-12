function isPalindrome(str) {
  let start = 0;
  let end = str.length - 1;

  while (start < end) {
      if (str[start] !== str[end]) {
          return false;
      }
      start++;
      end--;
  }

  return true;
}

// Test cases
console.log(isPalindrome("madam")); // true
console.log(isPalindrome("robot")); // false
console.log(isPalindrome("level")); // true
console.log(isPalindrome("hello")); // false
