import { Formik } from "formik";
import { validateForm } from "./Validations";
import { formInitialValues } from "./InitialValues";
import { TextField, Button } from "@mui/material";

export const Form = () => {
  return (
    <Formik
      initialValues={formInitialValues}
      onSubmit={(values) => {
        // do all you want
        // send it to the API
        // you can store in another place
        console.log(values, "saving the sate");
      }}
      validate={validateForm} // get a function
      validateOnBlur={true} // boolean
      validateOnChange={false} // boolean
    >
      {(props) => (
        <form>
          <TextField
            required
            label="Required"
            variant="outlined"
            name="name"
            placeholder="give me a name"
            value={props.values.name}
            onChange={props.handleChange}
            onBlur={props.handleBlur}
          />
          {props.errors?.name && <span>{props.errors.name.message}</span>}
          <br />
          <TextField
            variant="outlined"
            name="price"
            placeholder="give me me a price"
            value={props.values.price}
            onChange={props.handleChange}
            onBlur={props.handleBlur}
          />
          <br />
          <Button
            variant="contained"
            type="submit"
            onClick={props.handleSubmit}
          >
            Save the Data
          </Button>
        </form>
      )}
    </Formik>
  );
};
