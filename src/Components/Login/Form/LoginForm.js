import { Input, InputGroup, InputRightElement, Button } from '@chakra-ui/react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../../store/auth-actions';
import useInput from '../../hooks/use-Input';
import classes from './LoginForm.module.css';

const LoginForm = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const dispatch = useDispatch();

  const validateEmail = function (email) {
    return email.trim().includes('@') && email.trim().includes('@');
  };

  const validatePassword = function (password) {
    return password.trim().length > 7;
  };

  const {
    value: email,
    isValid: emailisValid,
    hasError: emailIsInvalid,
    inputChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(validateEmail);

  const {
    value: password,
    isValid: passwordisValid,
    hasError: passwordIsInValid,
    inputChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPassword,
  } = useInput(validatePassword);

  let formIsValid = false;

  if (emailisValid && passwordisValid) {
    formIsValid = true;
  }

  const onSubmitHandler = e => {
    e.preventDefault();

    if (emailIsInvalid || passwordIsInValid) {
      return;
    }
    dispatch(loginUser(email, password));

    resetEmail();
    resetPassword();
  };

  return (
    <form className={classes.login} onSubmit={onSubmitHandler}>
      <Input
        placeholder="Email"
        className={classes.email}
        value={email}
        onChange={emailChangeHandler}
        onBlur={emailBlurHandler}
        isInvalid={emailIsInvalid}
        variant="flushed"
      />

      <InputGroup size="md">
        <Input
          pr="4.5rem"
          type={show ? 'text' : 'password'}
          placeholder="Password (Must Be Greater Than 7)"
          className={classes.email}
          value={password}
          onChange={passwordChangeHandler}
          onBlur={passwordBlurHandler}
          isInvalid={passwordIsInValid}
          variant="flushed"
        />
        <InputRightElement width="4.5rem">
          <Button h="1.75rem" size="sm" onClick={handleClick}>
            {show ? 'Hide' : 'Show'}
          </Button>
        </InputRightElement>
      </InputGroup>

      <Button
        colorScheme="teal"
        size="md"
        className={classes['login-button']}
        type="submit"
        disabled={!formIsValid}
      >
        Login
      </Button>
    </form>
  );
};

export default LoginForm;
