import React from 'react';
import logo from '../images/logo.PNG';
import { NavLink } from 'react-router-dom';
import './navbar.css';
const Navbar = () => {
  return (
    <div className='nav-shadow'>
      <nav className='navbar navbar-light bg-light '>
        <nav className='container-fluid'>
          <a className='navbar-brand m-0 ms-md-5'>
            <img src={logo} alt='logo' height='45px' />
          </a>
          <form className='d-flex me-md-5' role='search'>
            <input
              className='form-control me-3 d-none d-md-block text-muted searchbox'
              type='search'
              placeholder='Search'
              aria-label='Search'
            />

            <a className='nav-link fs-5 mx-3' href='#'>
              <i className='fa-solid fa-search'></i>
            </a>
            <a className='nav-link fs-5 mx-3' href='#'>
              <i className='fa-solid fa-house'></i>
            </a>
            <a className='nav-link fs-5 mx-3' href='#'>
              <i className='fa-regular fa-heart '></i>
            </a>
            <NavLink to='/myprofile' className='nav-link fs-5 mx-3' href='#'>
              <i className='fa-solid fa-circle-user'></i>
            </NavLink>
          </form>
        </nav>
      </nav>
    </div>
  );
};

export default Navbar;
