const element = document.getElementById('myDiv')

element.addEventListener('mouseover', function () { element.style.borderColor = 'green' })
element.addEventListener('mouseout', function () { element.style.borderColor = 'black' })