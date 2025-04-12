import ImageDetails from "./image-details"

function loadAboutPage() {
    const content = document.getElementById('content')
    content.innerHTML = ""
    content.dataset.activeTab = "about-page"

    const aboutPageContainer = document.createElement('section')
    aboutPageContainer.id = "about-page"

    const aboutPageBackground = document.createElement('div')
    aboutPageBackground.id = "about-page-background"
    aboutPageBackground.style.backgroundImage = `url(${ImageDetails.find(image => image.name === "About Page Background").localURL})`
    aboutPageContainer.appendChild(aboutPageBackground)

    const aboutPageHeaderContainer = document.createElement('section')
    aboutPageHeaderContainer.id = "about-page-header-container"
    aboutPageHeaderContainer.classList.add('initial-padding')
    aboutPageContainer.appendChild(aboutPageHeaderContainer)

    const aboutPageHeader = document.createElement('section')
    aboutPageHeader.id = "about-page-header"
    aboutPageHeaderContainer.appendChild(aboutPageHeader)

    const aboutPageHeaderHeading = document.createElement('h1')
    aboutPageHeaderHeading.textContent = "About"
    aboutPageHeaderHeading.classList.add('font-montserrat', 'font-weight-bold')
    aboutPageHeader.appendChild(aboutPageHeaderHeading)

    const aboutPageMain = document.createElement('section')
    aboutPageMain.id = "about-page-main"
    aboutPageHeaderContainer.appendChild(aboutPageMain)

    const aboutPageMainRestaurant = document.createElement('section')
    aboutPageMainRestaurant.id = "about-page-main-restaurant"
    aboutPageMain.appendChild(aboutPageMainRestaurant)

    const aboutPageMainRestaurantHeading = document.createElement('h2')
    aboutPageMainRestaurantHeading.textContent = "Zaytuna"
    aboutPageMainRestaurantHeading.classList.add('font-montserrat', 'font-weight-bold')
    aboutPageMainRestaurant.appendChild(aboutPageMainRestaurantHeading)

    const aboutPageMainRestaurantDescription = document.createElement('p')
    aboutPageMainRestaurantDescription.textContent = "Zaytuna embodies the heart of Arabian hospitality, seamlessly blending tradition with luxury. The restaurant offers a culinary journey through the Middle East, where each dish is meticulously crafted using rich spices and fresh ingredients. Guests can expect a visual and gastronomic feast that tantalizes the senses, showcasing the vibrant flavors and warm hospitality synonymous with Middle Eastern culture."
    aboutPageMainRestaurantDescription.classList.add('font-open-sans')
    aboutPageMainRestaurant.appendChild(aboutPageMainRestaurantDescription)

    const aboutPageMainDetails = document.createElement('section')
    aboutPageMainDetails.id = "about-page-main-details"
    aboutPageMain.appendChild(aboutPageMainDetails)

    const aboutPageMainLocation = document.createElement('section')
    aboutPageMainLocation.id = "about-page-main-location"
    aboutPageMainDetails.appendChild(aboutPageMainLocation)

    const aboutPageMainLocationHeading = document.createElement('h3')
    aboutPageMainLocationHeading.textContent = "Location:"
    aboutPageMainLocationHeading.classList.add('font-montserrat', 'font-weight-bold', 'about-page-main-details-heading')
    aboutPageMainLocation.appendChild(aboutPageMainLocationHeading)

    const aboutPageMainLocationDetailsContainer = document.createElement('div')
    aboutPageMainLocationDetailsContainer.classList.add('font-open-sans')
    aboutPageMainLocation.appendChild(aboutPageMainLocationDetailsContainer)

    const DescriptionaboutPageMainLocationDescription1 = document.createElement('p')
    DescriptionaboutPageMainLocationDescription1.textContent = "123 Arabian Way,"
    DescriptionaboutPageMainLocationDescription1.classList.add('about-page-main-details-sub-heading')
    aboutPageMainLocationDetailsContainer.appendChild(DescriptionaboutPageMainLocationDescription1)
    const DescriptionaboutPageMainLocationDescription2 = document.createElement('p')
    DescriptionaboutPageMainLocationDescription2.textContent = "Culinary District,"
    DescriptionaboutPageMainLocationDescription2.classList.add('about-page-main-details-sub-heading')
    aboutPageMainLocationDetailsContainer.appendChild(DescriptionaboutPageMainLocationDescription2)
    const DescriptionaboutPageMainLocationDescription3 = document.createElement('p')
    DescriptionaboutPageMainLocationDescription3.textContent = "Metropolis City,"
    DescriptionaboutPageMainLocationDescription3.classList.add('about-page-main-details-sub-heading')
    aboutPageMainLocationDetailsContainer.appendChild(DescriptionaboutPageMainLocationDescription3)
    const DescriptionaboutPageMainLocationDescription4 = document.createElement('p')
    DescriptionaboutPageMainLocationDescription4.textContent = "ST 12345"
    DescriptionaboutPageMainLocationDescription4.classList.add('about-page-main-details-sub-heading')
    aboutPageMainLocationDetailsContainer.appendChild(DescriptionaboutPageMainLocationDescription4)

    const aboutPageMainOpenTimings = document.createElement('section')
    aboutPageMainOpenTimings.id = "about-page-main-open-timings"
    aboutPageMainDetails.appendChild(aboutPageMainOpenTimings)

    const aboutPageMainOpenTimingsHeading = document.createElement('h3')
    aboutPageMainOpenTimingsHeading.textContent = "Open Timings:"
    aboutPageMainOpenTimingsHeading.classList.add('font-montserrat', 'font-weight-bold', 'about-page-main-details-heading')
    aboutPageMainOpenTimings.appendChild(aboutPageMainOpenTimingsHeading)

    const aboutPageMainOpenTimingsDescription1 = document.createElement('p')
    aboutPageMainOpenTimingsDescription1.classList.add('about-page-main-details-sub-heading', 'font-open-sans')
    aboutPageMainOpenTimingsDescription1.textContent = "Sunday to Thursday:"
    aboutPageMainOpenTimings.appendChild(aboutPageMainOpenTimingsDescription1)
    const aboutPageMainOpenTimingsDescription2 = document.createElement('p')
    aboutPageMainOpenTimingsDescription2.classList.add('about-page-main-details-sub-heading')
    aboutPageMainOpenTimingsDescription2.textContent = "∟ 10:00 AM - 10:00 PM"
    aboutPageMainOpenTimings.appendChild(aboutPageMainOpenTimingsDescription2)

    const aboutPageMainHighlights = document.createElement('section')
    aboutPageMainHighlights.id = "about-page-main-highlights"
    aboutPageMainDetails.appendChild(aboutPageMainHighlights)

    const aboutPageMainHighlightsHeading = document.createElement('h3')
    aboutPageMainHighlightsHeading.textContent = "Highlights:"
    aboutPageMainHighlightsHeading.classList.add('font-montserrat', 'font-weight-bold', 'about-page-main-details-heading')
    aboutPageMainHighlights.appendChild(aboutPageMainHighlightsHeading)

    const aboutPageMainHighlightsDescriptionContainer = document.createElement('ul')
    aboutPageMainHighlightsDescriptionContainer.classList.add('font-open-sans')
    const aboutPageMainHighlightsDescription1 = document.createElement('li')
    aboutPageMainHighlightsDescription1.textContent = "Community Engagement"
    aboutPageMainHighlightsDescription1.classList.add('about-page-main-details-sub-heading', 'font-open-sans')
    aboutPageMainHighlights.appendChild(aboutPageMainHighlightsDescription1)
    const aboutPageMainHighlightsDescription2 = document.createElement('li')
    aboutPageMainHighlightsDescription2.textContent = "Diverse Menu Options"
    aboutPageMainHighlightsDescription2.classList.add('about-page-main-details-sub-heading', 'font-open-sans')
    aboutPageMainHighlights.appendChild(aboutPageMainHighlightsDescription2)
    const aboutPageMainHighlightsDescription3 = document.createElement('li')
    aboutPageMainHighlightsDescription3.textContent = "Halal Cuisine"
    aboutPageMainHighlightsDescription3.classList.add('about-page-main-details-sub-heading', 'font-open-sans')
    aboutPageMainHighlights.appendChild(aboutPageMainHighlightsDescription3)

    content.appendChild(aboutPageContainer)
}

function removeAboutPage() {
    const content = document.getElementById('content')
    content.innerHTML = ""
    content.dataset.activeTab = ""
}

const AboutPage = {
    load: loadAboutPage,
    remove: removeAboutPage
}

export default AboutPage