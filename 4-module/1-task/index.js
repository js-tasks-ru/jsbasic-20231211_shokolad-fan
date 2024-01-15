function makeFriendsList(friends = []) {

  // Создаем через document тег 'ul'
  let ulTag = document.createElement('ul');

  // Итерируемся по массиву friends
  for (let friend of friends) {

    // Создаем через document тег 'li'
    let liTag = document.createElement('li');

    // Добавляем текстовое содержимое в элемент <li>
    liTag.textContent = `${friend.firstName} ${friend.lastName}`;

    // С помощью appendChild добавляет новый узел в конец списка дочерних элементов
    ulTag.appendChild(liTag);
  }

  // Возвращаем тег ul и все его дочерние элементы
  return ulTag;
}


