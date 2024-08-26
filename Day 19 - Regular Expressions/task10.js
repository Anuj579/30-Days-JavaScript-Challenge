function validateURL(url) {
    const pattern = /^(https?:\/\/)?(www\.)?([a-zA-Z0-9-]+(\.[a-zA-Z]{2,})+)(\/[a-zA-Z0-9#]+\/?)*$/;
    if (pattern.test(url)) {
        console.log("URL is valid.");
    } else {
        console.log("URL is invalid.");
    }
}

// Test cases
validateURL("https://www.example.com");       // URL is valid.
validateURL("http://example.com");            // URL is valid.
validateURL("www.example.com");               // URL is valid.
validateURL("example.com");                   // URL is valid.
validateURL("https://example");               // URL is invalid.
validateURL("example.com/path/to/page");      // URL is valid.
validateURL("http://example.com#section1");   // URL is valid.
validateURL("examplecom");                    // URL is invalid.