import React from 'react';
import './Home.css'; // Import your CSS file for styling
import Post from './Post'; // Import the Post component

function Home() {
  const [posts] = React.useState([
    {
      id: 1,
      type: 'code',
      content: 'function example() {\n for (let i = 1; i <= 5; i++)\n}',
      comments: [],
      likes: 5,
    },
    {
      id: 2,
      type: 'image',
      content: 'project-image.jpg',
      comments: ['Nice project!', 'I love it!'],
      likes: 10,
    },
    // Add more example posts here
  ]);

  return (
    <div className="home">
      <div className="header">
        {/* Header component or logo */}
        <h1>Welcome to Tech Space</h1>
      </div>
      <div className="main-content">
        <div className="post-section">
          {/* Post creation and display section */}
          <h2>Latest Posts</h2>
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </div>
        <div className="sidebar-section">
          {/* Sidebar component */}
        </div>
      </div>
    </div>
  );
}

export default Home;
