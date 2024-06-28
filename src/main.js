import './css/styles.css';
import 'izitoast/dist/css/iziToast.min.css';
import { fetchImages } from './js/pixabay-api';
import {
  renderGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
  showEndOfResultsMessage,
  hideEndOfResultsMessage,
  showMessage
} from './js/render-functions';

let currentQuery = '';
let currentPage = 1;
let totalHits = 0;

const form = document.querySelector('#search-form');
const loadMoreBtn = document.querySelector('#load-more');

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  clearGallery();
  hideLoadMoreButton();
  hideEndOfResultsMessage();

  const queryInput = event.target.elements.query;
  currentQuery = queryInput.value.trim();
  currentPage = 1;

  if (!currentQuery) {
    showMessage('Please enter a search query.');
    return;
  }

  showLoader();
  try {
    const data = await fetchImages(currentQuery, currentPage);
    totalHits = data.totalHits;

    if (data.hits.length === 0) {
      showMessage('Sorry, there are no images matching your search query. Please try again!');
    } else {
      renderGallery(data.hits);
      if (totalHits > 15) {
        showLoadMoreButton();
      }
    }
  } catch (error) {
    showMessage('Failed to fetch images. Please try again later.');
  } finally {
    hideLoader();
  }

  queryInput.value = '';
});

loadMoreBtn.addEventListener('click', async () => {
  currentPage += 1;

  showLoader();
  try {
    const data = await fetchImages(currentQuery, currentPage);
    renderGallery(data.hits);

    const alreadyLoadedImages = document.querySelectorAll('.gallery-item').length;
    if (alreadyLoadedImages >= totalHits) {
      hideLoadMoreButton();
      showEndOfResultsMessage();
    }

    smoothScroll();
  } catch (error) {
    showMessage('Failed to fetch images. Please try again later.');
  } finally {
    hideLoader();
  }
});

function smoothScroll() {
  const { height: cardHeight } = document.querySelector('.gallery').firstElementChild.getBoundingClientRect();
  window.scrollBy({
    top: cardHeight * 2,
    behavior: 'smooth',
  });
}