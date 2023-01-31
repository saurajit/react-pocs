import { useDispatch } from "react-redux";
import { TShirt } from "../models/tshirt";
import { cartAdd } from '../redux/actions/cart';
import './ProductCard.css'

const ProductCard = (props: { product: TShirt }) => {
  const { imageURL, currency, price, name } = props.product;
  const dispatch = useDispatch();

  function addToCart() {
    dispatch(cartAdd(props.product));
  }

  return (
    <div className="product-card">
      {props.product &&
        <>
          <div className="product-image-wrapper">
            <div className="product-image">
              <img src={imageURL} alt={name} />
              <span className="product-name">{name}</span>
            </div>
            <div className="product-data">
              <div className="price">{currency} {price}</div>
              <button className="btn btn-primary" onClick={addToCart}>Add to cart</button>
            </div>
          </div>
        </>}
    </div>
  )
}

export default ProductCard;