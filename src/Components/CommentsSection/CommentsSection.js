// rafce + tab
// implementare con mentions e lato server.

import React, { useState, useEffect } from 'react';

import StarRating from '../StarRating/StarRating';

import './CommentsSection.css';

const CommentsSection = () => {
    //Imposta quattro states, 1.commento digitato, 2.username, 3.rating, 
    // 4. array con tutti i commenti e gli altri states
    const [inputValue, setInputValue] = useState("");
    const [username, setUsername] = useState("");
    const [rating, setRating ] = useState(0);
    const [comments, setComments] = useState([{ username: "Fred", comment: "Bellissima ricetta complimenti!!!", rating: 5 }, { username: "Arci", comment: "Devo Assolutamente provarla! Sembra fantastica!", rating: 5 }]);

    useEffect(() => {
        // Recupera i commenti salvati dal localStorage all'avvio del componente
        const storedComments = localStorage.getItem('comments');
        console.log(storedComments);
        if (storedComments) {
            const parsedComments = JSON.parse(storedComments);
            setComments([...comments, ...parsedComments]);
        }
    }, []); // Esegui solo all'avvio
    

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    }

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    }

    //Funzione di callback handleRatingChange che aggiorna lo stato rating con il nuovo valore 
    // di rating ricevuto dal componente figlio.
    const handleRatingChange = (newRating) => {
        setRating(newRating);
    };

    const handleSubmit = () => {
        if (inputValue.trim() !== "" && username.trim() !== "") {
            // Aggiungi il commento insieme all'username all'array dei commenti
            const newComment = { username, comment: inputValue, rating };
            setComments([...comments, newComment]);
            // Salva i commenti aggiornati nel localStorage
            localStorage.setItem('comments', JSON.stringify([...comments, newComment]));
            // Resetta i campi di input
            setInputValue("");
            setUsername("");
            setRating(0);
        }
    }

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
            <input 
                type="text" 
                className="username-input" 
                placeholder="Username" 
                value={username} 
                onChange={handleUsernameChange} 
            />
            <input 
                type="text" 
                className="comment-input" 
                placeholder="Commento" 
                value={inputValue} 
                onChange={handleInputChange} 
            />
            {/* handleRatingChange viene passata come prop onRatingChange al componente StarRating */}
            <StarRating onRatingChange={handleRatingChange} />
            <button className="button-input" onClick={handleSubmit}>Invia</button>
        </div>
    );
    
}

export default CommentsSection;