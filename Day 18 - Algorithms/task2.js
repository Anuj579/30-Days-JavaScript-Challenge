function selectionSort(arr) {
    let n = arr.length;

    // Outer loop - to move the boundary of the unsorted part
    for (let i = 0; i < n - 1; i++) {
        // Assume the first element of the unsorted part is the minimum
        let minIndex = i;

        // Inner loop - to find the actual minimum element in the unsorted part
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        // Swap the found minimum element with the first element of the unsorted part
        if (minIndex !== i) {
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }

    return arr;
}

const numbers = [64, 25, 12, 22, 11];
console.log("Sorted Array:", selectionSort(numbers));