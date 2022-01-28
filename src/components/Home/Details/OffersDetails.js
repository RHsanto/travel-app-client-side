import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import './Offer.css'
import useAuth from '../../../hooks/useAuth';
const OffersDetails = () => {
  const {id}=useParams()
  const{user}=useAuth()
  const [order,setOrder]=useState([])
  const { register, handleSubmit ,reset} = useForm();

  const onSubmit = data =>{ 
  // here order details
  //  data.name=user.displayName
   data.location=order.location
   data.title=order.title
   data.img= order.img
   data.expense=order.expense
   data.status ="pending";
console.log(data);
  //  here post order
    axios.post('http://localhost:5000/addBooking',data)
    .then(res =>{
      if(res.data.insertedId){
        alert('Order Successful');
        reset();
      }
    })
  };

useEffect(()=>{
 fetch(`http://localhost:5000/offersData/${id}`)
.then(res=>res.json())
.then(data=>setOrder(data))
  })
  return (
    <div>
      <Navigation/>
     <div className="container mt-5">
       <div className="row">
       <div className="col-lg-8 card p-3 text-start">
          <img src={order.img} alt="" className=''/>
         <div className="card-body">
         <div className="title-info d-flex align-items-center justify-content-between">
         <h1>{order.title}</h1>
          <div className="div-2 d-flex ">
          <p><LocationOnIcon  color="success"/> {order.location}</p>
          {/* <p className='ms-4'><DateRangeIcon  color="primary"/> {order.date}</p> */}
          </div>
         </div>
         <h4 className='mt-3'>Total Expense : $ {order.expense}
         </h4>
         <p>{order.description}</p>
         </div>
        </div>

           {/* here book form here */}
           <div className="col-lg-4 booking-form">
             <h1>Book this Offer</h1>
      <form onSubmit={handleSubmit(onSubmit)}>

      <input  type='text'defaultValue={user.displayName} {...register("displayName")}  />

      <input  type='email' defaultValue={user.email} {...register("email")} />

      <input placeholder='Mobile '  type='tel' {...register("mobile")} />

      <select className='me-2 order-select' {...register("packages")}>
        <option >Packages Type</option>
        <option >Business class</option>
        <option >other</option>
      </select>

    <div className="members d-flex justify-content-between">
    <select  className='me-2 order-select' {...register("MansType")}>
        <option value="other">Mans Type</option>
        <option value="couple">couple</option>
        <option value="single">single</option>
      </select>
      <select className='order-select' {...register("member")}>
        <option >members</option>
         <option >2</option>
         <option>4</option>
         <option>5</option>
         <option >6</option>
         <option >10</option>
      </select>
    </div>
  

    <input type='date' defaultValue="" {...register("date")} />

      <textarea {...register("message")} placeholder="Message.........." />
     
      <input className=' btn btn-primary' type="submit" />
    </form>
        </div>
       </div>
     </div>
      <Footer/>
    </div>
  );
};

export default OffersDetails;