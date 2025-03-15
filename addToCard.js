import { getCartProductFormLS } from "./getCartProductFormLS";
import { showToast } from "./showToast";
import { updateCartValue } from "./updateCartValue";

getCartProductFormLS();

export const addToCard = (event , id , stock) => {

    let arrLocalStorageProduct = getCartProductFormLS();

    const currentProductElem = document.querySelector(`#card${id}`);
    // console.log(currentProductElem);

    let quantity = currentProductElem
    .querySelector('.productQuantity').innerText;

    let price = currentProductElem
    .querySelector('.productPrice').innerText;
    
    // console.log(quantity, price);

    price = price.replace("₹" , "");

    let existingProd = arrLocalStorageProduct.find((curProd) => curProd.id == id);
    console.log(existingProd);

    if(existingProd && quantity > 1 ){
        quantity = Number(existingProd.quantity) + Number(quantity);
        price = Number(price* quantity);

        let updatedCart = {id , quantity , price};

        updatedCart = arrLocalStorageProduct.map((currProd) => {
            return currProd.id == id ? updatedCart : currProd;
        });
        // console.log(updatedCart)

        localStorage.setItem("cartProductsLS", JSON.stringify(updatedCart));
        //? Show toast when the product is added to the cart

        showToast('add' , id);

        // arrLocalStorageProduct.map((currProd) => {
        //     if(currProd.id == id){
        //         updatedCart;
        //     }else{
        //         currProd;
        //     }
        // });

    }

    if(existingProd){
        // alert("Duplicate hai bhai")
        return false
    }
    price = Number(price * quantity);
    quantity = Number(quantity);

    // let updateCart = {id , quantity , price};
    
    arrLocalStorageProduct.push({id , quantity , price});

    localStorage.setItem("cartProductsLS", JSON.stringify(arrLocalStorageProduct));

    updateCartValue(arrLocalStorageProduct); 

    //? Show toast when the product is added to the cart
        
    showToast('add' , id);

}