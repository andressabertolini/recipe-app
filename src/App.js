import React,{useEffect, useState} from "react";
import Recipe from './Recipe';
import './App.css';

import chefHat from './assets/img/chef-hat.png';

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
      title: "Hot Chocolate",
      description: "Ingredients",
      image: "hot-chocolate.jpg"
      }
    }
  ];

  const[search, setSearch] = useState("");

  return(
    <div className="app">
      <img src={chefHat} />
      <h1>Recipe Book</h1>
      <form className="search-form">
        <input type="text" className="search-bar" value={search}/>
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
