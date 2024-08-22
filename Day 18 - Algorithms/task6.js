// Activity 3: String Algorithms - task6 to task7

function countCharacterOccurrences(str) {
    // Initialize an empty object to store character counts
    const charCounts = {};

    // Loop through each character in the string
    for (let char of str) {
        // If the character is already a key in the object, increment its value
        if (charCounts[char]) {
            charCounts[char]++;
        } else {
            // If the character is not a key, add it to the object with a count of 1
            charCounts[char] = 1;
        }
    }

    console.log(charCounts);
}

const str = "hello world";
countCharacterOccurrences(str);