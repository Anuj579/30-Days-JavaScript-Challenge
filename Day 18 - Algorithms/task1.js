// Activity 1: Sorting - task1 to task3

function bubbleSort(arr) {
    let n = arr.length;

    // Outer loop - controls the number of passes
    for (let i = 0; i < n - 1; i++) {
        // Inner loop - performs the comparisons and swaps
        for (let j = 0; j < n - 1 - i; j++) {
            // Compare adjacent elements
            if (arr[j] > arr[j + 1]) {
                // Swap if they are in the wrong order
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

const numbers = [5, 2, 9, 1, 5, 6];
console.log("Sorted Array:", bubbleSort(numbers));
