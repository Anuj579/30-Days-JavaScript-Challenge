const parentElement = document.getElementById('parentElement');
parentElement.addEventListener('change', function(e){
    if (e.target && e.target.matches('.dynamicInput')){
        console.log(`Changed Value: ${e.target.value}`);
    }
})

const addInputBtn = document.getElementById('addInput')
addInputBtn.addEventListener('click', function(){
    const newInput = document.createElement('input')
    newInput.type = 'text';
    newInput.className = 'dynamicInput'
    newInput.placeholder = 'Type here...'

    parentElement.appendChild(newInput)
})