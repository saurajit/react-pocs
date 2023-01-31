import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { TShirt } from "../models/tshirt";
import { cartAdd, cartRemove } from "../redux/actions/cart";
import { AppState } from "../redux/reducers/root";

const CartProductItem = (props: { product: TShirt, quantity: number }) => {
  const state = useSelector((state: AppState) => state.cartReducer);
  const dispatch = useDispatch();
  
  function addItem() {
    dispatch(cartAdd(props.product, 1))
  }

  function remove() {
    dispatch(cartRemove(props.product, props.quantity))
  }

  function removeItem() {
    dispatch(cartRemove(props.product, 1))
  }

  return (
    <div className={`d-flex my-3 align-items-center cart-item cart-item-id-${props.product.id}`}>
      <div className="col-1 rounded">
        <img className="img-thumbnail" src={props.product.imageURL} alt={props.product.name} />
      </div>
      <div className="col mx-3">
        <div>{props.product.name}</div>
        <div>{props.product.currency} {props.product.price}</div>
      </div>
      <div className="col-2">
        <span className="px-2" onClick={removeItem}><i className="bi bi-bag-dash"></i></span>
        <span>{props.quantity}</span>
        <span className="px-2" onClick={addItem}><i className="bi bi-bag-plus"></i></span>
      </div>
      <div className="col-2"><button type="button" className="btn btn-primary" onClick={remove}>Remove</button></div>
    </div>
  )
}

export default CartProductItem;