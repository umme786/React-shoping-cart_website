import React, { useState, useEffect } from "react";
import NavBar from "./Navbar";
import Banner from "./Banner";
import Features from "./Features";
import CardSection from "./CardSection";

import Amazon from "./components/amazon";
import Navbar from "./components/navbar";
import Cart from "./components/cart";

import Testimonial from "./Testiomonial";
import ContactUs from "./ContactUs";
import Footer from "./Footer";
// import './App.css';
const App = () => {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  };

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };

  return (
    <React.Fragment>
      
      <NavBar />,
      <Banner />,
      <Features />,
      <CardSection />,

      <Navbar setShow={setShow} size={cart.length} />
      {show ? (
        <Amazon handleClick={handleClick} />
      ) : (
        <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
      )}
      <Testimonial />,
      <ContactUs />,
      <Footer />,
    </React.Fragment>

  );
};

export default App;
