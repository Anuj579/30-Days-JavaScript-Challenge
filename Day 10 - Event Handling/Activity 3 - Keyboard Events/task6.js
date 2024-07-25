const input = document.getElementById('inputBox');
const para = document.getElementById('para');

input.addEventListener('keyup', function(){
    para.textContent = input.value
})