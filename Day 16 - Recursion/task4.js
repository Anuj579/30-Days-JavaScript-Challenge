function max(arr) {
    if (arr.length === 1){
        return arr[0]
    }else if (arr.length === 0){
        return 'Array is Empty.'
    }

    const maxOfRest = max(arr.slice(1))
    return arr[0] > maxOfRest ? arr[0] : maxOfRest
}

console.log(max([9, 5, 7, 15, 2, 4]));
console.log(max([11, 53, 71, 15, 28, 14]));
console.log(max([-9, -5, -17, -15, -2, -4]));