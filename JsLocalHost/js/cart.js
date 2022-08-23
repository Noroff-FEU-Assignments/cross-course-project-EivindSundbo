const cartItem = JSON.parse(localStorage.getItem("productList"));
const cart = document.querySelector(".cartList");

const cartArray = JSON.parse(localStorage.getItem("cartList"));

console.log(cartArray);


cartArray.forEach(function(cartElement){
    
    var count = Object.keys(cartArray).length;
    console.log(count);

    cart.innerHTML +=
    `
    <tr>
        <td><img src="${cartElement.imgsrc}" alt=""></td>
        <td>${cartElement.name}</td>
        <td>
            <select name="qty" id="qty">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>           
        </td>
        <td>${cartElement.price}</td>
    </tr>
` 
});