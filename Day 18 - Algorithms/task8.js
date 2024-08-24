// Activity 4: Array Algorithms - task8 to task9

function rotateArray(arr, k) {
    n = arr.length
    k = k % n   // in case if k is larger than n

    const rotatedArr = arr.slice(-k).concat(arr.slice(0, n - k))
    console.log(`Rotated Array: ${rotatedArr}`);
    return rotatedArr
}

rotateArray([5, 2, 6, 7, 9], 2)