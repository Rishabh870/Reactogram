import React from 'react';
import logo from '../images/logo.PNG';
import { Link } from 'react-router-dom';
import './navbar.css';
const Navbar = () => {
  return (
    <div className='nav-shadow'>
      <nav className='navbar navbar-light bg-light '>
        <nav className='container-fluid'>
          <a className='navbar-brand ms-5'>
            <img src={logo} alt='logo' height='45px' />
          </a>
          <form className='d-flex me-5' role='search'>
            <input
              className='form-control me-3 text-muted searchbox'
              type='search'
              placeholder='Search'
              aria-label='Search'
            />

            <a className='nav-link fs-5' href='#'>
              <i className='fa-solid fa-house'></i>
            </a>
            <a className='nav-link fs-5' href='#'>
              <i className='fa-regular fa-heart '></i>
            </a>
            <a className='nav-link fs-5' href='#'>
              <i className='fa-solid fa-circle-user'></i>
            </a>
          </form>
        </nav>
      </nav>
    </div>
  );
};

export default Navbar;
