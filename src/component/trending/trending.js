import React, { useContext } from "react";
import "./trending.css";
import { useState, useEffect } from "react";
import { Cartcontext } from "../../context/Context";
const Trending = () => {
  const [data, setData] = useState(0);
  const Globalstate = useContext(Cartcontext);
  const dispatch = Globalstate.dispatch;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="trending-menu">
      <h1>Trending Products</h1>
      <div className="trending-products-all">
        {data ? (
          <div className="trending-products-part">
            {data.products.slice(0, 10).map((product) => (
              <div className="trending-products" key={product.id}>
                <img src={product.thumbnail} alt={product.title} />
                <div className="product-detail">
                  <h3>{product.title}</h3>
                  <p>Rating: {product.rating}</p>
                  <p>Brand: {product.brand}</p>
                  <p>price: {product.price} birr</p>
                  <button
                    className="addcart"
                    onClick={() => dispatch({ type: "ADD", playload: product })}
                  >
                    add to cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>No data available</p>
        )}
      </div>
    </div>
  );
};
export default Trending;
