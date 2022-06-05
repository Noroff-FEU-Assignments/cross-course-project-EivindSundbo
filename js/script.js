import { jacketArray } from "./constants/productList.js"
console.log(jacketArray);

const products = document.querySelector(".products");
let productArray = [];


for(let i = 0; i < 4; i++){    

    products.innerHTML += 
    `
    
        <div class="product">
            <img src="${jacketArray[i].imgsrc}" alt="" class="product_image" />
            <div class="product_info">
                <h3>${jacketArray[i].name}</h3>
                <p><em>Only ${jacketArray[i].price} £</em></p>
                <div class="dots">
                <div class="dot dot_yellow"></div>
                <div class="dot dot_blue"></div>
                <div class="dot dot_orange"></div>
                </div>
                <button class="button button_small" data-product=${jacketArray[i].id}> Read more</button>
            </div>
    `
};

const buttons = document.querySelectorAll("button");
buttons.forEach(function(button){
    button.onclick = function(event){

        localStorage.removeItem("productList");

        window.location.href=`product_mt_peak_blue.html`;
        
        const itemToProduct = jacketArray.find(item => item.id === parseInt(event.target.dataset.product));
        productArray.push(itemToProduct)
        showProduct(productArray)
        localStorage.setItem("productList", JSON.stringify(productArray))
    }
})

function showProduct(productItem){
};