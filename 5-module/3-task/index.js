function initCarousel() {
  let carousel = document.querySelector('.carousel');
  let carouselLength = document.querySelectorAll('.carousel__slide').length;
  let counter = 0;


  updateCarouselButtons();
  carousel.addEventListener('click', function (e) {
    let arrowRight = e.target.closest('.carousel__arrow_right');
    let arrowLeft = e.target.closest('.carousel__arrow_left');
    let carouselInner = carousel.querySelector('.carousel__inner');
    let carouselInnerWidth = carouselInner.offsetWidth;

    if (arrowRight || arrowLeft) {
      // Если arrowRight равен true (нажали, 1 == true), то counter увеличится на 1, в противном случае уменьшится на -1
      counter += arrowRight ? 1 : -1;
      carouselInner.style.transform = `translateX(${-carouselInnerWidth * counter}px)`;
      updateCarouselButtons();
    }
  }.bind(this));

  function updateCarouselButtons() {
    let carouselLeft = document.querySelector('.carousel__arrow_left');
    let carouselRight = document.querySelector('.carousel__arrow_right');

    counter === 0
      ? carouselLeft.style.display = 'none'
      : carouselLeft.style.display = '';

    counter === carouselLength - 1
      ? carouselRight.style.display = 'none'
      : carouselRight.style.display = '';
  }
}
