// Activity 1: Two Sum
// Task 1 - Solve the 'Two Sum' problem on LeetCode.
// Write function that takes an array of numbers and a target number, and returns the indices of the two numbers that add up to the target. Log the indices for few test cases.

function twoSum(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                console.log(`Indices of two numbers that add up to ${target}: ${i} and ${j}`)
            }
        }
    }
}

twoSum([1, 2, 3, 4, 5], 5)
twoSum([3, 6, 4, 7, 8], 11)
twoSum([6, 5, 1, 2, 3], 7)