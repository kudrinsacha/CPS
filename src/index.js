import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs';

const body = document.querySelector('body')
const overlay = document.querySelector('.overlay')
const buttonExpand = document.querySelector('.section-services__read-more')
const menu = document.querySelector('.menu')
const buttonOpenMenu = document.querySelector('.button__burger')
const buttonCloseMenu = document.querySelector('.button__close-menu')
const menuItems = document.querySelectorAll('.menu-main > .radio')
const feedback = document.querySelector('.feedback')
const buttonOpenFeedback = document.querySelector('.button__feedback')
const buttonCloseFeedback = document.querySelector('.feedback__close')
const orderCall = document.querySelector('.order-call')
const buttonOpenOrder = document.querySelector('.button__order-call')
const buttonCloseOrder = document.querySelector('.order-call__close')

let swiper;

swiper = new Swiper('.swiper', {
    spaceBetween: 16,
    width: 258,
    height: 72,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

buttonExpand.onclick = function () {
    const contentExpanded = document.querySelector('.section-services__text')
    const buttonArrow = document.querySelectorAll('.section-services__read-more > img')
    const buttonText = document.querySelectorAll('.section-services__read-more > span')

    contentExpanded.classList.toggle('expanded')

    buttonArrow.forEach((item) => {
        item.classList.toggle('hidden')
    })
    buttonText.forEach((item) => {
        item.classList.toggle('hidden')
    })
}

buttonOpenMenu.onclick = function () {
    menu.classList.add('active-menu')
    body.classList.add('lock')
    overlay.classList.add('blur')
}
buttonCloseMenu.onclick = function () {
    menu.classList.remove('active-menu')
    body.classList.remove('lock')
    overlay.classList.remove('blur')
}
buttonOpenFeedback.onclick = function () {
    feedback.classList.add('active-feedback')
}
buttonCloseFeedback.onclick = function () {
    feedback.classList.remove('active-feedback')
}
buttonOpenOrder.onclick = function () {
    orderCall.classList.add('active-feedback')
}
buttonCloseOrder.onclick = function () {
    orderCall.classList.remove('active-feedback')
}
body.onclick = function (e) {
    const withinBoundariesMenu = e.composedPath().includes(menu)
    const withinButtonMenu = e.composedPath().includes(buttonOpenMenu)
    const withinBoundariesFeedback = e.composedPath().includes(feedback)
    const withinButtonFeedback = e.composedPath().includes(buttonOpenFeedback)
    const withinBoundariesOrder = e.composedPath().includes(orderCall)
    const withinButtonOrder = e.composedPath().includes(buttonOpenOrder)

    if ( !withinBoundariesMenu && !withinButtonMenu ) {
        menu.classList.remove('active-menu')
        body.classList.remove('lock')
        overlay.classList.remove('blur')
    }
    if ( !withinBoundariesFeedback && !withinButtonFeedback ) {
        feedback.classList.remove('active-feedback')
    }
    if ( !withinBoundariesOrder && !withinButtonOrder ) {
        orderCall.classList.remove('active-feedback')
    }
}
menuItems.forEach((item) => {
    item.onclick = function () {
        menu.classList.remove('active-menu')
        body.classList.remove('lock')
        overlay.classList.remove('blur')
    }
})