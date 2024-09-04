import React, { useContext } from "react";
import { CartContext } from "../components/CartContext";
import { useNavigate } from "react-router-dom";
import "./CartPage.css";
import Footer from "../components/Footer";

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);
  const navigate = useNavigate();

  const handleRemove = (id) => {
    removeFromCart(id);
  };

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity > 0) {
      updateQuantity(id, newQuantity);
    }
  };

  const calculateSubtotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const subtotal = calculateSubtotal();
  const tax = subtotal * 0.1;
  const shipping = 9.99;
  const total = subtotal + tax + shipping;

  const handleCheckout = () => {
    navigate("/checkout", { state: { cart, subtotal, tax, shipping, total } });
  };

  return (
    <>
      <div className="cart-page-container">
        <div className="cart-page">
          <h1 className="cart-tagline">
            <span className="typewriter">
              Transform Your Wardrobe with a Single Click
            </span>
          </h1>
          {cart.length > 0 ? (
            <div className="cart-content">
              <div className="cart-items">
                {cart.map((item) => (
                  <div key={item.id} className="cart-item">
                    <div className="cart-item-image">
                      <img src={item.image} alt={item.title} />
                    </div>
                    <div className="cart-item-details">
                      <h2 className="cart-item-name">{item.title}</h2>
                      <p className="cart-item-price">
                        ${item.price.toFixed(2)}
                      </p>
                      <div className="cart-item-quantity">
                        <button
                          onClick={() =>
                            handleQuantityChange(item.id, item.quantity - 1)
                          }
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          onClick={() =>
                            handleQuantityChange(item.id, item.quantity + 1)
                          }
                        >
                          +
                        </button>
                      </div>
                      <p className="cart-item-total">
                        Total: ${(item.price * item.quantity).toFixed(2)}
                      </p>
                      <button
                        className="remove-button"
                        onClick={() => handleRemove(item.id)}
                      >
                        <i className="fa fa-trash"></i>{" "}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="cart-summary">
                <h2>Order Summary</h2>
                <div className="summary-row">
                  <span>Subtotal:</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="summary-row">
                  <span>Tax (10%):</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="summary-row">
                  <span>Shipping:</span>
                  <span>${shipping.toFixed(2)}</span>
                </div>
                <div className="summary-row total">
                  <span>Total:</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <button className="checkout-button" onClick={handleCheckout}>
                  Checkout
                </button>
                <button
                  className="clear-cart-button"
                  onClick={() => removeFromCart()}
                >
                  Clear Cart
                </button>
              </div>
            </div>
          ) : (
            <div className="empty-cart">
              <p>Your cart is empty</p>
              <button className="continue-shopping">Continue Shopping</button>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CartPage;
