import classes from './CartItem.module.css';
import { Button } from '@chakra-ui/react';
const CartItem = () => {
  return (
    <div className={classes['cart-item']}>
      <img src="https://m.media-amazon.com/images/I/319Zx40AhUL.jpg" alt="" />
      <h1>Hyaluronic Acid Serum</h1>
      <h1>L'Oreal Paris</h1>

      <div className={classes['item-plus-minus']}>
        <Button colorScheme="teal" variant="solid">
          <h1>-</h1>
        </Button>
        <h1>5</h1>
        <Button colorScheme="teal" variant="solid">
          <h1>+</h1>
        </Button>
      </div>
      <h1>$450</h1>
    </div>
  );
};
export default CartItem;
