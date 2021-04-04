import './SearchBar.css'
import {Link, useHistory} from 'react-router-dom';
import React, {useState} from 'react';
import FeedPost from './FeedPost';
const SearchBar=()=> {

  const [search, setSearch] = useState('');
  const [result, setResult] = useState('');
  const [category, setCategory] = useState('');
  const [difficulty, setDifficulty] = useState('easy');
  const history= useHistory();
  const handleClick = async () => {
    //send value to and get response from mock API
    /*
    await fetch(`https://my.api.mockaroo.com/search/${search}.json?key=4b96ff90`).then(async (response) => {
      if (response.ok) {
        history.push({
          pathname: "/search",
          result: await response.text(),
        });
      }
    });
    */
   console.log(category);
   console.log(difficulty);
   if (category=="") {
     alert("please select a category");
   }
   else {
     //use axios
    await fetch(`http://localhost:5000/recipes/list/${category}/${difficulty}/${search}`).then(async (response) => {
      if (response.ok) {
        history.push({
          pathname: "/search",
          result: await response.text(),
        });
      }
    });
   }

 }

 //save value typed into bar
 const handleSearch =(event) => {
  setSearch(event.target.value);
}

const handleSelect =(event) => {
  setCategory(event.target.value);
}

const handleDifficulty= (event) => {
  setDifficulty(event.target.value);
}
    return (

    <div class="wrapper">
        
        <select name="category" id="dropdown" onChange={handleSelect}>
            <option value="" disabled selected>Select a category</option>
              <option value="name" >Recipe Name</option>
              <option value="ingredient" >Ingredient</option>
              <option value="cuisine">Cuisine</option>
              <option value="person" >Person</option>
            </select>

            <select name="difficulty" id="dropdown" onChange={handleDifficulty}>
            <option value="" disabled selected>Difficulty Level</option>
              <option value="easy" selected>Easy</option>
              <option value="intermediate" >Intermediate</option>
              <option value="advanced" >Advanced</option>
            </select>

    <input placeholder="Search"
           type="text" 
           class="search"
           onChange= {handleSearch}
           />

        <button onClick= {handleClick}>
              Go
            </button>
    </div>
    )
}

export default SearchBar