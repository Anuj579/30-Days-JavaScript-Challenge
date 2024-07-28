// Activity 4: Fetching data from an API - task6 to task7

const apiUrl = "https://jsonplaceholder.typicode.com/posts";

fetch(apiUrl)
    .then((response) => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        // Parse the response as JSON
        return response.json();
    })
    .then((data) => {
        console.log("Response Data:", data);
    })
    .catch((error) => {
        console.error("An error occurred:", error);
    });
