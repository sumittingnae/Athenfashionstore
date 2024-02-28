import React, { useEffect, useState } from 'react';
import Header from '../../component/header/header';
import Footer from '../../component/Footer/Footer';
import HomeData from "./dats.json";
import './Home.scss';
import News from './news.json';
import { Link } from 'react-router-dom';
import Offer from '../../component/offer/offers';



 const Home=()=>{

    const [data, setData] = useState([]);
    const [news,setNews]= useState([]);

    useEffect(()=>{
      setNews(News);
    })

    useEffect(() => {
      setData(HomeData);
    }, []);

    return (
      <>
        <Header />
        <div className="home">
          <div className="container">
            <div className="wrapper">
              <div className="row col-6 col-12">
                <div className="col-lg-6 w-100">
                  <div className="home-content">
                    <div className="left-side">
                      <p>LIGHTING 2019</p>
                      <h6>T-shirt</h6>
                      <Link to="/product">
                        <button className="btn"> Shop Now</button>
                      </Link>
                    </div>
                    <div className="right-side">
                      <div className="img">
                        <img src="./look.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* -----------------Services--------------------------- */}
        <div className="service">
          <div className="container">
            <div className="wrapper">
              <div className="row col-6 col-12">
                <div className="col-lg-6 w-100">
                  <div className="service-content">
                    <div className="delivery">
                      <i class="bi bi-truck"></i>
                      <p>To Shipping</p>
                      <span>on all orders over</span>
                    </div>
                    <div className="delivery">
                      <i class="bi bi-currency-dollar"></i>
                      <p>Lorem Ipsum</p>
                      <span>the undoubtable source</span>
                    </div>

                    <div className="delivery">
                      <i class="bi bi-credit-card-2-front"></i>
                      <p>Secure checkout </p>
                      <span>the undoubtable source</span>
                    </div>
                    <div className="delivery">
                      <i class="bi bi-ticket-perforated"></i>
                      <p>To shipping </p>
                      <span>on all orders over</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="slide">
          <div className="container">
            <div className="wrapper">
              <div className="row col-6 col-12">
                <div className="col-lg-6 w-100">
                  <div className="slide-content">
                    <div className="slide-card">
                      {data.map((item) => (
                        <div key={item.id} className="men">
                          {" "}
                          <div className="left-content">
                            <Link to="/product" className="link">
                              {" "}
                              <h6>{item.name}</h6>
                            </Link>
                            <p>Items: 4</p>
                          </div>
                          <div className="right-content">
                            <img src={item.img} alt="" />
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

        {/* ===================offers================= */}
        <Offer/>

        <div className="blog">
          <div className="container">
            <div className="wrapper">
              <div className="row col-6 col-12">
                <div className="col-lg-6 w-100">
                  <h5>Blogs</h5>
                  <div className="blog-content">
                    {news.map((newsed) => (
                      <div className="card">
                        <div className="img">
                          <img src={newsed.img} alt="" />
                        </div>
                        <div className="card-body">
                          <h4 className="card-title">{newsed.name}</h4>
                          <p className="card-text">{newsed.description}</p>
                          <button className="btn">More</button>
                        </div>
                      </div>
                    ))}

                    {/* <div className="card-body">
                        <h4 className="card-title">Fashion cost</h4>
                        <p className="card-text">
                          freestar freestar Lorem ipsum dolor sit amet,
                          consectetur adipiscing elit. Nullam in imperdiet
                          sapien. Vivamus congue eros in massa convallis, a
                          feugiat turpis sollicitudin. Cras ultricies, elit nec
                          aliquam feugiat, dui felis elementum justo
                        </p>
                        <button className="btn">More</button>
                      </div>
                    </div> */}
                    {/* <div className="card">
                      <div className="img">
                        <img src="./blog.jpg" alt="" />
                      </div>
                      <div className="card-body">
                        <h4 className="card-title">Fashion cost</h4>
                        <p className="card-text">
                          freestar freestar Lorem ipsum dolor sit amet,
                          consectetur adipiscing elit. Nullam in imperdiet
                          sapien. Vivamus congue eros in massa convallis, a
                          feugiat turpis sollicitudin. Cras ultricies, elit nec
                          aliquam feugiat, dui felis elementum justo
                        </p>
                        <button className="btn">More</button>
                      </div>
                    </div>
                    <div className="card">
                      <div className="img">
                        <img src="./blog.jpg" alt="" />
                      </div>
                      <div className="card-body">
                        <h4 className="card-title">Fashion cost</h4>
                        <p className="card-text">
                          freestar freestar Lorem ipsum dolor sit amet,
                          consectetur adipiscing elit. Nullam in imperdiet
                          sapien. Vivamus congue eros in massa convallis, a
                          feugiat turpis sollicitudin. Cras ultricies, elit nec
                          aliquam feugiat, dui felis elementum justo
                        </p>
                        <button className="btn">More</button>
                      </div>
                    </div>
                    */}
                  </div>
                  <Link to="/blog" className="button">
                    <button className="btn">More</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </>
    );

}
export default Home;