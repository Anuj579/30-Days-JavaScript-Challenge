function quickSort(arr) {
    // Base case: If the array has 1 or 0 elements, it's already sorted
    if (arr.length <= 1) {
        return arr;
    }

    // Choose a pivot element (we'll take the last element)
    const pivot = arr[arr.length - 1];

    // Arrays to hold elements less than and greater than the pivot
    let left = [];
    let right = [];

    // Partition the array into left and right sub-arrays
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    // Recursively apply quickSort to left and right, then concatenate results
    return [...quickSort(left), pivot, ...quickSort(right)];
}

const numbers = [3, 6, 8, 10, 1, 2, 1];
console.log("Sorted Array:", quickSort(numbers));