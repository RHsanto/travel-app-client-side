import React from 'react';
import { Link } from 'react-router-dom';
import './Offers.css'
const Offers = () => {
  return (
    <div>
      <div className="offer-section">
        <div className="container">
          <div className="offers-info">
          <h3>chose your</h3>
        <h1 >Destination</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing 
          elit. Maiores iure nemo quod.  <br /> Excepturi unde 
          pariatur ipsa commodi ipsam, quidem dolorum.</p>
          </div>
          <div className="row g-4">
            <div 
             className="col-lg-4 offers">
            <Link to='/'>
              <div className="discount">
                <p>50% off</p>
              </div>
             <div className="offer-details">
             <h2>Valencia</h2>
              <p>$2990</p>
             </div>
             <img src="https://setsail.qodeinteractive.com/wp-content/uploads/2018/10/destinations-featured-img-4-650x650.jpg" alt="" />
            </Link>
            </div>
            <div  className="col-lg-4 offers">
              <Link to='/'>
              <div className="discount">
                <p>Special offer</p>
              </div>
           <div className="offer-details">
           <h2>Varadero</h2>
            <p>$2300</p>
           </div>
              <img src="https://setsail.qodeinteractive.com/wp-content/uploads/2018/10/destinations-featured-img-5-650x650.jpg" alt="" />
              </Link>
            </div>
            <div
            className="col-lg-4 offers">
              <Link to='/'>
              <div className="discount">
                <p>60% off</p>
              </div>
           <div className="offer-details ">
           <h2>Italy Tour</h2>
            <p>$2550</p>
           </div>
              <img src="https://setsail.qodeinteractive.com/wp-content/uploads/2018/10/destinations-featured-img-6-650x650.jpg" alt="" />
            
              </Link>
            </div>
          </div>
        </div>

          
      </div>
    </div>
  );
};

export default Offers;