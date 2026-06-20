import React from 'react'
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

const CreatePost = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    axios.post('http://localhost:3000/create-post', formData)
    .then(() => {
      alert('Post created successfully!');
      navigate('/feed');
    })
      .catch((error) => {
        console.error('Error creating post:', error);
        alert('Error creating post.');
      });
      
  };

  return (
    <section id='create-post'>
        <h1>Create Post</h1>
        <br/>
        <form onSubmit={handleSubmit}>
            <input type="file" name="image" accept="image/*" />
            <br/>
            <input type="text" name="caption" required />
            <br/>
            <button type="submit">Post</button>
        </form>
    </section>
  )
}

export default CreatePost