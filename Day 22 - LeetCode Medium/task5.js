// Activity 5: Group Anagrams
// Task 5 - Write a function that takes an array of strings and groups anagrams together. Log the grouped anagram for few test cases.

function groupAnagrams(strs){
    let groups ={}

    for (let str of strs){
        let sortedStr = str.split('').sort().join('')
        
        if(!groups[sortedStr]){
            groups[sortedStr] = []
        }

        groups[sortedStr].push(str)
    }

    return Object.values(groups)
}

console.log(groupAnagrams(['low', 'owl', 'ate', 'tea', 'tan']));
console.log(groupAnagrams(['tab', 'bat', 'who', 'how']));