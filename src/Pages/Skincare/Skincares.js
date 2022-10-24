import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductHolder from '../../Components/ProductHolder/ProductHolder';
import { getAllProducts } from '../../store/product-actions';
import classes from './Skincares.module.css';

const Skincares = () => {
  const skincares = useSelector(state => state.products.skincares);
  const dispatch = useDispatch();
  useEffect(() => {
    if (skincares.length === 0) {
      dispatch(getAllProducts());
    }
  }, [skincares, dispatch]);
  return (
    <>
      <h1 className={classes.heading}>One step to flawless beauty.</h1>
      <ProductHolder items={skincares} />
    </>
  );
};
export default Skincares;
