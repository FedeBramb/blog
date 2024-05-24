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
        console.log(imagesCookBook); // Aggiungi questo per loggare imagesCookBook
        return (
          <div className='card' key={key}>
            <div className='poster-container'>
              <LazyLoadImage 
                key={`${title}-${index}`} 
                src={require(`../../assets${imagesCookBook}`)} 
                alt={`pic-${index}`}
                className='poster'
              />
            </div>
            <div className='title-container'>
              <div className='title-content'>
                <Link to={`/cookbook/${key}`} className='link-custom'>
                  <p className='title-card' key={`${index}-p`}>{title}</p>
                  <button className="read-button">Scopri</button>
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CookBook;
