function checkSpam(str = '') {

  if (typeof str !== 'string' || !str) {
    throw new Error('Передан не строковый аргумент');
  }


  // Создаем хэш таблицу
  let hashTable = ['1xBet', 'XXX'];
  // Создаем новый массив и приводим его весь к нижнему регистру
  let lowerCaseHashTableTable = hashTable.map(el => el.toLowerCase());


  // Проводим итерации через цикл for of
  for (let word of lowerCaseHashTableTable) {
    // Выполняем условие
    // 1. Приводим аргумент (параметр) str к нижнему регистру
    // 2. Ищем совпадения в хэш таблице
    // Вместо побитового оператора можно через -1 и includes
    if (~(str.toLowerCase().indexOf(word))) {
      return true;
    }
  }

  return false;
}
