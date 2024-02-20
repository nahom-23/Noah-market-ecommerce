import { useState, useEffect } from "react";
import axios from "axios";

import React from "react";

export const useProduct = () => {
  const [data, setData] = useState();
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products");
        setData(response.data);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return { data, error };
};
