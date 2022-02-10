// Create variables targetting the relevant DOM elements here 👇
var data = {
  covers:       this.covers,
  titles:       this.titles,
  descriptors:  this.descriptors
}

var navButton = {
  random:       document.querySelector('.random-cover-button'),
  save:         document.querySelector('.save-cover-button'),
  viewSaved:    document.querySelector('.view-saved-button'),
  makeNew:      document.querySelector('.make-new-button')
}

// Add your event listeners here 👇
navButton.random.addEventListener("click", mainBook.setCover());
navButton.save.addEventListener("click", resetView());
navButton.viewSaved.addEventListener("click", displaySavedCovers());
navButton.makeNew.addEventListener("click", makeYourOwnCover());

var view = {
  home:         document.querySelector('.view home-view'),
  saved:        document.querySelector('.view saved-view'),
  new:          document.querySelector('.view form-view'),
}

var mainBook = {
  image:        document.querySelector('.cover-image'),
  title:        document.querySelector('.cover-title'),
  tagline1:     document.querySelector('.tagline-1'),
  tagline2:     document.querySelector('.tagline-2'),
  currentCover: '',
  setCover(cover) {
    if (!cover) {
      this.currentCover = this.getRandomCover
    } else {
      this.currentCover = cover;
    }
    this.image = this.currentCover.cover;
    this.title = this.currentCover.title;
    this.tagline1 = this.currentCover.tagline1;
    this.tagline2 = this.currentCover.tagline2;
  },
  getRandomCover() {
    return new Cover(
      this.shuffle(covers),
      this.shuffle(titles),
      this.shuffle(descriptors),
      this.shuffle(descriptors))
  },
  shuffle(array) {
    return array[this.getRandomIndex(array)];
  },
  getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
  }
}

// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];



//mainBook.setCover()