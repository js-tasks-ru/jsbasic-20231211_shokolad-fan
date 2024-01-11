function namify(users = ['']) {

  if (Array.isArray(users) && users.length === 0) {
    throw new Error('Входящий параметром должен быть только массив');
  }

  let result = [];

  for (let i = 0; i < users.length; i++) {
    if (users[i].name) {
      result.push(users[i].name);
    }

    // users[i].name ? result.push(users[i].name) : '';
  }


  return result;
  // return users.map(el => el.name);
}
