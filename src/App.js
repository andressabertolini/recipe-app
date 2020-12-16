import React,{useEffect, useState} from "react";
import Recipe from './Recipe';
import './App.css';

const App = () => {

  const recipes = [
    {
      item: {
        title: "Pavê",
        description: "Ingredients",
        image: "pave.jpg"
      }
    },
    {
      item: {
      title: "Recipe 2",
      description: "Ingredients",
      image: "jias"
      }
    }
  ];

  useEffect(() =>{
  
  },[]);

  return(
    <div className="App">
      <form className="search-form">
        <input type="text" className="search-bar"/>
        <button type="submit" className="search-button">Search</button>
      </form>

      {recipes.map((recipe, index) => (
        <Recipe 
          key={index}
          title={recipe.item.title} 
          description={recipe.item.description} 
          image={recipe.item.image}
        />
      ))}
      
    </div>
  );
}

export default App;
