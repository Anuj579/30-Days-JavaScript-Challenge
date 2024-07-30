function validationInput(input) {
    if (typeof input !== 'string' || input.trim() === '') {
        throw new Error("Invalid Input")
    }
    console.log("Valid Input:", input);
}

try {
    validationInput("")
} catch (error) {
    console.log(`Error: ${error.message}`);
}