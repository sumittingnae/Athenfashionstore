import React, { useEffect, useState } from 'react';
import Header from '../../component/header/header';
import Footer from '../../component/Footer/Footer';
import BlogData from '../Blog/blogdata.json';
import './blog.scss';

const Blog =()=>{
    const[blog,setBlogs]=useState([]);
    useEffect(()=>{
        setBlogs(BlogData);
    })

    return (
      <>
        <Header />
        <div className="blogs">
          <div className="container">
            <div className="wrapper">
              <div className="row col-6 col-12">
                <div className="col-lg-6 w-100">
                  <div className="blog-content">
                    {blog.map((blogs) => (
                      <>
                        <div className="title">
                          <h5>{blogs.name}</h5>
                        </div>
                        <div className="blog-data">
                          <div className="blog-text">
                            <img src={blogs.img} alt={blogs.name} />
                            <p>{blogs.description}</p>
                          </div>
                        </div>
                      </>
                    ))}
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
export default Blog;