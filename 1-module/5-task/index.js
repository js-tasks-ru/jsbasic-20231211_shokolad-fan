function truncate(str, maxlength = 20) {
  if (typeof str !== 'string' || !str) {
    throw new Error('Передан не строковый аргумент');
  }

  // Проверка если str больше maxlength выполни условие
  // И верни строку равное maxlength - 1 (-1 что бы учитывать длину многоточий)
  if (str.length >= maxlength) {
    return str.slice(0, maxlength - 1) + '…';
  }

  // Если условие не проходит, верни str в оригинале
  return str;
}
