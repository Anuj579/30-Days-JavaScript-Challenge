let obj = { name: 'Anuj', age: 19 }
localStorage.setItem("myObjKey", JSON.stringify(obj))

let retrievedObj = JSON.parse(localStorage.getItem("myObjKey"))
console.log(retrievedObj)