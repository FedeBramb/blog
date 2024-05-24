import { useState, useEffect } from 'react';

//Hook personalizzato per recuperare un oggetto con key il nome della ricetta e come proprietà
// un altro oggetto con tutti i dettagli delle ricette.
const useRecipeData = () => {
  const [recipeData, setRecipeData] = useState({});

  useEffect(() => {
    const req = require.context('../assets/ricette', true, /\.json$/);
    const data = {};
    req.keys().forEach((key) => {
      const parts = key.split('/'); // Dividi il percorso utilizzando '/'
      const fileName = parts[parts.length - 1]; // Prendi solo l'ultimo elemento
      const recipeName = fileName.replace('.json', '');
      data[recipeName] = req(key);
    });
    setRecipeData(data);
  }, []);

  return recipeData;
};

export default useRecipeData;
