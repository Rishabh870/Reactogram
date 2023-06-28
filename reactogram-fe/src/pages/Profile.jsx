import React, { useEffect, useState } from 'react';
import { Modal, Dropdown } from 'react-bootstrap';
import axios from 'axios';
import { API_BASE_URL } from '../../src/config';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import '../pages/profile.css';
import Swal from 'sweetalert2';

const Profile = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.userReducer);
  console.log(user);
  const [postDetail, setPostDetail] = useState({});

  const [loading, setLoading] = useState(false);
  const [allPost, setAllPost] = useState([]);

  const [show, setShow] = useState(false);
  const [image, setImage] = useState({ preview: '', data: '' });

  const [caption, setCaption] = useState('');
  const [location, setLocation] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showPost, setShowPost] = useState(false);

  const handleFileSelect = (event) => {
    const img = {
      preview: URL.createObjectURL(event.target.files[0]),
      data: event.target.files[0],
    };
    setImage(img);
  };
  const handlePostClose = () => setShowPost(false);
  const handlePostShow = () => setShowPost(true);

  const CONFIG_OBJ = {
    headers: {
      'Content-Type': ' application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    },
  };

  const handleImageUpload = async () => {
    let formData = new FormData();
    // console.log(image.data);
    formData.append('file', image.data);
    const response = await axios.post(`${API_BASE_URL}/uploadFile`, formData);
    return response;
  };

  const addPost = async () => {
    if (image.preview === '') {
      Swal.fire({ icon: 'error', title: 'Post is Mandatory' });
    } else if (caption === '') {
      Swal.fire({ icon: 'error', title: 'Caption is Mandatory' });
    } else if (location === '') {
      Swal.fire({ icon: 'error', title: 'location is Mandatory' });
    } else {
      setLoading(true);
      const imgRes = await handleImageUpload();
      const request = {
        description: caption,
        location: location,
        image: `${API_BASE_URL}/files/${imgRes.data.fileName}`,
      };
      // console.log(request);
      // write api call to create post
      const postResponse = await axios.post(
        `${API_BASE_URL}/createpost`,
        request,
        CONFIG_OBJ
      );
      setLoading(false);
      if (postResponse.status == 201) {
        navigate('/post');
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Some error occurred while creating post',
        });
      }
    }
  };

  const getMyAllPosts = async () => {
    const response = await axios.get(`${API_BASE_URL}/myallposts`, CONFIG_OBJ);
    // console.log(response);
    if (response.status === 200) {
      setAllPost(response.data.posts);
    } else {
      Swal.fire({ icon: 'error', title: 'some error occur' });
    }
  };

  useEffect(() => {
    getMyAllPosts();
  }, []);

  const showDetail = (post) => {
    setPostDetail(post);
  };

  const deletePost = async (postId) => {
    const response = await axios.delete(
      `${API_BASE_URL}/deletepost/${postId}`,
      CONFIG_OBJ
    );
    if (response.status === 200) {
      getMyAllPosts();
      handleClose();
    }
  };

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
            />
            <div className='my-4 mx-2'>
              <p className='fw-bold'>{user.user.email}</p>
              <p className=''>{user.user.fullName}</p>
              <p className=''>Web Developer</p>
              <p className=''>My Portfolio on linkedin</p>
            </div>
          </div>
          <div className=' col-md-6 d-flex justify-content-between p-0 flex-column'>
            <div className='d-flex justify-content-md-end justify-content-evenly px-md-4 text-center'>
              <div className=' border-end px-md-5 px-4'>
                <h4>{allPost.length}</h4>
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
              <button
                type=''
                className='custom-btn shadow py-3 px-md-4 mx-md-0'
              >
                Edit Profile
              </button>
              <button
                type=''
                className='custom-btn shadow py-3 px-md-4 mx-md-3'
                onClick={handlePostShow}
              >
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
          {allPost.map((post) => {
            return (
              <div
                className='col-md-4 col-sm-12 p-3'
                onClick={handleShow}
                style={{ height: '20rem' }}
                key={post._id}
              >
                <div
                  className='card p-0'
                  style={{ width: '100%', height: '100%' }}
                >
                  <img
                    src={post.image}
                    onClick={() => showDetail(post)}
                    className='card-img-top'
                    width='100%'
                    height='100%'
                    alt='posts'
                  />
                </div>
              </div>
            );
          })}
        </div>

        <Modal show={show} onHide={handleClose} size='lg'>
          <Modal.Header closeButton>
            <Dropdown>
              <Dropdown.Toggle
                variant='transparent'
                id='dropdown-basic'
                toggleIcon={false}
              >
                <i className='fa-solid fa-ellipsis'></i>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item>
                  <i className='fa-solid fa-pen-to-square pe-2'></i>
                  Edit Post
                </Dropdown.Item>
                <Dropdown.Item onClick={() => deletePost(postDetail._id)}>
                  <i className='fa fa-trash pe-2'></i>
                  Delete Post
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Modal.Header>

          <Modal.Body>
            <div className='row'>
              <div className='col-md-6'>
                <div>
                  <div id='carouselExample' className='carousel slide'>
                    <div className='carousel-inner'>
                      <div className='carousel-item active'>
                        <img
                          src={postDetail.image}
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
                    <p className='card-title mb-1 fs-6 fw-bold'>
                      {postDetail.location}
                    </p>
                    <p className='card-text location text-muted'>
                      {postDetail.description}
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

        <Modal
          show={showPost}
          onHide={handlePostClose}
          className='popUp'
          size='lg'
        >
          <Modal.Header closeButton>
            <span>Upload Post</span>
          </Modal.Header>

          <Modal.Body>
            <div className='row'>
              <div className='col-md-6'>
                <div className='uploadbox d-flex justify-content-center'>
                  <h4 className='d-flex align-items-center'>
                    <div className='dropzoneContainer text-center'>
                      <input
                        name='file'
                        type='file'
                        id='drop_zone'
                        className='FileUpload'
                        accept='.jpg, png,.gif'
                        onChange={handleFileSelect}
                      />

                      <div className='dropZoneOverlay text-center fs-5 '>
                        {image.preview ? (
                          <img src={image.preview} width={150} height={150} />
                        ) : (
                          <>
                            <i
                              class='fa fa-cloud-upload fs-1 mb-2'
                              aria-hidden='true'
                            ></i>
                            <br />
                            Drag and drop your image <br />
                            or
                            <br />
                            Click to add
                          </>
                        )}
                      </div>
                    </div>
                  </h4>
                </div>
              </div>
              <div className='col-md-6 py-4 py-md-0 d-flex justify-content-between flex-column'>
                <div className=' '>
                  <div className='form-floating mb-3'>
                    <textarea
                      type='text'
                      className='form-control'
                      id='floatingInput'
                      onChange={(e) => setCaption(e.target.value)}
                      placeholder='Add Caption'
                    />
                    <label for='floatingInput'>Add Caption</label>
                  </div>
                  <div className='form-floating mb-3'>
                    <input
                      type='text'
                      onChange={(e) => setLocation(e.target.value)}
                      className='form-control'
                      id='floatingInput'
                      placeholder='Add Location'
                    />
                    <label for='floatingInput'>
                      <i
                        className='fa fa-location-arrow'
                        aria-hidden='true'
                      ></i>{' '}
                      Add Location
                    </label>
                  </div>
                </div>
                <button
                  type=''
                  className='custom-post-btn shadow float-end '
                  onClick={() => addPost()}
                >
                  Post
                </button>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
};

export default Profile;
