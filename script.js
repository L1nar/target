let elem1 = document.querySelector('#elem1');
let elem2 = document.querySelector('#elem2');
let elem3 = document.querySelector('#elem3');

// метод event.stopPropagation(); - препятствует продвижению события дальше, но на текущем элементе все обработчики обрабатывают.
// метод event.stopImmediatePropagation(); - предотвращает всплытие и останавливает обработку событий на текущем элементе.

elem1.addEventListener('click', (event) => {
    console.log(event.target); //event.target - "целевой" элемент, на котором произошло событие.
})