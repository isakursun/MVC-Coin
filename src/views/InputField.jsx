import React from "react";

const InputField = ({ formik, data }) => {
  const { label, name, type } = data;

  return (
    <div>
      <label>{label}</label>
      <input
        value={formik.values[name]}
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        name={name}
        type={type}
      />
      {/* inputlardaki hatayı gösterme */}
      {formik.errors[name] && formik.touched[name] && (
        <span>{formik.errors[name]}</span>
      )}
    </div>
  );
};

export default InputField;
