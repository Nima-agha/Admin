import React from "react";
import "./Admin.css";
import Sliderbar from "../../Components/Sliderbar/Sliderbar";
import { Routes, Route } from "react-router-dom";
import Addproduct from "../../Components/AddProduct/Addproduct";
import ListProduct from "../../Components/ListProduct/ListProduct";
const Admin = () => {
  return (
    <div className="admin">
      <Sliderbar />
      <Routes>
        <Route path="/" element={<Addproduct />} />
        <Route path="/listproduct" element={<ListProduct />} />
      </Routes>
    </div>
  );
};

export default Admin;
