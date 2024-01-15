function highlight(table) {
  let rows = table.getElementsByTagName('tbody')[0].getElementsByTagName('tr');

  for (let row of rows) {
    let statusCell = row.getElementsByTagName('td')[3];
    let genderCell = row.getElementsByTagName('td')[2];
    let ageCell = row.getElementsByTagName('td')[1];

    // Установка класса available/unavailable в зависимости от значения атрибута data-available
    if (statusCell.hasAttribute('data-available')) {
      let available = statusCell.getAttribute('data-available');
      if (available === 'true') {
        statusCell.parentNode.classList.add('available');
      } else {
        statusCell.parentNode.classList.add('unavailable');
      }
    } else {
      // Установка атрибута hidden, если атрибута data-available нет вообще
      statusCell.parentNode.setAttribute('hidden', '');
    }

    // Установка класса male/female в зависимости от значения ячейки Gender
    if (genderCell.textContent === 'm') {
      genderCell.parentNode.classList.add('male');
    } else if (genderCell.textContent === 'f') {
      genderCell.parentNode.classList.add('female');
    }

    // Добавление inline-стиля text-decoration: line-through, если значение ячейки Age меньше 18
    let ageValue = parseInt(ageCell.textContent);
    if (ageValue < 18) {
      ageCell.parentNode.style.textDecoration = 'line-through';
    }
  }
}
