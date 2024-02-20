import React, { useContext } from "react";
import { useState, useEffect } from "react";
import { Cartcontext } from "../context/Context";

const Productlist = () => {
  const [data, setData] = useState(0);
  const [search, setSearch] = useState("");
  const Globalstate = useContext(Cartcontext);
  const dispatch = Globalstate.dispatch;
  console.log(Globalstate);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products"); // Replace with your API endpoint
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="product-container">
      <div className="product-catagory" style={{ textAlign: "center" }}>
        <input
          style={{ width: "250px", marginTop: "40px", padding: "10px" }}
          placeholder="Search"
          type="text"
          onChange={(e) => setSearch(e.target.value.toLocaleLowerCase())}
        />
      </div>
      <div>
        <div className="trending-menu">
          <h1>Products</h1>

          <div className="trending-products-all">
            {data ? (
              <div className="trending-products-part">
                {data.products
                  .filter((val) => {
                    if (search === "") {
                      return val;
                    } else if (val.title.toLocaleLowerCase().includes(search)) {
                      return val;
                    }
                  })
                  .map((product) => (
                    <div className="trending-products" key={product.id}>
                      <img src={product.thumbnail} alt={product.title} />
                      <div className="product-detail">
                        <h3>{product.title}</h3>
                        <p>Rating: {product.rating}</p>
                        <p>Brand: {product.brand}</p>
                        <p>price: {product.price} birr</p>
                        <button
                          className="addcart"
                          onClick={() =>
                            dispatch({ type: "ADD", playload: product })
                          }
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
      </div>
    </div>
  );
};

export default Productlist;
