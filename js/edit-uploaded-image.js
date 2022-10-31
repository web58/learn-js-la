const controlSmaller = document.querySelector('.scale__control--smaller'),
  controlBigger = document.querySelector('.scale__control--bigger'),
  controlInput = document.querySelector('.scale__control--value'),
  imageElement = document.querySelector('.img-upload__preview img'),
  effectRadioElements = document.querySelectorAll('.effects__radio'),
  effectLevelElement = document.querySelector('.effect-level'),
  effectSliderElement = document.querySelector('.effect-level__slider'),
  effectLevelValue = document.querySelector('.effect-level__value');

const STEP_SCALE = 25,
  MIN_VALUE_SCALE = 25,
  MAX_VALUE_SCALE = 100;

const EFFECT_LEVEL_SETTINGS = {
  chrome: {
    range: {
      min: 0,
      max: 1,
    },
    start: 1,
    step: 0.1,
  },
  sepia: {
    range: {
      min: 0,
      max: 1,
    },
    start: 1,
    step: 0.1,
  },
  marvin: {
    range: {
      min: 0,
      max: 100,
    },
    start: 100,
    step: 1,
  },
  phobos: {
    range: {
      min: 0,
      max: 3,
    },
    start: 3,
    step: 0.1,
  },
  heat: {
    range: {
      min: 1,
      max: 3,
    },
    start: 3,
    step: 0.1,
  }
};

const setStyleTransform = (value) => {
  imageElement.style.transform = `scale(${value / 100})`;
};

function resetImage () {
  imageElement.style.transform = '';
  imageElement.className = '';
  effectLevelElement.classList.add('visually-hidden');
  imageElement.style.filter = '';
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

noUiSlider.create(effectSliderElement, {
  range: {
    min: 0,
    max: 1,
  },
  start: 1,
  step: 0.1,
  connect: 'lower',
  format: {
    to: function (value) {
      if (Number.isInteger(value)) {
        return value.toFixed(0);
      }
      return value.toFixed(1);
    },
    from: function (value) {
      return parseFloat(value);
    }
  }
});

effectLevelElement.classList.add('visually-hidden');

effectRadioElements.forEach((radioInput) => {
  radioInput.addEventListener('input', () => {
    imageElement.className = `effects__preview--${radioInput.value}`;

    if (radioInput.value === 'none') {
      effectLevelElement.classList.add('visually-hidden');
      imageElement.style.filter = '';
    } else {
      effectLevelElement.classList.remove('visually-hidden');
      effectSliderElement.noUiSlider.updateOptions(EFFECT_LEVEL_SETTINGS[radioInput.value]);
    }
  });
});

effectSliderElement.noUiSlider.on('update', () => {
  const effect = document.querySelector('input[name="effect"]:checked').value;
  const effectValue = effectSliderElement.noUiSlider.get();
  effectLevelValue.value = effectValue;

  switch (effect) {
    case 'chrome':
      imageElement.style.filter = `grayscale(${effectValue})`;
      break;
    case 'sepia':
      imageElement.style.filter = `sepia(${effectValue})`;
      break;
    case 'marvin':
      imageElement.style.filter = `invert(${effectValue}%)`;
      break;
    case 'phobos':
      imageElement.style.filter = `blur(${effectValue}px)`;
      break;
    case 'heat':
      imageElement.style.filter = `brightness(${effectValue})`;
      break;
  }
});

export {resetImage};
