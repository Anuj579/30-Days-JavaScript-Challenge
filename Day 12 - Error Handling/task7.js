function createPromise() {
    return new Promise((resolve, reject) => {

        const randomNumber = Math.random(); // Generate a random number between 0 and 1
        const roundedNumber = Math.round(randomNumber * 100) / 100

        if (roundedNumber > 0.5) {
            resolve(`Promise is resolved. Number is greater than 0.5. The number is ${roundedNumber}.`)
        } else {
            reject(`Promise is rejected. Number is smaller than 0.5. The number is ${roundedNumber}.`)
        }
    })
}

async function checkPromise() {
    try {
        const result = await createPromise()
        console.log(result);
    } catch (error) {
        console.log(`Error: ${error}`);
    }
}

checkPromise()