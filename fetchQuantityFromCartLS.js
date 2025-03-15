import { getCartProductFormLS } from "./getCartProductFormLS";

export const fetchQuantityFromCartLS = (id, price) => {
  let cartProducts  = getCartProductFormLS();

  let existingProduct = cartProducts.find((currProd) => {
    return currProd.id == id;
  });
  let quantity = 1;

  if(existingProduct){
    quantity = existingProduct.quantity;
    price = existingProduct.price;
  }

  return {quantity , price};
};