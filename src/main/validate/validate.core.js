export const validate = (values, config = {}) => {
  const errors = {};

  Object.keys(config).forEach((field) => {
    let fieldError;
    config[field].some((rule) => {
      fieldError = rule(values[field], values);

      return !!fieldError;
    });

    if (fieldError) errors[field] = fieldError;
  });

  return errors;
};
