import React from 'react';
import './App.css';
import { TitleComponent } from './TitleComponent/TitleComponent';
import {NavBarComponent} from './NavBarComponent/NavBarComponent';
import {LoginComponent} from './LoginComponent/LoginComponent';
//import {SignUpComponent} from './SignUpComponent/SignUpComponent';
function App() {
  return (
    <div className="App">
     <NavBarComponent />
      <TitleComponent title={'SUPER YOU'} />
      <LoginComponent /><br />
    
      
    </div>
  );
}

export default App;
