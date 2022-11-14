import {renderPhotos} from './users-pictures.js';
import {setFormUploadSubmit} from './upload-form.js';
import {getData} from './api.js';
import {showErrorMessage, showSuccessMessage} from './messages.js';

getData(
  (photos) => {
    renderPhotos(photos);
  },
  () => showErrorMessage('Не удалось получить фотографии пользователей', 'Ok')
);

setFormUploadSubmit(
  () => {
    showSuccessMessage();
  },
  () => {
    showErrorMessage();
  }
);
