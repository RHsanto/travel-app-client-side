import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Navigation.css'
import AssignmentIcon from '@mui/icons-material/Assignment';
const Navigation = () => {
  const {user,logOut}=useAuth();
  
  return (
    <div>
  <div className="menubar shadow-lg ">
  <div className="container ">
      <div className="main-header">
        <div className="logo">
          <img src="img/logo.PNG" alt=""/>
          <Link to='/' className='fs-1'>
           Travello
          </Link>
        </div>

        <div className="menu">
          <nav className='d-none d-md-block'>
            <ul>
              <NavLink  style={isActive => ({
               color: isActive ? "#31D2F2" : "black"
               })}  to='/home'><li>Home</li></NavLink>
              <NavLink  style={isActive => ({
               color: isActive ? "#31D2F2" : "black"
               })}  to='/blog'><li>Blog</li></NavLink>
              <NavLink  style={isActive => ({
               color: isActive ? "#31D2F2" : "black"
               })}  to='/addExperince'><li>Add Experience</li></NavLink>
             
            </ul>
          </nav>
       
         
           {/* <!-- start offcanvas menu  --> */}
           <button className="btn btn-light navbar d-block d-md-none " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight"
            aria-controls="offcanvasRight"><i class="fas fa-align-right"></i></button>
             <div className="offcanvas offcanvas-end w-50 text-dark bg-dark" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
             <div className="offcanvas-header">
             <h5 id="offcanvasRightLabel">Menu bar</h5>
            <button type="button" className="btn-close bg-light text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
        <>
              <NavLink to='/home'><li>Home</li></NavLink>
              <NavLink to='/blog'><li>Blog</li></NavLink>
              <div className="authentic-section  mt-3">
  
   <>
   {
  
  user.email ? 
  <>
 
  <div className="dropdown ">
    <button className="btn btn-info  dropdown-toggle mx-2" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
     <span className=' name'>{user.displayName}</span>
   </button>
   <ul className="dropdown-menu mt-2 " aria-labelledby="dropdownMenuButton1">
   <img className=' rounded-circle  w-50 ms-5' src={user.photoURL}alt="img" />
       <Link to='/dashboard'><li className='text-dark items text-center'><AssignmentIcon/> Dashboard</li></Link>
      <button onClick={logOut}  className="btn btn-outline-danger  w-100"><i className="fas fa-sign-out-alt"></i> logout</button>
    </ul>
  </div>
 
  
  </>
   :
   
   <Link to ='/signin'>
     <button className='btn btn-primary  '>
       Sign In 
       <i className="fas fa-sign-in-alt ms-2">
         </i></button></Link>
}
   </>

    </div>
             
            </>
        </ul>
      
      </div>
            </div>
        </div>

        <div className="authentic-section d-none d-md-block mt-3">
         <>
         {
        
        user.email ? 
        <>
       
        <div className="dropdown ">
          <button className="btn   dropdown-toggle mx-2" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
           <span className=' name'>{user.email}</span>
         </button>
         <ul className="dropdown-menu mt-2 " aria-labelledby="dropdownMenuButton1">
         <img className=' rounded-circle  w-50 ms-5' src={user.photoURL}alt="img" />
             <Link to='/dashboard'><li className='text-dark items text-center'><AssignmentIcon/> Dashboard</li></Link>
            <button onClick={logOut}  className="btn btn-outline-danger  w-100"><i className="fas fa-sign-out-alt"></i> logout</button>
          </ul>
        </div>
       
        
        </>
         :
         
         <Link to ='/login'>
           <button className='btn btn-info '>
             Log In 
             <i className="fas fa-sign-in-alt ms-2">
               </i></button></Link>
      }
         </>
     
          </div>
        {/* <!-- end of main-header  --> */}
      </div>
      {/* <!-- end of container --> */}
     
    </div>
  </div>
    </div>
  );
};

export default Navigation;