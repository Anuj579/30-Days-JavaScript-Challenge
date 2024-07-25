
const myElement = document.getElementById('myDiv');

//task3

// Add a mouseover event to change the background color
myElement.addEventListener('mouseover', function () {
    myElement.style.backgroundColor = 'yellow';
});

//task4

// Add a mouseout event to reset the background color
myElement.addEventListener('mouseout', function () {
    myElement.style.backgroundColor = 'aqua';
});