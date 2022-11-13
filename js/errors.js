import {isEscapeKey} from './util.js';
import {onPopupEscKeydown} from './upload-image-modal.js';

const onSuccessEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    removeSuccessMessage();
  }
};
const onErrorEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    if (document.body.classList.contains('modal-open')) {
      document.removeEventListener('keydown', onPopupEscKeydown);
    }
    removeErrorMessage();
  }
};

function showSuccessMessage() {
  const messageTemplate = document.querySelector('#success')
    .content
    .querySelector('.success');
  const messageElement = messageTemplate.cloneNode(true);
  const messageElementInner = messageElement.querySelector('.success__inner');
  const btnClose = messageElement.querySelector('.success__button');

  document.body.appendChild(messageElement);

  btnClose.addEventListener('click', removeSuccessMessage);
  document.addEventListener('keydown', onSuccessEscKeydown);
  messageElement.addEventListener('click', (evt) => {
    const withinBoundaries = evt.composedPath().includes(messageElementInner);

    if ( ! withinBoundaries ) {
      removeSuccessMessage();
    }
  });
}

function removeSuccessMessage () {
  const messageElement = document.querySelector('.success');
  messageElement.remove();
  document.removeEventListener('keydown', onSuccessEscKeydown);
}

function showErrorMessage(title, btnText) {
  const messageTemplate = document.querySelector('#error')
    .content
    .querySelector('.error');
  const messageElement = messageTemplate.cloneNode(true);
  const messageElementInner = messageElement.querySelector('.error__inner');
  const btnClose = messageElement.querySelector('.error__button');
  const messageTitle = messageElement.querySelector('.error__title');

  if (title) {
    messageTitle.textContent = title;
  }
  if (btnText) {
    btnClose.textContent = btnText;
  }

  document.body.appendChild(messageElement);

  btnClose.addEventListener('click', removeErrorMessage);
  document.addEventListener('keydown', onErrorEscKeydown);
  messageElement.addEventListener('click', (evt) => {
    const withinBoundaries = evt.composedPath().includes(messageElementInner);

    if ( ! withinBoundaries ) {
      removeErrorMessage();
    }
  });
}

function removeErrorMessage () {
  const messageElement = document.querySelector('.error');
  messageElement.remove();
  document.removeEventListener('keydown', onErrorEscKeydown);
  if (document.body.classList.contains('modal-open')) {
    document.addEventListener('keydown', onPopupEscKeydown);
  }
}

export {showSuccessMessage, showErrorMessage};
