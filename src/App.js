import React from 'react';
import Header from './components/Header';

 import './App.css';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  
  Route,
  Link
} from "react-router-dom";
import Login from './components/Login';
import Detail from './components/Detail';



function App() {
  return (
    <div className="App">
     <Router>
     
     <Detail/>
      
    

     
     </Router>
     
     
     <Home/>
     
     
    </div>
  );
}

export default App;
