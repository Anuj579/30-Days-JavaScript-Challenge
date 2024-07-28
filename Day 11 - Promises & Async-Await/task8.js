// Activity 5: Concurrent Promises - task8 to task9

function asyncTask(message, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(message);
        }, delay);
    });
}

const promise1 = asyncTask("First promise resolved", 2000);
const promise2 = asyncTask("Second promise resolved", 1000);
const promise3 = asyncTask("Third promise resolved", 3000);

Promise.all([promise1, promise2, promise3])
    .then((values) => {
        console.log("All promises resolved:");
        values.forEach((value, index) => {
            console.log(`Promise ${index + 1}: ${value}`);
        });
    })
    .catch((error) => {
        console.error("An error occurred:", error);
    });
