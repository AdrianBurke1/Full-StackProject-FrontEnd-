import React, { useState } from 'react';
import './Profile.css'; // Import the CSS file

function Profile() {
  // State to manage user's posts
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState('');
  const [showNewPost, setShowNewPost] = useState(false); // State to control the visibility of the new post

  // Function to handle posting a new image or project
  const handlePost = () => {
    // Implement logic to upload the new post (image or project)
    // After uploading, add it to the posts state and show the new post
    if (newPost.trim() !== '') {
      const updatedPosts = [...posts, newPost];
      setPosts(updatedPosts);
      setNewPost('');
      setShowNewPost(true); // Show the new post
    }
  };

  return (
    <div className="profile-page">
      <div className="profile-header">
        {/* Profile picture */}
        <div className="profile-picture-container">
          <img
            src="https://avatars.githubusercontent.com/u/114108495?v=4" // Replace with your profile picture URL
            alt="Profile"
            className="profile-picture"
          />
        </div>

        {/* Profile headline */}
        <h2>Adrian Burke</h2>
      </div>

      <div className="post-section">
        <h3>My Posts</h3>

        {/* Input for posting images or projects */}
        <textarea
          placeholder="Share your images or projects..."
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
        ></textarea>

        {/* Button to post */}
        <button onClick={handlePost}>Post</button>

        {/* Display the new post if it's available */}
        {showNewPost && (
          <div className="user-post">
            {/* Render the user's post (image or project) */}
            <p>{newPost}</p>
            <div className="post-actions">
              <button>Like</button>
              <button>Comment</button>
              <button>Share</button>
            </div>
          </div>
        )}

        {/* Display user's existing posts */}
        {posts.map((post, index) => (
          <div key={index} className="user-post">
            {/* Render the user's post (image or project) */}
            <p>{post}</p>
            <div className="post-actions">
              <button>Like</button>
              <button>Comment</button>
              <button>Share</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Profile;
