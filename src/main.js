/*Iteration-2 REQUIREMENTS (for PR Review)
[ ] When a user clicks the “Make Your Own Cover” button, we should see the form, and the homepage view should be hidden

[ ] When the Form view is visible, the “Show New Random Cover” and “Save Cover” buttons should be hidden

[ ] When the Form view is visible, the “Home” button should be visible

[ ] When a user clicks the “View Saved Covers” button, we should see the saved covers section, and the homepage view should be hidden

[ ] When the Saved Covers view is visible, the “Show New Random Cover” and “Save Cover” buttons should be hidden

[ ] When the Saved Covers view is visible, the “Home” button should be visible

[ ] In summary: Be able to switch between the three views (main poster, form, and saved posters) on the correct button clicks

[ ] When a user clicks the “Home” button, we should only see the Home section

[ ] When a user clicks the “Home” button, the home button should be hidden

[ ] When a user clicks the “Home” button, the “Show New Random Cover” and “Save Cover” buttons should be visible again
*/

// Global variables - DOM
var bookImage = document.querySelector('.cover-image');
var bookTitle = document.querySelector('.cover-title');
var bookDescriptor1 = document.querySelector('.tagline-1');
var bookDescriptor2 = document.querySelector('.tagline-2');
var randomButton = document.querySelector('.random-cover-button')

//Global variables = Data Arrays
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

//Event listeners
window.addEventListener('load', displayRandomBook)
randomButton.addEventListener('click', displayRandomBook)

//Functions
function displayRandomBook() {
  bookImage.src = covers[getRandomIndex(covers)];
  bookTitle.innerText = titles[getRandomIndex(titles)];
  bookDescriptor1.innerText = descriptors[getRandomIndex(descriptors)];
  bookDescriptor2.innerText = descriptors[getRandomIndex(descriptors)];
  currentCover = new Cover(bookImage.src, bookTitle.innerText, bookDescriptor1.innerText, bookDescriptor2.innerText);
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
