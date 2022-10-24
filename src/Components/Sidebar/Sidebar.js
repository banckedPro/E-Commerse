import { NavLink } from 'react-router-dom';
import classes from './Sidebar.module.css';
const Sidebar = () => {
  return (
    <div>
      <div className={classes.sidebar}>
        <ul>
          <li>
            <NavLink to=".app">Smartphones</NavLink>
          </li>
          <li>
            <NavLink to="/laptops"> Laptops</NavLink>
          </li>
          <li>
            <NavLink to=".app">Fragrances</NavLink>
          </li>
          <li>
            <NavLink to=".app">Skincare</NavLink>
          </li>
          <li>
            <NavLink to=".app"> Groceries</NavLink>
          </li>
          <li>
            <NavLink to=".app"> Home-decoration</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
