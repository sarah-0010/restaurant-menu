import { menuList, mealList, saladList, friesList, drinksList, allProducts} from "../data/products.js?v=2";
import { addToCart } from "../data/cart.js";
import { formatCurrency } from "../scripts/money.js";


let menu = document.querySelector('.menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
  menu.classList.toggle("move");
  navbar.classList.toggle("open-menu")
};

window.onscroll = () => {
  menu.classList.remove("move");
  navbar.classList.remove("open-menu");
}


let rawData = JSON.parse(localStorage.getItem('products')) || [];
let allProductsData = rawData.flat();

allProductsData.forEach((product) =>{
  product.price = Number(product.price);

  if (product.type === 'sandwish'){
    menuList.push(product);
  }
  if (product.type === 'meal'){
    menuList.push(product);
  }
  if (product.type === 'salad'){
    menuList.push(product);
  }
  if (product.type === 'fries'){
    menuList.push(product);
  }
  if (product.type === 'drink'){
    menuList.push(product);
  }
});


let menuHTML = '';
let mealHTML = '';
let saladHTML = '';
let friesHTML = '';
let drinksHTML = '';


menuList.forEach((menuItem) => {
    menuHTML += `
      <div class="featured-menu-box">
                <img src="${menuItem.image}" alt="">
                <h3>${menuItem.name}</h3>
                <p class="price">$${formatCurrency(menuItem.price)}</p>

                <button class="add-to-cart js-add-to-cart" 
               data-product-id = "${menuItem.id}">Order</button>
      </div>`;
});

mealList.forEach((mealItem) => {
    mealHTML += `
      <div class="featured-meal-box">
            <img src=${mealItem.image} alt="">
            <h3>${mealItem.name}</h3>
            <div class="price-and-btn">
               <p class="price">$${formatCurrency(mealItem.price)}</p>

               <button class="add-to-cart js-add-to-cart" 
               data-product-id = "${mealItem.id}">Order</button>
            </div>
      </div>
    
    `
});

saladList.forEach((saladItem) => {
    saladHTML += `
      <div class="featured-salad-box">
            <img src=${saladItem.image} alt="">
            <h3>${saladItem.name}</h3>
            <div class="">
               <p class="price">$${formatCurrency(saladItem.price)}</p>
               <button class="add-to-cart js-add-to-cart" 
                data-product-id = "${saladItem.id}">Order</button>
            </div>

      </div>
    `
});

friesList.forEach((friesItem) => {
    friesHTML +=`
      <div class="featured-fries-box">
            <img src=${friesItem.image}>
            
            <h3>${friesItem.name}</h3>
            <div class="price-and-btn">
                <p class="price">$${formatCurrency(friesItem.price)}</p>
               <button class="add-to-cart js-add-to-cart" 
               data-product-id = "${friesItem.id}">Order</button>
            </div>
      </div>
    `;
});

drinksList.forEach((drinkItem) => {
    drinksHTML +=`
      <div class="featured-drink-box">
            <img src=${drinkItem.image}>
            <h3>${drinkItem.name}</h3>
            <div class="price-and-btn">
                <p class="price">$${formatCurrency(drinkItem.price)}</p>
               <button class="add-to-cart js-add-to-cart" 
               data-product-id = "${drinkItem.id}">Order</button>
            </div>
      </div>
    `;
});

document.querySelector('.js-featured-menu').innerHTML = menuHTML;

document.querySelector('.js-featured-meals').innerHTML = mealHTML;

document.querySelector('.js-featured-salads').innerHTML = saladHTML;

document.querySelector('.js-featured-fries').innerHTML = friesHTML;

document.querySelector('.js-featured-drinks').innerHTML = drinksHTML;

function updateCartQuantity() {

  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  let cartQuantity = 0;

  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  });

  document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;
}

document.addEventListener('DOMContentLoaded', () => {
    updateCartQuantity();
});

document.addEventListener('click', (event) => {
  const button = event.target.closest('.js-add-to-cart');

  if (button) {
    event.preventDefault();
    const productId = button.dataset.productId;

    addToCart(productId);
    updateCartQuantity();
  }
})

