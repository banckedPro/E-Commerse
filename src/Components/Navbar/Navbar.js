import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import classes from './Navbar.module.css';
const Navbar = () => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  return (
    <div className={classes.navbar}>
      <h1>
        <Link to="/home">Navbar-Brand</Link>
      </h1>

      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>

        {isAuthenticated && (
          <li>
            <Link to="/cart">Cart</Link>
          </li>
        )}

        {isAuthenticated && (
          <li>
            <Link to="/profle">Profile</Link>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
