import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Routes, Route } from "react-router-dom";
import ProductDetails from "./pages/Productdetails";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Categories from "./pages/Categories";
import Navbar from "./components/Navbar";
import Profile from "./pages/Profile";
import CartPage from "./pages/CartPage";
import FeedBack from "./components/FeedBack";
import Checkout from "./pages/Checkout";
import Payment from "./pages/Payment";
import Review from "./pages/Review";
import Confirmation from "./pages/Confirmation";
import Error from "./pages/errorpage";

const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="categories" element={<Categories />} />
          <Route
            path="/product-details/:productID?"
            element={<ProductDetails />}
          />
          <Route path="/cart" element={<CartPage />} />
          <Route path="about" element={<Profile />} />
          <Route path="feedback" element={<FeedBack />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/review" element={<Review />} />
          <Route path="/confirmation" element={<Confirmation />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
