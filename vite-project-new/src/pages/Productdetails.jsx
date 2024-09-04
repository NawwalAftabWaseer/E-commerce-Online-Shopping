import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { CartContext } from "../components/CartContext";
import "./ProductDetails.css";

const ProductDetails = () => {
  const { productID } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const { addToCart } = useContext(CartContext);

  const fetchProduct = async () => {
    if (!productID) {
      setError("ID not provided");
      return;
    }
    if (isNaN(productID)) {
      setError("ID must be a number");
      return;
    }

    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products/${productID}`
      );
      if (response.status === 200) {
        setProduct(response.data);
      } else {
        setError("Product not found");
      }
    } catch (error) {
      setError("Product not found");
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [productID]);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product);
    }
  };

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  if (!product) {
    return <div className="loading-message">Loading...</div>;
  }

  return (
    <div className="product-details-card">
      <img src={product.image} alt={product.title} className="product-image" />
      <div className="product-info">
        <h1>{product.title}</h1>
        <p className="description">{product.description}</p>
        <h3>{product.category}</h3>
        <h4>${product.price.toFixed(2)}</h4>
        <button className="add-to-cart-button" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
