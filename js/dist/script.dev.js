"use strict";

var topHeader = document.querySelector('.top__header');
var contentBlock = document.querySelector('.content');
var arrow = document.querySelector('.content__text-block_arrow');
var menu = document.querySelector('.menu');
var container = document.querySelector('.main__container');
arrow.addEventListener('click', function () {
  topHeader.classList.add('hidden-item');
  contentBlock.classList.add('hidden-item');
  menu.classList.add('fixedStyle');
  container.style.paddingTop = '96px';
});