function factorial(n = 0) {
  // Проверка на число || Проверка меньше ли значение переменной || Проверка на цельное число
  if (typeof n !== 'number' || n < 0 || !Number.isInteger(n)) {
    throw new Error('Укажите целое неотрицательное число');
  }

  if (n === 0 || n === 1) {
    return 1;
  }

  let result = 1;

  // Почему изначально пишем let i = 2?
  // Потому что умножение будет начинаться с числа 2;
  // Одну лишнюю итерацию 1 * 1 можно пропустить

  // i <= n что бы умножалось до включительно числа n
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}


console.log('factorial: ', factorial(5));
