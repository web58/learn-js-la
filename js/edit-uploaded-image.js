const controlSmaller = document.querySelector('.scale__control--smaller'),
  controlBigger = document.querySelector('.scale__control--bigger'),
  controlInput = document.querySelector('.scale__control--value'),
  imageElement = document.querySelector('.img-upload__preview img'),
  effectRadioElements = document.querySelectorAll('.effects__radio');

const STEP_SCALE = 25,
  MIN_VALUE_SCALE = 25,
  MAX_VALUE_SCALE = 100;

const getIntegerStepValue = () => parseInt(controlInput.value, 10);

const setStyleTransform = () => {
  imageElement.style.transform = `scale(${getIntegerStepValue() / 100})`;
};

function resetImage () {
  imageElement.style.transform = '';
  imageElement.className = '';
}

controlSmaller.addEventListener('click', () => {
  if (getIntegerStepValue() > MIN_VALUE_SCALE) {
    controlInput.value = `${getIntegerStepValue() - STEP_SCALE}%`;
    setStyleTransform();
  }
});

controlBigger.addEventListener('click', () => {
  if (getIntegerStepValue() < MAX_VALUE_SCALE) {
    controlInput.value = `${getIntegerStepValue() + STEP_SCALE}%`;
    setStyleTransform();
  }
});

effectRadioElements.forEach((radioInput) => {
  radioInput.addEventListener('input', () => {
    imageElement.className = `effects__preview--${radioInput.value}`;
  });
});

export {resetImage};
