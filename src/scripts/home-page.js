function loadHomePage() {
    const content = document.getElementById('content')
    content.innerHTML = ""
    content.dataset.activeTab = "home-page"

    const homePageContainer = document.createElement('section')
    homePageContainer.id = "home-page"

    const homePageMain = document.createElement('section')
    homePageMain.id = "home-page-main"
    homePageContainer.appendChild(homePageMain)

    const homePageBackground = document.createElement('div')
    homePageBackground.id = "home-page-background"
    homePageMain.appendChild(homePageBackground)

    const homePageMainHeader = document.createElement('div')
    homePageMainHeader.id = "home-page-main-header"
    homePageMainHeader.classList.add('initial-top-padding')
    homePageMain.appendChild(homePageMainHeader)

    const homePageMainHeaderHeadingContainer = document.createElement('div')
    homePageMainHeaderHeadingContainer.id = "home-page-main-header-heading"
    homePageMainHeader.appendChild(homePageMainHeaderHeadingContainer)

    const homePageMainHeaderHeading = document.createElement('h1')
    homePageMainHeaderHeading.classList.add('font-montserrat', 'font-weight-normal')
    homePageMainHeaderHeading.textContent = "Welcome To "
    const homePageMainHeaderHeadingName = document.createElement('span')
    homePageMainHeaderHeadingName.textContent = "Zaytuna"
    homePageMainHeaderHeadingName.classList.add('font-weight-bold')
    homePageMainHeaderHeading.appendChild(homePageMainHeaderHeadingName)
    homePageMainHeaderHeadingContainer.appendChild(homePageMainHeaderHeading)

    const homePageMainHeaderDescription = document.createElement('p')
    homePageMainHeaderDescription.classList.add('font-open-sans')
    homePageMainHeaderDescription.textContent = "Inspired by the heart of Arabian hospitality, Zaytuna brings you a fusion of tradition and luxury. Savor the finest flavors of the Middle East, crafted with rich spices, fresh ingredients, and a touch of elegance. A feast for the senses in every bite."
    homePageMainHeader.appendChild(homePageMainHeaderDescription)

    const homePageMainHeaderCTA = document.createElement('button')
    homePageMainHeaderCTA.classList.add('font-montserrat')
    homePageMainHeaderCTA.textContent = "BOOK A TABLE"
    homePageMainHeader.appendChild(homePageMainHeaderCTA)

    const homePageFeatured = document.createElement('section')
    homePageFeatured.id = "home-page-featured"
    homePageContainer.appendChild(homePageFeatured)

    const homePageFeaturedBackground = document.createElement('div')
    homePageFeaturedBackground.id = "home-page-featured-background"
    homePageFeatured.appendChild(homePageFeaturedBackground)

    const homePageFeaturedHeading = document.createElement('h1')
    homePageFeaturedHeading.classList.add('font-montserrat', 'font-weight-bold')
    homePageFeaturedHeading.textContent = "Best Dishes Of Zaytuna"
    homePageFeatured.appendChild(homePageFeaturedHeading)

    const homePageFeaturedDishes = document.createElement('div')
    homePageFeaturedDishes.id = "home-page-featured-dishes"
    homePageFeatured.appendChild(homePageFeaturedDishes)

    const homePageFeaturedDishesMandi = document.createElement('div')
    homePageFeaturedDishesMandi.id = "home-page-featured-dishes-mandi"
    homePageFeaturedDishesMandi.classList.add('home-page-featured-dishes-dish')
    homePageFeaturedDishes.appendChild(homePageFeaturedDishesMandi)

    const homePageFeaturedDishesMandiDishImageWrapper = document.createElement('div')
    homePageFeaturedDishesMandiDishImageWrapper.classList.add('dish-image-wrapper')
    homePageFeaturedDishesMandi.appendChild(homePageFeaturedDishesMandiDishImageWrapper)

    const homePageFeaturedDishesMandiDishImage = document.createElement('div')
    homePageFeaturedDishesMandiDishImage.id = "home-page-featured-dishes-mandi-image"
    homePageFeaturedDishesMandiDishImage.classList.add('dish-image')
    homePageFeaturedDishesMandiDishImageWrapper.appendChild(homePageFeaturedDishesMandiDishImage)

    const homePageFeaturedDishesMandiTitle = document.createElement('h2')
    homePageFeaturedDishesMandiTitle.classList.add('font-montserrat', 'font-weight-bold')
    homePageFeaturedDishesMandiTitle.textContent = "Mandi"
    homePageFeaturedDishesMandi.appendChild(homePageFeaturedDishesMandiTitle)

    const homePageFeaturedDishesMandiDescription = document.createElement('p')
    homePageFeaturedDishesMandiDescription.classList.add('font-open-sans')
    homePageFeaturedDishesMandiDescription.textContent = "A fragrant dish featuring rice cooked with tender meat and a unique blend of spices, resulting in a savory and aromatic meal."
    homePageFeaturedDishesMandi.appendChild(homePageFeaturedDishesMandiDescription)

    const homePageFeaturedDishesShawarma = document.createElement('div')
    homePageFeaturedDishesShawarma.id = "home-page-featured-dishes-shawarma"
    homePageFeaturedDishesShawarma.classList.add('home-page-featured-dishes-dish')
    homePageFeaturedDishes.appendChild(homePageFeaturedDishesShawarma)

    const homePageFeaturedDishesShawarmaDishImageWrapper = document.createElement('div')
    homePageFeaturedDishesShawarmaDishImageWrapper.classList.add('dish-image-wrapper')
    homePageFeaturedDishesShawarma.appendChild(homePageFeaturedDishesShawarmaDishImageWrapper)

    const homePageFeaturedDishesShawarmaDishImage = document.createElement('div')
    homePageFeaturedDishesShawarmaDishImage.id = "home-page-featured-dishes-shawarma-image"
    homePageFeaturedDishesShawarmaDishImage.classList.add('dish-image')
    homePageFeaturedDishesShawarmaDishImageWrapper.appendChild(homePageFeaturedDishesShawarmaDishImage)

    const homePageFeaturedDishesShawarmaTitle = document.createElement('h2')
    homePageFeaturedDishesShawarmaTitle.classList.add('font-montserrat', 'font-weight-bold')
    homePageFeaturedDishesShawarmaTitle.textContent = "Shawarma"
    homePageFeaturedDishesShawarma.appendChild(homePageFeaturedDishesShawarmaTitle)

    const homePageFeaturedDishesShawarmaDescription = document.createElement('p')
    homePageFeaturedDishesShawarmaDescription.classList.add('font-open-sans')
    homePageFeaturedDishesShawarmaDescription.textContent = "Grilled, marinated meat sliced thinly, often wrapped in pita bread with fresh vegetables and a savory garlic sauce."
    homePageFeaturedDishesShawarma.appendChild(homePageFeaturedDishesShawarmaDescription)

    const homePageFeaturedDishesKabsa = document.createElement('div')
    homePageFeaturedDishesKabsa.id = "home-page-featured-dishes-kabsa"
    homePageFeaturedDishesKabsa.classList.add('home-page-featured-dishes-dish')
    homePageFeaturedDishes.appendChild(homePageFeaturedDishesKabsa)

    const homePageFeaturedDishesKabsaDishImageWrapper = document.createElement('div')
    homePageFeaturedDishesKabsaDishImageWrapper.classList.add('dish-image-wrapper')
    homePageFeaturedDishesKabsa.appendChild(homePageFeaturedDishesKabsaDishImageWrapper)

    const homePageFeaturedDishesKabsaDishImage = document.createElement('div')
    homePageFeaturedDishesKabsaDishImage.id = "home-page-featured-dishes-kabsa-image"
    homePageFeaturedDishesKabsaDishImage.classList.add('dish-image')
    homePageFeaturedDishesKabsaDishImageWrapper.appendChild(homePageFeaturedDishesKabsaDishImage)

    const homePageFeaturedDishesKabsaTitle = document.createElement('h2')
    homePageFeaturedDishesKabsaTitle.classList.add('font-montserrat', 'font-weight-bold')
    homePageFeaturedDishesKabsaTitle.textContent = "Kabsa"
    homePageFeaturedDishesKabsa.appendChild(homePageFeaturedDishesKabsaTitle)

    const homePageFeaturedDishesKabsaDescription = document.createElement('p')
    homePageFeaturedDishesKabsaDescription.classList.add('font-open-sans')
    homePageFeaturedDishesKabsaDescription.textContent = "A hearty rice dish that incorporates well-seasoned meat, saffron, and a mix of spices, creating a colorful and flavorful plate."
    homePageFeaturedDishesKabsa.appendChild(homePageFeaturedDishesKabsaDescription)

    content.appendChild(homePageContainer)
}

function removeHomePage() {
    const content = document.getElementById('content')
    content.innerHTML = ""
    content.dataset.activeTab = ""
}

const HomePage = {
    load: loadHomePage,
    remove: removeHomePage
}

export default HomePage