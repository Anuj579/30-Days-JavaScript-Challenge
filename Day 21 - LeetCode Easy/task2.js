// Activity 2: Reverse Integer
// Task 2 -  Write a function that takes an integer and returns it with its digit reversed.
// Handle edge cases like negative numbers and numbers ending in zero. Log the reversed integers for few test cases.

function reverseDigits(num){
    const isNegative = num < 0
    num = Math.abs(num)

    let reversed = 0
    while(num > 0){
        const digit = num % 10
        reversed = reversed * 10 + digit
        num = Math.floor(num / 10)
    }
    
    if (isNegative) {
        reversed = -reversed
    }

    return reversed
}

console.log(reverseDigits(235));
console.log(reverseDigits(-546));
console.log(reverseDigits(8756));