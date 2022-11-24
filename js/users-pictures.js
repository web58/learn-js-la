const picturesListElement = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const renderPhotos = (photos) => {
  const picturesListFragment = document.createDocumentFragment();

  photos.forEach(({url, likes, comments}) => {
    const pictureElement = pictureTemplate.cloneNode(true);
    pictureElement.href = url;
    pictureElement.querySelector('.picture__img').src = url;
    pictureElement.querySelector('.picture__likes').textContent = likes;
    pictureElement.querySelector('.picture__comments').textContent = comments;
    picturesListFragment.appendChild(pictureElement);
  });

  picturesListElement.appendChild(picturesListFragment);
};

export {renderPhotos};

