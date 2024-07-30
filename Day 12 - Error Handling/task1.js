// Activity 1: Basic Error Handling with Try-Catch - task1 to task2

function throwError(n) {
    if (n >= 1) {
        console.log('Number is positive');
    } else if (n < 0) {
        console.log('Number is negative');
    } else {
        throw new Error('Zero is neither negative nor positive');
    }
}

try {
    throwError(0);
} catch (error) {
    console.log('Error:', error.message);
}
