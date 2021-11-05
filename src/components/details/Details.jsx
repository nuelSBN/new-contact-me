import React from "react";
// import SkillChart from "../Container/Chart/Chart";
import "./details.css";

function Details() {
  return (
    <div className="detail">
      <div className="fullDetails">
        <div className="personaldetail">
          <label htmlFor="name">Name:</label>
          <span>Emmanuel Igwenagu</span>
        </div>
        <div className="personaldetail">
          <label htmlFor="age">Age:</label>
          <span>23 Years</span>
        </div>
        <div className="personaldetail">
          <label htmlFor="email">Email:</label>
          <span>
            <a href="mailto:echinedu007@gmail.com">echinedu007@gmail.com</a>
          </span>
        </div>
        <div className="personaldetail">
          <label htmlFor="address">Address:</label>
          <span>22 Sariyu olusesi, Agodo Egbe lagos</span>
        </div>
        <div className="personaldetail">
          <label htmlFor="phone">Phone:</label>
          <span>
            <a href=" tel:+234-813-092-7634" target="_blank">
              telephone: +234 813 092 7634
            </a>
          </span>
        </div>
        <div className="personaldetail">
          <label htmlFor="website">CV:</label>
          <span>
            <a href=" https://nuelsbn.surge.sh/" target="_blank">
              nuelSBN.surge.sh
            </a>
          </span>
        </div>
      </div>
      <div className="chartDetails">{/* <SkillChart /> */}</div>
    </div>
  );
}

export default Details;
