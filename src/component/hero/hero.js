import React from "react";
import myImage from "./wepik-export-20231031133934eJmC.png";
import { Link } from "react-router-dom";
import "./hero.css";
const Hero = () => {
  return (
    <div className="hero">
      <div className="element">
        <div className="flex ">
          <div className="flex-content">
            <h1 className="text">
              We are changing <br />
              the way people shop
            </h1>
            <p className="detail">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Consequatur accusantium ratione officiis labore qui! Est sequi
              nostrum, laboriosam veniam similique odio, nihil labore corrupti
              illum minima, alias omnis sit a!
            </p>
            <Link to="/product" className="link-btn">
              <div className="link-button">Shop Now</div>
            </Link>
          </div>
          <div className="hero-img">
            <div className="hero-img-item">
              <img className="img" src={myImage} />
            </div>
          </div>
        </div>
      </div>
      <div className="custom-shape-divider-bottom-1698778914">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
