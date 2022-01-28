import React, { useEffect, useState } from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DateRangeIcon from '@mui/icons-material/DateRange';
const AllOrders = () => {
  const [allOrders,setAllOrders] = useState([]);
 

  useEffect(()=>{
    fetch('http://localhost:5000/allBooking')
    .then(res=> res.json())
    .then(data=> setAllOrders(data))
    
      },[])

   // here orders status update
    const updateOrders = id=>{
      const url = `http://localhost:5000/allBooking/${id}`
      fetch(url,{
        method: "PUT",
        headers: {"content-type": "application/json"},
        body:JSON.stringify(allOrders)
  
      })
     .then(res=> res.json())
     .then(data=>{
        console.log(data);
        alert('Order Approved')
       window.location.reload()
     })
  }

       // Here orders delete
       const handleDelete = id =>{
        const proceed = window.confirm('Are you sure , you want to delete ?');
        if(proceed){
          const url =`http://localhost:5000/allBooking/${id}`
          fetch(url,{
              method: 'DELETE'
      
          })
              .then(res => res.json())
              .then(data =>{
                  if(data){
                   alert('Deleted successfully')
                   const remaining = allOrders.filter(allOrder => allOrder._id !== id)
                   setAllOrders(remaining)
                  }
              })
      }
        
      }

  return (
    <div className="all-order">
    <div className="container shadow-lg">
       <h1 className='mb-5 bg-dark text-light p-3 '> Here all orders</h1>
      <div className="row  row-cols-1 row-cols-md-2 g-4">
       {
         allOrders.map(order=>
         <div key={order._id}>
            <div className="card mb-3">
             <div className="row g-0">
               <div className="col-md-5">
                <img src={order.img} className="img-fluid h-100 rounded-start" alt="..."/>
              </div>
           <div className="col-md-7">
        <div className="card-body text-start">
      <h4 className="card-title"> {order.title}</h4>
    <h6 className="card-title">Total Expense : ${order.expense}</h6>
      <h6 className="card-title">Add by : <strong>{order.email}</strong></h6>
        <h6 className="card-title"><LocationOnIcon  color="success"/>  {order.location}</h6>
         <h6 className="card-title"><DateRangeIcon  color="primary"/> {order.date}</h6>
            <p className="card-text"></p>
              <div className="members d-flex justify-content-between">
                 <div onClick={()=>updateOrders(order._id)} >
                    {
                       order.status === "pending" ?  <div className="btn btn-success"> Approved </div> : <p className='text-success fw-bold'>Approved</p>
                    }
                     </div>
                 <div onClick={()=>handleDelete(order._id)} className="btn btn-danger">
                   <i className="fas fa-trash-alt text-light  me-2"></i> Delete</div>
              </div>
           </div>
       </div>
    </div>
</div>
    </div>)}
       </div>
          </div>  
             </div>
  );
};

export default AllOrders;