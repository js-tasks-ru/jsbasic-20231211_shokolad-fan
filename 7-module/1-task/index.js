import createElement from '../../assets/lib/create-element.js';

export default class RibbonMenu {
  constructor(categories) {
    this.categories = categories;
    this.elem = this.renderMenu();
    this.hiddenBtn();
    this.customEvent();
  }

  renderMenu() {
    let ribbon = createElement(`<div class="ribbon"></div>`);
    let ribbonInner = createElement(`<div class="ribbon__inner"></div>`);

    this.categories.forEach(el => {
      let item = createElement(`
         <a href="#" class="ribbon__item" data-id=${el.id}>${el.name}</a>
      `);
      ribbonInner.appendChild(item);
    });

    let ribbonLeft = createElement(`
            <button class="ribbon__arrow ribbon__arrow_left ribbon__arrow_visible">
                 <img src="/assets/images/icons/angle-icon.svg" alt="icon">
             </button>
    `);

    let ribbonRight = createElement(`
            <button class="ribbon__arrow ribbon__arrow_right">
                <img src="/assets/images/icons/angle-icon.svg" alt="icon">
            </button>
    `);


    ribbon.addEventListener('click', function (e) {
      let ribbonArrowLeft = e.target.closest('.ribbon__arrow_left');
      let ribbonArrowRight = e.target.closest('.ribbon__arrow_right');

      if (ribbonArrowLeft || ribbonArrowRight) {
        ribbonArrowRight ? ribbonInner.scrollBy(350, 0) : ribbonInner.scrollBy(-350, 0);
        this.hiddenBtn();
        this.customEvent();
      }

    }.bind(this));

    ribbon.appendChild(ribbonLeft);
    ribbon.appendChild(ribbonInner);
    ribbon.appendChild(ribbonRight);
    return ribbon;
  }

  hiddenBtn() {
    let ribbonScroll = this.elem.querySelector('.ribbon__inner');
    let ribbonLeft = this.elem.querySelector('.ribbon__arrow_left');
    let ribbonRight = this.elem.querySelector('.ribbon__arrow_right');

    let scrollRight = ribbonScroll.scrollWidth - ribbonScroll.scrollLeft - ribbonScroll.clientWidth;

    if (ribbonScroll.scrollLeft === 0) {
      ribbonLeft.classList.toggle('ribbon__arrow_visible');
    }

    if (scrollRight <= 185) {
      ribbonRight.classList.toggle('ribbon__arrow_visible');
    }

  }

  customEvent() {

    let hrefs = this.elem.querySelectorAll('.ribbon__inner');

    hrefs.forEach(href => {
      href.addEventListener('click', function (e) {
        e.preventDefault();

        let A = e.target.closest('A');
        if (A) {

          let item = A.closest('.ribbon__item');

          if (item) {
            let dataId = item.dataset.id;

            item.classList.toggle('ribbon__item_active');

            let myEvent = new CustomEvent('ribbon-select', {
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
