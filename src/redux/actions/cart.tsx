import { TShirt } from "../../models/tshirt";

export const CART_ADD = 'cart.add';
export const CART_REMOVE = 'cart.remove';

export const cartAdd = (product: TShirt, quantity = 1) => ({
  type: CART_ADD,
  payload: { product, quantity }
});

export const cartRemove = (product: TShirt, quantity = 1) => ({
  type: CART_REMOVE,
  payload: { product, quantity }
});
