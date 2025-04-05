import "../styles/style.css"
import "../styles/utils.css"
import loadHomePage from "./home-page"
const homeButton = document.getElementById('button-home')
const menuButton = document.getElementById('button-menu')
const aboutButton = document.getElementById('button-about')
function removeSelectedAll(){
    homeButton.classList.remove('selected')
    menuButton.classList.remove('selected')
    aboutButton.classList.remove('selected')
}
homeButton.addEventListener('click', () =>{
    removeSelectedAll()
    homeButton.classList.add('selected')
    loadHomePage()
})