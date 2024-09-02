// Activity 4: 3Sum
// Task 4 - Write a function that takes an array of integers and finds all unique triplets in the array which give the sum zero. Log the triplets for a few test cases, including edge cases.

function threeSum(nums) {
    nums.sort((a, b) => a - b);
    const triplets = []

    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue

        let left = i + 1
        let right = nums.length - 1

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right]

            if (sum === 0) {
                triplets.push([nums[i], nums[left], nums[right]])

                while (left < right && nums[left] === nums[left + 1]) left++
                while (left < right && nums[right] === nums[right - 1]) right--

                left++
                right--
            } else if (sum < 0) {
                left++
            } else {
                right--
            }
        }
    }
    return triplets
}

console.log(threeSum([-1, 2, 0, -1, -2]));
console.log(threeSum([-2, 1, 1, 3, -1]));
console.log(threeSum([-1, 0, 1, 2, -1, -4]));