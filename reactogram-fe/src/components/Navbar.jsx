import React from 'react';
import logo from '../images/logo.PNG';
import { NavLink } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import './navbar.css';

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const token = localStorage.getItem('token');

  const user = useSelector((state) => state.userReducer);
  console.log(user);

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    dispatch({ type: 'LOGOUT' });
    navigate('/login');
  };

  return (
    <div className='nav-shadow'>
      <nav className='navbar navbar-light bg-light '>
        <nav className='container-fluid px-sm-2'>
          <NavLink to='/' className='navbar-brand m-0 ms-md-5'>
            <img src={logo} alt='logo' height='45px' />
          </NavLink>

          {token ? (
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
              <NavLink className='nav-link fs-5 mx-3' to='/post'>
                <i className='fa-solid fa-house'></i>
              </NavLink>
              <NavLink className='nav-link fs-5 mx-3' href='#'>
                <i className='fa-regular fa-heart '></i>
              </NavLink>

              <Dropdown className=''>
                <Dropdown.Toggle
                  variant='transparent'
                  id='dropdown-basic'
                  toggleIcon={false}
                  style={{ marginTop: '-4px' }}
                >
                  <img
                    src='https://images.unsplash.com/photo-1681967712041-9f274b3ee850?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1075&q=80'
                    alt='Profile'
                    className='rounded-circle me-2 float-start'
                    width='25px'
                    height='25px'
                  />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>
                    <NavLink
                      to='/myprofile'
                      className='px-2 py-0 text-decoration-none text-dark'
                      href='#'
                    >
                      <i className='fa-solid fa-circle-user'></i> My Profile
                    </NavLink>
                  </Dropdown.Item>
                  <Dropdown.Item href='#' onClick={logout}>
                    <div className='px-2 py-0'>
                      <i className='fa fa-trash pe-2'></i>
                      Log Out
                    </div>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </form>
          ) : null}
        </nav>
      </nav>
    </div>
  );
};

export default Navbar;
