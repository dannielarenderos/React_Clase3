import React from 'react';
import './ReactFeed.css';
import {posts} from './Posts'
import Post from './Post'


function App() {

const postsComponents = posts.map(post => (<Post


name =  {post.name}
likes = {post.likes}
text = {post.text}
image = {post.image}

/>));

  return (
    <div className="container">
      <h1> React Posts</h1>
      <h2> Posts: </h2>

      <div className="posts">
        {postsComponents}
      </div>
    </div>
  );
}
export default App;
