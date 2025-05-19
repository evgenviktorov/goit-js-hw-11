import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryContainer = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export function renderImages(images, query) {
  clearGallery();
  if (images.length === 0) {
    iziToast.error({
      title: 'No results',
      message: `Sorry, there are no images matching your search query: ${query}. Please try again!`,
      position: 'topRight',
    });
    return;
  }

  const markup = images
    .map(
      ({
        previewURL,
        largeImageURL,
        tags,
        comments,
        downloads,
        likes,
        views,
      }) =>
        `<li class="gallery-link"><a class="gallery-item" href="${largeImageURL}">
  <img class="gallery-image" src="${previewURL}" alt="${tags}"/></a>
  <div class="info">
        <div class="info-list">
          <h4 class="info-title">Likes</h4>
          <p class="info-text">${likes}</p>
        </div>
        <div class="info-list">
          <h4 class="info-title">Views</h4>
          <p class="info-text">${views}</p>
        </div>
        <div class="info-list">
          <h4 class="info-title">Comments</h4>
          <p class="info-text">${comments}</p>
        </div>
        <div class="info-list">
          <h4 class="info-title">Downloads</h4>
          <p class="info-text">${downloads}</p>
        </div>
      </div></li> `
    )
    .join('');

  galleryContainer.insertAdjacentHTML('beforeend', markup);

  lightbox.refresh();
}

export function clearGallery() {
  galleryContainer.innerHTML = '';
}

export function showLoader() {
  loader.classList.remove('hidden');
}

export function hideLoader() {
  loader.classList.add('hidden');
}
