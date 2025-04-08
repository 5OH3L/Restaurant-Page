const menu = [
    {
        name: "Mandi",
        type: "main",
        description: "A fragrant dish featuring rice cooked with tender meat and a unique blend of spices, resulting in a savory and aromatic meal.",
        price: "$14.00",
    },
    {
        name: "Shawarma",
        type: "main",
        description: "Grilled, marinated meat sliced thinly, often wrapped in pita bread with fresh vegetables and a savory garlic sauce.",
        price: "$10.00",
    },
    {
        name: "Kabsa",
        type: "main",
        description: "A hearty rice dish that incorporates well-seasoned meat, saffron, and a mix of spices, creating a colorful and flavorful plate.",
        price: "$15.00",
    },
    {
        name: "Kufta",
        type: "main",
        description: "Juicy meatballs made from ground meat mixed with herbs and spices, grilled or baked to perfection, and typically served with side dishes.",
        price: "$12.00",
    },
    {
        name: "Fattah",
        type: "main",
        description: "A comforting dish composed of layers of bread soaked in broth, combined with rice and meat, all topped with a rich garlic-tahini sauce.",
        price: "$13.00",
    },
    {
        name: "Tagine",
        type: "main",
        description: "A slow-cooked stew featuring meat and vegetables simmered with a blend of spices, resulting in tender flavors packed with depth.",
        price: "$18.00",
    },
    {
        name: "Goulash",
        type: "main",
        description: "A filling stew made with chunks of tender meat and an array of vegetables, seasoned with aromatic spices to create a warm, comforting dish.",
        price: "$11.00",
    },
    {
        name: "Dolma",
        type: "main",
        description: "Tender vine leaves filled with a flavorful mixture of rice, herbs, and sometimes minced meat, served in a tangy broth.",
        price: "$9.00",
    },
    {
        name: "Baklava",
        type: "dessert",
        description: "A rich, sweet pastry made of layers of filo dough filled with chopped nuts and sweetened with honey or syrup, often flavored with cinnamon or rosewater.",
        price: "$4.50",
    },
    {
        name: "Kunafa",
        type: "dessert",
        description: "A decadent dessert made of thin, noodle-like pastry soaked in syrup, layered with soft cheese or cream, and baked to a golden brown, topped with nuts.",
        price: "$5.00",
    },
    {
        name: "Halawet El Jibn",
        type: "dessert",
        description: "A unique cheese-based dessert made from semolina dough, rolled and filled with a creamy filling, then topped with sweet syrup and crushed pistachios.",
        price: "$3.50",
    },
    {
        name: "Maamoul",
        type: "dessert",
        description: "Delightful shortbread cookies filled with dates, nuts, or figs, lightly dusted with powdered sugar, often enjoyed during festive occasions.",
        price: "$3.00",
    },
    {
        name: "Mint Tea",
        type: "drink",
        description: "A refreshing beverage made from green tea and fresh mint leaves, sweetened to taste, commonly served hot and known for its uplifting fragrance.",
        price: "$2.50",
    },
    {
        name: "Ayran",
        type: "drink",
        description: "A tangy and creamy drink made from yogurt mixed with water and a pinch of salt, offering a cool complement to spicy dishes.",
        price: "$2.00",
    },
    {
        name: "Qamar al-Din",
        type: "drink",
        description: "A sweet, smooth apricot juice made from dried apricot paste dissolved in water, often enjoyed cold, particularly during the month of Ramadan.",
        price: "$2.75",
    },
    {
        name: "Rose Water Lemonade",
        type: "drink",
        description: "A fragrant and refreshing drink combining freshly squeezed lemonade with rose water, garnished with rose petals for an aromatic touch.",
        price: "$3.00",
    },
]
const dishImages = [
    {
        name: "Mandi",
        backgroundURL: "https://images.pexels.com/photos/18698227/pexels-photo-18698227/free-photo-of-food-photography.jpeg",
    },
    {
        name: "Shawarma",
        backgroundURL: "https://images.pexels.com/photos/6416559/pexels-photo-6416559.jpeg",
    },
    {
        name: "Kabsa",
        backgroundURL: "https://images.pexels.com/photos/17650198/pexels-photo-17650198/free-photo-of-top-view-of-kabsa.jpeg",
    },
    {
        name: "Kufta",
        backgroundURL: "https://i.pinimg.com/736x/c4/3e/ab/c43eab1f5c1aa79d1f44547636b45228.jpg",
    },
    {
        name: "Fattah",
        backgroundURL: "https://i.pinimg.com/736x/6a/cd/3e/6acd3e884ca2f575a944adff67996d2e.jpg",
    },
    {
        name: "Tagine",
        backgroundURL: "https://i.pinimg.com/736x/37/52/b5/3752b536266657f5f44d53fd234beaf7.jpg",
    },
    {
        name: "Goulash",
        backgroundURL: "https://i.pinimg.com/736x/a6/dd/c7/a6ddc788de34f6362a1cf1b62fa3e587.jpg",
    },
    {
        name: "Dolma",
        backgroundURL: "https://i.pinimg.com/736x/05/2b/6e/052b6e81d3a68568f7c0d4d795e143f4.jpg",
    },
    {
        name: "Baklava",
        backgroundURL: "https://i.pinimg.com/736x/87/35/f3/8735f3759533c8235ccd68bb4901ec68.jpg",
    },
    {
        name: "Kunafa",
        backgroundURL: "https://i.pinimg.com/736x/b8/96/21/b89621e3ee857dd8abd2dd7cbdaacc27.jpg",
    },
    {
        name: "Halawet El Jibn",
        backgroundURL: "https://i.pinimg.com/736x/3e/3e/50/3e3e50f556be9d1de4136be2c2304095.jpg",
    },
    {
        name: "Maamoul",
        backgroundURL: "https://i.pinimg.com/736x/4e/ca/c2/4ecac2632d9cf68d152f6ff49ade85ab.jpg",
    },
    {
        name: "Mint Tea",
        backgroundURL: "https://i.pinimg.com/736x/f7/f7/20/f7f720c6f4927bf3217d2ba86c8e2297.jpg",
    },
    {
        name: "Ayran",
        backgroundURL: "https://i.pinimg.com/736x/6d/44/0b/6d440b4cde3a16fc9b6f5295e738f9f8.jpg",
    },
    {
        name: "Qamar al-Din",
        backgroundURL: "https://i.pinimg.com/736x/a9/f9/5a/a9f95a89ae1ee8c662b33e58e1d0d126.jpg",
    },
    {
        name: "Rose Water Lemonade",
        backgroundURL: "https://i.pinimg.com/736x/29/7f/fe/297ffed83d19fda93455649ab642aba4.jpg",
    },
]

