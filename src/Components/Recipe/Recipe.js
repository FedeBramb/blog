import React from "react";
import { useParams } from 'react-router-dom';
import useRecipeData from '../../hooks/useRecipeData.js';
import './Recipe.css';

const Recipe = ({ article, children }) => {
  const { recipeName } = useParams();
  const recipeData = useRecipeData();
  
  // Usa recipeName dall'URL solo se l'articolo non è passato come prop
  const recipe = article || recipeData[recipeName];
  console.log(recipe);
  // Assicurati che la ricetta esista prima di renderizzare il componente
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


/* 

#UI
1. Form di commento: Una sezione dove gli utenti possono inserire i loro commenti.

2. Visualizzazione dei commenti: Un'area per visualizzare i commenti esistenti.

3. Controlli di moderazione: Se desideri consentire ai proprietari del blog di moderare i commenti,
potresti avere pulsanti o opzioni per eliminare o nascondere i commenti inappropriati. 

#JS
1. Gestione degli eventi: Scrivi codice JavaScript per gestire l'invio dei commenti 
e l'aggiornamento dell'interfaccia utente quando vengono aggiunti nuovi commenti.

2. Validazione del modulo: Verifica che i campi del modulo di commento siano 
compilati correttamente prima di consentire l'invio.
*/