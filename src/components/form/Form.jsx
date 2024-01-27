import { Formik } from "formik";
const validateForm = (values) => {
  console.log(values);
};

export const Form = () => {
  return (
    <Formik
      initialValues={{
        name: "",
        price: 5.0,
      }}
      validate={validateForm}
    >
      {(props) => (
        <form>
          <input
            name="name"
            placeholder="enter your name please"
            value={props.values.name}
            onChange={props.handleChange}
          />{" "}
          <br />
          <input
            name="price"
            placeholder="enter your price please"
            value={props.values.price}
            onChange={props.handleChange}
          />
        </form>
      )}
    </Formik>
  );
};
