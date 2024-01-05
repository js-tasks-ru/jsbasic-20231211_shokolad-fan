function isEmpty(obj = false) {
  for (let key in obj) {

    // hasOwnProperty проверяет наличие свойств только в самом объекте
    if (obj.hasOwnProperty(key)) {
      return false;
    }

    // оператор in проверяет наличие свойств как в самом объекте,
    // так и унаследованные от прототипа
    if (key in obj) {
      return false;
    }

  }
  return true;
}

// let schedule = {};
// console.log('isEmpty: ', isEmpty(schedule));
