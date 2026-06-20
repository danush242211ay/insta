import React from 'react'
import { useState , useEffect} from 'react'
import axios from 'axios';

const Feed = () => {
  
  const [posts, setPosts] = useState([
    {id:1,
    image: "https://i.pinimg.com/736x/9d/48/13/9d481303e42a3c79e4eadb1c6d4183a4.jpg",
    caption: "Beautiful sunset!"
    }
  ])

  useEffect(() => {
    axios.get('http://localhost:3000/posts')
    .then(response => {
      setPosts(response.data.posts);
    })
  }, [])

  return (
    <div className='feed'>
      {posts.map((post, index) => (
        <div className="post" key={index}>
        <img src={post.image} alt="Post" />
        <p>{post.caption}</p>
  </div>
))}
        
    </div>
  )
}

export default Feed