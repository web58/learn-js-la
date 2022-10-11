import {counter, getRandomNumber, getRandomArrayElement} from './util.js';

const DESCRIPTIONS = [
  'Lorem ipsum dolor sit amet.',
  'Cum nemo obcaecati quidem velit?',
  'Et numquam officiis quia repudiandae.',
  'Ad et labore quibusdam sit!',
  'Aliquam eius facere tenetur veniam!',
];
const SIMILAR_PHOTO_COUNT = 25;

const createPhotoEntity = () => {
  const id = counter();
  return {
    id: id,
    url: `photos/${id}.jpg`,
    description: getRandomArrayElement(DESCRIPTIONS),
    likes: getRandomNumber(15, 200),
    comments: getRandomNumber(0, 200),
  };
};

const similarPhotos = () => Array.from({length: SIMILAR_PHOTO_COUNT}, createPhotoEntity);

export {getRandomNumber, counter, similarPhotos};
