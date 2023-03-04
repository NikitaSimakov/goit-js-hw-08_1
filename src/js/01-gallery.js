// Add imports above this line
import basicLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const listRef = document.querySelector('.gallery');
const galleryMarkup = getMarkupGallery(galleryItems).join('');

function getMarkupGallery(items) {
  return items.map(
    ({
      preview,
      original,
      description,
    }) => `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" /></a>`
  );
}

listRef.innerHTML += galleryMarkup;

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  captions: true,
  scrollZoom: false,
  showCounter: false,
});

const sqrt = Math.sqrt;
export const square = x => x * x;
export const diag = (x, y) => sqrt(square(x) + square(y));
