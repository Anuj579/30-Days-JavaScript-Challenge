sessionStorage.setItem('myName', 'Anuj')
sessionStorage.setItem('myEmail', 'anuj@gmail.com')
sessionStorage.setItem('age', '19')

function logSessionStorage(){
    for (let i = 0; i < sessionStorage.length; i++){
        const key = sessionStorage.key(i)
        console.log(`${key}: ${sessionStorage.getItem(key)}`);
    }
}

console.log('Before Removal: ');
logSessionStorage();

document.getElementById('removeBtn').addEventListener('click', function(){
    sessionStorage.removeItem('myName');
    console.log('After Removal:');
    logSessionStorage();
})
