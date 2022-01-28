import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';

const Addoffer = () => {
  const { register, handleSubmit ,reset} = useForm();

  const onSubmit = data => {
    console.log(data);
    axios.post('https://secure-dawn-80151.herokuapp.com/offersData',data)
    .then(res =>{
      console.log(res);
      if(res.data.insertedId){
        alert('Order Successfully');
        reset();
      }
    })
  
};
  return (
   <>
 
   <div className='add-packages'>
      <h1>Add New Offer !</h1>
   <div className='container'>
     
    <form className=' ' onSubmit={handleSubmit(onSubmit)}>
      
      <input type='text' placeholder='Enter img link' {...register("img", { required: true })} />
      <input type='text' placeholder='Enter package title'  {...register("title", { required: true })} />
      <input type='number' placeholder='Enter expense'   {...register("expense", { required: true })} />
      <input  type='number' placeholder='Enter ratings'   {...register("rating", { required: true })} />
      <input  type='text' placeholder='Enter location'   {...register("location", { required: true })} />
      <input  type='number' placeholder='Enter discount'   {...register("discount", { required: true })} />
      <input type='date' defaultValue="" {...register("date")} />
      <input  type='text' placeholder='Enter description'   {...register("description", { required: true })} />
      <input className='btn-info border-0' type="submit" />
     
    </form>
        
  </div>
  </div>

   </>
  );
};

export default Addoffer;
