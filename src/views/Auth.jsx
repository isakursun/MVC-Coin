import { useFormik } from "formik";
import InputField from "./InputField";
import { inputs } from "../constants";
import { schema } from "../schema";

const Auth = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      age: "",
      password: "",
      confirmPassword: "",
    },

    onSubmit: (values, actions) => {
      localStorage.setItem("user", JSON.stringify(values));
      actions.resetForm();
    },

    validationSchema: schema,
  });

  return (
    <div className="auth-page pb-5">
      <div className="container">
        <h2 className="d-flex gap-3 justify-content-center align-items-center text-center my-5">
          <img height={60} src="/c-logo.png" alt="logo" />
          <span>Coinmania</span>
        </h2>

        <form onSubmit={formik.handleSubmit}>
          {inputs.map((data) => (
            <InputField formik={formik} data={data} />
          ))}

          <button type="submit">Kaydol</button>
        </form>
      </div>
    </div>
  );
};

export default Auth;
