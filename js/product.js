const productItem = JSON.parse(localStorage.getItem("productList"));
const productContainer = document.querySelector(".product-page");
console.log(productItem);

productItem.forEach(function(productElement){
    productContainer.innerHTML +=
    `
    <div class="avalanche_img">
      <img src="${productElement.imgsrc}" alt="Avalanche raincoat in blue">
    </div>
    <div class="avalanche_text">
      <div>
        <h1>${productElement.name}</h1>
        <p>${productElement.description}</p>
      </div>
      <div class="avalanche_btn">
        <div class="dots">
          <div class="dot dot_yellow"></div>
          <div class="dot dot_blue"></div>
          <div class="dot dot_orange"></div>
        </div>
        <button class="button button_large" data-cart> Buy now</button>
      </div>
    </div>
    `
});

const button = document.querySelector("button");
button.onclick = function(event){

  localStorage.removeItem("productList");

  window.location.href=`checkout.html`;
}

