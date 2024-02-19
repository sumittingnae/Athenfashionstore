import React from 'react';
import './Footer.scss'
import { Link } from 'react-router-dom';


 const Footer=()=>{

    return (
      <>
        <div className="footer">
          <div className="container">
            <div className="wrapper">
              <div className="row col-6 col-12">
                <div className="col-lg-6 w-100">
                  <div className="footer-content">
                    <div className="col-3">
                      <div className="logo">
                        <img src="./logo.jpg" alt="Logo" />

                        <p>
                          2593 Timbercrest Road, Chisana, Alaska Badalas United
                          State
                        </p>
                        <p>(+91)7-723-4608 </p>
                        <p>Demo@demo.com</p>
                      </div>
                    </div>
                    <div className="col-3">
                      <div className="menu">
                        <h6>Our Products</h6>
                        <div className="sub-menu">
                          <ul>
                            <li>
                              <Link id="menu" to="/contact">
                                Bestsellers
                              </Link>
                            </li>
                            <li>
                              <Link id="menu" to="/contact">
                                Sofas
                              </Link>
                            </li>
                            <li>
                              <Link id="menu" to="/">
                                New In
                              </Link>
                            </li>
                            <li>
                              <Link id="menu" to="/">
                                Chairs
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="col-3">
                      <div className="menu-2">
                        <h6>Useful Links</h6>
                        <div className="U-menu">
                          <ul>
                            <li>
                              <Link id="menu" to="/">
                                Home
                              </Link>
                            </li>
                            <li>
                              <Link id="menu" to="/contact">
                                Contact
                              </Link>
                            </li>
                            <li>
                              <Link id="menu" to="/">
                                Product
                              </Link>
                            </li>
                            <li>
                              <Link id="menu" to="/">
                                Shop
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-3">
                      <div className="signup-content">
                        <h6>Newsletter signup</h6>
                        <p>Stay Updated on all that's new add noteworthy</p>
                        <div className="input">
                          <input type="text" placeholder="signup" />
                          <button className="btn">Search</button>
                        </div>
                        <div className="social-media">
                          <Link id="social">
                            <i className="fa-brands fa-facebook-f"></i>
                          </Link>
                          <Link id="social">
                            <i className="fa-brands fa-twitter"></i>
                          </Link>
                          <Link id="social">
                            <i className="fa-brands fa-youtube"></i>
                          </Link>
                          <Link id="social">
                            <i className="fa-brands fa-instagram"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );

}
export default Footer;