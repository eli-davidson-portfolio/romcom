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

var savedCoversDisplay = document.querySelector('.saved-covers-section');


var inputs = {
  image: document.querySelector('#cover'),
  title: document.querySelector('#title'),
  tagline1: document.querySelector('#descriptor1'),
  tagline2: document.querySelector('#descriptor2')
}

var coverData = {
  currentCover: new Cover("https://tinyurl.com/yckmnrd9", "Easter egg", "hide", "seek"),
  savedCovers: [
    new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
  ],
  save: function() {
    if (this.currentCover !== this.savedCovers[0]) {
      this.savedCovers.unshift(this.currentCover);
    }
  }
}



window.addEventListener('load', displayRandomCover);
buttons.random.addEventListener('click', displayRandomCover);
buttons.save.addEventListener('click', saveCurrentCover);
buttons.home.addEventListener('click', viewHome);
buttons.viewSaved.addEventListener('click', viewSaved);
buttons.navMakeNew.addEventListener('click', viewNew);
buttons.createNew.addEventListener('click', displayNewCover);
document.addEventListener('dblclick', function (click) {
  //when the user double clicks, the function takes in the event, which I named click
  //The click.target is what the user clicked on
  //If the user clicked on an overlay (which is invisable but on top of all the RomCom covers) &&
  //If the overlay has an ID (which only saved covers do) (see line 157)
  //Then it will call deleteSavedCover, passing the ID)
  if (click.target.className === 'overlay' && click.target.id) {
    deleteSavedCover(click.target.id)
  }
});

function createNewCover() {
  return new Cover(inputs.image.value, inputs.title.value, inputs.tagline1.value, inputs.tagline2.value);
}

function saveNewCover(cover) {
  covers.unshift(inputs.image.value)
  titles.unshift(inputs.title.value)
  descriptors.unshift(inputs.tagline1.value)
  descriptors.unshift(inputs.tagline2.value)
  coverData.savedCovers.push(cover)
  return cover
}

function displayNewCover() {
  event.preventDefault();
  viewHome();
  coverData.currentCover = displayCover(saveNewCover(createNewCover()));
}

function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function createRandomCover() {
  return new Cover(getRandomElement(covers), getRandomElement(titles), getRandomElement(descriptors), getRandomElement(descriptors));
}

function displayRandomCover() {
  coverData.currentCover = displayCover(createRandomCover());
}

function displayCover(cover) {
  books.image.src = cover.cover
  books.title.innerText = cover.title
  books.tagline1.innerText = cover.tagline1
  books.tagline2.innerText = cover.tagline2
  return cover;
}

function saveCurrentCover() {
  coverData.save()
}

function hide(object) {
  var objectKeys = Object.keys(object);
  for (var i = 0; i < objectKeys.length; i++) {
    object[objectKeys[i]].classList.add('hidden')
  }
}

function show(object) {
  object.classList.remove('hidden');
}

function viewHome() {
  hide(buttons);
  hide(views);
  show(buttons.random);
  show(buttons.save);
  show(buttons.viewSaved);
  show(buttons.navMakeNew);
  show(views.home);
}

function viewNew() {
  hide(buttons);
  hide(views);
  show(buttons.home);
  show(buttons.viewSaved);
  show(buttons.navMakeNew);
  show(buttons.createNew);
  show(views.form);
}

function viewSaved() {
  hide(buttons);
  hide(views);
  showSavedCovers();
  show(buttons.home);
  show(buttons.navMakeNew);
  show(views.saved);
}

function showSavedCovers() {
  var savedCoversHTML = ''
  for (var i = 0; i < coverData.savedCovers.length; i++) {
    savedCoversHTML +=
      `<section class="mini-cover">
        <img class="cover-image" src=${coverData.savedCovers[i].cover}>
        <h2 class="cover-title">${coverData.savedCovers[i].title}</h2>
        <h3 class="tagline">A tale of <span class="tagline-1">${coverData.savedCovers[i].tagline1}</span> and <span class="tagline-2">${coverData.savedCovers[i].tagline2}</span></h3>
        <img class="price-tag" src="./assets/price.png">
        <img class="overlay" id=${i} src="./assets/overlay.png">
      </section>`
  }
  savedCoversDisplay.innerHTML = savedCoversHTML
}

function deleteSavedCover (targetID) {
  //The ID passed in is the index of the saved cover within the saved covers array
  //In other words it's coverData.savedCovers[targetID]
  //the target cover can be removed with a simple splice now that we know at what index it is in the array
   coverData.savedCovers.splice(targetID, 1);
  //Once the cover is removed from the array, the saved covers view is refreshed with the below function call
   showSavedCovers();
}