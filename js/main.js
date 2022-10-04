//Функция, возвращающая случайное целое число
const getRandomNumber = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const result = Math.floor(Math.random() * (max - min + 1)) + min;
  return (min >= max || min < 0) ? NaN : result;
};
getRandomNumber(6, 666);

//Функция для проверки максимальной длины строки.
const checkMaxLengthOfStr = (str, maxLength) => str.length <= maxLength;
checkMaxLengthOfStr('dfvnv rfgrieognrk grjegnr', 22);
