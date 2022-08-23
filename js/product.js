const productItem = JSON.parse(localStorage.getItem("productList"));

const products = document.querySelector(".products");
const url = "https://cms-ca.eg-sundbo.online/wp-json/wc/store/products/";

const queryString = document.location.search;
const productContainer = document.querySelector(".product-page");

const params = new URLSearchParams(queryString);
const id = params.get("id");

console.log(id);

async function fetchProducts() {

  try {
      const response = await fetch(url + id);
      const results = await response.json();

      console.log(results);

      createHtml(results);

      const button = document.querySelector("button");
      button.onclick = function(event){
      
      var tempArray = JSON.parse(localStorage.getItem("cartList") || "[]")
    
      console.log(tempArray);
      
      const itemToCart = tempArray.find(item => item.id === parseInt(event.target.dataset.product));
      tempArray.push(itemToCart);
      localStorage.setItem("cartList", JSON.stringify(tempArray));
    
      window.location.href=`checkout.html`;
    };
  } 
  catch(error) {
      console.log(error);
      productContainer.innerHTML = message("error", error);
  }
  
}

fetchProducts();

// details.forEach(function(productElement){
//   productContainer.innerHTML

function createHtml(results){
  productContainer.innerHTML = 
  `
  <div class="avalanche_img">
    <img src="${results.images[0].src}" alt="Avalanche raincoat in blue">
  </div>
  <div class="avalanche_text">
    <div>
      <h1>${results.name}</h1>
      <p>${results.description}</p>
    </div>
    <div class="avalanche_btn">
      <div class="dots">
        <div class="dot dot_yellow"></div>
        <div class="dot dot_blue"></div>
        <div class="dot dot_orange"></div>
      </div>
      <button class="button button_large" data-product=${id}> Buy now</button>
    </div>
  </div>
  `;

  

}



