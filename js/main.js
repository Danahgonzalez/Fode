const btnMore = document.querySelector('#more');
const menuDesplegable = document.querySelector('#menu');
const btnClose = document.querySelector('#close');


btnMore.addEventListener('click', () =>{
    menuDesplegable.style.transform = 'translateX(0%)';
})

btnClose.addEventListener('click', () =>{
    menuDesplegable.style.transform = 'translateX(500px)';
})