import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import './AddExperience.css'
const AddExperince = () => {
  const { register, handleSubmit ,reset} = useForm();

  const onSubmit = data => {
    data.status ="pending";
    console.log(data);
    axios.post('https://secure-dawn-80151.herokuapp.com/addBooking',data)
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
 <Navigation/>
   <div className='add-packages'>
      <h1>Share Your Experience !</h1>
   <div className='container'>
     
    <form className=' ' onSubmit={handleSubmit(onSubmit)}>
      
      <input type='text' placeholder='Enter img link' {...register("img", { required: true })} />

      <input type='text' placeholder='Enter package title'  {...register("title", { required: true })} />

      <input type='number' placeholder='Enter expense'   {...register("expense", { required: true })} />

      <input  type='number' placeholder='Enter ratings'   {...register("rating", { required: true })} />

      <input  type='text' placeholder='Enter location'   {...register("location", { required: true })} />

      <input type='date' defaultValue="" {...register("date")} />
      <input  type='text' placeholder='Enter description'   {...register("description", { required: true })} />

      <input className='btn-info' type="submit" />
     
    </form>
        
  </div>
  </div>
<Footer/>
   </>
  );
};

export default AddExperince;