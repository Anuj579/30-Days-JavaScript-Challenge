// Activity 3: Contained with Most Water
// Task 3 - Write a function that takes an array of non-negative integers where each integer represent the height of a line drawn at a point. Find two lines that together with x-axis form a container, such that the container holds the most water. Log the maximum amount of water for a few test cases.

function maxArea(heights) {
    let left = 0
    let right = heights.length - 1
    let maxWater = 0

    while (left < right) {
        let height = Math.min(heights[left], heights[right])
        let width = right - left

        let currentWater = height * width
        maxWater = Math.max(maxWater, currentWater)

        if (heights[left] < heights[right]) {
            left++
        } else {
            right--
        }
    }
    return maxWater
}

console.log(maxArea([1, 4, 5, 7, 9, 3]));
console.log(maxArea([1, 1]));
console.log(maxArea([8, 4, 5, 7, 9, 3, 6]));