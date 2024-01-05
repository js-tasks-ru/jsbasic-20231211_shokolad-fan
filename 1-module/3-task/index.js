function ucFirst(str = '') {

  if (typeof str !== 'string') {
    throw new Error('Передан не строковый аргумент');
  }

  if (!str) {
    return str;
  }


  return str[0].toUpperCase() + str.slice(1);
  // return str[0].toUpperCase() + str.substring(1);
  // return str[0].toUpperCase() + str.substr(1);
}

// console.log('ucFirst: ', ucFirst(''));