function formatName(name) {
    return name.toLowerCase().replace(/\s/g, "")
}

function addDishOnTheMenu(dish, dishesContainer) {
    const menuPageMainDishesDish = document.createElement('div')
    menuPageMainDishesDish.classList.add("menu-page-main-dishes-dish")

    const menuPageMainDishImage = document.createElement('div')
    menuPageMainDishImage.classList.add('menu-page-main-dish-image', `menu-page-main-dish-image-${formatName(dish.name)}`)
    let entry = dishImages.find(myDish => formatName(myDish.name) === formatName(dish.name))
    if (entry && entry.backgroundURL) {
        const imageLink = document.createElement('a')
        let backgroundURLWebsite = `https://www.${entry.backgroundURL.split('.com')[ 0 ].split('//')[ 1 ].split('.').at(-1)}.com`
        if (backgroundURLWebsite === "https://www.pinimg.com") {
            backgroundURLWebsite = "https://www.pinterest.com"
        }
        imageLink.href = backgroundURLWebsite
        imageLink.target = "_blank"
        imageLink.rel = "noopener noreferrer"
        menuPageMainDishImage.appendChild(imageLink)
        menuPageMainDishImage.style.backgroundImage = `url(${entry.backgroundURL})`
    }
    menuPageMainDishesDish.appendChild(menuPageMainDishImage)

    const menuPageMainDishName = document.createElement('div')
    menuPageMainDishName.classList.add('menu-page-main-dish-name', 'font-montserrat', 'font-weight-bold')
    menuPageMainDishName.textContent = dish.name
    menuPageMainDishesDish.appendChild(menuPageMainDishName)

    const menuPageMainDishDescription = document.createElement('div')
    menuPageMainDishDescription.classList.add('menu-page-main-dish-description', 'font-open-sans')
    menuPageMainDishDescription.textContent = dish.description
    menuPageMainDishesDish.appendChild(menuPageMainDishDescription)

    const menuPageMainDishPrice = document.createElement('div')
    menuPageMainDishPrice.textContent = dish.price
    menuPageMainDishPrice.classList.add('menu-page-main-dish-price', 'font-montserrat', 'font-weight-bold')
    menuPageMainDishesDish.appendChild(menuPageMainDishPrice)

    dishesContainer.appendChild(menuPageMainDishesDish)
}

