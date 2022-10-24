import { Link } from 'react-router-dom';
import RegistrationForm from '../../Components/Registration/Form/RegistrationForm';
import classes from './Registration.module.css';
const Registration = () => {
  return (
    <div className={classes.login}>
      <h1>Registration</h1>
      <p>
        Aliquam at blandit ante, eget molestie velit. Nunc gravida tincidunt
        leo, quis vestibulum diam fringilla eu. Lorem ipsum dolor sit amet.
      </p>
      <RegistrationForm />
      <div className={classes.footer}>
        <p>Already a User ?</p>
        <Link to="/login">Login Here</Link>
      </div>
    </div>
  );
};

export default Registration;
