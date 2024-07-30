// Activity 5: Gracefull Error Handling in Fetch - task8 to task9

const apiUrl = 'https://jsonplaceholder.typicode.com/pst'

fetch(apiUrl)
    .then((result) => {
        if (!result.ok) {
            throw new Error(`Invalid URL.`);
        }
        return result.json()
    })
    .then((data) => {
        console.log(data)
    })
    .catch((error) => {
        console.log('Error:', error.message);
    })