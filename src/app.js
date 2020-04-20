'use strict'
import Typed from 'typed.js';
import anime from 'animejs/lib/anime.es.js';
import fullpage from 'fullpage.js';

import './reset.css';
import '../node_modules/fullpage.js/dist/fullpage.css'
import './style.css';
// import './fonts/fonts.css'

const coverText = document.querySelector('.coverText');
const mySkills = document.querySelector('.mySkills');
const contact = document.querySelector('div.contact');
const popup = document.querySelector('.popupBackground');

contact.addEventListener('click', onContactClick);
popup.addEventListener('click', onPopupBackgroundClick)

init();

function init() {
    initTypedText();
    initPageScroll();
}

function onContactClick() {
    showPopup();
    popupAnime(1);
};

function onPopupBackgroundClick(e) {
    if(e.target.classList.contains('popupBackground')) {
        popupAnime(0, hidePopup);
    }
}

function hidePopup() {
    popup.classList.remove('showPopup');
}

function showPopup() {
    popup.classList.add('showPopup');
}

function initTypedText() {
    var typed = new Typed('.mainText', {
        strings: 
        ['<span class="text"> Hi! </span> <span class="text"> My name is Dima. </span> <span class="text"> And I am Frontend developer. </span>'],
        typeSpeed: 50,
        showCursor: false
    });
};

function initPageScroll() {
    new fullpage('#fullpage', {
        autoScrolling: true,
        navigation: true,
        navigationPosition: 'right',
        fixedElements: 'nav',
        afterLoad: function(origin, destination, direction) {
            if (destination.index === 1) {
                animeSkills(1);
            } else if (destination.index === 2) {
                animeTechnologies(1);
            }
        }
    });
    fullpage_api.setAllowScrolling(true);
};

function animeSkills(opacity) {
    anime({
        targets: ['.firstEl', '.secondEl', '.thirdEl'],
        easing: 'easeInOutExpo',
        opacity: opacity,
        translateX: '185%',
        delay: anime.stagger(500, {easing: 'easeInOutExpo'}),
        direction: 'normal',
    });
};

function popupAnime(opacity, completeFunction) {
    anime({
        targets: popup,
        easing: 'easeInOutExpo',
        direction: 'normal',
        opacity: opacity,
        complete: completeFunction,
    });
};

function animeTechnologies(opacity) {
    anime({
        targets: ['.technologiesList'],
        width: '60%',
        easing: 'easeInOutExpo',
        direction: 'normal',
        opacity: opacity,
    });
};

