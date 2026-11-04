import formatCurrency from "../scripts/money.js";

const uploadBtn = document.querySelector('.item-img');
const imageInput = document.getElementById('image-input');
const imagePreview = document.getElementById('image-preview');
const plusSign = document.querySelector('.plus-sign');
const form = document.getElementById('add-item-form');

let imageBase64 = '';

uploadBtn.addEventListener('click', () => {
    imageInput.click();
});

imageInput.addEventListener('change',(e) => {
    const file =e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
            imageBase64 = event.target.result;
            imagePreview.src = imageBase64;
            imagePreview.style.display = 'block';
            plusSign.style.display = 'none';
        };
        reader.readAsDataURL(file);
    }

});

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('item-name').value;
    const price = document.getElementById('item-price').value;
    const type = document.getElementById('item-type').value;

    if (!imageBase64) {
        alert('Please selecet an image for the item.');
        return;
    }

    const priceInCents = Math.round(Number(price) * 100);

    const newItem = {
        id : 'product-' + Date.now(),
        name: name,
        price: priceInCents,
        type: type,
        image: imageBase64
    };

    let rawData = JSON.parse(localStorage.getItem('products')) || [];
    let products = rawData.flat();
    products.push(newItem);

    localStorage.setItem('products', JSON.stringify(products));

    alert('Item added successfully!');
    form.reset();
    imagePreview.style.display ='none';
    plusSign.style.display = 'block';
    imageBase64 = '';

    deleteMenuItem();
});


function deleteMenuItem() {

    let productsHTML = '';

    const container = document.querySelector('.js-products-grid');
    if (!container) return;

    let rawData = JSON.parse(localStorage.getItem('products')) || [];
    const products = rawData.flat();

    if (products.length === 0) {
        container.innerHTML = '<p style="color: white; font-family:var(--font-family-2)"> No Custom Item Available</p>';
        return;
    }

    products.forEach((product) => {
        
        productsHTML += `
            <div class="item-box">
                    <img src="${product.image}" alt="">
                    <div class="item-info">
                        <strong>${product.name}</strong> 
                        <p>-$${formatCurrency(product.price)}</p>
                    </div>
                    <button class="delete-btn js-delete-btn" data-product-id=${product.id}>Delete</button>
            </div>
        `;
    });


   
    container.innerHTML = productsHTML;

    document.querySelectorAll('.js-delete-btn').forEach((button) => {
        button.addEventListener('click', (e) => {
            const productId = e.target.dataset.productId;
            removeProduct(productId);
        });
    });
}

function removeProduct(productId) {
    let rawData = JSON.parse(localStorage.getItem('products')) || [];
    let products = rawData.flat

    products = products.filter((product) => product.id !== productId);

    localStorage.setItem('products', JSON.stringify(products));

    deleteMenuItem();

}

document.addEventListener('DOMContentLoaded', () => {

    //let products = JSON.parse(localStorage.getItem('products')) || [];

    /*if (products.length === 0 && typeof allProducts !== 'undefined'){
        localStorage.setItem('products' , JSON.stringify(allProducts));
    }*/
    deleteMenuItem();
});
