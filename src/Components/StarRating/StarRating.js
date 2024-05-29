import React, { useState } from 'react';
import './StarRating.css';

const StarRating = ({ onRatingChange }) => {
  const [rating, setRating] = useState(0);
  // onRatingChange viene utilizzata nella funzione handleStarClick. 
  // Ogni volta che una stella viene cliccata, handleStarClick 
  // chiama onRatingChange con il numero di stelle selezionate
  const handleStarClick = (num) => {
    setRating(num);
    onRatingChange(num);
  };

  return (
    <div className="star-rating">
      {[1, 2, 3, 4, 5].map((num) => (
        <span
          key={num}
          className={`star ${num <= rating ? 'active' : ''}`}
          onClick={() => handleStarClick(num)}
        >
          &#9733;
        </span>
      ))}
    </div>
  );
};

export default StarRating;

