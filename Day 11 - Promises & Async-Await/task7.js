// Define an async function to fetch data from the API
async function fetchData() {
    const apiUrl = "https://jsonplaceholder.typicode.com/posts"; // API endpoint URL

    try {
        // Fetch data from the API
        const response = await fetch(apiUrl);

        // Check if the response is successful (status code 200-299)
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Parse the response as JSON
        const data = await response.json();

        // Log the data to the console
        console.log("Response Data:", data);
    } catch (error) {
        // Handle any errors that occur during the fetch
        console.error("An error occurred:", error);
    }
}

// Call the async function
fetchData();
