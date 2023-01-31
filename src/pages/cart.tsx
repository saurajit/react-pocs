import { useSelector } from "react-redux";
import CartProductItem from "../components/CartProductItem";
import { AppState } from "../redux/reducers/root";

const Cart = function () {
  const state = useSelector((state: AppState) => state.cartReducer);
  return (
    <div className="cart-wrapper">
      <h2>Cart</h2>
      <div className="row">
        <div className="col-md-6 offset-md-2">
          {state.cartItems.size > 0 ?
            <div>
              {[...state.cartItems.values()]
                .map(item => <CartProductItem key={item.product.id} product={item.product} quantity={item.quantity} />)
              }
            </div>
            : <div> No Items in the cart</div>}
          <div className="border-top d-flex justify-content-between">
            <div className="col fw-bold">Total: </div>
            <div className="col fw-bold">{state.totalPrice}</div>
          </div></div>
      </div>
    </div>
  );
}

export default Cart;