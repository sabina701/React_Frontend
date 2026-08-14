import React from "react";
import "../css/Login.css";
import { useState, useRef, useEffect } from "react";

const Login = ({ show }) => {
  const modelRef = useRef(null);

  const [userInput, setUserInput] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    if (userInput.username === "" || userInput.password === "") {
      setError(true);
    }
  }

  useEffect(() => {
    function handleModel(event) {
      if (modelRef.current && !modelRef.current.contains(event.target)) {
        show(false);
      }
    }

    document.addEventListener("mousedown", handleModel);

    return () => document.removeEventListener("mousedown", handleModel);
  }, []);

  return (
    <div className="container-fluid parent-login">
      <form
        className="container child-login"
        ref={modelRef}
        onSubmit={handleSubmit}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <p
            style={{
              alignSelf: "flex-end",
              fontWeight: "500",
              fontSize: "18px",
              color: "black",
              position: "absolute",
            }}
            onClick={() => show(false)}
          >
            X
          </p>
        </div>
        <h2 className="close-btn">Login</h2>

        <div>
          <label htmlFor="username">Username</label>
          <br />

          <input
            type="text"
            id="username"
            placeholder="Enter username"
            onChange={(event) => {
              setUserInput((prev) => ({
                ...prev,
                username: event.target.value,
              }));
              setError(false);
            }}
          />

          <p style={{ color: "red", marginTop: "6px", minHeight: "20px" }}>
            {error ? "Please Enter your username" : ""}
          </p>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <br />

          <input
            placeholder="Enter your password"
            type={showPassword ? "text" : "password"}
            onChange={(event) => {
              setUserInput((prev) => ({
                ...prev,
                password: event.target.value,
              }));
              setError(false);
            }}
          />
          {
            <div style={{ display: "flex", flexDirection: "column" }}>
              <p
                style={{
                  alignSelf: "flex-end",
                  color: "blue",
                  textDecoration: "underline",
                }}
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? "Hide" : "show"}
              </p>
            </div>
          }
          <p style={{ color: "red", marginTop: "6px", minHeight: "20px" }}>
            {error ? "Please Enter your password" : ""}
          </p>
        </div>
        <button className="btn btn-primary">Login</button>
      </form>
    </div>
  );
};

export default Login;
