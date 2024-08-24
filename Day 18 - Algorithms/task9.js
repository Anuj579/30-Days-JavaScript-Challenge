function mergeSortedArrays(arr1, arr2) {
    let mergedArray = [];
    let i = 0, j = 0;

    // Compare elements from both arrays and add the smaller one
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            mergedArray.push(arr1[i]);
            i++;
        } else {
            mergedArray.push(arr2[j]);
            j++;
        }
    }

    // If there are remaining elements in arr1, add them
    while (i < arr1.length) {
        mergedArray.push(arr1[i]);
        i++;
    }

    // If there are remaining elements in arr2, add them
    while (j < arr2.length) {
        mergedArray.push(arr2[j]);
        j++;
    }

    console.log("Merged Array:", mergedArray);
    return mergedArray;
}

mergeSortedArrays([1, 3, 5, 7], [2, 4, 6, 8]);
mergeSortedArrays([1, 4, 7], [2, 5, 8, 9]);
