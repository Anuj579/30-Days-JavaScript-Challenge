// Activity 4: Error Handling in Promises - task6 to task7

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

createPromise()
    .then((message) => {
        console.log(message)
    })
    .catch((error) => {
        console.log(error)
    })