import {createElement} from "./utils.js";
import App from "./app.js";
import Store from "./store.js";

const store = new Store({
    list: [
        {code: 1, title: 'Название элемента'},
        {code: 2, title: 'Некий объект'},
        {code: 3, title: 'Заголовок'},
        {code: 4, title: 'Очень длинное название элемента из семи слов'},
        {code: 5, title: 'Запись', selected: true},
        {code: 6, title: 'Шестая запись'},
        {code: 7, title: 'Седьмая запись'},
    ]
});

store.subscribe(() => {
    // Удаляем содержимое body
    while (document.body.lastElementChild) document.body.removeChild(document.body.lastElementChild);

    // Добавляем в body новый рендер приложения
    document.body.append(
        App({store})
    );
});

// const app = App({store});

// const h1 = document.createElement('h1');
// h1.textContent = 'Приложение на чистом JS';

// const head = document.createElement('div');
// head.className = 'App-head';
// head.append(h1);

// const app = document.createElement('div');
// app.className = 'App';
// app.append(head);

// Первый рендер приложения
document.body.append(App({store}));