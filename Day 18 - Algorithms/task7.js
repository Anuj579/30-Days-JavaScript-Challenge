function findLongestSubstringLength(str) {
    let start = 0; // Start of the current substring
    let maxLength = 0; // Length of the longest substring found
    const charIndexMap = {}; // Store character positions

    for (let end = 0; end < str.length; end++) {
        const currentChar = str[end];

        // If we have seen this character before and it's within the current window
        if (charIndexMap[currentChar] >= start) {
            start = charIndexMap[currentChar] + 1; // Move start to the right of the previous occurrence
        }

        charIndexMap[currentChar] = end; // Update the position of the character
        maxLength = Math.max(maxLength, end - start + 1); // Update maxLength if needed
    }

    console.log(`The length of the longest substring without repeating characters is: ${maxLength}`);
    return maxLength;
}

findLongestSubstringLength("abcabcbb");
