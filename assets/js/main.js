let $ = document.querySelector.bind(document)
let $$ = document.querySelectorAll.bind(document)

// Header sticky
let headerSticky = $('.header__nav')
let topBar = $('.header__topbar')
window.addEventListener('scroll', scrollFunction);

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        headerSticky.classList.add('scroll')
        topBar.classList.add('hide')
    } else {
        headerSticky.classList.remove('scroll')
        topBar.classList.remove('hide')
    }
}


// Search Button
let searchIcon = $('#search')
let input = $('.header__nav__container--search input')

searchIcon.onclick = function() {
    input.classList.toggle('active')
}

// Active link
let links = $$('.header__nav__container--list li')
let add = function() {
    $('.header__nav__container--list li.active').classList.remove('active')
    this.classList.add('active')
}
links.forEach(link => {
    link.addEventListener('click', add)
});

// Active Search
let tabs = $$('.search__container__tab')

tabs.forEach(tab => {
    tab.onclick = function() {
        $('.search__container__tab.active').classList.remove('active')
        this.classList.add('active')
    }
});

// Header menu modal

let box = $('.header__menu__overlay')
let boxBody = $('.header__menu__body--content')
let open = $('#menu_open')
let close = $('#menu_close')

open.onclick = function() {
    box.style.display = 'block';
    boxBody.classList.add('open')
}

close.onclick = function() {
    box.style.display = 'none'
    boxBody.classList.remove('open')
}


let preButton = $('#pre')
let nextButton = $('#next')
let header = $('.header')
console.log(header)

preButton.onclick = function() {
    $('.header.header__pre').classList.remove('header__pre')
}

nextButton.onclick = function() {
    $('.header.header__pre').classList.remove('header__pre')
}