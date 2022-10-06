//Функция, возвращающая случайное целое число
const getRandomNumber = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const result = Math.floor(Math.random() * (max - min + 1)) + min;
  return (min >= max || min < 0) ? NaN : result;
};

//Функция для проверки максимальной длины строки.
const checkMaxLengthOfStr = (str, maxLength) => str.length <= maxLength;
checkMaxLengthOfStr('dfvnv rfgrieognrk grjegnr', 22);

/**
 * Задание 4
 * на основе написанных по заданию ранее вспомогательных функций
 * напишите необходимые функции для создания массива из 25 сгенерированных объектов.
 * Каждый объект массива — описание фотографии, опубликованной пользователем.
 */

const DESCRIPTIONS = [
  'Lorem ipsum dolor sit amet.',
  'Cum nemo obcaecati quidem velit?',
  'Et numquam officiis quia repudiandae.',
  'Ad et labore quibusdam sit!',
  'Aliquam eius facere tenetur veniam!',
];
const SIMILAR_PHOTO_COUNT = 25;

const getRandomArrayElement = (elements) => elements[getRandomNumber(0, DESCRIPTIONS.length - 1)];

function counter() {
  const result = counter.value ? ++counter.value : counter.value = 1;
  return result;
}
const counterPad = () => `${counter.value}`.padStart(SIMILAR_PHOTO_COUNT.toString().length, 0);

const createPhotoEntity = () => ({
  id: counter(),
  url: `photos/${counterPad()}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomNumber(15, 200),
  comments: getRandomNumber(0, 200),
});

const similarPhotos = Array.from({length: SIMILAR_PHOTO_COUNT}, createPhotoEntity);

// eslint-disable-next-line no-console
console.log(
  similarPhotos
);
