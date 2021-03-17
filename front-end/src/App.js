import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home'
import Search from './Search'
import SignedOutLogin from './SignedOutLogin'
import Profile from './Profile'
import MyRecipes from './MyRecipes'
import PostNewRecipe from './PostNewRecipe'
import MyFeed from './MyFeed'
import SavedPosts from './SavedPosts'
import About from './About'
import SignOut from'./SignOut'
import Results from './Results'
import Nav from './Nav'


function App() {
  return (
    /* Reference
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  */
 <div className="container">
   <Router>
     <Switch>
       <Route exact path="/" component={Home} />
       <Route exact path="/search" component={Search} />
       <Route exact path="/Profile" component={Profile} />
       <Route exact path="/MyRecipes" component={MyRecipes} />
       <Route exact path="/PostNewRecipe" component={PostNewRecipe} />
       <Route exact path="/MyFeed" component={MyFeed} />
       <Route exact path="/SavedPosts" component={SavedPosts} />
       <Route exact path="/About" component={About} />
       <Route exact path="/signedOutLogin" component={SignedOutLogin} />
       <Route exact path="/signOut" component={SignOut} />
       <Route exact path="/Results" component={Results} />
       
     </Switch>
   </Router>
 </div>
  );
}

export default App;
//continue to add the 'links' to different site pages also import at top
