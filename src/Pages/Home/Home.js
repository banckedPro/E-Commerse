import classes from './Home.module.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllProducts } from '../../store/product-actions';
import uuid4 from 'uuid4';
import Category from '../../Components/Category/Category';

const categories = [
  {
    id: uuid4(),
    name: 'Smartphones',
    url: '/smartphones',
    src: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-model-unselect-gallery-1-202207?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1654893619853',
  },
  {
    id: uuid4(),
    name: 'Laptops',
    url: '/laptops',
    src: 'https://www.apple.com/v/macbook-pro-14-and-16/b/images/overview/hero/hero_intro_endframe__e6khcva4hkeq_large.jpg',
  },
  {
    id: uuid4(),
    name: 'Fragrance',
    url: '/fragrances',
    src: 'https://img.freepik.com/free-photo/front-view-expensive-perfume-as-present-blue-table-gift-scent-fragnance-marriage-love-feeling-holiday-smell_140725-148361.jpg',
  },
  {
    id: uuid4(),
    name: 'Skincare',
    url: '/skincares',
    src: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/beauty-products-1603140461.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*',
  },
  {
    id: uuid4(),
    name: 'Groceries',
    url: '/groceries',
    src: 'https://midwestcommunity.org/wp-content/uploads/2018/02/Groceries-ThinkstockPhotos-836782690.jpg',
  },
  {
    id: uuid4(),
    name: 'Home-Decorations',
    url: '/home-decorations',
    src: 'https://i.pinimg.com/736x/8f/1e/6c/8f1e6c7cff9473074f47f2ba56efaf4d.jpg',
  },
];

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <div className={classes.Home}>
      <h1 className={classes.heading}>
        It's never too late to buy something nice for yourself.
      </h1>
      <div className={classes.content}>
        {categories.map(category => {
          return (
            <Category
              key={category.id}
              id={category.id}
              name={category.name}
              url={category.url}
              src={category.src}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
