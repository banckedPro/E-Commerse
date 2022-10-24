import Card from '../UI/Card';
import classes from './ProductHolder.module.css';

const ProductHolder = props => {
  return (
    <div className={classes.holder}>
      {props.items.map(item => {
        return (
          <Card
            key={Math.random()}
            title={item.title}
            discountPercentage={item.discountPercentage}
            price={item.price}
            rating={item.rating}
            src={item.images[0]}
          />
        );
      })}
    </div>
  );
};

export default ProductHolder;
