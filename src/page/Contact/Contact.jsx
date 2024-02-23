import React ,{useState} from 'react';
import Header from '../../component/header/header';
import Footer from '../../component/Footer/Footer';
import './Contact.scss';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";



 const Contact=()=>{
  const [formData , setformData]=useState({
    name:"",
    contact:"",
    email:"",
    address:"",
    message:""
  })

const handleChange = (e) => {
  const { name, value } = e.target;
  setformData((prevState) => ({
    ...prevState,
    [name]: value,
  }));
};


 const handleSubmit = () => {
   if (
     !formData.name ||
     !formData.contact ||
     !formData.email ||
     !formData.message ||
     !formData.address
   ) {
     toast.error("Please fill in all fields");
     return;
   }

   // Save the form data in local storage
   const storedformDatas = JSON.parse(localStorage.getItem("formDatas")) || [];
   const updatedformDatas = [...storedformDatas, formData];
   localStorage.setItem("formDatas", JSON.stringify(updatedformDatas));

   toast.success("Successfully sent");
   setformData({
     name: "",
     contact: "",
     message: "",
     email: "",
     address:""
   });
 };

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
                      <ToastContainer />
                      <div className="form-group">
                        <label>Name</label>
                        <input
                          type="text"
                          placeholder="Name"
                          className="form-control"
                          onChange={handleChange}
                          value={formData.name}
                          name="name"
                        />
                      </div>
                      <div className="form-group">
                        <label>Contact</label>
                        <input
                          type="text"
                          placeholder="Contact"
                          className="form-control"
                          onChange={handleChange}
                          value={formData.contact}
                          name="contact"
                        />
                      </div>
                      <div className="form-group">
                        <label>Email</label>
                        <input
                          type="text"
                          placeholder="Email"
                          className="form-control"
                          onChange={handleChange}
                          value={formData.email}
                          name="email"
                        />
                      </div>
                      <div className="form-group">
                        <label>Address</label>
                        <input
                          type="text"
                          placeholder="Address"
                          className="form-control"
                          onChange={handleChange}
                          value={formData.address}
                          name="address"
                        />
                      </div>
                      <div className="form-group">
                        <label>Message</label>
                        <textarea
                          type="text"
                          placeholder="Message"
                          className="form-control"
                          onChange={handleChange}
                          value={formData.message}
                          name="message"
                        />
                      </div>
                      <button className="btn" onClick={handleSubmit}>
                        Send
                      </button>
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