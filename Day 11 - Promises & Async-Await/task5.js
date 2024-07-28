function createPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('Rejected')
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