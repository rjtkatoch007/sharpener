// 1. Change the main heading 'Fruit Shop' to 'Fruit World'
//const mainHeading = document.getElementById('main-heading');
//mainHeading.textContent = 'Fruit World';

// 2. Change the font color of 'Fruit World' from black to orange
//mainHeading.style.color = 'orange';

// 3. Change background color of div with id = "header" to green color
//const header = document.getElementById('header');
//header.style.backgroundColor = 'green';

// 4. Add a bottom border of orange color to div with id = "header"
//header.style.borderBottom = '3px solid orange';

// 5. Change the font color of 'Fruits In Basket' from black to green
//const basketHeading = document.getElementById('basket-heading');
//basketHeading.style.color = 'green';

// 6. Introduce a paragraph element with text "Please visit us again" inside the div with id = "thanks"
//const thanksDiv = document.getElementById('thanks');
//const para = document.createElement('p');
//para.textContent = 'Please visit us again';
//thanksDiv.appendChild(para);

// 1. Make the 3rd element (orange) have a yellow background
//const fruits = document.getElementsByClassName('fruit');
//fruits[2].style.backgroundColor = 'yellow';

// 2. Make all elements in the list have bold font
//for (let i = 0; i < fruits.length; i++) {
 // fruits[i].style.fontWeight = 'bold';
//}

// Get all li elements
//const listItems = document.getElementsByTagName('li');

// 1. Change the color of the 5th "li" (Mango) to red
// We use index 4 because arrays/collections start at 0
//listItems[4].style.color = 'red';

// 2. Make all the "li" tags italic
//for (let i = 0; i < listItems.length; i++) {
  //listItems[i].style.fontStyle = 'italic';
//}

// 1. Select the basket heading by id and change color to brown
//const basketHeading = document.querySelector('#basket-heading');
//basketHeading.style.color = 'brown';

// 2. Change background and text color of even fruit items
//const evenFruits = document.querySelectorAll('.fruit:nth-child(even)');
//evenFruits.forEach(fruit => {
  //fruit.style.backgroundColor = 'red';
  //fruit.style.color = 'white';
//});

// 3. Remove the default list-style (dots) from the fruit list
//const fruitList = document.querySelector('.fruits');
//fruitList.style.listStyleType = 'none';

// 1 & 2. Create h3 sub-heading, make it italic, and add it after the main heading
//const mainHeading = document.getElementById('main-heading');
//const subHeading = document.createElement('h3');
//subHeading.textContent = 'Buy high quality organic fruits online';
//subHeading.style.fontStyle = 'italic';
//mainHeading.insertAdjacentElement('afterend', subHeading);

// 3 & 4. Create paragraph, set text and ID, and add it before the unordered list
//const fruitList = document.querySelector('.fruits');
//const totalFruits = document.createElement('p');
//totalFruits.textContent = 'Total fruits: 4';
//totalFruits.id = 'fruits-total';
//fruitList.insertAdjacentElement('beforebegin', totalFruits);

// 1. Add Edit button to existing list items
const fruitList = document.querySelector('.fruits');
const fruits = document.querySelectorAll('.fruit');

fruits.forEach((fruit) => {
  const editBtn = document.createElement('button');
  editBtn.className = 'edit-btn';
  editBtn.textContent = 'Edit';
  fruit.appendChild(editBtn);
});

// 2. Implement Add and Delete functionality
const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  // Get the input value
  const fruitToAdd = document.getElementById('fruit-to-add');

  // Create new li element
  const li = document.createElement('li');
  li.className = 'fruit';
  li.innerHTML = fruitToAdd.value + 
    '<button class="delete-btn">x</button>' + 
    '<button class="edit-btn">Edit</button>';

  // Add to list
  fruitList.appendChild(li);
  
  // Clear input
  fruitToAdd.value = '';
});

// Delete functionality using Event Delegation
fruitList.addEventListener('click', function(event) {
  if (event.target.classList.contains('delete-btn')) {
    const liToDelete = event.target.parentElement;
    fruitList.removeChild(liToDelete);
  }
});

