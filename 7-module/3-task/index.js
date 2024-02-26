import createElement from '../../assets/lib/create-element.js';

export default class StepSlider {
  constructor({value = 0, steps}) {
    this.value = value;
    this.steps = steps;
    this.render();
    this.addEventListeners();
  }

  render() {
    this.elem = createElement(`
       <div class="slider">
            <div class="slider__thumb">
               <span class="slider__value">${this.value}</span>
            </div>
            <div class="slider__progress"/>

             <div class="slider__steps">
               ${this.generateSteps()}
             </div>
       </div>
      `);
  }

  generateSteps() {
    let stepsHtml = '';
    for (let i = 0; i < this.steps; i++) {
      const isActive = i === this.value ? 'slider__step-active' : '';
      stepsHtml += `<span class="${isActive}"></span>`;
    }
    return stepsHtml;
  }

  sub(ref) {
    return this.elem.querySelector(`.slider__${ref}`);
  }

  addEventListeners() {
    this.elem.addEventListener('click', (event) => this.changeSlider(event));
  }

  changeSlider(event) {
    let left = event.clientX - this.elem.getBoundingClientRect().left;
    let leftRelative = left / this.elem.offsetWidth;
    let segments = this.steps - 1;
    let approximateValue = leftRelative * segments;
    let value = Math.round(approximateValue);

    // Обновляем значение слайдера
    this.updateSliderValue(value);

    // Генерируем пользовательское событие
    this.emitChangeEvent(value);
  }

  updateSliderValue(newValue) {
    // Обновляем значение слайдера
    this.value = newValue;

    // Обновляем отображение слайдера
    this.sub('value').innerHTML = newValue;
    this.updateStepsHighlight();
    this.updateThumbPosition();
    this.updateProgressWidth();
  }

  updateStepsHighlight() {
    // Убираем выделение со всех шагов
    this.sub('steps').querySelectorAll('.slider__step-active').forEach((step) => {
      step.classList.remove('slider__step-active');
    });

    // Выделяем активный шаг
    this.sub('steps').querySelectorAll('.slider__steps span')[this.value].classList.add('slider__step-active');
  }

  updateThumbPosition() {
    let valuePercents = (this.value / (this.steps - 1)) * 100;
    this.sub('thumb').style.left = `${valuePercents}%`;
  }

  updateProgressWidth() {
    this.sub('progress').style.width = `${(this.value / (this.steps - 1)) * 100}%`;
  }

  emitChangeEvent(value) {
    // Генерируем пользовательское событие slider-change
    this.elem.dispatchEvent(new CustomEvent('slider-change', {
      detail: value,
      bubbles: true
    }));
  }
}
