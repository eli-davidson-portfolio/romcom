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
// var bookImage = document.querySelector('.cover-image');
// var bookTitle = document.querySelector('.cover-title');
// var bookDescriptor1 = document.querySelector('.tagline-1');
// var bookDescriptor2 = document.querySelector('.tagline-2');

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
var view = {
  home: document.querySelector('.home-view'),
  saved: document.querySelector('.saved-view'),
  form: document.querySelector('.form-view')
}

var book = {
  image: document.querySelector('.cover-image'),
  title: document.querySelector('.cover-title'),
  descriptor1: document.querySelector('.tagline-1'),
  descriptor2: document.querySelector('.tagline-2')
}

var button = {
  home: document.querySelector('.home-button'),
  random: document.querySelector('.random-cover-button'),
  save: document.querySelector('.save-cover-button'),
  viewSaved: document.querySelector('.view-saved-button'),
  makeNew: document.querySelector('.make-new-button')
}

var data = {
  currentCover: 'Easter Egg',
  savedCovers: [
    new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
  ]
}

//Event listeners
window.addEventListener('load', displayRandomBook);
button.random.addEventListener('click', displayRandomBook);
button.save.addEventListener('click', function (){});

button.home.addEventListener('click', function(){
  hideHomeButton();
  hideSavedView();
  hideFormView();
  showRandomButton();
  showSaveButton();
  showSavedCoversButton();
  showFormButton();
  showHomeView();
});

button.viewSaved.addEventListener('click', function (){
  hideRandomButton();
  hideSaveButton();
  hideSavedCoversButton();
  hideHomeView();
  hideFormView();
  showHomeButton();
  showFormButton();
  showSavedView();
});

button.makeNew.addEventListener('click', function (){
  hideRandomButton();
  hideSaveButton();
  hideFormButton();
  hideHomeView();
  hideSavedView();
  showHomeButton();
  showSavedCoversButton();
  showFormView();
});

//Functions (maybe could be two function generateRandomCover, displayCover)
function displayRandomBook() {
  book.image.src = covers[getRandomIndex(covers)];
  book.title.innerText = titles[getRandomIndex(titles)];
  book.descriptor1.innerText = descriptors[getRandomIndex(descriptors)];
  book.descriptor2.innerText = descriptors[getRandomIndex(descriptors)];
  currentCover = new Cover(book.image.src, book.title.innerText, book.descriptor1.innerText, book.descriptor2.innerText);
}
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
function showHomeView() {
  view.home.classList.remove('hidden');
}
function hideHomeView() {
  view.home.classList.add('hidden');
}
function showFormView() {
  view.form.classList.remove('hidden');
}
function hideFormView() { 
  view.form.classList.add('hidden');
}
function showSavedView() {
  view.saved.classList.remove('hidden');
}
function hideSavedView() {
  view.saved.classList.add('hidden');
}
function showHomeButton() {
  button.home.classList.remove('hidden');
}
function hideHomeButton() {
  button.home.classList.add('hidden');
}
function showRandomButton() { 
  button.random.classList.remove('hidden');
}
function hideRandomButton() { 
  button.random.classList.add('hidden');
}
function showSaveButton() { 
  button.save.classList.remove('hidden');
}
function hideSaveButton() {
  button.save.classList.add('hidden');
}
function showSavedCoversButton() {
  button.viewSaved.classList.remove('hidden');
}
function hideSavedCoversButton() {
  button.viewSaved.classList.add('hidden');
}  
function showFormButton() {
  button.makeNew.classList.remove('hidden');
}
function hideFormButton() { 
  button.makeNew.classList.add('hidden');
}
