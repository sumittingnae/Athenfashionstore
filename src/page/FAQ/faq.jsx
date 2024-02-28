import React, { useEffect, useState } from "react";
import Header from "../../component/header/header";
import Footer from "../../component/Footer/Footer";
import './faq.scss';
import Faqdata from './questionandans.json'


const Faq = () => {
 const[faq,setFaq]=useState([])
 useEffect(()=>{
     setFaq(Faqdata);
 })
  return (
    <>
      <Header />
      <div className="Faq-head">
        <img src="./faq.png" alt="faq" />
        <div className="container">
          <div className="wrapper">
            <div className="row col-6 col-12">
              <div className="col-lg-6 w-100">
                <div className="contact-content">
                  <div className="title">
                    <h4>FAQ</h4>
                  </div>

                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="Faq">
        <div className="container">
          <div className="wrapper">
            <div className="row col-6 col-12">
              <div className="col-lg-6 w-100">
                <div>
                  <h1>Frequently Asked Questions</h1>

                  {faq.map((questionans) => (
                    <div key={questionans.id}>
                      <h6>
                        <span>{questionans.id}. </span> {questionans.question}{" "}
                      </h6>
                      <p>{questionans.ans}</p>
                    </div>
                  ))}
                  {/* <h6>1. What is Athena Fashion Store? </h6>
                  <p>
                    Athena Fashion Store is an online retail platform offering a
                    wide range of trendy and stylish clothing, accessories, and
                    footwear for women. We strive to provide high-quality
                    fashion products curated to cater to diverse tastes and
                    preferences.
                  </p>{" "}
                   */}
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
export default Faq;
