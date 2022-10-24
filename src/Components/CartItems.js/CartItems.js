import CartItem from '../CartItem/CartItem';
import classes from './CartItems.module.css';

const arr = [1, 2, 3, 4, 5];
const CartItems = () => {
  return (
    <div>
      {arr.map(a => {
        return <CartItem />;
      })}
    </div>
  );
};

export default CartItems;
