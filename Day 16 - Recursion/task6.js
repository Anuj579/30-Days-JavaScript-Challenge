function isPalindrome(str) {
    if (str.length <= 1) return "Palindrome";
    if (str[0] !== str[str.length - 1]) return "Not palindrome";

    return isPalindrome(str.slice(1, -1));
}

console.log(isPalindrome("racecar")); 
console.log(isPalindrome("hello"));   
console.log(isPalindrome("madam"));  