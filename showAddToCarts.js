import products from "./api/products.json";
import { fetchQuantityFromCartLS } from "./fetchQuantityFromCartLS";
import { getCartProductFormLS } from "./getCartProductFormLS";
import { incrementDecrement } from "./incrementDecrement";
import { removeProductCart } from "./removeProductCart";
import { updateCartProductTotal } from "./updateCartProductTotal";

let cartProducts = getCartProductFormLS();

let filterProducts = products.filter((curProd) =>{
    return cartProducts.some((currElem) => {
        return currElem.id == curProd.id;
    })
});
// console.log(filterProducts);

const cartElement = document.querySelector("#productCartContainer");

const templateContainer = document.querySelector("#productCartTemplate");

const showCartProduct = () => {
    filterProducts.forEach((curProd) => {
        const {category , id , image , name , stock , price } = curProd;

        let productClone = document.importNode(templateContainer.content , true);

        const LSActualData = fetchQuantityFromCartLS(id , price);

        productClone.querySelector(".category").textContent = category;

        productClone.querySelector("#cardValue").setAttribute("id" , `card${id}`);

        productClone.querySelector(".productName").textContent = name;

        productClone.querySelector(".productImage").src = image;

        productClone.querySelector(".productPrice").textContent = LSActualData.price;

        productClone.querySelector(".productQuantity").textContent = LSActualData.quantity;

        //! Handle increment and decrement Button 
        productClone.querySelector(".stockElement").addEventListener("click", (event) => {
            incrementDecrement(event , id , stock , price);
        });

        productClone.querySelector(".remove-to-cart-button").addEventListener('click' , () => removeProductCart(id));

        cartElement.appendChild(productClone);
    });
};
showCartProduct();

//! calculating the cart total price value 
updateCartProductTotal();