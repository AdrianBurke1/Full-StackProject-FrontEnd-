import React from 'react';
import './Home.css'; // Import your CSS file for styling
import Post from './Post'; // Import the Post component
import TechSidebar from "./TechSidebar"; // Adjust the path as needed

function Home() {
    const [posts, setPosts] = React.useState([
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
  
    const newestPost = posts[posts.length - 1]; // Get the newest post
  
    return (
      <div className="home">
        <div className="header">
          {/* GitHub logo and navigation */}
          <nav className="nav-links">
          
          </nav>
        </div>
        {/* <div className="main-content">
        
          <Post post={newestPost} />
          
        </div> */}
      </div>
    );
  }
  
  export default Home;
  