import React from "react";
import "./homepage.css";
import About from "../Container/About/About";
import Banner from "../Container/Banner/Banner";
import Header from "../header/Header";
import Details from "../details/Details";
import ImageContainer from "../Container/Image/ImageContainer";

function Hompage() {
  return (
    <div className="ss">
      <Header />
      <Banner />
      <About />
      <Details />
      <ImageContainer />
    </div>
  );
}

export default Hompage;
