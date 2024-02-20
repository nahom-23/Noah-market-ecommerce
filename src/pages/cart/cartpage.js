import React, { useContext } from "react";
import { Cartcontext } from "../../context/Context";
import styled from "styled-components";
import empety from "../../assets/Untitled design.png";
import { Link } from "react-router-dom";

const Cartpage = () => {
  const Globalstate = useContext(Cartcontext);
  const state = Globalstate.state;
  console.log(state);
  return (
    <div className="cart">
      {state.length != 0 ? (
        <div className="cart-items">
          {state.map((items) => (
            <Contaner>
              <img src={items.thumbnail} alt={items.title} />
              <h2>{items.title}</h2>
              <p>{items.price}</p>
              <div className="count">
                <button className="Increase">-</button>
                <h3>1</h3>
                <button className="decrease">+</button>
              </div>
            </Contaner>
          ))}
        </div>
      ) : (
        <Empty>
          <img src={empety} alt="cart empty img" />
          <button>
            <Link to="/product">continue shoping</Link>
          </button>
        </Empty>
      )}
    </div>
  );
};
const Contaner = styled.div`
  padding: 15px;
  display: flex;
  gap: 60px;
  align-items: center;
  width: 100%;
  img {
    width: 20%;
  }
`;
const Empty = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;

  img {
    width: 400px;
  }
  p {
    font-size: 24px;
    padding-bottom: 40px
    color: var(--main-color);
  }
  button {
    padding: 12px 18px;
    margin-top: 20px;
    background: var(--secondary-color);
    border-radius: 8px;
    border: none;
    color: var(--main-color);
  }
`;
export default Cartpage;
