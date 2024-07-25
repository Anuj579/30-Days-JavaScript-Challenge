const myList = document.getElementById('myList')
myList.addEventListener('click', function (e) {
    if (e.target && e.target.nodeName === 'LI') {
        console.log(e.target.textContent);
    }
})