import homePageBackground from '../assets/main-background.jpg'
import menuPageBackground from '../assets/menu-background.jpg'
import aboutPageBackground from '../assets/about-background.jpg'
import dishMandi from '../assets/dish-images/dish-mandi.jpeg'
import dishShawarma from '../assets/dish-images/dish-shawarma.jpg'
import dishKabsa from '../assets/dish-images/dish-kabsa.jpg'
import dishKufta from '../assets/dish-images/dish-kufta.jpg'
import dishFattah from '../assets/dish-images/dish-fattah.jpg'
import dishTagine from '../assets/dish-images/dish-tagine.jpg'
import dishGoulash from '../assets/dish-images/dish-goulash.jpg'
import dishDolma from '../assets/dish-images/dish-dolma.jpg'
import dessertBaklava from '../assets/dish-images/dessert-baklava.jpg'
import dessertKunafa from '../assets/dish-images/dessert-kunafa.jpg'
import dessertHalawetElJibn from '../assets/dish-images/dessert-halaweteljibn.jpg'
import dessertMaamoul from '../assets/dish-images/dessert-maamoul.jpg'
import drinkMintTea from '../assets/dish-images/drink-minttea.jpg'
import drinkAyran from '../assets/dish-images/drink-ayran.jpg'
import drinkQamarAlDin from '../assets/dish-images/drink-qamaraldin.jpg'
import drinkRoseWaterLemonade from '../assets/dish-images/drink-rosewaterlemonade.jpg'

