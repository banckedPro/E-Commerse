import axios from 'axios';
import { productActions } from './product-slice';

export const getAllProducts = () => {
  return async dispatch => {
    const getProducts = async () => {
      const response = await axios.get('https://dummyjson.com/products');
      return response.data;
    };

    try {
      const productData = await getProducts();

      const tranformedData = {
        smartphone: [],
        laptops: [],
        fragnances: [],
        skincares: [],
        groceries: [],
        homeDecorations: [],
      };

      productData.products.forEach(product => {
        if (product.category === 'smartphones') {
          tranformedData.smartphone.push(product);
        }
        if (product.category === 'laptops') {
          tranformedData.laptops.push(product);
        }
        if (product.category === 'fragrances') {
          tranformedData.fragnances.push(product);
        }
        if (product.category === 'skincare') {
          tranformedData.skincares.push(product);
        }
        if (product.category === 'groceries') {
          tranformedData.groceries.push(product);
        }
        if (product.category === 'home-decoration') {
          tranformedData.homeDecorations.push(product);
        }
      });

      dispatch(productActions.replaceProducts(tranformedData));
    } catch (error) {
      console.log(error);
    }
  };
};
