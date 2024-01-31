import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs';

const buttonExpand = document.querySelector('.section-services__read-more')

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