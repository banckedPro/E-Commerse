import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductHolder from '../../Components/ProductHolder/ProductHolder';
import { getAllProducts } from '../../store/product-actions';
import classes from './Smartphones.module.css';

const Smartphones = () => {
  const smartphones = useSelector(state => state.products.smartphone);
  const dispatch = useDispatch();
  useEffect(() => {
    if (smartphones.length === 0) {
      dispatch(getAllProducts());
    }
  }, [smartphones, dispatch]);
  return (
    <>
      <h1 className={classes.heading}>
        It's not just smart. It's the phone that thinks.
      </h1>
      <ProductHolder items={smartphones} />
    </>
  );
};
export default Smartphones;
