import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import "./TopSelling.css"; // Ensure this CSS file exists for specific styling

const TopSelling = () => {
  const [topSelling, setTopSelling] = useState([]);

  const fetchTopSellingProducts = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products"); // Replace with your API endpoint
      if (response.status === 200) {
        const sortedProducts = response.data
          .filter((product) => product.rating.rate >= 4) // Replace this with your criteria
          .slice(0, 5); // Get top 5 products

        // Update the image for the first product
        if (sortedProducts.length > 0) {
          sortedProducts[0].image =
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWfIsoqtGnnVBKVpjkEc9n_AUAlWOJqditFg&s";
        }

        setTopSelling(sortedProducts);
      }
    } catch (error) {
      console.error("Failed to fetch top-selling products:", error);
    }
  };

  useEffect(() => {
    fetchTopSellingProducts();
  }, []);

  return (
    <div className="top-selling-container">
      <h2>Top Selling Products</h2>
      <div className="top-selling-products">
        {topSelling.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            title={product.title}
            category={product.category}
            price={product.price}
            clickHandler={() => {}}
            onAddToCart={() => {}}
          />
        ))}
      </div>
    </div>
  );
};

export default TopSelling;
