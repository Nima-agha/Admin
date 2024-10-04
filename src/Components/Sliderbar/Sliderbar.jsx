import React from "react";
import "./Sliderbar.css";
import { Link } from "react-router-dom";
import add_product from "../../assets/cart_icon.png";
const Sliderbar = () => {
  return (
    <div className="sliderbar">
      <Link to={"/"} style={{ textDecoration: "none" }}>
        <div className="sidebar-item">
          <img src={add_product} alt="" />
          <p>Add Product</p>
        </div>
      </Link>
      <Link to={"/listproduct"} style={{ textDecoration: "none" }}>
        <div className="sidebar-item">
          <img src={add_product} alt="" />
          <p>Product List</p>
        </div>
      </Link>
    </div>
  );
};

export default Sliderbar;
