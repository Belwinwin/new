import React, { useState } from 'react';

function ImageContainer() {
  const [showImage, setShowImage] = useState(false);

  return (
    <div>
      <div
        onClick={() => setShowImage((prev) => !prev)} // Toggle image visibility
        style={{
          border: '2px solid black',
          padding: '20px',
          textAlign: 'center',
          width: '200px',
          cursor: 'pointer',
          backgroundColor: '#4682b4',
          margin: '10px auto',
        }}
      >
        Resume
      </div>

      {showImage && (
        <img
          src="example.png" // Replace with your actual image path
          alt="Resume"
          style={{ display: 'block', margin: '20px auto', maxWidth: '100%' }}
        />
      )}
    </div>
  );
}

export default ImageContainer;
