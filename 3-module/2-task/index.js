function filterRange(arr = [0], a = 0, b = 0) {

  if (Array.isArray(arr) && arr.length === 0) {
    throw new Error('Входящий параметром должен быть только массив');
  }

  let result = [];

  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] >= a && arr[i] <= b) {
      result.push(arr[i]);
    }
  }


  return result;
  // return deepCopy.filter(el => el >= a && el <= b);
}


