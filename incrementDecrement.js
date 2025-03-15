import { getCartProductFormLS } from "./getCartProductFormLS";
import { updateCartProductTotal } from "./updateCartProductTotal";

export const incrementDecrement = (event,id,stock,price ) => {
   const currentCardElement = document.querySelector(`#card${id}`);
//    console.log(currentCardElement);

   const productQuantity = currentCardElement.querySelector(".productQuantity");

   const productPrice = currentCardElement.querySelector(".productPrice");
   
//    console.log(productPrice);

let quantity = 1;
let localStoragePrice = 0;

//? Get The Data From Local Storage 
let arrLocalStorageProduct = getCartProductFormLS();

let existingProd = arrLocalStorageProduct.find((currProd) => {
   return currProd.id == id;
});

// console.log(existingProd)

if(existingProd){
    quantity = existingProd.quantity;
    localStoragePrice = existingProd.price;
}else{
    localStoragePrice = price;
    price = price;
}

if(event.target.className == "cartIncrement"){
    if(quantity < stock){
        quantity += 1;
    }else if(quantity == stock){
        quantity = stock;
        localStoragePrice = price * stock;
    }
}

if(event.target.className === "cartDecrement"){
    if(quantity > 1){
        quantity -= 1;
    }
};

localStoragePrice = price * quantity;
localStoragePrice = Number(localStoragePrice.toFixed(2));


let updatedCart = {id , quantity , price: localStoragePrice};

updatedCart = arrLocalStorageProduct.map((currProd) => {
    return currProd.id == id ? updatedCart : currProd;
});
// console.log(updatedCart)

localStorage.setItem("cartProductsLS", JSON.stringify(updatedCart));

productQuantity.innerText = quantity;
productPrice.innerText = localStoragePrice;

//Calculating total when the produc is increment and decrement 

updateCartProductTotal();
}