import {createElement} from "./utils.js";

const app = createElement('div', {className: 'App'},
    createElement('div', {className: 'App-head'},
        createElement('h1', {textContent: 'Приложение на чистом JS'})
    ),
    createElement('div', {className: 'App-controls'},
        createElement('button', {textContent: 'Добавить'}),
    ),
);


// const h1 = document.createElement('h1');
// h1.textContent = 'Приложение на чистом JS';

// const head = document.createElement('div');
// head.className = 'App-head';
// head.append(h1);

// const app = document.createElement('div');
// app.className = 'App';
// app.append(head);

document.body.append(app);