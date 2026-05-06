// 1. Change the main heading 'Fruit Shop' to 'Fruit World'
const mainHeading = document.getElementById('main-heading');
mainHeading.textContent = 'Fruit World';

// 2. Change the font color of 'Fruit World' from black to orange
mainHeading.style.color = 'orange';

// 3. Change background color of div with id = "header" to green color
const header = document.getElementById('header');
header.style.backgroundColor = 'green';

// 4. Add a bottom border of orange color to div with id = "header"
header.style.borderBottom = '3px solid orange';

// 5. Change the font color of 'Fruits In Basket' from black to green
const basketHeading = document.getElementById('basket-heading');
basketHeading.style.color = 'green';

// 6. Introduce a paragraph element with text "Please visit us again" inside the div with id = "thanks"
const thanksDiv = document.getElementById('thanks');
const para = document.createElement('p');
para.textContent = 'Please visit us again';
thanksDiv.appendChild(para);

// 1. Make the 3rd element (orange) have a yellow background
const fruits = document.getElementsByClassName('fruit');
fruits[2].style.backgroundColor = 'yellow';

// 2. Make all elements in the list have bold font
for (let i = 0; i < fruits.length; i++) {
  fruits[i].style.fontWeight = 'bold';
}

// Get all li elements
const listItems = document.getElementsByTagName('li');

// 1. Change the color of the 5th "li" (Mango) to red
// We use index 4 because arrays/collections start at 0
listItems[4].style.color = 'red';

// 2. Make all the "li" tags italic
for (let i = 0; i < listItems.length; i++) {
  listItems[i].style.fontStyle = 'italic';
}
