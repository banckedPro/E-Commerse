import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../../store/product-actions';
import ProductHolder from '../../Components/ProductHolder/ProductHolder';
import classes from './Fragrances.module.css';

const Fragrances = () => {
  const fragnances = useSelector(state => state.products.fragnances);
  const dispatch = useDispatch();
  console.log(fragnances);
  useEffect(() => {
    if (fragnances.length === 0) {
      dispatch(getAllProducts());
    }
  }, [fragnances, dispatch]);
  return (
    <>
      <h1 className={classes.heading}>A perfect perfume for every mood.</h1>
      <ProductHolder items={fragnances} />
    </>
  );
};
export default Fragrances;
