function burgerMenu() {

    let body = document.querySelector('body')
    let menu = document.querySelector('.burger__menu')
    let button = document.querySelector('.burger__button')
    let sidebar = document.querySelector('.burger__sidebar')
    let links = menu.querySelectorAll('.sidebar__link, .header__profile-button, .header__favorites-button, .social__item')

    button.onclick = (e) => {
        e.preventDefault()
        toggleMenu()
    }

    links.forEach( (item) => {
        item.onclick = () => toggleMenu()
    })

    function toggleMenu() {
        button.classList.toggle('burger__active')
        sidebar.classList.toggle('burger__active')


        if ( Boolean(menu.querySelector('.burger__active')) === true ) {
            body.style.overflow = 'hidden'
        } else {
            body.style.overflow = 'visible'
        }
    }

}

burgerMenu()

function categoryChoosed() {
    let categoryLink = document.querySelectorAll('.category-link')

    console.log(categoryLink)

    categoryLink.forEach( (item) => {
        item.onclick = () => item.classList.toggle('category-link__active')
    })

}

categoryChoosed()