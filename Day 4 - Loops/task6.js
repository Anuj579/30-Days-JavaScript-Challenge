// factorial of n = n! = n * (n-1) * (n-2) * ... (1)

let n = 5
let number = n
let factorial = 1

do {
    factorial*=n
    n--;
} while (n>0);
console.log(`Factorial of ${number} is ${factorial}`);