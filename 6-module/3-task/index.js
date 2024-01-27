import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    this.currentSlideIndex = 0;
    this.render();
  }

  render() {
    this.elem = createElement(`
      <div class="carousel">
        <div class="carousel__arrow carousel__arrow_left" style="display: none">
          <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
        </div>
        <div class="carousel__inner">
          ${this.slides.map(slide => this.createSlide(slide)).join('')}
        </div>
        <div class="carousel__arrow carousel__arrow_right">
          <img src="/assets/images/icons/angle-right-icon.svg" alt="icon">
        </div>
      </div>
    `);

    this.carouselInner = this.elem.querySelector('.carousel__inner');
    this.arrowLeft = this.elem.querySelector('.carousel__arrow_left');
    this.arrowRight = this.elem.querySelector('.carousel__arrow_right');

    this.elem.addEventListener('click', (event) => {
      if (event.target.closest('.carousel__button')) {
        this.emitProductAddEvent();
      }
      if (event.target.closest('.carousel__arrow_left')) {
        this.prevSlide();
      }
      if (event.target.closest('.carousel__arrow_right')) {
        this.nextSlide();
      }
    });

    this.updateCarousel();
  }

  createSlide(slide) {
    return `
      <div class="carousel__slide" data-id="${slide.id}">
        <img src="/assets/images/carousel/${slide.image}" class="carousel__img" alt="slide">
        <div class="carousel__caption">
          <span class="carousel__price">€${slide.price.toFixed(2)}</span>
          <div class="carousel__title">${slide.name}</div>
          <button type="button" class="carousel__button">
            <img src="/assets/images/icons/plus-icon.svg" alt="icon">
          </button>
        </div>
      </div>
    `;
  }

  prevSlide() {
    this.currentSlideIndex = (this.currentSlideIndex - 1 + this.slides.length) % this.slides.length;
    this.updateCarousel();
  }

  nextSlide() {
    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.slides.length;
    this.updateCarousel();
  }

  updateCarousel() {
    const slideWidth = this.carouselInner.offsetWidth;
    const translateX = -slideWidth * this.currentSlideIndex;

    this.carouselInner.style.transform = `translateX(${translateX}px)`;

    this.arrowLeft.style.display = this.currentSlideIndex === 0 ? 'none' : 'flex';
    this.arrowRight.style.display = this.currentSlideIndex === this.slides.length - 1 ? 'none' : 'flex';
  }

  emitProductAddEvent() {
    const slideId = this.slides[this.currentSlideIndex].id;
    const event = new CustomEvent('product-add', {
      detail: slideId,
      bubbles: true,
    });
    this.elem.dispatchEvent(event);
  }
}
