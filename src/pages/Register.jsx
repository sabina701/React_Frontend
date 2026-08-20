import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import "../css/Register.css";

const Register = ({ show }) => {
  const userSchema = yup.object({
    firstName: yup
      .string()
      .min(3, "Minimum 3 characters")
      .required("This field cannot be empty"),

    lastName: yup
      .string()
      .min(4, "Minimum 4 characters")
      .required("This field cannot be empty"),

    email: yup
      .string()
      .email("Please enter a valid email address")
      .required("This field cannot be empty"),

    password: yup
      .string()
      .min(8, "password must be at least 8 characters")
      .matches(/[a-z]/, "Password must contain at least one lowercase letter")
      .matches(/\d/, "password must contain at least one number")
      .matches(
        /[!@#$%&*]/,
        "password must contain at least one special characters",
      )
      .required("password is required"),

    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "password must match")
      .required("confirm password required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userSchema),
  });

  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState(false);

  const modelRef = useRef(null);

  const onSubmit = (data) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const alreadyExists = users.some((user) => user.email === data.email);

    if (alreadyExists) {
      toast.error("An account with this email already exists");
      return;
    }

    users.push(data);

    localStorage.setItem("users", JSON.stringify(users));

    toast.success("Registered successfully! Please login.");

    show(false);
  };

  useEffect(() => {
    function handleModel(event) {
      if (modelRef.current && !modelRef.current.contains(event.target)) {
        show(false);
      }
    }

    document.addEventListener("mousedown", handleModel);

    return () => {
      document.removeEventListener("mousedown", handleModel);
    };
  }, [show]);

  return (
    <div className="parent-container">
      <div className="child-container">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="register-form"
          ref={modelRef}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <p
              style={{
                alignSelf: "flex-end",
                fontWeight: "500",
                fontSize: "18px",
                color: "black",
                position: "absolute",
                cursor: "pointer",
              }}
              onClick={() => show(false)}
            >
              X
            </p>
          </div>

          <h2>Register</h2>

          <label>First Name</label>

          <input type="text" placeholder="john" {...register("firstName")} />

          <span>{errors.firstName?.message}</span>

          <label>Last Name</label>

          <input type="text" placeholder="Doe" {...register("lastName")} />

          <span>{errors.lastName?.message}</span>

          <label>Email</label>

          <input
            type="email"
            placeholder="johnDoe@gmail.com"
            {...register("email")}
          />

          <span>{errors.email?.message}</span>

          <div>
            <label>Password</label>
            <br />

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              {...register("password")}
              className="w-100"
            />

            <br />

            <span>{errors.password?.message}</span>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <p
                style={{
                  alignSelf: "flex-end",
                  color: "blue",
                  textDecoration: "underline",
                  cursor: "pointer",
                }}
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? "Hide" : "Show"}
              </p>
            </div>
          </div>

          <div>
            <label>Confirm Password</label>
            <br />

            <input
              type={confirmPassword ? "text" : "password"}
              placeholder="Enter your confirm password"
              {...register("confirmPassword")}
              className="w-100"
            />

            <br />

            <span>{errors.confirmPassword?.message}</span>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <p
                style={{
                  alignSelf: "flex-end",
                  color: "blue",
                  textDecoration: "underline",
                  cursor: "pointer",
                }}
                onClick={() => setConfirmPassword((prev) => !prev)}
              >
                {confirmPassword ? "Hide" : "Show"}
              </p>
            </div>
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
