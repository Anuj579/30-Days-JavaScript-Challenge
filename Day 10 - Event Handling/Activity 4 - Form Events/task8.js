const dropdown = document.getElementById('dropdown')
const para = document.getElementById('para')

dropdown.addEventListener('change', function(e){
    para.textContent = e.target.value
})