// Activity 2: Searching Algorithms - task4 to task5

function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === target) {
            return `Element found at index: ${i}`
        }
    }
    return `Element not found`
}

let arr = [2,34,5,6,53]
let target = 53

linearSearch(arr, target);
console.log(linearSearch(arr, target));