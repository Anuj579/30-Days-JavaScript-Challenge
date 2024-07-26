// Activity 2: Chaining Promises - task3

function fetchData(message, delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(message);
        }, delay);
    });
}

fetchData("Fetching user data...", 1000)
    .then((message) => {
        console.log(message);
        return fetchData("Fetching posts...", 2000);
    })
    .then((message) => {
        console.log(message);
        return fetchData("Fetching comments...", 1500);
    })
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.error("An error occurred:", error);
    });
