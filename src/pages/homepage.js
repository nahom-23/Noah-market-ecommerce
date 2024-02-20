import React from "react";
import Hero from "../component/hero/hero";
import Trending from "../component/trending/trending";
import Footer from "../component/footer/footer";
function Homepage() {
  return (
    <div className="homepage" style={{ overflow: "hidden" }}>
      <Hero />
      <Trending />
      <Footer />
    </div>
  );
}
export default Homepage;
