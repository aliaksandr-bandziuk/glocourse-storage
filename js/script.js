'use strict';

// форма "какие планы"
const todoControl = document.querySelector('.todo-control'),
// инпут "какие планы"
headerInput = document.querySelector('.header-input'),
// дела, которые надо сделать
todoList = document.querySelector('.todo-list'),
// выполненные дела
todoCompleted = document.querySelector('.todo-completed');


let arrayItems = localStorage.getItem('todo') ? JSON.parse(localStorage.getItem('todo')) : [];

// дела необходимо где-то хранить
// для этого создаем массив
const todoData = [];

// пишем функцию, которая будет рендерить (добавлять) эти дела
const render = function() {
    // очищаю строки от предыдущих дел, которые здесь были
    todoList.textContent = '';
    todoCompleted.textContent = '';
    headerInput.value = '';

    // функция должна перебирать todoData
    todoData.forEach(function(item){
        // item — это целый объект из todoData (в фигурных скобках)
        // добавляю само дело в список дел
        // для этого создаю новую переменную
        // li — потому что это список в файле html
        const li = document.createElement('li');
        // сразу же добавляю элементу списка нужный класс из верстки
        li.classList.add('todo-item');
        // теперь в li добавляю верстку
        // не только li, но и весь инпут с корзиной и галочкой
        li.innerHTML = '<span class="text-todo">' + item.value + '</span>' +
            '<div class="todo-buttons">' +
                '<button class="todo-remove"></button>' +
                '<button class="todo-complete"></button>' +
            '</div>';

        // при добавлении одного пункта все пункты перемещаются в невыполненные
        // потому что мы никак не учитвыаем, какой у нас completed (true или false)
        // для проверки напишем цикл
        // если item.completed = true...
        if(item.completed) {
            // ... то мы добавляем дело в todoCompleted
            todoCompleted.append(li);
        } else {
            // иначче...
            // добавляю полученное значение с версткой на страницу
            // добавляем в конец списка (append)
            todoList.append(li);
        }

        // получаем из li, которая в этот момент была создана
        // и навешиваем событие
        // работаем с кропкой галочки
        const btnTodoComplete = li.querySelector('.todo-complete');
        
        btnTodoComplete.addEventListener('click', function(){
            // меняем значение на противоположное
            item.completed = !item.completed;
            
            // чтобы это сработало, надо вызвать функцию render();
            // да, вызвать эту функцию внутри себя
            render();
        });

        const todoRemove = li.querySelector('.todo-remove');
        
        // удаляю данные
        todoRemove.addEventListener('click', function(){
            todoData.pop();
            li.remove(); 
            localStorage.removeItem('todo');
            });
        

        // записываем инфу в локал сторэдж
        localStorage.setItem('todo', JSON.stringify(todoData));

    });
};

// на форму вверху навешиваем событие
// событие submit, потому что кнопка <button>
todoControl.addEventListener('submit', function(event){
    // при нажатии Enter браузер перезагружает старницу
    // отменяю это стандартное поведение браузера
    event.preventDefault();

    // когда мы нажимаем "добавить дело",
    // то в массив todoData нужно добавить новый объект

    // обхявляем переменную, которая хранит объект
    // с данными, которые ввел пользователь
    const newTodo = {
        // headerInput.value — значение, полученное от пользователя
        value: headerInput.value,
        // false — еще не готово
        completed: false,
    };

    // если в верхнем инпуте пусто или пробелы...
    // ...то останавливаем все
    if (headerInput.value.trim() ==='') {
        return;
    }

    // добавляю в массив (todoData) новый объект (newTodo)
    // push — это "добавить"
    todoData.push(newTodo);

    // добавляю функцию render(), чтобы обновился список дел
    render();
});

// переключаю кнопки с галочкой
arrayItems.forEach(function(item){
    todoData.push(item);
    
});

// запускаю рендер как только страница загрузилась
render();

// 1. Реализовать удаление дела
// 2. Когда добавляю дело, поле вверху должно очищаться
// 3. Запретить добавление пустых полей
// 4. Сохранять все данные о делах (todoData) в localStorage
// При загрузке страницы мы должны получать из localStorage и сохранять в todoData