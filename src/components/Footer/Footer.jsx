import React from "react";
import "../../css/Footer.css";
const Footer = () => {
  return (
    <>
      <div className="row footer-container py-5 px-5">
        <div className="col-lg-3 col-md-6 ">
          <h2>About Us</h2>
          <p className="py-3">
            Nam libero tempore, cum soluta nobis est eligendi optio cumque
            nerihe re impedit quo minus id qd maxime aceat facere.
          </p>
          <div className="social-links">
            <div className="link">
              <i class="bi bi-facebook"></i>
            </div>
            <div className="link">
              <i class="bi bi-linkedin"></i>
            </div>
            <div className="link">
              <i class="bi bi-twitter"></i>
            </div>
            <div className="link">
              <i class="bi bi-google"></i>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <h2>Quick Link</h2>
          <div className="py-3">
            <p>
              <a href="">About Us</a>
            </p>
            <p>
              <a href="">Classes</a>
            </p>
            <p>
              <a href="">Support</a>
            </p>
            <p>
              <a href="">Blog Posts</a>
            </p>
            <p>
              <a href="">Contact Us</a>
            </p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 py-md-3">
          <h2>Contact Info</h2>
          <div className="row  ">
            <div className="col d-flex py-2">
              <i class="bi bi-geo-alt icon"></i>
              <p className="mx-3">10001, 5th Avenue, #32841 block, USA</p>
            </div>
          </div>
          <div className="row">
            <div className="col d-flex">
              <i class="bi bi-telephone icon"></i>
              <p className="mx-3">+1223 456 790</p>
            </div>
          </div>
          <h4 className="pt-2 pb-2">Open Hours:</h4>
          <p>Mon-Sat : 9Am-6Pm</p>
          <p>Sunday :CLOSED</p>
        </div>
        <div className="col-lg-3 col-md-6 py-md-3">
          <h2>Subscribe</h2>
          <div className="">
            <div className="py-3 pt-3 my-input d-flex">
              <input type="text" placeholder="Email Address" />

              <div className="paper-aeroplane-icons ">
                <i class="bi bi-send-fill"></i>
              </div>
            </div>
          </div>
          <p className="py-2">
            Subscribe to our mailing list and get updates to your email inbox.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
