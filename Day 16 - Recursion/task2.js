function fibonacci(n) {
    if (n == 0) {
        return 0;
    }
    else if (n == 1) {
        return 1;
    }

    return fibonacci(n-1) + fibonacci(n-2)
}

console.log(`Nth fibonacci number for 6 : ${fibonacci(6)}`);
console.log(`Nth fibonacci number for 8 : ${fibonacci(8)}`);
console.log(`Nth fibonacci number for 12 : ${fibonacci(12)}`);
