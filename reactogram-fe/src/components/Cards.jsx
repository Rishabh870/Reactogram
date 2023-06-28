import React, { useState } from 'react';
import './cards.css';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import axios from 'axios';
import { API_BASE_URL } from '../../src/config';
const Cards = (props) => {
  const user = useSelector((state) => state.userReducer);
  const [comment, setComment] = useState('');
  const [commentBox, setCommentBox] = useState(false);
  // console.log(props.postData.author._id);
  // console.log(user);

  const CONFIG_OBJ = {
    headers: {
      'Content-Type': ' application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    },
  };

  const likePost = async (postId, type) => {
    const request = { postId: postId };
    const response = await axios.put(
      `${API_BASE_URL}/${type}`,
      request,
      CONFIG_OBJ
    );
    if (response.status === 200) {
      props.getAllPosts();
    }
  };

  const submitComment = async (postId) => {
    setCommentBox(false);
    const request = {
      postId: postId,
      commentText: comment,
      // commentedBy: comment.commentedBy.fullName,
    };
    const response = await axios.put(
      `${API_BASE_URL}/comment`,
      request,
      CONFIG_OBJ
    );
    if (response.status === 200) {
      props.getAllPosts();
    }
  };

  const isPostLiked = props.postData.likes.includes(user.user._id);

  console.log(props.postData);

  return (
    <div>
      <div className='card pt-2'>
        <div className='card-header bg-transparent border-0 px-3 '>
          <div className='row'>
            <div className='col-8'>
              <img
                src={props.postData.author.profileImg}
                alt='Profile'
                className='rounded-circle me-2 float-start'
                width='65px'
                height='65px'
              />
              <div className='card-head p-2 '>
                <p className='card-title mb-1 fs-6 fw-bold'>
                  {props.postData.author.fullName}
                </p>
                <p className='card-text location text-muted'>
                  {props.postData.location}
                </p>
              </div>
            </div>
            <div className='col-4 d-flex align-content-center justify-content-end'>
              {props.postData.author._id === user.user._id ? (
                <button
                  onClick={() => props.deletePost(props.postData._id)}
                  type='button'
                  className='btn btn-link text-muted   '
                >
                  <i className='fa-solid fa-ellipsis-vertical'></i>
                </button>
              ) : (
                ''
              )}
            </div>
          </div>
        </div>
        <div className='px-3 py-2'>
          <img
            src={props.postData.image}
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
                <button
                  onClick={
                    isPostLiked
                      ? null
                      : () => likePost(props.postData._id, 'like')
                  }
                  type='button'
                  className='card-icons '
                >
                  <i className='fa fa-thumbs-up'></i>
                </button>
              </div>
              <div
                className='me-1'
                onClick={() => likePost(props.postData._id, 'unlike')}
              >
                <button type='button' className=' card-icons'>
                  <i class='fa fa-thumbs-down' aria-hidden='true'></i>
                </button>
              </div>
              <div className='me-5'>
                <button
                  onClick={() =>
                    commentBox ? setCommentBox(false) : setCommentBox(true)
                  }
                  type='button'
                  className='card-icons '
                >
                  <i className='fa fa-comment'></i>
                </button>
              </div>
            </div>
            <div className=' float-end'>
              <span className=''>{props.postData.likes.length} Likes</span>
            </div>
          </div>
          {commentBox ? (
            <div className='row'>
              <div className='col-9'>
                <textarea
                  onChange={(e) => {
                    setComment(e.target.value);
                  }}
                  className='card-text px-1 mt-2'
                  placeholder='Comment'
                ></textarea>
              </div>
              <div className='col-3'>
                <button
                  onClick={() => {
                    submitComment(props.postData._id);
                  }}
                  className='card-text px-1 mt-2'
                >
                  Submit
                </button>
              </div>
            </div>
          ) : null}
          {props.postData.comments.map((comment) => {
            return (
              <div className='row'>
                <div className='col-12'>
                  <p className='card-text px-1 mt-2'>
                    {comment.commentText}-{comment.commentedBy.fullName}
                  </p>
                </div>
              </div>
            );
          })}
          <div className='row'>
            <div className='col-12'>
              <p className='card-text px-1 mt-2'>2 hours ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
