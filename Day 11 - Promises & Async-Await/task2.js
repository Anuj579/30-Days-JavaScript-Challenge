const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // Resolve the promise with a message after 2 seconds
        reject("Reject");
    }, 2000);
});

promise.catch((error) => {
    console.error(error);
});