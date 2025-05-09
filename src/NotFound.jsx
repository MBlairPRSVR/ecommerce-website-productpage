import React from 'react';

export default function NotFound() {
  return (
    <div className="text-center mt-5">
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for doesn't exist.</p>
      <a href="/" className="btn btn-primary">Back to Home</a>
    </div>
  );
}
