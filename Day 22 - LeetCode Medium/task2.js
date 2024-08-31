// Activity 2: Longest Substring without Repeating Characters
// Task 2 - Write a function that takes a string and return the length of the longest substring without repeating characters. Log the length for a few test cases, including edge cases.

function longestSubstringLength(str) {
    let start = 0
    let end = 0
    let maxLength = 0
    let charSet = new Set()

    while (end < str.length) {
        if (!charSet.has(str[end])) {
            charSet.add(str[end])
            maxLength = Math.max(maxLength, end - start + 1)
            end++
        } else {
            charSet.delete(str[start])
            start++
        }
    }
    return maxLength
}

console.log(longestSubstringLength('abaa'))
console.log(longestSubstringLength('abcdaer'))
console.log(longestSubstringLength('tweyt'))
console.log(longestSubstringLength(''))
console.log(longestSubstringLength('a'))