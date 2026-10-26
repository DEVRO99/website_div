const menu = document.querySelector('.menu')
const burger = document.querySelector('.burger')
const close = document.querySelector('.close')

burger.addEventListener('click', () => {
    menu.classList.toggle('active')
})

close.addEventListener('click', () => {
    menu.classList.remove('active')
})





