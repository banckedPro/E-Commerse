import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductHolder from '../../Components/ProductHolder/ProductHolder';
import { getAllProducts } from '../../store/product-actions';
import classes from './HomeDecorations.module.css';

const HomeDecorations = () => {
  const homeDecorations = useSelector(state => state.products.homeDecorations);
  const dispatch = useDispatch();
  useEffect(() => {
    if (homeDecorations.length === 0) {
      dispatch(getAllProducts());
    }
  }, [homeDecorations, dispatch]);
  return (
    <>
      <h1 className={classes.heading}>Beauty lies in details.</h1>
      <ProductHolder items={homeDecorations} />
    </>
  );
};
export default HomeDecorations;