function refreshDishesOnTheMenu(dishCategory, dishesContainer) {
    dishesContainer.innerHTML = ""
    if (dishCategory.value === "all") {
        menu.forEach(dish => addDishOnTheMenu(dish, dishesContainer))
    } else if (dishCategory.value === "main-course") {
        menu.forEach(dish => {
            if (dish.type === "main") {
                addDishOnTheMenu(dish, dishesContainer)
            }
        })
    } else if (dishCategory.value === "desserts") {
        menu.forEach(dish => {
            if (dish.type === "dessert") {
                addDishOnTheMenu(dish, dishesContainer)
            }
        })
    }
    else if (dishCategory.value === "drinks") {
        menu.forEach(dish => {
            if (dish.type === "drink") {
                addDishOnTheMenu(dish, dishesContainer)
            }
        })
    }
}

let cleanupMenuPageEventListeners = null

function loadMenuPage() {
    const content = document.getElementById('content')
    content.innerHTML = ""
    content.dataset.activeTab = "menu-page"

    const menuPageContainer = document.createElement('section')
    menuPageContainer.id = "menu-page"

    const menuPageMain = document.createElement('section')
    menuPageMain.id = "menu-page-main"
    menuPageContainer.appendChild(menuPageMain)

    const menuPageMainBackground = document.createElement('div')
    menuPageMainBackground.id = "menu-page-main-background"
    menuPageMain.appendChild(menuPageMainBackground)

    const menuPageMainHeader = document.createElement('div')
    menuPageMainHeader.id = "menu-page-main-header"
    menuPageMainHeader.classList.add('initial-padding')
    menuPageMain.appendChild(menuPageMainHeader)

    const menuPageMainHeaderContainer = document.createElement('div')
    menuPageMainHeaderContainer.id = "menu-page-main-header-container"

    const menuPageMainHeaderHeading = document.createElement('h1')
    menuPageMainHeaderHeading.textContent = "Menu"
    menuPageMainHeaderHeading.classList.add('font-montserrat', 'font-weight-bold')
    menuPageMainHeaderContainer.appendChild(menuPageMainHeaderHeading)
    menuPageMainHeader.appendChild(menuPageMainHeaderContainer)

    const menuPageMainHeaderCategoryContainer = document.createElement('label')
    menuPageMainHeaderCategoryContainer.classList.add('font-montserrat')
    menuPageMainHeaderCategoryContainer.textContent = "Category : "
    const menuPageMainHeaderCategory = document.createElement('select')
    menuPageMainHeaderCategory.name = "dish-category"
    menuPageMainHeaderCategory.id = "menu-page-main-dish-category"
    menuPageMainHeaderCategoryContainer.appendChild(menuPageMainHeaderCategory)
    menuPageMainHeaderContainer.appendChild(menuPageMainHeaderCategoryContainer)
    const options = [
        { value: "all", label: "All" },
        { value: "main-course", label: "Main Course" },
        { value: "desserts", label: "Desserts" },
        { value: "drinks", label: "Drinks" },
    ]
    options.forEach(opt => {
        const option = document.createElement('option')
        option.value = opt.value
        option.textContent = opt.label
        if (opt.value === "all") option.selected = true
        menuPageMainHeaderCategory.appendChild(option)
    })

    const menuPageMainDishes = document.createElement('section')
    menuPageMainDishes.id = "menu-page-main-dishes"
    menuPageMainHeader.appendChild(menuPageMainDishes)
    refreshDishesOnTheMenu(menuPageMainHeaderCategory, menuPageMainDishes)
    const refreshMenu = () => refreshDishesOnTheMenu(menuPageMainHeaderCategory, menuPageMainDishes)
    menuPageMainHeaderCategory.addEventListener('input', refreshMenu)

    content.appendChild(menuPageContainer)
    cleanupMenuPageEventListeners = () => {
        menuPageMainHeaderCategory.removeEventListener('input', refreshMenu)
    }
}

function removeMenuPage() {
    if (typeof cleanupMenuPageEventListeners === 'function') {
        cleanupMenuPageEventListeners()
        cleanupMenuPageEventListeners = null
    }
    const content = document.getElementById('content')
    content.innerHTML = ""
    content.dataset.activeTab = ""
}

const MenuPage = {
    load: loadMenuPage,
    remove: removeMenuPage
}

export default MenuPage