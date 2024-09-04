import React from "react";
import { useNavigate } from "react-router-dom";
import "./Categories.css";
import Footer from "../components/Footer";
import MenClothing from "../Images/MenClothing.jpg";
import womenClothing from "../Images/womenClothing.jpg";
import jeweley from "../Images/jeweley.jpg";
import electronics from "../Images/electronics.jpg";
import sports from "../Images/sports.jpg";
import HomeGoods from "../Images/HomeGoods.jpg";

const Categories = () => {
  const navigate = useNavigate();

  const categories = [
    {
      name: "Men's Clothing",
      icon: "👕",
      itemCount: 120,
      image: MenClothing,
      description: (
        <div>
          <ul>
            <li>Trendy Styles</li>
            <li>Comfortable Fit</li>
            <li>Versatile Options</li>
          </ul>
        </div>
      ),
    },
    {
      name: "Jewelry",
      icon: "💍",
      itemCount: 85,
      image: jeweley,
      description: (
        <div>
          <ul>
            <li>Elegant Designs</li>
            <li>High-Quality Gems</li>
            <li>Special Occasions</li>
          </ul>
        </div>
      ),
    },
    {
      name: "Women's Clothing",
      icon: "👗",
      itemCount: 150,
      image: womenClothing,
      description: (
        <div>
          <ul>
            <li>Fashion Forward</li>
            <li>Comfort Meets Style</li>
            <li>Diverse Collections</li>
          </ul>
        </div>
      ),
    },
    {
      name: "Electronics",
      icon: "📱",
      itemCount: 200,
      image: electronics,
      description: (
        <div>
          <ul>
            <li>Latest Gadgets</li>
            <li>Top Brands</li>
            <li>Smart Solutions</li>
          </ul>
        </div>
      ),
    },
    {
      name: "Sports",
      icon: "🏅",
      itemCount: 95,
      image: sports,
      description: (
        <div>
          <ul>
            <li>Fitness Equipment</li>
            <li>Outdoor Gear</li>
            <li>Sporting Goods</li>
          </ul>
        </div>
      ),
    },
    {
      name: "Home Goods",
      icon: "🏠",
      itemCount: 75,
      image: HomeGoods,
      description: (
        <div>
          <ul>
            <li>Decor Items</li>
            <li>Kitchen Essentials</li>
            <li>Furniture</li>
          </ul>
        </div>
      ),
    },
  ];

  const handleCategoryClick = (category) => {
    navigate(
      `/products?category=${encodeURIComponent(category.name.toLowerCase())}`
    );
  };

  return (
    <>
      <div className="categories-container">
        <div className="category-cards">
          {categories.map((category) => (
            <div
              key={category.name}
              className="category-card"
              onClick={() => handleCategoryClick(category)}
            >
              <img
                src={category.image}
                alt={category.name}
                className="category-image"
              />
              <div className="category-info">
                <h2>{category.name}</h2>
                <div className="category-icon">
                  {category.icon} {category.itemCount} items
                </div>
                <div className="category-description">
                  {category.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Categories;
