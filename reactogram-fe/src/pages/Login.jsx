import React, { useState } from 'react';
import socialDesktop from '../images/social-desktop.PNG';
import socialMobile from '../images/social-mobile.PNG';
import { Link, useNavigate } from 'react-router-dom';
import '../pages/login.css';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { API_BASE_URL } from '../../src/config';
import Swal from 'sweetalert2';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const login = (event) => {
    event.preventDefault();
    setLoading(true);

    const requestData = { email, password };
    axios
      .post(`${API_BASE_URL}/login`, requestData)
      .then((result) => {
        debugger;
        if (result.status == 200) {
          setLoading(false);
          localStorage.setItem('token', result.data.result.token);
          localStorage.setItem('user', JSON.stringify(result.data.result.user));
          dispatch({ type: 'LOGIN_SUCCESS', payload: result.data.result.user });
          setLoading(false);
          navigate('/myprofile');
        }
        setEmail('');
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
            {loading ? (
              <div className='col-md-12 mt-3 text-center'>
                <div className='spinner-border' role='status'>
                  <span className='sr-only'>Loading...</span>
                </div>
              </div>
            ) : (
              ''
            )}
            <div className='card-body px-5'>
              <h4 className='card-title text-center my-3 mb-4 fw-bold'>
                Log In
              </h4>
              <form
                className='mt-2'
                onSubmit={(e) => {
                  login(e);
                }}
              >
                <input
                  type='email'
                  className='form-control input-bg my-3 p-2'
                  placeholder='Phone number, username or email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type='password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className='form-control input-bg my-3 p-2'
                  placeholder='Password'
                />
                <div className='mt-3 d-grid'>
                  <button
                    type='submit'
                    className='custom-btn-primary custom-btn'
                  >
                    Login
                  </button>
                </div>

                <div className='my-4'>
                  <hr className='text-muted' />
                  <h5 className='text-muted text-center'>OR</h5>
                  <hr className='text-muted' />
                </div>
                <div className='mt-3 mb-5 d-grid'>
                  <button type='submit' className=' custom-sign'>
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
