import { useState, useCallback } from "react";
import validator from "validator";

export function useFormAndValidation() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });

    let emailError = '';
    if (name === 'email') {
      if (!value) {
        emailError = 'Введите ваш email';
      } else if (!validator.isEmail(value)) {
        emailError = 'Некорректный формат email';
      }
    }

    setErrors({ ...errors, [name]: emailError });
    setIsValid(e.target.closest("form").checkValidity());
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return {
    values,
    handleChange,
    errors,
    isValid,
    resetForm,
    setValues,
    setIsValid,
  };
}
