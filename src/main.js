// Create variables targetting the relevant DOM elements here 👇
var bookImage = document.querySelector('.cover-image');
var bookTitle = document.querySelector('.cover-title');
var bookDescriptor1 = document.querySelector('.tagline-1');
var bookDescriptor2 = document.querySelector('.tagline-2');
// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇
window.addEventListener('load', displayRandomBook)

// Create your event handlers and other functions here 👇
function displayRandomBook() {
bookImage.src = covers[getRandomIndex(covers)];
bookTitle.innerText = titles[getRandomIndex(titles)];
bookDescriptor1.innerText = descriptors[getRandomIndex(descriptors)];
bookDescriptor2.innerText = descriptors[getRandomIndex(descriptors)];
currentCover = new Cover(bookImage.src, bookTitle.innerText, bookDescriptor1.innerText, bookDescriptor2.innerText);
}

// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
