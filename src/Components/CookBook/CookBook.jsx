import React from 'react';

import { LazyLoadImage } from 'react-lazy-load-image-component';

import { Link } from 'react-router-dom';

import useRecipeImages from '../../hooks/useRecipeImages';

import './CookBook.css';

const CookBook = () => {
  const recipes = useRecipeImages();
  return (
    <div className='cook-book'>
      {recipes.map(([key, { title, imagesCookBook }], index) => {
        return (
          <Link to={`/cookbook/${key}`} className='link-custom' key={key}>
            <div className='card'>
              <div className='poster-container'>
                <LazyLoadImage 
                  src={require(`../../assets${imagesCookBook}`)} 
                  alt={`pic-${index}`}
                  className='poster'
                />
              </div>
              <div className='title-container'>
                <div className='title-content'>
                  <p className='title-card' key={`${index}-p`}>{title}</p>
                  <button className="read-button">Scopri</button>  
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default CookBook;
