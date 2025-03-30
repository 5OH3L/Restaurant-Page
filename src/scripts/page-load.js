const content = document.getElementById('content')

function loadPage(){
    content.innerHTML = ""
    const homepageHeader = document.createElement('div')
    homepageHeader.id = "hompage-header"

    const homepageHeaderTop = document.createElement('div')
    homepageHeaderTop.id = "homepage-header-top"
    homepageHeader.appendChild(homepageHeaderTop)

    content.appendChild(homepageHeader)
}

export default loadPage