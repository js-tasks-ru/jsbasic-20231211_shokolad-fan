function initCarousel() {
  // buttons
  let carouselArrowLeft = document.querySelector('.carousel__arrow_left');
  let carouselArrowRight = document.querySelector('.carousel__arrow_right');

  // carousel
  let carousel = document.querySelector('.carousel__inner');
  let carouselSlide = document.querySelectorAll('.carousel__slide');

  // counter
  let counter = 0;

  // carouselWidth
  let carouselWidth = carousel.offsetWidth;
  // Или через clientWidth
  // let carouselWidth = carouselSlide[0].clientWidth;


  updateButtonVisibility();

  carouselArrowLeft.addEventListener('click', function () {
    counter--;
    carousel.style.transform = 'translateX(' + `${-carouselWidth * counter}px)`;

    updateButtonVisibility();
  });

  carouselArrowRight.addEventListener('click', function () {
    counter++;
    carousel.style.transform = 'translateX(' + `${-carouselWidth * counter}px)`;

    updateButtonVisibility();
  });


  function updateButtonVisibility() {
    // Показываем или скрываем кнопку влево в зависимости от положения слайда
    if (counter <= 0) {
      carouselArrowLeft.style.display = 'none';
    } else {
      carouselArrowLeft.style.display = '';
    }

    // Показываем или скрываем кнопку вправо в зависимости от положения слайда
    if (counter >= carouselSlide.length - 1) {
      carouselArrowRight.style.display = 'none';
    } else {
      carouselArrowRight.style.display = '';
    }
  }

}
