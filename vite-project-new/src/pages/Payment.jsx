import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Payment.css";

const Payment = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const {
    formData: checkoutData,
    cart,
    subtotal,
    tax,
    shipping,
    total,
  } = location.state || {};

  const loadSavedFormData = () => {
    const savedData = localStorage.getItem("paymentFormData");
    return savedData
      ? JSON.parse(savedData)
      : {
          name: "",
          cardNumber: "",
          expiry: "",
          cvv: "",
          saveDetails: false,
          paymentMethod: "cod",
        };
  };

  const [formData, setFormData] = useState(loadSavedFormData);

  useEffect(() => {
    localStorage.setItem("paymentFormData", JSON.stringify(formData));
  }, [formData]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handlePaymentMethodChange = (e) => {
    const { value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      paymentMethod: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      formData: { ...checkoutData, ...formData },
      cart,
      subtotal,
      tax,
      shipping,
      total,
    };
    navigate("/review", { state: data });
  };

  return (
    <div className="payment-container">
      <div className="payment-content">
        <h1 className="payment-title">Payment Portal</h1>
        <div className="checkout-progress">
          <div className="progress-step">
            <div className="step-icon">1</div>
            <span>Billing</span>
          </div>
          <div className="progress-step active">
            <div className="step-icon">2</div>
            <span>Payment</span>
          </div>
          <div className="progress-step">
            <div className="step-icon">3</div>
            <span>Review</span>
          </div>
        </div>
        <form className="payment-form" onSubmit={handleSubmit}>
          <div className="payment-methods">
            <label className="payment-method">
              <input
                type="radio"
                name="paymentMethod"
                value="cod"
                checked={formData.paymentMethod === "cod"}
                onChange={handlePaymentMethodChange}
              />
              Cash on Delivery
            </label>
            <label className="payment-method">
              <input
                type="radio"
                name="paymentMethod"
                value="card"
                checked={formData.paymentMethod === "card"}
                onChange={handlePaymentMethodChange}
              />
              Pay by Card
            </label>
          </div>
          {formData.paymentMethod === "card" && (
            <>
              <div className="form-group">
                <label>Cardholder Name:</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Card Number:</label>
                <input
                  type="text"
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Expiry Date:</label>
                  <input
                    type="text"
                    name="expiry"
                    value={formData.expiry}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>CVV:</label>
                  <input
                    type="text"
                    name="cvv"
                    value={formData.cvv}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </>
          )}
          <div className="save-details">
            <input
              type="checkbox"
              name="saveDetails"
              checked={formData.saveDetails}
              onChange={handleChange}
            />
            <label>Save payment details for future purchases</label>
          </div>
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Payment;
