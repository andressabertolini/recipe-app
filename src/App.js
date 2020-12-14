import React,{useEffect, useState} from "react";
import Recipe from './Recipe';
import './App.css';

const App = () => {

  const [counter, setCounter] = useState(0);
  const recipes = [
    {
      item: {
        title: "Recipe 1",
        ingredients: "Ingredients"
      },
      item: {
        title: "Recipe 2",
        ingredients: "Ingredients"
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

      <Recipe />
    </div>
  );
}

export default App;
