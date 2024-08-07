// Acitvity 4: Recursive Search - task7 to task8

function binarySearch(arr, low, high, target) {
    if (high >= low) {
        let mid = low + Math.floor((high - low) / 2)

        if (arr[mid] == target) {
            return mid;
        }

        if (arr[mid] > target) {
            return binarySearch(arr, low, mid - 1, target)
        }
        return binarySearch(arr, mid + 1, high, target)
    }
    return -1;
}

let arr = [2, 4, 6, 7, 8, 12, 23]
let target = 4
let result = binarySearch(arr, 0, arr.length - 1, target)
if (result == -1) {
    console.log("Element not found in array");
} else {
    console.log("Element found at index: " + result);
}
