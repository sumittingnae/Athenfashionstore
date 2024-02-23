import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss';
import Menu from './menu';

 const Header=()=>{

    return (
      <>
        <div className="header">
          <div className="container">
            <div className="wrapper">
              <div className="row col-6 col-12">
                <div className="col-lg-6 w-100">
                  <div className="header-content">
                    <div className="logo">
                      <img src="./logo.jpg" alt="Logo" />
                    </div>
                    <div className="menu">
                      <Link id="menu" to="/">
                        Home
                      </Link>
                      <Link id="menu" to="/contact">
                        Contact
                      </Link>
                      <Link id="menu" to="/product">
                        Product
                      </Link>
                      <Link id="menu" to="/">
                        Shop
                      </Link>
                    </div>
                    <div className="contented">
                      <div className="icons">
                        <div class="dropdown">
                          <Link
                            class="btns"
                            type="link"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="fa-solid fa-magnifying-glass"></i>
                          </Link>
                          <ul class="dropdown-menu">
                            <li>
                              <input type="text" />
                              <Link class="dropdown-item" to="#">
                                <i className="fa-solid fa-magnifying-glass"></i>
                              </Link>
                            </li>
                          </ul>
                        </div>

                        {/* Users */}
                        <div class="dropdown">
                          <Link
                            class="btns"
                            type="link"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="fa-regular fa-user"></i>
                          </Link>
                          <ul class="dropdown-menu">
                            <li>
                              <Link class="dropdown-item" to="#">
                                <p>
                                  <i
                                    class="fa-regular fa-user "
                                    style={{ fontSize: "15px" }}
                                  ></i>{" "}
                                  <span>My Account</span>
                                </p>
                              </Link>
                            </li>
                            <li>
                              <Link class="dropdown-item" to="#">
                                <p>
                                  <i
                                    class="fa-solid fa-lock "
                                    style={{ fontSize: "15px" }}
                                  ></i>{" "}
                                  <span>Sign In</span>
                                </p>
                              </Link>
                            </li>
                            <li>
                              <Link class="dropdown-item" to="#">
                                <p>
                                  <i
                                    class="fa-solid fa-arrow-right-from-bracket "
                                    style={{ fontSize: "15px" }}
                                  ></i>{" "}
                                  <span>Check out</span>
                                </p>
                              </Link>
                            </li>
                            <li>
                              <Link class="dropdown-item" to="#">
                                <p>
                                  
                                  <i
                                    class="fa-regular fa-heart "
                                    style={{ fontSize: "15px" }}
                                  ></i>{" "}
                                  <span>WatchList</span>
                                </p>
                              </Link>
                            </li>
                          </ul>
                        </div>

                        {/* Shopping */}
                        <i class="fa-solid fa-cart-shopping"></i>
                      </div>
                    </div>

                    <Menu />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );

}
export default Header;