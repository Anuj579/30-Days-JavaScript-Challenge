function binarySearch(arr, target) {
    
    let left = 0;
    let right = arr.length - 1

    while (left <= right) {
        const middle = Math.floor((left + right) / 2)

        if (arr[middle] === target) {
            return middle
        } else if (arr[middle] < target) {
            left = middle + 1
        } else {
            right = middle - 1
        }
    }
    return `Element not found`
}

let arr = [2,3,4,6,7]
console.log(`Array: ${arr}`);

let target = 6

const index = binarySearch(arr, target)
console.log(`Element ${target} is found at index: ${index}`);