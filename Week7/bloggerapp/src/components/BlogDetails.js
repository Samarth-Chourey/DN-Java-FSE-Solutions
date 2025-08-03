import React from 'react';

function BlogDetails() {
  const content = (
    <div>
      <h1>Blog Details</h1>
      <h2>React Learning</h2>
      <h4>Stephen Biz</h4>
      <p>Welcome to learning React!</p>
      <h2>Installation</h2>
      <h4>Schwezdenier</h4>
      <p>You can install React from npm.</p>
    </div>
  );

  return <div className="v1">{content}</div>;
}

export default BlogDetails;
