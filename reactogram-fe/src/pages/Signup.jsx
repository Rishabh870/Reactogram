import React from 'react';
import socialDesktop from '../images/social-desktop.PNG';
import socialMobile from '../images/social-mobile.PNG';
import { Link } from 'react-router-dom';
import '../pages/signup.css';

const Signup = () => {
  return (
    <div>
      <div className='container login-container '>
        <div className='row'>
          <div className='col-md-7 col-sm-12 px-4'>
            <img
              style={{ maxWidth: '100%', maxHeight: '100%' }}
              className='socialDesktop m-auto'
              alt='socialDesktop'
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
                  Sign Up
                </h4>
                <form className='mt-2'>
                  <input
                    type='phone'
                    class='form-control input-bg my-3 p-2'
                    placeholder='Phone number'
                  />
                  <input
                    type='email'
                    class='form-control input-bg my-3 p-2'
                    placeholder='Email'
                  />
                  <input
                    type='text'
                    class='form-control input-bg my-3 p-2'
                    placeholder='Full Name'
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
                      <span className='text-muted'>
                        Already have an account?{' '}
                      </span>
                      <Link to='/login' className='ms-1 text-info fw-bold'>
                        Log In
                      </Link>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
