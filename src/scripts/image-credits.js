const imageCreditsOverlay = document.getElementById('image-credits-overlay')
const imageCreditsMain = document.getElementById('image-credits-main')
const imageCreditsMainCredits = document.getElementById('image-credits-main-credits')

import ImageDetails from "./image-details"

function showPopUp() {
    imageCreditsOverlay.classList.remove('active')
    imageCreditsMain.classList.remove('active')
    imageCreditsOverlay.classList.add('active')
    imageCreditsMain.classList.add('active')
    imageCreditsMain.focus()
    document.body.style.overflow = "hidden"
}

function closePopUp() {
    imageCreditsOverlay.classList.remove('active')
    imageCreditsMain.classList.remove('active')
    document.body.style.overflow = "auto"
}

function addImageCredits() {
    imageCreditsMainCredits.innerHTML = ""

    ImageDetails.forEach(image => {
        const imageCreditsMainCreditsImage = document.createElement('div')
        imageCreditsMainCreditsImage.style.backgroundImage = `url(${image.localURL})`
        imageCreditsMainCreditsImage.classList.add('image-credits-main-image')

        const imageCreditsMainCreditsImageLink = document.createElement('a')
        imageCreditsMainCreditsImageLink.href = image.creditURL
        imageCreditsMainCreditsImageLink.target = "_blank"
        imageCreditsMainCreditsImageLink.rel = "noopener noreferrer"
        imageCreditsMainCreditsImageLink.classList.add('font-montserrat', 'font-weight-bold')
        imageCreditsMainCreditsImage.appendChild(imageCreditsMainCreditsImageLink)

        const imageCreditsMainCreditsImageCredit = document.createElement('h1')
        imageCreditsMainCreditsImageCredit.textContent = image.credit
        imageCreditsMainCreditsImageLink.appendChild(imageCreditsMainCreditsImageCredit)

        imageCreditsMainCredits.appendChild(imageCreditsMainCreditsImage)
    })
}

const imageCredits = {
    refresh: addImageCredits,
    showPopUp,
    closePopUp
}

export default imageCredits