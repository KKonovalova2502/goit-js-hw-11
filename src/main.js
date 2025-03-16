import axios from 'axios';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { fetchImages } from './js/pixabay-ap';
import { renderGallery } from './js/render-functions';

const refs = {
  form: document.querySelector('.form'),
  input: document.querySelector('[name="search-text"]'),
  gallery: document.querySelector('.gallery'),
  loader: document.querySelector('.loader'),
};

let lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionSelector: 'img',
  captionType: 'attr',
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

refs.form.addEventListener('submit', event => {
  event.preventDefault();
  const userRequest = refs.input.value.trim();
  if (userRequest === '') {
    iziToast.error({
      title: 'Error:',
      message: 'Please fill in the search field before submitting!',
      position: 'topRight',
    });
    return;
  }

  refs.loader.hidden = false;

  fetchImages(userRequest)
    .then(images => {
      if (images) {
        renderGallery(refs.gallery, images);
        lightbox.refresh();
      }
    })
    .catch(error => {
      console.error('Error:', error);
    })
    .finally(() => {
      refs.loader.hidden = true;
    });

  refs.form.reset();
});
