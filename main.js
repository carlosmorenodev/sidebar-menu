

const navButton = document.querySelector('.nav-button')
const mainNav = document.querySelector('.main-nav')

navButton.addEventListener('click', () => {
    mainNav.classList.toggle('active')
})

