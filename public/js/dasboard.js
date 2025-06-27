// asside mengembalikan HTMLCollection, yaitu semacam array dari elemen — bukan satu elemen tunggal.
const aside = document.getElementsByTagName('aside')[0];
const btnMenu = document.querySelector('nav ol li:first-child');
const btnClose = document.getElementsByClassName('close')[0];

btnMenu.addEventListener('click', () => {
  console.log('btn menu di click');
  console.log(aside);
  aside.style.left = '0px';
});
btnClose.addEventListener('click', () => {
  aside.style.left = '-1000px';
});
