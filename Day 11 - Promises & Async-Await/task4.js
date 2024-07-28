// Activity 3: Using Async/Await - task4 to task5

function createPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Promise is resolved after 2 seconds')
        }, 2000);
    })
}

async function waitForPromise() {
    try {
        const result = await createPromise();
        console.log(result);
    } catch (error) {
        console.log('Error: ', error);
    }
}

waitForPromise()