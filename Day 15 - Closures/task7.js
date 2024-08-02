// Activity 5: Memoization - task7 to task8

function memoize(fn) {
    const cache = {}
    return function (...args) {
        const key = JSON.stringify(args)
        if (cache[key]) {
            console.log(`Fetching from cache for arguments: ${args}`);
            return cache[key]
        }

        const result = fn(...args)
        cache[key] = result
        console.log(`Calculating the result for arguments: ${args}`);

        return result
    }
}

function add(a, b) {
    return a + b;
}

const memoizeAdd = memoize(add)
console.log(memoizeAdd(1, 2));
console.log(memoizeAdd(1, 2));
console.log(memoizeAdd(1, 2)); 