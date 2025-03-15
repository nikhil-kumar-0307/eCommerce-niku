import { getCartProductFormLS } from "./getCartProductFormLS"
import { showToast } from "./showToast";
import { updateCartValue } from "./updateCartValue";

export const removeProductCart = (id) => {
   let cartProducts = getCartProductFormLS();

   cartProducts = cartProducts.filter((currProd) => {
    return currProd.id !== id;    
   });

   //! updating the localStorage after removing the item 
    localStorage.setItem("cartProductsLS", JSON.stringify(cartProducts));

    //!Removing the div on the click of remove 
    let removeDiv = document.getElementById(`card${id}`);

    if(removeDiv){
        removeDiv.remove();
        //? Show Toast When the product remove to the cart 

        showToast('delete' , id )
     };

    updateCartValue(cartProducts);
};