import { TShirt } from '../../models/tshirt';
import { CART_ADD, CART_REMOVE } from '../actions/cart';

interface CartItem {
  product: TShirt;
  quantity: number;
}

interface ICart {
  cartItems: Map<number, CartItem>;
  totalPrice: number;
  items: number;
}

const initialState: ICart = {
  cartItems: new Map(),
  totalPrice: 0,
  items: 0
}

export const cartReducer = (state = initialState, { type, payload }: { type: string, payload: { product: TShirt, quantity: number } }) => {
  let currProd;
  switch (type) {
    case CART_ADD:
      currProd = state.cartItems.get(payload.product.id);
      if (!currProd && payload.quantity <= payload.product.quantity) {
        const cartItems = new Map(state.cartItems);
        cartItems.set(payload.product.id, {product: payload.product, quantity: payload.quantity})
        state = { ...state, ...{ cartItems, totalPrice: state.totalPrice + payload.product.price * payload.quantity, items: state.items + payload.quantity } }
      }
      if (currProd && currProd.product.quantity >= currProd.quantity + payload.quantity) {
        currProd.quantity += payload.quantity;
        state = { ...state, ...{ totalPrice: state.totalPrice + payload.product.price * payload.quantity, items: state.items + payload.quantity } };
        console.log(state);
      }
      return state;
    case CART_REMOVE:
      currProd = state.cartItems.get(payload.product.id);
      if (currProd && currProd.product.quantity - payload.quantity >= 0) {
        currProd.quantity -= payload.quantity;
        const cartItems = new Map(state.cartItems);
        if (currProd.quantity === 0) {
          cartItems.delete(payload.product.id);
        }
        state = { ...state, ...{cartItems, items: state.items - payload.quantity, totalPrice: state.totalPrice - (payload.product.price * payload.quantity)}};
      }
      return state;
    default:
      return state;
  }
}
