// Activity 5: Practical Applications - task9 to task10

function validatePassword(password) {
    let pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (pattern.test(password)) {
        console.log("Password is valid.");
    } else {
        console.log("Password is invalid.");
    }
}

validatePassword("Password1!"); // Valid
validatePassword("password!");  // Invalid (no uppercase letter)
validatePassword("PASSWORD1!"); // Invalid (no lowercase letter)
validatePassword("Password!");  // Invalid (no digit)
validatePassword("Password1");  // Invalid (no special character)