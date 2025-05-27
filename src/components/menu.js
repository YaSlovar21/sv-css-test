const menuOpenButton = document.querySelector('.menu-open');
const menuAside = document.querySelector('.menu-aside')

function handleToogleMenu(evt) {
    if (menuAside.classList.contains('layout__aside_open')) {
        menuAside.classList.remove('layout__aside_open');
        menuOpenButton.classList.remove('menu__checkbox_open');
    } else {
        menuAside.classList.add('layout__aside_open');
        menuOpenButton.classList.add('menu__checkbox_open');
    }
}

menuOpenButton.addEventListener('click', handleToogleMenu);