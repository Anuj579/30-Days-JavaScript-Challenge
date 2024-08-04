// Activity 1: Basic Recurison - task1 to task2

function factorial(n) {
    if (n < 0){
        return "Error: Factorial is not defined for negative numbers";
    }
    if (n == 0 || n == 1) {
        return 1;
    }

    return n * factorial(n - 1)
}

console.log(`Factorial of 5: ${factorial(5)}`);

