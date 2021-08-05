var $ = document.querySelector.bind(document)
var $$ = document.querySelectorAll.bind(document)

// Header sticky
var headerSticky = $('.header__nav')
var topBar = $('.header__topbar')
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
var searchIcon = $('#search')
var input = $('.header__nav__container--search input')

searchIcon.onclick = function() {
    input.classList.toggle('active')
}

// Active link
var links = $$('.header__nav__container--list li')
var add = function() {
    $('.header__nav__container--list li.active').classList.remove('active')
    this.classList.add('active')
}
links.forEach(link => {
    link.addEventListener('click', add)
});

// Active Search
var tabs = $$('.search__container__tab')

tabs.forEach(tab => {
    tab.onclick = function() {
        $('.search__container__tab.active').classList.remove('active')
        this.classList.add('active')
    }
});

// Header menu modal

var box = $('.header__menu__overlay')
var boxBody = $('.header__menu__body--content')
var open = $('#menu_open')
var close = $('#menu_close')

open.onclick = function() {
    box.style.display = 'block';
    boxBody.classList.add('open')
}

close.onclick = function() {
    box.style.display = 'none'
    boxBody.classList.remove('open')
};

// Stats

function start(stats, color) {
    var statsLeft = stats.querySelector('.stats__bar__perc--left')
    var statsRight = stats.querySelector('.stats__bar__perc--right')
    var valueElement = stats.querySelector('.stats__bar__value')
    var dataX = parseInt(stats.getAttribute("data-x"))
    var dataY = parseInt(stats.getAttribute("data-y"))

    var value = (dataY - dataX) / dataX * 100
    var percX = dataX / (dataX + dataY) * 100
    var percY = dataY / (dataX + dataY) * 100

    statsLeft.style.width = percX + "%"
    statsRight.style.width = percY + "%"
    statsRight.style.background = color
    if (value > 0) {
        valueElement.innerText = "+" + Math.round(value) + "%"
    } else {
        valueElement.innerText = Math.round(value) + "%"
    }
}

start($('.stats__bar'), '#31124b');
start($('.stats__bar.data2'), '#a95ce4');
start($('.stats__bar.data3'), 'red');
start($('.stats__bar.data4'), '#fa9e1b');