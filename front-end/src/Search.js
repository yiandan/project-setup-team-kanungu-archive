import React, {useEffect, useState} from 'react'
import ReactDOM from 'react-dom';
import { Link, useLocation } from 'react-router-dom';
import RecipePage from './RecipePage'
import App from './App'
import './Search.css'
import Nav from './Nav'
import SearchBar from './SearchBar'
import Preview from './Preview'

const Search=()=> {
   const [data,setData] = useState([]);
   const location= useLocation();
   //use state to add data
   useEffect(()=>{
    console.log(location.state);
    if (location.state) {
        setData(location.state.data);
        console.log(data);
    }
     
 },[location]);


    return (
        <div className="projectcss">
        <div className="container">
            <h1>Search Page</h1>
            <SearchBar />
            <br></br>
            <div>
            {data && data.map((d,i)=> (
                <Preview recipe={d}/>
            ))}
            </div>
            
        </div>
        </div>
    )
}

export default Search