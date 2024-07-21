// Activity 5: Combining Conditions

let year = 2024; 
let isLeap = false;

if (year % 4 === 0) {
    if (year % 100 === 0) {
        if (year % 400 === 0) {
            isLeap = true;
        } else {
            isLeap = false;
        }
    } else {
        isLeap = true;
    }
} else {
    isLeap = false;
}

if (isLeap) {
    console.log(year + " is a leap year.");
} else {
    console.log(year + " is not a leap year.");
}
