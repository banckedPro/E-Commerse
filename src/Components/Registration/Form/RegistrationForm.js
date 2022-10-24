import { Input, InputGroup, InputRightElement, Button } from '@chakra-ui/react';
import { useState } from 'react';
import useInput from '../../hooks/use-Input';
import classes from './RegistrationForm.module.css';

const RegistrationForm = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const validateEmail = function (email) {
    return email.trim().includes('@') && email.trim().includes('@');
  };

  const validatePassword = function (password) {
    return password.trim().length > 7;
  };

  const validatePersonalData = data => {
    return data.trim().length > 5;
  };

  const validateAge = data => {
    return data > 10;
  };

  const {
    value: firstName,
    isValid: firstNameisValid,
    hasError: firstNameIsInvalid,
    inputChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetfirstName,
  } = useInput(validatePersonalData);

  const {
    value: lastName,
    isValid: lastNameisValid,
    hasError: lastNameIsInvalid,
    inputChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetlastName,
  } = useInput(validatePersonalData);

  const {
    value: age,
    isValid: ageisValid,
    hasError: ageIsInValid,
    inputChangeHandler: ageChangeHandler,
    inputBlurHandler: ageBlurHandler,
    reset: resetAge,
  } = useInput(validateAge);

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

  let isFormValid = false;

  if (
    emailisValid &&
    passwordisValid &&
    ageisValid &&
    firstNameisValid &&
    lastNameisValid
  ) {
    isFormValid = true;
  }

  const onSubmitHandler = e => {
    e.preventDefault();

    resetfirstName();
    resetlastName();
    resetAge();
    resetEmail();
    resetPassword();
  };

  return (
    <form className={classes.login} onSubmit={onSubmitHandler}>
      <Input
        placeholder="First Name"
        className={classes.email}
        value={firstName}
        onChange={firstNameChangeHandler}
        onBlur={firstNameBlurHandler}
        isInvalid={firstNameIsInvalid}
        variant="flushed"
      />

      <Input
        placeholder="Last Name"
        className={classes.email}
        value={lastName}
        onChange={lastNameChangeHandler}
        onBlur={lastNameBlurHandler}
        isInvalid={lastNameIsInvalid}
        variant="flushed"
      />

      <Input
        placeholder="Age (Must be Greater than 10)"
        className={classes.email}
        value={age}
        onChange={ageChangeHandler}
        onBlur={ageBlurHandler}
        isInvalid={ageIsInValid}
        type="number"
        variant="flushed"
      />

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
        disabled={!isFormValid}
      >
        REGISTER
      </Button>
    </form>
  );
};

export default RegistrationForm;
