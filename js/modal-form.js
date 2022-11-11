import {isEscapeKey} from './util.js';
import {resetImage} from './edit-uploaded-image.js';
import {sendData} from './api.js';

const form = document.forms['upload-select-image'];
const uploadFileInput = form['upload-file'];
const modalElement = form.querySelector('.img-upload__overlay');
const modalCloseElement = form['upload-cancel'];
const submitButton = form['upload-submit'];

const onPopupEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
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

const pristine = new Pristine(form, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
});

const blockSubmitButton = () => {
  submitButton.disabled = true;
};
const unblockSubmitButton = () => {
  submitButton.disabled = false;
};

const showSuccessMessage = () => {
  const messageTemplate = document.querySelector('#success')
    .content
    .querySelector('.success');
  const messageElement = messageTemplate.cloneNode(true);
  const btnCloseMessage = messageElement.querySelector('.success__button');

  document.body.appendChild(messageElement);
  btnCloseMessage.addEventListener('click',
    () => {messageElement.remove();},
    {once: true}
  );
};

const showErrorMessage = () => {
  const messageTemplate = document.querySelector('#error')
    .content
    .querySelector('.error');
  const messageElement = messageTemplate.cloneNode(true);
  const btnCloseMessage = messageElement.querySelector('.error__button');

  document.body.appendChild(messageElement);
  btnCloseMessage.addEventListener('click',
    () => {messageElement.remove();},
    {once: true}
  );
};

const setFormUploadSubmit = () => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const isValid = pristine.validate();
    if (isValid) {
      blockSubmitButton();
      sendData(
        () => {
          closeModal();
          unblockSubmitButton();
          showSuccessMessage();
        },
        () => {
          unblockSubmitButton();
          showErrorMessage();
        },
        new FormData(evt.target),
      );
    }
  });
};

export {setFormUploadSubmit};
