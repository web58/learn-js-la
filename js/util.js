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

function counter() {
  const result = counter.value ? ++counter.value : counter.value = 1;
  return result;
}

const getRandomArrayElement = (elements) => elements[getRandomNumber(0, elements.length - 1)];

export {getRandomNumber, counter, getRandomArrayElement};
