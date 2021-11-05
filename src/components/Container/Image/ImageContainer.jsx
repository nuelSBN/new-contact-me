import React from "react";
import "./imageContainer.css";
import Fisrt from "../../Assets/pics1.jpg";
import Second from "../../Assets/pics2.jpg";
import Third from "../../Assets/pics3.jpg";
import Fourth from "../../Assets/pics4.JPG";
import Fifth from "../../Assets/pics5.JPG";

function ImageContainer() {
  return (
    <div className="imageContainer">
      <div className="imageSections">
        <img src={Fisrt} alt="" />
      </div>
      <div className="imageSections">
        <img src={Second} alt="" />
      </div>
      <div className="imageSections">
        <img src={Third} alt="" />
      </div>
      <div className="imageSections">
        <img src={Fourth} alt="" />
      </div>
      <div className="imageSections">
        <img src={Fifth} alt="" />
      </div>
    </div>
  );
}

export default ImageContainer;
