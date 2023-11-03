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

const overlay = document.querySelector('.overlay');
// events

const openNav = function () {
  removeIcon.classList.remove('hide');
  menuIcon.classList.add('hide');
  overlay.classList.remove('hide');
  menu.classList.add('open-nav');
};
const closeNav = function () {
  removeIcon.classList.add('hide');
  menuIcon.classList.remove('hide');
  overlay.classList.add('hide');
  menu.classList.remove('open-nav');
};
const options = {
  behavior: 'smooth',
};
signupBtn.addEventListener('click', function () {
  // SCROLLING
  if (menu.classList.contains('open-nav')) {
    closeNav();
    section3.scrollIntoView(options);
  } else {
    section3.scrollIntoView(options);
  }
});

btnxx.addEventListener('click', function (e) {
  e.preventDefault();
  section1.scrollIntoView(options);
});

// media query

btnSwitch.addEventListener('click', function () {
  if (removeIcon.classList.contains('hide')) {
    openNav();
  } else {
    closeNav();
  }
});

overlay.addEventListener('click', closeNav);
