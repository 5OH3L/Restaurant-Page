const creditOverlay = document.getElementById('credit-overlay')
const creditMain = document.getElementById('credit-main')
const creditMainImages = document.getElementById('credit-main-images')
const creditMainCSSs = document.getElementById('credit-main-csss')

import ImageDetails from "./image-details"

function showPopUp() {
    creditOverlay.classList.remove('active')
    creditMain.classList.remove('active')
    creditOverlay.classList.add('active')
    creditMain.classList.add('active')
    creditMain.focus()
    document.body.style.overflowY = "hidden"
}

function closePopUp() {
    creditOverlay.classList.remove('active')
    creditMain.classList.remove('active')
    document.body.style.overflowY = "auto"
}

function addImageCredits() {
    creditMainImages.innerHTML = ""

    ImageDetails.forEach(image => {
        const creditMainImagesImage = document.createElement('div')
        creditMainImagesImage.style.backgroundImage = `url(${image.localURL})`
        creditMainImagesImage.classList.add('credit-main-images-image')

        const creditMainImagesImageLink = document.createElement('a')
        creditMainImagesImageLink.href = image.creditURL
        creditMainImagesImageLink.target = "_blank"
        creditMainImagesImageLink.rel = "noopener noreferrer"
        creditMainImagesImage.appendChild(creditMainImagesImageLink)

        const creditMainImagesImageCredit = document.createElement('h3')
        creditMainImagesImageCredit.textContent = image.credit
        creditMainImagesImageCredit.classList.add('font-montserrat', 'font-weight-bold')
        creditMainImagesImageLink.appendChild(creditMainImagesImageCredit)

        creditMainImages.appendChild(creditMainImagesImage)
    })
}
function addCSSCredits() {
    creditMainCSSs.innerHTML = ""

    const loaderCSSContainer = document.createElement('div')
    loaderCSSContainer.classList.add('credit-main-css')

    const loaderCSS = document.createElement('div')
    loaderCSS.classList.add('loader')
    loaderCSSContainer.appendChild(loaderCSS)

    const loaderCSSlink = document.createElement('a')
    loaderCSSlink.href = "https://css-loaders.com/spinner/"
    loaderCSSlink.target = "_blank"
    loaderCSSlink.rel = "noopener noreferrer"
    loaderCSSContainer.appendChild(loaderCSSlink)

    const loaderCSSCredit = document.createElement('h3')
    loaderCSSCredit.textContent = "Loader CSS animation on “css-loaders” [#16]"
    loaderCSSCredit.classList.add('font-open-sans')
    loaderCSSContainer.appendChild(loaderCSSCredit)

    creditMainCSSs.appendChild(loaderCSSContainer)
}

function addCredits() {
    addImageCredits()
    addCSSCredits()
}

const credit = {
    refresh: addCredits,
    showPopUp,
    closePopUp
}

export default credit