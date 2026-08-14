import React from "react";
import "../css/contact.css";
import { useState } from "react";
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleClick = (mapUrl) => {
    window.open(mapUrl, "_blank");
  };

  return (
    <>
      <pre className="top">Contact</pre>
      <div className="container-fluid">
        <div className="row g-0">
          <div className="left-side-image col-lg-6 ">
            <div className="box">
              <p className="fw-bold ms-5 " style={{ fontSize: "50px" }}>
                Media
              </p>
              <p className="ms-5  " style={{ fontSize: "40px" }}>
                media@daraz.com
              </p>
            </div>
            <img
              src="https://daraz.com/wp-content/uploads/2021/12/Daraz-Team-Member-768x512.jpg"
              alt=""
            />
          </div>
          <div className="form col-lg-6">
            <h2 style={{ color: "#40003A" }}>Leave us a message</h2>
            <div class="mb-3">
              <div className="position-relative mb-3">
                {name === "" && (
                  <pre className="my-placeholder">
                    Your name<span className="text-danger">*</span>
                  </pre>
                )}

                <input
                  type="text"
                  className="form-control mt-5 fs-5"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={{ height: "60px" }}
                />
              </div>
            </div>
            <div className="mt-3">
              <div className="position-relative mb-3">
                {email === "" && (
                  <pre className="my-placeholder">
                    Email<span className="text-danger">*</span>
                  </pre>
                )}

                <input
                  type="email"
                  className="form-control  fs-5 text-black"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{ height: "60px" }}
                />
              </div>
            </div>
            <div className="mb-3">
              <div className="position-relative">
                {phone === "" && (
                  <pre className="my-placeholder">
                    Phone<span className="text-danger">*</span>
                  </pre>
                )}
                <input
                  type="number"
                  className="form-control mt-3 fs-5 text-black"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  style={{ height: "60px" }}
                />
              </div>
            </div>
            <div className="mb-3">
              <div className="position-relative">
                {message === "" && (
                  <pre className="my-placeholder">
                    Message<span className="text-danger">*</span>
                  </pre>
                )}
                <input
                  type="text"
                  className="form-control mt-3 fs-5 text-black"
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  style={{ height: "219px" }}
                />
              </div>
            </div>
            <p className="text-black">
              By clicking the Submit button you agree to our{" "}
              <span className="text-danger text-decoration-underline">
                Privacy Policy
              </span>
            </p>

            <button className="btn btn-danger ms-auto w-100  ">submit</button>
          </div>
        </div>
      </div>

      <div className="head-offices">
        <h1 style={{ color: "#40003A" }}>Our head offices</h1>

        <div className="card mb-3 images mt-5 ">
          <div className="row g-0 p-5">
            <div className="col-md-4">
              <img
                src="https://daraz.com/wp-content/uploads/2021/12/IMG_1788-scaled.jpg"
                className="img-fluid rounded-start"
                alt="Card"
              />
            </div>

            <div className="col-md-6">
              <div className="card-body">
                <div className="para">
                  <h5 className="card-title my-card">Singapore</h5>

                  <p className="card-text">
                    51 Bras Basah Rd, #01-21, Lazada One, Singapore 189554
                  </p>

                  <button
                    className="btn mt-2 "
                    onClick={() =>
                      handleClick("https://www.google.com/maps/place/Singapore")
                    }
                  >
                    <div className="right-icons">
                      <i className="fa-solid fa-right-long "></i>
                    </div>
                    <span className="text">Open map</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="row g-0 p-5">
            <div className="col-md-4">
              <img
                src="https://daraz.com/wp-content/uploads/2021/12/IMG_1788-scaled.jpg"
                className="img-fluid rounded-start"
                alt="Card"
              />
            </div>

            <div className="col-md-6">
              <div className="card-body">
                <div className="para">
                  <h5 className="card-title my-card">Sri Lanka</h5>

                  <p className="card-text">
                    Daraz Sri Lanka No. 100, Elvitigala Mawatha, Colombo 08, Sri
                    Lanka
                  </p>

                  <button
                    className="btn "
                    onClick={() =>
                      handleClick("https://www.google.com/maps/place/Sri+Lanka")
                    }
                  >
                    <div className="right-icons">
                      <i className="fa-solid fa-right-long "></i>
                    </div>
                    <span className="text">Open map</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="row g-0 p-5">
            <div className="col-md-4">
              <img
                src="https://daraz.com/wp-content/uploads/2021/12/IMG_1788-scaled.jpg"
                className="img-fluid rounded-start"
                alt="Card"
              />
            </div>

            <div className="col-md-6">
              <div className="card-body">
                <div className="para">
                  <h5 className="card-title my-card">Pakistan</h5>

                  <p className="card-text">
                    Jade E-Services Pakistan Pvt. Ltd., Daraz Head Office, 1st
                    Floor, NASTP Silicone Building, Main Shahrah-e-Faisal,
                    Karachi
                  </p>

                  <button
                    className="btn "
                    onClick={() =>
                      handleClick(
                        "https://www.google.com/maps/place/Daraz+Head+Office+Karachi",
                      )
                    }
                  >
                    <div className="right-icons">
                      <i className="fa-solid fa-right-long "></i>
                    </div>
                    <span className="text">Open map</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="row g-0 p-5">
            <div className="col-md-4">
              <img
                src="https://daraz.com/wp-content/uploads/2021/12/IMG_1788-scaled.jpg"
                className="img-fluid rounded-start"
                alt="Card"
              />
            </div>

            <div className="col-md-6">
              <div className="card-body">
                <div className="para">
                  <h5 className="card-title my-card">Nepal</h5>

                  <p className="card-text">
                    Daraz Head Office, Rotary Complex, Thapathali, Kathmandu
                    Metropolitan City, Ward No. 11, Nepal
                  </p>

                  <button
                    className="btn "
                    onClick={() =>
                      handleClick(
                        "https://www.google.com/maps/place/Daraz+Head+Office+Thapathali+Kathmandu",
                      )
                    }
                  >
                    <div className="right-icons">
                      <i className="fa-solid fa-right-long "></i>
                    </div>
                    <span className="text">Open map</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
