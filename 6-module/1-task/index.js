/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */

export default class UserTable {
  constructor(rows) {
    this.elem = document.createElement('table');
    this.createHeader();
    this.createBody(rows);
  }

  createHeader() {
    let thead = document.createElement('thead');
    let tr = document.createElement('tr');

    let thElems = ['Имя', 'Возраст', 'Зарплата', 'Город', ''];

    thElems.forEach(elem => {
      let th = document.createElement('th');
      th.textContent = elem;
      tr.appendChild(th);
    });

    thead.appendChild(tr);
    this.elem.appendChild(thead);
  }

  createBody(rows) {
    let tbody = document.createElement('tbody');

    rows.forEach((el) => {
      let tr = document.createElement('tr');

      Object.entries(el).forEach(([key, value]) => {
        let td = document.createElement('td');
        td.textContent = value;
        tr.appendChild(td);
      });

      let td = document.createElement('td');
      let button = document.createElement('button');
      button.textContent = 'Х';
      button.addEventListener('click', () => {
        tr.remove();
      });
      td.appendChild(button);
      tr.appendChild(td);

      tbody.appendChild(tr);
    });

    this.elem.appendChild(tbody);
  }
}
