import { cart, increaseQuantity, decreaseQuantity} from "../data/cart.js";
import { getProduct} from "../data/products.js";
import { formatCurrency } from "../scripts/money.js";


export function renderOrderSummary() {

    let cartSummaryHTML ='';

    cart.forEach((cartItem) =>{
        const productId = cartItem.productId;
        const matchingProduct = getProduct(productId);

        // GUARD CLAUSE : skip rendering if product is not found
        if (!matchingProduct) {
            console.warn(`product not found for id: ${productId}`);
            return;
        }

        cartSummaryHTML += `
            <div class="checkout-grid js-cart-item-${matchingProduct.id}">
                    <img src="${matchingProduct.image}" alt="${matchingProduct.name}">
        
                    <div class="layout">
                        <h3>${matchingProduct.name}</h3>
                        <p class="price">Price: $${formatCurrency(matchingProduct.price)}</p>
                        <div class="quantity">
                            <span>Quantity: </span>
                            <button class="quantity-button js-quantity-button-left"
                                    data-product-id="${matchingProduct.id}">
                                    <i class='bx bxs-left-arrow'></i>
                            </button>
                            <span class="quantity-label">${cartItem.quantity} </span>
                            <button class="quantity-button js-quantity-button-right"
                                    data-product-id="${matchingProduct.id}">
                                    <i class='bx bxs-right-arrow'></i>
                            </button>
                        </div>
                    </div>
            </div>
        `;
    });

    const container = document.querySelector('.js-order-summary');
    if(container) {
        container.innerHTML = cartSummaryHTML  || '<p class="cart-status"> Your cart is empty.</p>';
    }
    else{
        console.error('Could not find element with class .js-order-summary in checkout .html!');
    }

    document.querySelectorAll('.js-quantity-button-left').forEach((button) => {
        button.addEventListener('click',() => {
            const productId = button.dataset.productId;
            decreaseQuantity(productId);
            renderOrderSummary();
            paymentSummary();

        });
    });

    document.querySelectorAll('.js-quantity-button-right').forEach((button) => {
        button.addEventListener('click',() => {
            const productId = button.dataset.productId;
            increaseQuantity(productId);
            renderOrderSummary();
            paymentSummary();

        });
    });
}


export function paymentSummary() {
    
    let paymentSummaryHTML = '';
    let totalCents = 0;

    cart.forEach((cartItem) => {

        const product = getProduct(cartItem.productId);

        if (product){
            const itemPrice = product.price || product.priceCents;
            totalCents += itemPrice * cartItem.quantity;

        }
    });

    paymentSummaryHTML = `
        <div class="total-container">
            <p class="page-title"> Total Order </p>

            <div class="total-container-grid">
                <p class="price"> Total Price : $${formatCurrency(totalCents)}</p>
                <button class="set-order"> Checkout </button>
            </div>
        </div>
    `;

    const container = document.querySelector('.js-payment-summary');
    if (container) {
        container.innerHTML = paymentSummaryHTML;
    }
}
renderOrderSummary();
paymentSummary();