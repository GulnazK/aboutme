const burgerMenu = document.querySelector('.header .nav-bar .nav-list .burger-menu')
const mobileMenu = document.querySelector('.header .nav-bar .nav-list ul')
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a')
const header = document.querySelector('.header.container')

burgerMenu.addEventListener('click',() =>{
    burgerMenu.classList.toggle('active')
   mobileMenu.classList.toggle('active')
} )

document.addEventListener('scroll', ()=>{
    let scroll_position = window.scrollY;
    if( scroll_position > 250){
        header.style.backgroundColor = '#29323c'
    } else{
        header.style.backgroundColor = 'transparent'
    }
})

menu_item.forEach((item) => {
  item.addEventListener('click', () => {
        burgerMenu.classList.toggle('active')
        mobileMenu.classList.toggle('active')
    })
})