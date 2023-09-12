import React, { useState } from 'react';
import './Profile.css'; // Import the CSS file

function Profile() {
  // State to manage user's posts
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState('');
  const [imageURL, setImageURL] = useState(''); // State to store the image URL
  const [comment, setComment] = useState(''); // State to store the comment text

  // Function to handle posting a new image or project
  const handlePost = () => {
    // Implement logic to upload the new post (image or project)
    // After uploading, add it to the posts state
    if (newPost.trim() !== '') {
      const updatedPosts = [...posts, { text: newPost, image: imageURL, comments: [] }];
      setPosts(updatedPosts);
      setNewPost(''); // Clear the new post input
      setImageURL(''); // Clear the image URL input
    }
  };

  // Function to handle posting a comment
  const handleComment = (index) => {
    const updatedPosts = [...posts];
    updatedPosts[index].comments.push(comment);
    setPosts(updatedPosts);
    setComment(''); // Clear the comment input
  };

  // Function to handle post deletion
  const handleDeletePost = (index) => {
    const updatedPosts = [...posts];
    updatedPosts.splice(index, 1);
    setPosts(updatedPosts);
  };

  // Function to handle file input change
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Read the image as a data URL and set it as the image URL
      const reader = new FileReader();
      reader.onload = (event) => {
        setImageURL(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Function to handle drag and drop
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile && (droppedFile.type === 'image/jpeg' || droppedFile.type === 'image/png')) {
      // Read the image as a data URL and set it as the image URL
      const reader = new FileReader();
      reader.onload = (event) => {
        setImageURL(event.target.result);
      };
      reader.readAsDataURL(droppedFile);

      // Automatically add the image to the new post
      setNewPost((prevPost) => {
        return prevPost + '\n![Image](file:///' + droppedFile.path.replace(/\\/g, '/') + ')';
      });
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

        {/* Profile name */}
        <h2>Adrian Burke</h2>
      </div>

      <div className="post-section">
        <h3>My Posts</h3>

        {/* Input for posting images or projects */}
        <div
          className="post-input"
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          <textarea
            placeholder="Share your images or projects..."
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
          ></textarea>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            style={{ display: 'none' }} // Hide the file input element
          />
          <label htmlFor="fileInput" className="file-input-label">

            <button
              id="fileInput"
              onClick={(e) => e.preventDefault()}
              style={{ cursor: 'pointer' }}
            >
              Upload Image
            </button>
          </label>
        </div>

        {/* Display the selected image */}
        {imageURL && (
          <img
            src={imageURL}
            alt="Selected"
            style={{ width: '100px', height: 'auto' }}
          />
        )}

        {/* Button to post */}
        <button onClick={handlePost}>Post</button>

        {/* Display user's existing posts */}
        <div className="user-posts">
          {posts.map((post, index) => (
            <div key={index} className="user-post">
              {/* Render the user's post (image or project) */}
              <p>{post.text}</p>
              {post.image && (
                <img
                  src={post.image}
                  alt="User Post"
                  style={{ width: '100px', height: 'auto' }}
                />
              )}

              {/* Input for posting comments */}
              <div className="comment-input">
                <input
                  type="text"
                  placeholder="Add a comment..."
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                />
                <button onClick={() => handleComment(index)}>Comment</button>
              </div>

              {/* Display comments */}
              <div className="comments">
                {post.comments.map((comment, commentIndex) => (
                  <div key={commentIndex} className="comment">
                    <p>{comment}</p>
                  </div>
                ))}
              </div>

              <div className="post-actions">
                <button>Like</button>
                <button onClick={() => handleDeletePost(index)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Profile;
