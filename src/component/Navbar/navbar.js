import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Loginbutton } from "../loginbutton/loginbutton";
import { Link, NavLink } from "react-router-dom";
import { TiShoppingCart } from "react-icons/ti";
import { useContext } from "react";
import "./navbar.css";
import { Cartcontext } from "../../context/Context";
function Navbar() {
  const [show, setShow] = useState(false);
  const Globalstate = useContext(Cartcontext);
  const state = Globalstate.state;
  const toogle = () => {
    setShow(!show);
  };
  return (
    <div className="nav-bar">
      <div className="nav-bar-menu">
        <div className="nav-bar-logo">
          <NavLink to="/" className="home-logo" onClick={() => setShow(false)}>
            <h1>Noah</h1>
          </NavLink>
        </div>
        <ul className={show ? "nav-lists actives" : "nav-lists"}>
          <li onClick={toogle}>
            <NavLink className="custom-link" to="/">
              Home
            </NavLink>
          </li>
          <li onClick={toogle}>
            <NavLink className="custom-link" to="/product">
              Product
            </NavLink>
          </li>
          <li onClick={toogle}>
            <NavLink className="custom-link" to="/about">
              About
            </NavLink>
          </li>
        </ul>

        <div className="buttons">
          <div className="cart">
            <Link to="/cartpage">
              <TiShoppingCart size={32} color="#f64c72" />
            </Link>
            <span className="num">{state.length}</span>
          </div>

          <NavLink to="/login">
            <Loginbutton onClick={() => setShow(false)} />
          </NavLink>
        </div>

        <div className="menu-bar">
          {show ? (
            <FaTimes size={24} color="#fff" onClick={toogle} />
          ) : (
            <FaBars size={24} color="#fff" onClick={toogle} />
          )}
        </div>
      </div>
    </div>
  );
}
export default Navbar;
