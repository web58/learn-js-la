import {sendData} from './api.js';
import {closeModal} from './upload-image-modal.js';

const form = document.forms['upload-select-image'];
const submitButton = form['upload-submit'];

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

const setFormUploadSubmit = (onSuccess, onFail) => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const isValid = pristine.validate();
    if (isValid) {
      blockSubmitButton();
      sendData(
        () => {
          closeModal();
          unblockSubmitButton();
          onSuccess();
        },
        () => {
          unblockSubmitButton();
          onFail();
        },
        new FormData(evt.target),
      );
    }
  });
};

export {setFormUploadSubmit};
