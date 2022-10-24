import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductHolder from '../../Components/ProductHolder/ProductHolder';
import { getAllProducts } from '../../store/product-actions';
import classes from './Laptops.module.css';

const Laptops = () => {
  const dispatch = useDispatch();
  const laptops = useSelector(state => state.products.laptops);
  useEffect(() => {
    if (laptops.length === 0) {
      dispatch(getAllProducts());
    }
  }, [laptops, dispatch]);
  return (
    <>
      <h1 className={classes.heading}>
        It’s more than a laptop – it’s a way of life.
      </h1>
      <ProductHolder items={laptops} />
    </>
  );
};
export default Laptops;
