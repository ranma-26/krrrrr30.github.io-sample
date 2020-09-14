'use strict';

{
  const open = document.getElementById('p-header__icon');
  const close_menu = document.getElementById('p-hidden__closeicon');
  const overlay = document.querySelector('.p-hidden');
  const close = document.querySelector('.p-header__top');
  const leave = document.querySelector('.p-header__title');

  open.addEventListener('click',() =>{
      // メニュー押すと開く
    overlay.classList.add('p-hidden__show');
      // メニュー押すとヘッダー消える
    close.classList.add("p-header__hide");
      // メニュー押してタイトルだけ残す
    leave.classList.add("p-header__leave");
  }); 
  close_menu.addEventListener('click',() =>{
      // メニュー押すと閉じる
    overlay.classList.remove('p-hidden__show');
      // メニュー押すとヘッダー戻す
    close.classList.remove("p-header__hide");
      // メニュー押すとタイトル戻す
    leave.classList.remove("p-header__leave"); 
  }); 
}