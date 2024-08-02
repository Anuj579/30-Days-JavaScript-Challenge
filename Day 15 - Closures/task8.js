function memoizeFactorial(){
    const cache = {}
    function factorial(n){
        if (n == 0 || n == 1){
            return 1
        }

        if (cache[n]){
            console.log(`Fetching from cache for ${n}`);
            return cache[n];
        }

        console.log(`Calculating factorial of ${n}`);
        
        const result = n * factorial(n-1)
        cache[n] = result;
        return result;
    }
    return factorial;
}

const memoizedFactorial = memoizeFactorial()
console.log(memoizedFactorial(5)) 
console.log(memoizedFactorial(6)) 
console.log(memoizedFactorial(5)) 
