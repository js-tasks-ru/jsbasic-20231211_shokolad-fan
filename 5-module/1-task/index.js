function hideSelf() {
  let btn = document.querySelector('.hide-self-button');

  btn.addEventListener('click', function (event) {
    let BUTTON = event.target.closest('BUTTON');

    if (BUTTON) {
      btn.hidden = !btn.hidden;
    }
  }.bind(this));
}
