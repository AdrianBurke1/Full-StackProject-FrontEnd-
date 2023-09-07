import React from 'react';

function Post({ post }) {
  return (
    <div className="post">
      {post.type === 'code' ? (
        <pre>
          <code>{post.content}</code>
        </pre>
      ) : (
        <img src={post.content} alt="Post" />
      )}
      {/* Rest of your post rendering */}
    </div>
  );
}

export default Post;