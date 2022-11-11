import {renderPhotos} from './users-pictures.js';
import {setFormUploadSubmit} from './modal-form.js';
import {getData} from './api.js';

getData((photos) => {
  renderPhotos(photos);
});

setFormUploadSubmit();
