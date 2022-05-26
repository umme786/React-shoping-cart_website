import React, { useState } from "react";
import list from "../data";
import Cards from "./card";
// import "../styles/amazon.css";

const Amazon = ({ handleClick }) => {
  return (
    <section className="w-[80%] mx-auto mt-20 flex flex-wrap justify-between">
      {list.map((item) => (
        <Cards key={item.id} item={item} handleClick={handleClick} />
      ))}
    </section>
  );
};

export default Amazon;
