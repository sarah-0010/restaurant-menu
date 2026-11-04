function generateInitialProducts() {

    const menuList = [
    {
        id: crypto.randomUUID(),
        name: "Fajita",
        image: "images/fajita.jpg",
        price: 500
    },
    {
        id: crypto.randomUUID(),
        name: "Lebanaese Burger",
        image: "images/lebaneseBurger.jpg",
        price: 550
    },
    {
        id: crypto.randomUUID(),
        name: "American Burger",
        image: "images/americanBurger.jpg",
        price: 550
    },
    {
        id: crypto.randomUUID(),
        name: "Mushroom Burger",
        image: "images/mushroomBurger.jpg",
        price: 600
    },
    {
        id: crypto.randomUUID(),
        name: "Steak House",
        image: "images/steakHouse.jpg",
        price: 600
    },
    {
        id: crypto.randomUUID(),
        name: "Francisco",
        image: "images/francisco.jpg",
        price: 600
    },
    {
        id: crypto.randomUUID(),
        name: "Chicken Sub",
        image: "images/chickenSub.jpg",
        price: 500
    },
    {
        id: crypto.randomUUID(),
        name: "Tandoori",
        image: "images/tandoori.jpg",
        price: 500
    },
    {
        id: crypto.randomUUID(),
        name: "Twister",
        image: "images/twister.jpg",
        price: 500
    },
    {
        id: crypto.randomUUID(),
        name: "Regular Zinger",
        image: "images/regularZinger.jpg",
        price: 500
    },
    {
        id: crypto.randomUUID(),
        name: "Supreme Zinger",
        image: "images/supremeZinger.jpg",
        price: 600
    },
    {
        id: crypto.randomUUID(),
        name: "Crunchy Zinger",
        image: "images/crunchyZinger.jpg",
        price: 600
    },
    {
        id: crypto.randomUUID(),
        name: "Mighty Zinger",
        image: "images/mightyZinger.jpg",
        price: 800
    },
    {
        id: crypto.randomUUID(),
        name: "Chicken Fillet",
        image: "images/chickenFillet.jpg",
        price: 600
    },
    {
        id: crypto.randomUUID(),
        name: "Escalope",
        image: "images/escalope.jpg",
        price: 550
    },
    {
        id: crypto.randomUUID(),
        name: "Crispy",
        image: "images/crispy.jpg",
        price: 550
    },
    {
        id: crypto.randomUUID(),
        name: "Chinese Shrimps",
        image: "images/chineseShrimps.jpg",
        price: 600
    },
    {
        id: crypto.randomUUID(),
        name: "Sardine",
        image: "images/sardine.jpg",
        price: 600
    },
    {
        id: crypto.randomUUID(),
        name: "Harra Fish",
        image: "images/harraFish.jpg",
        price: 600
    },
    {
        id: crypto.randomUUID(),
        name: "Fish Fillet Burger",
        image: "images/fishFilletBurger.jpg",
        price: 600
    }
    ]

    const mealList = [
        {
            id: crypto.randomUUID(),
            name: "Crispy Meal",
            image:"images/crispyMeal.jpg",
            price: 900
        },
        {
            id: crypto.randomUUID(),
            name: "Zinger Meal",
            image:"images/zingerMeal.jpg",
            price: 900
        },
        {
            id: crypto.randomUUID(),
            name: "Escalope Meal",
            image:"images/escalopeMeal.jpg",
            price: 900
        },
        {
            id: crypto.randomUUID(),
            name: "Shrimp Meal",
            image:"images/shrimpMeal.jpg",
            price: 1000
        },
        {
            id: crypto.randomUUID(),
            name: "Fish Fillet Meal",
            image:"images/fishFilletMeal.jpg",
            price: 1000
        },
        {
            id: crypto.randomUUID(),
            name: "1 kg Platter with service and fries",
            image:"images/platter.jpg",
            price: 2200
        }
    ];

    const saladList = [
        {
            id: crypto.randomUUID(),
            name: "Ceasar Salad",
            image: "images/ceasarSalad.jpg",
            price: 350
        },
        {
            id: crypto.randomUUID(),
            name: "Chicken Ceasar",
            image: "images/chickenCeasarSalad.jpg",
            price: 450
        },
        {
            id: crypto.randomUUID(),
            name: "Seasonal Salad",
            image: "images/seasonalSalad.jpg",
            price: 350
        },
        {
            id: crypto.randomUUID(),
            name: "Arugula Salad",
            image: "images/arugulaSalad.jpg",
            price: 350
        },
        {
            id: crypto.randomUUID(),
            name: "Shrimp Salad",
            image: "images/shrimpSalad.jpg",
            price: 400
        },
        {
            id: crypto.randomUUID(),
            name: "Russian Salad",
            image: "images/russianSalad.jpg",
            price: 350
        },
    ];

    const friesList = [
        {
            id : crypto.randomUUID(),
            name: "Small Fries",
            image: "images/smallFries.jpg",
            price: 280
        },
        {
            id : crypto.randomUUID(),
            name: "Large Fries",
            image: "images/largeFries.jpg",
            price: 500
        },
        {
            id : crypto.randomUUID(),
            name: "Wedges",
            image: "images/wedges.jpg",
            price: 500
        },
    ];

    const drinksList = [
        {
            id: crypto.randomUUID(),
            name: "Soft Drinks",
            image: "images/softDrinks.jpg",
            price: 150
        },
        {
            id: crypto.randomUUID(),
            name: "Fresh Juice",
            image: "images/freshJuice.jpg",
            price: 300
        },
        {
            id: crypto.randomUUID(),
            name: "Cocktail",
            image: "images/cocktail.jpg",
            price: 350
        },
        {
            id: crypto.randomUUID(),
            name: "Coffee",
            image: "images/coffee.jpg",
            price: 250
        },
        {
            id: crypto.randomUUID(),
            name: "Tea",
            image: "images/tea.jpg",
            price: 100
        },
        {
            id: crypto.randomUUID(),
            name: "Nescafe'",
            image: "images/nescafe.jpg",
            price: 150
        },
        {
            id: crypto.randomUUID(),
            name: "Cappuccino",
            image: "images/cappuccino.jpg",
            price: 300
        }
    ];

    return {
        menuList,
        friesList,
        mealList,
        drinksList,
        saladList,
        allProducts: [...menuList, ...mealList, ...drinksList, ...friesList, ...saladList]
    };

}

let storedProducts = JSON.parse(localStorage.getItem('products_data'));

if (!storedProducts){
    //Generate once and persist to localStorage
    storedProducts = generateInitialProducts();
    localStorage.setItem('products_data',JSON.stringify(storedProducts));
}

//export stable arrays
export const menuList = storedProducts.menuList || [];
export const mealList = storedProducts.mealList || [];
export const saladList = storedProducts.saladList || [];
export const friesList = storedProducts.friesList || [];
export const drinksList = storedProducts.drinksList || [];

export const allProducts = [
    ...menuList,
    ...mealList,
    ...saladList,
    ...drinksList,
    ...friesList
]


export function getProduct(productId){

    let matchingProduct;

    allProducts.forEach((product) => {
        if(product.id == productId){
            matchingProduct = product;
        }
    });
    return matchingProduct;  
}