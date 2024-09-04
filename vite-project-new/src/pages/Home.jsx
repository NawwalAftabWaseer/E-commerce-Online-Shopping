import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import Footer from "../components/Footer";
import LJ from "../Images/LJ.jpg";
// import Ring from "../Images/Ring.jpg";
import CasualShoes from "../Images/CasualShoes.jpg";
import J from "../Images/J.jpg";

const Home = () => {
  const [animationDone, setAnimationDone] = useState(false);
  const navigate = useNavigate();
  const [topSellingProducts, setTopSellingProducts] = useState([]);

  const featuresRef = useRef(null);
  const topSellingRef = useRef(null);
  const reviewsRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setAnimationDone(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const fetchTopSellingProducts = async () => {
      const products = [
        {
          id: 1,
          title: "Leather Jacket",
          price: "Upto 40% off",
          image: LJ,
        },
        {
          id: 2,
          title: "Jewelery",
          price: "Flat 60% off",
          image: J,
        },
        {
          id: 3,
          title: "Casual Shoes",
          price: "Upto 70% off",
          image: CasualShoes,
        },
      ];
      setTopSellingProducts(products);
    };

    fetchTopSellingProducts();
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    if (featuresRef.current) observer.observe(featuresRef.current);
    if (topSellingRef.current) observer.observe(topSellingRef.current);
    if (reviewsRef.current) observer.observe(reviewsRef.current);
    if (buttonRef.current) observer.observe(buttonRef.current);

    return () => {
      if (featuresRef.current) observer.unobserve(featuresRef.current);
      if (topSellingRef.current) observer.unobserve(topSellingRef.current);
      if (reviewsRef.current) observer.unobserve(reviewsRef.current);
      if (buttonRef.current) observer.unobserve(buttonRef.current);
    };
  }, []);

  return (
    <>
      <div className="home-container">
        <div className="content">
          <h1 className={animationDone ? "welcome-text end" : "welcome-text"}>
            Welcome To Khareed Ly
          </h1>

          <p className="intro-paragraph">
            At Khareed Ly, we strive to deliver exceptional products with
            unmatched quality. Our promise is to ensure every purchase exceeds
            your expectations and provides lasting satisfaction.
          </p>

          <div className="features-container" ref={featuresRef}>
            <div className="feature-box">
              <h3>Global Shipping</h3>
              <ul>
                <li>Maximum 4 working days</li>
                <li>Best Courier Company</li>
                <li>7 days return policy</li>
              </ul>
            </div>
            <div className="feature-box">
              <h3>Durable Products</h3>
              <ul>
                <li>Quality checked</li>
                <li>Long-lasting materials</li>
                <li>Customer satisfaction</li>
              </ul>
            </div>
            <div className="feature-box">
              <h3>Exclusive Designs</h3>
              <ul>
                <li>Unique styles</li>
                <li>Trendy and fashionable</li>
                <li>Limited edition collections</li>
              </ul>
            </div>
          </div>

          <div className="top-selling-container" ref={topSellingRef}>
            <h3 className="section-title">Top Selling Products</h3>
            <div className="top-selling-products">
              {topSellingProducts.map((product) => (
                <div className="product-card" key={product.id}>
                  <img src={product.image} alt={product.title} />
                  <div className="product-info">
                    <h4 className="product-title">{product.title}</h4>
                    <p className="product-price">{product.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="button-container" ref={buttonRef}>
            <button onClick={() => navigate("/categories")}>Shop Now</button>
          </div>
          <div className="reviews-container" ref={reviewsRef}>
            <h3 className="section-title">What Our Customers Say</h3>
            <div className="reviews">
              <div className="review-box">
                <p className="customer-name">John Doe</p>
                <p className="review-text">
                  Top-notch quality combined with incredibly fast shipping—I'm
                  extremely satisfied with my purchase!
                </p>
                <div className="stars">⭐⭐⭐⭐⭐</div>
              </div>
              <div className="review-box">
                <p className="customer-name">Jane Smith</p>
                <p className="review-text">
                  Absolutely love the designs. Each piece is stylish, unique,
                  and exceptionally well-crafted. Totally worth it!
                </p>
                <div className="stars">⭐⭐⭐⭐⭐</div>
              </div>
              <div className="review-box">
                <p className="customer-name">Emily Johnson</p>
                <p className="review-text">
                  Exceptional customer service combined with durable,
                  high-quality products. Truly exceeded my expectations!
                </p>
                <div className="stars">⭐⭐⭐⭐</div>
              </div>
            </div>
          </div>

          <div className="button-container" ref={buttonRef}>
            <button onClick={() => navigate("/about")}>Learn More</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
