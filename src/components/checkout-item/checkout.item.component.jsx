import "./checkout.component.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  const { clearItemFromCart, addItemToCart, removeItemFromCart } =
    useContext(CartContext);

  const clearCartItemHandler = () => clearItemFromCart(cartItem);

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>

      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow">
          <span onClick={() => removeItemFromCart(cartItem)}>&#10094;</span>
        </div>
        <span className="value">{quantity}</span>

        <div className="arrow">
          <span onClick={() => addItemToCart(cartItem)}>&#10095;</span>
        </div>
      </span>
      <span className="price">${price}</span>
      <div className="remove-button" onClick={clearCartItemHandler}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
