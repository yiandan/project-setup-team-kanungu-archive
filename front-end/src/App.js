import logo from './logo.svg';
import './App.css';
import Reach from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home'
import Search from './Search'
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
     </Switch>
   </Router>
 </div>
  );
}

export default App;
//continue to add the 'links' to different site pages also import at top
