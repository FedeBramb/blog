// rafce + tab
// implementare con mentions e lato server.

import React, { useState, useEffect } from 'react';

import StarRating from '../StarRating/StarRating';

import './CommentsSection.css';

const CommentsSection = () => {
    /* Imposta quattro states, 1.commento digitato, 2.username, 3.rating, 
         4. array con tutti i commenti (due lasciati predefiniti) e gli altri states. */
    const [inputValue, setInputValue] = useState("");
    const [username, setUsername] = useState("");
    const [rating, setRating ] = useState(0);
    const [comments, setComments] = useState([{ username: "Fred", comment: "Bellissima ricetta complimenti!!!", rating: 5 }, { username: "Arci", comment: "Devo Assolutamente provarla! Sembra fantastica!", rating: 5 }]);

    /* storedComments = commenti presenti nel local storage. 
        se presenti li convertiamo e li salviamo nello state. Solo all'avvio. */
    useEffect(() => {
        const storedComments = localStorage.getItem('comments');
        console.log(storedComments);
        if (storedComments) {
            const parsedComments = JSON.parse(storedComments);
            setComments(parsedComments); // Utilizza solo i commenti salvati nel localStorage
        }
    }, []);

    /* Funzione che imposta l'username */
    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    }

    /* Funzione che imposta il commento */
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    }

    /*Funzione che aggiorna lo state rating 
        con il nuovo valore di rating ricevuto dal componente figlio. */
    const handleRatingChange = (newRating) => {
        setRating(newRating);
    };

    /* Se l'input senza spazi iniziali/finali non è vuoto e anche l'username
       Aggiungi il commento insieme all'username all'array dei commenti
       Salva i commenti aggiornati nel localStorage
       Resetta i campi di input */
    const handleSubmit = () => {
        if (inputValue.trim() !== "" && username.trim() !== "") {
            const newComment = { username, comment: inputValue, rating };
            setComments([...comments, newComment]);
            localStorage.setItem('comments', JSON.stringify([...comments, newComment]));
            setInputValue("");
            setUsername("");
            setRating(0);
        }
    }

    /* Funzione filtre tutti i commenti diversi dall'indice passato come argomento 
        e aggiorna lo state, "eliminando" il commento. Aggiorna il Local Storage */
    const handleDelete = (index) => {
        const updatedComments = comments.filter((_, i) => i !== index);
        setComments(updatedComments);
        // Aggiorna il localStorage con i commenti aggiornati
        localStorage.setItem('comments', JSON.stringify(updatedComments));
    }
    
    // () => handleDelete(index) altrimenti verrebbe chiamata durante il rendering.
    return (
        <div className="comments-view">
            <h2 className='text-gradient'>All Comments</h2>
            <hr className='line'></hr>
            <div className='comments-box'>
                {comments.map((item, index) => (
                    <div key={index} className='comment-container'>
                        <p className='username text-gradient'>{item.username}:</p>
                        <p className='comment'>{item.comment}</p>
                        <div className="rating">
                            {"★".repeat(item.rating) + "☆".repeat(5 - item.rating)}
                        </div>
                        <button onClick={() => handleDelete(index)}>Delete</button>
                    </div>
                ))}
            </div>
            <div className='username-input-container'>
                <label for="username">User:</label>
                <input 
                    type="text" 
                    className="username-input" 
                    placeholder="username..." 
                    value={username} 
                    onChange={handleUsernameChange} 
                />
            </div>
            <div className='comment-input-container'>
                <label for="message">Message:</label>
                <input 
                    type="text" 
                    className="comment-input" 
                    placeholder="commento..." 
                    value={inputValue} 
                    onChange={handleInputChange} 
                />
            </div>
            {/* handleRatingChange viene passata come prop onRatingChange al componente StarRating */}
            <StarRating onRatingChange={handleRatingChange} />
            <button className="button-input" onClick={handleSubmit}>Invia</button>
        </div>
    );
    
}

export default CommentsSection;