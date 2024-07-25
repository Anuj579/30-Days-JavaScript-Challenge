const element = document.getElementById('para')
const btn = document.getElementById('btn')
btn.addEventListener('click', function () {
    element.textContent = 'Text content changed'
})