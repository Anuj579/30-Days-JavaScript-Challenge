// Activity 4: Nested Loop - task7

let n = 5; // Number of lines

for (let i = 1; i <= n; i++) { // Outer loop for the number of lines
    let stars = ''; // Initialize an empty string to store the stars for the current line
    
    for (let j = 1; j <= i; j++) { // Inner loop to add the appropriate number of stars
        stars += '*'; // Add a star to the string
    }
    
    console.log(stars); // Print the stars for the current line
}
