const menuBtn = document.querySelector('.menu__botao');
let menuHamburguer = document.querySelector('#menu-hamburguer')
const menuLinks = document.querySelector('#nav');

menuBtn.addEventListener('click', () => {
    console.log(menuHamburguer.src);

    if(menuLinks.classList.contains('sumido')){
        console.log('sumido');
        menuLinks.classList.remove('sumido');
        menuHamburguer.src = "assets/images/icon-menu-close.svg"  
    }else{
        console.log('aparecido');
        menuLinks.classList.add('sumido');
        menuHamburguer.src = "assets/images/icon-menu.svg"
    }
})