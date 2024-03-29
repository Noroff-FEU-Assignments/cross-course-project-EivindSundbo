const products = document.querySelector(".products");

const url = "https://cms-ca.eg-sundbo.online/wp-json/wc/store/products";



async function fetchProducts(){
    try {
        const response = await fetch(url);
        const results = await response.json();

        let productArray = [];

        // console.log(results);
        
    for(let i = 0; i < 4; i++){
    
    products.innerHTML += 
    `
        <div class="product">
            <img src="${results[i].images[0].src}" alt="" class="product_image" />
            <div class="product_info">
                <h3>${results[i].name}</h3>
                <p><em>Only ${results[i].prices.price}</em></p>
                <div class="dots">
                <div class="dot dot_yellow"></div>
                <div class="dot dot_blue"></div>
                <div class="dot dot_orange"></div>
                </div>
                <button class="button button_small" data-product=${results[i].id}><a href="product_mt_peak_blue.html?id=${results[i].id}">Read more</a></button>
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



    } catch(error){
        console.log(error);
        products.innerHTML = alert("error", error);
    }
}

fetchProducts();