import "../styles/style.css"
import "../styles/utils.css"
import HomePage from "./home-page"
import MenuPage from "./menu-page"

const homeButton = document.getElementById('button-home')
const menuButton = document.getElementById('button-menu')
const aboutButton = document.getElementById('button-about')

function init() {
    homeButton.addEventListener('click', handleSelected)
    menuButton.addEventListener('click', handleSelected)
    aboutButton.addEventListener('click', handleSelected)
    HomePage.load()
    homeButton.classList.add('selected')
}

function removeSelectedAll() {
    homeButton.classList.remove('selected')
    menuButton.classList.remove('selected')
    aboutButton.classList.remove('selected')
}

function handleSelected(e) {
    if (e.target.classList.contains('selected')) return
    removeSelectedAll()
    e.target.classList.add('selected')
    if (e.target.dataset.tab === "home") {
        MenuPage.remove()
        HomePage.load()
    } else if (e.target.dataset.tab === "menu") {
        HomePage.remove()
        MenuPage.load()
    }
    window.scrollTo(0, 0)
}

init()