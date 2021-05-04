import logo from './logo.svg';
import './App.css';
import {React,useEffect, useState} from 'react';
import { BrowserRouter as Router, Switch, Route, useLocation, Redirect} from 'react-router-dom';
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
import Sidebar from './Sidebar'
import Login from './Login'
import SignUp from './SignUp';
import Axios from "axios";
import EditProfile from './EditProfile';
import ChangePassword from './ChangePassword';
import UploadProfileImg from './UploadProfileImg';
import RecipePage from './RecipePage'



function App() {
  let location = useLocation()
  const [IsSigned, setIsSigned] = useState(false)
  const [user, setUser] = useState(null)

  const [loaded, setLoaded] = useState(false)
  useEffect(()=>{
    console.log(localStorage.getItem('token'))
    Axios({
      method: "GET",
      url: "http://localhost:5000/api/test/user",
      headers: {
        "x-access-token":localStorage.getItem('token')
      }
    }).then((res)=>{

        if(res.data){
          setIsSigned(true)
          setUser(res.data)
        }
        else{

          setIsSigned(false)
          setUser({})

        }
  
        
    }).catch((err=>{
      setIsSigned(false)
      setUser({})
    }))

  },[location])
  useEffect(()=>{
    if(user){
      setLoaded(true)
    }

  },[user])

  if(loaded){
  return (
 <div className="App" id="inner-container">
   <div className="App" id="outer-container">
   <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
     
    </div>
    

     <Switch>
       <Route  exact path="/" component={Home} />
       <Route exact path="/recipe/:id"><RecipePage user ={user} isSigned = {IsSigned}/></Route>
       <Route exact path="/search" component={Search} />

       <Route exact path="/Profile"> {IsSigned ? (<Profile user={user}/>):(<Redirect to="/Login"></Redirect>)} </Route>
      
      
       <Route exact path="/MyRecipes"> {IsSigned ? (<MyRecipes user={user}/>):(<Redirect to="/Login"></Redirect>)} </Route>
       
       <Route exact path="/PostNewRecipe"> {IsSigned ? (<PostNewRecipe user={user}/>):(<Redirect to="/Login"></Redirect>)} </Route>
      
       <Route exact path="/MyFeed"> {IsSigned ? (<MyFeed user={user}/>):(<Redirect to="/Login"></Redirect>)} </Route>
       
       <Route exact path="/SavedPosts"> {IsSigned ? (<SavedPosts user={user}/>):(<Redirect to="/Login"></Redirect>)} </Route>
       <Route exact path="/About" component={About} />
       <Route exact path="/signedOutLogin" component={SignedOutLogin} />
      
       <Route exact path="/signOut"> {IsSigned ? (<SignOut user={user}/>):(<Redirect to="/Login"></Redirect>)} </Route>
       <Route exact path="/Results" component={Results} />
       
       <Route exact path="/Login"> {!IsSigned ? (<Login user={user}/>):(<Redirect to="/"></Redirect>)} </Route>
      
       <Route exact path="/SignUp"> {!IsSigned ? (<SignUp/>):(<Redirect to="/"></Redirect>)} </Route>
       
       <Route exact path="/EditProfile"> {IsSigned ? (<EditProfile user={user}/>):(<Redirect to="/Login"></Redirect>)} </Route>
       
       <Route exact path="/ChangePassword"> {IsSigned ? (<ChangePassword user={user}/>):(<Redirect to="/Login"></Redirect>)} </Route>
       <Route exact path="/UploadProfileImg" component={UploadProfileImg} />
       <Route exact path="/UploadProfileImg"> {IsSigned ? (<UploadProfileImg user={user}/>):(<Redirect to="/Login"></Redirect>)} </Route>
       
       
     </Switch>

   
 </div>


  )
  }
  else{
    return(<div>Loading...</div>)
  }
}

export default App;
//continue to add the 'links' to different site pages also import at top





