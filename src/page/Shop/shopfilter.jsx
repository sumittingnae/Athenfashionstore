import React, { useEffect, useState } from "react";
import "./Shop.scss";

const Filter = ({ selectedCategory, handleCategoryChange }) => {
      const [selectcategory, setSelectcategory] = useState("All");
      const [minPrice, setMinPrice] = useState("");
      const [maxPrice, setMaxPrice] = useState("");
      const [product, setProduct] = useState([]);

     

      const handleCategory = (event) => {
        setSelectcategory(event.target.value);
      };

      const handleMinPriceChange = (event) => {
        setMinPrice(event.target.value);
      };

      const handleMaxPriceChange = (event) => {
        setMaxPrice(event.target.value);
      };

    

  return (
    <>
      <div className="title">
        <p>Showing the Result</p>
        <div className="cat">
          <select
            id="cat"
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            <option value="All">All Categories</option>
            <option value="tshirt">tshirt</option>
            <option value="V-card">Visiting card</option>
            <option value="brocher">brocher</option>
            <option value="mug">mug</option>

            {/* Add more categories as needed */}
          </select>
          <div className="grid-line">
            <button className="btn">
              <i className="fa-solid fa-grip-lines"></i>
            </button>
            <button className="btn">
              <i className="fa-solid fa-table-cells"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Filter;
