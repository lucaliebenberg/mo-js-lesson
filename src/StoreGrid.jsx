import React, { useState, useEffect } from "react";
import "./App.css";

function StoreGrid() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const json = await response.json();
    setData(json);
  };

  useEffect(() => {
    fetchData();
  }, []); // Add an empty dependency array to run the effect only once

  return (
    <div>
      <h1>StoreGrid</h1>
      {data.map((item) => (
        <div key={item.id}>
          <h3 className="item__title">{item.title}</h3>
          <img className="item__image" src={item.image} alt={item.title}></img>
          <p className="item__para">{item.description}</p>
        </div>
      ))}
    </div>
  );
}

export default StoreGrid;
