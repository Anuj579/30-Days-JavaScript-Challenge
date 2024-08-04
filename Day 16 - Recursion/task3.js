// Activity 2: Recursion with Arrays - task3 to task4

function sum(arr) {
    if (arr.length === 0) return 0;
    else return arr[0] + sum(arr.slice(1));

}

console.log(sum([2, 3, 4]));


