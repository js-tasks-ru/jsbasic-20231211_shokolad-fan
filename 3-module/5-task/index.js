function getMinMax(str = '') {
  let result = {
    min: 0,
    max: 0
  };

  // Разбиваем str на массив слов
  let splitStr = str.split(' ');


  let numbers = splitStr
    // С помощью map преобразуем массив к условию + (создавая глубокую копию)
    // C помощью метода parseFloat() читаем числа из полученных строк
    .map(item => parseFloat(item))
    // С помощью filter фильтруем новый массив и возвращаем весь массив который подходит по условию
    // C помощью унарного + проверяем что это число и убираем NaN из массива
    .filter(item => +item);

  // На выходе только числа


  if (numbers.length > 0) {
    // Сортируем от меньшего к большему
    let sortNumbers = numbers.sort((a, b) => a - b);
    // Первый элемент
    result.min = sortNumbers[0];
    // Последний элемент
    result.max = sortNumbers.at(sortNumbers.length - 1);
  }

  return result;
}
