import React, { useState, useEffect } from "react";
import Header from "../../component/header/header";
import "./Shop.scss";
import Prod from "./prod.json";
import Footer from "../../component/Footer/Footer";
import { Link } from "react-router-dom";

const Shop = () => {
  const [selectcategory, setSelectcategory] = useState("All");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [product, setProduct] = useState([]);

  useEffect(() => {
    setProduct(Prod);
  }, []);

  const handleCategory = (event) => {
    const { value } = event.target;
    setSelectcategory(value === selectcategory ? "All" : value);
  };

  const handleMinPriceChange = (event) => {
    setMinPrice(event.target.value);
  };

  const handleMaxPriceChange = (event) => {
    setMaxPrice(event.target.value);
  };

  function filteredProduct() {
    let filtered = [...product];

    if (selectcategory !== "All") {
      filtered = filtered.filter((data) => data.category === selectcategory);
    }

    if (minPrice !== "") {
      filtered = filtered.filter((data) => data.price >= parseInt(minPrice));
    }

    if (maxPrice !== "") {
      filtered = filtered.filter((data) => data.price <= parseInt(maxPrice));
    }

    return filtered;
  }

  return (
    <>
      <Header />
      <div className="shop">
        <div className="container">
          <div className="wrapper">
            <div className="row col-12 col-6">
              <div className="col-lg-6  w-100">
                <div className="shop-content">
                  <div className="left-side">
                    <h6>Menu</h6>
                    <div className="category">
                      <ul>
                        <li>
                          <input
                            type="checkbox"
                            value="All"
                            onChange={handleCategory}
                            checked={selectcategory === "All"}
                          />
                          <label>All</label>
                        </li>
                        <li>
                          <input
                            type="checkbox"
                            value="Men"
                            onChange={handleCategory}
                            checked={selectcategory === "Men"}
                          />
                          <label>Men</label>
                        </li>
                        <li>
                          <input
                            type="checkbox"
                            value="Women"
                            onChange={handleCategory}
                            checked={selectcategory === "Women"}
                          />
                          <label>Women</label>
                        </li>
                        <li>
                          <input
                            type="checkbox"
                            value="Kids"
                            onChange={handleCategory}
                            checked={selectcategory === "Kids"}
                          />
                          <label>Kids</label>
                        </li>
                        <li>
                          <input
                            type="checkbox"
                            value="Sadi"
                            onChange={handleCategory}
                            checked={selectcategory === "Sadi"}
                          />
                          <label>Sadi</label>
                        </li>
                      </ul>
                    </div>

                    <div className="filter">
                      <h5>Price Range</h5>
                      <div className="price-filter">
                        <input
                          type="number"
                          placeholder="Min Price"
                          value={minPrice}
                          onChange={handleMinPriceChange}
                        />
                        <span>-</span>
                        <input
                          type="number"
                          placeholder="Max Price"
                          value={maxPrice}
                          onChange={handleMaxPriceChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="right-side">
                    {filteredProduct().map((data) => (
                      <div className="card" key={data.id}>
                        <div className="img">
                          <img
                            className="card-img-top"
                            src={data.img}
                            alt={data.name}
                          />
                        </div>
                        <div className="card-body">
                          <h5 className="card-title">{data.name}</h5>
                          <p>
                            {" "}
                            <i className="fa-solid fa-indian-rupee-sign"></i>{" "}
                            {data.price}
                          </p>
                          <p className="card-text">{data.description}</p>
                        </div>
                        <div className="button">
                          <Link to="/product" className="link-btn">
                            <button className="btn"> Buy</button>
                          </Link>
                          <Link to="/" className="link-btn">
                            <button className="btn">
                              <i className="fa-solid fa-cart-shopping"></i>{" "}
                              Cart
                            </button>
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Shop;
