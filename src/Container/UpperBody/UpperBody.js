// Footer.js
import React from 'react';
import './UpperBody.css';

function UpperBody({children}) {
  return (
    <div className="site-header">
      <div className="upper-body">
          {children}
      </div>
    </div>
  );
}

export default UpperBody;
