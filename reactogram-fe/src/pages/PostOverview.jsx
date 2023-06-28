import React, { useState, useEffect } from 'react';
import Cards from '../components/Cards';
import Swal from 'sweetalert2';
import axios from 'axios';
import { API_BASE_URL } from '../../src/config';

const PostOverview = () => {
  const [allPost, setAllPost] = useState([]);

  const getAllPosts = async () => {
    const response = await axios.get(`${API_BASE_URL}/allposts`);
    if (response.status === 200) {
      setAllPost(response.data.posts);
    } else {
      Swal.fire({ icon: 'error', title: 'posts cannot be retrive' });
    }
  };
  useEffect(() => {
    getAllPosts();
  }, []);

  const CONFIG_OBJ = {
    headers: {
      'Content-Type': ' application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    },
  };

  const deletePost = async (postId) => {
    const response = await axios.delete(
      `${API_BASE_URL}/deletepost/${postId}`,
      CONFIG_OBJ
    );
    if (response.status === 200) {
      getAllPosts();
    }
  };

  return (
    <div className=' d-flex justify-content-center '>
      <div className='row'>
        {allPost.map((post) => {
          return (
            <div className='col-md-4 mt-3' key={post._id}>
              <Cards
                postData={post}
                deletePost={deletePost}
                getAllPosts={getAllPosts}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PostOverview;
