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

var inputs = {
  image: document.querySelector('#cover'),
  title: document.querySelector('#title'),
  tagline1: document.querySelector('#descriptor1'),
  tagline2: document.querySelector('#descriptor2')

}

var covers2 = {
  currentCover: 'Easter Egg',
  savedCovers: [
    new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
  ]
}

window.addEventListener('load', displayRandomCover);
buttons.random.addEventListener('click', displayRandomCover);
buttons.save.addEventListener('click', saveCurrentCover);
buttons.home.addEventListener('click', goToHome);
buttons.viewSaved.addEventListener('click', goToSaved);
buttons.navMakeNew.addEventListener('click', goToNew);
buttons.createNew.addEventListener('click', displayNewCover);


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
  buttons.navMakeNew.classList.remove('hidden');
}
function hideFormButton() {
  buttons.navMakeNew.classList.add('hidden');
}

function displayRandomCover() {
covers2.currentCover = displayCover(createRandomCover());
}

function displayNewCover() {
  event.preventDefault();
  goToHome();
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
return new Cover(inputs.image.value, inputs.title.value, inputs.tagline1.value, inputs.tagline2.value);
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
  clearForm();
  showHomeButton();
  showSavedCoversButton();
  showFormView();
}

function clearForm() {
  inputs.image.value = '';
  inputs.title.value = '';
  inputs.tagline1.value = '';
  inputs.tagline2.value = '';
}
