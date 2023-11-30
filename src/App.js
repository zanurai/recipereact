
import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Recipe from './components/Recipe';

const App = () => {
  const APP_ID = '50747022';
  const APP_KEY = 'd369dbbc52da34229141c317e5ce1cf6';

  const [recipe, setRecipe] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('rice');


  //function for fetching the data
  const getRecipe = async () => {
    const res = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)

    //console.log(res)
    const data = await res.json();
    console.log(data)
    setRecipe(data.hits)

  }

  const updateSearch = (e) => {
    setSearch(e.target.value)
  }

  //addEvent call
  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch('')
  }

  //function call from useeffect
  useEffect(() => {
    getRecipe();
  }, [query])


  return (
    <>
      <div className="App">
        <Navbar />
        <form className="seach-form" onSubmit={getSearch}>
          <input className="input-bar" type='text' placeholder='search' onChange={updateSearch} value={search} />

          <button className="btn" type="submit">Submit</button>
        </form>
        <div className="recipe">
          {recipe.map((recipe, index) => (
            <Recipe
              key={index}
              image={recipe.recipe.image}
              title={recipe.recipe.label}
              calories={recipe.recipe.calories}
              ingredients={recipe.recipe.ingredients}
              url={recipe.recipe.url}
            />
          ))}
        </div>

      </div>
    </>
  );
}

export default App;
