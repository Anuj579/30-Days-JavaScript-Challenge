// Activity 1: Median of Two Sorted Arrays
// Task 1 - Write a function that takes two sorted arrays of integers and returns the median of the two sorted ararys. Log the median for a few test cases, including edge cases.

function findMedianSortedArrays(nums1, nums2) {
    let merged = [...nums1, ...nums2]
    merged.sort((a, b) => a - b)

    let len = merged.length
    if (len % 2 === 0) {
        return (merged[len / 2 - 1] + merged[len / 2]) / 2;
    } else{
        return merged[Math.floor(len/2)]
    }
}

console.log(findMedianSortedArrays([1, 3], [2]));           
console.log(findMedianSortedArrays([1, 2], [3, 4]));  