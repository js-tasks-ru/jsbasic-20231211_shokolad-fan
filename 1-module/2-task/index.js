/**
 * Эту функцию трогать не нужно
 */
function print(text) {
  console.log(text);
}

/**
 * Эту функцию нужно поменять так,
 * чтобы функция sayHello работала корректно
 */
function isValid(name = '') {

  // Первый вариант написания
  // 1. Превращает name в логический тип, если name отсутствует или имеет ложное значение
  // Undefined, null, false или пустую строку ''
  // 2. includes проверяет нахождение пробела ВО ВСЕМ name и возвращает логический результат
  if (!name || name.includes(' ')) {
    return false;
  }


  // Второй вариант написания
  // 2. indexOf проверяет нахождение пробела ВО ВСЕМ name и возвращает логический результат
  // Вариант проверки написан через побитовый оператор,
  // можно написать так name.indexOf(' ') !== -1
  if (!name || ~name.indexOf(' ')) {
    return false;
  }

  // Третий вариант написания
  // lastIndexOf, аналог indexOf, но с конца
  // можно написать так name.lastIndexOf(' ') !== -1
  if (!name || ~name.lastIndexOf(' ')) {
    return false;
  }


  // Четвертый вариант с использованием starsWith и endsWith делает проверку В НАЧАЛЕ и В КОНЦЕ строки,
  // но никак НЕ В СЕРЕДИНЕ


  // Возвращается результат строки не меньше или более четырех символов включительно
  return name.length >= 4;
}

console.log('isValid', isValid('')); // false
console.log('isValid', isValid('Ilia Burlak')); // false
console.log('isValid', isValid('Ili')); // false
console.log('isValid', isValid('IliaBurlak')); // true


function sayHello() {
  let userName = prompt('Введите ваше имя');

  if (isValid(userName)) {
    print(`Welcome back, ${userName}!`);
  } else {
    print('Некорректное имя');
  }
}
