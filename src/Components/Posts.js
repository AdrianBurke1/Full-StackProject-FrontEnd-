import React, { useState, useEffect } from 'react';
import './Posts.css'; // Import the CSS file for styling

function Posts() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      type: 'code',
      content: 'function example() {\n  // Your code here\n}',
      comments: [],
      likes: 0,
      liked: false, // Track whether the post is liked
    },
    {
      id: 2,
      type: 'image',
      content: 'project-image.jpg',
      comments: [],
      likes: 0,
      liked: false, // Track whether the post is liked
    },
  ]);

  // ...

  const likePost = (postId) => {
    const updatedPosts = posts.map((post) => {
      if (post.id === postId) {
        if (post.liked) {
          // Unlike the post
          post.likes -= 1;
          post.liked = false;
        } else {
          // Like the post
          post.likes += 1;
          post.liked = true;
        }
      }
      return post;
    });
    setPosts(updatedPosts);
  };

  // ...

  return (
    <div className="posts">
      {posts.map((post) => (
        <div key={post.id} className="post">
          {post.type === 'code' ? (
            <pre>
              <code className="code-text">{post.content}</code> {/* Apply the code-text class */}
            </pre>
          ) : (
            <img src={post.content} alt="Post" />
          )}
          <div className="actions">
            <button onClick={() => likePost(post.id)}>
              {post.liked ? 'Unlike' : 'Like'} ({post.likes})
            </button>
            <button onClick={() => sharePost(post.id)}>Share</button>
          </div>
          <div className="comments">
            <h3>Comments:</h3>
            <ul>
              {post.comments.map((comment, index) => (
                <li key={index}>{comment}</li>
              ))}
            </ul>
            <input
              type="text"
              placeholder="Add a comment"
              onKeyUp={(e) => {
                if (e.key === 'Enter' && e.target.value.trim() !== '') {
                  addComment(post.id, e.target.value);
                  e.target.value = '';
                }
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Posts;
