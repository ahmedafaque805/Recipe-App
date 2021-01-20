import { useEffect, useState } from 'react'

import Recipe from './Component/Recipe'
import './App.css';


function App() {

  const App_id = '59052abe';
  const App_key = '2fc80f44d330732cb60716dde3641a47';

  const [resipies, setresipies] = useState([]);
  const [query, setquery] = useState('chicken')
  const [search, setsearch] = useState("")


  useEffect(() => {
    getRecipes()
  }, [query])


  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${App_id}&app_key=${App_key}`)
    const data = await response.json()
    setresipies(data.hits)
  }

  const updateSearch = e => {
    setsearch(e.target.value)
  }

  const getSearch = e => {
    e.preventDefault();
    setquery(search)
    setsearch('')
  }


  return (
    <div>
      <form className="form" onSubmit={getSearch} >
        <input type="text" className="input" value={search}  placeholder="Search . . ." onChange={updateSearch} />
        <button type="submit" className="button" > Search </button>
      </form>
      <div className="recipe" >
        {resipies.map(recipe => (
          <Recipe
            title={recipe.recipe.label}
            cal={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredants={recipe.recipe.ingredients} />
        ))}
      </div>
    </div>
  );
}

export default App;
