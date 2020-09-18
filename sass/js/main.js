'use strict';

{
  const open = document.getElementById('p-header__icon');
  const close_menu = document.getElementById('p-hidden__closeicon');
  const overlay = document.querySelector('.p-hidden');
  const close = document.querySelector('.p-header__top');
  const leave = document.querySelector('.p-header__title');
  // const remove = document.querySelectorAll('.p-header__logo--iroha')

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

// var i = 0;
// var images =[];
// var time = 3000;

// images[0] = 'images2.png'
// images[1] = 'images3.png'
// images[2] = 'images4.png'
// images[3] = 'images5.png'

// function changeImg(){
//   ducument.slide.src = images[i];
// if(i < images.length - 1){
//   i++;
// } else {
//   i = 0;
// }

// setTimeout("changeImg()", time);
// }

// window.onload = changeImg;

}

