import React from 'react';
import './Footer.css'
const Footer = () => {
  return (
    <div>
     <footer className='bg-dark  text-light'>
       <div className="container">
         <div className="row g-5">
           <div className="col-lg-4 text-start ps-5">
             <h1 className='text-warning'>Travello</h1>
             <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus libero
                asperiores voluptate ea odit quod eum eos eius, culpa magnam.</p>
           <br />
           <li><i class="fas fa-envelope m-2"></i> tavello@gmail.com</li>
           <li><i class="fas fa-phone-alt m-2"></i> 15426871258</li>
           <li><i class="fas fa-map-marker-alt m-2"></i> Gulshan 404 , Dhaka</li>
           </div>
           <div className="col-lg-4 text-start ps-5">
             <h5>Our Recent Posts</h5>
              <br/>
             <li className='text-secondary'>Visit thailand, bali  and china</li>
             <li>September 7,2020</li>
             <br />
             <li className='text-secondary'>Visit thailand, bali  and china</li>
             <li>September 7,2020</li>
             <br />
             <li className='text-secondary'>Visit thailand, bali  and china</li>
             <li>September 7,2020</li>
           </div>
           <div className="col-lg-4">
             <h5>Subscribe to our Newsletter</h5>
             <div className="form">
               <input type="text" className='fa' placeholder='&#xf007; name'  />
               <input type="email" className='fa' placeholder=' &#xf0e0; Email'/> <br />
              <button className='submit-btn btn' type="submit"> Subscribe</button>
             
             </div>
           </div>
           
          
         </div>
       </div>
     </footer>
      <div className="copyright bg-secondary p-2 text-light">
        <p>&#169; All right Reserve RHsanto</p>
      </div>
    </div>
  );
};

export default Footer;