const controlSmaller = document.querySelector('.scale__control--smaller'),
  controlBigger = document.querySelector('.scale__control--bigger'),
  controlInput = document.querySelector('.scale__control--value'),
  imageElement = document.querySelector('.img-upload__preview img'),
  effectRadioElements = document.querySelectorAll('.effects__radio');

const STEP_SCALE = 25,
  MIN_VALUE_SCALE = 25,
  MAX_VALUE_SCALE = 100;

const setStyleTransform = (value) => {
  imageElement.style.transform = `scale(${value / 100})`;
};

function resetImage () {
  imageElement.style.transform = '';
  imageElement.className = '';
}

controlSmaller.addEventListener('click', () => {
  const curStepValue = parseInt(controlInput.value, 10);
  if (curStepValue > MIN_VALUE_SCALE) {
    controlInput.value = `${curStepValue - STEP_SCALE}%`;
    setStyleTransform(curStepValue - STEP_SCALE);
  }
});

controlBigger.addEventListener('click', () => {
  const curStepValue = parseInt(controlInput.value, 10);
  if (curStepValue < MAX_VALUE_SCALE) {
    controlInput.value = `${curStepValue + STEP_SCALE}%`;
    setStyleTransform(curStepValue + STEP_SCALE);
  }
});

effectRadioElements.forEach((radioInput) => {
  radioInput.addEventListener('input', () => {
    imageElement.className = `effects__preview--${radioInput.value}`;
  });
});

export {resetImage};
