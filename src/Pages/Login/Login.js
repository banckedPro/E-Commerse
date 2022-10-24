import { Link } from 'react-router-dom';
import LoginForm from '../../Components/Login/Form/LoginForm';
import classes from './Login.module.css';
const Login = () => {
  return (
    <div className={classes.login}>
      <h1>Login</h1>
      <p>
        Aliquam at blandit ante, eget molestie velit. Nunc gravida tincidunt
        leo, quis vestibulum diam fringilla eu. Lorem ipsum dolor sit amet.
      </p>
      <LoginForm />
      <div className={classes.footer}>
        <p>New User ?</p>
        <Link to="/register">Register Here</Link>
      </div>
    </div>
  );
};

export default Login;
