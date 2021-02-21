import { useState } from "react";

export const useForm = (initialValues) => {
  const [values, setValues] = useState(initialValues);

  const setHandleChange = (evt) => {
    setValues({ ...values, [evt.target.name]: evt.target.value });
  };

  return [values, setValues, setHandleChange];
};
