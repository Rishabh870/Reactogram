import React from 'react';
import profilePhoto from '../images/social-mobile.PNG';
import cardImage from '../images/social-mobile.PNG';
import './cards.css';

const Cards = () => {
  return (
    <div>
      <div className='card m-3 pt-2' style={{ maxWidth: '400px' }}>
        <div className='card-header bg-transparent border-0 px-3 '>
          <div className='row'>
            <div className='col-8'>
              <img
                src='https://images.unsplash.com/photo-1681967712041-9f274b3ee850?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1075&q=80'
                alt='Profile'
                className='rounded-circle me-2 float-start'
                width='65px'
                height='65px'
              />
              <div className='card-head p-2 '>
                <p className='card-title mb-1 fs-6 fw-bold'>Rishu</p>
                <p className='card-text location text-muted'>
                  Raipur,Chhattisghar
                </p>
              </div>
            </div>
            <div className='col-4 d-flex align-content-center justify-content-end'>
              <button type='button' className='btn btn-link text-muted   '>
                <i className='fa-solid fa-ellipsis-vertical'></i>
              </button>
            </div>
          </div>
        </div>
        <div className='px-3 py-2'>
          <img
            src='https://images.unsplash.com/photo-1680320564291-cd46d3fc21e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80'
            alt='Posts'
            height='350px'
            width='350px'
            className='card-img-top rounded-3'
          />
        </div>
        <div className='card-body '>
          <div className='d-flex justify-content-between '>
            <div className='d-flex'>
              <div className='me-1'>
                <button type='button' className='card-icons '>
                  <i className='fa-regular fa-heart'></i>
                </button>
              </div>
              <div className='me-1'>
                <button type='button' className=' card-icons'>
                  <i className='fa fa-regular fa-comment'></i>
                </button>
              </div>
              <div className='me-5'>
                <button type='button' className='card-icons '>
                  <i className='fa fa-share'></i>
                </button>
              </div>
            </div>
            <div className=' float-end'>
              <span className=''>580 Likes</span>
            </div>
          </div>
          <p className='card-text px-1 mt-2'>2 hours ago</p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
