function highlight(table) {
  let tbody = table.querySelector('tbody');
  let rows = tbody.querySelectorAll('tr');

  for (let i = 0; i < rows.length; i++) {
    let statusCell = rows[i].querySelector('td[data-available]');
    let genderCell = rows[i].querySelector('td:nth-child(3)');
    let ageCell = rows[i].querySelector('td:nth-child(2)');

    if (!statusCell) {
      rows[i].hidden = !rows[i].hidden;
    }

    if (statusCell) {
      let statusValue = statusCell.getAttribute('data-available');
      rows[i].classList.toggle(statusValue === 'true' ? 'available' : 'unavailable');
    }

    if (genderCell) {
      let genderValue = genderCell.textContent;
      rows[i].classList.toggle(genderValue === 'm' ? 'male' : 'female');
    }

    if (ageCell) {
      let ageValue = ageCell.textContent;
      rows[i].style.textDecoration = ageValue <= 18 ? 'line-through' : '';
    }
  }

  return table;
}
