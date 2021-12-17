import React, { useState } from "react";
import "./App.scss";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import CustomCarousel from "./Components/CustomCarousel/CustomCarousel";
import Routing from "./Components/Routing/Routing";
import ProductData from "./Components/ProductData/ProductData";
import Footer from "./Components/Footer/Footer";
import Firstrowcards from "./Components/Cards/Firstrowcards/Firstrowcards";
import Secondrowcards from "./Components/Cards/Secondrowcards/Secondrowcards";

const App = () => {
  const { productItems } = ProductData;

  const [cartItems, setCartItems] = useState([]);

  const handleAddProduct = (product) => {
    const productExist = cartItems.find((item) => item.id === product.id);
    if (productExist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...productExist, quantity: productExist.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const handleRemoveProduct = (product) => {
    const productExist = cartItems.find((item) => item.id === product.id);
    if (productExist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? {
                ...productExist,
                quantity: productExist.quantity - 1,
              }
            : item
        )
      );
    }
  };

  const handleCartClear = () => {
    setCartItems([]);
  };

  return (
    <div className="App">
      <Router>
        <Navbar />
        <CustomCarousel />
        <Firstrowcards />
        <Secondrowcards />
        <Routing
          productItems={productItems}
          cartItems={cartItems}
          handleAddProduct={handleAddProduct}
          handleRemoveProduct={handleRemoveProduct}
          handleCartClear={handleCartClear}
        />
        <Footer />
      </Router>
    </div>
  );
};

export default App;
