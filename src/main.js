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
/* // Deprocated Global variables - DOM elements, current cover
// var booksImage = document.querySelector('.cover-image');
// var booksTitle = document.querySelector('.cover-title');
// var bookstagline1 = document.querySelector('.tagline-1');
// var bookstagline2 = document.querySelector('.tagline-2');

// // Global variables - DOM elements, views
// var homeView = document.querySelector('.home-view');
// var savedView = document.querySelector('.saved-view');
// var formView = document.querySelector('.form-view');

// // Global variables - DOM elements, buttons
// var homeButton = document.querySelector('.home-button');
// var randomButton = document.querySelector('.random-cover-button');
// var saveCoverButton = document.querySelector('.save-cover-button');
// var viewSavedButton = document.querySelector('.view-saved-button');
// var makeNewButton = document.querySelector('.make-new-button');
*/

// Global variables - DOM elements
var views = {
  home: document.querySelector('.home-view'),
  saved: document.querySelector('.saved-view'),
  form: document.querySelector('.form-view')
}

var books = {
  image: document.querySelector('.cover-image'),
  title: document.querySelector('.cover-title'),
  tagline1: document.querySelector('.tagline-1'),
  tagline2: document.querySelector('.tagline-2')
}

var buttons = {
  home: document.querySelector('.home-button'),
  random: document.querySelector('.random-cover-button'),
  save: document.querySelector('.save-cover-button'),
  viewSaved: document.querySelector('.view-saved-button'),
  navMakeNew: document.querySelector('.make-new-button'),
  createNew: document.querySelector('.create-new-book-button')
}

var covers2 = {
  currentCover: 'Easter Egg',
  savedCovers: [
    new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
  ]
}

//Event listeners
window.addEventListener('load', displayRandomCover);
buttons.random.addEventListener('click', displayRandomCover);
buttons.save.addEventListener('click', saveCurrentCover);
buttons.home.addEventListener('click', goToHome);
buttons.viewSaved.addEventListener('click', goToSaved);
buttons.navMakeNew.addEventListener('click', goToNew);
buttons.createNew.addEventListener('click', createNewCover);

//Functions (maybe could be two function generateRandomCover, displayCover)
// function displayRandombook() {
//   books.image.src = getRandomElement(covers);
//   books.title.innerText = getRandomElement(titles);
//   books.tagline1.innerText = getRandomElement(descriptors);
//   books.tagline2.innerText = getRandomElement(descriptors);
//   covers.currentCover = new Cover(books.image.src, books.title.innerText, books.tagline1.innerText, books.tagline2.innerText);
// }

function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function showHomeView() {
  views.home.classList.remove('hidden');
}
function hideHomeView() {
  views.home.classList.add('hidden');
}
function showFormView() {
  views.form.classList.remove('hidden');
}
function hideFormView() {
  views.form.classList.add('hidden');
}
function showSavedView() {
  views.saved.classList.remove('hidden');
}
function hideSavedView() {
  views.saved.classList.add('hidden');
}
function showHomeButton() {
  buttons.home.classList.remove('hidden');
}
function hideHomeButton() {
  buttons.home.classList.add('hidden');
}
function showRandomButton() {
  buttons.random.classList.remove('hidden');
}
function hideRandomButton() {
  buttons.random.classList.add('hidden');
}
function showSaveButton() {
  buttons.save.classList.remove('hidden');
}
function hideSaveButton() {
  buttons.save.classList.add('hidden');
}
function showSavedCoversButton() {
  buttons.viewSaved.classList.remove('hidden');
}
function hideSavedCoversButton() {
  buttons.viewSaved.classList.add('hidden');
}
function showFormButton() {
  buttons.makeNew.classList.remove('hidden');
}
function hideFormButton() {
  buttons.makeNew.classList.add('hidden');
}

function displayRandomCover() {
currentCover = displayCover(createRandomCover());
}

function displayUserCover() {
covers2.currentCover = displayCover(createNewCover());
}

function displayCover(newCover) {
 books.image.src = newCover.cover
 books.title.innerText = newCover.title
 books.tagline1.innerText = newCover.tagline1
 books.tagline2.innerText = newCover.tagline2
 return newCover;
}

function createRandomCover() {
return new Cover(getRandomElement(covers), getRandomElement(titles), getRandomElement(descriptors), getRandomElement(descriptors));
}


function createNewCover() {
return new Cover(userCover, userTitle, userDesc1, userDesc2);
}

function saveCurrentCover() {

}

function goToHome() {
  hideHomeButton();
  hideSavedView();
  hideFormView();
  showRandomButton();
  showSaveButton();
  showSavedCoversButton();
  showFormButton();
  showHomeView();
}

function goToSaved() {
  hideRandomButton();
  hideSaveButton();
  hideSavedCoversButton();
  hideHomeView();
  hideFormView();
  showHomeButton();
  showFormButton();
  showSavedView();
}

function goToNew() {
  hideRandomButton();
  hideSaveButton();
  hideFormButton();
  hideHomeView();
  hideSavedView();
  showHomeButton();
  showSavedCoversButton();
  showFormView();
}
