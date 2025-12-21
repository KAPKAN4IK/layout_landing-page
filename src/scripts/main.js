'use strict';

const burgerButtonClose = document.querySelector('[data-burger="close"]');
const burgerButtonOpen = document.querySelector('[data-burger="open"]');
const aside = document.querySelector('.aside');

burgerButtonClose.addEventListener('click', () => {
  aside.classList.remove('aside--active');
});

burgerButtonOpen.addEventListener('click', () => {
  aside.classList.add('aside--active');
});
