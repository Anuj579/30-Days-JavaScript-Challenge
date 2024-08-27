let obj = {name: 'Anuj', age: 19}
sessionStorage.setItem('myObjectKey', JSON.stringify(obj))

let retrievedObj = JSON.parse(sessionStorage.getItem('myObjectKey'))
console.log(retrievedObj);