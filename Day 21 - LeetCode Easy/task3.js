// Activity 3: Palindrome Number 
// Task 3 - WRite a functin that takes an integer and returns true if it is a palindrome, and false otherwise. Log the result for a few test cases, including edge cases like negative numbers.

function checkPalidrome(num) {
    if (num < 0) {
        return false
    }

    const numStr = num.toString()

    const reversedStr = numStr.split('').reverse().join('')
    return numStr === reversedStr
}

console.log(`Is pallindrome: ${checkPalidrome(1212)}`);
console.log(`Is pallindrome: ${checkPalidrome(121)}`);
console.log(`Is pallindrome: ${checkPalidrome(565)}`);