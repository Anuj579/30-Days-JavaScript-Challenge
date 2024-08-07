function checkOccurrences(arr, target) {
    if (arr.length === 0) return 0;

    let count = arr[0] === target ? 1 : 0

    return count + checkOccurrences(arr.slice(1), target)
}

console.log(checkOccurrences([1,2,4,1,53,1,23,1], 1));
console.log(checkOccurrences([5,2,3,5,53,4,23,5], 5));
