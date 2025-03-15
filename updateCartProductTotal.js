import { getCartProductFormLS } from "./getCartProductFormLS"

export const updateCartProductTotal = () => {
    
    let totalSubProductPrice = document.querySelector(".productSubTotal");
    let productFinalTotalPrice = document.querySelector(".productFinalTotal");

    let productTax = document.querySelector(".productTax");



   let localCartProducts = getCartProductFormLS();
   let initialValue = 0;

   let totalProductPrice = localCartProducts.reduce(( accum , currElem) => {
      let productPrice = parseInt(currElem.price) || 0;
      return accum + productPrice;
   },initialValue);
//    console.log(totalProductPrice);

totalSubProductPrice.textContent = `₹${totalProductPrice.toFixed(2)}`;
productFinalTotalPrice.textContent = `₹${totalProductPrice + 50}`
 
}