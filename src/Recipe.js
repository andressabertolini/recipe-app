import React from 'react';

const Recipe = ({title, description, image}) => {
    return(
        <div className="recipe-item">
            <img src={image} />
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
}

export default Recipe;