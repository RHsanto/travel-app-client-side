import React, { useState,useEffect } from 'react';
import './Blog.css'
const Blog = () => {
  const [blogs,setBlogs]=useState([])

 useEffect(()=>{
  fetch('./blog.json')
  .then(res=>res.json())
  .then(data=> setBlogs(data))
 },[])
  return (
<div className='blog-section'>
<div className="container ">
  <div className="blog-title my-5">
    <h1>Travelers <span> Experience</span></h1>
  </div>
  <div className="row g-4">
   {blogs.map(blog=>
   <div  data-aos="flip-right"
   data-aos-duration="2000"
    className="col-lg-4 text-start mb-3">
    <div class="card " >
   <img src={blog.img}class="card-img-top" alt="..."/>
   <div className="card-info text-light d-flex ps-3 align-items-center">
   <p className=' '><i class="fas fa-map-marker-alt"></i> {blog.location}</p>
    <p><small><i class="fas fa-calendar"></i> {blog.date}</small></p>
     </div>
   <div class="card-body p-4">
     <h4 >{blog.title}</h4>
     <p class="card-text"> {blog.description.slice(0,144)}</p>
    
    <div className="d-flex justify-content-between">
   
     {/* <Rating className='text-warning'
      emptySymbol="far fa-star "
      fullSymbol="fas fa-star "
      readonly
      initialRating={blog.rating}
      /> */}
    </div>
    <button className="btn read-more mt-4">Read more....</button>
   </div>
 </div>
     </div>
    )}
  </div>
</div>
    </div>
  );
};

export default Blog;