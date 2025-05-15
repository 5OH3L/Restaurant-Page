import homePageBackgroundImage from "../assets/background-images/main-background.webp"
import menuPageBackgroundImage from "../assets/background-images/menu-background.webp"
import aboutPageBackgroundImage from "../assets/background-images/about-background.webp"


const ImageDetails = [
    {
        name: "Home Page Background",
        URL: "https://images.pexels.com/photos/2290070/pexels-photo-2290070.jpeg",
        localURL: homePageBackgroundImage,
        creditURL: "https://www.pexels.com/photo/dining-area-of-the-building-with-no-people-2290070/",
        credit: formatCredit("Waldemar", "Pexels")
    },
    {
        name: "Menu Page Background",
        URL: "https://images.pexels.com/photos/23891769/pexels-photo-23891769/free-photo-of-interior-design-of-restaurant.jpeg",
        localURL: menuPageBackgroundImage,
        creditURL: "https://www.pexels.com/photo/interior-design-of-restaurant-23891769/",
        credit: formatCredit("Duc Nguyen", "Pexels")
    },
    {
        name: "About Page Background",
        URL: "https://images.pexels.com/photos/1581554/pexels-photo-1581554.jpeg",
        localURL: aboutPageBackgroundImage,
        creditURL: "https://www.pexels.com/photo/interior-design-of-restaurant-23891769/",
        credit: formatCredit("Duc Nguyen", "pexels")
    }
]

function capitalize(string) {
    return string[ 0 ].toUpperCase() + string.slice(1).toLowerCase()
}

function formatCredit(name, website) {
    return `Photo by “${name}” on ${capitalize(website)}`
}

export default ImageDetails