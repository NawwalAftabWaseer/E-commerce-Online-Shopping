import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Confirmation.css";

const Confirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { formData, cart, subtotal, tax, shipping, total } =
    location.state || {};

  const generateTrackingID = () => {
    return "TRACK-" + Math.floor(Math.random() * 1000000000);
  };

  const trackingID = generateTrackingID();

  const handleViewOrderDetails = () => {
    navigate("/review", {
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

  const handleContinueShopping = () => {
    navigate("/products");
  };

  return (
    <div className="confirmation-container">
      <div className="confirmation-message">
        <h1>Thank You for Your Order!</h1>
        <p>Your order has been placed successfully.</p>
        <p>
          Your Tracking ID: <strong>{trackingID}</strong>
        </p>
      </div>

      <div className="order-summary">
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

      <div className="delivery-details">
        <h2>Estimated Delivery</h2>
        <p>
          Your order is expected to be delivered by{" "}
          <strong>Maximum 4 working days</strong>.
        </p>
      </div>

      <div className="confirmation-actions">
        <button className="home-button" onClick={handleContinueShopping}>
          Continue Shopping
        </button>
        <button
          className="order-details-button"
          onClick={handleViewOrderDetails}
        >
          View Order Details
        </button>
      </div>
    </div>
  );
};

export default Confirmation;
