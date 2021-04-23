import React, {useEffect, useState} from 'react'
import ReactDOM from 'react-dom';
import { Link, useLocation } from 'react-router-dom';
import RecipePage from './RecipePage'
import App from './App'
import './Search.css'
import Nav from './Nav'
import SearchBar from './SearchBar'

//<RecipePage  data={location.result} />
const Search=()=> {
   const [data,setData] = useState([]);
   const location= useLocation();
   //console.log(location.result);
   useEffect(()=>{
    console.log(location.state);
    //data= location.state.data;
    if (location.state) {
        setData(location.state.data);
        console.log(data);
    }
     
 },[location]);
   //let data= location.result;
//     console.log("hi", location.result);
     //data= JSON.parse(JSON.stringify(data));
//     console.log(data);
//   if (location.result && location.result.data) {
//       data= JSON.parse(JSON.stringify(location.result));
//     console.log(data);
//   }


    return (
        <div className="container">
            <h1>Search Page</h1>
            <SearchBar />
            <br></br>
            <div>
            {data && data.map((d,i)=> (
                <RecipePage recipe={d}/>
            ))}
            </div>
            
        </div>
    )
}

export default Search