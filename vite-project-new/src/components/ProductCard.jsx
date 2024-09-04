import React from "react";
import "./ProductCard.css";

const ProductCard = ({
  image,
  title,
  category,
  price,
  clickHandler,
  onAddToCart,
}) => {
  return (
    <div className="product-card" onClick={clickHandler}>
      <img src={image} alt="Product Image" />
      <div className="product-info">
        <h1>{title}</h1>
        <h3>{category}</h3>
        <h4>${price}</h4>
        {onAddToCart && (
          <button className="add-to-cart-button" onClick={onAddToCart}>
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
