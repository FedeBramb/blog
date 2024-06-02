import React from "react";

import { Link } from "react-router-dom";

import { LazyLoadImage } from 'react-lazy-load-image-component';

import useRecipeImages from '../../hooks/useRecipeImages.js';

import './RecipesPrev.css';

function RecipesPrev() {
    const recipeImages = useRecipeImages(); // Chiamata alla funzione useRecipeImages per ottenere l'array delle immagini delle ricette
    return (
        <div className="recipeContainer">
            {recipeImages.map(([key, {image, title, description}], index) => {
              if (index <= 2) {  
                return (
                    <div className="section" key={`section-${index}`}>
                        <div className="title-div">
                            <h1>{title}</h1>
                            <hr className="title-hr" />
                        </div>
                        <Link to={`/cookbook/${key}`} aria-label={`Link to ${title}`}>
                            <LazyLoadImage key={`${title}-${index}`} src={require(`../../assets${image}`)} alt={`pic-${index}`} />
                        </Link>
                        <p>{description}</p>
                        <Link to={`/cookbook/${key}`}>
                            <button className="recipe-button">Leggi la ricetta</button>
                        </Link>
                    </div>
                );
              } else {
                return null;
              }
                
            })}
        </div>
    );
}

export default RecipesPrev;
