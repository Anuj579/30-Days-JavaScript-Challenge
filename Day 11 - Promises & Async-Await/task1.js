// Activity 1: Understanding Promises - task1 to task2

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // Resolve the promise with a message after 2 seconds
        resolve("This message is displayed after a 2-second delay.");
    }, 2000);
});

promise.then((message) => {
    console.log(message);
});
