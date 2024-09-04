import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import "./FeedBack.css";

const FeedBack = () => {
  const [feedback, setFeedback] = useState({
    name: "",
    email: "",
    message: "",
    rating: 0,
  });

  const [typedText, setTypedText] = useState("");
  const fullText = "We Value Your Feedback!";

  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      const heading = document.querySelector(".feedback-heading");
      if (heading) {
        heading.style.borderRight = "none";
      }
    }
  }, [typedText]);

  const handleChange = (e) => {
    setFeedback({ ...feedback, [e.target.name]: e.target.value });
  };

  const handleRating = (rating) => {
    setFeedback({ ...feedback, rating });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Feedback submitted:", feedback);
    setFeedback({ name: "", email: "", message: "", rating: 0 });
  };

  return (
    <>
      <div className="feedback-container">
        <div className="content">
          <div className="feedback-heading">{typedText}</div>
          <div className="feedback-section">
            <form className="feedback-form" onSubmit={handleSubmit}>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={feedback.name}
                onChange={handleChange}
                required
              />

              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={feedback.email}
                onChange={handleChange}
                required
              />

              <label htmlFor="message">Your Feedback:</label>
              <textarea
                id="message"
                name="message"
                value={feedback.message}
                onChange={handleChange}
                required
              ></textarea>

              <div className="star-rating">
                <p>Rate your experience:</p>
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    className={star <= feedback.rating ? "star active" : "star"}
                    onClick={() => handleRating(star)}
                  >
                    ★
                  </span>
                ))}
              </div>

              <button type="submit">Submit Feedback</button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FeedBack;