const ImageDetails = [
    {
        name: "Home Page Background",
        URL: "https://images.pexels.com/photos/2290070/pexels-photo-2290070.jpeg",
        localURL: homePageBackground,
        creditURL: "https://www.pexels.com/photo/dining-area-of-the-building-with-no-people-2290070/",
        credit: formatCredit("Waldemar", "pexels")
    },
    {
        name: "Menu Page Background",
        URL: "https://images.pexels.com/photos/23891769/pexels-photo-23891769/free-photo-of-interior-design-of-restaurant.jpeg",
        localURL: menuPageBackground,
        creditURL: "https://www.pexels.com/photo/interior-design-of-restaurant-23891769/",
        credit: formatCredit("Duc Nguyen", "pexels")
    },
    {
        name: "About Page Background",
        URL: "https://images.pexels.com/photos/1581554/pexels-photo-1581554.jpeg",
        localURL: aboutPageBackground,
        creditURL: "https://www.pexels.com/photo/interior-design-of-restaurant-23891769/",
        credit: formatCredit("Duc Nguyen", "pexels")
    },
    {
        name: "Dish Mandi",
        URL: "https://images.pexels.com/photos/18698227/pexels-photo-18698227/free-photo-of-food-photography.jpeg",
        localURL: dishMandi,
        creditURL: "https://www.pexels.com/photo/food-photography-18698227/",
        credit: formatCredit("aboodi vesakaran", "pexels")
    },
    {
        name: "Dish Shawarma",
        URL: "https://i.pinimg.com/736x/f9/b8/dd/f9b8dd52a24ea5d2ead12352d453fdea.jpg",
        localURL: dishShawarma,
        creditURL: "https://www.pinterest.com/pin/24769866694605545/",
        credit: formatCredit("Julia di Lello", "pinterest")
    },
    {
        name: "Dish Kabsa",
        URL: "https://i.pinimg.com/736x/2a/82/29/2a8229634f8b161f39265d6b71a8f848.jpg",
        localURL: dishKabsa,
        creditURL: "https://www.pinterest.com/pin/629307747961819897/",
        credit: formatCredit("Freepik", "pinterest")
    },
    {
        name: "Dish Kufta",
        URL: "https://i.pinimg.com/736x/b0/aa/a4/b0aaa4cdf8103e50e74f675f25207332.jpg",
        localURL: dishKufta,
        creditURL: "https://www.pinterest.com/pin/41025046600769696/",
        credit: formatCredit("carveyourcraving", "pinterest")
    },
    {
        name: "Dish Fattah",
        URL: "https://i.pinimg.com/736x/6a/cd/3e/6acd3e884ca2f575a944adff67996d2e.jpg",
        localURL: dishFattah,
        creditURL: "https://www.pinterest.com/pin/745979125808178002/",
        credit: formatCredit("Munaty Cooking", "pinterest")
    },
    {
        name: "Dish Tagine",
        URL: "https://i.pinimg.com/736x/37/52/b5/3752b536266657f5f44d53fd234beaf7.jpg",
        localURL: dishTagine,
        creditURL: "https://www.pinterest.com/pin/350858627238455308/",
        credit: formatCredit("Tasty Recipes", "pinterest")
    },
    {
        name: "Dish Goulash",
        URL: "https://i.pinimg.com/736x/81/b6/40/81b64068b0123d15e5a7554ad74a6424.jpg",
        localURL: dishGoulash,
        creditURL: "https://www.pinterest.com/pin/34902965858283107/",
        credit: formatCredit("Happy Muncher's Home & Kitchen", "pinterest")
    },
    {
        name: "Dish Dolma",
        URL: "https://i.pinimg.com/736x/55/6e/83/556e83198d58573bc7d4b7b19e175dcc.jpg",
        localURL: dishDolma,
        creditURL: "https://www.pinterest.com/pin/36310340734770666/",
        credit: formatCredit("The Online Grill", "pinterest")
    },
    {
        name: "Dessert Baklava",
        URL: "https://i.pinimg.com/736x/87/35/f3/8735f3759533c8235ccd68bb4901ec68.jpg",
        localURL: dessertBaklava,
        creditURL: "https://www.pinterest.com/pin/2462974789983230/",
        credit: formatCredit("Yasti Balalee”", "pinterest")
    },
    {
        name: "Dessert Kunafa",
        URL: "https://i.pinimg.com/736x/96/ee/ae/96eeae6960d4ee7a6c8a75d690ba9b6d.jpg",
        localURL: dessertKunafa,
        creditURL: "https://www.pinterest.com/pin/377106168816417647/",
        credit: formatCredit("TenderRecipe", "pinterest")
    },
    {
        name: "Dessert Halawet El Jibn",
        URL: "https://i.pinimg.com/736x/3e/3e/50/3e3e50f556be9d1de4136be2c2304095.jpg",
        localURL: dessertHalawetElJibn,
        creditURL: "https://www.pinterest.com/pin/17170042324684749/",
        credit: formatCredit("Google", "pinterest")
    },
    {
        name: "Dessert Maamoul",
        URL: "https://i.pinimg.com/736x/4e/ca/c2/4ecac2632d9cf68d152f6ff49ade85ab.jpg",
        localURL: dessertMaamoul,
        creditURL: "https://www.pinterest.com/pin/452963675041167447/",
        credit: formatCredit("My Homemade Recipe", "pinterest")
    },
    {
        name: "Drink Mint Tea",
        URL: "https://i.pinimg.com/736x/f7/f7/20/f7f720c6f4927bf3217d2ba86c8e2297.jpg",
        localURL: drinkMintTea,
        creditURL: "https://www.pinterest.com/pin/246501779598398524/",
        credit: formatCredit("Healthy Bites & Sips", "pinterest")
    },
    {
        name: "Drink Ayran",
        URL: "https://i.pinimg.com/736x/93/ea/a4/93eaa4bdc21f9bacbaae17269b697199.jpg",
        localURL: drinkAyran,
        creditURL: "https://www.pinterest.com/pin/296322850502266524/",
        credit: formatCredit("Cubes N Juliennes", "pinterest")
    },
    {
        name: "Drink Qamar al-Din",
        URL: "https://i.pinimg.com/736x/cf/cc/81/cfcc81147f501f8a306867384c993ebc.jpg",
        localURL: drinkQamarAlDin,
        creditURL: "https://www.pinterest.com/pin/380906080998835837/",
        credit: formatCredit("The Kitchn", "pinterest")
    },
    {
        name: "Drink Rose Water Lemonade",
        URL: "https://i.pinimg.com/736x/34/5f/91/345f91bb366955e387ae2b915335bf5d.jpg",
        localURL: drinkRoseWaterLemonade,
        creditURL: "https://www.pinterest.com/pin/629518854201482087/",
        credit: formatCredit("My Recipe Space", "pinterest")
    },
]
function capitalize(string){
    return string[0].toUpperCase() + string.slice(1).toLowerCase()
}
function formatCredit(name, website){
    return `Photo by “${name}” on ${capitalize(website)}`
}
export default ImageDetails