import React, { useState } from 'react';

function Posts() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      type: 'code',
      content: 'function example() {\n  // Your code here\n}',
      comments: [],
      likes: 0,
    },
    {
      id: 2,
      type: 'image',
      content: 'project-image.jpg',
      comments: [],
      likes: 0,
    },
  ]);

  const addComment = (postId, comment) => {
    const updatedPosts = posts.map((post) => {
      if (post.id === postId) {
        post.comments.push(comment);
      }
      return post;
    });
    setPosts(updatedPosts);
  };

  const likePost = (postId) => {
    const updatedPosts = posts.map((post) => {
      if (post.id === postId) {
        post.likes += 1;
      }
      return post;
    });
    setPosts(updatedPosts);
  };

  const sharePost = (postId) => {
    // Implement sharing logic (e.g., opening a sharing dialog)
    alert(`Share post with id ${postId}`);
  };

  return (
    <div className="posts">
      {posts.map((post) => (
        <div key={post.id} className="post">
          {post.type === 'code' ? (
            <pre>
              <code>{post.content}</code>
            </pre>
          ) : (
            <img src={post.content} alt="Post" />
          )}
          <div className="actions">
            <button onClick={() => likePost(post.id)}>Like ({post.likes})</button>
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