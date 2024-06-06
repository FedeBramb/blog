import { useState, useEffect } from "react";

import useRecipeData from '../../hooks/useRecipeData.js';

import { Link } from 'react-router-dom';

import './SearchBar.css';

/* Barra di ricerca */
const SearchBar = () => {
  // Otteniamo oggetto contenente ogni oggetto ricetta
  const recipeData = useRecipeData(); 
  // Inizializziamo state per il testo da ricercare
  const [searchInput, setSearchInput] = useState('');
  // Inizializziamo state per le ricette filtrare in base alla ricerca
  const [filteredRecipes, setfilteredRecipes] = useState(Object.values(recipeData)); 
  /* Se l'input è vuoto resettiamo lo state searchInput, altrimenti cerchiamo nei dati delle ricette
     se è presente il nome della ricetta o un ingrediente della suddetta.
     Utilizziamo useEffect quando cambiano il searchInput o recipeData */
  useEffect(() => {
    if (searchInput.trim() === '') {
      setfilteredRecipes([]);
    } else {
      const results = Object.entries(recipeData).filter(([key, recipe]) =>
        key.toLowerCase().includes(searchInput.toLowerCase()) ||
        recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(searchInput.toLowerCase()))
      );
      setfilteredRecipes(results);
    }
  }, [searchInput, recipeData]);

  /* Quando un utente clicca su un risultato resetta i due states */
  const handleResultClick = () => {
    setSearchInput('');
    setfilteredRecipes([]);
  };
  

  return (
    <div className="search-form">
      <form>
        <input
          type="search"
          placeholder="Cerca ricetta o ingrediente..."
          title="Cerca per nome della ricetta o ingrediente. I risultati includeranno ricette con nomi o ingredienti corrispondenti."
          className="search-input"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button type="submit" className="search-button" aria-label="Cerca">
          <img src="https://icongr.am/fontawesome/search.svg?size=25&color=1f1f1f" alt="search-icon" className="search-icon"></img>
        </button>
      </form>
      {/*Controlliamo se il container è vuoto altrimenti non lo renderizziamo*/}
      {filteredRecipes.length > 0 && (
        <div className="result-dropdown">
          {filteredRecipes.map(([key]) => (
            <div className="dropdown-item" key={key}>
              <Link to={`/cookbook/${key}`} onClick={handleResultClick}>
                <p>{key.charAt(0).toUpperCase() + key.slice(1).replace("_", " ")}</p>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;