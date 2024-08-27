localStorage.setItem('name', 'Anuj')
localStorage.setItem('email', 'anuj@gmail.com')
localStorage.setItem('age', '19')

function logLocalStorage(){
    console.log("Current localStorage content: ");
    for (let i = 0; i < localStorage.length; i++){
        const key = localStorage.key(i)
        console.log(`${key}: ${localStorage.getItem(key)}`);
    }
}

console.log("Before removal: ");
logLocalStorage();

function removeItem(){
    localStorage.removeItem('name');
    console.log("After removal: ");
    logLocalStorage();
}

document.getElementById('removeBtn').addEventListener('click', removeItem)
