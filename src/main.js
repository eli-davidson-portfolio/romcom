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

// Global variables - DOM elements, current cover
var bookImage = document.querySelector('.cover-image');
var bookTitle = document.querySelector('.cover-title');
var bookDescriptor1 = document.querySelector('.tagline-1');
var bookDescriptor2 = document.querySelector('.tagline-2');

// Global variables - DOM elements, views
var homeView = document.querySelector('.home-view');
var savedView = document.querySelector('.saved-view');
var formView = document.querySelector('.form-view');

// Global variables - DOM elements, buttons
var homeButton = document.querySelector('.home-button');
var randomButton = document.querySelector('.random-cover-button');
var saveCoverButton = document.querySelector('.save-cover-button');
var viewSavedButton = document.querySelector('.view-saved-button');
var makeNewButton = document.querySelector('.make-new-button');

//Global variables - Data Arrays
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

//Iteration-2 additional functions

//Views
function showHomeView() { }
function hideHomeView() { }

function showFormView() { }
function hideFormView() { }

function showSavedView() { }
function hideSavedView() { }

//Buttons
function showRandomButton() { }
function hideRandomButton() { }

function showSaveButton() { }
function hideSaveButton() { }

function showFormButton() { }
function hideFormButton() { }

