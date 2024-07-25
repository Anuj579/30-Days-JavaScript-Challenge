// document.querySelector('.box').style.backgroundColor='yellow'

// Get all elements with the class name 'box'
const boxes = document.getElementsByClassName('box');

// Iterate over each element in the collection and change the background color
for (let i = 0; i < boxes.length; i++) {
  boxes[i].style.backgroundColor = 'yellow';
}
