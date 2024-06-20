import { useState } from 'react';

interface InputValues {
  [key: string]: string;
}

export const useInput = (initialValues: InputValues = {}) => {
  const [values, setValues] = useState<InputValues>(initialValues);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const reset = () => {
    setValues(initialValues);
  };

  return { values, onChange, reset };
};
