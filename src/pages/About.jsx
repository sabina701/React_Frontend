import React from "react";
import "../css/about.css";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  function handleShopping() {
    navigate("/products");
  }
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero text-center text-white d-flex align-items-center justify-content-center">
        <div>
          <h1 className="display-4 fw-bold">About Our Store</h1>
          <p className="lead">
            Your trusted destination for quality products at affordable prices.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="container py-5">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <img
              src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=800"
              alt="Our Store"
              className="img-fluid rounded shadow"
            />
          </div>

          <div className="col-lg-6 mt-4 mt-lg-0">
            <h2 className="fw-bold mb-3">Our Story</h2>
            <p className="text-secondary">
              We started our journey with one simple mission: to make online
              shopping easy, reliable, and enjoyable. From fashion and
              electronics to home essentials, we carefully select products that
              combine quality with value.
            </p>

            <p className="text-secondary">
              Every customer matters to us. We strive to deliver exceptional
              service, fast shipping, and products that exceed expectations.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-us py-5">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">Why Choose Us?</h2>

          <div className="row g-4">
            <div className="col-md-3">
              <div className="feature-card text-center shadow-sm p-4">
                <h1>
                  <i className="fa-solid fa-van-shuttle"></i>
                </h1>
                <h5>Fast Delivery</h5>
                <p>
                  Quick and secure delivery to your doorstep across the country.
                </p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="feature-card text-center shadow-sm p-4">
                <h1>
                  <i className="fa-solid fa-credit-card"></i>
                </h1>
                <h5>Secure Payment</h5>
                <p>Shop confidently with safe and encrypted payment methods.</p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="feature-card text-center shadow-sm p-4">
                <h1>
                  <i className="fa-regular fa-star"></i>
                </h1>
                <h5>Premium Quality</h5>
                <p>
                  Carefully selected products from trusted brands and suppliers.
                </p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="feature-card text-center shadow-sm p-4">
                <h1>
                  <i className="fa-solid fa-headphones"></i>
                </h1>
                <h5>24/7 Support</h5>
                <p>Our support team is always available to help you anytime.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="container py-5">
        <div className="row text-center">
          <div className="col-md-3">
            <h2 className="fw-bold text-primary">10K+</h2>
            <p>Happy Customers</p>
          </div>

          <div className="col-md-3">
            <h2 className="fw-bold text-primary">500+</h2>
            <p>Products</p>
          </div>

          <div className="col-md-3">
            <h2 className="fw-bold text-primary">50+</h2>
            <p>Brands</p>
          </div>

          <div className="col-md-3">
            <h2 className="fw-bold text-primary">99%</h2>
            <p>Customer Satisfaction</p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="team-section py-5">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">Meet Our Team</h2>

          <div className="row g-4">
            <div className="col-md-4">
              <div className="card border-0 shadow">
                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  className="card-img-top"
                  alt="Founder"
                />
                <div className="card-body text-center">
                  <h5>Emily Johnson</h5>
                  <p className="text-muted">Founder & CEO</p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card border-0 shadow">
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  className="card-img-top"
                  alt="Manager"
                />
                <div className="card-body text-center">
                  <h5>Michael Smith</h5>
                  <p className="text-muted">Operations Manager</p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card border-0 shadow">
                <img
                  src="https://randomuser.me/api/portraits/women/68.jpg"
                  className="card-img-top"
                  alt="Support"
                />
                <div className="card-body text-center">
                  <h5>Sarah Williams</h5>
                  <p className="text-muted">Customer Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section text-center text-white py-5">
        <div className="container">
          <h2 className="fw-bold">Ready to Shop?</h2>
          <p className="mb-4">
            Discover amazing products at unbeatable prices.
          </p>

          <button
            className="btn btn-light btn-lg px-4"
            onClick={() => handleShopping()}
          >
            Start Shopping
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;
