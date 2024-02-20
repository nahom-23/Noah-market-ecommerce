import React from "react";
import "./about.css";
import Footer from "../../component/footer/footer";
const About = () => {
  return (
    <div className="about-page">
      <div className="about-contain">
        <div className="about-contain-list">
          <div className="about-row-content">
            <h1>Noah online market</h1>
          </div>
          <div>
            <div className="about-detail">
              <h2>About Us</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Consequatur accusantium ratione officiis labore qui! Est sequi
                nostrum, laboriosam veniam similique odio, nihil labore corrupti
                illum minima, alias omnis sit a!
                <br />
              </p>
              <a className="about-contacts" href="">
                Contact us
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
