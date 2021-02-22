import Validator from "validator";

const isEmptyObj = (obj) => {
  return Object.keys(obj).length === 0;
};

const taskValidation = (data) => {
  const errors = {};

  if (!Validator.isLength(data.tacheName, { min: 4, max: 10 }))
    errors.tacheName = "Task Name must be between 4 and 10 characters";

  if (!Validator.isLength(data.tacheDescription, { min: 4, max: 25 }))
    errors.tacheDescription =
      "Task Description must be between 4 and 25 characters";

  if (Validator.isEmpty(data.tacheName))
    errors.tacheName = "Task Name Field is Required";
  if (Validator.isEmpty(data.tacheDescription))
    errors.tacheDescription = "Task Description Field is Required";

  return {
    errors,
    isValid: isEmptyObj(errors),
  };
};
export default taskValidation;
