import "../css/Register.css";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
function Register() {
  const Schema = yup.object({
    firstName: yup
      .string()
      .min(3, "Minimum 3 characters")
      .required("This field cannot be empty."),
    lastName: yup
      .string()
      .min(3, "Minimum 3 characters")
      .required("This field cannot be empty."),
    email: yup
      .string()
      .email("Email doesnot match")
      .required("This field cannot be empty."),
    password: yup
      .string()
      .min(8, "Minimum 8 character")
      .matches(/[A-Z]/, "Must contain an uppercase letter")
      .matches(/[a-z]/, "Must contain an lowercase letter")
      .matches(/\d/, "must contain a number")
      .matches(/[!@#$%^&*]/, "must contain a special character")
      .required("This field cannot be empty."),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null])
      .required("This field cannot be empty."),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(Schema),
  });
  function onSubmit(data) {
    console.log("Success:", data);
  }

  function onError(errors) {
    console.log("Errors:", errors);
  }

  return (
    <form className="my-register" onSubmit={handleSubmit(onSubmit)}>
      <div className="arounded-box">
        <h2>Register</h2>
        <div className="mb-3">
          <label htmlFor="firstName" className="form-label text-dark ">
            First Name
          </label>
          <input
            type="text"
            placeholder="John"
            className="form-control"
            {...register("firstName")}
          />
          <p>{errors.firstName && errors.firstName?.message}</p>
        </div>
        <div className="mb-3">
          <label htmlFor="lastName" className="form-label text-dark">
            Last Name
          </label>
          <input
            type="text"
            placeholder="Cena"
            className="form-control"
            {...register("lastName")}
          />
          <p>{errors.lastName && errors.lastName?.message}</p>
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label text-dark">
            Email
          </label>
          <input
            type="text"
            placeholder="john@gmail.com"
            className="form-control"
            {...register("email")}
          />
          <p>{errors.email && errors.email?.message}</p>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label text-dark">
            Password
          </label>
          <input
            type="text"
            placeholder="Password"
            className="form-control"
            {...register("password")}
          />
          <p>{errors.password && errors.password?.message}</p>
        </div>

        <div className="mb-3">
          <label htmlFor="confirmPassword" className="form-label text-dark">
            Confirm Password
          </label>
          <input
            type="text"
            placeholder="Confirm Password"
            className="form-control"
            {...register("confirmPassword")}
          />
          <p>{errors.confirmPassword && errors.confirmPassword?.message}</p>
        </div>

        <button type="submit" className="btn btn-primary w-100 ">
          Register
        </button>
      </div>
    </form>
  );
}
export default Register;
