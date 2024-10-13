import "./cart.item.styles.scss";

const CartItem = ({ cartItem }) => {
  const { name, quantity } = cartItem;

  return (
    <div>
      <span>{name}</span> <br />
      <span>{quantity}</span>
    </div>
  );
};

export default CartItem;
