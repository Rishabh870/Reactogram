import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

import '../pages/profile.css';

const Profile = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <div className='container my-4 shadow'>
        <div className='row py-md-5 px-md-5 px-4'>
          <div className=' col-md-6 '>
            <img
              className='rounded-circle '
              src='https://images.unsplash.com/photo-1681923982542-e60e1120aea6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
              alt='Profile Photo'
              width='150'
              height='150'
              srcset=''
            />
            <div className='my-4 mx-2'>
              <p className='fw-bold'>Rishu_870</p>
              <p className=''>Rishabh Parth</p>
              <p className=''>Web Developer</p>
              <p className=''>My Portfolio on linkedin</p>
            </div>
          </div>
          <div className=' col-md-6 d-flex justify-content-between p-0 flex-column'>
            <div className='d-flex justify-content-md-end justify-content-evenly px-md-4 text-center'>
              <div className=' border-end px-md-5 px-4'>
                <h4>10</h4>
                <p>Posts</p>
              </div>
              <div className=' border-end px-md-5 px-4'>
                <h4>20</h4>
                <p>Follower</p>
              </div>
              <div className='px-md-5 px-4'>
                <h4>20</h4>
                <p>Following</p>
              </div>
            </div>
            <div className=' d-flex my-md-4 mx-md-5 my-3 justify-content-evenly align-self-md-end text-center '>
              <button type='' className='custom-btn shadow py-3 mx-md-3'>
                Edit Profile
              </button>
              <button type='' className='custom-btn shadow py-3  mx-md-3'>
                Upload Post
              </button>
            </div>
          </div>
        </div>
        <div className='row mx-2'>
          <div className='col-12'>
            <hr />
          </div>
        </div>
        <div className='row d-flex justify-content-evenly py-md-5 py-3 px-2 '>
          <div
            className='col-md-4 col-sm-12 p-3'
            onClick={handleShow}
            style={{ height: '20rem' }}
          >
            <div className='card p-0' style={{ width: '100%', height: '100%' }}>
              <img
                src='https://images.unsplash.com/photo-1682844924084-f613cf669e73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80'
                className='card-img-top'
                width='100%'
                height='100%'
                alt='posts'
              />
            </div>
          </div>
          <div
            className='col-md-4 col-sm-12 p-3'
            onClick={handleShow}
            style={{ height: '20rem' }}
          >
            <div className='card p-0' style={{ width: '100%', height: '100%' }}>
              <img
                src='https://images.unsplash.com/photo-1682844924084-f613cf669e73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80'
                className='card-img-top'
                width='100%'
                height='100%'
                alt='posts'
              />
            </div>
          </div>
          <div
            className='col-md-4 col-sm-12 p-3'
            onClick={handleShow}
            style={{ height: '20rem' }}
          >
            <div className='card p-0' style={{ width: '100%', height: '100%' }}>
              <img
                src='https://images.unsplash.com/photo-1682844924084-f613cf669e73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80'
                className='card-img-top'
                width='100%'
                height='100%'
                alt='posts'
              />
            </div>
          </div>
          <div
            className='col-md-4 col-sm-12 p-3'
            onClick={handleShow}
            style={{ height: '20rem' }}
          >
            <div className='card p-0' style={{ width: '100%', height: '100%' }}>
              <img
                src='https://images.unsplash.com/photo-1682844924084-f613cf669e73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80'
                className='card-img-top'
                width='100%'
                height='100%'
                alt='posts'
              />
            </div>
          </div>
          <div
            className='col-md-4 col-sm-12 p-3'
            onClick={handleShow}
            style={{ height: '20rem' }}
          >
            <div className='card p-0' style={{ width: '100%', height: '100%' }}>
              <img
                src='https://images.unsplash.com/photo-1682844924084-f613cf669e73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80'
                className='card-img-top'
                width='100%'
                height='100%'
                alt='posts'
              />
            </div>
          </div>
          <div
            className='col-md-4 col-sm-12 p-3'
            onClick={handleShow}
            style={{ height: '20rem' }}
          >
            <div className='card p-0' style={{ width: '100%', height: '100%' }}>
              <img
                src='https://images.unsplash.com/photo-1682844924084-f613cf669e73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80'
                className='card-img-top'
                width='100%'
                height='100%'
                alt='posts'
              />
            </div>
          </div>
        </div>

        <Modal show={show} onHide={handleClose} size='lg'>
          <Modal.Header closeButton>
            <div class='dropdown'>
              <button
                class='btn btn-secondary '
                type='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                <i class='fa-solid fa-ellipsis'></i>
              </button>
              <ul class='dropdown-menu'>
                <li>
                  <a class='dropdown-item' href='#'>
                    Action
                  </a>
                </li>
                <li>
                  <a class='dropdown-item' href='#'>
                    Another action
                  </a>
                </li>
              </ul>
            </div>
          </Modal.Header>
          <Modal.Body>
            <div className='row'>
              <div className='col-md-6'>
                <div>
                  <div id='carouselExample' className='carousel slide'>
                    <div className='carousel-inner'>
                      <div className='carousel-item active'>
                        <img
                          src='https://images.unsplash.com/photo-1682844924084-f613cf669e73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80'
                          className='d-block w-100'
                          alt='...'
                        />
                      </div>
                      <div className='carousel-item'>
                        <img
                          src='https://images.unsplash.com/photo-1682844924084-f613cf669e73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80'
                          className='d-block w-100'
                          alt='...'
                        />
                      </div>
                      <div className='carousel-item'>
                        <img
                          src='https://images.unsplash.com/photo-1682844924084-f613cf669e73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80'
                          className='d-block w-100'
                          alt='...'
                        />
                      </div>
                    </div>
                    <button
                      className='carousel-control-prev'
                      type='button'
                      data-bs-target='#carouselExample'
                      data-bs-slide='prev'
                    >
                      <span
                        className='carousel-control-prev-icon'
                        aria-hidden='true'
                      ></span>
                      <span className='visually-hidden'>Previous</span>
                    </button>
                    <button
                      className='carousel-control-next'
                      type='button'
                      data-bs-target='#carouselExample'
                      data-bs-slide='next'
                    >
                      <span
                        className='carousel-control-next-icon'
                        aria-hidden='true'
                      ></span>
                      <span className='visually-hidden'>Next</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className='col-md-6'>
                <div className=''>
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
                <div>
                  <p className='card-text px-1 mt-2 text-secondary'>
                    2 hours ago
                  </p>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Odio optio hic aut repellendus, dolore autem.
                  </p>
                </div>
                <div className=' '>
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
                  </div>
                  <p className='fw-bold'>580 Likes</p>
                </div>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
};

export default Profile;
