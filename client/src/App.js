import React from 'react';
import Navbar from './components/Navbar'
import "./App.css"
import {BrowserRouter,Route} from 'react-router-dom'
import Home from './components/Screen/Home'
import Profile from './components/Screen/Profile'
import Signin from './components/Screen/Signin'
import Signup from './components/Screen/Signup'

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Route exact path ="/">
        <Home/>
    </Route>
    <Route path ="/signin">
        <Signin/>
    </Route>
    <Route path ="/signup">
        <Signup/>
    </Route>
    <Route path ="/profile">
        <Profile/>
    </Route>
    </BrowserRouter>
  );
}

export default App;
