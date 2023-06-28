import React from 'react';
import socialDesktop from '../images/social-desktop.PNG';
import socialMobile from '../images/social-mobile.PNG';
import { Link } from 'react-router-dom';
import '../pages/signup.css';
import { useState } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../../src/config';
import Swal from 'sweetalert2';

const Signup = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [loading, setLoading] = useState(false);

  const signup = (event) => {
    event.preventDefault();
    setLoading(true);

    const requestData = { fullName: fullName, email, password };
    axios
      .post(`${API_BASE_URL}/signup`, requestData)
      .then((result) => {
        if (result.status == 201) {
          setLoading(false);
          Swal.fire({
            icon: 'success',
            title: 'User Successfully Registered',
          });
        }
        setEmail('');
        setFullName('');
        setPassword('');
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        Swal.fire({
          icon: 'error',
          title: 'Some Error Occured',
        });
      });
  };
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
              {loading ? (
                <div className='col-md-12 mt-3 text-center'>
                  <div className='spinner-border' role='status'>
                    <span className='sr-only'>Loading...</span>
                  </div>
                </div>
              ) : (
                ''
              )}
              <div className='card-body '>
                <h4 className='card-title text-center my-3 mb-4 fw-bold'>
                  Sign Up
                </h4>
                <form
                  className='mt-2'
                  onSubmit={(e) => {
                    signup(e);
                  }}
                >
                  <input
                    type='phone'
                    className='form-control input-bg my-3 p-2'
                    placeholder='Phone number'
                  />
                  <input
                    type='email'
                    onChange={(e) => setEmail(e.target.value)}
                    className='form-control input-bg my-3 p-2'
                    value={email}
                    placeholder='Email'
                  />
                  <input
                    type='text'
                    onChange={(e) => setFullName(e.target.value)}
                    className='form-control input-bg my-3 p-2'
                    value={fullName}
                    placeholder='Full Name'
                  />
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    type='password'
                    value={password}
                    className='form-control input-bg my-3 p-2'
                    placeholder='Password'
                  />
                  <div className='mt-3 d-grid'>
                    <button
                      type='submit'
                      className='custom-btn-primary custom-btn'
                    >
                      Sign Up
                    </button>
                  </div>

                  <div className='my-4'>
                    <hr className='text-muted' />
                    <h5 className='text-muted text-center'>OR</h5>
                    <hr className='text-muted' />
                  </div>
                  <div className='mt-3 mb-5 d-grid'>
                    <button type='submit' className=' custom-sign'>
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
