import React from 'react';
import Header from '../../component/header/header';
import Footer from '../../component/Footer/Footer';
import './Contact.scss';

 const Contact=()=>{

    return (
      <>
        <Header />
        <div className="contact">
          <img src="./contact.png" alt="contact" />
          <div className="container">
            <div className="wrapper">
              <div className="row col-6 col-12">
                <div className="col-lg-6 w-100">
                  <div className="contact-content">
                    <div className="title">
                      <h4>Contact</h4>
                    </div>

                    <div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="Forms">
          <div className="container">
            <div className="wrapper">
              <div className="row col-6 col-12">
                <div className="col-lg-6 w-100">
                  <div className="Forms-content">
                    <div className="left side">
                      <div className="address">
                        <i className="fa-solid fa-location-dot"></i>
                        <p>At Athena United States</p>
                      </div>
                      <div className="email">
                        <i className="fa-solid fa-envelope"></i>
                        <p>At Athena United States</p>
                      </div>
                    </div>
                    <div className="form">
                      <div className="form-group">
                        <label>Name</label>
                        <input
                          type="text"
                          placeholder="Name"
                          className="form-control"
                        />
                      </div>
                      <div className="form-group">
                        <label>Name</label>
                        <input
                          type="text"
                          placeholder="Name"
                          className="form-control"
                        />
                      </div>
                      <div className="form-group">
                        <label>Name</label>
                        <input
                          type="text"
                          placeholder="Name"
                          className="form-control"
                        />
                      </div>
                      <div className="form-group">
                        <label>Name</label>
                        <input
                          type="text"
                          placeholder="Name"
                          className="form-control"
                        />
                      </div>
                      <div className="form-group">
                        <label>Name</label>
                        <input
                          type="text"
                          placeholder="Name"
                          className="form-control"
                        />
                      </div>
                      <button className="btn">Send</button>
                    </div>

                    <div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </>
    );

}
export default Contact;