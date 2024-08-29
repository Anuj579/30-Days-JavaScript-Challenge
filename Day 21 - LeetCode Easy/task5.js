// Activity 5: Valid Parrntheses
// Task 5 - Write a function that takes a string containing just the characters '(', ')', '{', '}', '[' and ']', and determines if the input string is valid.
// A string is valid if open brackets are closed in correct order. Log the result for a few test cases.

function isValid(str) {
    let stack = []
    let bracketMap = {
        ')': '(',
        '}': '{',
        '[': ']'
    }

    for (let char of str) {
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char)
        } else {
            let topElement = stack.pop()
            if (topElement !== bracketMap[char]) {
                return false
            }
        }
    }

    return stack.length === 0
}

console.log(isValid('()'));
console.log(isValid('[()'));
console.log(isValid('{()}'));
console.log(isValid('{[])}'));
