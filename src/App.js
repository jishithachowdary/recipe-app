import './App.css';
import Recipe from './recipe';
import React,{useEffect,useState} from "react";

function App() {

  // const APP_ID="266b1a85";
  // const APP_KEY="7fd1bd44be4585033303f597728d06aa";

  const [recipes,setRecipes]=useState([]);
  const [search,setSearch]=useState("");
  const [query,setQuery]=useState('chicken');
  
  useEffect( () => {
    getRecipes();
  }, [query])

  const getRecipes=async ()=>{
    const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=266b1a85&app_key=7fd1bd44be4585033303f597728d06aa`);
    const data=await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  }

  const updateSearch=(event)=>{
    setSearch(event.target.value);
  }

  const getSearch=e=>{
    e.preventDefault();
    setQuery(search);
    setSearch("");
  }

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
        <button  className="search-button" type="submit">search</button>
      </form>
      <div className="recipes">
        {recipes.map(recipe=>(
          <Recipe key={recipe.recipe.lable} title={recipe.recipe.label} calories={recipe.recipe.calories} ingi={recipe.recipe.ingredients} image={recipe.recipe.image}/>
        ))}
      </div>
      
    </div>
  );
}

export default App;
