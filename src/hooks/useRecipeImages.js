import { useState, useEffect } from 'react';


// Restituisce un array con ogni sott'array key=tomohawk e {title: 'Tomahawk', image: '/imagesPreview/atomahawk.webp'}
const useRecipeImages = () => {
    const [recipeImages, setRecipeImages] = useState([]);

    useEffect(() => {
        const req = require.context('../assets/ricette', true, /\.json$/);
        const data = [];
        req.keys().forEach((key) => {
            const parts = key.split('/'); // Dividi il percorso utilizzando '/'
            const fileName = parts[parts.length - 1]; // Prendi solo l'ultimo elemento
            const recipeName = fileName.replace('.json', '');
            const recipe = req(key);
            data.push([ recipeName,{ title: recipe.title, image: recipe.image, description: recipe.description, imagesCookBook: recipe.imagesCookBook } ]);
        });
        setRecipeImages(data);
    }, []);
    return recipeImages;
};

export default useRecipeImages;

