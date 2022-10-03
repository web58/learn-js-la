//Функция, возвращающая случайное целое число
const getRandomNumber = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const result = Math.floor(Math.random() * (max - min + 1)) + min;
  return ((min >= max) || min < 0 || !Number.isInteger(result)) ? NaN : result;
};

//Функция для проверки максимальной длины строки.
const checkMaxLengthOfStr = (string, maxLength) => string.length <= maxLength;
