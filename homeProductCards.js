import { addToCard } from "./addToCard";
import { homeQuantityToggle } from "./homeQuantityToggle";

const productContainer = document.querySelector("#productContainer");

const productTemplate = document.querySelector("#productTemplate");

export const showProductContainer = (products) => {
    if(!products){
        return false;
    }
    products.forEach((currProduct) => {

        //Destructuring the product object

        const {brand , category , id , name , image , price , stock, description} = currProduct;

        //Creating a clone of the product template
        
        const productClone = document.importNode(productTemplate.content , true);
        
        //! setting the card id value is card 1 and something like this 

        productClone.querySelector("#cardValue").setAttribute("id", `card${id}`);

        productClone.querySelector(".category").textContent = category;

        productClone.querySelector(".productName").textContent = name;

        productClone.querySelector(".productImage").src = image;
        productClone.querySelector(".productImage").alt = image;

        productClone.querySelector(".productStock").textContent = stock;
        productClone.querySelector(".productPrice").textContent = `₹${price}`;
        productClone.querySelector(".productActualPrice").textContent = `₹${price*4}`;

        productClone.querySelector(".productDescription").textContent = description;                          
        
        productClone
        .querySelector(".stockElement")
        .addEventListener("click" , (event) => {
            homeQuantityToggle(event , id , stock);
        });

        productClone
        .querySelector('.add-to-cart-button')
        .addEventListener("click", (event) =>{
            addToCard(event , id , stock);
        });

        productContainer.append(productClone);
    });
}