import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductHolder from '../../Components/ProductHolder/ProductHolder';
import { getAllProducts } from '../../store/product-actions';
import classes from './Groceries.module.css';

const Groceries = () => {
  const groceries = useSelector(state => state.products.groceries);
  const dispatch = useDispatch();
  useEffect(() => {
    if (groceries.length === 0) {
      dispatch(getAllProducts());
    }
  }, [groceries, dispatch]);

  return (
    <>
      <h1 className={classes.heading}>
        Serving fresh ingredients your way everyday!
      </h1>
      <ProductHolder items={groceries} />
    </>
  );
};
export default Groceries;
