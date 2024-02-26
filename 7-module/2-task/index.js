import createElement from '../../assets/lib/create-element.js';

export default class Modal {
  constructor() {
    this.render();

    this.buttonClosing();
    this.escapeListener = this.escapeClosing.bind(this);
  }

  render() {
    this.elem = createElement(`
      <div class="modal">
        <div class="modal__overlay"/>
        <div class="modal__inner">
          <div class="modal__header">
            <button type="button" class="modal__close">
              <img src="/assets/images/icons/cross-icon.svg" alt="close-icon" />
            </button>
            <h3 class="modal__title"></h3>
          </div>
          <div class="modal__body"></div>
        </div>
      </div>
    `);
  }

  open() {
    document.body.classList.add('is-modal-open');
    document.body.appendChild(this.elem);
    document.addEventListener('keydown', this.escapeListener);
  }

  close() {
    document.body.classList.remove('is-modal-open');
    this.elem.remove();
    document.removeEventListener('keydown', this.escapeListener);
  }

  sub(ref) {
    return this.elem.querySelector(`.modal__${ref}`);
  }

  setTitle(value) {
    this.sub('title').textContent = value;
  }

  setBody(value) {
    this.sub('body').innerHTML = '';
    this.sub('body').appendChild(value);
  }

  buttonClosing() {
    this.sub('close').addEventListener('click', () => this.close());
  }

  escapeClosing(e) {
    let codeEscape = e.keyCode === 27 || e.key === 'Escape';

    if (codeEscape) {
      this.close();
    }

  }
}
