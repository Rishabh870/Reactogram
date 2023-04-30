import React from 'react';
import socialDesktop from '../images/social-desktop.PNG';
import socialMobile from '../images/social-mobile.PNG';
import { Link } from 'react-router-dom';
import '../pages/login.css';

const Login = () => {
  return (
    <div className='container login-container '>
      <div className='row'>
        <div className='col-md-7 col-sm-12 px-4'>
          <img
            style={{ maxWidth: '100%', maxHeight: '80%' }}
            alt='socialDesktop'
            className='socialDesktop m-auto'
            src={socialDesktop}
          />
          <img
            className='socialMobile m-auto'
            alt='socialMoblie'
            src={socialMobile}
          />
        </div>
        <div className='col-md-5 col-sm-12 px-4 '>
          <div className='card shadow'>
            <div className='card-body '>
              <h4 className='card-title text-center my-3 mb-4 fw-bold'>
                Log In
              </h4>
              <form className='mt-2'>
                <input
                  type='email'
                  class='form-control input-bg my-3 p-2'
                  placeholder='Phone number, username or email'
                />
                <input
                  type='password'
                  class='form-control input-bg my-3 p-2'
                  placeholder='Password'
                />
                <div className='mt-3 d-grid'>
                  <button type='submit' class='custom-btn-primary custom-btn'>
                    Login
                  </button>
                </div>

                <div className='my-4'>
                  <hr className='text-muted' />
                  <h5 className='text-muted text-center'>OR</h5>
                  <hr className='text-muted' />
                </div>
                <div className='mt-3 mb-5 d-grid'>
                  <button type='submit' class=' custom-sign'>
                    <span className='text-muted'>Don't have an account? </span>
                    <Link to='/signup' className='ms-1 text-info fw-bold'>
                      Sign Up
                    </Link>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
