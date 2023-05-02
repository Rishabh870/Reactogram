import React from 'react';
import '../pages/profile.css';

const Profile = () => {
  return (
    <div>
      <div className='container mt-4 shadow'>
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
              <button type='' class='custom-btn shadow py-3 mx-md-3'>
                Edit Profile
              </button>
              <button type='' class='custom-btn shadow py-3  mx-md-3'>
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
          <div className='col-md-4 col-sm-12 p-3' style={{ height: '20rem' }}>
            <div className='card p-0' style={{ width: '100%', height: '100%' }}>
              <img
                src='https://images.unsplash.com/photo-1682844924084-f613cf669e73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80'
                class='card-img-top'
                width='100%'
                height='100%'
                alt='posts'
              />
            </div>
          </div>
          <div className='col-md-4 col-sm-12 p-3' style={{ height: '20rem' }}>
            <div className='card p-0' style={{ width: '100%', height: '100%' }}>
              <img
                src='https://images.unsplash.com/photo-1682844924084-f613cf669e73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80'
                class='card-img-top'
                width='100%'
                height='100%'
                alt='posts'
              />
            </div>
          </div>
          <div className='col-md-4 col-sm-12 p-3' style={{ height: '20rem' }}>
            <div className='card p-0' style={{ width: '100%', height: '100%' }}>
              <img
                src='https://images.unsplash.com/photo-1682844924084-f613cf669e73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80'
                class='card-img-top'
                width='100%'
                height='100%'
                alt='posts'
              />
            </div>
          </div>
          <div className='col-md-4 col-sm-12 p-3' style={{ height: '20rem' }}>
            <div className='card p-0' style={{ width: '100%', height: '100%' }}>
              <img
                src='https://images.unsplash.com/photo-1682844924084-f613cf669e73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80'
                class='card-img-top'
                width='100%'
                height='100%'
                alt='posts'
              />
            </div>
          </div>
          <div className='col-md-4 col-sm-12 p-3' style={{ height: '20rem' }}>
            <div className='card p-0' style={{ width: '100%', height: '100%' }}>
              <img
                src='https://images.unsplash.com/photo-1682844924084-f613cf669e73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80'
                class='card-img-top'
                width='100%'
                height='100%'
                alt='posts'
              />
            </div>
          </div>
          <div className='col-md-4 col-sm-12 p-3' style={{ height: '20rem' }}>
            <div className='card p-0' style={{ width: '100%', height: '100%' }}>
              <img
                src='https://images.unsplash.com/photo-1682844924084-f613cf669e73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80'
                class='card-img-top'
                width='100%'
                height='100%'
                alt='posts'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
