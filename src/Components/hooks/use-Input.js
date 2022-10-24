import { useState } from 'react';

const useInput = ValidateFunc => {
  const [enteredInput, setEnteredInput] = useState('');
  const [inputTouched, setInputTouched] = useState(false);
  const valueIsValid = ValidateFunc(enteredInput);

  const hasError = !valueIsValid && inputTouched;

  const inputChangeHandler = e => {
    setEnteredInput(e.target.value);
  };

  const inputBlurHandler = () => {
    setInputTouched(true);
  };

  const reset = () => {
    setEnteredInput('');
    setInputTouched(false);
  };

  return {
    value: enteredInput,
    isValid: valueIsValid,
    hasError,
    inputTouched,
    inputChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
