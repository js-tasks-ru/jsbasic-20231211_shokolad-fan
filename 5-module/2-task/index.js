function toggleText() {
  let btn = document.querySelector('.toggle-text-button');

  btn.addEventListener('click', function (e) {
    let idText = document.getElementById('text');
    let BUTTON = e.target.closest('BUTTON');

    if (BUTTON) {
      idText.hidden = !idText.hidden;
    }
  }.bind(this));
}
