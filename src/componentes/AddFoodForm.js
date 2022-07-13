import React from 'react'
import { useFormik } from "formik";
import * as Yup from "yup";


const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    photo: Yup.string().required("Required"),
    calories: Yup.number().required().positive().integer("Debe ser un entero"),
    servings: Yup.number().required().positive().integer("Debe ser un entero")

  });
  
function AddFoodForm({ add}) {


  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: {
        name: "",
        photo: "",
        calories: 0,
        servings:0
    },
    validationSchema,
    onSubmit(values) {
      add(values)
    }
  });

  return (
    <form onSubmit={handleSubmit}>
      <div
        style={{ display: "flex", flexDirection: "column", padding: "50px" }}
      >
        <input
          name="name"
          onChange={handleChange}
          value={values.name}
          placeholder="name"
        />
        {errors.name ? errors.name : null}
        <input
          name="photo"
          onChange={handleChange}
          value={values.photo}
          placeholder="photo"
        />
        {errors.photo ? errors.photo : null}
        <input
          name="calories"
          onChange={handleChange}
          value={values.calories}
          placeholder="calories"
        />
              {errors.calories ? errors.calories : null}
        <input
          name="servings"
          onChange={handleChange}
          value={values.servings}
          placeholder="servings"
        />
        {errors.servings ? errors.servings : null}
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}





export default AddFoodForm




/* eslint-disable no-template-curly-in-string */


/* eslint-enable no-template-curly-in-string */



    
