import React, {  useState } from "react";
import "./ListProduct.css";
import cross_icon from "../../assets/cart_cross_icon.png";
import all_product from '../../assets/all_product'

const ListProduct = () => {
const [allproduct,setAllproduct] =useState(all_product)
  return (
    <div className="listproduct">
      <h1>All Products List</h1>
      <div className="listproduct-format-main">
        <p>Products</p>
        <p>Titke</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>
      <div className="listproduct-allproducts">
        <hr />
        {allproduct.map((product) => {
          return (
            <>
              <div
                key={product.id}
                className="listproduct-format-main listproduct-format"
              >
                <img
                  src={product.image}
                  alt=""
                  className="listproduct-product-icon"
                />
                <p>{product.name}</p>
                <p>${product.old_price}</p>
                <p>${product.new_price}</p>
                <p>{product.category}</p>
                <img
                  className="listproduct-remove-icon"
                  src={cross_icon}
                  alt=""
                />
              </div>
              <hr />
            </>
          );
        })}

      </div>
    </div>
  );
};

export default ListProduct;
