// Activity 3: Custom Error Objects - task4 to task5

class CustomError extends Error {
    constructor(message, errorCode) {
        super(message);
        this.errorCode = errorCode;
    }
}

function checkValue(value) {
    if (value < 0) {
        throw new CustomError('Negative value not allowed', 1001);
    } else {
        console.log('Value is acceptable:', value);
    }
}

try {
    checkValue(-5);
} catch (error) {
    if (error instanceof CustomError) {
        console.log('CustomError caught!');
        console.log('Error message:', error.message);
        console.log('Error code:', error.errorCode);
    } else {
        console.log('An unexpected error occurred:', error);
    }
}