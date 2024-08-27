let str = "Hello World!"
localStorage.setItem("myKey", str)

let retrievedString = localStorage.getItem("myKey")
console.log(retrievedString);