function showSalary(users = [], age = 0) {

  if (!Array.isArray(users) || !Number.isFinite(age) || !Number.isInteger(age)) {
    throw new Error('Первый аргумент массив, второй аргумент целое не отрицательное число');
  }

  let result = '';
  let hasValidUser = false;


  for (let i = 0; i < users.length; i++) {

    if (users[i].age <= age) {
      result += `${users[i].name}, ${users[i].balance}\n`;
      hasValidUser = true;
    }

  }

  return hasValidUser ? result.trim() : 'Not Result';

  // return users.filter((el) => el.age <= age).map((el) => `${el.name}, ${el.balance}`).join('\n');
}
