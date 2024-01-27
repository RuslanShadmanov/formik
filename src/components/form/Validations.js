export const validateForm = (values) => {
  // you preform some validations
  // and you return an object that object contains
  // your errors if there are errors
  console.log(values, " im validating");
  const errors = {};

  if (values.name.length < 4) {
    errors.name = { message: "this message" };
  }

  return Object.keys(errors).length && errors;
};
