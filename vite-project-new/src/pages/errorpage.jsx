import React from "react";
import "./errorpage.css";

const Error = () => {
  return (
    <div className="error-container">
      <div className="error-content">
        <h2 className="error-title">Oops! Something Went Wrong</h2>
        <p className="error-message">
          <strong>We apologize for the inconvenience.</strong>
          The page you are looking for cannot be found or an error has occurred.
          Please verify the URL and try again later. If the issue persists,
          please reach out to our customer support team for assistance.
        </p>
        <button
          className="error-button"
          onClick={() => (window.location.href = "/")}
        >
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default Error;
