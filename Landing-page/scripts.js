'use strict';
const sections = document.querySelectorAll('.section');
const signupBtn = document.querySelector('.btn--signup');
const btnSwitch = document.querySelector('.btn--hmbgr');
const btnxx = document.querySelector('.xx');
const section1 = document.getElementById('section1');
const section2 = document.getElementById('section2');
const section3 = document.getElementById('section3');
const menu = document.querySelector('.list--sect');
const menuIcon = document.querySelector('.menu');
const removeIcon = document.querySelector('.remove');
// events
const options = {
  behavior: 'smooth',
};
signupBtn.addEventListener('click', function () {
  // SCROLLING
  if (menu.classList.contains('open-nav')) {
    removeIcon.classList.add('hide');
    menuIcon.classList.remove('hide');

    menu.classList.remove('open-nav');
    section3.scrollIntoView(options);
  }
});

btnxx.addEventListener('click', function () {
  section2.scrollIntoView(options);
});

// media query

btnSwitch.addEventListener('click', function () {
  if (removeIcon.classList.contains('hide')) {
    removeIcon.classList.remove('hide');
    menuIcon.classList.add('hide');

    menu.classList.add('open-nav');
  } else {
    removeIcon.classList.add('hide');
    menuIcon.classList.remove('hide');

    menu.classList.remove('open-nav');
  }
});
