function asyncTask(message, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(message);
        }, delay);
    });
}

const promise1 = asyncTask("First promise resolved", 3000);
const promise2 = asyncTask("Second promise resolved", 1000);
const promise3 = asyncTask("Third promise resolved", 2000);

Promise.race([promise1, promise2, promise3])
    .then((value) => {
        console.log("First promise resolved:", value);
    })
    .catch((error) => {
        console.error("An error occurred:", error);
    });
