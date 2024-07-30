function divide(a, b) {
    if (b === 0) {
        throw new Error('Denominator should not be zero.')
    }
    console.log(a / b);
}

try {
    divide(15, 0)
} catch (error) {
    console.log(`Error: ${error.message}`);
}