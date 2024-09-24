// HighlightDetails.js
import React from 'react';
import { useLocation } from 'react-router-dom';

function HighlightDetails() {
  const location = useLocation();
  const { content, imageSrc } = location.state;  // Get data passed via state

  return (
    <div>
      <h1>Highlight Details</h1>
      <img src={imageSrc} alt="Highlight" style={{ width: '100%', height: 'auto' }} />
      <p>{content}</p>
      <button onClick={() => window.history.back()}>Go Back</button> {/* Button to navigate back */}
    </div>
  );
}

export default HighlightDetails;
