const menu = document.querySelector("#menu-icon")
const navlist = document.querySelector(".navlist")

menu.onclick = () => {
    menu.classList.toggle('bx-x')
    navlist.classList.toggle('open')
}

window.onscroll = () => {
    menu.classList.remove('bx-x')
    navlist.classList.remove('open')
}
