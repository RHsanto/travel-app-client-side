import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navigation.css'
const Navigation = () => {

  
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
               })}  to='/about'><li>About</li></NavLink>
              <NavLink  style={isActive => ({
               color: isActive ? "#31D2F2" : "black"
               })}  to='/contact'><li>Contact</li></NavLink>

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
              <NavLink to='/about'><li>About</li></NavLink>
              <NavLink to='/contact'><li>Contact</li></NavLink>
            </>
        </ul>
      
      </div>
            </div>
        </div>

        <div className="authentic-section d-none d-md-block mt-3">
  
         <Link to='/dashboard'>
         <button className="btn btn-warning me-4" >Dashboard</button>
         </Link>
         <Link to='/login'>
         <button className="btn btn-outline-info me-4" >Log in </button>
         </Link>
         <Link to='/signup'>
         <button className="btn btn-info" >Sign up <i class="fas fa-sign-in-alt"></i></button>
         </Link>
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