// Select the input field form
const addForm = document.querySelector('.add');

// Select the document for the ul list
const ul = document.querySelector('.wishes');
 
// Select the search form and the input inside it
const search = document.querySelector('.search input');

// A funtion that creates a template for each input wish
const newTemplate = wish => {

    const html = `
        <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${wish}</span>
        <i class="far fa-trash-alt delete"></i>
        </li>
    `;

    // Each new templates is add to the ul 
    ul.innerHTML += html; 
}

// Even listener when you input a wish
addForm.addEventListener('submit', e=>{
    // Stops the web browser from refreshing anytime an input is submitted
    e.preventDefault();

    // Gets the value from the input using the name attribute value and also trims the space from the string
    const wish = addForm.add.value.trim();
    
    // To avoid adding adding empty wish we check for the length using the if statement
    if(wish.length){
        //Calls the funtions that adds new list template to the ul
        newTemplate(wish);
        // To prevent the wish from remaining in the input after submitting it we use the reset
        addForm.reset();
    }
       
}); 

// Delete your wish
ul.addEventListener('click', e =>{
    // Check if the item click contains the delete class
    if(e.target.classList.contains('delete')){
        // Removes the parent element of the class
        e.target.parentElement.remove();
    }
});

// Funtion to filter the items in the wish list
const filterWishes = (words) => {
    Array.from(ul.children)
    .filter((wish) => !wish.textContent.toLowerCase().includes(words))
    .forEach((wish) => wish.classList.add('filtered'));

    Array.from(ul.children)
    .filter((wish) => wish.textContent.toLowerCase().includes(words))
    .forEach((wish) => wish.classList.remove('filtered'));
        
};

// Even listener to search for an item in the wish list
search.addEventListener('keyup', () => {
    const words = search.value.trim().toLowerCase();
    filterWishes(words);
})