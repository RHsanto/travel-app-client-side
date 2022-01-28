import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';

const SignUp = () => {

const {signInUsingGoogle,handleEmailChange,handlePasswordChange,handleNameChange,error2,setError2
  ,createNewUser,email,password,displayName,saveUser,saveUser2}=useAuth();
const location = useLocation();
const history = useHistory();
const redirect_uri = location.state?.from || '/';


const handleSubmit =e=>{
  e.preventDefault();
  createNewUser(email,password)
  .then((userCredential) => {
  const user = userCredential.user;
  saveUser(email,displayName);
  setError2("")
  history.push( redirect_uri);
  console.log(user);
  })
  .catch((error) => {
    setError2(error.message)
  });

    
}

const handleGoogleLogin=()=>{
  signInUsingGoogle()
  .then(result=>{
   const user = result.user;
   saveUser2(user.email,user.displayName);
   history.push( redirect_uri);
   })
   
}

  return (

    <>
    <Navigation/>
    <div className='container'>
      <div className="row mb-5">
        <div className="col-lg-6 login-from shadow-lg p-5 mx-auto ">
      <p className=' p-2 rounded fs-4 text-danger '>{error2}</p>
      <h1 className='mb-5'>Please Register here</h1>
      {/* here signup from */}
         <form  onSubmit={handleSubmit}>
         <div className="form-floating mb-3">
            <input  onBlur={handleNameChange} type="text" className="form-control"placeholder="Enter Your name " required/>
            <label >Your name</label>
         </div>
        <div className="form-floating mb-3">
          <input  onBlur={handleEmailChange} type="email" className="form-control" id="floatingInput" placeholder="name@example.com" required/>
          <label htmlFor="floatingInput">Email address</label>
      </div>
         <div className="form-floating mb-3">
            <input  onBlur={handlePasswordChange} type="password" className="form-control" id="floatingPassword" placeholder="Password" required/>
            <label htmlFor="floatingPassword">Password</label>
         </div>
         <p> Already a member? <Link to='/login'>Go to Login</Link></p>

        <button type="submit" className="btn btn-info my-3">Register </button>
         <hr />
         </form>
         {/* here google login button */}
         <button onClick={handleGoogleLogin}  className="btn btn-success mb-5" >
           Sign in with
            <i className="fab fa-google text-light mx-2"></i></button>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default SignUp;