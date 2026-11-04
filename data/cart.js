export {getProduct} from '../data/products.js';

export let cart = JSON.parse(localStorage.getItem('cart'))  || [];


export function saveToStorage(){
    localStorage.setItem('cart',JSON.stringify(cart));
}

export function addToCart(productId){
    
    let matchingItem;

    cart.forEach((cartItem) => {
        if(productId === cartItem.productId){
            matchingItem = cartItem;
        }
    });

    if(matchingItem){
        matchingItem.quantity +=1;
    }
    else{
        cart.push({
            productId: productId,
            quantity: 1
        });
    }
    saveToStorage();
}

export function increaseQuantity(productId){
    const matchingItem = cart.find((item) => item.productId === productId);
    if (matchingItem) {
        matchingItem.quantity += 1;
        saveToStorage();
    }
}

export function decreaseQuantity(productId){
    const matchingItem = cart.find((item) => item.productId === productId);

    if (!matchingItem) return;
    matchingItem.quantity -=1;

        if(matchingItem.quantity <= 0){
            removeFromCart(productId);
        }
        else{
            saveToStorage();
        }
    
}

export function removeFromCart(productId){
    cart = cart.filter((cartItem) => cartItem.productId !== productId);
    saveToStorage();
}