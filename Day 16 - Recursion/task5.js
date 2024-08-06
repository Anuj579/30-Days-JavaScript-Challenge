// Activity 3: String Manipulation with Recursion - task5 to task6

function reverse(str) {
    if (str.length === 0) {
        return str;
    } else {
        return reverse(str.slice(1)) + str[0];
    }
}

console.log(reverse("hello"));

let s = "hello"
console.log(s.slice(1,-1));

