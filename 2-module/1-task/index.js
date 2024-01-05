function sumSalary(salaries = 0) {

  if (
    !salaries
    || Array.isArray(salaries)
    || typeof salaries === 'number'
    || (typeof salaries === 'string' && salaries.trim() === '')
  ) {
    throw new Error('Входящим параметром должен быть только объект');
  }

  let results = 0;

  for (let key in salaries) {
    // Number.isFinite строгая проверка,
    // является ли значения number
    // а далее на NaN Infinity -Infinity
    if (Number.isFinite(salaries[key])) {
      results += salaries[key];
    }
  }
  return results;
}
