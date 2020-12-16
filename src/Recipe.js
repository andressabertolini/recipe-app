import React from 'react';


const Recipe = ({title, description, image}) => {
    return(
        <div>
        <img src={`/src/assets/img/${image}`} />
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
}

export default Recipe;