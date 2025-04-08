import "../styles/style.css"
import "../styles/utils.css"

import programmerLogo from "../assets/logo.jpg"

import HomePage from "./home-page"
import MenuPage from "./menu-page"
import AboutPage from "./about-page"

const homeButton = document.getElementById('button-home')
const menuButton = document.getElementById('button-menu')
const aboutButton = document.getElementById('button-about')

function initImages(){
    document.getElementById('logo').style.backgroundImage = `url(${programmerLogo})`
}

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

function removeCurrentContent() {
    const content = document.getElementById('content')
    let activeTab = content.dataset.activeTab

    switch (activeTab) {
        case "home-page":
            HomePage.remove()
            break;
        case "menu-page":
            MenuPage.remove()
            break;
        case "about-page":
            AboutPage.remove()
            break;
    }
}
function loadSelectedContent(e) {
    let selectedTab = e.target.dataset.tab

    switch (selectedTab) {
        case "home":
            HomePage.load()
            break;
        case "menu":
            MenuPage.load()
            break;
        case "about":
            AboutPage.load()
            break;
    }
}

function handleSelected(e) {
    if (e.target.classList.contains('selected')) return

    removeSelectedAll()
    e.target.classList.add('selected')

    removeCurrentContent()
    loadSelectedContent(e)

    window.scrollTo(0, 0)
}

init()
initImages()