import React, { Activity, useState } from "react";
import { Link } from "react-router-dom";

import Login from "../pages/Login";
import Register from "../pages/Register";
const Loginregister = () => {
  const [hovered, setHovered] = useState(""); // store which button is hovered
  const [showLoginRegister, setShowLoginRegister] = useState({
    showLogin: false,
    showRegister: false,
  });

  const btnStyle = (name) => ({
    width: "100%",
    textAlign: "center",
    padding: "5px",
    cursor: "pointer",
    backgroundColor: hovered === name ? "blue" : "white",
    color: hovered === name ? "white" : "black",
    transition: "0.2s",
  });

  return (
    <>
      <div
        style={{
          position: "absolute",
          backgroundColor: "white",
          color: "black",
          height: "75px",
          width: "68px",
          marginRight: "23px",
          zIndex: "3",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          fontSize: "17px",
        }}
        className="mylogin"
      >
        <div
          style={btnStyle("login")}
          onMouseEnter={() => setHovered("login")}
          onMouseLeave={() => setHovered("")}
          onClick={() =>
            setShowLoginRegister({ ...showLoginRegister, showLogin: true })
          }
        >
          Login
        </div>

        <div
          style={btnStyle("signup")}
          onMouseEnter={() => setHovered("signup")}
          onMouseLeave={() => setHovered("")}
          onClick={() =>
            setShowLoginRegister({ ...showLoginRegister, showRegister: true })
          }
        >
          Sign up
        </div>
      </div>

      <Activity mode={showLoginRegister.showLogin ? "visible" : "hidden"}>
        <Login show={setShowLoginRegister} />
      </Activity>

      <Activity mode={showLoginRegister.showRegister ? "visible" : "hidden"}>
        <Register show={setShowLoginRegister} />
      </Activity>
    </>
  );
};

export default Loginregister;
