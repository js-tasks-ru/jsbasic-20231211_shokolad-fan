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
    this.createTable();
    this.createThead();
    this.createTbody(rows);
  }


  createTable() {
    this.elem = document.createElement('table');
  }

  createThead() {
    let thead = document.createElement('thead');
    let tr = document.createElement('tr');

    let arrTh = ['Имя', 'Возраст', 'Зарплата', 'Город', ''];
    for (let elTh of arrTh) {

      tr.insertAdjacentHTML('beforeend', `<th>${elTh}</th>`);

      thead.append(tr);
    }
    this.elem.appendChild(thead);
  }

  createTbody(rows) {
    let tbody = document.createElement('tbody');

    for (let {name, age, salary, city} of rows) {
      let rowData = [name, age, salary, city];
      let tr = document.createElement('tr');

      rowData.forEach(value => {
        tr.insertAdjacentHTML('beforeend', `<td>${value}</td>`);
      });


      tr.insertAdjacentHTML('beforeend', `<td></td>`);
      let deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'X';
      deleteBtn.addEventListener('click', () => {
        tbody.removeChild(tr);
      });

      tr.lastElementChild.appendChild(deleteBtn);
      tbody.append(tr);
    }


    this.elem.appendChild(tbody);
  }


}


