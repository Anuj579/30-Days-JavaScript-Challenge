async function fetchData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/post';
    try {
        const response = fetch(apiUrl)
        if (!response.ok) {
            throw new Error(`Invalid URL.`)
        }
        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log('Error:', error.message);
    }
}

fetchData()