import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs';

const body = document.querySelector('body')
const overlay = document.querySelector('.overlay')
const buttonExpand = document.querySelector('.section-services__read-more')
const buttonsShow = document.querySelectorAll('.swiper-show')
const menu = document.querySelector('.menu')
const buttonOpenMenu = document.querySelector('.button__burger')
const buttonCloseMenu = document.querySelector('.button__close-menu')
const menuItems = document.querySelectorAll('.menu-main > .radio')
const feedback = document.querySelector('.feedback')
const buttonOpenFeedback = document.querySelector('.button__feedback')
const buttonOpenFeedbackHeader = document.querySelector('.button__header-feedback')
const buttonCloseFeedback = document.querySelector('.feedback__close')
const buttonOrderCall = document.querySelector('.button__order-call')
const buttonOrderCallHeader = document.querySelector('.button__header-order-call')
const inputs = document.querySelectorAll('.feedback__inputs > label')
const feedbackTitle = document.querySelector('.feedback__title')
const orderTitle = document.querySelector('.order-call__title')
const slider = document.querySelector('.swiper')


let swiper;

function swiperResize() {

    if (window.innerWidth < 768 && slider.dataset.mobile === 'true') {
        const slides = document.querySelectorAll('.swiper-brands-slide:nth-child(n + 10), .swiper-technique-slide:nth-child(n + 10)')

        swiper = new Swiper('.swiper', {
            spaceBetween: 16,
            width: 258,
            height: 72,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });
        buttonsShow.forEach((button) => {
            button.classList.add('hidden')
        })
        slides.forEach((item) => {
            item.classList.add('hidden')
        })
        slider.dataset.mobile = "false";
    }
    if (window.innerWidth > 767) {
        const slides = document.querySelectorAll('.swiper-slide')
        if (slider.classList.contains("swiper-initialized")) {
            swiper[0].destroy();
            swiper[1].destroy();
            swiper[2].destroy();
        }
        slides.forEach((slide) => {
            slide.classList.remove('hidden')
        })
        buttonsShow.forEach((button) => {
            button.classList.remove('hidden')
        })
        slider.dataset.mobile = "true"
    }
}

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
buttonOpenFeedback.onclick = buttonOpenFeedbackHeader.onclick = function () {
    body.classList.add('lock')
    overlay.classList.add('blur')
    if (feedback.classList.contains('active-order')) {
        feedback.classList.remove('active-order')
        setTimeout(() => {
            feedback.classList.toggle('active-feedback')
            feedbackTitle.classList.remove('hidden')
            orderTitle.classList.add('hidden')
            inputs.forEach((input) => {
                input.classList.remove('hidden')
            })
        }, 300)
    } else {
        feedback.classList.toggle('active-feedback')
        feedbackTitle.classList.remove('hidden')
        orderTitle.classList.add('hidden')
        inputs.forEach((input) => {
            input.classList.remove('hidden')
        })
    }
    if (window.innerWidth > 1339) {
        menu.classList.add('blur')
    }
}
buttonOrderCall.onclick = buttonOrderCallHeader.onclick = function () {
    body.classList.add('lock')
    overlay.classList.add('blur')
    if (feedback.classList.contains('active-feedback')) {
        feedback.classList.remove('active-feedback')
        setTimeout(() => {
            feedback.classList.toggle('active-order')
            feedbackTitle.classList.add('hidden')
            orderTitle.classList.remove('hidden')
            inputs.forEach((input) => {
                if (!input.classList.contains('feedback__tel')) {
                    input.classList.add('hidden')
                }
            })
        }, 300)
    } else {
        feedback.classList.toggle('active-order')
        feedbackTitle.classList.add('hidden')
        orderTitle.classList.remove('hidden')
        inputs.forEach((input) => {
            if (!input.classList.contains('feedback__tel')) {
                input.classList.add('hidden')
            }
        })
    }
    if (window.innerWidth > 1339) {
        menu.classList.add('blur')
    }
}
buttonCloseFeedback.onclick = function () {
    feedback.classList.remove('active-feedback')
    feedback.classList.remove('active-order')

    if (!menu.classList.contains('active-menu')) {
        body.classList.remove('lock')
        overlay.classList.remove('blur')
        menu.classList.remove('blur')
    }
}
overlay.onclick = function (e) {
    const withinBoundariesMenu = e.composedPath().includes(menu)
    const withinButtonMenu = e.composedPath().includes(buttonOpenMenu)
    const withinBoundariesFeedback = e.composedPath().includes(feedback)
    const withinButtonFeedbackHeader = e.composedPath().includes(buttonOpenFeedbackHeader)
    const withinButtonOrderHeader = e.composedPath().includes(buttonOrderCallHeader)

    if (!withinBoundariesMenu && !withinButtonMenu && !withinButtonFeedbackHeader && !withinButtonOrderHeader) {
        menu.classList.remove('active-menu')
        body.classList.remove('lock')
        overlay.classList.remove('blur')
        menu.classList.remove('blur')
    }
    if (!withinBoundariesFeedback && !withinButtonFeedbackHeader && !withinButtonOrderHeader) {
        feedback.classList.remove('active-feedback')
        feedback.classList.remove('active-order')
    }
}
menu.onclick = function (e) {
    const withinBoundariesMenu = e.composedPath().includes(menu)
    const withinButtonFeedback = e.composedPath().includes(buttonOpenFeedback)
    const withinButtonOrder = e.composedPath().includes(buttonOrderCall)

    if (withinBoundariesMenu && !withinButtonFeedback && !withinButtonOrder) {
        feedback.classList.remove('active-feedback')
        feedback.classList.remove('active-order')
    }
    if (window.innerWidth > 1339 && withinBoundariesMenu && !withinButtonFeedback && !withinButtonOrder) {
        body.classList.remove('lock')
        overlay.classList.remove('blur')
        menu.classList.remove('blur')
    }
}
menuItems.forEach((item) => {
    item.onclick = function () {
        menu.classList.remove('active-menu')
        body.classList.remove('lock')
        overlay.classList.remove('blur')
    }
})

buttonsShow.forEach((button) => {
    if (button.classList.contains('swiper-brands-show')) {
        button.onclick = function () {
            const brands = document.querySelector('.swiper-brands')
            const buttonImages = document.querySelectorAll('.swiper-brands-show > img')
            const buttonText = document.querySelectorAll('.swiper-brands-show > span')
            brands.classList.toggle('open-brands')
            buttonImages.forEach((item) => {
                item.classList.toggle('hidden')
            })
            buttonText.forEach((item) => {
                item.classList.toggle('hidden')
            })
        }
    }
    if (button.classList.contains('swiper-technique-show')) {
        button.onclick = function () {
            const technique = document.querySelector('.swiper-technique')
            const buttonImages = document.querySelectorAll('.swiper-technique-show > img')
            const buttonText = document.querySelectorAll('.swiper-technique-show > span')
            technique.classList.toggle('open-technique')
            buttonImages.forEach((item) => {
                item.classList.toggle('hidden')
            })
            buttonText.forEach((item) => {
                item.classList.toggle('hidden')
            })
        }
    }
})

swiperResize();
window.addEventListener('resize', swiperResize);