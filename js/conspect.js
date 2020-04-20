'use strict';

// 1. Сначала объявляем переменные и подключаем к ним элементы из html
// 2. Потом навешиваем событие (клик, например) allEventListenet

// document.cookie = 'name=value';

// Получение значений из Storage
// function setStyles() {
//     var currentColor = localStorage.getItem('bgcolor');
//     var currentFont = localStorage.getItem('font');
//     var currentImage = localStorage.getItem('image');
  
//     document.getElementById('bgcolor').value = currentColor;
//     document.getElementById('font').value = currentFont;
//     document.getElementById('image').value = currentImage;
  
//     htmlElem.style.backgroundColor = '#' + currentColor;
//     pElem.style.fontFamily = currentFont;
//     imgElem.setAttribute('src', currentImage);
//   }
//   Здесь первые три строки извлекают значения из локального хранилища.
// Затем мы устанавливаем значения, отображаемые в элементах формы,
// на эти значения, чтобы они синхронизировались при перезагрузке страницы.
// Наконец, мы обновляем стили / декоративное изображение на странице,
// поэтому ваши параметры настройки снова появляются при перезагрузке.

// Установка значений в Storage
// Storage.setItem()используется как для создания новых элементов данных,
// так и (если элемент данных уже существует) для обновления существующих
// значений. Это принимает два аргумента - ключ элемента данных для
// создания / изменения и значение для хранения в нем.

// function populateStorage() {
//   localStorage.setItem('bgcolor', document.getElementById('bgcolor').value);
//   localStorage.setItem('font', document.getElementById('font').value);
//   localStorage.setItem('image', document.getElementById('image').value);

//   setStyles();
// }
// populateStorage()Функция устанавливает три элемента в локальном хранилище -
// цвет фона, шрифт, и путь изображения. Затем запускается setStyles()функция обновления стилей страницы и т. Д.

// Реагирование на изменения хранилища с помощью StorageEvent
// window.addEventListener('storage', function(e) {  
//     document.querySelector('.my-key').textContent = e.key;
//     document.querySelector('.my-old').textContent = e.oldValue;
//     document.querySelector('.my-new').textContent = e.newValue;
//     document.querySelector('.my-url').textContent = e.url;
//     document.querySelector('.my-storage').textContent = JSON.stringify(e.storageArea);
//   });
// Здесь мы добавляем прослушиватель событий к windowобъекту, который
// срабатывает при изменении Storageобъекта, связанного с текущим источником.
// Как вы можете видеть выше, объект события, связанный с этим событием, имеет ряд
// свойств, содержащих полезную информацию: ключ измененных данных, старое
// значение до изменения, новое значение после этого изменения, URL-адрес
// документа, который изменил хранилище и сам объект хранилища (который мы
// зачеркнули, чтобы вы могли видеть его содержимое).

// Удаление записей данных
// Веб-хранилище также предоставляет несколько простых методов удаления данных.
// Мы не используем их в нашей демонстрации, но их очень просто добавить
// в ваш проект:

// Storage.removeItem() принимает один аргумент - ключ элемента данных,
// который вы хотите удалить, - и удаляет его из объекта хранения для этого домена.
// Storage.clear() не принимает аргументов и просто очищает весь объект хранения для этого домена.


// Storage

// Объекты хранилища localStorage и sessionStorage предоставляют одинаковые методы и свойства (API):
// setItem(key, value) – сохранить пару ключ/значение.
// getItem(key) – получить данные по ключу key.
// removeItem(key) – удалить данные с ключом key.
// clear() – удалить всё.
// key(index) – получить ключ на заданной позиции.
// length – количество элементов в хранилище.


// Событие storage
// Когда обновляются данные в localStorage или sessionStorage, генерируется событие storage со следующими свойствами:

// key – ключ, который обновился (null, если вызван .clear()).
// oldValue – старое значение (null, если ключ добавлен впервые).
// newValue – новое значение (null, если ключ был удалён).
// url – url документа, где произошло обновление.
// storageArea – объект localStorage или sessionStorage, где произошло обновление.