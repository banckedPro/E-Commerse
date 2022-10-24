import CartItems from '../CartItems.js/CartItems';
import classes from './Cart.module.css';

const Cart = () => {
  return (
    <div className={classes.cart}>
      <h1 className={classes.header}>My Cart</h1>
      <CartItems />
    </div>
  );
};

export default Cart;
