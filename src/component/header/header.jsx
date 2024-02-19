import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss';

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
                      <Link id="menu" to="/">
                        Product
                      </Link>
                      <Link id="menu" to="/">
                        Shop
                      </Link>

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
export default Header;