import React from "react";
import "./footer.css";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="contact services-list">
          <div className="widget-title">
            <h3>Customer support</h3>
          </div>
          <p>+91-85580-30604</p>
          <p>
            vMon. - Fri. <b>10:00 - 7:00</b>
          </p>
          <p>
            Sat. - Sun. <b>Off</b>
          </p>
        </div>
        <div className="about-us">
          <div>
            <h3>About Shop</h3>
          </div>
          <ul className="services-list">
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Sitemap</a>
            </li>
          </ul>
        </div>
        <div>
          <div className="widget-title">
            <h3>Our services</h3>
          </div>
          <ul className="services-list">
            <li>
              <a href="#">Payment</a>
            </li>
            <li>
              <a href="#">Order tracking</a>
            </li>
            <li>
              <a href="#">Exchanges & returns</a>
            </li>
            <li>
              <a href="#">Delivery</a>
            </li>
            <li>
              <a href="#">Terms & conditions</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="copyright">
        <p className="text-center">
          © Copyright 2023 MarkupTag. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
