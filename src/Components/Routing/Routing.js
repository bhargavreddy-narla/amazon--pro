import React from "react";
import { Routes, Route } from "react-router-dom";
import Orders from "../Orders/Orders";
import Signup from "../Signup/Signup";
import Signin from "../Signin/Signin";
import Products from "../Products/Products";
import Cartdata from "../Cartdata/Cartdata";

const Changing = ({
  productItems,
  cartItems,
  handleAddProduct,
  handleRemoveProduct,
  handleCartClear,
}) => {
  return (
    <div>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Products
              productItems={productItems}
              handleAddProduct={handleAddProduct}
            />
          }
        />
        <Route
          exact
          path="/cart"
          element={
            <Cartdata
              cartItems={cartItems}
              handleAddProduct={handleAddProduct}
              handleRemoveProduct={handleRemoveProduct}
              handleCartClear={handleCartClear}
            />
          }
        />
        <Route exact path="/signin" element={<Signin />} />
        <Route exact path="/createaccount" element={<Signup />} />
        <Route exact path="/orders" element={<Orders />} />
      </Routes>
    </div>
  );
};

export default Changing;
