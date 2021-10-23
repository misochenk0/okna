const mobileMenu = () => {
    const hamburger = document.querySelector('.hamburger');
    if(hamburger) {
        const mobileMenu = document.querySelector('.header__nav')
        hamburger.addEventListener('click', () => {
            mobileMenu.classList.add('header__nav_active')
            document.body.style.overflow = 'hidden'
        })
        const closeBtn = mobileMenu.querySelector('.header-close');
        closeBtn.addEventListener('click', () => {
            mobileMenu.classList.remove('header__nav_active')
            document.body.style.overflow = 'visible'
        })
    }
}
export default mobileMenu;