import React from 'react';
import './App.css';
//import { TitleComponent } from './component/TitleComponent/TitleComponent';
import {NavBarComponent} from './component/NavBarComponent/NavBarComponent';
import {LoginComponent} from './component/LoginComponent/LoginComponent';
import {SignUpComponent} from './component/SignUpComponent/SignUpComponent';
import {BrowserRouter as Router,Route} from 'react-router-dom'
//import { HomePageComponent } from './component/HomePageComponent/HomePageComponent';
function App() {
  return (
    <div className="App">
     
      
      <Router> 
      <NavBarComponent /><br />
      <Route path = '/login' component ={LoginComponent}></Route>
      <Route path = '/signup' > 
      <SignUpComponent />
      </Route>
      
      </Router>
     
    
      
    </div>
  );
}

export default App;
