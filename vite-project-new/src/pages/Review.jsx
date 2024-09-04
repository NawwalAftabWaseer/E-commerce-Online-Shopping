import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Review.css";

const Review = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { formData, cart, subtotal, tax, shipping, total } =
    location.state || {};

  useEffect(() => {
    if (!formData || !cart) {
      navigate("/checkout");
    }
  }, [formData, cart, navigate]);

  if (!formData || !cart) {
    return null;
  }

  const handleConfirmOrder = () => {
    navigate("/confirmation", {
      state: {
        formData,
        cart,
        subtotal,
        tax,
        shipping,
        total,
      },
    });
  };

  return (
    <div className="review-container">
      <div className="review-content">
        <h1 className="review-title">Order Insights</h1>

        <div className="review-progress">
          <div className="progress-step">
            <div className="step-icon">1</div>
            <span>Billing</span>
          </div>
          <div className="progress-step">
            <div className="step-icon">2</div>
            <span>Payment</span>
          </div>
          <div className="progress-step active">
            <div className="step-icon">3</div>
            <span>Review</span>
          </div>
        </div>

        <div className="review-section">
          <h2>Billing Details</h2>
          <p>
            <strong>Name:</strong> {formData.name}
          </p>
          <p>
            <strong>Email:</strong> {formData.email}
          </p>
          <p>
            <strong>Address:</strong> {formData.address}
          </p>
          <p>
            <strong>City:</strong> {formData.city}
          </p>
          <p>
            <strong>State:</strong> {formData.state}
          </p>
          <p>
            <strong>ZIP:</strong> {formData.zip}
          </p>
        </div>

        <div className="review-section">
          <h2>Payment Information</h2>
          <p>
            <strong>Cardholder Name:</strong> {formData.name}
          </p>
          <p>
            <strong>Card Number:</strong> {formData.cardNumber}
          </p>
          <p>
            <strong>Expiry Date:</strong> {formData.expiry}
          </p>
        </div>

        <div className="review-section">
          <h2>Order Summary</h2>
          <div className="summary-items">
            {cart.map((item) => (
              <div key={item.id} className="summary-item">
                <span>{item.title}</span>
                <span>
                  ${item.price.toFixed(2)} x {item.quantity} = $
                  {(item.price * item.quantity).toFixed(2)}
                </span>
              </div>
            ))}
          </div>
          <div className="summary-row">
            <span>Shipping:</span>
            <span>${shipping.toFixed(2)}</span>
          </div>
          <div className="summary-row total">
            <span>Total:</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>

        <div className="review-actions">
          <button className="confirm-btn" onClick={handleConfirmOrder}>
            Confirm Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Review;
