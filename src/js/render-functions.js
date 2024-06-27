import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export function renderGallery(images) {
  const gallery = document.querySelector('.gallery');
  const galleryItems = images.map(image => `
    <div class="gallery-box">
      <a href="${image.largeImageURL}" class="gallery-item">
        <img src="${image.webformatURL}" alt="${image.tags}" class="img"/>
      </a>
      <div class="info">
        <div class="stats">
          <div class="info-box">
            <p class="info-header">Likes:</p>
            <p class="info-numbers">${image.likes}</p>
          </div>
          <div class="info-box">
            <p class="info-header">Views:</p>
            <p class="info-numbers">${image.views}</p>
          </div>
          <div class="info-box">
            <p class="info-header">Comments:</p>
            <p class="info-numbers">${image.comments}</p>
          </div>
          <div class="info-box">
            <p class="info-header">Downloads:</p>
            <p class="info-numbers">${image.downloads}</p>
          </div>
        </div>
      </div>
    </div>
  `).join('');

  gallery.insertAdjacentHTML('beforeend', galleryItems);

  const lightbox = new SimpleLightbox('.gallery a');
  lightbox.refresh();
}

export function clearGallery() {
  document.querySelector('.gallery').innerHTML = '';
}

export function showLoader() {
  document.querySelector('#loader').classList.remove('hidden');
}

export function hideLoader() {
  document.querySelector('#loader').classList.add('hidden');
}

export function showLoadMoreButton() {
  document.querySelector('#load-more').classList.remove('hidden');
}

export function hideLoadMoreButton() {
  document.querySelector('#load-more').classList.add('hidden');
}

export function showEndOfResultsMessage() {
  document.querySelector('#end-message').classList.remove('hidden');
}

export function hideEndOfResultsMessage() {
  document.querySelector('#end-message').classList.add('hidden');
}

export function showMessage(message) {
  iziToast.error({
    title: 'Error',
    message: message,
    position: 'topRight',
  });
}