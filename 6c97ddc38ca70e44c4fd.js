import Swiper from"https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";var swiper,body=document.querySelector("body"),overlay=document.querySelector(".overlay"),buttonExpand=document.querySelector(".section-services__read-more"),menu=document.querySelector(".menu"),buttonOpenMenu=document.querySelector(".button__burger"),buttonCloseMenu=document.querySelector(".button__close-menu"),menuItems=document.querySelectorAll(".menu-main > .radio"),feedback=document.querySelector(".feedback"),buttonOpenFeedback=document.querySelector(".button__feedback"),buttonCloseFeedback=document.querySelector(".feedback__close"),orderCall=document.querySelector(".order-call"),buttonOpenOrder=document.querySelector(".button__order-call"),buttonCloseOrder=document.querySelector(".order-call__close");swiper=new Swiper(".swiper",{spaceBetween:16,width:258,height:72,pagination:{el:".swiper-pagination",clickable:!0}}),buttonExpand.onclick=function(){var e=document.querySelector(".section-services__text"),o=document.querySelectorAll(".section-services__read-more > img"),c=document.querySelectorAll(".section-services__read-more > span");e.classList.toggle("expanded"),o.forEach((function(e){e.classList.toggle("hidden")})),c.forEach((function(e){e.classList.toggle("hidden")}))},buttonOpenMenu.onclick=function(){menu.classList.add("active-menu"),body.classList.add("lock"),overlay.classList.add("blur")},buttonCloseMenu.onclick=function(){menu.classList.remove("active-menu"),body.classList.remove("lock"),overlay.classList.remove("blur")},buttonOpenFeedback.onclick=function(){feedback.classList.add("active-feedback")},buttonCloseFeedback.onclick=function(){feedback.classList.remove("active-feedback")},buttonOpenOrder.onclick=function(){orderCall.classList.add("active-feedback")},buttonCloseOrder.onclick=function(){orderCall.classList.remove("active-feedback")},body.onclick=function(e){var o=e.composedPath().includes(menu),c=e.composedPath().includes(buttonOpenMenu),t=e.composedPath().includes(feedback),n=e.composedPath().includes(buttonOpenFeedback),r=e.composedPath().includes(orderCall),s=e.composedPath().includes(buttonOpenOrder);o||c||(menu.classList.remove("active-menu"),body.classList.remove("lock"),overlay.classList.remove("blur")),t||n||feedback.classList.remove("active-feedback"),r||s||orderCall.classList.remove("active-feedback")},menuItems.forEach((function(e){e.onclick=function(){menu.classList.remove("active-menu"),body.classList.remove("lock"),overlay.classList.remove("blur")}}));