function makeFriendsList(friends = []) {
  let ul = document.createElement('UL');

  friends.forEach(el => {
    ul.insertAdjacentHTML('beforeend', `<li>${el.firstName} ${el.lastName}</li>`);
  });

  return ul;
}


