import React from "react";
import Navbar from "./Navbar";
import Form from "./Form";

const Header = () => {
  return (
    <div>
      <Navbar />
      <p className="text-center mt-5 text-2xl">Food Recipe APP</p>
      <Form />
    </div>
  );
};

export default Header;
