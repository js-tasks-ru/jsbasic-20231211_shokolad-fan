import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    this.counter = 0;
    this.elem = this.createCarouse();
    this.hiddenCarouselButtons();
    this.customEvent();
  }

  createCarouse() {
    let carousel = createElement('<div class="carousel"></div>');
    let carouselInner = createElement('<div class="carousel__inner"></div>');

    this.slides.forEach(el => {
      let slide = createElement(`
        <div class="carousel__slide" data-id="${el.id}">
          <img src="/assets/images/carousel/${el.image}" class="carousel__img" alt="slide">
          <div class="carousel__caption">
            <span class="carousel__price">€${el.price.toFixed(2)}</span>
            <div class="carousel__title">${el.name}</div>
            <button type="button" class="carousel__button">
              <img src="/assets/images/icons/plus-icon.svg" alt="icon">
            </button>
          </div>
        </div>
      `);
      carouselInner.appendChild(slide);
    });


    let carouseArrowLeft = createElement(`
            <div class="carousel__arrow carousel__arrow_left">
                <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
            </div>`
    );
    let carouseArrowRight = createElement(`
            <div class="carousel__arrow carousel__arrow_right">
                <img src="/assets/images/icons/angle-icon.svg" alt="icon">
            </div>`
    );


    carousel.addEventListener('click', function (e) {
      let arrowRight = e.target.closest('.carousel__arrow_right');
      let arrowLeft = e.target.closest('.carousel__arrow_left');
      let carouselInner = carousel.querySelector('.carousel__inner');
      let carouselInnerWidth = carouselInner.offsetWidth;


      if (arrowRight || arrowLeft) {
        this.counter += arrowRight ? 1 : -1;
        carouselInner.style.transform = `translateX(${-carouselInnerWidth * this.counter}px)`;

        this.hiddenCarouselButtons();
        this.customEvent();
      }

    }.bind(this));


    carousel.appendChild(carouseArrowLeft);
    carousel.appendChild(carouseArrowRight);
    carousel.appendChild(carouselInner);
    return carousel;
  }


  hiddenCarouselButtons() {
    let carouselLength = this.slides.length;
    let carouseArrowLeft = this.elem.querySelector('.carousel__arrow_left');
    let carouseArrowRight = this.elem.querySelector('.carousel__arrow_right');

    this.counter === 0
      ? carouseArrowLeft.style.display = 'none'
      : carouseArrowLeft.style.display = '';

    this.counter === carouselLength - 1
      ? carouseArrowRight.style.display = 'none'
      : carouseArrowRight.style.display = '';
  }

  customEvent() {
    let btns = this.elem.querySelectorAll('.carousel__button');

    btns.forEach(btn => {

      btn.addEventListener('click', function (e) {
        let BTN = e.target.closest('BUTTON');

        if (BTN) {
          let currentSlide = BTN.closest('.carousel__slide');
          if (currentSlide) {
            let dataId = currentSlide.dataset.id;

            let myEvent = new CustomEvent('product-add', {
              detail: dataId,
              bubbles: true
            });

            this.elem.dispatchEvent(myEvent);
          }
        }

      }.bind(this));

    });
  }
}
