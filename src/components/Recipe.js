import React from 'react'
//import './App.css';
const Recipe = ({ image, title, calories, ingredients, url }) => {
    return (
        <div className="recipes">
            <img src={image} alt={title}></img>
            <h5>{title}</h5>
            <p>calories:{calories}</p>
            <ul>
                {ingredients.map((ingreditent, index) => (
                    <li key={index}>{ingreditent.text}</li>//it creates li element
                ))}
            </ul>
            <a href={url}>More</a>
        </div>
    )
}

export default Recipe;
