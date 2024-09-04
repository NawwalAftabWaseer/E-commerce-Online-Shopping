import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import "./Products.css";
import { CartContext } from "../components/CartContext";
import Footer from "../components/Footer";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const { addToCart } = useContext(CartContext);

  const fetchProducts = async (category) => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      if (response.status === 200) {
        const categoryLowerCase = category ? category.toLowerCase() : null;
        const filteredProducts = response.data.filter((product) => {
          return categoryLowerCase
            ? product.category.toLowerCase() === categoryLowerCase
            : true;
        });
        setProducts(filteredProducts);
        setFilteredProducts(filteredProducts);
      }
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  };

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const category = queryParams.get("category");
    console.log("Category from URL:", category);
    fetchProducts(category);
  }, [location.search]);

  const handleSearchChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    if (query) {
      setFilteredProducts(
        products.filter((product) =>
          product.title.toLowerCase().includes(query)
        )
      );
    } else {
      setFilteredProducts(products);
    }
  };

  const handleCardClick = (id) => {
    navigate(`/product-details/${id}`);
  };

  return (
    <>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
      <div className="product-container">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.title} />
              <div className="product-info">
                <h1>{product.title}</h1>
                <h3>{product.category}</h3>
                <h4>${product.price.toFixed(2)}</h4>
              </div>
              <div
                className="card-overlay"
                onClick={() => handleCardClick(product.id)}
              ></div>
            </div>
          ))
        ) : (
          <div className="no-results">No products found</div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Products;
