import React from "react";

/* Recupera il nome della ricetta dall'url */
import { useParams } from 'react-router-dom';

import useRecipeData from '../../hooks/useRecipeData.js';

import './Recipe.css';


/* Componente che renderizza la ricetta completa, prende come argomento  */
const Recipe = ({ children }) => {
  const { recipeName } = useParams();
  const recipeData = useRecipeData();
  
  const recipe = recipeData[recipeName];
  // Gestione nel caso non esista la ricetta
  if (!recipe) {
    return <div>Ricetta non trovata!</div>;
  }

  return (
    <div className="recipe">
      <h1 className="title">
        {recipe.title}
        <hr className="title-hr" />
      </h1>
      <div className="video-section">
        <iframe
          src={recipe.video}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <div className="ingredients_and_details">
        <div className="ingredients_section">
          <h1 className="recipe_h1">Ingredienti</h1>
          <div className="ingredients">
            {recipe.ingredients.map((p, index) => (
              <li key={index} className="ingredients-p">{p}</li>
            ))}
          </div>
        </div>
        <div className="details">
          <p>Difficoltà: {recipe.difficulty}</p>
          <p>Preparazione: {recipe.prepTime}</p>
          <p>Cottura: {recipe.cookTime}</p>
          <p>Tempo totale: {recipe.totalTime}</p>
          <p>Dosi: {recipe.servings}</p>
        </div>
      </div>
      <div className="instructions-section">
        <h1 className="recipe_h1">Procedimento</h1>
        <div className="miniature-rec">
          <img src={require(`../../assets${recipe.imagesMiniature}`)} alt={recipe.title} />
        </div>
        <div className="instructions">
          {recipe.instructions.map((p, index) => (
            <li key={`li-${index}`} className="instructions-p">{p}</li>
          ))}
        </div>
      </div>
      {children}
    </div>
  );
}

export default Recipe;