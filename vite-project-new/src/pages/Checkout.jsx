import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Checkout.css";

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const cart = location.state?.cart || [];
  const subtotal = location.state?.subtotal || 0;
  const tax = location.state?.tax || 0;
  const shipping = location.state?.shipping || 0;
  const total = location.state?.total || 0;

  if (!location.state || cart.length === 0) {
    navigate("/cart");
    return null;
  }

  const loadSavedFormData = () => {
    const savedData = localStorage.getItem("checkoutFormData");
    return savedData
      ? JSON.parse(savedData)
      : {
          name: "",
          email: "",
          address: "",
          city: "",
          state: "",
          zip: "",
        };
  };

  const [formData, setFormData] = useState(loadSavedFormData);

  useEffect(() => {
    localStorage.setItem("checkoutFormData", JSON.stringify(formData));
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/payment", {
      state: { formData, cart, subtotal, tax, shipping, total },
    });
  };

  return (
    <div className="payment-container">
      <div className="payment-content">
        <h1 className="payment-title">Details Portal</h1>
        <div className="checkout-progress">
          <div className="progress-step active">
            <div className="step-icon">1</div>
            <span>Billing</span>
          </div>
          <div className="progress-step">
            <div className="step-icon">2</div>
            <span>Payment</span>
          </div>
          <div className="progress-step">
            <div className="step-icon">3</div>
            <span>Review</span>
          </div>
        </div>
        <div className="payment-form">
          <form onSubmit={handleSubmit}>
            <div className="form-section">
              <h2>Billing Details</h2>
              <div className="form-group">
                <label>Name:</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Email:</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Address:</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>City:</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>State:</label>
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>

            <button type="submit" className="submit-btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
