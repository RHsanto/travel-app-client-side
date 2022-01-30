import React, { useEffect, useState } from 'react';

import './Offers.css'
const Offers = () => {
  const [offers,setOffers]=useState([]);
  useEffect(()=>{
    fetch('https://secure-dawn-80151.herokuapp.com/offersData')
    .then(res=>res.json())
    .then(data=>setOffers(data.slice(0,3)))
  })
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
            {offers.map(offer=>
                <div 
                className="col-lg-4 offers">
               <>
                 <div className="discount">
                   <p>{offer.discount}% off</p>
                 </div>
                <div className="offer-details">
                <h2>{offer.title}</h2>
                 <p>${offer.expense}</p>
                </div>
                <img src={offer.img} alt="" />
               </>
               </div>
              
              )}
         
          </div>
        </div>

          
      </div>
    </div>
  );
};

export default Offers;