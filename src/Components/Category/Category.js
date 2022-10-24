import { Link } from 'react-router-dom';
import classes from './Category.module.css';
const Category = props => {
  const { src, name, url } = props;
  return (
    <div className={classes.category}>
      <img src={src} alt="Category" />
      <Link to={url}>
        <h1>{name}</h1>
      </Link>
    </div>
  );
};

export default Category;
