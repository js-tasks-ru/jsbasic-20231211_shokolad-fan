function hideSelf() {
  let btn = document.querySelector('.hide-self-button');

  btn.addEventListener('click', function (event) {
    let buttonClosest = btn.closest('BUTTON');
    if (buttonClosest) {
      event.target.hidden = true;
    }
  });
}
