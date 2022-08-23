// import { jacketArray } from "./constants/productList.js";

const inventoryProducts = document.querySelector(".products_inventory");
let productArray = [];

const products = document.querySelector(".products");

const url = "https://cms-ca.eg-sundbo.online/wp-json/wc/store/products";

async function fetchProducts() {

    try {
        const response = await fetch(url);
        const results = await response.json();

        console.log(results);

        // createHtml(details);
      

        results.forEach(function(results){
            inventoryProducts.innerHTML += 
            `
            <div class="product" id="productList">
                <img src="${results.images[0].src}" alt="" class="product_image" />
                <div class="product_info">
                    <h3>${results.name}</h3>
                    <p><em>Only ${results.prices.price}</em></p>
                    <div class="dots">
                        <div class="dot dot_yellow"></div>
                        <div class="dot dot_blue"></div>
                        <div class="dot dot_orange"></div>
                    </div>
                    <button class="button button_small" data-product=${results.id}><a href="product_mt_peak_blue.html?id=${results.id}">Read more</a></button>
                </div>
            </div>
            `
        });

    }
    catch(error) {
        console.log(error);
        detailContainer.innerHTML = message("error", error);
    }
    
}


fetchProducts();







const buttons = document.querySelectorAll("button");
buttons.forEach(function(button){
    button.onclick = function(event){

        localStorage.removeItem("productList");

        window.location.href=`product_mt_peak_blue.html`;
        
        const itemToProduct = jacketArray.find(item => item.id === parseInt(event.target.dataset.product));
        productArray.push(itemToProduct);
        showProduct(productArray);
        localStorage.setItem("productList", JSON.stringify(productArray));
    };
});

function showProduct(productItem){
};




// import { jacketArray } from "./constants/productList.js";

// const inventoryProducts = document.querySelector(".products_inventory");
// let productArray = [];

// jacketArray.forEach(function(product){
//     inventoryProducts.innerHTML += 
//     `
//     <div class="product" id="productList">
//         <img src="${product.imgsrc}" alt="" class="product_image" />
//         <div class="product_info">
//             <h3>${product.name}</h3>
//             <p><em>Only ${product.price} £</em></p>
//             <div class="dots">
//                 <div class="dot dot_yellow"></div>
//                 <div class="dot dot_blue"></div>
//                 <div class="dot dot_orange"></div>
//             </div>
//             <button class="button button_small" data-product=${product.id}> Read more</button>
//         </div>
//     </div>
//     `
// });

// const buttons = document.querySelectorAll("button");
// buttons.forEach(function(button){
//     button.onclick = function(event){

//         localStorage.removeItem("productList");

//         window.location.href=`product_mt_peak_blue.html`;
        
//         const itemToProduct = jacketArray.find(item => item.id === parseInt(event.target.dataset.product));
//         productArray.push(itemToProduct);
//         showProduct(productArray);
//         localStorage.setItem("productList", JSON.stringify(productArray));
//     };
// });

// function showProduct(productItem){
// };