import {isEscapeKey} from './util.js';
import {resetImage} from './edit-uploaded-image.js';

const form = document.forms['upload-select-image'];
const uploadFileInput = form['upload-file'];
const modalElement = form.querySelector('.img-upload__overlay');
const modalCloseElement = form['upload-cancel'];

const onPopupEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeModal();
  }
};

function openModal () {
  modalElement.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onPopupEscKeydown);
}

function closeModal () {
  modalElement.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onPopupEscKeydown);
  form.reset();
  resetImage();
}

uploadFileInput.addEventListener('change', () => {
  openModal();
});

modalCloseElement.addEventListener('click', () => {
  closeModal();
});

/**
 * Validation
 */

const pristine = new Pristine(form, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
});

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const isValid = pristine.validate();
  if (isValid) {
    form.submit();
  }
});
