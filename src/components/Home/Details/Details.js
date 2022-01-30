import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';
import { useParams } from 'react-router-dom';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DateRangeIcon from '@mui/icons-material/DateRange';
const Details = () => {
  const {id}=useParams();
  console.log(id);
  const [order,setOrder]=useState([])

  useEffect(()=>{
fetch(`https://secure-dawn-80151.herokuapp.com/blogData/${id}`)
.then(res=>res.json())
.then(data=>setOrder(data))
  })
  return (     
    <div>
      <Navigation/>
    <div className="container mt-5">
      <div className="row text-start">
        <div className="col-lg-8 card p-3 mx-auto">
          <img src={order.img} alt="" className='w-100'/>
         <div className="card-body">
         <div className="title-info d-flex align-items-center justify-content-between">
         <h1>{order.title}</h1>
          <div className="div-2 d-flex ">
          <p><LocationOnIcon  color="success"/> {order.location}</p>
          <p className='ms-4'><DateRangeIcon  color="primary"/> {order.date}</p>
          </div>
         </div>
         <h4 className='mt-3'>Total Expense : ${order.expense} </h4>
         <p>  <Rating className='text-warning my-3'
      emptySymbol="far fa-star "
      fullSymbol="fas fa-star "
      readonly
      initialRating={order.rating}
      /> </p>
         <p>{order.description}</p>
         </div>
        </div>
      
      </div>
    </div>
      <Footer/>
    </div>
  );
};

export default Details;